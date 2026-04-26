import { LegalLayout } from "@/components/marketing/LegalLayout";

export default function Cookies() {
  return (
    <LegalLayout title="Cookie-Richtlinie" lastUpdated={new Date().toLocaleDateString("de-DE")}>
      <h2>Was sind Cookies?</h2>
      <p>
        Cookies sind kleine Textdateien, die beim Besuch einer Website auf deinem Endgerät
        gespeichert werden. Sie helfen uns, die Website nutzbar zu machen und dein Erlebnis zu
        verbessern.
      </p>

      <h2>Welche Cookies verwenden wir?</h2>

      <h3>Notwendige Cookies</h3>
      <p>
        Diese Cookies sind für den Betrieb der Plattform technisch erforderlich (z. B. zur
        Anmeldung, Sitzungsverwaltung, Sicherheit). Ohne sie funktionieren wesentliche Bereiche
        der Plattform nicht.
      </p>

      <h3>Funktionale Cookies</h3>
      <p>
        Diese Cookies ermöglichen erweiterte Funktionen wie das Speichern deiner Spracheinstellung
        oder deines bevorzugten Themes (hell/dunkel).
      </p>

      <h3>Analyse-Cookies (sofern aktiviert)</h3>
      <p>
        Solche Cookies helfen uns zu verstehen, wie Besucherinnen und Besucher die Plattform nutzen.
        Sie werden nur mit deiner Einwilligung gesetzt.
      </p>

      <h2>Cookies verwalten</h2>
      <p>
        Du kannst Cookies in den Einstellungen deines Browsers jederzeit löschen oder das Setzen
        neuer Cookies blockieren. Bitte beachte, dass dadurch einzelne Funktionen der Plattform
        nicht oder nur eingeschränkt nutzbar sein können.
      </p>

      <h2>Mehr erfahren</h2>
      <p>
        Weitere Informationen zur Verarbeitung deiner Daten findest du in unserer{" "}
        <a href="/datenschutz" className="text-primary underline">Datenschutzerklärung</a>.
      </p>

      <p className="mt-8 text-xs italic">
        Hinweis: Diese Cookie-Richtlinie ist eine Vorlage. Passe sie an die tatsächlich verwendeten
        Cookies und Drittanbieter-Tools an.
      </p>
    </LegalLayout>
  );
}
