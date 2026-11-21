import { useState } from "react";
import { BedDouble, Bath, Maximize, MapPin, Calculator } from "lucide-react";
import { Eyebrow, Reveal } from "./Primitives";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { spotlightImg } from "./data";

function MatchRing({ score }: { score: number }) {
  const r = 34;
  const c = 2 * Math.PI * r;
  const off = c - (score / 100) * c;
  return (
    <div className="relative grid place-items-center" style={{ width: 84, height: 84 }}>
      <svg width="84" height="84" className="-rotate-90">
        <circle cx="42" cy="42" r={r} fill="none" stroke="rgba(244,241,236,0.16)" strokeWidth="3" />
        <circle cx="42" cy="42" r={r} fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeDasharray={c} strokeDashoffset={off} />
      </svg>
      <div className="absolute text-center">
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, color: "#f4f1ec", lineHeight: 1 }}>{score}</div>
        <div style={{ fontSize: 9, letterSpacing: "0.1em", color: "rgba(244,241,236,0.6)" }}>MATCH</div>
      </div>
    </div>
  );
}

export function Spotlight() {
  const [down, setDown] = useState(20);
  const price = 8450000;
  const loan = price * (1 - down / 100);
  const monthly = Math.round((loan * (0.0625 / 12)) / (1 - Math.pow(1 + 0.0625 / 12, -360)));

  return (
    <section className="bg-[#111317] py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-6 lg:grid-cols-2 lg:px-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-xl bg-[#1a1d22]">
            <ImageWithFallback
              src={spotlightImg}
              alt="The Meridian Pavilion interior"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute right-5 top-5 rounded-xl p-2" style={{ backgroundColor: "rgba(17,19,23,0.55)", backdropFilter: "blur(8px)", border: "1px solid rgba(244,241,236,0.15)" }}>
              <MatchRing score={98} />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <Eyebrow dark>Property Spotlight</Eyebrow>
          <h2 className="uppercase" style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.04, color: "#f4f1ec" }}>
            The Meridian Pavilion
          </h2>
          <p className="mt-4 inline-flex items-center gap-2" style={{ color: "rgba(244,241,236,0.7)", fontSize: 15 }}>
            <MapPin size={16} style={{ color: "var(--accent)" }} /> Beverly Hills, California
          </p>

          <p className="mt-6 max-w-lg" style={{ color: "rgba(244,241,236,0.66)", fontSize: 15.5, lineHeight: 1.8 }}>
            A study in restraint — travertine, bronze and glass framing the canyon. Floor-to-ceiling
            apertures dissolve the line between interior and hillside.
          </p>

          <div className="mt-8 flex flex-wrap gap-7" style={{ color: "rgba(244,241,236,0.85)" }}>
            <span className="inline-flex items-center gap-2"><BedDouble size={18} style={{ color: "var(--accent)" }} /> 5 Beds</span>
            <span className="inline-flex items-center gap-2"><Bath size={18} style={{ color: "var(--accent)" }} /> 6 Baths</span>
            <span className="inline-flex items-center gap-2"><Maximize size={18} style={{ color: "var(--accent)" }} /> 7,200 sq ft</span>
          </div>

          {/* Affordability estimator */}
          <div className="mt-8 rounded-xl p-6" style={{ border: "1px solid rgba(244,241,236,0.16)", backgroundColor: "rgba(244,241,236,0.04)" }}>
            <div className="flex items-center gap-2" style={{ color: "var(--accent)" }}>
              <Calculator size={15} />
              <span className="uppercase" style={{ fontSize: 11.5, letterSpacing: "0.14em" }}>Affordability estimator</span>
            </div>
            <div className="mt-5 flex items-end justify-between">
              <div>
                <div style={{ fontSize: 12.5, color: "rgba(244,241,236,0.6)" }}>Down payment · {down}%</div>
                <input
                  type="range"
                  min={10}
                  max={50}
                  value={down}
                  onChange={(e) => setDown(Number(e.target.value))}
                  className="mt-3 w-44 accent-[var(--accent)]"
                />
              </div>
              <div className="text-right">
                <div style={{ fontSize: 12.5, color: "rgba(244,241,236,0.6)" }}>Est. monthly</div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 26, color: "#f4f1ec" }}>
                  ${monthly.toLocaleString()}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 28, color: "var(--accent)" }}>$8,450,000</div>
            <a href="#contact" className="ml-auto rounded-full bg-[var(--accent)] px-7 py-3.5 text-[#111317] transition-transform hover:scale-[1.03]" style={{ fontSize: 14.5 }}>
              Book a private tour
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
