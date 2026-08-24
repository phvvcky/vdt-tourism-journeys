import { useEffect, useRef, useState } from "react";
import { FLIGHTS, ORIGINS } from "../lib/flight-data";
import { useLanguage } from "../lib/i18n";
import { Reveal } from "./Reveal";

const AIRLINE_COUNT = new Set(FLIGHTS.flatMap((f) => f.airlines)).size;

function useCountUp(target: number, active: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setValue(target);
      return;
    }
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target]);

  return value;
}

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const count = useCountUp(value, active);

  return (
    <div ref={ref} className="text-center">
      <p className="font-heading text-4xl font-extrabold gradient-brand-text sm:text-5xl">
        {count}
        {suffix}
      </p>
      <p className="mt-1.5 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

export function Stats() {
  const { t } = useLanguage();

  return (
    <section className="border-y border-border bg-card py-12">
      <Reveal className="container-vdt grid grid-cols-2 gap-8 sm:grid-cols-4">
        <StatItem value={32} suffix="+" label={t.stats.years} />
        <StatItem value={FLIGHTS.length} suffix="" label={t.stats.destinations} />
        <StatItem value={ORIGINS.length} suffix="" label={t.stats.airports} />
        <StatItem value={AIRLINE_COUNT} suffix="" label={t.stats.airlines} />
      </Reveal>
    </section>
  );
}
