import { ReactNode } from "react";
import { motion } from "motion/react";

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <div className="mb-5 inline-flex items-center gap-3">
      <span style={{ width: 28, height: 1, backgroundColor: "var(--accent)", display: "inline-block" }} />
      <span
        className="uppercase"
        style={{
          fontSize: 12,
          letterSpacing: "0.22em",
          color: dark ? "rgba(244,241,236,0.7)" : "var(--accent)",
        }}
      >
        {children}
      </span>
    </div>
  );
}

export function SectionTitle({
  children,
  dark = false,
  className = "",
}: {
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <h2
      className={`uppercase ${className}`}
      style={{
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        letterSpacing: "-0.01em",
        lineHeight: 1.04,
        fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
        color: dark ? "#f4f1ec" : "var(--foreground)",
      }}
    >
      {children}
    </h2>
  );
}

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MatchBadge({ score, dark = false }: { score: number; dark?: boolean }) {
  return (
    <div
      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5"
      style={{
        backgroundColor: dark ? "rgba(17,19,23,0.7)" : "rgba(244,241,236,0.92)",
        backdropFilter: "blur(6px)",
        border: "1px solid var(--accent)",
      }}
    >
      <span style={{ width: 6, height: 6, borderRadius: 9999, backgroundColor: "var(--accent)" }} />
      <span style={{ fontSize: 12, letterSpacing: "0.04em", color: dark ? "#f4f1ec" : "#111317", fontFamily: "var(--font-display)", fontWeight: 500 }}>
        {score}% AI Match
      </span>
    </div>
  );
}
