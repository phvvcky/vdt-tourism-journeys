# Plan: Website für VDT Touristik GmbH Berlin

## Ziel
Eine moderne, responsive Website für das Berliner Reisebüro VDT Touristik GmbH mit Hero-Grid-Layout, basierend auf den Farben des bestehenden Logos (Blau #005BA7, Rot-Akzent, Weiß) und der Schriftkombination Lora + Nunito Sans.

## Designentscheidungen
- **Farbwelt:** Primary Blau `#005BA7` (aus dem Logo), dunkleres Blau für Überschriften, helles Blau für Hintergründe, Rot-Akzent `#D32F2F` für CTA und Highlights, sauberes Weiß/Grau für Flächen.
- **Typografie:** `Lora` für Überschriften, `Nunito Sans` für Fließtext und UI.
- **Layout:** Hero-Grid – großer Hero mit VDT-Claim, darunter Kachel-Grid mit Reise-Highlights, Reiseangeboten und Kontakt.

## Inhalt & Struktur
1. **Hero**
   - Logo-ähnliche Markenfarbe als Hintergrund
   - Claim: „Ihr Reisebüro in Berlin – persönlich, erfahren, IATA-akreditiert."
   - Kurze Lead: Flugtickets, Reiseangebote und individuelle Beratung.
   - CTA: „Kontakt aufnehmen" / „Angebote entdecken"

2. **Reise-Highlights (Grid)**
   - Flugtickets weltweit
   - Pauschalreisen & Urlaub
   - Vietnam-Spezialist (Hinweis auf vietnamesische Kundenbindung)
   - Persönliche Beratung vor Ort

3. **Reiseangebote**
   - Beispielkarten mit 3–4 Angeboten (z.B. Flug nach Vietnam, Strandurlaub, Städtetrip)
   - Preis- und Kurzbeschreibung

4. **Kontakt**
   - Adresse: Rhinstraße 185, 13053 Berlin
   - Telefon: 030 54 39 88 70
   - Öffnungszeiten: Mo–Fr 9:00–17:00 Uhr
   - Kontaktformular (Name, E-Mail, Nachricht, Absenden)

5. **Footer**
   - Impressum-Link
   - Datenschutz-Link
   - IATA Accredited Agent Hinweis

## Technische Umsetzung
- `src/styles.css`: Custom Tokens für VDT-Blau, Rot-Akzent, Lora/Nunito Sans laden via `<link>` in `__root.tsx`.
- `src/routes/index.tsx`: Startseite mit Hero, Highlights, Angebote, Kontakt, Footer.
- `src/routes/impressum.tsx` und `src/routes/datenschutz.tsx`: Platzhalter-Seiten mit grundlegendem Inhalt.
- Generierte Bilder für Hero und Reiseangebote unter `src/assets/`.
- Head-Metadaten pro Route (Title, Description, OG).

## Nicht im Scope
- Buchungs-Engine / Live-Angebots-API
- Mehrsprachige vollständige Übersetzung ( vietnamesische Sprache nicht vollständig, nur Hinweis)
- Benutzerkonto / Authentifizierung
