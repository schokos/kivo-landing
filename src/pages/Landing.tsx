import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
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

const features = [
  {
    icon: BookOpen,
    title: "Interaktive Kurse",
    description:
      "Lerne mit Inhalten, die mitdenken — Quizze, Übungen und sofortiges Feedback in jedem Schritt.",
  },
  {
    icon: Sparkles,
    title: "KI-Lernassistent",
    description:
      "Frag deinen persönlichen Coach alles, wann immer du willst. Erklärungen in deinem Tempo.",
  },
  {
    icon: BarChart3,
    title: "Fortschritt im Blick",
    description:
      "Sieh genau, wo du stehst, was du als Nächstes lernen solltest und was schon sitzt.",
  },
  {
    icon: Trophy,
    title: "Streaks & Ziele",
    description:
      "Bleib motiviert mit täglichen Lernzielen, Belohnungen und einer Lernroutine, die hält.",
  },
  {
    icon: Users,
    title: "Lern-Community",
    description:
      "Tausch dich mit anderen Lernenden aus, stell Fragen und feiere gemeinsam Erfolge.",
  },
  {
    icon: Zap,
    title: "Überall verfügbar",
    description:
      "Web heute, Handy bald — dein Lernfortschritt synchronisiert sich nahtlos auf allen Geräten.",
  },
];

const steps = [
  {
    icon: Compass,
    num: "01",
    title: "Entdecken",
    description: "Wähl ein Thema, das dich begeistert, und finde Kurse, die zu dir passen.",
  },
  {
    icon: BookOpen,
    num: "02",
    title: "Lernen",
    description: "Arbeite dich in deinem Tempo durch Lektionen, Übungen und kleine Challenges.",
  },
  {
    icon: Rocket,
    num: "03",
    title: "Wachsen",
    description: "Sammle Erfolge, vertiefe dein Wissen und werde jeden Tag ein Stück besser.",
  },
];

export default function Landing() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) navigate("/dashboard", { replace: true });
  }, [user, loading, navigate]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <MarketingHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pb-20 pt-20 sm:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Bald verfügbar — sei von Anfang an dabei
            </div>
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Lernen, das wirklich{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-primary)" }}>
                hängen bleibt
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Kivolearn ist die Lernplattform für neugierige Köpfe. Interaktive Kurse,
              persönliche Coaches und eine Community, die dich weiterbringt.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="h-12 px-8 text-base w-full sm:w-auto shadow-soft"
                onClick={() => navigate("/signup")}
              >
                Kostenlos starten
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 text-base w-full sm:w-auto"
                onClick={() => {
                  document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Mehr erfahren
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
                {/* Browser-style mock */}
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
                        <div
                          className="h-full rounded-full bg-primary"
                          style={{ width: `${c.progress}%` }}
                        />
                      </div>
                      <p className="mt-2 text-xs text-muted-foreground">{c.progress}% abgeschlossen</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div
              className="absolute -inset-4 -z-10 rounded-3xl blur-3xl"
              style={{ background: "var(--gradient-primary)", opacity: 0.15 }}
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Warum Kivolearn?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Alles, was du brauchst, um wirklich Fortschritte zu machen — an einem Ort.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft"
              >
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
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              So funktioniert's
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              In drei Schritten von neugierig zu kompetent.
            </p>
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
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Lernen, das zu dir passt
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Keine starren Lehrpläne. Kein Druck. Nur du, dein Tempo und dein Weg.
            </p>
            <ul className="mt-10 grid gap-4 text-left sm:grid-cols-2">
              {[
                "In deinem eigenen Tempo lernen",
                "Sofortiges Feedback bei jeder Übung",
                "Persönlicher KI-Lernassistent",
                "Tägliche Mini-Challenges",
                "Lernfortschritt visualisiert",
                "Bald als Handy-App verfügbar",
              ].map((item) => (
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
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary shadow-soft">
            <GraduationCap className="h-7 w-7 text-primary-foreground" />
          </div>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Bereit, etwas Neues zu lernen?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Starte heute mit Kivolearn — kostenlos und ohne Verpflichtungen.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="h-12 px-8 text-base w-full sm:w-auto shadow-soft"
              onClick={() => navigate("/signup")}
            >
              Jetzt loslegen
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 text-base w-full sm:w-auto"
              onClick={() => navigate("/login")}
            >
              Anmelden
            </Button>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
