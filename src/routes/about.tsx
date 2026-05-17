import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/site/About";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Elizabeth — Executive Career Strategist" },
      { name: "description", content: "Meet Elizabeth — a private advisor for executives. Reverse recruiter, resume architect, and career strategist." },
      { property: "og:title", content: "About Elizabeth — Executive Career Atelier" },
      { property: "og:description", content: "A private advisor for the people who run the room." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: () => <div className="pt-32"><About /></div>,
});
