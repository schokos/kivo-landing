import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";

export function MarketingFooter() {
  const year = new Date().getFullYear();

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
              Lernen, das wirklich hängen bleibt. Für neugierige Köpfe von heute und morgen.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-foreground">Produkt</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="/#features" className="text-muted-foreground transition-colors hover:text-foreground">Funktionen</a></li>
              <li><Link to="/pricing" className="text-muted-foreground transition-colors hover:text-foreground">Preise</Link></li>
              <li><a href="/#support" className="text-muted-foreground transition-colors hover:text-foreground">Unterstützen</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-foreground">Rechtliches</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/impressum" className="text-muted-foreground transition-colors hover:text-foreground">Impressum</Link></li>
              <li><Link to="/agb" className="text-muted-foreground transition-colors hover:text-foreground">AGB</Link></li>
              <li><Link to="/datenschutz" className="text-muted-foreground transition-colors hover:text-foreground">Datenschutz</Link></li>
              <li><Link to="/cookies" className="text-muted-foreground transition-colors hover:text-foreground">Cookies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-foreground">Kontakt</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="text-muted-foreground">[E-MAIL]</li>
              <li className="text-muted-foreground">[ADRESSE]</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {year} Kivolearn. Alle Rechte vorbehalten.
          </p>
          <p className="text-xs text-muted-foreground">
            Mit ❤️ in Deutschland gemacht
          </p>
        </div>
      </div>
    </footer>
  );
}
