import { Eyebrow, SectionTitle, Reveal } from "./Primitives";

const steps = [
  { n: "01", title: "Tell us how you live", body: "Share your taste, budget and must-haves — in words, not filters." },
  { n: "02", title: "Receive your match", body: "Our model scores the market and returns a shortlist built only for you." },
  { n: "03", title: "Explore with insight", body: "Compare homes, read neighborhoods and estimate true costs in one place." },
  { n: "04", title: "Tour & acquire", body: "Book viewings instantly and close with a dedicated advisor by your side." },
];

export function HowItWorks() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <Eyebrow>The process</Eyebrow>
          <SectionTitle>How it works</SectionTitle>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-border sm:grid-cols-2 lg:grid-cols-4" style={{ backgroundColor: "var(--border)" }}>
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={(i % 4) * 0.08}>
              <div className="group h-full bg-background p-8 transition-colors duration-500 hover:bg-secondary">
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 44, color: "var(--accent)", lineHeight: 1 }}>{s.n}</div>
                <h3 className="mt-6" style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 19 }}>{s.title}</h3>
                <p className="mt-3" style={{ fontSize: 14.5, lineHeight: 1.7, color: "var(--muted-foreground)" }}>{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
