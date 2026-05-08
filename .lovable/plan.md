
# Setup: Kivo Landing + Kivo App auf GitHub Pages

## Architektur

```text
GitHub Account
├── kivo-landing  (Vanilla HTML/CSS/JS — baust du mit Claude)
│   └── live unter:  https://<user>.github.io/kivo-landing/
│       oder Custom Domain:  https://kivolearn.de
│
└── kivo-app      (dieses Lovable-Projekt, React/Vite)
    └── live unter:  https://<user>.github.io/kivo-app/
        oder Subdomain:  https://app.kivolearn.de
```

Landing = nur Marketing (Hero, Features, Pricing-Anzeige, Footer).
App = alles mit Login: Dashboard, Clients, Templates, Proposals, Settings, Stripe-Checkout, Spenden.

## Was in DIESEM Projekt geändert werden muss

Damit die Lovable-App als zweites GitHub-Pages-Repo unter einem Sub-Pfad läuft und alle Marketing-Routen auf die externe Landing zeigen.

### 1. Marketing-Routen aus der App entfernen
Die App soll keine eigene Landing/Pricing/Legal mehr ausliefern — die liegen drüben im Vanilla-Repo.

- `src/App.tsx`: Routen `/`, `/pricing`, `/impressum`, `/agb`, `/datenschutz`, `/cookies` entfernen
- Root `/` macht stattdessen einen Redirect:
  - eingeloggt → `/dashboard`
  - nicht eingeloggt → `window.location.href = "https://kivolearn.de"` (deine Landing-URL)
- `MarketingHeader`, `MarketingFooter`, `Landing.tsx`, `Pricing.tsx`, `pages/legal/*`, `DonationSection`, `WaitlistDialog` löschen oder ungenutzt lassen
- `CookieBanner` bleibt (gehört zur App)

### 2. Vite für GitHub-Pages-Subpfad konfigurieren
`vite.config.ts`: `base: "/kivo-app/"` setzen (oder `"/"` falls du eine eigene Subdomain `app.kivolearn.de` nutzt — empfohlen).

### 3. React Router an base anpassen
`<BrowserRouter basename="/kivo-app">` (entfällt bei eigener Subdomain).

### 4. SPA-Fallback für GitHub Pages
GitHub Pages kennt keine SPA-Rewrites. Standard-Trick:
- `public/404.html` anlegen, das per kleinem Script die URL umschreibt und auf `index.html` weiterleitet
- Snippet in `index.html` ergänzt das wieder zurück
(Standard "spa-github-pages"-Pattern, ~15 Zeilen)

### 5. GitHub Actions Workflow
`.github/workflows/deploy.yml` anlegen:
- Trigger: push auf `main`
- `bun install` → `bun run build` → Deploy `dist/` nach `gh-pages` Branch
- Standard-Action: `peaceiris/actions-gh-pages` oder `actions/deploy-pages`

### 6. Cross-Links setzen
In der App:
- Logout → `https://kivolearn.de`
- "Pricing"-Link in der App-Sidebar (falls gewünscht) → `https://kivolearn.de/#pricing`
- Login/Signup-Buttons der Landing zeigen drüben auf `https://app.kivolearn.de/login` bzw. `/signup`

### 7. Stripe Success/Cancel URLs prüfen
`create-checkout` und `create-donation` Edge Functions: `success_url` / `cancel_url` müssen auf die App-Domain zeigen, nicht auf die Landing.

### 8. Supabase Auth Redirect URLs
In Supabase Auth-Settings: `Site URL` und `Redirect URLs` auf die App-Domain (`https://app.kivolearn.de` bzw. die GitHub-Pages-URL) setzen. Sonst schlägt Email-Confirm/Password-Reset fehl.

## Empfehlung: Custom Subdomains statt Pfad-Hosting

Pfad-Hosting (`github.io/kivo-app/`) macht Routing, Cookies und Stripe-Redirects fummelig. **Mit zwei Subdomains** (`kivolearn.de` + `app.kivolearn.de`) entfallen die Punkte 2 + 3 komplett und alles funktioniert wie hier in der Preview. GitHub Pages unterstützt Custom Domains pro Repo via `CNAME`-Datei.

## Was ich in diesem Repo NICHT mache

- Vanilla-Landing-Code schreiben (machst du in `kivo-landing` mit Claude)
- DNS/Domain-Setup (machst du bei deinem Registrar)

## Reihenfolge der Umsetzung in diesem Projekt

1. Marketing-Routen + Komponenten entfernen
2. Root-Redirect zu externer Landing einbauen
3. Vite `base` + Router `basename` (nur falls Pfad-Hosting)
4. `public/404.html` + Snippet in `index.html`
5. `.github/workflows/deploy.yml`
6. Stripe + Supabase Redirect-URLs anpassen

Sag mir bitte vor dem Implementieren noch: **Subdomain (`app.kivolearn.de`) oder Pfad (`github.io/kivo-app/`)?** — davon hängen Schritt 2/3 ab.
