import { Reveal } from "./Reveal";

const steps = [
  { n: "01", t: "Discovery", d: "A private consultation to map your goals, market, and current positioning." },
  { n: "02", t: "Career Audit", d: "Deep review of your resume, LinkedIn, narrative, and competitive landscape." },
  { n: "03", t: "Strategy & Positioning", d: "Bespoke resume architecture, brand voice, and reverse-recruiting plan." },
  { n: "04", t: "Application & Interview Support", d: "Active outreach, application management, and interview coaching through offer." },
];

export function Process() {
  return (
    <section id="process" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.24em] text-gold">The Engagement</div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
            A four-step process, refined over a decade.
          </h2>
        </Reveal>

        <div className="mt-16 relative">
          <div aria-hidden className="hidden md:block absolute left-0 right-0 top-12 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 120}>
                <div className="relative glass rounded-2xl p-7 h-full hover:border-gold/40 transition-colors">
                  <div className="font-display text-5xl gradient-text">{s.n}</div>
                  <h3 className="mt-5 font-display text-2xl">{s.t}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
