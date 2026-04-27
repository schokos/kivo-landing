import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";

export function MarketingHeader() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary shadow-soft">
            <GraduationCap className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-display text-lg font-bold tracking-tight text-foreground">
            Kivo<span className="text-primary">learn</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <a href="/#features" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            {t("nav.features")}
          </a>
          <a href="/#how" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            {t("nav.how")}
          </a>
          <Link to="/pricing" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            {t("nav.pricing")}
          </Link>
        </nav>
        <div className="flex items-center gap-1 sm:gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <Button variant="ghost" size="sm" onClick={() => navigate("/login")}>
            {t("nav.login")}
          </Button>
          <Button size="sm" onClick={() => navigate("/signup")}>
            {t("nav.signup")}
          </Button>
        </div>
      </div>
    </header>
  );
}
