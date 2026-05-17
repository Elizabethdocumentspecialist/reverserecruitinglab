import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { Results } from "@/components/site/Results";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elizabeth — Executive Reverse Recruiter & Career Strategist" },
      { name: "description", content: "Premium reverse recruiting, executive resume writing, LinkedIn branding, and federal career strategy for senior professionals." },
      { property: "og:title", content: "Elizabeth — Executive Career Atelier" },
      { property: "og:description", content: "Reverse recruiting, executive resumes, and career strategy for senior leaders." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }, {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap",
    }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Testimonials />
        <Results />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <Toaster theme="dark" position="top-center" />
    </div>
  );
}
