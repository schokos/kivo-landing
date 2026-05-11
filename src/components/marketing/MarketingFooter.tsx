import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { GraduationCap } from "lucide-react";

export function MarketingFooter() {
  const year = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <GraduationCap className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-display text-base font-bold text-foreground">
                Kivo<span className="text-primary">learn</span>
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {t("footer.tagline")}
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-foreground">{t("footer.product")}</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/#features" className="text-muted-foreground transition-colors hover:text-foreground">{t("nav.features")}</Link></li>
              <li><Link to="/pricing" className="text-muted-foreground transition-colors hover:text-foreground">{t("nav.pricing")}</Link></li>
              <li><Link to="/#support" className="text-muted-foreground transition-colors hover:text-foreground">{t("footer.productSupport")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-foreground">{t("footer.legal")}</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/impressum" className="text-muted-foreground transition-colors hover:text-foreground">{t("footer.impressum")}</Link></li>
              <li><Link to="/agb" className="text-muted-foreground transition-colors hover:text-foreground">{t("footer.agb")}</Link></li>
              <li><Link to="/datenschutz" className="text-muted-foreground transition-colors hover:text-foreground">{t("footer.privacy")}</Link></li>
              <li><Link to="/cookies" className="text-muted-foreground transition-colors hover:text-foreground">{t("footer.cookies")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-foreground">{t("footer.contact")}</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="text-muted-foreground">[E-MAIL]</li>
              <li className="text-muted-foreground">[ADRESSE]</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            {t("footer.rights", { year })}
          </p>
          <p className="text-xs text-muted-foreground">
            {t("footer.madeIn")}
          </p>
        </div>
      </div>
    </footer>
  );
}
