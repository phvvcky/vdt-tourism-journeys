import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "../lib/i18n";
import { Marquee } from "./Marquee";

const ITEMS_DE = [
  "IATA akkreditierter Agent",
  "Vietnam Airlines",
  "Qatar Airways",
  "Turkish Airlines",
  "Emirates",
  "Seit 32 Jahren in Berlin",
  "Vietnam-Spezialist",
];

const ITEMS_VI = [
  "Đại lý được IATA công nhận",
  "Vietnam Airlines",
  "Qatar Airways",
  "Turkish Airlines",
  "Emirates",
  "32 năm tại Berlin",
  "Chuyên gia Việt Nam",
];

const ITEMS_EN = [
  "IATA accredited agent",
  "Vietnam Airlines",
  "Qatar Airways",
  "Turkish Airlines",
  "Emirates",
  "32 years in Berlin",
  "Vietnam specialist",
];

export function PartnerMarquee() {
  const { lang } = useLanguage();
  const items = lang === "vi" ? ITEMS_VI : lang === "en" ? ITEMS_EN : ITEMS_DE;

  return (
    <div className="border-y border-border bg-secondary/60 py-3">
      <Marquee>
        {items.map((item) => (
          <span
            key={item}
            className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-semibold tracking-wide text-muted-foreground"
          >
            <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-vdt-blue" />
            {item}
          </span>
        ))}
      </Marquee>
    </div>
  );
}
