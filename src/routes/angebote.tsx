import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Phone, MessageCircle } from "lucide-react";
import { useLanguage } from "../lib/i18n";
import { COMPANY, WHATSAPP_URL } from "../lib/company";
import { FlightGrid } from "../components/FlightRoutes";
import { Faq } from "../components/Faq";

export const Route = createFileRoute("/angebote")({
  head: () => ({
    meta: [
      { title: "Flugziele & beliebte Strecken – VDT Touristik GmbH Berlin" },
      {
        name: "description",
        content:
          "Beliebte Flugstrecken ab Berlin nach Hanoi, Ho-Chi-Minh-Stadt, Da Nang und weiteren Asien-Zielen – mit Airline, Umsteigezeit und ab-Preis.",
      },
      {
        property: "og:title",
        content: "Flugziele & beliebte Strecken – VDT Touristik GmbH Berlin",
      },
      {
        property: "og:description",
        content:
          "Beliebte Flugstrecken ab Berlin nach Hanoi, Ho-Chi-Minh-Stadt, Da Nang und weiteren Asien-Zielen – mit Airline, Umsteigezeit und ab-Preis.",
      },
      { property: "og:url", content: "/angebote" },
    ],
    links: [{ rel: "canonical", href: "/angebote" }],
  }),
  component: FlightRoutesPage,
});

function FlightRoutesPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-background">
      <section className="border-b border-border bg-vdt-ink py-12 text-primary-foreground sm:py-16">
        <div className="container-vdt">
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.common.back}
          </Link>
          <p className="eyebrow mt-6 text-vdt-amber">Berlin (BER)</p>
          <h1 className="mt-2 font-heading text-3xl font-extrabold sm:text-4xl">
            {t.routes.title}
          </h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/70">{t.routes.pageLead}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`tel:${COMPANY.phoneHref}`}
              className="inline-flex items-center gap-2 rounded-md bg-vdt-blue px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-vdt-blue/85"
            >
              <Phone className="h-4 w-4" />
              {COMPANY.phone}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-md bg-vdt-amber px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-vdt-amber-dark"
            >
              <MessageCircle className="h-4 w-4" />
              {t.common.whatsapp}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-12 sm:py-16">
        <div className="container-vdt">
          <FlightGrid />
        </div>
      </section>

      <Faq />
    </div>
  );
}
