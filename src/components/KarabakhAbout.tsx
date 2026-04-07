import { useRef, useEffect, useState } from "react";
import { Leaf, Zap, Mountain, Sparkles } from "lucide-react";
import aboutHorse from "@/assets/about-horse.jpg";
import aboutHorse2 from "@/assets/about-horse-2.jpg";
import { useI18n } from "@/i18n/I18nProvider";

export default function About() {
  const { t } = useI18n();
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  const pillars = [
    { icon: Leaf, label: t("about.pillar1.label"), desc: t("about.pillar1.desc") },
    { icon: Zap, label: t("about.pillar2.label"), desc: t("about.pillar2.desc") },
    { icon: Mountain, label: t("about.pillar3.label"), desc: t("about.pillar3.desc") },
    { icon: Sparkles, label: t("about.pillar4.label"), desc: t("about.pillar4.desc") },
  ];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="relative overflow-hidden" style={{ padding: "var(--section-pad) 0", background: "linear-gradient(175deg, hsl(var(--background)) 0%, hsl(var(--warm-section)) 100%)" }}>
      <div className="container grid grid-cols-1 md:grid-cols-2 items-center" style={{ gap: "clamp(40px, 6vw, 90px)" }}>
        {/* Image stack */}
        <div className={`relative transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
          <img src={aboutHorse} alt="Karabakh horse" className="w-full rounded-2xl object-cover" style={{ aspectRatio: "3/4", boxShadow: "var(--shadow-lg)" }} loading="lazy" />
          <img src={aboutHorse2} alt="Horse in landscape" className="absolute -bottom-8 -right-8 w-[48%] rounded-lg object-cover border-4 max-md:hidden" style={{ aspectRatio: "1", borderColor: "hsl(var(--background))", boxShadow: "var(--shadow-md)" }} loading="lazy" />
          <div className="absolute top-6 -left-5 rounded-xl px-4 py-3.5 flex flex-col items-center" style={{ background: "linear-gradient(135deg, hsl(var(--gold)), hsl(var(--terracotta)))", boxShadow: "var(--shadow-gold)" }}>
            <span style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 700, color: "hsl(var(--dark-brown))", lineHeight: 1 }}>2,500+</span>
            <span className="text-[10px] font-semibold tracking-[1px] uppercase whitespace-nowrap" style={{ color: "hsla(var(--dark-brown) / 0.75)" }}>{t("about.metric")}</span>
          </div>
        </div>

        {/* Text */}
        <div className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
          <span className="section-label">{t("about.label")}</span>
          <h2 className="section-title mt-2 mb-6" dangerouslySetInnerHTML={{ __html: t("about.title") }} />
          <p className="mb-4 italic" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(16px, 1.8vw, 19px)", lineHeight: 1.65, color: "hsl(var(--muted-foreground))" }}>
            <span dangerouslySetInnerHTML={{ __html: t("about.lede") }} />
          </p>
          <p className="text-[15px] leading-7 mb-3.5" style={{ color: "hsl(var(--muted-foreground))" }}>
            {t("about.p1")}
          </p>
          <p className="text-[15px] leading-7 mb-3.5" style={{ color: "hsl(var(--muted-foreground))" }}>
            {t("about.p2")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-8">
            {pillars.map((p, i) => (
              <div key={p.label} className="flex items-start gap-3 p-3.5 rounded-lg border transition-colors hover:border-[hsla(var(--green-accent)/0.5)]" style={{ background: "hsla(var(--green-accent) / 0.05)", borderColor: "hsla(var(--green-accent) / 0.25)", animationDelay: `${0.1 + i * 0.12}s` }}>
                <p.icon size={20} style={{ color: "hsl(var(--green-accent))", flexShrink: 0, marginTop: 2 }} />
                <div>
                  <strong className="block text-[13px] font-semibold tracking-[0.5px] mb-1" style={{ color: "hsl(var(--green-light))" }}>{p.label}</strong>
                  <p className="text-xs leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <a href="#gallery" className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[2px] uppercase border-b pb-1 transition-colors hover:gap-3.5" style={{ color: "hsl(var(--gold))", borderColor: "hsla(var(--gold) / 0.4)" }}>
            {t("about.cta")}
          </a>
        </div>
      </div>
    </section>
  );
}
