import { createFileRoute, Link } from "@tanstack/react-router";
import { Plane, MapPin, Ticket, Headphones, Phone, Mail, ArrowRight, MessageCircle } from "lucide-react";
import heroImage from "../assets/hero-travel.jpg";
import vnBanner from "../assets/vn-agentur-banner.jpg";
import iataLogo from "../assets/iata-accredited-agent.png";
import { useLanguage } from "../lib/i18n";
import { COMPANY, WHATSAPP_URL } from "../lib/company";
import { FlightGrid } from "../components/FlightRoutes";
import { RouteMap } from "../components/RouteMap";
import { Testimonials } from "../components/Testimonials";
import { Faq } from "../components/Faq";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VDT Touristik GmbH Berlin – Flugtickets weltweit" },
      {
        name: "description",
        content:
          "Flugtickets ab Berlin mit Vietnam Airlines, Qatar Airways & weiteren Partnern. IATA akkreditierter Agent, Vietnam-Spezialist.",
      },
      { property: "og:title", content: "VDT Touristik GmbH Berlin – Flugtickets weltweit" },
      {
        property: "og:description",
        content:
          "Flugtickets ab Berlin mit Vietnam Airlines, Qatar Airways & weiteren Partnern. IATA akkreditierter Agent, Vietnam-Spezialist.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <HeroSection />
      <HighlightsSection />
      <RoutesSection />
      <RouteMap anchorId="anfrage" />
      <PartnerSection />
      <Testimonials />
      <Faq />
      <ContactPreviewSection />
    </>
  );
}

function HeroSection() {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden bg-vdt-ink">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt={t.hero.title}
          className="h-full w-full object-cover opacity-40 grayscale-[35%]"
          width={1920}
          height={720}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-vdt-ink via-vdt-ink/90 to-vdt-red-dark/70" />
      </div>
      <div className="container-vdt relative py-24 sm:py-32 lg:py-40">
        <div className="max-w-2xl text-primary-foreground">
          <p className="eyebrow inline-flex items-center gap-2 text-vdt-gold">
            <span className="h-px w-8 bg-vdt-gold" />
            {t.hero.badge}
          </p>
          <h1 className="mt-5 font-heading text-4xl font-extrabold sm:text-5xl lg:text-6xl">{t.hero.title}</h1>
          <p className="mt-6 max-w-xl text-lg text-primary-foreground/75">{t.hero.lead}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`tel:${COMPANY.phoneHref}`}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-vdt-red px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-vdt-red/85"
            >
              <Phone className="h-4 w-4" />
              {COMPANY.phone}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-vdt-gold px-5 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-vdt-gold-dark"
            >
              <MessageCircle className="h-4 w-4" />
              {t.common.whatsapp}
            </a>
            <Link
              to="/angebote"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-primary-foreground/25 px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              {t.hero.ctaOffers}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function HighlightsSection() {
  const { t } = useLanguage();
  const icons = [Plane, Ticket, Headphones, MapPin];

  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="container-vdt">
        <div className="mb-10 max-w-2xl">
          <p className="eyebrow text-vdt-red">VDT Touristik</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-foreground sm:text-4xl">{t.why.title}</h2>
          <p className="mt-4 text-muted-foreground">{t.why.lead}</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.why.items.map((item, i) => {
            const Icon = icons[i] ?? Plane;
            return (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
              >
                <div className="mb-4 inline-flex rounded-lg bg-vdt-red-light p-3 text-vdt-red">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-card-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function RoutesSection() {
  const { t } = useLanguage();
  return (
    <section className="bg-secondary py-16 sm:py-20">
      <div className="container-vdt">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow text-vdt-red">Berlin (BER)</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-foreground sm:text-4xl">{t.routes.title}</h2>
            <p className="mt-4 text-muted-foreground">{t.routes.lead}</p>
          </div>
          <Link
            to="/angebote"
            className="inline-flex items-center gap-2 text-sm font-semibold text-vdt-red hover:underline"
          >
            {t.common.allDestinations}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <FlightGrid />
      </div>
    </section>
  );
}

function PartnerSection() {
  const { t } = useLanguage();
  return (
    <section className="border-y border-border bg-card py-12">
      <div className="container-vdt grid items-center gap-8 lg:grid-cols-2">
        <div>
          <p className="eyebrow text-vdt-red">Partner</p>
          <h2 className="mt-2 font-heading text-2xl font-bold text-foreground sm:text-3xl">{t.company.partnerTitle}</h2>
          <p className="mt-3 text-muted-foreground">{t.company.partnerLead}</p>
          <img src={iataLogo} alt={t.common.iata} className="mt-6 h-12 w-auto" loading="lazy" />
        </div>
        <img
          src={vnBanner}
          alt="Vietnam Airlines Agentur in Deutschland"
          className="w-full rounded-xl border border-border"
          loading="lazy"
        />
      </div>
    </section>
  );
}

function ContactPreviewSection() {
  const { t } = useLanguage();
  return (
    <section id="anfrage" className="scroll-mt-20 bg-background py-16 sm:py-20">
      <div className="container-vdt">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-vdt-red">{t.footer.contact}</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-foreground sm:text-4xl">
              {t.contactPreview.title}
            </h2>
            <p className="mt-4 text-muted-foreground">{t.contactPreview.lead}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`tel:${COMPANY.phoneHref}`}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-vdt-ink px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-vdt-red"
              >
                <Phone className="h-4 w-4" />
                {COMPANY.phone}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-vdt-gold px-5 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-vdt-gold-dark"
              >
                <MessageCircle className="h-4 w-4" />
                {t.common.whatsapp}
              </a>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-vdt-red-light p-2 text-vdt-red">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{COMPANY.name}</p>
                  <p className="text-sm text-muted-foreground">{COMPANY.street}</p>
                  <p className="text-sm text-muted-foreground">{COMPANY.zipCity}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-vdt-red-light p-2 text-vdt-red">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{t.contactPreview.email}</p>
                  <a href={`mailto:${COMPANY.email}`} className="text-sm text-muted-foreground hover:text-vdt-red">
                    {COMPANY.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-vdt-red hover:underline"
              >
                {t.contactPreview.cta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-heading text-xl font-semibold text-card-foreground">{t.contactPreview.hoursTitle}</h3>
            <dl className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">{t.contactPreview.monFri}</dt>
                <dd className="font-medium text-foreground">09:00 – 17:00</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">{t.contactPreview.sat}</dt>
                <dd className="font-medium text-foreground">{t.contactPreview.closed}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">{t.contactPreview.sun}</dt>
                <dd className="font-medium text-foreground">{t.contactPreview.closed}</dd>
              </div>
            </dl>
            <p className="mt-4 text-xs text-muted-foreground">{t.contactPreview.hoursNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
