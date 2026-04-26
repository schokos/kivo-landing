import { LegalLayout } from "@/components/marketing/LegalLayout";

export default function Datenschutz() {
  return (
    <LegalLayout title="Datenschutzerklärung" lastUpdated={new Date().toLocaleDateString("de-DE")}>
      <h2>1. Datenschutz auf einen Blick</h2>
      <p>
        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit deinen
        personenbezogenen Daten passiert, wenn du Kivolearn besuchst und nutzt. Personenbezogene
        Daten sind alle Daten, mit denen du persönlich identifiziert werden kannst.
      </p>

      <h2>2. Verantwortliche Stelle</h2>
      <p>
        Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
        [DEIN NAME / FIRMENNAME]<br />
        [STRASSE UND HAUSNUMMER]<br />
        [PLZ UND ORT]<br />
        E-Mail: [E-MAIL-ADRESSE]
      </p>

      <h2>3. Erhebung und Verarbeitung personenbezogener Daten</h2>

      <h3>3.1 Beim Besuch der Website</h3>
      <p>
        Beim Aufruf unserer Website werden automatisch Informationen an unseren Server gesendet
        (z. B. IP-Adresse, Datum und Uhrzeit, verwendeter Browser, Betriebssystem). Diese Daten
        werden zur Sicherstellung der technischen Funktionalität verarbeitet (Art. 6 Abs. 1 lit. f DSGVO).
      </p>

      <h3>3.2 Bei Registrierung und Nutzung des Kontos</h3>
      <p>
        Wenn du ein Konto erstellst, verarbeiten wir die von dir angegebenen Daten (z. B. E-Mail,
        Name, Passwort in verschlüsselter Form), um dir die Plattform zur Verfügung zu stellen
        (Art. 6 Abs. 1 lit. b DSGVO).
      </p>

      <h3>3.3 Lernfortschritt und Aktivitätsdaten</h3>
      <p>
        Zur Bereitstellung der Lernfunktionen speichern wir deinen Lernfortschritt, abgeschlossene
        Kurse und Übungsergebnisse. Diese Daten dienen ausschließlich der Bereitstellung des Dienstes.
      </p>

      <h2>4. Cookies</h2>
      <p>
        Wir verwenden Cookies, um die Funktionalität der Plattform zu gewährleisten und das
        Nutzererlebnis zu verbessern. Details findest du in unserer{" "}
        <a href="/cookies" className="text-primary underline">Cookie-Richtlinie</a>.
      </p>

      <h2>5. Authentifizierung über Drittanbieter</h2>
      <p>
        Wenn du dich über Google anmeldest, werden bestimmte Daten (z. B. E-Mail-Adresse, Name)
        an uns übermittelt. Die Verarbeitung erfolgt auf Grundlage deiner Einwilligung
        (Art. 6 Abs. 1 lit. a DSGVO).
      </p>

      <h2>6. Hosting und Backend-Dienste</h2>
      <p>
        Wir nutzen für Hosting, Datenbank und Authentifizierung Cloud-Dienste, die deine Daten in
        unserem Auftrag verarbeiten (Auftragsverarbeitung gemäß Art. 28 DSGVO).
      </p>

      <h2>7. Weitergabe von Daten</h2>
      <p>
        Eine Übermittlung deiner Daten an Dritte erfolgt nur, wenn dies zur Vertragserfüllung
        erforderlich ist, du eingewilligt hast oder eine gesetzliche Verpflichtung besteht.
      </p>

      <h2>8. Speicherdauer</h2>
      <p>
        Wir speichern deine Daten nur so lange, wie es für die genannten Zwecke erforderlich ist
        oder gesetzliche Aufbewahrungsfristen bestehen. Nach Löschung deines Kontos werden deine
        Daten gemäß den gesetzlichen Vorgaben gelöscht.
      </p>

      <h2>9. Deine Rechte</h2>
      <p>Du hast das Recht auf:</p>
      <ul>
        <li>Auskunft über die zu deiner Person gespeicherten Daten (Art. 15 DSGVO),</li>
        <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO),</li>
        <li>Löschung deiner Daten (Art. 17 DSGVO),</li>
        <li>Einschränkung der Verarbeitung (Art. 18 DSGVO),</li>
        <li>Datenübertragbarkeit (Art. 20 DSGVO),</li>
        <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO),</li>
        <li>Beschwerde bei einer Datenschutz-Aufsichtsbehörde.</li>
      </ul>

      <h2>10. Datensicherheit</h2>
      <p>
        Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um deine Daten gegen
        Manipulation, Verlust oder unbefugten Zugriff zu schützen. Die Datenübertragung im Internet
        erfolgt verschlüsselt (HTTPS).
      </p>

      <h2>11. Änderungen dieser Datenschutzerklärung</h2>
      <p>
        Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen
        rechtlichen Anforderungen entspricht. Die jeweils aktuelle Version ist immer auf dieser
        Seite verfügbar.
      </p>

      <p className="mt-8 text-xs italic">
        Hinweis: Diese Datenschutzerklärung ist eine Vorlage und ersetzt keine individuelle
        Rechtsberatung. Lass sie bei Bedarf von einer fachkundigen Person prüfen.
      </p>
    </LegalLayout>
  );
}
