import { ChevronDown } from "lucide-react";
import { useLanguage } from "../lib/i18n";

export function Faq() {
  const { t } = useLanguage();

  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="container-vdt grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow text-vdt-red">FAQ</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-foreground sm:text-4xl">{t.faq.title}</h2>
          <p className="mt-4 text-muted-foreground">{t.faq.lead}</p>
        </div>
        <div className="divide-y divide-border rounded-xl border border-border bg-card">
          {t.faq.items.map((item, i) => (
            <details key={item.q} className="group px-5 py-4" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base font-semibold text-card-foreground">
                {item.q}
                <ChevronDown className="h-4 w-4 shrink-0 text-vdt-red transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
