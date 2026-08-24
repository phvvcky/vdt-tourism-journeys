import { useEffect, useRef, useState } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { FLIGHTS, ORIGINS, formatLayover } from "../lib/flight-data";
import { WORLD_LAND_PATH } from "../lib/world-map-path";
import { useLanguage } from "../lib/i18n";
import { Reveal } from "./Reveal";
import { MagneticButton } from "./MagneticButton";

export const SELECT_DESTINATION_EVENT = "vdt:select-destination";

// Statische Weltkarte (SVG, equirectangular) mit Berlin als Ausgangspunkt.
// Kein Live-Preisvergleich, keine externe API – Hover zeigt Airline/Preis/Umsteigezeit.

function arc(x1: number, y1: number, x2: number, y2: number) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2 - Math.abs(x2 - x1) * 0.22 - 12;
  return `M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`;
}

function arcLength(x1: number, y1: number, x2: number, y2: number) {
  // Grobe Länge der quadratischen Bézierkurve für den Zeichen-Effekt (Reichweite genügt, muss nicht exakt sein).
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2 - Math.abs(x2 - x1) * 0.22 - 12;
  const chord = Math.hypot(x2 - x1, y2 - y1);
  const cp = Math.hypot(mx - x1, my - y1) + Math.hypot(x2 - mx, y2 - my);
  return (chord + cp) / 2;
}

export function RouteMap({ anchorId }: { anchorId: string }) {
  const { t } = useLanguage();
  const [hovered, setHovered] = useState<string | null>(null);
  const [selected, setSelected] = useState<string>(FLIGHTS[0]!.id);
  const [originCode, setOriginCode] = useState<string>(ORIGINS[0]!.code);
  const [mapVisible, setMapVisible] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  const origin = ORIGINS.find((o) => o.code === originCode) ?? ORIGINS[0]!;
  const originCity = origin.label.replace(/\s*\(.+\)$/, "");

  const activeId = hovered ?? null;
  const active = FLIGHTS.find((f) => f.id === activeId) ?? null;

  // letzte aktive Route merken, damit das Tooltip beim Verlassen sanft aus- statt abrupt verschwindet
  const [lastActive, setLastActive] = useState(
    active ?? FLIGHTS.find((f) => f.id === selected) ?? null,
  );
  useEffect(() => {
    if (active) setLastActive(active);
  }, [active]);

  useEffect(() => {
    const el = mapRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setMapVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // erlaubt anderen Komponenten (z.B. den Zielkarten), hier ein Ziel vorzuwählen
  useEffect(() => {
    const onSelect = (e: Event) => {
      const id = (e as CustomEvent<string>).detail;
      if (FLIGHTS.some((f) => f.id === id)) setSelected(id);
    };
    window.addEventListener(SELECT_DESTINATION_EVENT, onSelect);
    return () => window.removeEventListener(SELECT_DESTINATION_EVENT, onSelect);
  }, []);

  const scrollToAnchor = () => {
    document.getElementById(anchorId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    const subject = document.querySelector<HTMLInputElement>("#subject");
    if (subject) subject.value = `${originCity} – ${t.routes.cities[selected] ?? ""}`;
  };

  const tooltipTarget = lastActive;

  return (
    <section
      id="karte"
      className="relative scroll-mt-20 overflow-hidden gradient-ink py-16 text-primary-foreground sm:py-20"
    >
      {/* dekorative Glow-Blobs */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 animate-float-a rounded-full bg-vdt-red/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 animate-float-b rounded-full bg-vdt-gold/20 blur-3xl" />

      <div className="container-vdt relative">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-vdt-gold">{origin.label}</p>
          <h2 className="mt-2 font-heading text-3xl font-bold sm:text-4xl">{t.map.title}</h2>
          <p className="mt-4 text-primary-foreground/70">{t.map.lead}</p>
        </Reveal>

        {/* Suchfeld */}
        <Reveal
          delay={100}
          className="mt-8 grid gap-3 rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-4 backdrop-blur-sm sm:grid-cols-[1fr_1fr_auto] sm:items-end"
        >
          <div>
            <label
              htmlFor="map-from"
              className="block text-xs font-medium text-primary-foreground/60"
            >
              {t.map.departure}
            </label>
            <select
              id="map-from"
              value={originCode}
              onChange={(e) => setOriginCode(e.target.value)}
              className="mt-1 w-full rounded-md border border-primary-foreground/20 bg-vdt-ink-soft px-3 py-2 text-sm text-primary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-vdt-gold"
            >
              {ORIGINS.map((o) => (
                <option key={o.code} value={o.code}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="map-to"
              className="block text-xs font-medium text-primary-foreground/60"
            >
              {t.map.destination}
            </label>
            <select
              id="map-to"
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              className="mt-1 w-full rounded-md border border-primary-foreground/20 bg-vdt-ink-soft px-3 py-2 text-sm text-primary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-vdt-gold"
            >
              {FLIGHTS.map((f) => (
                <option key={f.id} value={f.id}>
                  {t.routes.cities[f.id]} ({f.iata})
                </option>
              ))}
            </select>
          </div>
          <MagneticButton>
            <button
              type="button"
              onClick={scrollToAnchor}
              className="group inline-flex items-center justify-center gap-2 rounded-md gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-vdt-red/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-vdt-flame/30 active:translate-y-0"
            >
              {t.map.cta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </MagneticButton>
        </Reveal>

        {/* Karte */}
        <div
          ref={mapRef}
          className={`reveal${mapVisible ? " reveal-visible" : ""} relative mt-6 overflow-hidden rounded-xl border border-primary-foreground/10 bg-vdt-ink-soft/40 shadow-2xl shadow-black/20`}
          style={{ transitionDelay: mapVisible ? "150ms" : "0ms" }}
        >
          <svg viewBox="150 60 780 240" className="w-full" role="img" aria-label={t.map.title}>
            <defs>
              <radialGradient id="origin-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="oklch(0.985 0.008 80)" stopOpacity="0.9" />
                <stop offset="100%" stopColor="oklch(0.985 0.008 80)" stopOpacity="0" />
              </radialGradient>
            </defs>

            <path
              d={WORLD_LAND_PATH}
              fill="oklch(0.305 0.018 62)"
              stroke="oklch(0.4 0.02 62)"
              strokeWidth="0.4"
            />

            {FLIGHTS.map((f, i) => {
              const isActive = activeId === f.id || selected === f.id;
              const len = arcLength(origin.x, origin.y, f.x, f.y);
              return (
                <g key={f.id}>
                  <path
                    d={arc(origin.x, origin.y, f.x, f.y)}
                    fill="none"
                    stroke={isActive ? "oklch(0.8 0.15 84)" : "oklch(0.535 0.215 24)"}
                    strokeWidth={isActive ? 2.2 : 1.1}
                    strokeLinecap="round"
                    opacity={isActive ? 1 : 0.6}
                    style={{
                      strokeDasharray: len,
                      strokeDashoffset: mapVisible ? 0 : len,
                      transitionProperty: "stroke-width, opacity, stroke, stroke-dashoffset",
                      transitionDuration: "0.35s, 0.35s, 0.35s, 1.1s",
                      transitionTimingFunction:
                        "cubic-bezier(0.34,1.56,0.64,1), ease, ease, cubic-bezier(0.16,1,0.3,1)",
                      transitionDelay: `0s, 0s, 0s, ${0.15 + i * 0.08}s`,
                    }}
                  />
                  {isActive && (
                    <path
                      d={arc(origin.x, origin.y, f.x, f.y)}
                      fill="none"
                      stroke="oklch(0.985 0.008 80)"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeDasharray="1 7"
                      opacity="0.9"
                      className="animate-dash-flow"
                    />
                  )}
                  <circle
                    cx={f.x}
                    cy={f.y}
                    r={isActive ? 4.5 : 2.6}
                    fill={isActive ? "oklch(0.8 0.15 84)" : "oklch(0.535 0.215 24)"}
                    style={{
                      transition: "r 0.35s cubic-bezier(0.34,1.56,0.64,1), fill 0.35s ease",
                    }}
                  />
                  {/* großzügige Hover-Fläche über der Linie */}
                  <path
                    d={arc(origin.x, origin.y, f.x, f.y)}
                    fill="none"
                    stroke="transparent"
                    strokeWidth="12"
                    className="cursor-pointer"
                    onMouseEnter={() => setHovered(f.id)}
                    onMouseLeave={() => setHovered(null)}
                    onFocus={() => setHovered(f.id)}
                    onBlur={() => setHovered(null)}
                    onClick={() => setSelected(f.id)}
                    tabIndex={0}
                    aria-label={`${originCity} – ${t.routes.cities[f.id]}`}
                  />
                  {isActive && (
                    <text
                      x={f.x + (f.labelDx ?? 7)}
                      y={f.y + (f.labelDy ?? 3)}
                      textAnchor={f.labelAnchor ?? "start"}
                      fontSize="7.5"
                      fill="oklch(0.8 0.15 84)"
                      className="pointer-events-none font-semibold"
                    >
                      {t.routes.cities[f.id]}
                    </text>
                  )}
                </g>
              );
            })}

            {/* pulsierende Ringe um Berlin */}
            <circle
              cx={origin.x}
              cy={origin.y}
              r="4.5"
              fill="url(#origin-glow)"
              className="animate-pulse-ring"
              style={{ transformOrigin: `${origin.x}px ${origin.y}px` }}
            />
            <circle
              cx={origin.x}
              cy={origin.y}
              r="4.5"
              fill="url(#origin-glow)"
              className="animate-pulse-ring"
              style={{ transformOrigin: `${origin.x}px ${origin.y}px`, animationDelay: "1.1s" }}
            />
            <circle cx={origin.x} cy={origin.y} r="4.5" fill="oklch(0.985 0.008 80)" />
            <text
              x={origin.x - 4}
              y={origin.y - 8}
              fontSize="8"
              textAnchor="end"
              fill="oklch(0.985 0.008 80)"
              className="font-semibold"
            >
              {originCity}
            </text>
          </svg>

          {/* Tooltip – bleibt im DOM und faded/scaled sanft statt abrupt zu erscheinen */}
          {tooltipTarget && (
            <div
              className="pointer-events-none absolute z-10 w-52 -translate-x-1/2 rounded-lg border border-vdt-gold/40 bg-vdt-ink p-3 shadow-xl transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
              style={{
                left: `${((tooltipTarget.x - 150) / 780) * 100}%`,
                top: `${((tooltipTarget.y - 60) / 240) * 100}%`,
                transform: `translate(-50%, -100%) scale(${active ? 1 : 0.92})`,
                opacity: active ? 1 : 0,
              }}
            >
              <p className="font-heading text-sm font-bold">
                {originCity} – {t.routes.cities[tooltipTarget.id]}
              </p>
              <p className="mt-1 text-xs text-primary-foreground/70">
                {tooltipTarget.airlines.join(" · ")}
              </p>
              <p className="text-xs text-primary-foreground/70">
                {tooltipTarget.nonstop
                  ? t.common.nonstop
                  : `${t.common.via} ${tooltipTarget.via} · ${formatLayover(tooltipTarget.layoverMin, t.common.hourShort, t.common.minuteShort)}`}
              </p>
              <p className="mt-1 font-heading text-sm font-bold text-vdt-gold">
                {t.common.from} {tooltipTarget.price} € {t.common.oneWay}
              </p>
            </div>
          )}
        </div>

        <Reveal
          delay={200}
          className="mt-4 flex items-start gap-2 text-xs text-primary-foreground/60"
        >
          <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" />
          {t.map.note}
        </Reveal>
      </div>
    </section>
  );
}
