import { useState } from "react";
import { ArrowRight, Instagram, Linkedin, Twitter } from "lucide-react";

const columns = [
  { title: "Discover", links: ["Featured Residences", "Smart Recommendations", "Neighborhoods", "Market Insights"] },
  { title: "AI Tools", links: ["AI Search", "Match Score", "Comparison", "Affordability"] },
  { title: "Company", links: ["About Avenora", "Advisors", "Careers", "Press"] },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <footer className="bg-[#0d0f12] pt-20 text-[#f4f1ec]">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        {/* Newsletter / personalized alerts */}
        <div className="grid gap-10 border-b pb-16 lg:grid-cols-2" style={{ borderColor: "rgba(244,241,236,0.14)" }}>
          <div>
            <h3 className="uppercase" style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.05 }}>
              Personalized
              <br />
              property alerts
            </h3>
          </div>
          <div className="flex flex-col justify-center">
            <p style={{ color: "rgba(244,241,236,0.66)", fontSize: 15.5, lineHeight: 1.7 }}>
              Be first to see homes matched to your taste. No noise — only what fits.
            </p>
            <form
              onSubmit={(e) => { e.preventDefault(); setDone(true); }}
              className="mt-6 flex items-center gap-3 border-b pb-3"
              style={{ borderColor: "rgba(244,241,236,0.3)" }}
            >
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
                placeholder={done ? "You're on the list ✦" : "Your email address"}
                disabled={done}
                className="w-full bg-transparent outline-none placeholder:text-[rgba(244,241,236,0.45)]"
                style={{ fontSize: 16 }}
              />
              <button type="submit" aria-label="Subscribe" className="grid h-11 w-11 shrink-0 place-items-center rounded-full transition-transform hover:scale-105" style={{ backgroundColor: "var(--accent)" }}>
                <ArrowRight size={18} style={{ color: "#111317" }} />
              </button>
            </form>
          </div>
        </div>

        {/* Links */}
        <div className="grid gap-10 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid place-items-center rounded-full border" style={{ width: 38, height: 38, borderColor: "rgba(244,241,236,0.35)" }}>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, color: "var(--accent)" }}>AE</span>
              </span>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, letterSpacing: "0.18em", fontSize: 15 }}>AVENORA</span>
            </div>
            <p className="mt-6 max-w-xs" style={{ color: "rgba(244,241,236,0.55)", fontSize: 14.5, lineHeight: 1.7 }}>
              Shaping tomorrow&rsquo;s living — where architectural collection meets intelligence
              that understands you.
            </p>
            <div className="mt-7 flex gap-3">
              {[Instagram, Linkedin, Twitter].map((Icon, k) => (
                <a key={k} href="#top" className="grid h-10 w-10 place-items-center rounded-full border transition-colors hover:bg-white/10" style={{ borderColor: "rgba(244,241,236,0.25)" }}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((c) => (
            <div key={c.title}>
              <div className="uppercase" style={{ fontSize: 11.5, letterSpacing: "0.16em", color: "var(--accent)" }}>{c.title}</div>
              <ul className="mt-5 flex flex-col gap-3.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#top" className="transition-colors hover:text-[var(--accent)]" style={{ fontSize: 14.5, color: "rgba(244,241,236,0.7)" }}>{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t py-8 md:flex-row" style={{ borderColor: "rgba(244,241,236,0.14)" }}>
          <span style={{ fontSize: 13, color: "rgba(244,241,236,0.5)" }}>© 2026 Avenora Estates. All rights reserved.</span>
          <div className="flex gap-6" style={{ fontSize: 13, color: "rgba(244,241,236,0.5)" }}>
            <a href="#top" className="hover:text-[var(--accent)]">Privacy</a>
            <a href="#top" className="hover:text-[var(--accent)]">Terms</a>
            <a href="#top" className="hover:text-[var(--accent)]">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
