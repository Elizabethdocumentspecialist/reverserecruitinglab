import {
  Search, FileText, Linkedin, Compass, Landmark, Mic, ScanSearch, Briefcase,
} from "lucide-react";
import { Reveal } from "./Reveal";

const services = [
  { icon: Search, title: "Reverse Recruiting", desc: "I work the market for you — sourcing roles, contacting decision-makers, and managing the pipeline end-to-end." },
  { icon: FileText, title: "Executive Resume Writing", desc: "Bespoke narrative-driven resumes engineered for C-suite, VP, and director-level audiences." },
  { icon: ScanSearch, title: "ATS Resume Optimization", desc: "Algorithmic and human-readable formatting that clears modern applicant tracking systems." },
  { icon: Linkedin, title: "LinkedIn Optimization", desc: "Profile architecture, keyword strategy, and authority positioning that attracts inbound recruiters." },
  { icon: Compass, title: "Career Strategy", desc: "Long-term roadmapping for transitions, promotions, pivots, and executive repositioning." },
  { icon: Landmark, title: "Federal Resume Support", desc: "USAJobs-compliant resumes built to KSAs, GS-grades, and federal hiring nuance." },
  { icon: Mic, title: "Interview Preparation", desc: "Behavioral, executive, and panel rehearsal with frameworks tailored to your target role." },
  { icon: Briefcase, title: "Job Search Management", desc: "Concierge oversight of applications, outreach, scheduling, and offer negotiation." },
];

export function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.24em] text-gold">Services</div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
            A complete career operating system — delivered with discretion.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Eight focused services, designed to be combined or used standalone. Each engagement is
            scoped privately and executed by Elizabeth personally.
          </p>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <article className="group relative h-full rounded-2xl glass p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-luxe overflow-hidden">
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                     style={{ background: "radial-gradient(60% 60% at 50% 0%, oklch(0.82 0.10 85 / 0.10), transparent 70%)" }} />
                <div className="relative">
                  <div className="grid place-items-center h-12 w-12 rounded-xl border border-gold/30 text-gold bg-gold/[0.06]">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <div className="mt-6 text-xs uppercase tracking-[0.2em] text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Learn more →
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
