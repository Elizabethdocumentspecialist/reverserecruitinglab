import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";

const faqs = [
  { q: "What exactly is reverse recruiting?", a: "Rather than waiting on applications, I actively work the market on your behalf — sourcing aligned roles, contacting decision-makers, managing your pipeline, and coordinating interviews. You stay focused on performing; I run the search." },
  { q: "Who do you typically work with?", a: "Senior professionals and executives across tech, finance, federal, consulting, and remote-first organizations — including career transitions, repositioning, and confidential searches." },
  { q: "How long does an engagement take?", a: "Resume and LinkedIn engagements run 2–3 weeks. Full reverse-recruiting partnerships are typically 90 days, renewable based on goals and market conditions." },
  { q: "Do you guarantee interviews or offers?", a: "I guarantee craft, strategy, and active execution. Interview and offer outcomes depend on market fit, but my clients consistently see significant lift in inbound and conversion." },
  { q: "Is the process confidential?", a: "Absolutely. Discretion is foundational. Many clients are currently employed in senior roles and require full confidentiality throughout the engagement." },
  { q: "Do you work with federal applicants?", a: "Yes — federal resumes are a dedicated specialty, including USAJobs formatting, KSAs, and GS-grade calibration." },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.24em] text-gold">FAQ</div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
            Questions, answered.
          </h2>
        </Reveal>

        <Reveal delay={150} className="mt-12">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass rounded-2xl px-6 border-0"
              >
                <AccordionTrigger className="text-left font-display text-lg md:text-xl hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
