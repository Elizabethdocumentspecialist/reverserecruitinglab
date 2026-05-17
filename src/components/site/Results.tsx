import { Reveal } from "./Reveal";

const stats = [
  { n: "8,500+", l: "Interviews secured" },
  { n: "1,200+", l: "Clients supported" },
  { n: "97%", l: "ATS pass rate" },
  { n: "640+", l: "Career transitions" },
];

export function Results() {
  return (
    <section id="results" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl glass-strong p-10 md:p-14 shadow-luxe relative overflow-hidden">
          <div aria-hidden className="absolute -top-32 -right-20 h-80 w-80 rounded-full blur-3xl opacity-40"
               style={{ background: "var(--gradient-gold)" }} />
          <Reveal className="max-w-2xl relative">
            <div className="text-xs uppercase tracking-[0.24em] text-gold">Results</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
              Measurable outcomes. Quietly delivered.
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 relative">
            {stats.map((s, i) => (
              <Reveal key={s.l} delay={i * 100}>
                <div>
                  <div className="font-display text-5xl md:text-6xl gradient-text">{s.n}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.l}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
