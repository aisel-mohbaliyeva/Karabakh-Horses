import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const heroSlides = [
  { id: 1, headline: "The Golden Horse of the Caucasus", sub: "A living symbol of Azerbaijani heritage — fierce, elegant, immortal." },
  { id: 2, headline: "Speed Born from Ancient Mountains", sub: "Bred for centuries in the highland steppes of Karabakh, unmatched in endurance." },
  { id: 3, headline: "Treasured by Shahs & Tsars", sub: "Prized across empires, the Karabakh horse defined prestige across the ancient world." },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = useCallback((idx: number) => {
    setFading(true);
    setTimeout(() => {
      setCurrent(idx);
      setFading(false);
    }, 400);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      goTo((current + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(t);
  }, [current, goTo]);

  const slide = heroSlides[current];

  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden" id="hero">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.7)" }}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 z-[1]" style={{
        background: "linear-gradient(105deg, hsla(20, 45%, 8%, 0.7) 0%, hsla(20, 45%, 8%, 0.35) 50%, hsla(36, 70%, 30%, 0.2) 100%)"
      }} />

      {/* Content */}
      <div className="container relative z-[3] max-w-[760px]" style={{ paddingTop: "var(--nav-h)" }}>
        <div className="flex items-center gap-3.5 mb-7 animate-fade-up" style={{ animationDelay: "0.1s", animationFillMode: "both" }}>
          <span className="w-10 h-px" style={{ background: "hsl(var(--gold))", opacity: 0.7 }} />
          <span className="text-[11px] font-semibold tracking-[4px] uppercase" style={{ color: "hsl(var(--gold-light))" }}>Azerbaijan's Living Legend</span>
          <span className="w-10 h-px" style={{ background: "hsl(var(--gold))", opacity: 0.7 }} />
        </div>

        <h1
          className={`mb-5 animate-fade-up transition-opacity duration-400 ${fading ? "opacity-20" : "opacity-100"}`}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(38px, 6vw, 78px)",
            fontWeight: 600,
            lineHeight: 1.05,
            color: "hsl(35, 33%, 95%)",
            animationDelay: "0.25s",
            animationFillMode: "both",
          }}
        >
          {slide.headline}
        </h1>

        <p
          className={`mb-11 animate-fade-up transition-opacity duration-400 ${fading ? "opacity-20" : "opacity-100"}`}
          style={{
            fontSize: "clamp(15px, 2vw, 18px)",
            fontWeight: 300,
            lineHeight: 1.65,
            color: "hsla(35, 33%, 95%, 0.75)",
            maxWidth: 500,
            animationDelay: "0.4s",
            animationFillMode: "both",
          }}
        >
          {slide.sub}
        </p>

        <div className="flex items-center gap-4 flex-wrap animate-fade-up" style={{ animationDelay: "0.55s", animationFillMode: "both" }}>
          <a href="#about" className="inline-flex items-center gap-2 px-8 py-3.5 rounded text-[13px] font-bold tracking-[1.5px] uppercase transition-transform hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, hsl(var(--gold)), hsl(var(--terracotta)))",
              color: "hsl(var(--dark-brown))",
              boxShadow: "0 4px 20px hsla(var(--gold) / 0.4)",
            }}
          >
            Discover the Breed
          </a>
          <a href="#gallery" className="inline-flex items-center gap-2 px-7 py-3 rounded text-[13px] tracking-[1.5px] uppercase border transition-colors hover:border-[hsl(var(--gold))]"
            style={{
              borderColor: "hsla(35, 33%, 95%, 0.35)",
              color: "hsla(35, 33%, 95%, 0.85)",
            }}
          >
            View Gallery ↓
          </a>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-9 left-1/2 -translate-x-1/2 flex gap-2.5 z-[4]">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            className="h-1.5 rounded-full border-none cursor-pointer transition-all"
            style={{
              background: i === current ? "hsl(var(--gold))" : "hsla(35, 33%, 95%, 0.3)",
              width: i === current ? 24 : 6,
            }}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        className="absolute left-5 top-1/2 -translate-y-1/2 z-[4] w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-110"
        style={{ background: "hsla(20, 45%, 8%, 0.5)", border: "1px solid hsla(var(--gold) / 0.3)", color: "hsl(35, 33%, 95%)" }}
        onClick={() => goTo((current - 1 + heroSlides.length) % heroSlides.length)}
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        className="absolute right-5 top-1/2 -translate-y-1/2 z-[4] w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-110"
        style={{ background: "hsla(20, 45%, 8%, 0.5)", border: "1px solid hsla(var(--gold) / 0.3)", color: "hsl(35, 33%, 95%)" }}
        onClick={() => goTo((current + 1) % heroSlides.length)}
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Counter */}
      <div className="absolute bottom-10 right-[clamp(16px,4vw,48px)] z-[4] flex items-baseline gap-0.5 max-sm:hidden" style={{ fontFamily: "var(--font-display)", color: "hsla(35, 33%, 95%, 0.5)" }}>
        <span className="text-[28px] font-semibold" style={{ color: "hsl(var(--gold-light))" }}>{String(current + 1).padStart(2, "0")}</span>
        <span className="text-sm"> / </span>
        <span className="text-sm">{String(heroSlides.length).padStart(2, "0")}</span>
      </div>
    </section>
  );
}