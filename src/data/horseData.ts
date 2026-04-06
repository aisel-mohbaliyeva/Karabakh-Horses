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
  { id: 1, src: gallery1, caption: "Kehraba — The Golden One", size: "large" as const },
  { id: 2, src: gallery2, caption: "Classic Karabakh Profile", size: "medium" as const },
  { id: 3, src: gallery3, caption: "Free in the Highlands", size: "small" as const },
  { id: 4, src: gallery4, caption: "Chestnut Coat at Dusk", size: "large" as const },
  { id: 5, src: gallery5, caption: "Gallop at Dawn", size: "medium" as const },
  { id: 6, src: gallery6, caption: "Spirit of the Steppes", size: "small" as const },
  { id: 7, src: gallery7, caption: "Majestic Stride", size: "medium" as const },
  { id: 8, src: gallery8, caption: "Noble Portrait", size: "large" as const },
  { id: 9, src: gallery9, caption: "Wild & Free", size: "small" as const },
];

export const facts = [
  { id: 1, icon: "Mountain" as const, title: "Ancient Origins", text: "The Karabakh horse is one of the world's oldest breeds, with roots tracing back over 2,500 years in the mountain-steppes of the South Caucasus." },
  { id: 2, icon: "Sparkles" as const, title: "Metallic Golden Coat", text: "Their signature chestnut or bay coat carries a distinctive metallic sheen — a natural phenomenon that makes them unlike any other horse breed on Earth." },
  { id: 3, icon: "Trophy" as const, title: "National Symbol", text: "Officially recognized as the national horse of Azerbaijan, the Karabakh breed appears on postage stamps, state emblems, and cultural festivals." },
  { id: 4, icon: "Zap" as const, title: "Exceptional Speed", text: "Despite their compact stature (14–15 hands), Karabakh horses are remarkably fast — historically used in the traditional sport of Chovgan (polo)." },
  { id: 5, icon: "TreePine" as const, title: "Mountain Endurance", text: "Evolved in high-altitude terrain, they possess extraordinary stamina and sure-footedness, thriving where larger breeds would struggle." },
  { id: 6, icon: "Shield" as const, title: "Critically Endangered", text: "At one point fewer than 50 pure Karabakh horses existed. Dedicated breeding programs in Azerbaijan are actively working to restore the population." },
  { id: 7, icon: "Crown" as const, title: "Prized by Royalty", text: "Persian shahs, Russian tsars, and European nobles all coveted Karabakh horse's — they were considered gifts worthy only of kings." },
  { id: 8, icon: "Palette" as const, title: "Cultural Heritage", text: "The horse is central to Azerbaijani folk art, poetry, carpet weaving, and the UNESCO-listed tradition of Chovgan — a sport on horseback." },
];

export const famousHorses = [
  { id: 1, name: "Kehraba", meaning: '"Amber"', image: horseKehraba, desc: "Named for her luminous amber-gold coat, Kehraba is the most celebrated modern Karabakh mare — gentle in temperament yet blazingly fast on the track." },
  { id: 2, name: "Sumakh", meaning: '"Sumac Berry"', image: horseSumakh, desc: "A deep chestnut stallion with a fiery spirit, Sumakh embodies the wild mountain heritage of the breed — loyal, bold, and breathtakingly agile." },
  { id: 3, name: "Zaman", meaning: '"Time"', image: horseZaman, desc: "Zaman represents the timeless nature of the breed — a stately, refined horse whose pedigree can be traced back unbroken for generations in Agdam." },
];