import { LegalLayout } from "@/components/marketing/LegalLayout";

export default function AGB() {
  return (
    <LegalLayout title="Allgemeine Geschäftsbedingungen" lastUpdated={new Date().toLocaleDateString("de-DE")}>
      <h2>§ 1 Geltungsbereich</h2>
      <p>
        Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen
        [DEIN NAME / FIRMENNAME] (nachfolgend „Anbieter") und den Nutzern (nachfolgend „Nutzer")
        der Lernplattform Kivolearn (nachfolgend „Plattform"), die unter [URL] erreichbar ist.
      </p>

      <h2>§ 2 Vertragsgegenstand</h2>
      <p>
        Der Anbieter stellt dem Nutzer über die Plattform Kivolearn Zugang zu digitalen Lerninhalten,
        Kursen, Übungen und weiteren Funktionen zur Verfügung. Der genaue Funktionsumfang ergibt sich
        aus der jeweils aktuellen Beschreibung auf der Plattform.
      </p>

      <h2>§ 3 Registrierung und Nutzerkonto</h2>
      <p>
        Für die Nutzung bestimmter Funktionen ist eine Registrierung erforderlich. Der Nutzer
        verpflichtet sich, bei der Registrierung wahrheitsgemäße Angaben zu machen. Die Zugangsdaten
        sind vertraulich zu behandeln und nicht an Dritte weiterzugeben.
      </p>

      <h2>§ 4 Kostenlose und kostenpflichtige Leistungen</h2>
      <p>
        Ein Teil der Lerninhalte wird kostenlos angeboten. Daneben können kostenpflichtige Inhalte,
        Abonnements oder Einzelkäufe angeboten werden. Die jeweiligen Preise und Konditionen werden
        vor Abschluss eines kostenpflichtigen Vertrags klar ausgewiesen.
      </p>

      <h2>§ 5 Vertragsschluss</h2>
      <p>
        Die Darstellung der Leistungen auf der Plattform stellt kein bindendes Angebot dar, sondern
        eine Aufforderung zur Abgabe eines Angebots. Durch das Absenden einer Bestellung gibt der
        Nutzer ein verbindliches Angebot ab. Der Vertrag kommt durch die Annahme des Anbieters
        zustande, in der Regel durch eine Bestätigungs-E-Mail.
      </p>

      <h2>§ 6 Widerrufsrecht für Verbraucher</h2>
      <p>
        Verbrauchern steht ein gesetzliches Widerrufsrecht von 14 Tagen zu. Bei digitalen Inhalten
        erlischt das Widerrufsrecht, wenn der Anbieter mit der Ausführung des Vertrags begonnen hat,
        nachdem der Verbraucher ausdrücklich zugestimmt hat und seine Kenntnis davon bestätigt hat,
        dass er durch seine Zustimmung sein Widerrufsrecht verliert.
      </p>

      <h2>§ 7 Pflichten des Nutzers</h2>
      <p>Der Nutzer verpflichtet sich insbesondere:</p>
      <ul>
        <li>keine rechtswidrigen, beleidigenden oder anderweitig unangemessenen Inhalte zu veröffentlichen,</li>
        <li>keine Schadsoftware zu verbreiten,</li>
        <li>die Rechte Dritter (insbesondere Urheber- und Persönlichkeitsrechte) zu beachten,</li>
        <li>die Plattform nicht für unzulässige Werbezwecke zu nutzen.</li>
      </ul>

      <h2>§ 8 Verfügbarkeit</h2>
      <p>
        Der Anbieter bemüht sich um eine möglichst hohe Verfügbarkeit der Plattform, kann jedoch
        keine ununterbrochene Verfügbarkeit garantieren. Wartungsarbeiten und technische Störungen
        können zu vorübergehenden Einschränkungen führen.
      </p>

      <h2>§ 9 Haftung</h2>
      <p>
        Der Anbieter haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie nach den
        Vorschriften des Produkthaftungsgesetzes. Bei leichter Fahrlässigkeit haftet der Anbieter
        nur bei Verletzung wesentlicher Vertragspflichten und beschränkt auf den vorhersehbaren,
        vertragstypischen Schaden.
      </p>

      <h2>§ 10 Kündigung</h2>
      <p>
        Der Nutzer kann sein kostenloses Konto jederzeit ohne Angabe von Gründen löschen.
        Kostenpflichtige Abonnements können zum Ende des jeweiligen Abrechnungszeitraums gekündigt
        werden, sofern nichts anderes vereinbart ist.
      </p>

      <h2>§ 11 Änderungen der AGB</h2>
      <p>
        Der Anbieter behält sich vor, diese AGB zu ändern. Änderungen werden dem Nutzer rechtzeitig
        in geeigneter Form mitgeteilt. Widerspricht der Nutzer den Änderungen nicht innerhalb von
        sechs Wochen nach Mitteilung, gelten die Änderungen als angenommen.
      </p>

      <h2>§ 12 Schlussbestimmungen</h2>
      <p>
        Es gilt das Recht der Bundesrepublik Deutschland. Sollte eine Bestimmung dieser AGB
        unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
      </p>

      <p className="mt-8 text-xs italic">
        Hinweis: Diese AGB sind eine Vorlage und ersetzen keine individuelle Rechtsberatung.
        Bitte lass sie vor produktivem Einsatz von einer Anwältin oder einem Anwalt prüfen.
      </p>
    </LegalLayout>
  );
}
