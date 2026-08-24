import { useEffect, useRef, useState } from "react";

// Zerlegt eine Headline in Wörter, die beim Erscheinen im Viewport gestaffelt einfaden/hochschieben.
export function KineticHeadline({
  text,
  as: Tag = "h1",
  className = "",
}: {
  text: string;
  as?: "h1" | "h2";
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const words = text.split(" ");

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref as never} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-1 align-bottom">
          <span
            className="inline-block will-change-transform"
            style={
              reducedMotion
                ? undefined
                : {
                    transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1), opacity 0.7s ease",
                    transitionDelay: visible ? `${i * 70}ms` : "0ms",
                    transform: visible ? "translateY(0%)" : "translateY(110%)",
                    opacity: visible ? 1 : 0,
                  }
            }
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </span>
        </span>
      ))}
    </Tag>
  );
}
