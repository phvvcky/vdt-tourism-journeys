import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { COMPANY } from "../lib/company";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz – VDT Touristik GmbH Berlin" },
      { name: "description", content: "Datenschutzerklärung der VDT Touristik GmbH Berlin." },
      { property: "og:title", content: "Datenschutz – VDT Touristik GmbH Berlin" },
      {
        property: "og:description",
        content: "Datenschutzerklärung der VDT Touristik GmbH Berlin.",
      },
      { property: "og:url", content: "/datenschutz" },
    ],
    links: [{ rel: "canonical", href: "/datenschutz" }],
  }),
  component: DatenschutzPage,
});

function DatenschutzPage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border bg-vdt-sand py-12 sm:py-16">
        <div className="container-vdt">
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Zurück zur Startseite
          </Link>
          <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Datenschutz
          </h1>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container-vdt max-w-3xl">
          <div className="space-y-8 rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <div>
              <h2 className="font-heading text-xl font-semibold text-card-foreground">
                1. Verantwortlicher
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:
                <br />
                <br />
                {COMPANY.name}
                <br />
                {COMPANY.street}
                <br />
                {COMPANY.zipCity}
                <br />
                Telefon: {COMPANY.phone}
                <br />
                E-Mail: {COMPANY.email}
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-card-foreground">
                2. Erhebung und Verarbeitung personenbezogener Daten
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Beim Besuch unserer Website werden technisch notwendige Daten (z.B. IP-Adresse,
                Browsertyp, Zeitpunkt des Zugriffs) verarbeitet, um die Funktionsfähigkeit der
                Website zu gewährleisten. Wenn Sie uns über das Kontaktformular oder per E-Mail
                kontaktieren, speichern wir die von Ihnen übermittelten Daten zur Bearbeitung Ihrer
                Anfrage.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-card-foreground">
                3. Zweck und Rechtsgrundlage
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Die Verarbeitung Ihrer Daten erfolgt zur Beantwortung Ihrer Anfragen, zur Erfüllung
                von Verträgen und zur Wahrung berechtigter Interessen (z.B. technische Sicherheit
                der Website). Rechtsgrundlage ist Art. 6 DSGVO.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-card-foreground">
                4. Weitergabe von Daten
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Eine Weitergabe Ihrer personenbezogenen Daten an Dritte erfolgt nur, soweit dies zur
                Erfüllung Ihrer Reisebuchung erforderlich ist (z.B. an Fluggesellschaften, Hotels,
                Versicherungen) oder wir gesetzlich dazu verpflichtet sind.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-card-foreground">
                5. Ihre Rechte
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
                Verarbeitung, Datenübertragbarkeit und Widerspruch. Zur Wahrnehmung Ihrer Rechte
                können Sie sich jederzeit an die oben genannten Kontaktdaten wenden.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-card-foreground">
                6. Kontaktformular
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Das Kontaktformular auf dieser Website dient der unverbindlichen Anfrage. Die
                übermittelten Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet
                und nicht ohne Ihre Einwilligung an Dritte weitergegeben. Mit dem Absenden des
                Formulars willigen Sie in diese Verarbeitung ein (Art. 6 Abs. 1 lit. a DSGVO); diese
                Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-card-foreground">
                7. Speicherdauer
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Wir speichern personenbezogene Daten nur so lange, wie es für den jeweiligen Zweck
                erforderlich ist – bei Anfragen über das Kontaktformular in der Regel bis zur
                abschließenden Bearbeitung Ihrer Anfrage bzw. bis zum Abschluss einer daraus
                folgenden Buchung, danach im Rahmen gesetzlicher Aufbewahrungspflichten
                (insbesondere handels- und steuerrechtlich, i.d.R. 6–10 Jahre für
                Geschäftsunterlagen).
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-card-foreground">
                8. Lokale Speicherung im Browser (Local Storage)
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Diese Website speichert Ihre gewählte Sprache (Deutsch/Vietnamesisch/Englisch) im
                sogenannten Local Storage Ihres Browsers, damit Ihre Auswahl bei einem erneuten
                Besuch erhalten bleibt. Dabei werden keine personenbezogenen Daten an uns oder
                Dritte übertragen; die Information verbleibt ausschließlich auf Ihrem Gerät. Sie
                können diese Daten jederzeit über die Einstellungen Ihres Browsers löschen.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-card-foreground">
                9. Hosting
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Diese Website wird bei einem externen Hosting-Anbieter betrieben. Der Anbieter
                verarbeitet dabei technisch notwendige Zugriffsdaten (z.B. IP-Adresse, Zeitpunkt des
                Zugriffs) in unserem Auftrag als Auftragsverarbeiter gemäß Art. 28 DSGVO, um die
                Website sicher und zuverlässig bereitzustellen.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-card-foreground">
                10. Beschwerderecht bei einer Aufsichtsbehörde
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Sie haben unbeschadet anderweitiger Rechtsbehelfe das Recht auf Beschwerde bei einer
                Datenschutzaufsichtsbehörde, insbesondere in dem Mitgliedstaat Ihres gewöhnlichen
                Aufenthaltsorts, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer
                personenbezogenen Daten gegen die DSGVO verstößt. Für Berlin ist dies die Berliner
                Beauftragte für Datenschutz und Informationsfreiheit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
