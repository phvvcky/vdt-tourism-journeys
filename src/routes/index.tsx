import { createFileRoute, Link } from "@tanstack/react-router";
import { Plane, MapPin, Umbrella, Headphones, Phone, Mail, ArrowRight } from "lucide-react";
import heroImage from "../assets/hero-travel.jpg";
import offerVietnam from "../assets/offer-vietnam.jpg";
import offerBeach from "../assets/offer-beach.jpg";
import offerCity from "../assets/offer-city.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VDT Touristik GmbH Berlin – Ihr Reisebüro" },
      { name: "description", content: "Flugtickets, Reiseangebote und persönliche Beratung in Berlin. IATA akkreditierter Agent." },
      { property: "og:title", content: "VDT Touristik GmbH Berlin – Ihr Reisebüro" },
      { property: "og:description", content: "Flugtickets, Reiseangebote und persönliche Beratung in Berlin. IATA akkreditierter Agent." },
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
      <OffersPreviewSection />
      <ContactPreviewSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Flugzeug über den Wolken"
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
            IATA akkreditierter Agent
          </p>
          <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Ihr Reisebüro in Berlin
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/90 sm:text-xl">
            Persönlich, erfahren und zuverlässig: Wir begleiten Sie zu Ihrem nächsten Reiseziel – mit
            maßgeschneiderten Flugtickets, Pauschalreisen und individueller Beratung.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/kontakt"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-vdt-red px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-vdt-red/90"
            >
              <Phone className="h-4 w-4" />
              Kontakt aufnehmen
            </Link>
            <Link
              to="/angebote"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-primary-foreground/30 bg-primary-foreground/10 px-5 py-3 text-sm font-semibold text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary-foreground/20"
            >
              Angebote entdecken
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function HighlightsSection() {
  const highlights = [
    {
      icon: Plane,
      title: "Flugtickets weltweit",
      description: "Günstige Flüge zu Zielen auf der ganzen Welt – von Economy bis Business Class.",
    },
    {
      icon: MapPin,
      title: "Pauschalreisen & Urlaub",
      description: "Entspannte Komplettpakete aus Flug, Hotel und Transfer für Ihren perfekten Urlaub.",
    },
    {
      icon: Headphones,
      title: "Persönliche Beratung",
      description: "Vor Ort in Berlin beraten wir Sie individuell und finden die passende Reise für Sie.",
    },
    {
      icon: Umbrella,
      title: "Vietnam-Spezialist",
      description: "Langjährige Erfahrung mit Reisen nach Vietnam und Südostasien – Visa-Hilfe inklusive.",
    },
  ];

  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="container-vdt">
        <div className="mb-10 max-w-2xl">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Warum VDT Touristik?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Seit Jahren ist VDT Touristik GmbH in Berlin die erste Adresse für Reisende, die Wert auf
            persönliche Betreuung und faire Preise legen.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-lg bg-vdt-blue-light p-3 text-vdt-blue">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-card-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OffersPreviewSection() {
  const offers = [
    {
      image: offerVietnam,
      title: "Vietnam entdecken",
      description: "2 Wochen Rundreise inkl. Flug, Hotels und deutscher Reiseleitung.",
      price: "ab 1.499 €",
      tag: "Bestseller",
    },
    {
      image: offerBeach,
      title: "Traumstrandurlaub",
      description: "7 Nächte in einem 4-Sterne-Resort direkt am Meer inklusive Flug.",
      price: "ab 899 €",
      tag: "Pauschal",
    },
    {
      image: offerCity,
      title: "Städtetrip Europa",
      description: "Kurzurlaub in attraktiven Metropolen – Flug & Hotel kombiniert.",
      price: "ab 399 €",
      tag: "Kurzurlaub",
    },
  ];

  return (
    <section className="bg-secondary py-16 sm:py-20">
      <div className="container-vdt">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Aktuelle Reiseangebote
            </h2>
            <p className="mt-4 text-muted-foreground">
              Eine Auswahl unserer beliebtesten Reisen. Weitere Angebote erhalten Sie persönlich im Büro oder telefonisch.
            </p>
          </div>
          <Link
            to="/angebote"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            Alle Angebote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer) => (
            <article
              key={offer.title}
              className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  width={800}
                  height={600}
                />
                <span className="absolute left-3 top-3 rounded-full bg-vdt-red px-2.5 py-1 text-xs font-semibold text-white">
                  {offer.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg font-semibold text-card-foreground">{offer.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{offer.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-heading text-lg font-bold text-primary">{offer.price}</span>
                  <span className="text-xs text-muted-foreground">pro Person</span>
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
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="container-vdt">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Sprechen Sie uns an
            </h2>
            <p className="mt-4 text-muted-foreground">
              Besuchen Sie uns in Berlin oder rufen Sie uns an. Wir beraten Sie gerne persönlich und
              unverbindlich.
            </p>
            <div className="mt-6 space-y-4">
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
            </div>
            <div className="mt-8">
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Zum Kontaktformular
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h3 className="font-heading text-xl font-semibold text-card-foreground">Öffnungszeiten</h3>
            <dl className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Montag – Freitag</dt>
                <dd className="font-medium text-foreground">09:00 – 17:00 Uhr</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Samstag</dt>
                <dd className="font-medium text-foreground">geschlossen</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Sonntag</dt>
                <dd className="font-medium text-foreground">geschlossen</dd>
              </div>
            </dl>
            <p className="mt-4 text-xs text-muted-foreground">
              Termine außerhalb der Öffnungszeiten sind nach Vereinbarung möglich.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
