import { ArrowUpRight } from "lucide-react";
import { Eyebrow, SectionTitle, Reveal } from "./Primitives";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { blogPosts } from "./data";

export function MarketInsights() {
  return (
    <section id="insights" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <Reveal>
            <Eyebrow>Market Insights</Eyebrow>
            <SectionTitle>
              From the
              <br />
              Journal
            </SectionTitle>
          </Reveal>
          <Reveal delay={0.1}>
            <a href="#insights" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 transition-colors hover:bg-secondary" style={{ fontSize: 14 }}>
              All articles <ArrowUpRight size={16} />
            </a>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-7 md:grid-cols-3">
          {blogPosts.map((b, i) => (
            <Reveal key={b.id} delay={i * 0.08}>
              <article className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted">
                  <ImageWithFallback
                    src={b.image}
                    alt={b.title}
                    className="h-full w-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full px-3 py-1 uppercase" style={{ backgroundColor: "rgba(244,241,236,0.92)", fontSize: 10.5, letterSpacing: "0.12em", color: "#111317" }}>
                    {b.category}
                  </span>
                </div>
                <div className="mt-5 flex items-center gap-3" style={{ fontSize: 12.5, color: "var(--muted-foreground)" }}>
                  <span>{b.date}</span>
                  <span style={{ width: 3, height: 3, borderRadius: 9999, backgroundColor: "var(--muted-foreground)" }} />
                  <span>{b.read}</span>
                </div>
                <h3 className="mt-3 transition-colors group-hover:text-[var(--accent)]" style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 20, lineHeight: 1.3 }}>
                  {b.title}
                </h3>
                <span className="mt-4 inline-flex items-center gap-1.5" style={{ fontSize: 13.5, color: "var(--accent)" }}>
                  Read article <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
