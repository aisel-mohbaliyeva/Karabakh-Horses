import { useMemo } from "react";
import { useTheme } from "next-themes";
import Header from "@/components/KarabakhHeader";
import Hero from "@/components/KarabakhHero";
import About from "@/components/KarabakhAbout";
import Gallery from "@/components/KarabakhGallery";
import Facts from "@/components/KarabakhFacts";
import Horses from "@/components/KarabakhHorses";
import Contact from "@/components/KarabakhContact";
import Footer from "@/components/KarabakhFooter";

export default function Index() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const darkMode = useMemo(() => {
    if (theme === "system") return resolvedTheme === "dark";
    return theme === "dark";
  }, [theme, resolvedTheme]);
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="min-h-screen">
      <Header darkMode={darkMode} toggleDark={() => setTheme(darkMode ? "light" : "dark")} />
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
