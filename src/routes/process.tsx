import { createFileRoute } from "@tanstack/react-router";
import { Process } from "@/components/site/Process";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Process — A Four-Step Executive Engagement" },
      { name: "description", content: "Discovery, audit, strategy, and active support — a four-step process refined over a decade of executive career work." },
      { property: "og:title", content: "Process — Elizabeth Career Atelier" },
      { property: "og:description", content: "A four-step process, refined over a decade." },
    ],
    links: [{ rel: "canonical", href: "/process" }],
  }),
  component: () => <div className="pt-32"><Process /></div>,
});
