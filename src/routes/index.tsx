import { createFileRoute, Link } from "@tanstack/react-router";
import { Plane, MapPin, Ticket, Headphones, Phone, Mail, ArrowRight } from "lucide-react";
import heroImage from "../assets/hero-travel.jpg";
// Platzhalterbilder – werden später durch eigene Fotos (Büro, Team, Standort Berlin) ersetzt
import routeHanoi from "../assets/offer-vietnam.jpg";
import routeSaigon from "../assets/offer-city.jpg";
import routeBangkok from "../assets/offer-beach.jpg";
import vnBanner from "../assets/vn-agentur-banner.jpg";
import iataLogo from "../assets/iata-accredited-agent.png";
import { useLanguage } from "../lib/i18n";
import { COMPANY } from "../lib/company";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VDT Touristik GmbH Berlin – Flugtickets weltweit" },
      { name: "description", content: "Flugtickets ab Berlin mit Vietnam Airlines, Qatar Airways & weiteren Partnern. IATA akkreditierter Agent, Vietnam-Spezialist." },
      { property: "og:title", content: "VDT Touristik GmbH Berlin – Flugtickets weltweit" },
      { property: "og:description", content: "Flugtickets ab Berlin mit Vietnam Airlines, Qatar Airways & weiteren Partnern. IATA akkreditierter Agent, Vietnam-Spezialist." },
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
      <RoutesPreviewSection />
      <ContactPreviewSection />
    </>
  );
}

function HeroSection() {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt={t.hero.title}
          className="h-full w-full object-cover"
          width={1920}
          height={720}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-vdt-blue-dark/90 via-vdt-blue/80 to-vdt-blue/60" />
      </div>
      <div className="container-vdt relative py-24 sm:py-32 lg:py-40">
        <div className="max-w-2xl text-primary-foreground">
          <p className="mb-4 inline-block rounded-full bg-vdt-red/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            {t.hero.badge}
          </p>
          <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">{t.hero.title}</h1>
          <p className="mt-6 text-lg text-primary-foreground/90 sm:text-xl">{t.hero.lead}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/kontakt"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-vdt-red px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-vdt-red/90"
            >
              <Phone className="h-4 w-4" />
              {t.hero.ctaContact}
            </Link>
            <Link
              to="/angebote"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-primary-foreground/30 bg-primary-foreground/10 px-5 py-3 text-sm font-semibold text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary-foreground/20"
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
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{t.why.title}</h2>
          <p className="mt-4 text-muted-foreground">{t.why.lead}</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.why.items.map((item, i) => {
            const Icon = icons[i] ?? Plane;
            return (
              <div
                key={item.title}
                className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 inline-flex rounded-lg bg-vdt-blue-light p-3 text-vdt-blue">
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

function RoutesPreviewSection() {
  const { t } = useLanguage();
  const images = [routeHanoi, routeSaigon, routeBangkok];

  return (
    <section className="bg-secondary py-16 sm:py-20">
      <div className="container-vdt">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t.routes.title}
            </h2>
            <p className="mt-4 text-muted-foreground">{t.routes.lead}</p>
          </div>
          <Link to="/angebote" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
            {t.common.allDestinations}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.routes.items.map((route, i) => (
            <article
              key={route.title}
              className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={images[i] ?? routeHanoi}
                  alt={route.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  width={800}
                  height={600}
                />
                <span className="absolute left-3 top-3 rounded-full bg-vdt-red px-2.5 py-1 text-xs font-semibold text-white">
                  {route.tag}
                </span>
              </div>
              <div className="p-5">
                <p className="text-xs font-medium text-primary">{route.subtitle}</p>
                <h3 className="font-heading text-lg font-semibold text-card-foreground">{route.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{route.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-heading text-lg font-bold text-primary">
                    {route.price} {t.routes.priceOneWay}
                  </span>
                  <span className="text-xs text-muted-foreground">{t.common.perPerson}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactPreviewSection() {
  const { t } = useLanguage();
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="container-vdt">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t.contactPreview.title}
            </h2>
            <p className="mt-4 text-muted-foreground">{t.contactPreview.lead}</p>
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-vdt-blue-light p-2 text-vdt-blue">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{COMPANY.name}</p>
                  <p className="text-sm text-muted-foreground">{COMPANY.street}</p>
                  <p className="text-sm text-muted-foreground">{COMPANY.zipCity}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-vdt-blue-light p-2 text-vdt-blue">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{t.contactPreview.phone}</p>
                  <a href={`tel:${COMPANY.phoneHref}`} className="text-sm text-muted-foreground hover:text-primary">
                    {COMPANY.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-vdt-blue-light p-2 text-vdt-blue">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{t.contactPreview.email}</p>
                  <a href={`mailto:${COMPANY.email}`} className="text-sm text-muted-foreground hover:text-primary">
                    {COMPANY.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                {t.contactPreview.cta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
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
