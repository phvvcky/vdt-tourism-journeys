import type { ReactNode } from "react";

// Endlos-Laufband: Inhalt wird verdoppelt und per CSS-Keyframe (0% -> -50%) nahtlos verschoben.
// Pausiert bei Hover und respektiert prefers-reduced-motion (siehe styles.css .animate-marquee).
export function Marquee({ children }: { children: ReactNode }) {
  return (
    <div className="group relative overflow-hidden">
      <div className="flex w-max animate-marquee gap-10 group-hover:[animation-play-state:paused]">
        <div className="flex shrink-0 items-center gap-10">{children}</div>
        <div className="flex shrink-0 items-center gap-10" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
