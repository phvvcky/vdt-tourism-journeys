import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
// Platzhalterbilder – werden später durch eigene Fotos (Büro, Team, Standort Berlin) ersetzt
import routeHanoi from "../assets/offer-vietnam.jpg";
import routeSaigon from "../assets/offer-city.jpg";
import routeBangkok from "../assets/offer-beach.jpg";
import { useLanguage } from "../lib/i18n";

export const Route = createFileRoute("/angebote")({
  head: () => ({
    meta: [
      { title: "Flugziele & beliebte Strecken – VDT Touristik GmbH Berlin" },
      { name: "description", content: "Beliebte Flugstrecken ab Berlin nach Hanoi, Ho-Chi-Minh-Stadt und weiteren Asien-Zielen. Preise ab X € einfach." },
      { property: "og:title", content: "Flugziele & beliebte Strecken – VDT Touristik GmbH Berlin" },
      { property: "og:description", content: "Beliebte Flugstrecken ab Berlin nach Hanoi, Ho-Chi-Minh-Stadt und weiteren Asien-Zielen. Preise ab X € einfach." },
      { property: "og:url", content: "/angebote" },
    ],
    links: [{ rel: "canonical", href: "/angebote" }],
  }),
  component: FlightRoutesPage,
});

function FlightRoutesPage() {
  const { t } = useLanguage();
  const images = [routeHanoi, routeSaigon, routeBangkok];

  return (
    <div className="bg-background">
      <section className="border-b border-border bg-vdt-blue-light py-12 sm:py-16">
        <div className="container-vdt">
          <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            {t.common.back}
          </Link>
          <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.routes.title}
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">{t.routes.pageLead}</p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container-vdt">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.routes.items.map((route, i) => (
              <article
                key={route.title}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
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
                <div className="flex flex-1 flex-col p-5">
                  <div>
                    <p className="text-xs font-medium text-primary">{route.subtitle}</p>
                    <h3 className="font-heading text-lg font-semibold text-card-foreground">{route.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{route.description}</p>
                    <ul className="mt-3 space-y-1">
                      {route.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto pt-4">
                    <div className="flex items-center justify-between">
                      <span className="font-heading text-xl font-bold text-primary">
                        {route.price} {t.routes.priceOneWay}
                      </span>
                      <span className="text-xs text-muted-foreground">{t.common.perPerson}</span>
                    </div>
                    <Link
                      to="/kontakt"
                      className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                      {t.common.request}
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
