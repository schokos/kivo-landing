import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Cookie } from "lucide-react";

const STORAGE_KEY = "kivo-cookie-consent";

export type CookieConsent = {
  necessary: true;
  functional: boolean;
  analytics: boolean;
  decidedAt: string;
};

export function getCookieConsent(): CookieConsent | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as CookieConsent;
  } catch {
    return null;
  }
}

function saveConsent(c: Omit<CookieConsent, "decidedAt" | "necessary"> & { necessary?: true }) {
  const consent: CookieConsent = {
    necessary: true,
    functional: !!c.functional,
    analytics: !!c.analytics,
    decidedAt: new Date().toISOString(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  window.dispatchEvent(new CustomEvent("kivo:cookie-consent-changed", { detail: consent }));
}

export function CookieBanner() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [functional, setFunctional] = useState(true);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    const existing = getCookieConsent();
    if (!existing) {
      // small delay so it doesn't flash on first render
      const id = window.setTimeout(() => setVisible(true), 400);
      return () => window.clearTimeout(id);
    } else {
      setFunctional(existing.functional);
      setAnalytics(existing.analytics);
    }
  }, []);

  const acceptAll = () => {
    saveConsent({ functional: true, analytics: true });
    setVisible(false);
    setSettingsOpen(false);
  };

  const rejectAll = () => {
    saveConsent({ functional: false, analytics: false });
    setVisible(false);
    setSettingsOpen(false);
  };

  const saveCustom = () => {
    saveConsent({ functional, analytics });
    setVisible(false);
    setSettingsOpen(false);
  };

  if (!visible && !settingsOpen) return null;

  return (
    <>
      {visible && (
        <div className="fixed inset-x-0 bottom-0 z-[100] p-3 sm:p-4">
          <div className="mx-auto flex max-w-3xl flex-col gap-3 rounded-2xl border border-border bg-card/95 p-4 shadow-2xl backdrop-blur sm:p-5">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Cookie className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-sm font-semibold text-foreground">
                  {t("cookies.bannerTitle")}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t("cookies.bannerDesc")}{" "}
                  <Link to="/cookies" className="text-primary underline underline-offset-2">
                    {t("cookies.learnMore")}
                  </Link>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSettingsOpen(true)}
                className="min-h-[44px] sm:min-h-0"
              >
                {t("cookies.customize")}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={rejectAll}
                className="min-h-[44px] sm:min-h-0"
              >
                {t("cookies.rejectAll")}
              </Button>
              <Button size="sm" onClick={acceptAll} className="min-h-[44px] sm:min-h-0">
                {t("cookies.acceptAll")}
              </Button>
            </div>
          </div>
        </div>
      )}

      <Dialog open={settingsOpen} onOpenChange={setSettingsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t("cookies.settingsTitle")}</DialogTitle>
            <DialogDescription>{t("cookies.bannerDesc")}</DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-2">
            <CategoryRow
              title={t("cookies.catNecessary")}
              desc={t("cookies.catNecessaryDesc")}
              checked
              disabled
              onChange={() => {}}
            />
            <CategoryRow
              title={t("cookies.catFunctional")}
              desc={t("cookies.catFunctionalDesc")}
              checked={functional}
              onChange={setFunctional}
            />
            <CategoryRow
              title={t("cookies.catAnalytics")}
              desc={t("cookies.catAnalyticsDesc")}
              checked={analytics}
              onChange={setAnalytics}
            />
          </div>

          <DialogFooter className="gap-2 sm:gap-2">
            <Button variant="ghost" onClick={rejectAll}>
              {t("cookies.rejectAll")}
            </Button>
            <Button variant="outline" onClick={acceptAll}>
              {t("cookies.acceptAll")}
            </Button>
            <Button onClick={saveCustom}>{t("cookies.save")}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

function CategoryRow({
  title,
  desc,
  checked,
  disabled,
  onChange,
}: {
  title: string;
  desc: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-lg border border-border p-3">
      <div className="flex-1">
        <p className="text-sm font-semibold text-foreground">{title}</p>
        <p className="mt-1 text-xs text-muted-foreground">{desc}</p>
      </div>
      <Switch checked={checked} onCheckedChange={onChange} disabled={disabled} />
    </div>
  );
}
