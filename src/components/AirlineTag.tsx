// Kompakte Airline-Kennzeichnung: Kürzel-Badge + Name.
// (Echte Airline-Logos können später als eigene Assets ergänzt werden.)

const CODES: Record<string, string> = {
  "Vietnam Airlines": "VN",
  "Qatar Airways": "QR",
  "Turkish Airlines": "TK",
  Emirates: "EK",
  Lufthansa: "LH",
  ANA: "NH",
  "Korean Air": "KE",
};

export function AirlineTag({ name }: { name: string }) {
  const code = CODES[name] ?? name.slice(0, 2).toUpperCase();
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/70 py-0.5 pl-0.5 pr-2 text-xs text-secondary-foreground">
      <span className="inline-flex h-5 w-7 items-center justify-center rounded-full bg-vdt-ink font-heading text-[10px] font-bold tracking-wide text-primary-foreground">
        {code}
      </span>
      {name}
    </span>
  );
}
