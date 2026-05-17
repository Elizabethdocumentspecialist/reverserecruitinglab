import { createFileRoute } from "@tanstack/react-router";
import { FAQ } from "@/components/site/FAQ";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Reverse Recruiting & Executive Resumes" },
      { name: "description", content: "Answers to common questions about reverse recruiting, engagement length, confidentiality, federal resumes, and outcomes." },
      { property: "og:title", content: "FAQ — Elizabeth Career Atelier" },
      { property: "og:description", content: "Questions, answered." },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: () => <div className="pt-32"><FAQ /></div>,
});
