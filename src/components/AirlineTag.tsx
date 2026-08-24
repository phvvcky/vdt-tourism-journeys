// Kompakte Airline-Kennzeichnung im Gepäckanhänger-Look: kleine "Ösen"-Lochung links,
// Airline-Code, Trennstrich, Name. (Echte Airline-Logos können später ergänzt werden.)

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
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/70 py-0.5 pl-0.5 pr-2.5 text-xs text-secondary-foreground">
      <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-vdt-ink">
        <span className="h-1.5 w-1.5 rounded-full bg-card" />
      </span>
      <span className="font-heading text-[10px] font-bold tracking-wide text-foreground">
        {code}
      </span>
      <span className="h-3 w-px bg-border" />
      {name}
    </span>
  );
}
