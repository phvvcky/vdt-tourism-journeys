import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum – VDT Touristik GmbH Berlin" },
      { name: "description", content: "Impressum der VDT Touristik GmbH Berlin." },
      { property: "og:title", content: "Impressum – VDT Touristik GmbH Berlin" },
      { property: "og:description", content: "Impressum der VDT Touristik GmbH Berlin." },
      { property: "og:url", content: "/impressum" },
    ],
    links: [{ rel: "canonical", href: "/impressum" }],
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border bg-vdt-blue-light py-12 sm:py-16">
        <div className="container-vdt">
          <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            Zurück zur Startseite
          </Link>
          <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Impressum
          </h1>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container-vdt max-w-3xl">
          <div className="space-y-8 rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <div>
              <h2 className="font-heading text-xl font-semibold text-card-foreground">Angaben gemäß § 5 TMG</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                VDT Touristik GmbH
                <br />
                Rhinstraße 185
                <br />
                13053 Berlin
                <br />
                Deutschland
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-card-foreground">Kontakt</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Telefon: 030 54 39 88 70
                <br />
                Telefax: 030 54 39 88 306
                <br />
                E-Mail: info@vdt-berlin.de
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-card-foreground">Registereintrag</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Eintragung im Handelsregister.
                <br />
                Registergericht: Amtsgericht Charlottenburg (Berlin)
                <br />
                Registernummer: HRB 82334 B
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-card-foreground">Umsatzsteuer-ID</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
                <br />
                wird nachgereicht
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-card-foreground">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                VDT Touristik GmbH
                <br />
                Rhinstraße 185
                <br />
                13053 Berlin
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-card-foreground">Streitschlichtung</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                {" "}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
                . Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
