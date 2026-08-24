import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../lib/i18n";
import { Reveal } from "./Reveal";

export function Faq() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="container-vdt grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="eyebrow text-vdt-blue">FAQ</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            {t.faq.title}
          </h2>
          <p className="mt-4 text-muted-foreground">{t.faq.lead}</p>
        </Reveal>
        <Reveal
          delay={120}
          className="divide-y divide-border rounded-xl border border-border bg-card"
        >
          {t.faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q} className="px-5 py-4">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full cursor-pointer list-none items-center justify-between gap-4 text-left font-heading text-base font-semibold text-card-foreground transition-colors hover:text-vdt-blue"
                >
                  {item.q}
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-vdt-blue transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
