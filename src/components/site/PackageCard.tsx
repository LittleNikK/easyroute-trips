import { Link } from "@tanstack/react-router";
import { Clock, MapPin } from "lucide-react";
import type { TourPackage } from "@/data/packages";
import { startingPrice } from "@/data/packages";
import { getDestination } from "@/data/destinations";
import { formatINR } from "@/lib/site";

export function PackageCard({ pkg }: { pkg: TourPackage }) {
  const dest = getDestination(pkg.destination);
  const price = startingPrice(pkg);
  return (
    <Link
      to="/packages/$slug"
      params={{ slug: pkg.slug }}
      className="group flex flex-col overflow-hidden rounded-md border border-border bg-card shadow-soft transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={dest?.image} alt={pkg.title} loading="lazy" width={1280} height={896} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <span className="absolute left-3 top-3 rounded-sm bg-background/95 px-2 py-1 text-xs font-semibold text-primary">
          {pkg.days}D / {pkg.nights}N
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="flex items-center gap-1 text-xs text-muted-foreground"><MapPin className="size-3.5" /> {dest?.state}</p>
        <h3 className="mt-1.5 text-xl font-medium leading-snug">{pkg.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{pkg.summary}</p>
        <div className="mt-auto flex items-end justify-between pt-5">
          <div>
            {price ? (
              <>
                <p className="text-xs text-muted-foreground">{pkg.prices.length > 1 ? "From" : "Price"}</p>
                <p className="text-lg font-bold text-primary">{formatINR(price)}<span className="text-xs font-normal text-muted-foreground"> /person</span></p>
              </>
            ) : (
              <p className="text-sm font-semibold text-primary">Request a Quote</p>
            )}
          </div>
          <span className="flex items-center gap-1 text-xs text-muted-foreground"><Clock className="size-3.5" />{pkg.start}</span>
        </div>
      </div>
    </Link>
  );
}
