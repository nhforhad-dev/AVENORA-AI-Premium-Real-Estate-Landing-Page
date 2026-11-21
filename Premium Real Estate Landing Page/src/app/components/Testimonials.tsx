import { useState } from "react";
import { Quote, ArrowLeft, ArrowRight, Star } from "lucide-react";
import { Eyebrow, Reveal } from "./Primitives";
import { testimonials } from "./data";

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const go = (d: number) => setI((p) => (p + d + testimonials.length) % testimonials.length);

  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
        <Reveal className="text-center">
          <div className="flex justify-center"><Eyebrow>Trusted by discerning buyers</Eyebrow></div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-6 flex flex-col items-center text-center">
            <Quote size={40} style={{ color: "var(--accent)" }} />
            <blockquote
              className="mt-8 max-w-3xl"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "clamp(1.4rem, 3vw, 2.1rem)", lineHeight: 1.35, letterSpacing: "-0.01em" }}
            >
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            <div className="mt-9 flex items-center gap-1" style={{ color: "var(--accent)" }}>
              {Array.from({ length: 5 }).map((_, k) => (
                <Star key={k} size={15} fill="currentColor" />
              ))}
            </div>
            <div className="mt-5">
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 16 }}>{t.name}</div>
              <div style={{ fontSize: 13.5, color: "var(--muted-foreground)" }}>{t.role}</div>
            </div>

            <div className="mt-10 flex items-center gap-3">
              <button onClick={() => go(-1)} aria-label="Previous" className="grid h-11 w-11 place-items-center rounded-full border border-border transition-colors hover:bg-secondary">
                <ArrowLeft size={17} />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, k) => (
                  <button
                    key={k}
                    onClick={() => setI(k)}
                    aria-label={`Go to testimonial ${k + 1}`}
                    style={{
                      width: k === i ? 26 : 8,
                      height: 8,
                      borderRadius: 9999,
                      backgroundColor: k === i ? "var(--accent)" : "var(--border)",
                      transition: "all 0.3s",
                    }}
                  />
                ))}
              </div>
              <button onClick={() => go(1)} aria-label="Next" className="grid h-11 w-11 place-items-center rounded-full border border-border transition-colors hover:bg-secondary">
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
