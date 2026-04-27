import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WaitlistDialog } from "./WaitlistDialog";

export function DonationSection() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <section id="support" className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          <Heart className="h-6 w-6 text-primary" />
        </div>
        <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
          {t("donation.title")}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-base text-muted-foreground">
          {t("donation.desc")}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" variant="outline" onClick={() => setOpen(true)}>
            {t("donation.five")}
          </Button>
          <Button size="lg" onClick={() => setOpen(true)}>
            {t("donation.ten")}
          </Button>
          <Button size="lg" variant="outline" onClick={() => setOpen(true)}>
            {t("donation.custom")}
          </Button>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          {t("donation.soon")}
        </p>
      </div>
      <WaitlistDialog open={open} onOpenChange={setOpen} tier="donation" />
    </section>
  );
}
