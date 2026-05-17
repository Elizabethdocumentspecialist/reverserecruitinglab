import { createFileRoute } from "@tanstack/react-router";
import { Testimonials } from "@/components/site/Testimonials";
import { Proof } from "@/components/site/Proof";
import { Results } from "@/components/site/Results";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials & Client Proof — Elizabeth" },
      { name: "description", content: "Verified client feedback and email screenshots from executives served. Real correspondence, real results." },
      { property: "og:title", content: "Testimonials & Proof — Elizabeth Career Atelier" },
      { property: "og:description", content: "Real correspondence from real clients." },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <div className="pt-32">
      <Testimonials />
      <Proof />
      <Results />
    </div>
  );
}
