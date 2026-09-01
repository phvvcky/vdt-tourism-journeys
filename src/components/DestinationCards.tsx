import { useRef } from "react";
import { ArrowLeft, ArrowRight, Luggage } from "lucide-react";
import { FLIGHTS } from "../lib/flight-data";
import { useLanguage } from "../lib/i18n";
import { Reveal } from "./Reveal";
import { SELECT_DESTINATION_EVENT } from "./RouteMap";

// Gradient-Paare als Kartenhintergrund. Sobald ein Ziel ein echtes Bild hat (Flight.image,
// siehe src/assets/destinations/README.md), wird das Bild halbtransparent unter dem Gradient
// eingeblendet (Duotone-Look) statt des reinen Farbverlaufs.
const CARD_THEMES = [
  { from: "oklch(0.42 0.14 255)", to: "oklch(0.6 0.14 220)" },
  { from: "oklch(0.28 0.11 258)", to: "oklch(0.42 0.14 255)" },
  { from: "oklch(0.38 0.09 235)", to: "oklch(0.52 0.12 195)" },
  { from: "oklch(0.46 0.13 268)", to: "oklch(0.6 0.14 300)" },
  { from: "oklch(0.68 0.15 60)", to: "oklch(0.78 0.15 70)" },
  { from: "oklch(0.44 0.11 165)", to: "oklch(0.58 0.13 155)" },
];

// Fügt dem Ende eines "oklch(...)"-Strings eine Alpha-Komponente hinzu, z.B. für den
// halbtransparenten Gradient-Überzug auf einem Zielbild.
function withAlpha(oklch: string, alpha: number) {
  return oklch.replace(/\)$/, ` / ${alpha})`);
}

export function DestinationCards() {
  const { t } = useLanguage();
  const scrollerRef = useRef<HTMLDivElement>(null);
  // "dragging" wird erst nach einer kleinen Bewegungsschwelle wahr, sonst würde jeder
  // Klick auf eine Karte durch das Pointer-Capture des Scrollers abgefangen werden.
  const drag = useRef<{
    down: boolean;
    dragging: boolean;
    startX: number;
    startScroll: number;
    pointerId: number;
  }>({ down: false, dragging: false, startX: 0, startScroll: 0, pointerId: 0 });

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = (card?.offsetWidth ?? 280) + 16;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const selectDestination = (id: string) => {
    window.dispatchEvent(new CustomEvent(SELECT_DESTINATION_EVENT, { detail: id }));
    document.getElementById("karte")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollerRef.current;
    if (!el) return;
    drag.current = {
      down: true,
      dragging: false,
      startX: e.clientX,
      startScroll: el.scrollLeft,
      pointerId: e.pointerId,
    };
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollerRef.current;
    if (!el || !drag.current.down) return;
    const dx = e.clientX - drag.current.startX;
    if (!drag.current.dragging && Math.abs(dx) > 6) {
      drag.current.dragging = true;
      el.setPointerCapture(drag.current.pointerId);
    }
    if (drag.current.dragging) {
      el.scrollLeft = drag.current.startScroll - dx;
    }
  };
  const endDrag = () => {
    drag.current.down = false;
  };
  // Verhindert, dass ein echtes Drag-Ziehen am Ende versehentlich als Karten-Klick zählt.
  const onClickCapture = (e: React.MouseEvent<HTMLDivElement>) => {
    if (drag.current.dragging) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.dragging = false;
    }
  };

  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="container-vdt">
        <Reveal className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow text-vdt-blue">{t.map.chooseDestination}</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-foreground sm:text-4xl">
              {t.destinationCards.title}
            </h2>
            <p className="mt-4 text-muted-foreground">{t.destinationCards.lead}</p>
          </div>
          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              aria-label="Zurück"
              onClick={() => scrollByCard(-1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:-translate-y-0.5 hover:border-vdt-blue/40 hover:text-vdt-blue hover:shadow-md"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Weiter"
              onClick={() => scrollByCard(1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:-translate-y-0.5 hover:border-vdt-blue/40 hover:text-vdt-blue hover:shadow-md"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </Reveal>
      </div>

      {/* Gepäckband-Rahmen: die Zielkarten "gleiten" wie Koffer über eine Rollenbahn */}
      <div className="container-vdt">
        <div className="h-2 rounded-full conveyor-stripes opacity-60" aria-hidden="true" />
      </div>
      <Reveal delay={100} className="container-vdt">
        <div
          ref={scrollerRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          onClickCapture={onClickCapture}
          className="no-scrollbar flex cursor-grab snap-x snap-mandatory gap-4 overflow-x-auto py-3 active:cursor-grabbing"
        >
          {FLIGHTS.map((f, i) => {
            const theme = CARD_THEMES[i % CARD_THEMES.length]!;
            return (
              <button
                key={f.id}
                type="button"
                data-card
                onClick={() => selectDestination(f.id)}
                className="group relative flex w-64 shrink-0 snap-start flex-col overflow-hidden rounded-2xl text-left shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl sm:w-72"
                style={
                  f.image
                    ? undefined
                    : { background: `linear-gradient(150deg, ${theme.from}, ${theme.to})` }
                }
              >
                {f.image ? (
                  <>
                    <img
                      src={f.image}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `linear-gradient(150deg, ${withAlpha(theme.from, 0.88)}, ${withAlpha(theme.to, 0.68)})`,
                      }}
                    />
                  </>
                ) : (
                  <span className="pointer-events-none absolute -right-3 -top-8 select-none font-heading text-8xl font-black text-white/10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    {f.iata}
                  </span>
                )}
                {f.top && (
                  <span className="absolute left-4 top-4 rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-foreground backdrop-blur-sm">
                    {t.common.topRoute}
                  </span>
                )}
                <div className="relative flex h-44 flex-col justify-end p-5 text-primary-foreground">
                  <Luggage className="mb-2 h-5 w-5 opacity-80 transition-transform duration-300 group-hover:-translate-y-1" />
                  <h3 className="font-heading text-xl font-bold">{t.routes.cities[f.id]}</h3>
                  <p className="mt-1 line-clamp-2 text-xs text-primary-foreground/80">
                    {t.routes.teasers[f.id]}
                  </p>
                </div>
                <div className="relative flex items-center justify-between border-t border-white/15 bg-black/10 px-5 py-3 backdrop-blur-sm">
                  <span className="text-xs text-primary-foreground/70">{f.iata}</span>
                  <span className="font-heading text-sm font-bold text-primary-foreground">
                    {t.common.from} {f.price} €
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </Reveal>
      <div className="container-vdt">
        <div className="h-2 rounded-full conveyor-stripes opacity-60" aria-hidden="true" />
      </div>
    </section>
  );
}
