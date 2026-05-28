import { useState } from "react";
import { Send, CheckCircle, Mail, MessageCircle } from "lucide-react";
import { AGENCY } from "../data";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputCls =
    "w-full bg-surface-muted border border-surface-border rounded-xl px-4 py-3.5 text-white text-[14px] placeholder-zinc-600 focus:outline-none focus:border-brand-400/50 focus:bg-surface-elevated transition-all";

  return (
    <section id="contact" className="bg-surface-DEFAULT py-28">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="text-brand-400 text-[11px] font-semibold tracking-[0.14em] uppercase mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-brand-400/60" />
              Quick Enquiry
            </p>
            <h2 className="font-display text-4xl lg:text-[3.2rem] text-white leading-[1.08] tracking-tight mb-6">
              Have a question first?
            </h2>
            <p className="text-zinc-500 leading-relaxed font-light text-[15px] mb-10 max-w-sm">
              Use this form for quick questions. For a full project, use the intake form —
              it's how we collect everything needed to build your site.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${AGENCY.email}`}
                className="flex items-center gap-3.5 group"
              >
                <div className="w-10 h-10 glass-card rounded-xl flex items-center justify-center group-hover:border-brand-400/30 transition-colors">
                  <Mail className="w-4 h-4 text-zinc-500 group-hover:text-brand-400 transition-colors" strokeWidth={1.75} />
                </div>
                <span className="text-zinc-500 hover:text-white transition-colors text-sm">{AGENCY.email}</span>
              </a>
              <a
                href={`https://wa.me/${AGENCY.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 group"
              >
                <div className="w-10 h-10 glass-card rounded-xl flex items-center justify-center group-hover:border-brand-400/30 transition-colors">
                  <MessageCircle className="w-4 h-4 text-zinc-500 group-hover:text-brand-400 transition-colors" strokeWidth={1.75} />
                </div>
                <span className="text-zinc-500 hover:text-white transition-colors text-sm">WhatsApp — {AGENCY.phone}</span>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="glass-card rounded-2xl p-8">
            {sent ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-brand-400/10 border border-brand-400/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <CheckCircle className="w-8 h-8 text-brand-400" strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-white font-bold text-2xl mb-2">Message received</h3>
                <p className="text-zinc-500 text-sm font-light">
                  We'll get back to you within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block text-zinc-500 text-[11px] font-semibold uppercase tracking-[0.1em] mb-2.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Full name"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className="block text-zinc-500 text-[11px] font-semibold uppercase tracking-[0.1em] mb-2.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className="block text-zinc-500 text-[11px] font-semibold uppercase tracking-[0.1em] mb-2.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your project..."
                    className={`${inputCls} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2.5 bg-brand-400 text-zinc-950 font-bold py-4 rounded-xl hover:bg-brand-300 transition-all hover:shadow-lime-glow text-[14px]"
                >
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
