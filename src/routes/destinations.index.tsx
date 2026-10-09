import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { DESTINATIONS } from "@/data/destinations";
import { PACKAGES } from "@/data/packages";

export const Route = createFileRoute("/destinations/")({
  head: () => ({
    meta: [
      { title: "Explore Destinations in India — EasyRoute Trips" },
      { name: "description", content: "Sikkim, Darjeeling, Kerala, Kedarnath, Jaipur, Varanasi, Ladakh, Nainital, Coorg & Ooty, Shimla and Goa — destinations with ready packages." },
      { property: "og:title", content: "Explore Destinations — EasyRoute Trips" },
      { property: "og:description", content: "Eleven Indian destinations with detailed packages and best times to visit." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Destinations" title="Where would you like to go?" intro="Mountains, backwaters, pilgrimages and beaches — each with packages we run regularly." />
      <section className="container-x grid gap-6 py-14 sm:grid-cols-2 lg:grid-cols-3">
        {DESTINATIONS.map((d) => {
          const n = PACKAGES.filter((p) => p.destination === d.slug).length;
          return (
            <Link key={d.slug} to="/destinations/$slug" params={{ slug: d.slug }} className="group overflow-hidden rounded-md border border-border bg-card shadow-soft">
              <div className="aspect-[4/3] overflow-hidden"><img src={d.image} alt={d.name} loading="lazy" width={1280} height={896} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /></div>
              <div className="p-5">
                <p className="text-xs text-muted-foreground">{d.state}</p>
                <h2 className="mt-1 text-2xl font-medium">{d.name}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{d.tagline}</p>
                <p className="mt-3 text-sm font-semibold text-primary">{n} package{n === 1 ? "" : "s"} →</p>
              </div>
            </Link>
          );
        })}
      </section>
    </>
  ),
});
