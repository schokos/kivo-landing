import { useState } from "react";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

interface DonationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  presetAmount?: number | null; // in euros
}

export function DonationDialog({ open, onOpenChange, presetAmount }: DonationDialogProps) {
  const { t } = useTranslation();
  const [amount, setAmount] = useState<string>(presetAmount ? String(presetAmount) : "");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const schema = z.object({
    amount: z.coerce.number().min(1, "Min. 1 €").max(1000, "Max. 1000 €"),
    email: z.string().trim().email("Ungültige E-Mail").max(255),
    name: z.string().trim().max(100).optional().or(z.literal("")),
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const finalAmount = presetAmount ?? Number(amount);
    const parsed = schema.safeParse({ amount: finalAmount, email, name });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("create-donation", {
        body: {
          amount: Math.round(parsed.data.amount * 100),
          email: parsed.data.email.toLowerCase(),
          name: parsed.data.name || null,
        },
      });
      if (error) throw error;
      if (data?.url) {
        window.location.href = data.url;
      } else {
        throw new Error("Keine Checkout-URL erhalten");
      }
    } catch (err) {
      console.error(err);
      toast.error(err instanceof Error ? err.message : "Fehler beim Starten der Spende");
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {presetAmount ? `${presetAmount} € spenden` : t("donation.title")}
          </DialogTitle>
          <DialogDescription>
            {t("donation.desc")}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          {!presetAmount && (
            <div className="space-y-2">
              <Label htmlFor="donation-amount">Betrag (€)</Label>
              <Input
                id="donation-amount"
                type="number"
                min="1"
                max="1000"
                step="1"
                required
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="10"
              />
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="donation-email">E-Mail</Label>
            <Input
              id="donation-email"
              type="email"
              required
              maxLength={255}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="du@example.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="donation-name">Name (optional)</Label>
            <Input
              id="donation-name"
              type="text"
              maxLength={100}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Vor- und Nachname"
            />
          </div>
          <Button type="submit" disabled={loading} className="w-full">
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Weiter zur Bezahlung
          </Button>
          <p className="text-center text-xs text-muted-foreground">
            Sichere Bezahlung über Stripe. Du wirst zur Stripe-Checkout-Seite weitergeleitet.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
