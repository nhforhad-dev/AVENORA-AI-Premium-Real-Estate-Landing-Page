import {
  Search,
  Sparkles,
  Target,
  GitCompareArrows,
  MapPinned,
  Calculator,
  CalendarCheck,
  Bell,
} from "lucide-react";
import { Eyebrow, SectionTitle, Reveal } from "./Primitives";

const features = [
  { icon: Search, title: "AI Property Search", body: "Search in plain language. Describe a feeling, a budget, a street — and let the model do the rest." },
  { icon: Sparkles, title: "Smart Recommendations", body: "A shortlist that learns. Every save and skip sharpens what we surface next." },
  { icon: Target, title: "AI Match Score", body: "One transparent number that tells you how closely a home fits your life." },
  { icon: GitCompareArrows, title: "Property Comparison", body: "Compare residences side by side across the metrics that actually matter to you." },
  { icon: MapPinned, title: "Neighborhood Insights", body: "Schools, growth, walkability and quiet — the texture of a place, quantified." },
  { icon: Calculator, title: "Affordability Estimator", body: "Real numbers, instantly — taxes, carrying costs and the true monthly picture." },
  { icon: CalendarCheck, title: "Smart Tour Booking", body: "Confirm in-person or live-video viewings in seconds, synced to your calendar." },
  { icon: Bell, title: "Personalized Alerts", body: "Be first. Get notified the moment a home matching your taste reaches the market." },
];

export function AIFeatures() {
  return (
    <section id="ai-features" className="bg-[#111317] py-24 lg:py-32">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow dark>Intelligence, end to end</Eyebrow>
            <SectionTitle dark>
              Every step, made <span style={{ color: "var(--accent)" }}>smarter</span>
            </SectionTitle>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-xl sm:grid-cols-2 lg:grid-cols-4" style={{ backgroundColor: "rgba(244,241,236,0.12)" }}>
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 0.06}>
              <div className="group h-full bg-[#111317] p-8 transition-colors duration-500 hover:bg-[#16191e]">
                <div
                  className="mb-7 grid h-12 w-12 place-items-center rounded-full transition-colors duration-500"
                  style={{ border: "1px solid rgba(244,241,236,0.2)" }}
                >
                  <f.icon size={20} style={{ color: "var(--accent)" }} />
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 18, color: "#f4f1ec" }}>
                  {f.title}
                </h3>
                <p className="mt-3" style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(244,241,236,0.6)" }}>
                  {f.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
