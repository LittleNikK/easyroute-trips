import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, ReceiptText, Headset, Route as RouteIcon, MessageCircle } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { Button } from "@/components/ui/button";
import { PackageCard } from "@/components/site/PackageCard";
import { PACKAGES, STYLES } from "@/data/packages";
import { DESTINATIONS } from "@/data/destinations";
import { waLink } from "@/lib/site";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EasyRoute Trips — India Tour Packages with Clear Pricing | Pune" },
      { name: "description", content: "Kerala, Darjeeling, Gangtok, Kedarnath, Ladakh, Goa and more. Detailed itineraries, clear inclusions and WhatsApp booking with EasyRoute Trips, Pune." },
      { property: "og:title", content: "EasyRoute Trips — India Tour Packages with Clear Pricing" },
      { property: "og:description", content: "Detailed itineraries, transparent inclusions and personal trip planning from Pune." },
    ],
  }),
  component: Home,
});

export const FAQS = [
  { q: "Are the package prices per person?", a: "Yes. Prices are per person unless stated otherwise, and some packages assume a specific sharing arrangement or minimum group size — this is shown on each package page." },
  { q: "Do prices include flights or trains?", a: "No. Unless a package specifically says so, travel to the starting point (flights, trains) is not included. We can help you book these separately." },
  { q: "Can you customise a listed package?", a: "Yes. We can change dates, hotels, add nights or combine destinations. Share your plan on the Custom Trips page or WhatsApp and we will send a revised quote." },
  { q: "How do I confirm a booking?", a: "Send an enquiry, we confirm availability and the final price in writing, and the booking is confirmed once the advance payment is received as per our terms." },
  { q: "Do you organise group, college and corporate tours?", a: "Yes. We plan trips for friend groups, families, colleges and companies with group pricing on request." },
];

function Home() {
  const featured = PACKAGES.filter((p) => p.featured);
  return (
    <>
      <section className="relative isolate min-h-[88vh] overflow-hidden text-primary-foreground">
        <img src={hero} alt="Sunrise over Himalayan valley with prayer flags" width={1920} height={1088} className="absolute inset-0 -z-10 h-full w-full object-cover" fetchPriority="high" />
        <div className="absolute inset-0 -z-10 bg-overlay" />
        <div className="container-x flex min-h-[88vh] flex-col justify-end pb-20 pt-32">
          <p className="eyebrow text-gold">Planned from Pune · Across India</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-medium leading-[1.05] md:text-7xl">Journeys planned around the people taking them.</h1>
          <p className="mt-6 max-w-xl text-lg text-primary-foreground/85">
            Detailed itineraries, clear inclusions and a real person to talk to — from the first message to the trip home.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="gold" size="lg"><Link to="/packages">Explore packages</Link></Button>
            <Button asChild variant="light" size="lg">
              <a href={waLink("Hi EasyRoute Trips, I'd like help planning a trip.")} target="_blank" rel="noopener noreferrer"><MessageCircle /> Chat on WhatsApp</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <div className="container-x grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
          {[
            [ReceiptText, "Clear pricing", "Inclusions and exclusions listed"],
            [RouteIcon, "Day-wise itineraries", "Know exactly what's planned"],
            [Headset, "Personal support", "Before and during your trip"],
            [ShieldCheck, "Written confirmation", "Final price confirmed before payment"],
          ].map(([Icon, t, d]) => {
            const I = Icon as typeof ShieldCheck;
            return (
              <div key={t as string} className="flex gap-3">
                <I className="mt-0.5 size-5 shrink-0 text-gold-deep" />
                <div><p className="text-sm font-semibold">{t as string}</p><p className="text-xs text-muted-foreground">{d as string}</p></div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="container-x py-20">
        <p className="eyebrow">Travel style</p>
        <h2 className="mt-2 text-3xl font-medium md:text-4xl">What kind of trip are you after?</h2>
        <div className="mt-8 flex flex-wrap gap-2">
          {STYLES.map((s) => (
            <Link key={s} to="/packages" search={{ style: s }} className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium hover:border-primary hover:text-primary">
              {s}
            </Link>
          ))}
        </div>
      </section>

      <section className="container-x pb-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Featured packages</p>
            <h2 className="mt-2 text-3xl font-medium md:text-4xl">Popular with our travellers</h2>
          </div>
          <Link to="/packages" className="text-sm font-semibold text-primary underline-offset-4 hover:underline">View all {PACKAGES.length} packages →</Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => <PackageCard key={p.slug} pkg={p} />)}
        </div>
      </section>

      <section className="bg-muted py-20">
        <div className="container-x">
          <p className="eyebrow">Discover India</p>
          <h2 className="mt-2 text-3xl font-medium md:text-4xl">Destinations we know well</h2>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {DESTINATIONS.slice(0, 8).map((d, i) => (
              <Link key={d.slug} to="/destinations/$slug" params={{ slug: d.slug }} className={`group relative overflow-hidden rounded-md ${i === 0 ? "col-span-2 row-span-2" : ""}`}>
                <img src={d.image} alt={d.name} loading="lazy" width={1280} height={896} className="aspect-square h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-overlay" />
                <div className="absolute bottom-0 p-4 text-primary-foreground">
                  <p className="font-display text-xl md:text-2xl">{d.name}</p>
                  <p className="text-xs text-primary-foreground/80">{d.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x grid gap-12 py-20 md:grid-cols-2">
        <div>
          <p className="eyebrow">How booking works</p>
          <h2 className="mt-2 text-3xl font-medium md:text-4xl">Four simple steps</h2>
          <ol className="mt-8 space-y-6">
            {[
              ["Choose or describe", "Pick a package or tell us the trip you have in mind."],
              ["Talk to us", "We confirm dates, availability and answer every question on WhatsApp or phone."],
              ["Confirm in writing", "You receive the final itinerary and price before paying anything."],
              ["Travel with support", "We stay reachable throughout your trip."],
            ].map(([t, d], i) => (
              <li key={t} className="flex gap-4">
                <span className="font-display text-3xl text-gold-deep">0{i + 1}</span>
                <div><p className="font-semibold">{t}</p><p className="text-sm text-muted-foreground">{d}</p></div>
              </li>
            ))}
          </ol>
        </div>
        <div className="rounded-md bg-primary p-10 text-primary-foreground">
          <p className="eyebrow text-gold">Custom travel planning</p>
          <h3 className="mt-3 text-3xl font-medium">Don't see the trip you want?</h3>
          <p className="mt-4 text-primary-foreground/80">Tell us where, when and your budget. We'll design an itinerary for your family, friends, college or team.</p>
          <Button asChild variant="gold" size="lg" className="mt-8"><Link to="/custom-trips">Plan a custom trip</Link></Button>
        </div>
      </section>

      <section className="border-t border-border bg-card py-20">
        <div className="container-x grid gap-10 md:grid-cols-3">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-2 text-3xl font-medium">Before you book</h2>
          </div>
          <Accordion type="single" collapsible className="md:col-span-2">
            {FAQS.map((f) => (
              <AccordionItem key={f.q} value={f.q}>
                <AccordionTrigger className="text-left text-base">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
