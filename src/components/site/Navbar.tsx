import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";

const links = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/process", label: "Process" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/faq", label: "FAQ" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}
    >
      <div className={`mx-auto max-w-7xl px-6 transition-all duration-500 ${scrolled ? "scale-[0.99]" : ""}`}>
        <nav
          className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
            scrolled ? "glass-strong shadow-luxe" : "border border-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-3 group">
            <span className="grid place-items-center h-9 w-9 rounded-full border border-gold/40 text-gold font-display text-lg">E</span>
            <span className="font-display text-lg tracking-wide">
              Elizabeth <span className="text-muted-foreground font-sans text-xs uppercase tracking-[0.2em] ml-1">Career Atelier</span>
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  activeProps={{ className: "text-foreground" }}
                  className="relative hover:text-foreground transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 hover:after:w-full after:bg-gold after:transition-all after:duration-300"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:shadow-luxe transition-all duration-300 hover:-translate-y-0.5"
          >
            Book Consultation
          </Link>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden h-10 w-10 grid place-items-center rounded-full glass"
          >
            <span className="sr-only">Menu</span>
            <div className="space-y-1.5">
              <span className="block h-px w-5 bg-foreground" />
              <span className="block h-px w-5 bg-foreground" />
            </div>
          </button>
        </nav>

        {open && (
          <div className="md:hidden mt-2 glass-strong rounded-2xl p-5 animate-fade-up">
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="block py-1 text-foreground/90">{l.label}</Link>
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  className="mt-2 inline-flex w-full justify-center rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background"
                >
                  Book Consultation
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
