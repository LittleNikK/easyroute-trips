import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, intro, image, children }: { eyebrow: string; title: string; intro?: string; image?: string; children?: ReactNode }) {
  if (image) {
    return (
      <section className="relative isolate overflow-hidden text-primary-foreground">
        <img src={image} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" width={1280} height={896} />
        <div className="absolute inset-0 -z-10 bg-overlay" />
        <div className="container-x py-24 md:py-32">
          <p className="eyebrow text-gold">{eyebrow}</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-medium md:text-6xl">{title}</h1>
          {intro && <p className="mt-4 max-w-2xl text-lg text-primary-foreground/85">{intro}</p>}
          {children}
        </div>
      </section>
    );
  }
  return (
    <section className="border-b border-border bg-muted">
      <div className="container-x py-16 md:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-medium md:text-5xl">{title}</h1>
        {intro && <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{intro}</p>}
        {children}
      </div>
    </section>
  );
}
