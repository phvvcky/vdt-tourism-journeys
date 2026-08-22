import { Quote } from "lucide-react";
import { useLanguage } from "../lib/i18n";

export function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="bg-secondary py-16 sm:py-20">
      <div className="container-vdt">
        <div className="max-w-2xl">
          <p className="eyebrow text-vdt-red">VDT Touristik</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-foreground sm:text-4xl">{t.testimonials.title}</h2>
          <p className="mt-4 text-muted-foreground">{t.testimonials.lead}</p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.testimonials.items.map((item) => (
            <figure key={item.name} className="flex flex-col rounded-xl border border-border bg-card p-6">
              <Quote className="h-6 w-6 text-vdt-gold-dark" />
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-card-foreground">{item.quote}</blockquote>
              <figcaption className="mt-4 border-t border-border pt-3">
                <p className="font-heading text-sm font-semibold text-foreground">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.meta}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
