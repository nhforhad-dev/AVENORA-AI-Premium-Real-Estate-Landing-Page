import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Properties", href: "#featured" },
  { label: "AI Tools", href: "#ai-tools" },
  { label: "Neighborhoods", href: "#neighborhoods" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

export function Logo({ dark = false }: { dark?: boolean }) {
  const ink = dark ? "#f4f1ec" : "#111317";
  return (
    <a href="#top" className="flex items-center gap-3 group">
      <span
        className="grid place-items-center rounded-full border transition-colors"
        style={{ width: 38, height: 38, borderColor: dark ? "rgba(244,241,236,0.35)" : "rgba(17,19,23,0.25)" }}
      >
        <span
          className="tracking-tight"
          style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, color: "var(--accent)" }}
        >
          AE
        </span>
      </span>
      <span
        className="leading-none"
        style={{ fontFamily: "var(--font-display)", fontWeight: 700, letterSpacing: "0.18em", fontSize: 15, color: ink }}
      >
        AVENORA
      </span>
    </a>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? "rgba(244,241,236,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <div className="mx-auto flex max-w-[1320px] items-center justify-between px-6 py-5 lg:px-10">
        <Logo dark={!scrolled} />

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative tracking-wide transition-colors hover:opacity-100"
              style={{
                fontSize: 13.5,
                letterSpacing: "0.04em",
                color: scrolled ? "var(--foreground)" : "rgba(244,241,236,0.92)",
                opacity: 0.85,
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#contact"
            className="rounded-full px-6 py-2.5 transition-all duration-300 hover:scale-[1.03]"
            style={{
              backgroundColor: scrolled ? "var(--primary)" : "var(--accent)",
              color: scrolled ? "var(--primary-foreground)" : "var(--accent-foreground)",
              fontSize: 13.5,
              letterSpacing: "0.03em",
            }}
          >
            Schedule a Tour
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden"
          aria-label="Toggle menu"
          style={{ color: scrolled ? "var(--foreground)" : "#f4f1ec" }}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="tracking-wide"
                style={{ fontSize: 15 }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary px-6 py-3 text-center text-primary-foreground"
              style={{ fontSize: 14 }}
            >
              Schedule a Tour
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
