import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { NAV_ROUTES } from "@/config/routes";

export const NAV = NAV_ROUTES;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-baseline gap-1.5" onClick={() => setOpen(false)}>
          <span className="font-display text-xl font-semibold text-primary">EasyRoute</span>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">Trips</span>
        </Link>
        <nav className="hidden items-center gap-6 xl:flex" aria-label="Main">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className="text-sm font-medium text-foreground/80 hover:text-primary" activeProps={{ className: "text-primary" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={`tel:${SITE.phoneLinks[0]}`} className="hidden items-center gap-1.5 text-sm font-medium text-primary md:flex">
            <Phone className="size-4" /> {SITE.phones[0]}
          </a>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link to="/custom-trips">Plan My Trip</Link>
          </Button>
          <button className="p-2 xl:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border bg-background xl:hidden" aria-label="Mobile">
          <div className="container-x flex flex-col py-3">
            <Link to="/" className="py-2.5 font-medium" onClick={() => setOpen(false)}>Home</Link>
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} className="py-2.5 font-medium" onClick={() => setOpen(false)}>{n.label}</Link>
            ))}
            <Button asChild className="mt-3"><Link to="/custom-trips" onClick={() => setOpen(false)}>Plan My Trip</Link></Button>
          </div>
        </nav>
      )}
    </header>
  );
}
