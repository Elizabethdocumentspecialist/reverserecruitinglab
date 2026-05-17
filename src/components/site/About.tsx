import { Reveal } from "./Reveal";
import { BadgeCheck } from "lucide-react";

export function About() {
  const pillars = [
    "Executive Resume Architecture",
    "ATS & Algorithmic Optimization",
    "LinkedIn Authority Branding",
    "Reverse Recruiting Strategy",
    "Federal & Tech Career Pathways",
    "Interview & Negotiation Coaching",
  ];

  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-14 items-start">
        <Reveal className="lg:col-span-5">
          <div className="text-xs uppercase tracking-[0.24em] text-gold">About Elizabeth</div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
            A private advisor for the people who run the room.
          </h2>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Elizabeth is a Reverse Recruiter, Executive Resume Writer, and Career
            Strategist working with senior leaders across <span className="text-foreground">tech, finance,
            federal, and remote-first</span> organizations. Her practice sits at the intersection of
            recruiting intelligence and personal brand strategy.
          </p>
          <p>
            Every engagement is bespoke — quiet, calibrated, and built around the client's
            trajectory. The outcome is a positioning system that opens doors the open market
            rarely surfaces.
          </p>

          <ul className="grid sm:grid-cols-2 gap-3 pt-4">
            {pillars.map((p) => (
              <li key={p} className="flex items-center gap-3 text-foreground/90 text-base">
                <BadgeCheck className="h-4 w-4 text-gold shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
