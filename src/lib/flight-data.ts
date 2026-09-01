// Struktur- und Preisdaten der Flugstrecken (sprachneutral).
// Städtenamen und Labels liegen in src/lib/i18n.tsx.
// Koordinaten: equirectangular, viewBox 0 0 1000 500 (siehe world-map-path.ts).
// x = (lon + 180) / 360 * 1000, y = (90 - lat) / 180 * 500

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
  // Label-Offset relativ zum Punkt, damit sich eng beieinanderliegende Städte (z.B. Vietnam-Cluster) nicht überlappen.
  labelDx?: number;
  labelDy?: number;
  labelAnchor?: "start" | "end";
  // Optionales Stadtbild für die Zielkarten-Galerie (DestinationCards). Noch nicht befüllt —
  // siehe src/assets/destinations/README.md, wie ein Bild ergänzt wird. Ohne Bild fällt die
  // Karte automatisch auf den reinen Gradient-Look zurück.
  image?: string;
};

export type Origin = { code: string; label: string; x: number; y: number };

export const ORIGINS: Origin[] = [
  { code: "BER", label: "Berlin (BER)", x: 537, y: 104 },
  { code: "FRA", label: "Frankfurt (FRA)", x: 524, y: 111 },
  { code: "MUC", label: "München (MUC)", x: 533, y: 116 },
  { code: "HAM", label: "Hamburg (HAM)", x: 528, y: 101 },
  { code: "DUS", label: "Düsseldorf (DUS)", x: 519, y: 108 },
];

// Standard-Startpunkt (Hauptstandort). Für die interaktive Karte/Suche steht ORIGINS zur Auswahl.
export const ORIGIN = ORIGINS[0]!;

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
    x: 799,
    y: 226,
    labelDx: 8,
    labelDy: -6,
  },
  {
    id: "danang",
    iata: "DAD",
    airlines: ["Qatar Airways", "Vietnam Airlines"],
    via: "Doha",
    layoverMin: 125,
    price: 449,
    top: true,
    x: 804,
    y: 208,
    labelDx: 8,
    labelDy: 10,
  },
  {
    id: "nhatrang",
    iata: "CXR",
    airlines: ["Vietnam Airlines", "Qatar Airways"],
    via: "Doha",
    layoverMin: 100,
    price: 459,
    x: 809,
    y: 222,
    labelDx: 8,
    labelDy: 4,
  },
  {
    id: "phuquoc",
    iata: "PQC",
    airlines: ["Vietnam Airlines", "Turkish Airlines"],
    via: "Istanbul",
    layoverMin: 140,
    price: 469,
    x: 782,
    y: 227,
    labelDx: -8,
    labelDy: 9,
    labelAnchor: "end",
  },
  {
    id: "hue",
    iata: "HUI",
    airlines: ["Qatar Airways", "Vietnam Airlines"],
    via: "Doha",
    layoverMin: 110,
    price: 439,
    x: 796,
    y: 197,
    labelDx: -8,
    labelDy: -6,
    labelAnchor: "end",
  },
  {
    id: "bangkok",
    iata: "BKK",
    airlines: ["Qatar Airways", "Emirates"],
    via: "Doha",
    layoverMin: 90,
    price: 359,
    x: 777,
    y: 213,
    labelDx: -8,
    labelDy: 3,
    labelAnchor: "end",
  },
  {
    id: "singapore",
    iata: "SIN",
    airlines: ["Emirates", "Turkish Airlines"],
    via: "Dubai",
    layoverMin: 130,
    price: 429,
    x: 790,
    y: 249,
  },
  {
    id: "kualalumpur",
    iata: "KUL",
    airlines: ["Emirates", "Qatar Airways"],
    via: "Dubai",
    layoverMin: 95,
    price: 399,
    x: 781,
    y: 242,
    labelDx: -8,
    labelDy: -6,
    labelAnchor: "end",
  },
  {
    id: "phnompenh",
    iata: "PNH",
    airlines: ["Qatar Airways", "Vietnam Airlines"],
    via: "Doha",
    layoverMin: 135,
    price: 459,
    x: 787,
    y: 219,
    labelDx: -8,
    labelDy: 9,
    labelAnchor: "end",
  },
  {
    id: "bali",
    iata: "DPS",
    airlines: ["Emirates", "Qatar Airways"],
    via: "Dubai",
    layoverMin: 160,
    price: 549,
    x: 820,
    y: 274,
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
  {
    id: "dubai",
    iata: "DXB",
    airlines: ["Emirates"],
    nonstop: true,
    price: 349,
    x: 654,
    y: 180,
  },
];

export function formatLayover(minutes: number | undefined, hLabel: string, mLabel: string) {
  if (!minutes) return "";
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m ? `${h}${hLabel} ${m}${mLabel}` : `${h}${hLabel}`;
}
