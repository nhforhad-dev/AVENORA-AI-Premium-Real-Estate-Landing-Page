import { useState } from "react";
import { Search, Sparkles, MapPin, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { HERO_IMG } from "./data";

const metrics = [
  { value: "$4.2B", label: "Property volume curated" },
  { value: "12,400+", label: "Residences matched" },
  { value: "98%", label: "Client satisfaction" },
];

export function Hero() {
  const [query, setQuery] = useState("");

  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden bg-[#111317]">
      <div className="absolute inset-0">
        <ImageWithFallback
          src={HERO_IMG}
          alt="Modern architectural residence glowing at dusk"
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(17,19,23,0.55) 0%, rgba(17,19,23,0.35) 35%, rgba(17,19,23,0.75) 100%)",
          }}
        />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-[1320px] flex-col justify-end px-6 pb-16 pt-36 lg:px-10 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2"
            style={{ border: "1px solid rgba(244,241,236,0.25)", backgroundColor: "rgba(244,241,236,0.06)" }}
          >
            <Sparkles size={14} style={{ color: "var(--accent)" }} />
            <span style={{ fontSize: 12.5, letterSpacing: "0.14em", color: "#f4f1ec" }}>
              AI-POWERED PROPERTY INTELLIGENCE
            </span>
          </div>

          <h1
            className="uppercase"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              color: "#f4f1ec",
              lineHeight: 0.98,
              letterSpacing: "-0.02em",
              fontSize: "clamp(2.75rem, 7vw, 6rem)",
            }}
          >
            Shaping
            <br />
            Tomorrow&rsquo;s <span style={{ color: "var(--accent)" }}>Living</span>
          </h1>

          <p
            className="mt-7 max-w-xl"
            style={{ color: "rgba(244,241,236,0.78)", fontSize: 17, lineHeight: 1.7 }}
          >
            Avenora Estates pairs an unrivalled collection of architectural residences with
            intelligence that understands how you want to live.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#featured"
              className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 transition-all duration-300 hover:scale-[1.03]"
              style={{ backgroundColor: "var(--accent)", color: "#111317", fontSize: 14.5, letterSpacing: "0.02em" }}
            >
              Explore Residences
              <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#ai-tools"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 transition-all duration-300 hover:bg-white/10"
              style={{ border: "1px solid rgba(244,241,236,0.4)", color: "#f4f1ec", fontSize: 14.5 }}
            >
              Meet the AI Assistant
            </a>
          </div>
        </motion.div>

        {/* AI Search bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 rounded-2xl p-2.5 shadow-2xl"
          style={{ backgroundColor: "rgba(244,241,236,0.96)", backdropFilter: "blur(8px)" }}
        >
          <div className="flex flex-col gap-2.5 md:flex-row md:items-center">
            <div className="flex flex-1 items-center gap-3 px-4 py-3">
              <Sparkles size={18} style={{ color: "var(--accent)" }} className="shrink-0" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Describe your ideal home — “light-filled villa near the coast under $5M”"
                className="w-full bg-transparent outline-none placeholder:text-[#6f6a62]"
                style={{ fontSize: 15, color: "#111317" }}
              />
            </div>
            <div className="hidden h-8 w-px bg-[rgba(17,19,23,0.12)] md:block" />
            <div className="flex items-center gap-2 px-4 md:px-2">
              <MapPin size={18} style={{ color: "#6f6a62" }} className="shrink-0" />
              <select
                className="w-full cursor-pointer bg-transparent outline-none md:w-36"
                style={{ fontSize: 14.5, color: "#111317" }}
                defaultValue=""
              >
                <option value="">Any location</option>
                <option>Los Angeles</option>
                <option>New York</option>
                <option>Aspen</option>
                <option>Austin</option>
              </select>
            </div>
            <button
              className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: "var(--primary)", color: "var(--primary-foreground)", fontSize: 14.5 }}
            >
              <Search size={17} />
              Search
            </button>
          </div>
        </motion.div>

        {/* Floating trust metrics */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 grid grid-cols-3 gap-px overflow-hidden rounded-xl"
          style={{ border: "1px solid rgba(244,241,236,0.18)", backgroundColor: "rgba(244,241,236,0.18)" }}
        >
          {metrics.map((m) => (
            <div key={m.label} className="px-5 py-6" style={{ backgroundColor: "rgba(17,19,23,0.55)", backdropFilter: "blur(6px)" }}>
              <div
                style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.4rem, 3vw, 2rem)", color: "#f4f1ec", lineHeight: 1 }}
              >
                {m.value}
              </div>
              <div className="mt-2" style={{ fontSize: 12.5, color: "rgba(244,241,236,0.7)", letterSpacing: "0.02em" }}>
                {m.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
