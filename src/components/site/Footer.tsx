import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { SITE, waLink } from "@/lib/site";
import { NAV } from "./Header";

export function Footer() {
  return (
    <footer className="bg-forest-deep text-primary-foreground">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-2xl">EasyRoute Trips</p>
          <p className="mt-3 max-w-sm text-sm text-primary-foreground/70">
            Travel packages and custom trips across India, planned from {SITE.location}.
          </p>
        </div>
        <div>
          <p className="eyebrow text-gold">Explore</p>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            {NAV.map((n) => <li key={n.to}><Link to={n.to} className="hover:text-primary-foreground">{n.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <p className="eyebrow text-gold">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            {SITE.phones.map((p, i) => <li key={p}><a href={`tel:${SITE.phoneLinks[i]}`}>{p}</a></li>)}
            <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            <li>{SITE.location}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-x flex flex-col gap-3 py-5 text-xs text-primary-foreground/60 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} EasyRoute Trips. Prices are per person unless stated and subject to availability.</p>
          <div className="flex gap-4">
            <Link to="/privacy-policy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/cancellation-policy">Cancellation</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppFab() {
  return (
    <a
      href={waLink("Hi EasyRoute Trips, I'd like help planning a trip.")}
      target="_blank" rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-whatsapp text-primary-foreground shadow-soft transition-transform hover:scale-105"
    >
      <MessageCircle className="size-6" />
    </a>
  );
}
