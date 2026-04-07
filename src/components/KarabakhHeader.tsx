import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

interface HeaderProps {
  darkMode: boolean;
  toggleDark: () => void;
}

export default function Header({ darkMode, toggleDark }: HeaderProps) {
  const { lang, setLang, t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = (href: string) => {
    setActive(href);
    setMenuOpen(false);
  };

  const navLinks = [
    { href: "#hero", label: t("nav.home") },
    { href: "#about", label: t("nav.about") },
    { href: "#gallery", label: t("nav.gallery") },
    { href: "#facts", label: t("nav.facts") },
    { href: "#horses", label: t("nav.horses") },
    { href: "#contact", label: t("nav.contact") },
  ];

  return (
    <header
      className="fixed top-0 left-0 w-full z-[900] transition-all duration-400"
      style={{
        height: "var(--nav-h)",
        background: scrolled ? "hsla(var(--background) / 0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        boxShadow: scrolled ? "0 1px 0 hsla(var(--gold) / 0.15), var(--shadow-sm)" : "none",
      }}
    >
      <div className="container flex items-center justify-between h-full gap-6">
        <a href="#hero" className="flex items-baseline gap-2 shrink-0" onClick={() => handleLink("#hero")}>
          <span className="text-lg animate-spin" style={{ color: "hsl(var(--gold))", animationDuration: "8s" }}>✦</span>
          <span style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, color: scrolled ? "hsl(var(--foreground))" : "hsl(35, 33%, 95%)" }}>Karabakh</span>
          <span className="text-xs font-medium tracking-[3px] uppercase" style={{ color: "hsl(var(--gold))" }}>{t("brand.name").replace("Karabakh ", "")}</span>
        </a>

        {/* Desktop Nav */}
        <nav className={`flex items-center gap-2 max-md:fixed max-md:top-[var(--nav-h)] max-md:left-0 max-md:w-full max-md:flex-col max-md:items-stretch max-md:p-4 max-md:border-t max-md:transition-all max-md:duration-300 max-md:max-h-[80vh] max-md:overflow-y-auto ${menuOpen ? "max-md:opacity-100 max-md:pointer-events-auto max-md:translate-y-0" : "max-md:opacity-0 max-md:pointer-events-none max-md:-translate-y-3"}`}
          style={{ background: menuOpen ? "hsla(var(--background) / 0.98)" : undefined, backdropFilter: menuOpen ? "blur(20px)" : undefined }}
        >
          {/* Mobile language + theme row */}
          <div className="md:hidden flex items-center justify-between gap-3 pb-3 mb-2 border-b"
            style={{ borderColor: "hsla(var(--gold) / 0.15)" }}
          >
            <label className="flex items-center gap-2 text-xs font-semibold tracking-[1px] uppercase"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              {t("lang.label")}
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value as typeof lang)}
                aria-label={t("lang.label")}
                className="px-2 py-1 rounded-md text-xs"
                style={{
                  background: "hsla(var(--gold) / 0.12)",
                  border: "1px solid hsla(var(--gold) / 0.3)",
                  color: "hsl(var(--foreground))",
                }}
              >
                <option value="az">{t("lang.az")}</option>
                <option value="en">{t("lang.en")}</option>
                <option value="ru">{t("lang.ru")}</option>
              </select>
            </label>

            <button
              onClick={toggleDark}
              className="shrink-0 p-2 rounded-full transition-colors"
              style={{ background: "hsla(var(--gold) / 0.12)", border: "1px solid hsla(var(--gold) / 0.3)", color: "hsl(var(--gold))" }}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>

          <ul className="flex items-center gap-1 max-md:flex-col max-md:items-stretch max-md:gap-0 list-none">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => handleLink(href)}
                  className="block px-3.5 py-2 text-xs font-medium tracking-[1.5px] uppercase rounded-lg transition-colors relative"
                  style={{
                    color:
                      active === href
                        ? "hsl(var(--green-accent))"
                        : menuOpen || scrolled
                          ? "hsl(var(--muted-foreground))"
                          : "hsla(35, 33%, 95%, 0.8)",
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <label className="max-md:hidden flex items-center gap-2 text-xs font-semibold tracking-[1px] uppercase" style={{ color: scrolled ? "hsl(var(--muted-foreground))" : "hsla(35, 33%, 95%, 0.75)" }}>
          {t("lang.label")}
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value as typeof lang)}
            aria-label={t("lang.label")}
            className="px-2 py-1 rounded-md text-xs"
            style={{
              background: "hsla(var(--gold) / 0.12)",
              border: "1px solid hsla(var(--gold) / 0.3)",
              color: scrolled ? "hsl(var(--foreground))" : "hsl(35, 33%, 95%)",
            }}
          >
            <option value="az">{t("lang.az")}</option>
            <option value="en">{t("lang.en")}</option>
            <option value="ru">{t("lang.ru")}</option>
          </select>
        </label>

        <button
          onClick={toggleDark}
          className="max-md:hidden shrink-0 p-2 rounded-full transition-colors"
          style={{ background: "hsla(var(--gold) / 0.12)", border: "1px solid hsla(var(--gold) / 0.3)", color: "hsl(var(--gold))" }}
          aria-label="Toggle theme"
        >
          {darkMode ? <Sun size={16} /> : <Moon size={16} />}
        </button>

        <button
          className="md:hidden shrink-0 z-[901]"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
          style={{ color: scrolled ? "hsl(var(--foreground))" : "hsl(35, 33%, 95%)" }}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
