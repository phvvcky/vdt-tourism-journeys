import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt – VDT Touristik GmbH Berlin" },
      { name: "description", content: "Kontaktieren Sie VDT Touristik GmbH in Berlin. Adresse, Telefon, Öffnungszeiten und Kontaktformular." },
      { property: "og:title", content: "Kontakt – VDT Touristik GmbH Berlin" },
      { property: "og:description", content: "Kontaktieren Sie VDT Touristik GmbH in Berlin. Adresse, Telefon, Öffnungszeiten und Kontaktformular." },
      { property: "og:url", content: "/kontakt" },
    ],
    links: [{ rel: "canonical", href: "/kontakt" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border bg-vdt-blue-light py-12 sm:py-16">
        <div className="container-vdt">
          <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            Zurück zur Startseite
          </Link>
          <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Kontakt
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Besuchen Sie uns in unserem Büro in Berlin oder senden Sie uns eine Nachricht. Wir melden uns zeitnah bei Ihnen.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container-vdt">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-1">
              <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <h2 className="font-heading text-xl font-semibold text-card-foreground">Kontaktdaten</h2>
                <div className="mt-4 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-vdt-blue-light p-2 text-vdt-blue">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">VDT Touristik GmbH</p>
                      <p className="text-sm text-muted-foreground">Rhinstraße 185</p>
                      <p className="text-sm text-muted-foreground">13053 Berlin</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-vdt-blue-light p-2 text-vdt-blue">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Telefon</p>
                      <p className="text-sm text-muted-foreground">030 54 39 88 70</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-vdt-blue-light p-2 text-vdt-blue">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">E-Mail</p>
                      <p className="text-sm text-muted-foreground">info@vdt-berlin.de</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-vdt-blue-light p-2 text-vdt-blue">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Öffnungszeiten</p>
                      <p className="text-sm text-muted-foreground">Mo–Fr: 9:00–17:00 Uhr</p>
                      <p className="text-sm text-muted-foreground">Sa–So: geschlossen</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <h3 className="font-heading text-lg font-semibold text-card-foreground">IATA akkreditiert</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  VDT Touristik GmbH ist IATA akkreditierter Agent. Ihr Zeichen für seriöse und professionelle
                  Reisevermittlung.
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm lg:col-span-2">
              <h2 className="font-heading text-xl font-semibold text-card-foreground">Kontaktformular</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Füllen Sie das Formular aus und wir melden uns innerhalb eines Werktags bei Ihnen.
              </p>
              <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-card-foreground">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Ihr Name"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-card-foreground">
                      E-Mail
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="ihre@email.de"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-card-foreground">
                    Telefon (optional)
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="030 123 456 78"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-card-foreground">
                    Betreff
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Wie können wir Ihnen helfen?"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-card-foreground">
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Beschreiben Sie Ihre Reisewünsche..."
                    className="w-full resize-none rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <Send className="h-4 w-4" />
                  Nachricht senden
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
