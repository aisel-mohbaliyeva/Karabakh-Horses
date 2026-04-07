import { ArrowUp } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

const links = {
  Explore: [
    { href: "#about", labelKey: "nav.about" as const },
    { href: "#gallery", labelKey: "nav.gallery" as const },
    { href: "#facts", labelKey: "nav.facts" as const },
    { href: "#horses", labelKey: "nav.horses" as const },
    { href: "#contact", labelKey: "nav.contact" as const },
  ],
  Connect: [
    { href: "https://instagram.com", label: "Instagram" },
    { href: "https://youtube.com", label: "YouTube" },
    { href: "https://wa.me/994501234567", label: "WhatsApp" },
    { href: "https://en.wikipedia.org/wiki/Karabakh_horse", label: "Wikipedia" },
  ],
};

interface FooterProps {
  onScrollTop: () => void;
}

export default function Footer({ onScrollTop }: FooterProps) {
  const { t } = useI18n();
  return (
    <footer className="relative" style={{ padding: "var(--section-pad) 0 0", background: "hsl(var(--foreground))" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, hsl(var(--gold)), transparent)" }} />

      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-[clamp(24px,4vw,60px)] pb-[clamp(40px,6vw,70px)]">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4" style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 600, color: "hsl(var(--cream))" }}>
              <span className="text-base animate-spin" style={{ color: "hsl(var(--gold))", animationDuration: "8s" }}>✦</span>
              {t("brand.name")}
            </div>
            <p className="text-sm leading-7 mb-5 max-w-[300px]" style={{ color: "hsla(var(--cream) / 0.45)" }}>
              {t("footer.tagline")}
            </p>
            <a href="https://en.wikipedia.org/wiki/Karabakh_horse" target="_blank" rel="noreferrer" className="text-xs font-semibold tracking-[1.5px] uppercase transition-all hover:tracking-[2px]" style={{ color: "hsl(var(--gold))" }}>{t("footer.learnMore")}</a>
          </div>

          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="text-[11px] font-bold tracking-[3px] uppercase mb-4" style={{ color: "hsl(var(--gold))" }}>{heading === "Explore" ? t("footer.explore") : t("footer.connect")}</h4>
              <ul className="flex flex-col gap-2.5 list-none">
                {heading === "Explore"
                  ? (items as typeof links.Explore).map((item) => (
                      <li key={item.href}>
                        <a href={item.href} className="text-sm transition-all hover:pl-1.5" style={{ color: "hsla(var(--cream) / 0.45)" }}>
                          {t(item.labelKey)}
                        </a>
                      </li>
                    ))
                  : (items as typeof links.Connect).map((item) => (
                      <li key={item.href}>
                        <a href={item.href} target="_blank" rel="noreferrer" className="text-sm transition-all hover:pl-1.5" style={{ color: "hsla(var(--cream) / 0.45)" }}>
                          {item.label}
                        </a>
                      </li>
                    ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-[11px] font-bold tracking-[3px] uppercase mb-4" style={{ color: "hsl(var(--gold))" }}>{t("footer.stayUpdated")}</h4>
            <p className="text-[13px] leading-relaxed mb-4" style={{ color: "hsla(var(--cream) / 0.45)" }}>{t("footer.subscribeText")}</p>
            <div className="flex rounded-lg overflow-hidden" style={{ border: "1px solid hsla(var(--gold) / 0.25)" }}>
              <input type="email" placeholder={t("footer.emailPlaceholder")} aria-label={t("contact.info.email")} className="flex-1 min-w-0 border-none outline-none px-3.5 py-2.5 text-[13px]" style={{ background: "hsla(var(--cream) / 0.05)", color: "hsl(var(--cream))", fontFamily: "var(--font-body)" }} />
              <button className="px-4 py-2.5 text-base font-bold border-none cursor-pointer transition-opacity hover:opacity-85" style={{ background: "linear-gradient(135deg, hsl(var(--gold)), hsl(var(--terracotta)))", color: "hsl(var(--dark-brown))" }}>→</button>
            </div>
          </div>
        </div>

        <div className="h-px" style={{ background: "hsla(var(--cream) / 0.06)" }} />

        <div className="flex items-center justify-between py-5 flex-wrap gap-2.5 max-sm:justify-center max-sm:text-center">
          <p className="text-xs tracking-[0.5px]" style={{ color: "hsla(var(--cream) / 0.3)" }}>© {new Date().getFullYear()} {t("brand.name")}. {t("footer.rights")}</p>
          <p className="text-xs" style={{ color: "hsla(var(--gold) / 0.5)" }}>by Aysel Mohbaliyeva</p>
          <button onClick={onScrollTop} aria-label="Back to top" className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:-translate-y-1" style={{ background: "hsla(var(--gold) / 0.15)", border: "1px solid hsla(var(--gold) / 0.3)", color: "hsl(var(--gold))" }}>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
