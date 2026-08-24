import { cloneElement, isValidElement, useEffect, useRef, type ReactElement } from "react";

// Zieht den Button minimal in Richtung Maus (max. ~8px). Nur Desktop mit Präzisionszeiger,
// respektiert prefers-reduced-motion. Erwartet genau ein anfassbares Kind-Element (Link/Button).
export function MagneticButton({
  children,
  strength = 0.25,
}: {
  children: ReactElement;
  strength?: number;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const canHover = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canHover || reducedMotion) return;

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      const max = 8;
      const x = Math.max(-max, Math.min(max, dx * strength));
      const y = Math.max(-max, Math.min(max, dy * strength));
      el.style.transform = `translate(${x}px, ${y}px)`;
    };
    const onLeave = () => {
      el.style.transform = "translate(0, 0)";
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [strength]);

  if (!isValidElement(children)) return children;

  return cloneElement(
    children as ReactElement<{ ref?: React.Ref<HTMLElement>; style?: React.CSSProperties }>,
    {
      ref,
      style: {
        ...((children.props as { style?: React.CSSProperties }).style ?? {}),
        transition: "transform 0.2s cubic-bezier(0.16,1,0.3,1)",
      },
    },
  );
}
