import { useRef, useEffect, useState } from "react";
import { facts } from "@/data/horseData";
import { Mountain, Sparkles, Trophy, Zap, TreePine, Shield, Crown, Palette } from "lucide-react";

const iconMap = { Mountain, Sparkles, Trophy, Zap, TreePine, Shield, Crown, Palette } as const;

export default function Facts() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState<boolean[]>(new Array(facts.length).fill(false));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        facts.forEach((_, i) => {
          setTimeout(() => setVisible(v => { const next = [...v]; next[i] = true; return next; }), i * 90);
        });
        obs.disconnect();
      }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="facts" ref={ref} className="relative overflow-hidden" style={{ padding: "var(--section-pad) 0", background: "hsl(var(--background))" }}>
      <div className="container">
        <div className="text-center mb-[clamp(40px,6vw,70px)]">
          <span className="section-label">Did You Know?</span>
          <h2 className="section-title"><em>Eight</em> Fascinating Facts</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {facts.map((fact, i) => {
            const Icon = iconMap[fact.icon];
            return (
              <div
                key={fact.id}
                className={`text-center rounded-2xl p-[clamp(20px,3vw,32px)] border transition-all duration-600 relative overflow-hidden hover:-translate-y-1.5 hover:shadow-lg ${visible[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{
                  background: "hsl(var(--card))",
                  borderColor: "hsla(var(--green-accent) / 0.3)",
                  transitionDelay: `${i * 0.05}s`,
                }}
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 transition-all" style={{ background: "hsla(var(--green-accent) / 0.1)" }}>
                  <Icon size={24} style={{ color: "hsl(var(--green-accent))" }} />
                </div>
                <h3 className="text-lg font-semibold mb-2.5" style={{ fontFamily: "var(--font-display)", color: "hsl(var(--gold-light))" }}>{fact.title}</h3>
                <p className="text-[13.5px] leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>{fact.text}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-[clamp(50px,7vw,90px)] px-[clamp(16px,6vw,120px)]">
          <blockquote className="italic relative" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(20px, 3vw, 30px)", fontWeight: 300, color: "hsl(var(--muted-foreground))", lineHeight: 1.5 }}>
            <span className="absolute -top-8 -left-5 text-[100px] leading-none" style={{ fontFamily: "var(--font-display)", color: "hsla(var(--gold) / 0.12)" }}>"</span>
            "The Karabakh horse is not merely an animal — it is a poem written in flesh and speed."
          </blockquote>
          <cite className="block mt-4 text-xs tracking-[3px] uppercase not-italic" style={{ color: "hsl(var(--gold))" }}>— Azerbaijani Folk Saying</cite>
        </div>
      </div>
    </section>
  );
}
