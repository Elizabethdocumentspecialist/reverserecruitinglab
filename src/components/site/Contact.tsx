import { useState } from "react";
import { Mail, Linkedin, Send } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { Reveal } from "./Reveal";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  service: z.string().min(1, "Select a service"),
  message: z.string().trim().min(10, "Tell me a bit more").max(1500),
});

const services = [
  "Reverse Recruiting",
  "Executive Resume Writing",
  "ATS Resume Optimization",
  "LinkedIn Optimization",
  "Career Strategy",
  "Federal Resume Support",
  "Interview Preparation",
  "Job Search Management",
];

export function Contact() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(fd.entries()));
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    toast.success("Request received — Elizabeth will be in touch within 24 hours.");
    (e.target as HTMLFormElement).reset();
  }

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12">
        <Reveal className="lg:col-span-5">
          <div className="text-xs uppercase tracking-[0.24em] text-gold">Contact</div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
            Begin a private consultation.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            Share a few details about your goals. Elizabeth personally reviews every inquiry and
            responds within one business day.
          </p>

          <div className="mt-10 space-y-4">
            <a href="mailto:elizabethdocumentspecialist@gmail.com"
               className="flex items-center gap-4 glass rounded-xl p-4 hover:border-gold/40 transition-colors">
              <div className="h-10 w-10 grid place-items-center rounded-lg bg-gold/10 text-gold border border-gold/30">
                <Mail className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Email</div>
                <div className="text-foreground text-sm">elizabethdocumentspecialist@gmail.com</div>
              </div>
            </a>
            <a href="#" className="flex items-center gap-4 glass rounded-xl p-4 hover:border-gold/40 transition-colors">
              <div className="h-10 w-10 grid place-items-center rounded-lg bg-gold/10 text-gold border border-gold/30">
                <Linkedin className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">LinkedIn</div>
                <div className="text-foreground text-sm">Connect with Elizabeth</div>
              </div>
            </a>
          </div>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-7">
          <form onSubmit={onSubmit} className="glass-strong rounded-3xl p-8 md:p-10 shadow-luxe space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Name" name="name" placeholder="Your full name" />
              <Field label="Email" name="email" type="email" placeholder="you@company.com" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Service Needed</label>
              <select
                name="service"
                defaultValue=""
                required
                className="mt-2 w-full rounded-xl bg-foreground/[0.04] border border-foreground/15 px-4 py-3.5 text-sm text-foreground focus:outline-none focus:border-gold/60 transition-colors"
              >
                <option value="" disabled className="bg-card">Select a service</option>
                {services.map((s) => (
                  <option key={s} value={s} className="bg-card">{s}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Message</label>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell me about your role, target market, and timeline."
                className="mt-2 w-full rounded-xl bg-foreground/[0.04] border border-foreground/15 px-4 py-3.5 text-sm text-foreground focus:outline-none focus:border-gold/60 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-primary-foreground hover:shadow-gold transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60"
            >
              {loading ? "Sending..." : "Request Consultation"}
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required
        className="mt-2 w-full rounded-xl bg-foreground/[0.04] border border-foreground/15 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-gold/60 transition-colors"
      />
    </div>
  );
}
