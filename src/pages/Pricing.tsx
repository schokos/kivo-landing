import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { MarketingHeader } from "@/components/marketing/MarketingHeader";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";
import { PricingTier } from "@/components/marketing/PricingTier";
import { WaitlistDialog, type WaitlistTier } from "@/components/marketing/WaitlistDialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const tiers = [
  {
    id: "starter" as const,
    name: "Starter",
    price: "0 €",
    priceSuffix: "/ für immer",
    description: "Perfekt zum Reinschnuppern",
    features: [
      "Zugang zu Basis-Lerninhalten",
      "Bis zu 3 Kurse aktiv",
      "Community-Zugang",
      "Lernfortschritt speichern",
    ],
    ctaLabel: "Kostenlos starten",
  },
  {
    id: "pro" as const,
    name: "Pro",
    price: "7,99 €",
    priceSuffix: "/ Monat",
    description: "Für ernsthafte Lernende",
    features: [
      "Alle Kurse uneingeschränkt",
      "Detailliertes Fortschritts-Tracking",
      "Offline-Modus",
      "E-Mail-Support",
      "Werbefrei",
    ],
    ctaLabel: "Auf Warteliste",
    highlighted: true,
    badge: "Beliebt",
  },
  {
    id: "max" as const,
    name: "Max",
    price: "14,99 €",
    priceSuffix: "/ Monat",
    description: "Das volle Kivo-Erlebnis",
    features: [
      "Alles aus Pro",
      "KI-Lerncoach inklusive",
      "Premium-Inhalte & Workshops",
      "Zertifikate nach Abschluss",
      "Priority-Support",
    ],
    ctaLabel: "Auf Warteliste",
  },
  {
    id: "family" as const,
    name: "Familie",
    price: "19,99 €",
    priceSuffix: "/ Monat",
    description: "Für die ganze Familie",
    features: [
      "Bis zu 5 Profile",
      "Eltern-Dashboard",
      "Kinder-Schutz & Altersfilter",
      "Alle Max-Funktionen",
      "Familien-Lernziele",
    ],
    ctaLabel: "Auf Warteliste",
  },
];

const faqs = [
  {
    q: "Wann startet Kivolearn?",
    a: "Wir entwickeln aktuell mit Hochdruck an der Plattform. Trag dich auf der Warteliste ein, dann sagen wir dir Bescheid, sobald es losgeht.",
  },
  {
    q: "Kann ich jederzeit kündigen?",
    a: "Ja. Alle bezahlten Tarife sind monatlich kündbar — keine versteckten Mindestlaufzeiten.",
  },
  {
    q: "Bleibt der Starter-Tarif wirklich kostenlos?",
    a: "Ja. Der Starter-Tarif bleibt dauerhaft gratis und gibt dir vollen Zugang zu unseren Basis-Inhalten.",
  },
  {
    q: "Was unterscheidet Familie von Pro?",
    a: "Familie enthält alle Pro- und Max-Funktionen für bis zu 5 Profile, plus ein Eltern-Dashboard und Kinder-Schutz.",
  },
];

export default function Pricing() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<WaitlistTier>("pro");

  const openWaitlist = (tier: WaitlistTier) => {
    setSelectedTier(tier);
    setDialogOpen(true);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Helmet>
        <title>Preise — Kivolearn</title>
        <meta
          name="description"
          content="Wähle deinen Kivolearn-Tarif: Starter (kostenlos), Pro, Max oder Familie. Faire Preise, jederzeit kündbar."
        />
        <link rel="canonical" href="/pricing" />
      </Helmet>

      <MarketingHeader />

      <main className="flex-1">
        <section className="border-b border-border bg-gradient-to-b from-accent/40 to-background">
          <div className="mx-auto max-w-4xl px-6 py-16 text-center sm:py-20">
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Lerne in deinem Tempo. Zu deinem Preis.
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Wähle den Tarif, der zu dir passt. Starte kostenlos und upgrade, wenn du mehr willst.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {tiers.map((t) => (
              <PricingTier
                key={t.id}
                name={t.name}
                price={t.price}
                priceSuffix={t.priceSuffix}
                description={t.description}
                features={t.features}
                highlighted={t.highlighted}
                badge={t.badge}
                ctaLabel={t.ctaLabel}
                onCta={() => openWaitlist(t.id)}
              />
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Alle Preise inkl. MwSt. — keine versteckten Kosten.
          </p>
        </section>

        <section className="border-t border-border bg-muted/30">
          <div className="mx-auto max-w-3xl px-6 py-16">
            <h2 className="text-center font-display text-3xl font-bold text-foreground">
              Häufige Fragen
            </h2>
            <Accordion type="single" collapsible className="mt-8">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left font-medium">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>

      <MarketingFooter />

      <WaitlistDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        tier={selectedTier}
      />
    </div>
  );
}
