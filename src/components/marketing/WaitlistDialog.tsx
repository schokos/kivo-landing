import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { Loader2, CheckCircle2 } from "lucide-react";

export type WaitlistTier = "starter" | "pro" | "max" | "family" | "donation";

const tierLabels: Record<WaitlistTier, string> = {
  starter: "Starter",
  pro: "Pro",
  max: "Max",
  family: "Familie",
  donation: "Unterstützer",
};

const schema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "E-Mail ist erforderlich")
    .email("Ungültige E-Mail-Adresse")
    .max(255, "E-Mail zu lang"),
  name: z
    .string()
    .trim()
    .max(100, "Name zu lang")
    .optional()
    .or(z.literal("")),
});

interface WaitlistDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  tier: WaitlistTier;
}

export function WaitlistDialog({ open, onOpenChange, tier }: WaitlistDialogProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse({ email, name });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }

    setLoading(true);
    const { error } = await supabase.from("waitlist_signups").insert({
      email: parsed.data.email.toLowerCase(),
      name: parsed.data.name || null,
      tier,
    });
    setLoading(false);

    if (error) {
      if (error.code === "23505") {
        toast.error("Du bist für diesen Tarif bereits angemeldet.");
      } else {
        toast.error("Etwas ist schiefgelaufen. Bitte später erneut versuchen.");
      }
      return;
    }

    setDone(true);
    setEmail("");
    setName("");
  };

  const handleClose = (next: boolean) => {
    if (!next) {
      setDone(false);
    }
    onOpenChange(next);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent>
        {done ? (
          <div className="flex flex-col items-center gap-3 py-6 text-center">
            <CheckCircle2 className="h-12 w-12 text-primary" />
            <DialogTitle>Du bist auf der Warteliste!</DialogTitle>
            <DialogDescription>
              Wir melden uns, sobald <strong>{tierLabels[tier]}</strong> verfügbar ist.
            </DialogDescription>
            <Button onClick={() => handleClose(false)} className="mt-2">
              Schließen
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Warteliste: {tierLabels[tier]}</DialogTitle>
              <DialogDescription>
                Sei einer der Ersten, die Kivolearn {tierLabels[tier]} nutzen können.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="waitlist-email">E-Mail *</Label>
                <Input
                  id="waitlist-email"
                  type="email"
                  required
                  maxLength={255}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="du@beispiel.de"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="waitlist-name">Name (optional)</Label>
                <Input
                  id="waitlist-name"
                  type="text"
                  maxLength={100}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Dein Name"
                />
              </div>
              <Button type="submit" disabled={loading} className="w-full">
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Auf Warteliste setzen
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                Wir nutzen deine E-Mail nur, um dich zu informieren.
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
