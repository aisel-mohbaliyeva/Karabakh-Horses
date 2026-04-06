import { useRef, useEffect, useState } from "react";
import { famousHorses } from "@/data/horseData";

export default function Horses() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="horses" ref={ref} style={{ padding: "var(--section-pad) 0", background: "linear-gradient(175deg, hsl(var(--warm-section)) 0%, hsl(var(--background)) 100%)" }}>
      <div className="container">
        <div className={`text-center mb-[clamp(40px,6vw,72px)] transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="section-label">The Legends</span>
          <h2 className="section-title">Famous <em>Karabakh</em> Horse's</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-[clamp(50px,7vw,90px)]">
          {famousHorses.map((horse, i) => (
            <div
              key={horse.id}
              className={`rounded-2xl overflow-hidden border transition-all duration-700 hover:shadow-lg group ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ background: "hsl(var(--card))", borderColor: "hsla(var(--gold) / 0.12)", transitionDelay: `${i * 0.15}s` }}
            >
              <div className="relative overflow-hidden">
                <img src={horse.image} alt={horse.name} loading="lazy" className="w-full object-cover transition-transform duration-600 group-hover:scale-105" style={{ aspectRatio: "4/3" }} />
                <div className="absolute bottom-0 left-0 right-0 h-[60%] pointer-events-none" style={{ background: "linear-gradient(to top, hsla(var(--card) / 0.7), transparent)" }} />
              </div>
              <div className="p-6 pt-5">
                <div className="flex items-baseline gap-2.5 mb-3 flex-wrap">
                  <h3 className="text-2xl font-semibold" style={{ fontFamily: "var(--font-display)", color: "hsl(var(--gold-light))" }}>{horse.name}</h3>
                  <span className="text-sm italic" style={{ fontFamily: "var(--font-display)", color: "hsl(var(--muted-foreground))" }}>{horse.meaning}</span>
                </div>
                <p className="text-sm leading-7" style={{ color: "hsl(var(--muted-foreground))" }}>{horse.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Watch Video */}
        <div className={`transition-all duration-700 delay-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
         <div className="text-center mb-7">
         <span className="section-label">Watch</span>
         <p className="text-[15px]" style={{ color: "hsl(var(--muted-foreground))" }}>See Karabakh horses in their natural glory</p>
       </div>
        <div className="relative rounded-2xl overflow-hidden border" style={{ paddingBottom: "48%", boxShadow: "var(--shadow-lg)", borderColor: "hsla(var(--gold) / 0.15)" }}>
        {inView && (
         <iframe
        className="absolute inset-0 w-full h-full border-0"
        src="https://www.youtube.com/embed/e59ojJx3sK0?autoplay=1&mute=1"
        title="Karabakh Horse's"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        />
        )}
        </div>
       </div>
      </div>
    </section>
  );
}
