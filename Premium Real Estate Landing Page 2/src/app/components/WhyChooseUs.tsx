import { ShieldCheck, Gem, Clock, Handshake } from "lucide-react";
import { Eyebrow, SectionTitle, Reveal } from "./Primitives";

const reasons = [
  { icon: Gem, title: "Curated, not crowded", body: "A deliberately small collection. Every residence is vetted for design, provenance and value." },
  { icon: ShieldCheck, title: "Transparent by design", body: "No hidden numbers. Match scores, costs and comparisons are open and explainable." },
  { icon: Clock, title: "Move at your pace", body: "Browse quietly or close quickly. The platform adapts to your timeline, never the reverse." },
  { icon: Handshake, title: "Advisors who listen", body: "Pair our intelligence with a dedicated human advisor who learns your taste over time." },
];

export function WhyChooseUs() {
  return (
    <section className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1320px] gap-14 px-6 lg:grid-cols-12 lg:px-10">
        <Reveal className="lg:col-span-4">
          <Eyebrow>Why Avenora</Eyebrow>
          <SectionTitle>
            A different kind of advisory
          </SectionTitle>
          <p className="mt-6" style={{ fontSize: 16, lineHeight: 1.8, color: "var(--muted-foreground)" }}>
            We measure success by the rightness of the match — not the size of the catalog.
          </p>
        </Reveal>

        <div className="grid gap-px self-start overflow-hidden rounded-xl border border-border sm:grid-cols-2 lg:col-span-8" style={{ backgroundColor: "var(--border)" }}>
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={(i % 2) * 0.08}>
              <div className="h-full bg-background p-8">
                <r.icon size={24} style={{ color: "var(--accent)" }} />
                <h3 className="mt-6" style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 19 }}>{r.title}</h3>
                <p className="mt-3" style={{ fontSize: 14.5, lineHeight: 1.7, color: "var(--muted-foreground)" }}>{r.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
