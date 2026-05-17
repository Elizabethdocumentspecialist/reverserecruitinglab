import { Reveal } from "./Reveal";
import bill from "@/assets/proof-bill.png";
import kevin from "@/assets/proof-kevin.png";
import aleks from "@/assets/proof-aleksandar.png";

const items = [
  { src: bill, alt: "Email from client Bill praising Elizabeth's work", caption: "Bill — Senior Director, Energy" },
  { src: kevin, alt: "Email from client Kevin K. confirming resume sent to recruiter", caption: "Kevin K. — Executive, Consulting" },
  { src: aleks, alt: "Email from client Aleksandar G. on upgraded CV", caption: "Aleksandar G. — Director, Technology" },
];

export function Proof() {
  return (
    <section id="proof" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.24em] text-gold">Verified Client Feedback</div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
            Real correspondence from real clients.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            Screenshots of unedited emails received after delivery. Names visible only where the client has consented to be referenced publicly.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <Reveal key={it.caption} delay={i * 120}>
              <figure className="glass rounded-2xl p-3 h-full hover:border-gold/40 transition-colors shadow-luxe">
                <div className="overflow-hidden rounded-xl border border-foreground/10 bg-white">
                  <img src={it.src} alt={it.alt} loading="lazy" className="w-full h-auto block" />
                </div>
                <figcaption className="px-2 py-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {it.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
