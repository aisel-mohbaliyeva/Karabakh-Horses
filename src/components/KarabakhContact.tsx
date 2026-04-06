import { useState, useRef, useEffect } from "react";
import { MapPin, Phone, Mail, Instagram, Youtube, MessageCircle, Twitter, Loader2 } from "lucide-react";

const socials = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/994501234567" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
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

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(p => ({ ...p, [name]: value }));
    if (errors[name]) setErrors(p => ({ ...p, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus("sending");
    setTimeout(() => { setStatus("sent"); setForm({ name: "", email: "", message: "" }); }, 1400);
  };

  return (
    <section id="contact" ref={ref} style={{ padding: "var(--section-pad) 0", background: "hsl(var(--warm-section))" }}>
      <div className="container">
        <div className={`grid grid-cols-1 md:grid-cols-[1fr_1.2fr] items-start transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ gap: "clamp(40px, 6vw, 90px)" }}>
          {/* Info */}
          <div>
            <span className="section-label">Get in Touch</span>
            <h2 className="section-title mt-2 mb-5" style={{ fontSize: "clamp(30px, 4vw, 48px)" }}>Connect With <em>Us</em></h2>
            <p className="text-[15px] leading-7 mb-9" style={{ color: "hsl(var(--muted-foreground))" }}>
              Whether you're a researcher, enthusiast, or someone captivated by the beauty of Karabakh horses — we'd love to hear from you.
            </p>

            <ul className="flex flex-col gap-5 mb-9 list-none">
              {[
                { icon: MapPin, title: "Location", value: "Baku, Azerbaijan" },
                { icon: Phone, title: "Phone", value: "+994 50 123 45 67" },
                { icon: Mail, title: "Email", value: "info@karabakh.horses" },
              ].map(item => (
                <li key={item.title} className="flex items-start gap-3.5">
                  <item.icon size={20} style={{ color: "hsl(var(--gold))", flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <strong className="block text-xs font-semibold tracking-[2px] uppercase mb-0.5" style={{ color: "hsl(var(--gold))" }}>{item.title}</strong>
                    <span className="text-[15px]" style={{ color: "hsl(var(--muted-foreground))" }}>{item.value}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex gap-2.5 flex-wrap">
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] border transition-all hover:-translate-y-0.5" style={{ borderColor: "hsla(var(--gold) / 0.2)", color: "hsl(var(--muted-foreground))" }} aria-label={s.label}>
                  <s.icon size={16} />
                  <span className="text-xs font-medium tracking-[0.5px]">{s.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border p-[clamp(28px,4vw,48px)]" style={{ background: "hsl(var(--card))", borderColor: "hsla(var(--gold) / 0.15)" }}>
            {status === "sent" ? (
              <div className="flex flex-col items-center text-center py-10 gap-3.5">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-[28px]" style={{ background: "linear-gradient(135deg, hsl(var(--gold)), hsl(var(--forest)))", color: "hsl(35, 33%, 95%)", animation: "scaleIn 0.4s var(--ease-bounce)" }}>✓</div>
                <h3 className="text-2xl" style={{ fontFamily: "var(--font-display)", color: "hsl(var(--gold-light))" }}>Message Sent!</h3>
                <p className="text-[15px]" style={{ color: "hsl(var(--muted-foreground))" }}>Thank you for reaching out. We'll get back to you soon.</p>
                <button onClick={() => setStatus("idle")} className="mt-2 px-6 py-2.5 rounded-full text-[13px] tracking-[1px] border transition-colors" style={{ borderColor: "hsla(var(--gold) / 0.4)", color: "hsl(var(--gold))", background: "transparent" }}>Send Another</button>
              </div>
            ) : (
              <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
                {(["name", "email", "message"] as const).map(field => (
                  <div key={field} className="flex flex-col gap-1.5">
                    <label htmlFor={field} className="text-[11px] font-semibold tracking-[2px] uppercase" style={{ color: "hsl(var(--gold))" }}>
                      {field === "name" ? "Full Name" : field === "email" ? "Email Address" : "Message"}
                    </label>
                    {field === "message" ? (
                      <textarea id={field} name={field} rows={5} placeholder="Your message..." value={form[field]} onChange={handleChange}
                        className="rounded-lg px-4 py-3 text-[15px] outline-none resize-y transition-all"
                        style={{ background: "hsla(var(--gold) / 0.04)", border: `1px solid ${errors[field] ? "hsl(var(--terracotta))" : "hsl(var(--border))"}`, color: "hsl(var(--foreground))", fontFamily: "var(--font-body)" }}
                      />
                    ) : (
                      <input id={field} name={field} type={field === "email" ? "email" : "text"} placeholder={field === "email" ? "you@example.com" : "Your name"} value={form[field]} onChange={handleChange}
                        className="rounded-lg px-4 py-3 text-[15px] outline-none transition-all"
                        style={{ background: "hsla(var(--gold) / 0.04)", border: `1px solid ${errors[field] ? "hsl(var(--terracotta))" : "hsl(var(--border))"}`, color: "hsl(var(--foreground))", fontFamily: "var(--font-body)" }}
                      />
                    )}
                    {errors[field] && <span className="text-xs" style={{ color: "hsl(var(--terracotta))" }}>{errors[field]}</span>}
                  </div>
                ))}
                <button type="submit" disabled={status === "sending"}
                  className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-[13px] font-bold tracking-[1.5px] uppercase transition-all hover:-translate-y-0.5 disabled:opacity-75"
                  style={{ background: "linear-gradient(135deg, hsl(var(--gold)), hsl(var(--terracotta)))", color: "hsl(var(--dark-brown))", boxShadow: "0 4px 20px hsla(var(--gold) / 0.35)" }}
                >
                  {status === "sending" ? <><Loader2 size={14} className="animate-spin" /> Sending...</> : "Send Message →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
