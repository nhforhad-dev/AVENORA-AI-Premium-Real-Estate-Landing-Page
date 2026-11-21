import { ReactNode } from "react";
import { Footprints, TrendingUp, Home } from "lucide-react";
import { Eyebrow, SectionTitle, Reveal } from "./Primitives";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { neighborhoods } from "./data";

export function Neighborhoods() {
  return (
    <section id="neighborhoods" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>Know before you buy</Eyebrow>
            <SectionTitle>Neighborhood Insights</SectionTitle>
            <p className="mt-6" style={{ fontSize: 16, lineHeight: 1.8, color: "var(--muted-foreground)" }}>
              We quantify the texture of a place — how it walks, how it grows, what it commands —
              so the feeling of a neighborhood is something you can actually read.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-7 lg:grid-cols-3">
          {neighborhoods.map((n, i) => (
            <Reveal key={n.id} delay={i * 0.08}>
              <article className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-muted">
                <ImageWithFallback
                  src={n.image}
                  alt={`${n.name}, ${n.city} aerial view`}
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(17,19,23,0.05) 0%, rgba(17,19,23,0.15) 40%, rgba(17,19,23,0.85) 100%)" }} />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <div className="uppercase" style={{ fontSize: 11.5, letterSpacing: "0.16em", color: "var(--accent)" }}>{n.city}</div>
                  <h3 className="mt-1" style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 24, color: "#f4f1ec" }}>{n.name}</h3>

                  <div className="mt-6 grid grid-cols-3 gap-3 border-t pt-5" style={{ borderColor: "rgba(244,241,236,0.22)" }}>
                    <Metric icon={<Footprints size={15} />} value={n.walk} label="Walk score" />
                    <Metric icon={<TrendingUp size={15} />} value={n.growth} label="YoY growth" />
                    <Metric icon={<Home size={15} />} value={n.median} label="Median" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Metric({ icon, value, label }: { icon: ReactNode; value: string | number; label: string }) {
  return (
    <div>
      <span style={{ color: "var(--accent)" }}>{icon}</span>
      <div className="mt-1.5" style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, color: "#f4f1ec" }}>{value}</div>
      <div style={{ fontSize: 10.5, letterSpacing: "0.06em", color: "rgba(244,241,236,0.65)" }}>{label}</div>
    </div>
  );
}
