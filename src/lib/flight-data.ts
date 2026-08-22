// Struktur- und Preisdaten der Flugstrecken (sprachneutral).
// Städtenamen und Labels liegen in src/lib/i18n.tsx.
// Koordinaten: equirectangular, viewBox 0 0 1000 500 (siehe world-map-path.ts).

export type Flight = {
  id: string;
  iata: string;
  airlines: string[];
  via?: string;
  layoverMin?: number;
  nonstop?: boolean;
  price: number;
  top?: boolean;
  x: number;
  y: number;
};

export const ORIGIN = { code: "BER", label: "Berlin (BER)", x: 537, y: 104 };

export const FLIGHTS: Flight[] = [
  {
    id: "hanoi",
    iata: "HAN",
    airlines: ["Vietnam Airlines", "Qatar Airways"],
    via: "Frankfurt",
    layoverMin: 80,
    price: 389,
    top: true,
    x: 794,
    y: 192,
  },
  {
    id: "saigon",
    iata: "SGN",
    airlines: ["Vietnam Airlines", "Turkish Airlines"],
    via: "Istanbul",
    layoverMin: 105,
    price: 419,
    top: true,
    x: 796,
    y: 220,
  },
  {
    id: "danang",
    iata: "DAD",
    airlines: ["Qatar Airways", "Vietnam Airlines"],
    via: "Doha",
    layoverMin: 125,
    price: 449,
    top: true,
    x: 800,
    y: 205,
  },
  {
    id: "bangkok",
    iata: "BKK",
    airlines: ["Qatar Airways", "Emirates"],
    via: "Doha",
    layoverMin: 90,
    price: 359,
    x: 779,
    y: 212,
  },
  {
    id: "singapore",
    iata: "SIN",
    airlines: ["Emirates", "Turkish Airlines"],
    via: "Dubai",
    layoverMin: 130,
    price: 429,
    x: 788,
    y: 246,
  },
  {
    id: "seoul",
    iata: "ICN",
    airlines: ["Turkish Airlines", "Korean Air"],
    via: "Istanbul",
    layoverMin: 115,
    price: 469,
    x: 852,
    y: 146,
  },
  {
    id: "tokyo",
    iata: "HND",
    airlines: ["Lufthansa", "ANA"],
    via: "München",
    layoverMin: 70,
    price: 519,
    x: 890,
    y: 150,
  },
  {
    id: "manila",
    iata: "MNL",
    airlines: ["Qatar Airways", "Emirates"],
    via: "Doha",
    layoverMin: 150,
    price: 479,
    x: 836,
    y: 210,
  },
];

export function formatLayover(minutes: number | undefined, hLabel: string, mLabel: string) {
  if (!minutes) return "";
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m ? `${h}${hLabel} ${m}${mLabel}` : `${h}${hLabel}`;
}
