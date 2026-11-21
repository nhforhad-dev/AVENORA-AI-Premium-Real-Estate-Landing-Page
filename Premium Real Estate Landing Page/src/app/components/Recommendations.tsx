import { Sparkles, ArrowUpRight } from "lucide-react";
import { Eyebrow, SectionTitle, Reveal, MatchBadge } from "./Primitives";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { recommendations } from "./data";

export function Recommendations() {
  return (
    <section className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>Curated for you</Eyebrow>
            <SectionTitle>Smart Recommendations</SectionTitle>
            <p className="mt-6" style={{ fontSize: 16, lineHeight: 1.8, color: "var(--muted-foreground)" }}>
              Tuned to your saved homes, search history and budget. The more you explore, the
              sharper your shortlist becomes.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {recommendations.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-xl bg-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl">
                <div className="relative aspect-[5/4] overflow-hidden bg-muted">
                  <ImageWithFallback
                    src={p.image}
                    alt={`${p.name}, ${p.location}`}
                    className="h-full w-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4"><MatchBadge score={p.match} /></div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="inline-flex items-center gap-1.5" style={{ color: "var(--accent)" }}>
                    <Sparkles size={13} />
                    <span style={{ fontSize: 11.5, letterSpacing: "0.08em", textTransform: "uppercase" }}>{p.tag}</span>
                  </div>
                  <h3 className="mt-3" style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 19 }}>{p.name}</h3>
                  <p className="mt-1" style={{ fontSize: 13.5, color: "var(--muted-foreground)" }}>{p.location}</p>
                  <div className="mt-auto flex items-center justify-between border-t border-border pt-5">
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, color: "var(--accent)" }}>{p.price}</span>
                    <span style={{ fontSize: 13, color: "var(--muted-foreground)" }}>{p.beds} bd · {p.area}</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 flex justify-center">
            <button className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-primary-foreground transition-opacity hover:opacity-90" style={{ fontSize: 14.5 }}>
              Refine my recommendations <ArrowUpRight size={16} />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
