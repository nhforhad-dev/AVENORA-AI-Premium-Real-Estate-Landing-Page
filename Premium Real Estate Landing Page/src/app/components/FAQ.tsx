import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Eyebrow, SectionTitle, Reveal } from "./Primitives";
import { faqs } from "./data";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1320px] gap-14 px-6 lg:grid-cols-12 lg:px-10">
        <Reveal className="lg:col-span-4">
          <Eyebrow>Answers</Eyebrow>
          <SectionTitle>Frequently asked</SectionTitle>
          <p className="mt-6" style={{ fontSize: 16, lineHeight: 1.8, color: "var(--muted-foreground)" }}>
            Still curious? Our advisors are a message away, any time.
          </p>
        </Reveal>

        <div className="lg:col-span-8">
          <div className="border-t border-border">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={f.q} delay={i * 0.04}>
                  <div className="border-b border-border">
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    >
                      <span style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "clamp(1.05rem, 2vw, 1.3rem)" }}>{f.q}</span>
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border transition-colors" style={{ backgroundColor: isOpen ? "var(--accent)" : "transparent" }}>
                        {isOpen ? <Minus size={16} style={{ color: "#111317" }} /> : <Plus size={16} />}
                      </span>
                    </button>
                    <div
                      className="overflow-hidden transition-all duration-500"
                      style={{ maxHeight: isOpen ? 240 : 0, opacity: isOpen ? 1 : 0 }}
                    >
                      <p className="pb-7 pr-14" style={{ fontSize: 15.5, lineHeight: 1.8, color: "var(--muted-foreground)" }}>{f.a}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
