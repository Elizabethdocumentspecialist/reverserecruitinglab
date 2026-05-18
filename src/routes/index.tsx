import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Sparkles, Clock, Users } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { Reveal } from "@/components/site/Reveal";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { Results } from "@/components/site/Results";
import { Testimonials } from "@/components/site/Testimonials";
import { Proof } from "@/components/site/Proof";
import { FAQ } from "@/components/site/FAQ";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elizabeth — Executive Reverse Recruiter & Career Strategist" },
      { name: "description", content: "Reverse recruiting, executive resumes, and LinkedIn branding for senior professionals. Private, bespoke, results-driven." },
      { property: "og:title", content: "Elizabeth — Executive Career Atelier" },
      { property: "og:description", content: "Reverse recruiting, executive resumes, and career strategy for senior leaders." },
      { name: "keywords", content: "reverse recruiter, executive resume writer, career strategist, LinkedIn optimization, federal resume, executive coaching" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const valueProps = [
  { icon: ShieldCheck, t: "Discreet & private", d: "Every engagement is confidential and handled personally by Elizabeth." },
  { icon: Sparkles, t: "Bespoke positioning", d: "No templates. Your narrative, market, and leverage — engineered from scratch." },
  { icon: Clock, t: "Time given back", d: "We run the search so you can stay focused on the work that pays you today." },
  { icon: Users, t: "Senior-only practice", d: "Director, VP, and C-suite leaders across tech, finance, federal, and remote-first." },
];

const industries = [
  "Technology", "Financial Services", "Federal & Public Sector",
  "Healthcare", "Energy", "Consulting", "SaaS & Product", "Remote-first",
];

function Home() {
  return (
    <>
      <Hero />

      {/* Value props */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.24em] text-gold">Why clients choose Elizabeth</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
              A private practice — not a resume factory.
            </h2>
          </Reveal>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {valueProps.map((v, i) => (
              <Reveal key={v.t} delay={i * 90}>
                <article className="h-full rounded-2xl glass p-7 hover:border-gold/40 transition-colors">
                  <div className="grid place-items-center h-12 w-12 rounded-xl border border-gold/30 text-gold bg-gold/[0.06]">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl">{v.t}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Services />
      <Process />
      <Results />

      {/* Industries */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.24em] text-gold">Industries Served</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
              Trusted across the sectors where careers compound.
            </h2>
          </Reveal>
          <div className="mt-12 flex flex-wrap gap-3">
            {industries.map((i, idx) => (
              <Reveal key={i} delay={idx * 50}>
                <span className="inline-flex items-center rounded-full glass px-5 py-2.5 text-sm text-foreground/90">
                  {i}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <Proof />
      <FAQ />

      {/* Final CTA */}
      <section className="relative py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl glass-strong p-10 md:p-16 shadow-luxe relative overflow-hidden text-center">
            <div aria-hidden className="absolute -top-32 left-1/2 -translate-x-1/2 h-80 w-[600px] rounded-full blur-3xl opacity-40"
                 style={{ background: "var(--gradient-gold)" }} />
            <Reveal>
              <div className="text-xs uppercase tracking-[0.24em] text-gold relative">Begin the engagement</div>
              <h2 className="mt-4 font-display text-4xl md:text-6xl leading-tight relative">
                Quietly open the next chapter of your career.
              </h2>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed relative">
                Consultations are private and limited each month. Tell me about your trajectory —
                I'll respond personally within two business days.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4 relative">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background hover:shadow-luxe transition-all duration-300 hover:-translate-y-0.5"
                >
                  Book a Consultation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-full glass px-8 py-4 text-sm font-medium hover:border-gold/40 transition-colors"
                >
                  Explore Services
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
