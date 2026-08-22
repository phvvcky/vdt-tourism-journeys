import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, MapPin, Phone, Mail, Clock, Send, Landmark, MessageCircle } from "lucide-react";
import { useLanguage } from "../lib/i18n";
import { COMPANY, WHATSAPP_URL } from "../lib/company";
import iataLogo from "../assets/iata-accredited-agent.png";
import vnAirlines from "../assets/vietnam-airlines.jpg";


export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt – VDT Touristik GmbH Berlin" },
      { name: "description", content: "Kontaktieren Sie VDT Touristik GmbH in Berlin für Ihr Flugticket. Adresse, Telefon, Öffnungszeiten und Kontaktformular." },
      { property: "og:title", content: "Kontakt – VDT Touristik GmbH Berlin" },
      { property: "og:description", content: "Kontaktieren Sie VDT Touristik GmbH in Berlin für Ihr Flugticket. Adresse, Telefon, Öffnungszeiten und Kontaktformular." },
      { property: "og:url", content: "/kontakt" },
    ],
    links: [{ rel: "canonical", href: "/kontakt" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-background">
      <section className="border-b border-border bg-vdt-sand py-12 sm:py-16">
        <div className="container-vdt">
          <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            {t.common.back}
          </Link>
          <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.contact.title}
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">{t.contact.lead}</p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container-vdt">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-1">
              <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <h2 className="font-heading text-xl font-semibold text-card-foreground">{t.contact.dataTitle}</h2>
                <div className="mt-4 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-vdt-red-light p-2 text-vdt-red">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{COMPANY.name}</p>
                      <p className="text-sm text-muted-foreground">{COMPANY.street}</p>
                      <p className="text-sm text-muted-foreground">{COMPANY.zipCity}</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {t.company.ceo}: {COMPANY.ceo}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-vdt-red-light p-2 text-vdt-red">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{t.contactPreview.phone}</p>
                      <div className="mt-1 flex flex-wrap items-center gap-2">
                        <a
                          href={`tel:${COMPANY.phoneHref}`}
                          className="inline-flex items-center gap-1.5 rounded-md bg-vdt-ink px-3 py-1.5 text-xs font-semibold text-primary-foreground transition-colors hover:bg-vdt-red"
                        >
                          <Phone className="h-3.5 w-3.5" />
                          {COMPANY.phone}
                        </a>
                        <a
                          href={WHATSAPP_URL}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex items-center gap-1.5 rounded-md bg-vdt-gold px-3 py-1.5 text-xs font-semibold text-accent-foreground transition-colors hover:bg-vdt-gold-dark"
                        >
                          <MessageCircle className="h-3.5 w-3.5" />
                          {t.common.whatsapp}
                        </a>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">Viber · WhatsApp · Zalo</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-vdt-red-light p-2 text-vdt-red">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{t.contactPreview.email}</p>
                      <a href={`mailto:${COMPANY.email}`} className="text-sm text-muted-foreground hover:text-primary">
                        {COMPANY.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-vdt-red-light p-2 text-vdt-red">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{t.contact.hours}</p>
                      <p className="text-sm text-muted-foreground">{t.contact.hoursWeek}</p>
                      <p className="text-sm text-muted-foreground">{t.contact.hoursWeekend}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-vdt-red-light p-2 text-vdt-red">
                      <Landmark className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{t.company.bankTitle}</p>
                      <p className="text-sm text-muted-foreground">{COMPANY.bankName}</p>
                      <p className="text-sm text-muted-foreground">IBAN {COMPANY.iban}</p>
                      <p className="text-sm text-muted-foreground">BIC {COMPANY.bic}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <h3 className="font-heading text-lg font-semibold text-card-foreground">{t.company.partnerTitle}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t.company.partnerLead}</p>
                <div className="mt-4 flex flex-wrap items-center gap-4">
                  <img src={vnAirlines} alt="Vietnam Airlines" className="h-10 w-auto" loading="lazy" />
                  <img src={iataLogo} alt={t.common.iata} className="h-10 w-auto" loading="lazy" />
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <h3 className="font-heading text-lg font-semibold text-card-foreground">{t.contact.iataTitle}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t.contact.iataText}</p>
                <p className="mt-3 text-xs text-muted-foreground">
                  {t.company.taxNo} {COMPANY.taxNumber} · {COMPANY.register}
                </p>
              </div>
            </div>


            <div className="rounded-xl border border-border bg-card p-6 shadow-sm lg:col-span-2">
              <h2 className="font-heading text-xl font-semibold text-card-foreground">{t.contact.formTitle}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{t.contact.formLead}</p>
              <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-card-foreground">
                      {t.contact.name}
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder={t.contact.namePlaceholder}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-card-foreground">
                      {t.contact.emailLabel}
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder={t.contact.emailPlaceholder}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-card-foreground">
                    {t.contact.phoneLabel}
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
                    {t.contact.subject}
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder={t.contact.subjectPlaceholder}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-card-foreground">
                    {t.contact.message}
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder={t.contact.messagePlaceholder}
                    className="w-full resize-none rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <Send className="h-4 w-4" />
                  {t.contact.submit}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
