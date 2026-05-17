import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elizabeth — Executive Reverse Recruiter & Career Strategist" },
      { name: "description", content: "Reverse recruiting, executive resumes, and LinkedIn branding for senior professionals. Private, bespoke, results-driven." },
      { property: "og:title", content: "Elizabeth — Executive Career Atelier" },
      { property: "og:description", content: "Reverse recruiting, executive resumes, and career strategy for senior leaders." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />

      <section className="relative py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.24em] text-gold">A private practice</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
              Quietly opening doors that the open market rarely surfaces.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Elizabeth partners with senior leaders across tech, finance, federal, and remote-first
              organizations to architect resumes, brand, and outreach — end to end.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background hover:shadow-luxe transition-all duration-300 hover:-translate-y-0.5"
              >
                Explore Services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/testimonials"
                className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-medium hover:border-gold/40 transition-colors"
              >
                See Client Proof
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
