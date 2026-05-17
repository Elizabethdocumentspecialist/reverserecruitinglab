import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import portrait from "@/assets/elizabeth.jpg";

export function Hero() {
  return (
    <section id="top" className="relative pt-36 md:pt-44 pb-24 overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 -top-40 -translate-x-1/2 h-[600px] w-[1100px] rounded-full blur-3xl opacity-30"
             style={{ background: "radial-gradient(closest-side, oklch(0.45 0.11 42 / 0.25), transparent 70%)" }} />
        <div className="absolute inset-0 opacity-[0.05]"
             style={{
               backgroundImage:
                 "linear-gradient(oklch(0.20 0.012 55) 1px, transparent 1px), linear-gradient(90deg, oklch(0.20 0.012 55) 1px, transparent 1px)",
               backgroundSize: "60px 60px",
               maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
             }} />
      </div>

      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Executive Career Atelier
          </div>

          <h1 className="mt-7 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
            Helping professionals land <span className="gradient-text">high-paying opportunities</span> through reverse recruiting & executive branding.
          </h1>

          <p className="mt-7 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            I help executives and senior professionals secure stronger interviews, optimize
            career positioning, and navigate competitive markets with confidence — quietly,
            strategically, and with the calibre of a private advisor.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background hover:shadow-luxe transition-all duration-300 hover:-translate-y-0.5"
            >
              Book a Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-medium hover:border-gold/40 transition-colors"
            >
              View Services
            </Link>
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-6 max-w-xl">
            {[
              ["1,200+", "Executives served"],
              ["94%", "Interview rate"],
              ["15+ yrs", "Recruiting craft"],
            ].map(([n, l]) => (
              <div key={l} className="border-l border-foreground/15 pl-4">
                <dt className="font-display text-2xl md:text-3xl text-foreground">{n}</dt>
                <dd className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-1">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-5 relative animate-fade-up delay-200">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-6 rounded-[2rem] blur-2xl opacity-30"
                 style={{ background: "var(--gradient-gold)" }} />
            <div className="relative glass-strong rounded-[2rem] p-3 shadow-luxe">
              <img
                src={portrait}
                alt="Elizabeth, Reverse Recruiter and Executive Career Strategist"
                className="rounded-[1.5rem] w-full object-cover aspect-[4/5]"
                loading="eager"
              />
              <div className="absolute -bottom-6 -left-6 glass-strong rounded-2xl px-5 py-4 shadow-luxe animate-float">
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Trusted by</div>
                <div className="font-display text-lg text-foreground">Fortune 500 & Federal Leaders</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
