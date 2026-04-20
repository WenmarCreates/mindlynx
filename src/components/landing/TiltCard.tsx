import { useRef, type ReactNode } from "react";
import { gsap } from "gsap";

export function TiltCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateY = ((x - cx) / cx) * 8;
    const rotateX = -((y - cy) / cy) * 8;

    gsap.to(card, {
      rotateX,
      rotateY,
      transformPerspective: 900,
      transformOrigin: "center",
      duration: 0.4,
      ease: "power2.out",
    });

    if (glow) {
      glow.style.background = `radial-gradient(420px circle at ${x}px ${y}px, oklch(0.72 0.12 210 / 0.18), transparent 55%)`;
    }
  };

  const handleLeave = () => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card) return;
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.5)",
    });
    if (glow) glow.style.background = "transparent";
  };

  const handleEnter = () => {
    if (cardRef.current) {
      gsap.to(cardRef.current, { scale: 1.02, duration: 0.4, ease: "power2.out" });
    }
  };

  const handleLeaveScale = () => {
    if (cardRef.current) {
      gsap.to(cardRef.current, { scale: 1, duration: 0.5, ease: "power2.out" });
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={(e) => {
        handleLeave();
        handleLeaveScale();
      }}
      className={`relative will-change-transform ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        ref={glowRef}
        aria-hidden
        className="absolute inset-0 rounded-2xl pointer-events-none transition-[background] duration-300"
      />
      <div className="relative" style={{ transform: "translateZ(40px)" }}>
        {children}
      </div>
    </div>
  );
}
