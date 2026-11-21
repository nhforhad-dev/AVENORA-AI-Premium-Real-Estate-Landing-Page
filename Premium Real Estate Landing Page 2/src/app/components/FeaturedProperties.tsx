import { useState } from "react";
import { BedDouble, Bath, Maximize, ArrowUpRight, Heart } from "lucide-react";
import { Eyebrow, SectionTitle, Reveal, MatchBadge } from "./Primitives";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { featuredProperties, Property } from "./data";

function PropertyCard({ p, index }: { p: Property; index: number }) {
  const [liked, setLiked] = useState(false);
  return (
    <Reveal delay={(index % 2) * 0.1}>
      <article className="group overflow-hidden rounded-xl border border-border bg-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl">
        <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
          <ImageWithFallback
            src={p.image}
            alt={`${p.name}, ${p.location}`}
            className="h-full w-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-105"
          />
          <div className="absolute left-4 top-4">
            <MatchBadge score={p.match} />
          </div>
          <button
            onClick={() => setLiked((v) => !v)}
            aria-label="Save property"
            className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full transition-colors"
            style={{ backgroundColor: "rgba(244,241,236,0.92)", backdropFilter: "blur(6px)" }}
          >
            <Heart size={16} style={{ color: liked ? "#b89778" : "#111317", fill: liked ? "#b89778" : "transparent" }} />
          </button>
          <span
            className="absolute bottom-4 left-4 rounded-full px-3 py-1 uppercase"
            style={{ backgroundColor: "var(--primary)", color: "var(--primary-foreground)", fontSize: 10.5, letterSpacing: "0.14em" }}
          >
            {p.tag}
          </span>
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 20 }}>{p.name}</h3>
              <p className="mt-1" style={{ fontSize: 13.5, color: "var(--muted-foreground)" }}>{p.location}</p>
            </div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 19, color: "var(--accent)" }}>
              {p.price}
            </div>
          </div>

          <div className="mt-6 flex items-center gap-6 border-t border-border pt-5" style={{ color: "var(--muted-foreground)" }}>
            <span className="inline-flex items-center gap-2" style={{ fontSize: 13.5 }}><BedDouble size={16} /> {p.beds}</span>
            <span className="inline-flex items-center gap-2" style={{ fontSize: 13.5 }}><Bath size={16} /> {p.baths}</span>
            <span className="inline-flex items-center gap-2" style={{ fontSize: 13.5 }}><Maximize size={16} /> {p.area}</span>
            <ArrowUpRight size={18} className="ml-auto transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ color: "var(--foreground)" }} />
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function FeaturedProperties() {
  return (
    <section id="featured" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <Reveal>
            <Eyebrow>The Collection</Eyebrow>
            <SectionTitle>
              Featured
              <br />
              Residences
            </SectionTitle>
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 transition-colors hover:bg-secondary"
              style={{ fontSize: 14 }}
            >
              View all listings <ArrowUpRight size={16} />
            </a>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-7 md:grid-cols-2">
          {featuredProperties.map((p, i) => (
            <PropertyCard key={p.id} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
