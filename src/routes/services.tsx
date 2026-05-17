import { createFileRoute } from "@tanstack/react-router";
import { Services } from "@/components/site/Services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Executive Resumes, Reverse Recruiting & LinkedIn" },
      { name: "description", content: "Eight focused services for senior leaders: reverse recruiting, executive resume writing, LinkedIn branding, federal resumes, interview prep, and more." },
      { property: "og:title", content: "Services — Elizabeth Career Atelier" },
      { property: "og:description", content: "A complete career operating system — delivered with discretion." },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: () => <div className="pt-32"><Services /></div>,
});
