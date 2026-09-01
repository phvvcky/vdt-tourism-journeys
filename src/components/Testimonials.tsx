import { Star, ArrowRight } from "lucide-react";
import { useLanguage } from "../lib/i18n";
import { Reveal } from "./Reveal";

// TODO: durch den echten Google-Bewertungslink der Firma ersetzen (kurzer "Rezension schreiben"-Link
// aus dem Google-Business-Profil, Format meist g.page/r/…/review). Bis dahin verlinkt der Button
// auf eine Google-Suche nach der Firma.
const GOOGLE_REVIEW_URL =
  "https://www.google.com/search?q=VDT+Touristik+GmbH+Berlin+Google+Bewertung";

// Kleines, framework-freies Google-"G"-Logo (offizielle Markenfarben) für den Bewertungs-Header.
function GoogleLogo({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        fill="#EA4335"
        d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.9 2.4 30.3 0 24 0 14.6 0 6.5 5.4 2.5 13.2l7.9 6.1C12.3 13 17.6 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.5 3-2.2 5.5-4.7 7.2l7.4 5.7c4.3-4 6.9-9.9 6.9-17.4z"
      />
      <path
        fill="#FBBC05"
        d="M10.4 19.3A14.5 14.5 0 0 0 9.5 24c0 1.6.3 3.2.9 4.7l-7.9 6.1C1 31.5 0 27.9 0 24s1-7.5 2.5-10.8l7.9 6.1z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.3 0 11.6-2.1 15.5-5.6l-7.4-5.7c-2.1 1.4-4.8 2.2-8.1 2.2-6.4 0-11.7-3.5-13.6-8.7l-7.9 6.1C6.5 42.6 14.6 48 24 48z"
      />
    </svg>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} von 5 Sternen`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${i < count ? "fill-vdt-amber text-vdt-amber" : "fill-transparent text-border"}`}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  const { t } = useLanguage();
  // Nur gute Bewertungen zeigen (>= 4 Sterne) – entspricht der Filterlogik, die später
  // auch für echte Google-Bewertungen genutzt wird.
  const filtered = t.testimonials.items.filter((item) => item.rating >= 4);

  return (
    <section className="bg-secondary py-16 sm:py-20">
      <div className="container-vdt">
        <Reveal className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow inline-flex items-center gap-2 text-vdt-blue">
              <GoogleLogo className="h-4 w-4" />
              VDT Touristik
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-foreground sm:text-4xl">
              {t.testimonials.title}
            </h2>
            <p className="mt-4 text-muted-foreground">{t.testimonials.lead}</p>
          </div>
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="group flex shrink-0 items-center gap-3 rounded-xl border border-vdt-amber-dark/40 bg-card px-4 py-3 transition-all hover:-translate-y-0.5 hover:shadow-md hover:shadow-vdt-amber/15"
          >
            <GoogleLogo className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" />
            <div>
              <p className="font-heading text-sm font-bold text-card-foreground">
                {t.testimonials.reviewCta}
              </p>
              <p className="text-xs text-muted-foreground">{t.testimonials.reviewIncentive}</p>
            </div>
            <ArrowRight className="h-4 w-4 shrink-0 text-vdt-amber-dark transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>

        <p className="mt-4 text-xs font-medium text-muted-foreground">
          {t.testimonials.filterNote}
        </p>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((item, i) => (
            <Reveal
              key={item.name}
              delay={i * 80}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-vdt-amber-dark/40 hover:shadow-xl hover:shadow-vdt-amber/10"
            >
              <div className="flex items-center justify-between">
                <Stars count={item.rating} />
                <GoogleLogo className="h-4 w-4 opacity-70 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-card-foreground">
                {item.quote}
              </blockquote>
              <figcaption className="mt-4 border-t border-border pt-3">
                <p className="font-heading text-sm font-semibold text-foreground">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.meta}</p>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
