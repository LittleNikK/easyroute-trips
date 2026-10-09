import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { PackageCard } from "@/components/site/PackageCard";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { getDestination } from "@/data/destinations";
import { PACKAGES } from "@/data/packages";

export const Route = createFileRoute("/destinations/$slug")({
  loader: ({ params }) => {
    const dest = getDestination(params.slug);
    if (!dest) throw notFound();
    return { dest };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Destination not found — EasyRoute Trips" }, { name: "robots", content: "noindex" }] };
    const { dest } = loaderData;
    const t = `${dest.name} Tour Packages — EasyRoute Trips`;
    return { meta: [{ title: t }, { name: "description", content: dest.description }, { property: "og:title", content: t }, { property: "og:description", content: dest.description }] };
  },
  notFoundComponent: () => (
    <div className="container-x py-24 text-center"><h1 className="text-3xl">Destination not found</h1><Link to="/destinations" className="mt-4 inline-block text-primary underline">All destinations</Link></div>
  ),
  component: DestinationPage,
});

function DestinationPage() {
  const { dest } = Route.useLoaderData();
  const pkgs = PACKAGES.filter((p) => p.destination === dest.slug);
  return (
    <>
      <PageHero eyebrow={dest.state} title={dest.name} intro={dest.tagline} image={dest.image} />
      <section className="container-x grid gap-10 py-14 md:grid-cols-3">
        <div className="md:col-span-2"><p className="text-lg leading-relaxed">{dest.description}</p></div>
        <div className="rounded-md border border-border bg-card p-5">
          <p className="eyebrow">Best time to visit</p>
          <p className="mt-2 font-medium">{dest.bestTime}</p>
        </div>
      </section>
      <section className="container-x pb-14">
        <h2 className="text-3xl font-medium">Packages for {dest.name}</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{pkgs.map((p) => <PackageCard key={p.slug} pkg={p} />)}</div>
      </section>
      <section className="bg-muted py-14">
        <div className="container-x max-w-3xl">
          <h2 className="text-3xl font-medium">Want a different plan for {dest.name}?</h2>
          <p className="mt-2 text-muted-foreground">Tell us your dates and group — we'll tailor it.</p>
          <div className="mt-6"><EnquiryForm context={`${dest.name} trip`} defaultDestination={dest.name} /></div>
        </div>
      </section>
    </>
  );
}
