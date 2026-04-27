import { useTranslation } from "react-i18next";
import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LanguageToggle() {
  const { i18n, t } = useTranslation();
  const current = (i18n.resolvedLanguage || i18n.language || "en").split("-")[0];

  const change = (lng: "de" | "en") => {
    i18n.changeLanguage(lng);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label={t("language.label")}>
          <Languages className="h-5 w-5" />
          <span className="sr-only">{t("language.label")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => change("de")} className={current === "de" ? "font-semibold" : ""}>
          🇩🇪 {t("language.de")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => change("en")} className={current === "en" ? "font-semibold" : ""}>
          🇬🇧 {t("language.en")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
