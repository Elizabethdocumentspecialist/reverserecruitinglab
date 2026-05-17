import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  {
    quote:
      "I just completed my review of the documents. I am extremely impressed — you do high quality professional work. Thank you for your services.",
    name: "Bill R.",
    role: "Senior Director, Energy",
  },
  {
    quote:
      "The work you have done is superb. Elizabeth's strategy completely repositioned my candidacy at the executive level.",
    name: "Richard M.",
    role: "VP, Financial Services",
  },
  {
    quote:
      "Relying on her expertise and experience, the upgraded CV is exceptional and required no further corrections. Truly best-in-class.",
    name: "Aleksandar G.",
    role: "Director, Technology",
  },
  {
    quote:
      "I think it looks great now. I've sent it to the recruiter — Elizabeth's eye for alignment and tone is unmatched.",
    name: "Kevin K.",
    role: "Executive, Consulting",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.24em] text-gold">Client Voices</div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
            Trusted by executives who don't have time to start over.
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {items.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="glass rounded-2xl p-8 h-full hover:border-gold/40 transition-colors">
                <Quote className="h-6 w-6 text-gold" />
                <blockquote className="mt-5 font-display text-xl md:text-2xl leading-snug text-foreground/95">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3 text-sm">
                  <div className="h-10 w-10 rounded-full grid place-items-center border border-gold/40 text-gold font-display">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-foreground">{t.name}</div>
                    <div className="text-muted-foreground text-xs uppercase tracking-[0.18em]">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
