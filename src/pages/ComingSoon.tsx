import { useEffect } from "react";
import { GraduationCap, Sparkles, Hammer } from "lucide-react";
import { ThemeToggle } from "@/components/marketing/ThemeToggle";
import { LanguageToggle } from "@/components/marketing/LanguageToggle";

export default function ComingSoon() {
  useEffect(() => {
    document.title = "Kivolearn – Bald verfügbar";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute(
      "content",
      "Kivolearn ist noch in Arbeit. Wir entwickeln mit Hochdruck und sind bald für dich verfügbar.",
    );
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />

      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary shadow-soft">
            <GraduationCap className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-display text-lg font-bold tracking-tight text-foreground">
            Kivo<span className="text-primary">learn</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </header>

      <main className="flex flex-1 items-center justify-center px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            In Arbeit
          </div>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl">
            Bald{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              verfügbar
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Wir arbeiten mit Hochdruck an Kivolearn. Die Entwicklung läuft auf Hochtouren –
            schau bald wieder vorbei, hier wird etwas Großartiges entstehen.
          </p>

          <div className="mt-10 flex items-center justify-center gap-3 text-sm text-muted-foreground">
            <Hammer className="h-4 w-4 text-primary" />
            <span>Aktuell befindet sich die Plattform im Aufbau.</span>
          </div>
        </div>
      </main>

      <footer className="mx-auto w-full max-w-6xl px-6 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Kivolearn
      </footer>
    </div>
  );
}
