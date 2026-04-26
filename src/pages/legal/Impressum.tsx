import { LegalLayout } from "@/components/marketing/LegalLayout";

export default function Impressum() {
  return (
    <LegalLayout title="Impressum" lastUpdated={new Date().toLocaleDateString("de-DE")}>
      <h2>Angaben gemäß § 5 TMG</h2>
      <p>
        [DEIN NAME / FIRMENNAME]<br />
        [STRASSE UND HAUSNUMMER]<br />
        [PLZ UND ORT]<br />
        [LAND]
      </p>

      <h2>Vertreten durch</h2>
      <p>[NAME DES VERTRETUNGSBERECHTIGTEN]</p>

      <h2>Kontakt</h2>
      <p>
        Telefon: [TELEFONNUMMER]<br />
        E-Mail: [E-MAIL-ADRESSE]
      </p>

      <h2>Registereintrag (falls vorhanden)</h2>
      <p>
        Eintragung im Handelsregister.<br />
        Registergericht: [REGISTERGERICHT]<br />
        Registernummer: [REGISTERNUMMER]
      </p>

      <h2>Umsatzsteuer-ID (falls vorhanden)</h2>
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
        [USt-IdNr.]
      </p>

      <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
      <p>
        [NAME]<br />
        [ADRESSE]
      </p>

      <h2>Streitschlichtung</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
        <a href="https://ec.europa.eu/consumers/odr/" className="text-primary underline" target="_blank" rel="noreferrer">
          https://ec.europa.eu/consumers/odr/
        </a>
        . Unsere E-Mail-Adresse findest du oben im Impressum.
      </p>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <h2>Haftung für Inhalte</h2>
      <p>
        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach
        den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
        jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen
        oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
      </p>

      <h2>Haftung für Links</h2>
      <p>
        Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen
        Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
        Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
        Seiten verantwortlich.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
        deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
        Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung
        des jeweiligen Autors bzw. Erstellers.
      </p>

      <p className="mt-8 text-xs italic">
        Hinweis: Diese Vorlage ersetzt keine individuelle Rechtsberatung. Bitte ergänze die
        Platzhalter mit deinen tatsächlichen Daten und lass das Impressum bei Bedarf rechtlich prüfen.
      </p>
    </LegalLayout>
  );
}
