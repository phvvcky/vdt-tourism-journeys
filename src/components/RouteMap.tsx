import { useState } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { FLIGHTS, ORIGIN, formatLayover } from "../lib/flight-data";
import { WORLD_LAND_PATH } from "../lib/world-map-path";
import { useLanguage } from "../lib/i18n";

// Statische Weltkarte (SVG, equirectangular) mit Berlin als Ausgangspunkt.
// Kein Live-Preisvergleich, keine externe API – Hover zeigt Airline/Preis/Umsteigezeit.

function arc(x1: number, y1: number, x2: number, y2: number) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2 - Math.abs(x2 - x1) * 0.22 - 12;
  return `M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`;
}

export function RouteMap({ anchorId }: { anchorId: string }) {
  const { t } = useLanguage();
  const [hovered, setHovered] = useState<string | null>(null);
  const [selected, setSelected] = useState<string>(FLIGHTS[0]!.id);

  const activeId = hovered ?? null;
  const active = FLIGHTS.find((f) => f.id === activeId) ?? null;

  const scrollToAnchor = () => {
    document.getElementById(anchorId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    const subject = document.querySelector<HTMLInputElement>("#subject");
    if (subject) subject.value = `Berlin – ${t.routes.cities[selected] ?? ""}`;
  };

  return (
    <section className="bg-vdt-ink py-16 text-primary-foreground sm:py-20">
      <div className="container-vdt">
        <div className="max-w-2xl">
          <p className="eyebrow text-vdt-gold">{ORIGIN.label}</p>
          <h2 className="mt-2 font-heading text-3xl font-bold sm:text-4xl">{t.map.title}</h2>
          <p className="mt-4 text-primary-foreground/70">{t.map.lead}</p>
        </div>

        {/* Suchfeld */}
        <div className="mt-8 grid gap-3 rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-4 sm:grid-cols-[1fr_1fr_auto] sm:items-end">
          <div>
            <label htmlFor="map-from" className="block text-xs font-medium text-primary-foreground/60">
              {t.map.departure}
            </label>
            <select
              id="map-from"
              defaultValue="BER"
              className="mt-1 w-full rounded-md border border-primary-foreground/20 bg-vdt-ink-soft px-3 py-2 text-sm text-primary-foreground focus:outline-none focus:ring-2 focus:ring-vdt-gold"
            >
              <option value="BER">{ORIGIN.label}</option>
            </select>
          </div>
          <div>
            <label htmlFor="map-to" className="block text-xs font-medium text-primary-foreground/60">
              {t.map.destination}
            </label>
            <select
              id="map-to"
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              className="mt-1 w-full rounded-md border border-primary-foreground/20 bg-vdt-ink-soft px-3 py-2 text-sm text-primary-foreground focus:outline-none focus:ring-2 focus:ring-vdt-gold"
            >
              {FLIGHTS.map((f) => (
                <option key={f.id} value={f.id}>
                  {t.routes.cities[f.id]} ({f.iata})
                </option>
              ))}
            </select>
          </div>
          <button
            type="button"
            onClick={scrollToAnchor}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-vdt-red px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-vdt-red/85"
          >
            {t.map.cta}
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Karte */}
        <div className="relative mt-6 overflow-hidden rounded-xl border border-primary-foreground/10 bg-vdt-ink-soft/40">
          <svg viewBox="150 60 780 240" className="w-full" role="img" aria-label={t.map.title}>
            <path d={WORLD_LAND_PATH} fill="oklch(0.305 0.018 62)" stroke="oklch(0.4 0.02 62)" strokeWidth="0.4" />

            {FLIGHTS.map((f) => {
              const isActive = activeId === f.id || selected === f.id;
              return (
                <g key={f.id}>
                  <path
                    d={arc(ORIGIN.x, ORIGIN.y, f.x, f.y)}
                    fill="none"
                    stroke={isActive ? "oklch(0.795 0.13 82)" : "oklch(0.505 0.185 27.5)"}
                    strokeWidth={isActive ? 2 : 1.1}
                    strokeLinecap="round"
                    opacity={isActive ? 1 : 0.65}
                  />
                  <circle cx={f.x} cy={f.y} r={isActive ? 4 : 2.6} fill={isActive ? "oklch(0.795 0.13 82)" : "oklch(0.505 0.185 27.5)"} />
                  {/* großzügige Hover-Fläche über der Linie */}
                  <path
                    d={arc(ORIGIN.x, ORIGIN.y, f.x, f.y)}
                    fill="none"
                    stroke="transparent"
                    strokeWidth="10"
                    className="cursor-pointer"
                    onMouseEnter={() => setHovered(f.id)}
                    onMouseLeave={() => setHovered(null)}
                    onFocus={() => setHovered(f.id)}
                    onBlur={() => setHovered(null)}
                    onClick={() => setSelected(f.id)}
                    tabIndex={0}
                    aria-label={`Berlin – ${t.routes.cities[f.id]}`}
                  />
                  <text
                    x={f.x + 7}
                    y={f.y + 3}
                    fontSize="7"
                    fill={isActive ? "oklch(0.795 0.13 82)" : "oklch(0.85 0.01 80)"}
                    className="pointer-events-none font-medium"
                  >
                    {t.routes.cities[f.id]}
                  </text>
                </g>
              );
            })}

            <circle cx={ORIGIN.x} cy={ORIGIN.y} r="4.5" fill="oklch(0.985 0.008 80)" />
            <text x={ORIGIN.x - 4} y={ORIGIN.y - 8} fontSize="8" textAnchor="end" fill="oklch(0.985 0.008 80)" className="font-semibold">
              Berlin
            </text>
          </svg>

          {/* Tooltip */}
          {active && (
            <div
              className="pointer-events-none absolute z-10 w-52 -translate-x-1/2 -translate-y-full rounded-lg border border-vdt-gold/40 bg-vdt-ink p-3 shadow-xl"
              style={{
                left: `${((active.x - 150) / 780) * 100}%`,
                top: `${((active.y - 60) / 240) * 100}%`,
              }}
            >
              <p className="font-heading text-sm font-bold">Berlin – {t.routes.cities[active.id]}</p>
              <p className="mt-1 text-xs text-primary-foreground/70">{active.airlines.join(" · ")}</p>
              <p className="text-xs text-primary-foreground/70">
                {active.nonstop
                  ? t.common.nonstop
                  : `${t.common.via} ${active.via} · ${formatLayover(active.layoverMin, t.common.hourShort, t.common.minuteShort)}`}
              </p>
              <p className="mt-1 font-heading text-sm font-bold text-vdt-gold">
                {t.common.from} {active.price} € {t.common.oneWay}
              </p>
            </div>
          )}
        </div>

        <p className="mt-4 flex items-start gap-2 text-xs text-primary-foreground/60">
          <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" />
          {t.map.note}
        </p>
      </div>
    </section>
  );
}
