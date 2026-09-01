# Zielbilder für die Reiseziele-Galerie

Dieser Ordner ist der Ablageort für die Stadtbilder in der "Reiseziele entdecken"-Galerie
(`src/components/DestinationCards.tsx`). Aktuell ist er leer — die Karten zeigen bis dahin
den reinen Farbverlauf ohne Bild (siehe `CARD_THEMES` in `DestinationCards.tsx`).

## Ein Bild ergänzen

1. Bilddatei hier ablegen, z.B. `hanoi.jpg` (Querformat, mindestens ~800×600px, JPG oder WebP).
2. In `src/components/DestinationCards.tsx` importieren:
   ```ts
   import hanoiImg from "../assets/destinations/hanoi.jpg";
   ```
3. In `src/lib/flight-data.ts` beim passenden Eintrag in `FLIGHTS` das Feld `image` setzen:
   ```ts
   { id: "hanoi", ..., image: hanoiImg },
   ```

Die Karte erkennt das Bild automatisch und zeigt es halbtransparent unter dem Farbverlauf
(Duotone-Look) — kein weiterer Code nötig. Ohne Bild bleibt der bisherige reine Gradient.

## Woher die Bilder nehmen

- KI-generiert (z.B. ChatGPT/DALL-E, Midjourney) — auf Wunsch liefert Claude passende Prompts
  pro Stadt.
- Eigene Fotos.
- Lizenzfreie Stockfotos mit kommerzieller Nutzungsfreigabe (z.B. Unsplash, Pexels) — Lizenz
  im Zweifel prüfen/dokumentieren.

Aktuell 15 Ziele ohne Bild: hanoi, saigon, danang, nhatrang, phuquoc, hue, bangkok, singapore,
kualalumpur, phnompenh, bali, seoul, tokyo, manila, dubai (siehe `src/lib/flight-data.ts`).
