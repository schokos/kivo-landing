import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MarketingHeader } from "@/components/marketing/MarketingHeader";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";
import { PricingTier } from "@/components/marketing/PricingTier";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type PaidTier = "pro" | "max" | "family";

export default function Pricing() {
  const { t } = useTranslation();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loadingTier, setLoadingTier] = useState<string | null>(null);

  const startCheckout = async (tier: PaidTier) => {
    if (!user) {
      toast.info("Bitte melde dich an, um ein Abo zu starten.");
      navigate(`/signup?redirect=/pricing`);
      return;
    }
    setLoadingTier(tier);
    try {
      const { data, error } = await supabase.functions.invoke("create-checkout", {
        body: { tier },
      });
      if (error) throw error;
      if (data?.url) window.location.href = data.url;
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Checkout fehlgeschlagen");
      setLoadingTier(null);
    }
  };

  const handleCta = (tierId: string) => {
    if (tierId === "starter") {
      navigate(user ? "/dashboard" : "/signup");
    } else {
      startCheckout(tierId as PaidTier);
    }
  };

  useEffect(() => {
    document.title = t("pricing.pageTitle");
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", t("pricing.metaDesc"));
  }, [t]);

  const tiers = [
    {
      id: "starter" as const,
      name: t("pricing.tiers.starter.name"),
      price: "0 €",
      priceSuffix: t("pricing.forever"),
      description: t("pricing.tiers.starter.description"),
      features: [
        t("pricing.tiers.starter.f1"),
        t("pricing.tiers.starter.f2"),
        t("pricing.tiers.starter.f3"),
        t("pricing.tiers.starter.f4"),
      ],
      ctaLabel: t("pricing.ctaFree"),
    },
    {
      id: "pro" as const,
      name: t("pricing.tiers.pro.name"),
      price: "7,99 €",
      priceSuffix: t("pricing.perMonth"),
      description: t("pricing.tiers.pro.description"),
      features: [
        t("pricing.tiers.pro.f1"),
        t("pricing.tiers.pro.f2"),
        t("pricing.tiers.pro.f3"),
        t("pricing.tiers.pro.f4"),
        t("pricing.tiers.pro.f5"),
      ],
      ctaLabel: t("pricing.ctaWaitlist"),
      highlighted: true,
      badge: t("pricing.badgePopular"),
    },
    {
      id: "max" as const,
      name: t("pricing.tiers.max.name"),
      price: "14,99 €",
      priceSuffix: t("pricing.perMonth"),
      description: t("pricing.tiers.max.description"),
      features: [
        t("pricing.tiers.max.f1"),
        t("pricing.tiers.max.f2"),
        t("pricing.tiers.max.f3"),
        t("pricing.tiers.max.f4"),
        t("pricing.tiers.max.f5"),
      ],
      ctaLabel: t("pricing.ctaWaitlist"),
    },
    {
      id: "family" as const,
      name: t("pricing.tiers.family.name"),
      price: "19,99 €",
      priceSuffix: t("pricing.perMonth"),
      description: t("pricing.tiers.family.description"),
      features: [
        t("pricing.tiers.family.f1"),
        t("pricing.tiers.family.f2"),
        t("pricing.tiers.family.f3"),
        t("pricing.tiers.family.f4"),
        t("pricing.tiers.family.f5"),
      ],
      ctaLabel: t("pricing.ctaWaitlist"),
    },
  ];

  const faqs = [
    { q: t("pricing.faqs.q1"), a: t("pricing.faqs.a1") },
    { q: t("pricing.faqs.q2"), a: t("pricing.faqs.a2") },
    { q: t("pricing.faqs.q3"), a: t("pricing.faqs.a3") },
    { q: t("pricing.faqs.q4"), a: t("pricing.faqs.a4") },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <MarketingHeader />

      <main className="flex-1">
        <section className="border-b border-border bg-gradient-to-b from-accent/40 to-background">
          <div className="mx-auto max-w-4xl px-6 py-16 text-center sm:py-20">
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {t("pricing.headline")}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              {t("pricing.subhead")}
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {tiers.map((tier) => (
              <PricingTier
                key={tier.id}
                name={tier.name}
                price={tier.price}
                priceSuffix={tier.priceSuffix}
                description={tier.description}
                features={tier.features}
                highlighted={tier.highlighted}
                badge={tier.badge}
                ctaLabel={tier.ctaLabel}
                onCta={() => openWaitlist(tier.id)}
              />
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            {t("pricing.taxNote")}
          </p>
        </section>

        <section className="border-t border-border bg-muted/30">
          <div className="mx-auto max-w-3xl px-6 py-16">
            <h2 className="text-center font-display text-3xl font-bold text-foreground">
              {t("pricing.faqTitle")}
            </h2>
            <Accordion type="single" collapsible className="mt-8">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left font-medium">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>

      <MarketingFooter />

      <WaitlistDialog open={dialogOpen} onOpenChange={setDialogOpen} tier={selectedTier} />
    </div>
  );
}
