import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, X, AlertTriangle, MapPin, Clock, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PackageCard } from "@/components/site/PackageCard";
import { getPackage, PACKAGES } from "@/data/packages";
import { getDestination } from "@/data/destinations";
import { formatINR, SITE, waLink } from "@/lib/site";

export const Route = createFileRoute("/packages/$slug")({
  loader: ({ params }) => {
    const pkg = getPackage(params.slug);
    if (!pkg) throw notFound();
    return { pkg };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Package not found — EasyRoute Trips" }, { name: "robots", content: "noindex" }] };
    const { pkg } = loaderData;
    const t = `${pkg.title} — ${pkg.days} Days / ${pkg.nights} Nights | EasyRoute Trips`;
    return {
      meta: [
        { title: t },
        { name: "description", content: pkg.summary },
        { property: "og:title", content: t },
        { property: "og:description", content: pkg.summary },
        { property: "og:type", content: "product" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container-x py-24 text-center">
      <h1 className="text-3xl">Package not found</h1>
      <Link to="/packages" className="mt-4 inline-block text-primary underline">See all packages</Link>
    </div>
  ),
  component: PackageDetail,
});

function PackageDetail() {
  const { pkg } = Route.useLoaderData();
  const dest = getDestination(pkg.destination);
  const msg = `Hi EasyRoute Trips, I'm interested in the ${pkg.title} (${pkg.days}D/${pkg.nights}N) package. Please share availability.`;
  const related = PACKAGES.filter((p) => p.slug !== pkg.slug && (p.destination === pkg.destination || p.styles.some((s) => pkg.styles.includes(s)))).slice(0, 3);

  return (
    <>
      <section className="relative isolate overflow-hidden text-primary-foreground">
        <img src={dest?.image} alt={pkg.title} width={1280} height={896} className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-overlay" />
        <div className="container-x pb-14 pt-32 md:pt-48">
          <nav className="text-xs text-primary-foreground/75" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / <Link to="/packages">Packages</Link> / <span>{pkg.title}</span>
          </nav>
          <h1 className="mt-3 max-w-3xl text-4xl font-medium md:text-6xl">{pkg.title}</h1>
          <div className="mt-4 flex flex-wrap gap-5 text-sm text-primary-foreground/90">
            <span className="flex items-center gap-1.5"><Clock className="size-4" />{pkg.days} Days / {pkg.nights} Nights</span>
            <span className="flex items-center gap-1.5"><MapPin className="size-4" />Starts: {pkg.start}</span>
          </div>
        </div>
      </section>

      <div className="container-x grid gap-12 py-14 lg:grid-cols-[1fr_380px]">
        <div className="space-y-12">
          <section>
            <p className="text-lg leading-relaxed">{pkg.summary}</p>
            {pkg.route && <p className="mt-3 text-sm text-muted-foreground"><span className="font-semibold text-foreground">Route:</span> {pkg.route}</p>}
            <div className="mt-4 flex flex-wrap gap-2">{pkg.styles.map((s) => <span key={s} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium">{s}</span>)}</div>
          </section>

          {pkg.notes && (
            <section className="space-y-2 rounded-md border border-gold/50 bg-gold/10 p-5">
              {pkg.notes.map((n) => <p key={n} className="flex gap-2 text-sm"><AlertTriangle className="mt-0.5 size-4 shrink-0 text-gold-deep" />{n}</p>)}
            </section>
          )}

          <section>
            <h2 className="text-2xl font-medium">Day-wise itinerary</h2>
            <ol className="mt-6 border-l border-border">
              {pkg.itinerary.map((d) => (
                <li key={d.day} className="relative pb-6 pl-6">
                  <span className="absolute -left-[5px] top-1.5 size-2.5 rounded-full bg-gold" />
                  <p className="text-sm font-semibold text-primary">{d.day}</p>
                  <p className="mt-1 text-muted-foreground">{d.text}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-medium">Included</h2>
              <ul className="mt-4 space-y-2">{pkg.inclusions.map((i) => <li key={i} className="flex gap-2 text-sm"><Check className="mt-0.5 size-4 shrink-0 text-primary" />{i}</li>)}</ul>
            </div>
            <div>
              <h2 className="text-2xl font-medium">Not included</h2>
              <ul className="mt-4 space-y-2">{pkg.exclusions.map((i) => <li key={i} className="flex gap-2 text-sm text-muted-foreground"><X className="mt-0.5 size-4 shrink-0 text-destructive" />{i}</li>)}</ul>
            </div>
          </section>

          {pkg.addOns && (
            <section>
              <h2 className="text-2xl font-medium">Optional add-ons</h2>
              <p className="text-sm text-muted-foreground">Charged separately from the package price.</p>
              <ul className="mt-4 divide-y divide-border rounded-md border border-border bg-card">
                {pkg.addOns.map((a) => <li key={a.label} className="flex justify-between px-4 py-3 text-sm"><span>{a.label}</span><span className="font-semibold">{a.price}</span></li>)}
              </ul>
            </section>
          )}

          <section className="text-sm text-muted-foreground">
            <h2 className="text-lg font-medium text-foreground">Booking conditions</h2>
            <p className="mt-2">Published prices are taken from our current itineraries and are not live rates. Hotels, vehicles and activities are subject to availability, and the final price is confirmed in writing before payment. See our <Link to="/terms" className="underline">terms</Link> and <Link to="/cancellation-policy" className="underline">cancellation policy</Link>.</p>
          </section>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-md border border-border bg-card p-6 shadow-soft">
            {pkg.prices.length ? (
              <div className="space-y-4">
                {pkg.prices.map((o) => (
                  <div key={o.label} className="border-b border-border pb-4 last:border-0 last:pb-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{o.label}</p>
                    <p className="font-display text-3xl text-primary">{formatINR(o.price)}<span className="font-sans text-sm text-muted-foreground"> per person</span></p>
                    {o.note && <p className="mt-1 text-xs text-muted-foreground">{o.note}</p>}
                  </div>
                ))}
                {pkg.priceNote && <p className="text-xs font-medium text-gold-deep">{pkg.priceNote}</p>}
              </div>
            ) : (
              <div><p className="font-display text-3xl text-primary">Request a Quote</p><p className="mt-1 text-sm text-muted-foreground">Price depends on dates, hotel and group size.</p></div>
            )}
            <div className="mt-6 space-y-2">
              <Button asChild variant="whatsapp" size="lg" className="w-full"><a href={waLink(msg)} target="_blank" rel="noopener noreferrer"><MessageCircle />Enquire on WhatsApp</a></Button>
              <Button asChild variant="outline" size="lg" className="w-full"><a href={`tel:${SITE.phoneLinks[0]}`}><Phone />Call {SITE.phones[0]}</a></Button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">Prices exclude travel to the starting point unless stated.</p>
          </div>
        </aside>
      </div>

      {related.length > 0 && (
        <section className="bg-muted py-16">
          <div className="container-x">
            <h2 className="text-2xl font-medium">You might also like</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{related.map((p) => <PackageCard key={p.slug} pkg={p} />)}</div>
          </div>
        </section>
      )}

      <div className="fixed inset-x-0 bottom-0 z-30 flex gap-2 border-t border-border bg-background p-3 lg:hidden">
        <Button asChild variant="outline" className="flex-1"><a href={`tel:${SITE.phoneLinks[0]}`}><Phone />Call</a></Button>
        <Button asChild variant="whatsapp" className="flex-1"><a href={waLink(msg)} target="_blank" rel="noopener noreferrer"><MessageCircle />WhatsApp</a></Button>
      </div>
    </>
  );
}
