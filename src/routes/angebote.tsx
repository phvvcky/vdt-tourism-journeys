import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import offerVietnam from "../assets/offer-vietnam.jpg";
import offerBeach from "../assets/offer-beach.jpg";
import offerCity from "../assets/offer-city.jpg";

export const Route = createFileRoute("/angebote")({
  head: () => ({
    meta: [
      { title: "Reiseangebote – VDT Touristik GmbH Berlin" },
      { name: "description", content: "Aktuelle Reiseangebote, Pauschalreisen und Flugtickets von VDT Touristik GmbH Berlin." },
      { property: "og:title", content: "Reiseangebote – VDT Touristik GmbH Berlin" },
      { property: "og:description", content: "Aktuelle Reiseangebote, Pauschalreisen und Flugtickets von VDT Touristik GmbH Berlin." },
      { property: "og:url", content: "/angebote" },
    ],
    links: [{ rel: "canonical", href: "/angebote" }],
  }),
  component: OffersPage,
});

function OffersPage() {
  const offers = [
    {
      image: offerVietnam,
      title: "Vietnam Rundreise",
      subtitle: "15 Tage Kultur & Natur",
      description:
        "Erleben Sie die Höhepunkte Vietnams: Hanoi, Halong-Bucht, Hoi An, Saigon und das Mekong-Delta. Inklusive Flug, Hotels, Frühstück, Transfers und deutschsprachiger Reiseleitung.",
      price: "ab 1.499 €",
      tag: "Bestseller",
      highlights: ["Flug von Berlin", "3- bis 4-Sterne-Hotels", "Halong-Bucht Bootstour", "Visa-Hilfe"],
    },
    {
      image: offerBeach,
      title: "Traumstrandurlaub",
      subtitle: "7 Nächte All-Inclusive",
      description:
        "Entspannen Sie in einem 4-Sterne-Resort direkt am Strand. Inklusive Flug, Transfer, Unterkunft und Vollpension. Perfekt für Paare und Familien.",
      price: "ab 899 €",
      tag: "Pauschal",
      highlights: ["Flug & Transfer", "4-Sterne-Resort", "Vollpension", "Strandlage"],
    },
    {
      image: offerCity,
      title: "Städtetrip Europa",
      subtitle: "3–5 Tage Kurzurlaub",
      description:
        "Entdecken Sie beliebte Metropolen wie Prag, Wien, Paris oder Barcelona. Flexible Kombination aus Flug und zentral gelegenem Hotel.",
      price: "ab 399 €",
      tag: "Kurzurlaub",
      highlights: ["Zentrale Hotels", "Flug inklusive", "Flexible Termine", "Städtetipps"],
    },
    {
      image: offerBeach,
      title: "Familienreise",
      subtitle: "14 Tage Abenteuer & Entspannung",
      description:
        "Ein abwechslungsreiches Urlaubspaket für die ganze Familie mit kinderfreundlichen Hotels, Pool und Aktivitäten am Strand.",
      price: "ab 1.199 €",
      tag: "Familie",
      highlights: ["Kinderfreundlich", "Familienzimmer", "Animation", "Flug inklusive"],
    },
    {
      image: offerVietnam,
      title: "Vietnam Kurzreise",
      subtitle: "10 Tage Hanoi & Halong-Bucht",
      description:
        "Kompakte Reise für alle, die Vietnam kennenlernen möchten. Fokus auf Hanoi, die Halong-Bucht und lokale Küche.",
      price: "ab 999 €",
      tag: "Südostasien",
      highlights: ["Hanoi Altstadt", "Halong-Bucht", "Kochkurs", "Flug inklusive"],
    },
    {
      image: offerCity,
      title: "Business Class Flug",
      subtitle: "Weltweite Flugangebote",
      description:
        "Bequeme Business-Class-Flüge zu wichtigen Zielen weltweit. Profitieren Sie von unseren Sonderkonditionen und persönlicher Beratung.",
      price: "auf Anfrage",
      tag: "Flug",
      highlights: ["Lie-flat Sitze", "Priority Boarding", "Lounge Zugang", "Premium Service"],
    },
  ];

  return (
    <div className="bg-background">
      <section className="border-b border-border bg-vdt-blue-light py-12 sm:py-16">
        <div className="container-vdt">
          <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            Zurück zur Startseite
          </Link>
          <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Aktuelle Reiseangebote
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Hier finden Sie eine Auswahl unserer beliebtesten Reisen und Pauschalangebote. Alle Preise sind Richtpreise und
            können je nach Reisezeit und Verfügbarkeit variieren.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container-vdt">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {offers.map((offer) => (
              <article
                key={offer.title}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
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
                <div className="flex flex-1 flex-col p-5">
                  <div>
                    <p className="text-xs font-medium text-primary">{offer.subtitle}</p>
                    <h3 className="font-heading text-lg font-semibold text-card-foreground">{offer.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{offer.description}</p>
                    <ul className="mt-3 space-y-1">
                      {offer.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto pt-4">
                    <div className="flex items-center justify-between">
                      <span className="font-heading text-xl font-bold text-primary">{offer.price}</span>
                      <span className="text-xs text-muted-foreground">pro Person</span>
                    </div>
                    <Link
                      to="/kontakt"
                      className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                      Angebot anfragen
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
