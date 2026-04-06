import { useState, useEffect } from "react";
import Header from "@/components/KarabakhHeader";
import Hero from "@/components/KarabakhHero";
import About from "@/components/KarabakhAbout";
import Gallery from "@/components/KarabakhGallery";
import Facts from "@/components/KarabakhFacts";
import Horses from "@/components/KarabakhHorses";
import Contact from "@/components/KarabakhContact";
import Footer from "@/components/KarabakhFooter";

export default function Index() {
  const [darkMode, setDarkMode] = useState(false);
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen">
      <Header darkMode={darkMode} toggleDark={() => setDarkMode(v => !v)} />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Facts />
        <Horses />
        <Contact />
      </main>
      <Footer onScrollTop={scrollTop} />
    </div>
  );
}
