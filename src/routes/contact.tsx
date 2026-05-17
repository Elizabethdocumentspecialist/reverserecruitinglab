import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Book a Private Consultation" },
      { name: "description", content: "Begin a private consultation. Elizabeth personally reviews every inquiry and responds within one business day." },
      { property: "og:title", content: "Contact — Elizabeth Career Atelier" },
      { property: "og:description", content: "Begin a private consultation." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: () => <div className="pt-32"><Contact /></div>,
});
