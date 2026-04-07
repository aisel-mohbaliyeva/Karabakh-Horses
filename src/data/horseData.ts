import gallery1 from "../assets/gallery-1.jpg";
import gallery2 from "../assets/gallery-2.jpg";
import gallery3 from "../assets/gallery-3.jpg";
import gallery4 from "../assets/gallery-4.jpg";
import gallery5 from "../assets/gallery-5.jpg";
import gallery6 from "../assets/gallery-6.jpg";
import gallery7 from "../assets/gallery-7.jpg";
import gallery8 from "../assets/gallery-8.jpg";
import gallery9 from "../assets/gallery-9.jpg";
import horseKehraba from "../assets/horse-kehraba.jpg";
import horseSumakh from "../assets/horse-sumakh.jpg";
import horseZaman from "../assets/horse-zaman.jpg";

export const galleryImages = [
  { id: 1, src: gallery1, captionKey: "gallery.caption.1" as const, size: "large" as const },
  { id: 2, src: gallery2, captionKey: "gallery.caption.2" as const, size: "medium" as const },
  { id: 3, src: gallery3, captionKey: "gallery.caption.3" as const, size: "small" as const },
  { id: 4, src: gallery4, captionKey: "gallery.caption.4" as const, size: "large" as const },
  { id: 5, src: gallery5, captionKey: "gallery.caption.5" as const, size: "medium" as const },
  { id: 6, src: gallery6, captionKey: "gallery.caption.6" as const, size: "small" as const },
  { id: 7, src: gallery7, captionKey: "gallery.caption.7" as const, size: "medium" as const },
  { id: 8, src: gallery8, captionKey: "gallery.caption.8" as const, size: "large" as const },
  { id: 9, src: gallery9, captionKey: "gallery.caption.9" as const, size: "small" as const },
];

export const facts = [
  { id: 1, icon: "Mountain" as const, titleKey: "facts.item.1.title" as const, textKey: "facts.item.1.text" as const },
  { id: 2, icon: "Sparkles" as const, titleKey: "facts.item.2.title" as const, textKey: "facts.item.2.text" as const },
  { id: 3, icon: "Trophy" as const, titleKey: "facts.item.3.title" as const, textKey: "facts.item.3.text" as const },
  { id: 4, icon: "Zap" as const, titleKey: "facts.item.4.title" as const, textKey: "facts.item.4.text" as const },
  { id: 5, icon: "TreePine" as const, titleKey: "facts.item.5.title" as const, textKey: "facts.item.5.text" as const },
  { id: 6, icon: "Shield" as const, titleKey: "facts.item.6.title" as const, textKey: "facts.item.6.text" as const },
  { id: 7, icon: "Crown" as const, titleKey: "facts.item.7.title" as const, textKey: "facts.item.7.text" as const },
  { id: 8, icon: "Palette" as const, titleKey: "facts.item.8.title" as const, textKey: "facts.item.8.text" as const },
];

export const famousHorses = [
  { id: 1, name: "Kehraba", meaningKey: "horse.kehraba.meaning" as const, image: horseKehraba, descKey: "horse.kehraba.desc" as const },
  { id: 2, name: "Sumakh", meaningKey: "horse.sumakh.meaning" as const, image: horseSumakh, descKey: "horse.sumakh.desc" as const },
  { id: 3, name: "Zaman", meaningKey: "horse.zaman.meaning" as const, image: horseZaman, descKey: "horse.zaman.desc" as const },
];