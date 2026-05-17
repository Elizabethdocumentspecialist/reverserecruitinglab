import { Mail, Linkedin } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative pt-20 pb-10 hairline mt-10">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <span className="grid place-items-center h-10 w-10 rounded-full border border-gold/40 text-gold font-display text-lg">E</span>
            <div className="font-display text-xl">Elizabeth <span className="text-muted-foreground text-xs uppercase tracking-[0.2em] ml-1">Career Atelier</span></div>
          </div>
          <p className="mt-5 text-sm text-muted-foreground max-w-sm leading-relaxed">
            Executive resume writing, reverse recruiting, and career strategy for senior leaders
            who expect discretion and craft.
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="text-xs uppercase tracking-[0.2em] text-gold">Services</div>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {["Reverse Recruiting","Executive Resumes","LinkedIn Branding","Federal Resumes","Interview Coaching"].map(s => (
              <li key={s}><Link to="/services" className="hover:text-foreground transition-colors">{s}</Link></li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="text-xs uppercase tracking-[0.2em] text-gold">Explore</div>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground transition-colors">About</Link></li>
            <li><Link to="/process" className="hover:text-foreground transition-colors">Process</Link></li>
            <li><Link to="/testimonials" className="hover:text-foreground transition-colors">Testimonials</Link></li>
            <li><Link to="/faq" className="hover:text-foreground transition-colors">FAQ</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="text-xs uppercase tracking-[0.2em] text-gold">Connect</div>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li><a href="mailto:elizabethdocumentspecialist@gmail.com" className="inline-flex items-center gap-2 hover:text-foreground transition-colors"><Mail className="h-3.5 w-3.5" /> Email</a></li>
            <li><a href="#" className="inline-flex items-center gap-2 hover:text-foreground transition-colors"><Linkedin className="h-3.5 w-3.5" /> LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 mt-16 pt-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} Elizabeth Career Atelier. All rights reserved.</div>
        <div className="uppercase tracking-[0.2em]">Crafted with discretion.</div>
      </div>
    </footer>
  );
}
