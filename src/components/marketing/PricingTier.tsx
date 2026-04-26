import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PricingTierProps {
  name: string;
  price: string;
  priceSuffix?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaLabel: string;
  onCta: () => void;
  badge?: string;
}

export function PricingTier({
  name,
  price,
  priceSuffix,
  description,
  features,
  highlighted,
  ctaLabel,
  onCta,
  badge,
}: PricingTierProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-2xl border bg-card p-6 shadow-sm transition-all",
        highlighted
          ? "border-primary shadow-soft ring-2 ring-primary/20 md:scale-[1.02]"
          : "border-border hover:border-primary/40"
      )}
    >
      {badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-sm">
          {badge}
        </span>
      )}
      <h3 className="font-display text-xl font-bold text-foreground">{name}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      <div className="mt-5 flex items-baseline gap-1">
        <span className="font-display text-4xl font-bold text-foreground">{price}</span>
        {priceSuffix && (
          <span className="text-sm text-muted-foreground">{priceSuffix}</span>
        )}
      </div>
      <ul className="mt-6 flex-1 space-y-3">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-foreground/90">
            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <Button
        onClick={onCta}
        variant={highlighted ? "default" : "outline"}
        className="mt-6 w-full"
      >
        {ctaLabel}
      </Button>
    </div>
  );
}
