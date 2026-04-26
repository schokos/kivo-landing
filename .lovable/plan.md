## Ziel

Monetarisierung für Kivolearn vorbereiten: eine eigene **Pricing-Seite** mit 4 Stufen, eine **Warteliste** mit Datenbank-Anbindung und ein **Spenden-Bereich** im Footer. Noch keine echte Zahlung – aber alles so aufgebaut, dass wir später nahtlos auf Lovable Payments umstellen können.

Außerdem: Farb-Korrektur auf **dunkles Grau-Grün** (Kivo-Style).

---

## Was gebaut wird

### 1. Pricing-Seite (`/pricing`)
Neue Route mit 4 Tarif-Karten:

- **Starter** (Kostenlos) — Basis-Lerninhalte, begrenzte Kurse, Community-Zugang
- **Pro** — Alle Kurse, Fortschritts-Tracking, Offline-Modus, Support
- **Max** — Pro + KI-Lerncoach, Premium-Inhalte, Zertifikate, Priority-Support
- **Familie** — Bis zu 5 Profile, Eltern-Dashboard, Kinder-Schutz, alle Max-Features

Jede Karte hat eine "Bald verfügbar – auf Warteliste" Schaltfläche statt echter Bezahlung. Die populärste Stufe (Pro) wird optisch hervorgehoben.

Zusätzlich: FAQ-Abschnitt unten (3–4 typische Fragen zu Abos, Kündigung, Gratisversion).

### 2. Warteliste-Formular
Modal/Dialog, das beim Klick auf einen Tarif öffnet. Felder:
- E-Mail (Pflicht, validiert)
- Name (optional)
- Gewünschter Tarif (vorausgewählt)

Speichert in eine neue `waitlist`-Tabelle. Erfolgsmeldung nach dem Absenden.

### 3. Spenden-Sektion
Neuer Block ganz unten auf der Landing-Page (über dem Footer):
- Kurzer Text "Unterstütze Kivolearn"
- Drei Buttons: 5 €, 10 €, Eigener Betrag
- Aktuell führen die Buttons zu einem "Bald verfügbar"-Hinweis. Die Buttons sind so vorbereitet, dass später Stripe-Checkout angedockt werden kann.

### 4. Navigation & Footer
- "Preise" Link in `MarketingHeader`
- "Preise" und "Unterstützen" Links in `MarketingFooter`

### 5. Farbkorrektur dunkleres Grau-Grün
Anpassung in `src/index.css`:
- Primär-Ton dunkler (z. B. `hsl(155 18% 28%)` statt `38%`)
- Hintergrund-Töne kühler/dunkler im Grau

---

## Technische Details

**Routing** (`src/App.tsx`)
- Neue Route `/pricing` → neue Seite `src/pages/Pricing.tsx`

**Neue Komponenten**
- `src/pages/Pricing.tsx` — die 4-Stufen-Seite mit FAQ
- `src/components/marketing/PricingTier.tsx` — wiederverwendbare Tarif-Karte
- `src/components/marketing/WaitlistDialog.tsx` — Modal mit zod-validiertem Formular
- `src/components/marketing/DonationSection.tsx` — Block für die Landing

**Datenbank** — neue Tabelle `waitlist_signups`:
| Spalte | Typ |
|---|---|
| id | uuid PK |
| email | text (validiert) |
| name | text nullable |
| tier | text (`starter`/`pro`/`max`/`family`) |
| created_at | timestamptz |

RLS:
- INSERT: `public` darf einfügen (öffentliche Anmeldung)
- SELECT: nur Admins (`has_role(auth.uid(), 'admin')`)
- UPDATE/DELETE: keine

Unique-Index auf `(email, tier)` damit niemand sich doppelt für denselben Tarif einträgt.

**Validierung** mit `zod` im Frontend, zusätzliche Längenbegrenzungen.

**Style** — gleiche Tokens wie bestehende Marketing-Seiten (`bg-primary`, `text-foreground`, `MarketingHeader`/`MarketingFooter`).

---

## Was NICHT in diesem Schritt enthalten ist

- Echte Zahlungen (Stripe/Paddle) — separat sobald du soweit bist und Pro-Plan aktiv ist
- Admin-Ansicht für die Warteliste — kommt mit dem Dashboard-Refresh
- E-Mail-Bestätigung an Anmelder — kann später per Resend ergänzt werden