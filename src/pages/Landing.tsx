import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  BookOpen,
  Sparkles,
  Trophy,
  Users,
  BarChart3,
  Zap,
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Compass,
  Rocket,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { MarketingHeader } from "@/components/marketing/MarketingHeader";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";
import { DonationSection } from "@/components/marketing/DonationSection";
import { APP_LOGIN_URL, APP_SIGNUP_URL } from "@/lib/links";

export default function Landing() {
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  }, [location.hash]);


  const features = [
    { icon: BookOpen, title: t("landing.features.coursesTitle"), description: t("landing.features.coursesDesc") },
    { icon: Sparkles, title: t("landing.features.aiTitle"), description: t("landing.features.aiDesc") },
    { icon: BarChart3, title: t("landing.features.progressTitle"), description: t("landing.features.progressDesc") },
    { icon: Trophy, title: t("landing.features.streaksTitle"), description: t("landing.features.streaksDesc") },
    { icon: Users, title: t("landing.features.communityTitle"), description: t("landing.features.communityDesc") },
    { icon: Zap, title: t("landing.features.anywhereTitle"), description: t("landing.features.anywhereDesc") },
  ];

  const steps = [
    { icon: Compass, num: "01", title: t("landing.steps.discoverTitle"), description: t("landing.steps.discoverDesc") },
    { icon: BookOpen, num: "02", title: t("landing.steps.learnTitle"), description: t("landing.steps.learnDesc") },
    { icon: Rocket, num: "03", title: t("landing.steps.growTitle"), description: t("landing.steps.growDesc") },
  ];

  const valueItems = t("landing.valueItems", { returnObjects: true }) as string[];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <MarketingHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pb-20 pt-20 sm:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              {t("landing.badge")}
            </div>
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {t("landing.heroTitle1")}{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-primary)" }}>
                {t("landing.heroTitleHighlight")}
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              {t("landing.heroDesc")}
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="h-12 px-8 text-base w-full sm:w-auto shadow-soft" asChild>
                <a href={APP_SIGNUP_URL}>
                {t("landing.ctaStart")}
                <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 text-base w-full sm:w-auto"
                onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t("landing.ctaLearnMore")}
              </Button>
            </div>
          </div>

          {/* Hero preview mockup */}
          <div id="preview" className="relative mx-auto mt-16 max-w-5xl animate-fade-in">
            <div
              className="rounded-2xl border border-border bg-card p-3 shadow-2xl"
              style={{ boxShadow: "var(--shadow-soft), var(--shadow-glow)" }}
            >
              <div className="overflow-hidden rounded-xl bg-muted/50">
                <div className="flex items-center gap-1.5 border-b border-border bg-card/50 px-4 py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-warning/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-success/60" />
                  <span className="ml-3 text-xs text-muted-foreground">app.kivolearn.de</span>
                </div>
                <div className="grid gap-4 p-6 sm:grid-cols-3 sm:p-8">
                  {[
                    { icon: BookOpen, label: "Mathe Grundlagen", progress: 72 },
                    { icon: GraduationCap, label: "Englisch B1", progress: 45 },
                    { icon: Sparkles, label: "Kreatives Schreiben", progress: 88 },
                  ].map((c) => (
                    <div key={c.label} className="rounded-xl border border-border bg-card p-4 text-left shadow-sm">
                      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                        <c.icon className="h-4 w-4" />
                      </div>
                      <p className="font-display text-sm font-semibold text-foreground">{c.label}</p>
                      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                        <div className="h-full rounded-full bg-primary" style={{ width: `${c.progress}%` }} />
                      </div>
                      <p className="mt-2 text-xs text-muted-foreground">{c.progress}%</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -inset-4 -z-10 rounded-3xl blur-3xl" style={{ background: "var(--gradient-primary)", opacity: 0.15 }} />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">{t("landing.featuresTitle")}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{t("landing.featuresDesc")}</p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="bg-muted/40 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">{t("landing.howTitle")}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{t("landing.howDesc")}</p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {steps.map((s) => (
              <div key={s.num} className="relative rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full border-4 border-background bg-primary px-4 py-1 font-display text-xs font-bold text-primary-foreground">
                  {s.num}
                </div>
                <div className="mx-auto mb-4 mt-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">{t("landing.valueTitle")}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{t("landing.valueDesc")}</p>
            <ul className="mt-10 grid gap-4 text-left sm:grid-cols-2">
              {valueItems.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary shadow-soft">
            <GraduationCap className="h-7 w-7 text-primary-foreground" />
          </div>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">{t("landing.finalTitle")}</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">{t("landing.finalDesc")}</p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="h-12 px-8 text-base w-full sm:w-auto shadow-soft" asChild>
              <a href={APP_SIGNUP_URL}>
                {t("landing.finalCta")}
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base w-full sm:w-auto" asChild>
              <a href={APP_LOGIN_URL}>{t("landing.finalLogin")}</a>
            </Button>
          </div>
        </div>
      </section>

      <DonationSection />
      <MarketingFooter />
    </div>
  );
}
