## Kivolearn Landing-Page

Wir verwandeln die Startseite in eine Marketing-Site für **Kivolearn** (Lernplattform), behalten aber die bestehende QuoteKit-Struktur intakt im Hintergrund — falls du sie später entfernen willst, geht das in einem separaten Schritt.

### Was du bekommst

**1. Neues grau-grünes Design-System**
- Primärfarbe: gedämpftes Sage-/Moosgrün (`hsl(150 20% 45%)`)
- Hintergründe: warme Grautöne mit leichten Grünstich-Akzenten
- Light- und Dark-Mode beide angepasst
- Sanfte Verläufe und weiche Schatten in Grüntönen

**2. Neue Landing-Page (`/`) — komplett überarbeitet für Kivolearn**

```text
┌─────────────────────────────────────────────┐
│  Logo Kivolearn          [Login] [Starten]  │  ← Header
├─────────────────────────────────────────────┤
│                                             │
│   Lernen, das wirklich hängen bleibt        │  ← Hero
│   Subline + 2 CTAs                          │
│   [Vorschau-Mockup der Plattform]           │
│                                             │
├─────────────────────────────────────────────┤
│   Warum Kivolearn?                          │  ← Features
│   [6 Feature-Karten mit Icons]              │
├─────────────────────────────────────────────┤
│   So funktioniert's                         │  ← 3-Schritt-Erklärung
│   01 Entdecken → 02 Lernen → 03 Wachsen     │
├─────────────────────────────────────────────┤
│   Plattform-Vorschau                        │  ← Mock-Screenshot-Bereich
│   (Placeholder-Bild bis App fertig ist)     │
├─────────────────────────────────────────────┤
│   Bereit loszulernen?  [Jetzt starten]      │  ← Final CTA
├─────────────────────────────────────────────┤
│   Kivolearn  |  Über  Kontakt              │  ← Footer mit
│   Impressum  AGB  Datenschutz  Cookies      │     Rechts-Links
└─────────────────────────────────────────────┘
```

Inhaltliche Anpassung: weg von Angeboten/Proposals, hin zu **Kursen, Lernfortschritt, interaktiven Inhalten, Community** — passend für eine Lernplattform.

**3. Rechtliche Seiten (Deutsche Vorlagen mit Platzhaltern)**
- `/impressum` — § 5 TMG-Vorlage mit `[DEIN NAME]`, `[DEINE ADRESSE]`, `[E-MAIL]` etc.
- `/agb` — Standard-AGB-Vorlage für digitale Dienstleistungen, vorbereitet für spätere Käufe
- `/datenschutz` — DSGVO-konforme Vorlage (erwähnt Cookies, Auth, Analytics)
- `/cookies` — kurze Cookie-Richtlinie

Alle 4 Seiten teilen sich ein gemeinsames `LegalLayout` mit Header + Footer.

**4. Wiederverwendbare Komponenten**
- `MarketingHeader` — Logo, Nav, Login/Signup-Buttons
- `MarketingFooter` — Spalten mit Produkt / Rechtliches / Kontakt + Links
- Beide werden auf Landing + Rechts-Seiten verwendet

### Was NICHT im Plan ist (später)
- Kauf-/Bezahlfunktion (vorbereitet im AGB-Text, technisch erst wenn nötig)
- Echte Plattform-Features (Kurse, Login-bereich) — das machen wir wenn du soweit bist
- Mobile App (Capacitor) — kommt wenn die Web-Plattform stabil läuft
- Tatsächliches Kivolearn-Logo (nutzen Text-Wortmarke, du kannst Logo später hochladen)

---

### Technische Details

**Geänderte Dateien:**
- `src/index.css` — neue HSL-Farb-Tokens für grau-grünes Theme (light + dark)
- `tailwind.config.ts` — ggf. zusätzliche `sage`-Farbskala
- `src/pages/Landing.tsx` — Inhalt komplett auf Kivolearn umgeschrieben
- `src/App.tsx` — 4 neue Routen registriert

**Neue Dateien:**
- `src/components/marketing/MarketingHeader.tsx`
- `src/components/marketing/MarketingFooter.tsx`
- `src/components/marketing/LegalLayout.tsx`
- `src/pages/legal/Impressum.tsx`
- `src/pages/legal/AGB.tsx`
- `src/pages/legal/Datenschutz.tsx`
- `src/pages/legal/Cookies.tsx`

**Design-System-Disziplin:** Alle Farben über semantische Tokens (`bg-primary`, `text-foreground` etc.) — keine hartcodierten Farbklassen wie `bg-green-500`. So bleibt das Theme zentral steuerbar.

**Login-/Signup-Buttons:** Verlinken vorerst auf die existierenden `/login` und `/signup` Seiten. Du kannst später entscheiden, ob diese auch ein Kivolearn-Redesign bekommen.
