// src/components/KarabakhGallery.tsx
import { useState, useRef, useEffect } from "react";
import { galleryImages } from "@/data/horseData";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  // Intersection Observer: animasiya üçün
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Keyboard navigation üçün
  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox(p => ((p ?? 0) + 1) % galleryImages.length);
      if (e.key === "ArrowLeft") setLightbox(p => ((p ?? 0) - 1 + galleryImages.length) % galleryImages.length);
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", handler); document.body.style.overflow = ""; };
  }, [lightbox]);

  return (
    <section id="gallery" ref={sectionRef} className="py-16 bg-warm-section">
      <div className="container mx-auto px-4">
        {/* Başlıq */}
        <div className={`text-center mb-14 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="section-label">Visual Stories</span>
          <h2 className="section-title">A Gallery of <em>Beauty</em></h2>
          <p className="text-base mt-3.5 text-muted-foreground">
            Each image captures a moment of grace, power, and timeless elegance.
          </p>
        </div>

        {/* Pinterest stili columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {galleryImages.map((img, i) => (
            <div
              key={img.id}
              className={`break-inside-avoid mb-4 relative rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg group ${inView ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.06}s`, animationFillMode: "both" }}
              onClick={() => setLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.caption}
                loading="lazy"
                className="w-full block object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity gap-2 bg-black/40">
                <span className="text-sm font-semibold text-center text-white px-2">{img.caption}</span>
                <ZoomIn size={22} className="text-gold-light" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-5 bg-black/90" onClick={() => setLightbox(null)}>
          <div className="relative max-w-[900px] w-full" onClick={e => e.stopPropagation()}>
            <button
              className="absolute -top-10 right-0 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:rotate-90 transition"
              onClick={() => setLightbox(null)}
            >
              <X size={16} />
            </button>
            <button
              className="absolute top-1/2 -translate-y-1/2 -left-10 w-11 h-11 flex items-center justify-center rounded-full bg-black/60 border border-gold/30 text-white"
              onClick={() => setLightbox(p => ((p ?? 0) - 1 + galleryImages.length) % galleryImages.length)}
            >
              <ChevronLeft size={24} />
            </button>
            <img src={galleryImages[lightbox].src} alt={galleryImages[lightbox].caption} className="w-full max-h-[80vh] object-contain rounded-lg" />
            <button
              className="absolute top-1/2 -translate-y-1/2 -right-10 w-11 h-11 flex items-center justify-center rounded-full bg-black/60 border border-gold/30 text-white"
              onClick={() => setLightbox(p => ((p ?? 0) + 1) % galleryImages.length)}
            >
              <ChevronRight size={24} />
            </button>
            <div className="flex items-center justify-between mt-3 text-sm italic text-white/80">
              {galleryImages[lightbox].caption}
              <span className="text-xs text-gold">{lightbox + 1} / {galleryImages.length}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}