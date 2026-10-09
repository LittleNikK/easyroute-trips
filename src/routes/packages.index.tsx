import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { PackageCard } from "@/components/site/PackageCard";
import { PACKAGES, STYLES, startingPrice, type Style } from "@/data/packages";
import { DESTINATIONS } from "@/data/destinations";

type Search = { q?: string; style?: Style; destination?: string; duration?: "short" | "mid" | "long"; sort?: "price-asc" | "price-desc" | "days" };

export const Route = createFileRoute("/packages/")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    q: typeof s.q === "string" ? s.q : undefined,
    style: STYLES.includes(s.style as Style) ? (s.style as Style) : undefined,
    destination: typeof s.destination === "string" ? s.destination : undefined,
    duration: ["short", "mid", "long"].includes(s.duration as string) ? (s.duration as Search["duration"]) : undefined,
    sort: ["price-asc", "price-desc", "days"].includes(s.sort as string) ? (s.sort as Search["sort"]) : undefined,
  }),
  head: () => ({
    meta: [
      { title: "All Tour Packages — EasyRoute Trips" },
      { name: "description", content: "Browse 17 India tour packages with prices, durations and day-wise itineraries: Kerala, Darjeeling, Gangtok, Shimla, Goa, Ladakh and more." },
      { property: "og:title", content: "All Tour Packages — EasyRoute Trips" },
      { property: "og:description", content: "Filter India tour packages by destination, style, duration and price." },
    ],
  }),
  component: PackagesPage,
});

const sel = "rounded-md border border-input bg-card px-3 py-2.5 text-sm";

function PackagesPage() {
  const s = Route.useSearch();
  const navigate = useNavigate({ from: "/packages/" });
  const set = (patch: Partial<Search>) => navigate({ search: (prev) => ({ ...prev, ...patch }), replace: true });

  let list = PACKAGES.filter((p) => {
    if (s.q && !`${p.title} ${p.summary} ${p.destination}`.toLowerCase().includes(s.q.toLowerCase())) return false;
    if (s.style && !p.styles.includes(s.style)) return false;
    if (s.destination && p.destination !== s.destination) return false;
    if (s.duration === "short" && p.days > 3) return false;
    if (s.duration === "mid" && (p.days < 4 || p.days > 5)) return false;
    if (s.duration === "long" && p.days < 6) return false;
    return true;
  });
  if (s.sort === "days") list = [...list].sort((a, b) => a.days - b.days);
  if (s.sort?.startsWith("price")) {
    const dir = s.sort === "price-asc" ? 1 : -1;
    list = [...list].sort((a, b) => ((startingPrice(a) ?? 1e9) - (startingPrice(b) ?? 1e9)) * dir);
  }

  return (
    <>
      <PageHero eyebrow="Tour packages" title="Every package, with the details up front." intro="Published per-person prices, day-wise plans and clear inclusions. Final price and availability are confirmed in writing before booking." />
      <section className="container-x py-12">
        <div className="grid gap-3 rounded-md border border-border bg-card p-4 md:grid-cols-5">
          <input aria-label="Search packages" placeholder="Search e.g. houseboat, Tiger Hill" defaultValue={s.q} onChange={(e) => set({ q: e.target.value || undefined })} className={`${sel} md:col-span-2`} />
          <select aria-label="Destination" value={s.destination ?? ""} onChange={(e) => set({ destination: e.target.value || undefined })} className={sel}>
            <option value="">All destinations</option>
            {DESTINATIONS.map((d) => <option key={d.slug} value={d.slug}>{d.name}</option>)}
          </select>
          <select aria-label="Duration" value={s.duration ?? ""} onChange={(e) => set({ duration: (e.target.value || undefined) as Search["duration"] })} className={sel}>
            <option value="">Any duration</option><option value="short">Up to 3 days</option><option value="mid">4–5 days</option><option value="long">6+ days</option>
          </select>
          <select aria-label="Sort" value={s.sort ?? ""} onChange={(e) => set({ sort: (e.target.value || undefined) as Search["sort"] })} className={sel}>
            <option value="">Recommended</option><option value="price-asc">Price: low to high</option><option value="price-desc">Price: high to low</option><option value="days">Shortest first</option>
          </select>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {STYLES.map((st) => (
            <button key={st} onClick={() => set({ style: s.style === st ? undefined : st })} aria-pressed={s.style === st}
              className={`rounded-full border px-4 py-1.5 text-sm ${s.style === st ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:border-primary"}`}>
              {st}
            </button>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">{list.length} package{list.length === 1 ? "" : "s"}</p>
        {list.length ? (
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{list.map((p) => <PackageCard key={p.slug} pkg={p} />)}</div>
        ) : (
          <div className="mt-6 rounded-md border border-dashed border-border p-10 text-center">
            <p className="font-medium">No packages match these filters.</p>
            <button className="mt-3 text-sm font-semibold text-primary underline" onClick={() => navigate({ search: {}, replace: true })}>Clear filters</button>
          </div>
        )}
      </section>
    </>
  );
}
