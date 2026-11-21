import { useState } from "react";
import { Phone, Mail, MapPin, Check } from "lucide-react";
import { Eyebrow, Reveal } from "./Primitives";

const tourTypes = ["In person", "Live video", "Self-guided"];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [tour, setTour] = useState(0);

  return (
    <section id="contact" className="bg-[#111317] py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1320px] gap-14 px-6 lg:grid-cols-2 lg:px-10">
        <Reveal>
          <Eyebrow dark>Schedule a tour</Eyebrow>
          <h2 className="uppercase" style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(2.2rem, 5vw, 3.6rem)", lineHeight: 1.02, color: "#f4f1ec" }}>
            Let&rsquo;s find
            <br />
            your <span style={{ color: "var(--accent)" }}>address</span>
          </h2>
          <p className="mt-7 max-w-md" style={{ color: "rgba(244,241,236,0.66)", fontSize: 16, lineHeight: 1.8 }}>
            Tell us a little about what you&rsquo;re looking for. An advisor will reach out within
            the hour to arrange your private viewing.
          </p>

          <div className="mt-10 flex flex-col gap-4" style={{ color: "rgba(244,241,236,0.85)" }}>
            <span className="inline-flex items-center gap-3"><Phone size={17} style={{ color: "var(--accent)" }} /> +1 (310) 555-0142</span>
            <span className="inline-flex items-center gap-3"><Mail size={17} style={{ color: "var(--accent)" }} /> advisors@avenora.estate</span>
            <span className="inline-flex items-center gap-3"><MapPin size={17} style={{ color: "var(--accent)" }} /> 9200 Wilshire Blvd, Beverly Hills, CA</span>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-2xl p-8 lg:p-10"
            style={{ backgroundColor: "rgba(244,241,236,0.04)", border: "1px solid rgba(244,241,236,0.14)" }}
          >
            {sent ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full" style={{ backgroundColor: "var(--accent)" }}>
                  <Check size={28} style={{ color: "#111317" }} />
                </span>
                <h3 className="mt-6" style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 24, color: "#f4f1ec" }}>Request received</h3>
                <p className="mt-3 max-w-xs" style={{ color: "rgba(244,241,236,0.66)", fontSize: 15, lineHeight: 1.7 }}>
                  Thank you. An Avenora advisor will be in touch within the hour to confirm your tour.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                <Field label="Full name" placeholder="Eleanor Vance" />
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Email" placeholder="you@email.com" type="email" />
                  <Field label="Phone" placeholder="+1 (___) ___-____" type="tel" />
                </div>
                <Field label="Property or area of interest" placeholder="The Meridian Pavilion · Beverly Hills" />

                <div>
                  <label className="mb-3 block uppercase" style={{ fontSize: 11.5, letterSpacing: "0.14em", color: "rgba(244,241,236,0.6)" }}>Tour type</label>
                  <div className="grid grid-cols-3 gap-2">
                    {tourTypes.map((t, k) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setTour(k)}
                        className="rounded-lg px-3 py-3 transition-colors"
                        style={{
                          fontSize: 13,
                          border: "1px solid rgba(244,241,236,0.18)",
                          backgroundColor: tour === k ? "var(--accent)" : "transparent",
                          color: tour === k ? "#111317" : "rgba(244,241,236,0.8)",
                        }}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-2 rounded-full bg-[var(--accent)] py-4 text-[#111317] transition-transform hover:scale-[1.02]"
                  style={{ fontSize: 15 }}
                >
                  Request my private tour
                </button>
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <div>
      <label className="mb-2 block uppercase" style={{ fontSize: 11.5, letterSpacing: "0.14em", color: "rgba(244,241,236,0.6)" }}>{label}</label>
      <input
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-lg bg-transparent px-4 py-3.5 outline-none transition-colors placeholder:text-[rgba(244,241,236,0.35)] focus:border-[var(--accent)]"
        style={{ fontSize: 15, color: "#f4f1ec", border: "1px solid rgba(244,241,236,0.18)" }}
      />
    </div>
  );
}
