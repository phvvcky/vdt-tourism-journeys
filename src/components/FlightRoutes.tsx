import { Link } from "@tanstack/react-router";
import { ArrowRight, Plane, Clock, Star } from "lucide-react";
import { FLIGHTS, ORIGIN, formatLayover } from "../lib/flight-data";
import { useLanguage } from "../lib/i18n";
import { AirlineTag } from "./AirlineTag";

export function FlightGrid({ limit }: { limit?: number }) {
  const { t } = useLanguage();
  const flights = limit ? FLIGHTS.slice(0, limit) : FLIGHTS;

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {flights.map((flight) => {
        const city = t.routes.cities[flight.id] ?? flight.iata;
        const layover = formatLayover(flight.layoverMin, t.common.hourShort, t.common.minuteShort);

        return (
          <article
            key={flight.id}
            className={`relative flex flex-col rounded-xl border bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-lg ${
              flight.top ? "border-vdt-gold-dark/60 shadow-sm" : "border-border"
            }`}
          >
            {flight.top && (
              <span className="absolute -top-2.5 left-4 inline-flex items-center gap-1 rounded-full bg-vdt-gold px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent-foreground">
                <Star className="h-3 w-3" />
                {t.common.topRoute}
              </span>
            )}

            <div className="flex items-baseline gap-2 pt-1">
              <span className="font-heading text-sm font-bold text-muted-foreground">{ORIGIN.code}</span>
              <Plane className="h-3.5 w-3.5 rotate-90 text-vdt-red" />
              <span className="font-heading text-sm font-bold text-muted-foreground">{flight.iata}</span>
            </div>
            <h3 className="mt-1 font-heading text-lg font-bold text-card-foreground">
              Berlin – {city}
            </h3>

            <div className="mt-3 flex flex-wrap gap-1.5">
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

            <div className="mt-auto pt-5">
              <p className="font-heading text-xl font-bold text-vdt-red">
                {t.common.from} {flight.price} € <span className="text-xs font-medium text-muted-foreground">{t.common.oneWay}</span>
              </p>
              <Link
                to="/kontakt"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-md bg-vdt-ink px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-vdt-red"
              >
                {t.common.request}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}
