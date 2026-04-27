import { useState } from "react";
import { useTranslation } from "react-i18next";
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

interface WaitlistDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  tier: WaitlistTier;
}

export function WaitlistDialog({ open, onOpenChange, tier }: WaitlistDialogProps) {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const tierLabel = t(
    `waitlist.tier${tier.charAt(0).toUpperCase() + tier.slice(1)}` as any
  );

  const schema = z.object({
    email: z
      .string()
      .trim()
      .min(1, t("waitlist.emailRequired"))
      .email(t("waitlist.emailInvalid"))
      .max(255, t("waitlist.emailTooLong")),
    name: z
      .string()
      .trim()
      .max(100, t("waitlist.nameTooLong"))
      .optional()
      .or(z.literal("")),
  });

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
        toast.error(t("waitlist.duplicate"));
      } else {
        toast.error(t("waitlist.error"));
      }
      return;
    }

    setDone(true);
    setEmail("");
    setName("");
  };

  const handleClose = (next: boolean) => {
    if (!next) setDone(false);
    onOpenChange(next);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent>
        {done ? (
          <div className="flex flex-col items-center gap-3 py-6 text-center">
            <CheckCircle2 className="h-12 w-12 text-primary" />
            <DialogTitle>{t("waitlist.successTitle")}</DialogTitle>
            <DialogDescription>
              {t("waitlist.successDesc", { tier: tierLabel })}
            </DialogDescription>
            <Button onClick={() => handleClose(false)} className="mt-2">
              {t("common.close")}
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>{t("waitlist.titlePrefix")} {tierLabel}</DialogTitle>
              <DialogDescription>
                {t("waitlist.desc", { tier: tierLabel })}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="waitlist-email">{t("waitlist.emailLabel")}</Label>
                <Input
                  id="waitlist-email"
                  type="email"
                  required
                  maxLength={255}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("waitlist.emailPlaceholder")}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="waitlist-name">{t("waitlist.nameLabel")}</Label>
                <Input
                  id="waitlist-name"
                  type="text"
                  maxLength={100}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t("waitlist.namePlaceholder")}
                />
              </div>
              <Button type="submit" disabled={loading} className="w-full">
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {t("waitlist.submit")}
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                {t("waitlist.note")}
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
