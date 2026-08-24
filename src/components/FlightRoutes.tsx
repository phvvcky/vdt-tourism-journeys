import { Link } from "@tanstack/react-router";
import { ArrowRight, Plane, Clock, Star } from "lucide-react";
import { FLIGHTS, ORIGIN, formatLayover } from "../lib/flight-data";
import { useLanguage } from "../lib/i18n";
import { AirlineTag } from "./AirlineTag";
import { Reveal } from "./Reveal";

// Boarding-Pass-Optik: Hauptteil (Route/Airlines) oben, per Perforation abgetrennter
// "Ticketstub" unten mit Barcode-Deko, Preis und CTA. Verwendet immer auf bg-secondary
// (RoutesSection & /angebote), damit die Perforations-Notches farblich passen.
export function FlightGrid({ limit }: { limit?: number }) {
  const { t } = useLanguage();
  const flights = limit ? FLIGHTS.slice(0, limit) : FLIGHTS;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {flights.map((flight, i) => {
        const city = t.routes.cities[flight.id] ?? flight.iata;
        const layover = formatLayover(flight.layoverMin, t.common.hourShort, t.common.minuteShort);

        return (
          <Reveal
            key={flight.id}
            as="article"
            delay={i * 70}
            className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
              flight.top
                ? "border-vdt-amber-dark/50 hover:shadow-vdt-amber/15"
                : "border-border hover:border-vdt-blue/30 hover:shadow-vdt-blue/10"
            }`}
          >
            {flight.top && (
              <span className="absolute right-4 top-4 z-10 inline-flex items-center gap-1 rounded-full bg-vdt-amber px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent-foreground">
                <Star className="h-3 w-3" />
                {t.common.topRoute}
              </span>
            )}

            {/* Ticket-Hauptteil */}
            <div className="flex-1 p-5 pb-6">
              <p className="eyebrow text-vdt-blue">Boarding Pass</p>

              <div className="mt-3 flex items-center gap-2.5">
                <span className="font-heading text-2xl font-extrabold tracking-tight text-card-foreground">
                  {ORIGIN.code}
                </span>
                <span className="relative h-px flex-1 bg-border">
                  <Plane className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-90 text-vdt-blue transition-transform duration-300 group-hover:-translate-y-[6px]" />
                </span>
                <span className="font-heading text-2xl font-extrabold tracking-tight text-card-foreground">
                  {flight.iata}
                </span>
              </div>
              <h3 className="mt-1 text-sm font-semibold text-muted-foreground">Berlin – {city}</h3>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {flight.airlines.map((a) => (
                  <AirlineTag key={a} name={a} />
                ))}
              </div>

              <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="h-3.5 w-3.5 shrink-0" />
                {flight.nonstop ? (
                  <span>{t.common.nonstop}</span>
                ) : (
                  <span>
                    {t.common.via} {flight.via} · {t.common.layover} {layover}
                  </span>
                )}
              </div>
            </div>

            {/* Perforation zwischen Ticket-Hauptteil und Abriss-Stub */}
            <div className="relative">
              <span className="absolute -left-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-secondary" />
              <span className="absolute -right-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-secondary" />
              <div className="border-t border-dashed border-border" />
            </div>

            {/* Ticketstub */}
            <div className="bg-secondary/50 px-5 py-4">
              <div className="barcode-strip h-5 w-full text-muted-foreground/30" />
              <p className="mt-3 font-heading text-xl font-bold text-vdt-blue">
                {t.common.from} {flight.price} €{" "}
                <span className="text-xs font-medium text-muted-foreground">{t.common.oneWay}</span>
              </p>
              <Link
                to="/kontakt"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-md bg-vdt-ink px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:bg-vdt-blue hover:shadow-md hover:shadow-vdt-blue/25"
              >
                {t.common.request}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
