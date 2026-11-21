import { Eyebrow, Reveal } from "./Primitives";

const stats = [
  { value: "2014", label: "Founded" },
  { value: "40+", label: "Metros" },
  { value: "320", label: "Advisors" },
];

export function BrandIntro() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1320px] gap-14 px-6 lg:grid-cols-12 lg:px-10">
        <Reveal className="lg:col-span-7">
          <Eyebrow>The Avenora Standard</Eyebrow>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: "clamp(1.5rem, 3vw, 2.4rem)",
              lineHeight: 1.28,
              letterSpacing: "-0.01em",
            }}
          >
            We believe a home is the most personal decision a person makes. So we built an
            advisory that joins <span style={{ color: "var(--accent)" }}>human taste</span> with
            machine precision — curating residences that feel inevitable the moment you see them.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-5 lg:pl-8">
          <p style={{ color: "var(--muted-foreground)", fontSize: 16, lineHeight: 1.8 }}>
            From the first search to the closing signature, Avenora Estates removes friction and
            adds clarity. Our intelligence layer reads thousands of signals; our advisors read you.
            The result is a shortlist of one.
          </p>
          <div className="mt-10 grid grid-cols-3 border-t border-border pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 30, lineHeight: 1 }}>
                  {s.value}
                </div>
                <div className="mt-2 uppercase" style={{ fontSize: 11.5, letterSpacing: "0.16em", color: "var(--muted-foreground)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
