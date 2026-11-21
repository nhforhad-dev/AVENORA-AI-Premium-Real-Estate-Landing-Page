import { useState } from "react";
import { Bot, GitCompareArrows, Bell, Send, Check, Plus } from "lucide-react";
import { Eyebrow, SectionTitle, Reveal } from "./Primitives";

const tabs = [
  { id: "assistant", label: "AI Assistant", icon: Bot },
  { id: "compare", label: "Compare", icon: GitCompareArrows },
  { id: "alerts", label: "Smart Alerts", icon: Bell },
] as const;

type TabId = (typeof tabs)[number]["id"];

const chat = [
  { from: "user", text: "Find me a quiet 4-bed near good schools, under $5M." },
  { from: "ai", text: "I found 7 matches. Casa Lumina in Palm Springs scores 95% — top-rated district, low noise index, and $80k under budget." },
  { from: "user", text: "How does its value compare to the area?" },
  { from: "ai", text: "It's priced 6% below comparable sales this quarter. I'd consider it strong value. Shall I book a tour?" },
];

const compareRows = [
  { label: "AI Match", a: "98%", b: "95%" },
  { label: "Price", a: "$8.45M", b: "$4.92M" },
  { label: "Price / sq ft", a: "$1,174", b: "$911" },
  { label: "Beds / Baths", a: "5 / 6", b: "4 / 5" },
  { label: "Walk score", a: "72", b: "64" },
  { label: "Est. monthly", a: "$41,200", b: "$23,980" },
];

const alertItems = [
  "New oceanfront listing in Malibu — 91% match",
  "Price reduced on The Aria Residence — now $12.3M",
  "3 homes matching your taste in Aspen this week",
];

export function AITools() {
  const [tab, setTab] = useState<TabId>("assistant");

  return (
    <section id="ai-tools" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>Tools that do the work</Eyebrow>
            <SectionTitle>Your AI toolkit</SectionTitle>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card">
            <div className="flex flex-wrap gap-1 border-b border-border p-2">
              {tabs.map((t) => {
                const active = tab === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setTab(t.id)}
                    className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 transition-colors"
                    style={{
                      backgroundColor: active ? "var(--primary)" : "transparent",
                      color: active ? "var(--primary-foreground)" : "var(--muted-foreground)",
                      fontSize: 13.5,
                    }}
                  >
                    <t.icon size={15} /> {t.label}
                  </button>
                );
              })}
            </div>

            <div className="p-6 lg:p-10">
              {tab === "assistant" && (
                <div className="mx-auto max-w-2xl">
                  <div className="flex flex-col gap-4">
                    {chat.map((m, k) => (
                      <div key={k} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                        <div
                          className="max-w-[80%] rounded-2xl px-5 py-3.5"
                          style={{
                            backgroundColor: m.from === "user" ? "var(--primary)" : "var(--secondary)",
                            color: m.from === "user" ? "var(--primary-foreground)" : "var(--foreground)",
                            fontSize: 14.5,
                            lineHeight: 1.6,
                          }}
                        >
                          {m.text}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-3 rounded-full border border-border px-5 py-2.5">
                    <input placeholder="Ask Avenora AI anything…" className="w-full bg-transparent outline-none" style={{ fontSize: 14.5 }} />
                    <button className="grid h-9 w-9 shrink-0 place-items-center rounded-full" style={{ backgroundColor: "var(--accent)" }} aria-label="Send">
                      <Send size={15} style={{ color: "#111317" }} />
                    </button>
                  </div>
                </div>
              )}

              {tab === "compare" && (
                <div className="mx-auto max-w-2xl overflow-hidden rounded-xl border border-border">
                  <div className="grid grid-cols-3" style={{ backgroundColor: "var(--secondary)" }}>
                    <div className="p-4" style={{ fontSize: 12, letterSpacing: "0.08em", color: "var(--muted-foreground)", textTransform: "uppercase" }}>Metric</div>
                    <div className="p-4 text-center" style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 14 }}>Meridian Pavilion</div>
                    <div className="p-4 text-center" style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 14 }}>Casa Lumina</div>
                  </div>
                  {compareRows.map((r, k) => (
                    <div key={r.label} className="grid grid-cols-3 border-t border-border" style={{ backgroundColor: k % 2 ? "transparent" : "rgba(184,151,120,0.05)" }}>
                      <div className="p-4" style={{ fontSize: 13.5, color: "var(--muted-foreground)" }}>{r.label}</div>
                      <div className="p-4 text-center" style={{ fontSize: 14.5, fontFamily: "var(--font-display)", fontWeight: 500 }}>{r.a}</div>
                      <div className="p-4 text-center" style={{ fontSize: 14.5, fontFamily: "var(--font-display)", fontWeight: 500, color: "var(--accent)" }}>{r.b}</div>
                    </div>
                  ))}
                </div>
              )}

              {tab === "alerts" && (
                <div className="mx-auto max-w-2xl">
                  <div className="flex flex-col gap-3">
                    {alertItems.map((a) => (
                      <div key={a} className="flex items-center gap-4 rounded-xl border border-border p-5">
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full" style={{ backgroundColor: "rgba(184,151,120,0.15)" }}>
                          <Check size={16} style={{ color: "var(--accent)" }} />
                        </span>
                        <span style={{ fontSize: 14.5 }}>{a}</span>
                      </div>
                    ))}
                  </div>
                  <button className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 transition-colors hover:bg-secondary" style={{ fontSize: 14 }}>
                    <Plus size={15} /> Create a new alert
                  </button>
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
