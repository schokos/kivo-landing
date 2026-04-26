import { useState } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WaitlistDialog } from "./WaitlistDialog";

export function DonationSection() {
  const [open, setOpen] = useState(false);

  return (
    <section id="support" className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          <Heart className="h-6 w-6 text-primary" />
        </div>
        <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
          Unterstütze Kivolearn
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-base text-muted-foreground">
          Kivolearn entsteht mit viel Herz. Wenn dir das Projekt gefällt, kannst du
          uns mit einer Spende beim Wachsen helfen.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" variant="outline" onClick={() => setOpen(true)}>
            5 € spenden
          </Button>
          <Button size="lg" onClick={() => setOpen(true)}>
            10 € spenden
          </Button>
          <Button size="lg" variant="outline" onClick={() => setOpen(true)}>
            Eigener Betrag
          </Button>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Spenden sind bald verfügbar — trage dich ein, um informiert zu werden.
        </p>
      </div>
      <WaitlistDialog open={open} onOpenChange={setOpen} tier="donation" />
    </section>
  );
}
