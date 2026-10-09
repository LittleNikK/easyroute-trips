import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { PageHero } from "./PageHero";
import { EnquiryForm } from "./EnquiryForm";

export function InfoPage({ eyebrow, title, intro, image, points, form, children }: {
  eyebrow: string; title: string; intro: string; image?: string;
  points?: { t: string; d: string }[]; form?: string; children?: ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} intro={intro} image={image} />
      {points && (
        <section className="container-x grid gap-8 py-14 md:grid-cols-3">
          {points.map((p) => (
            <div key={p.t} className="border-t-2 border-gold pt-4">
              <h2 className="text-xl font-medium">{p.t}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </section>
      )}
      {children}
      {form && (
        <section className="bg-muted py-14">
          <div className="container-x max-w-3xl">
            <h2 className="text-3xl font-medium">Tell us about your trip</h2>
            <p className="mt-2 text-muted-foreground">Or browse our <Link to="/packages" className="underline">ready packages</Link>.</p>
            <div className="mt-6"><EnquiryForm context={form} /></div>
          </div>
        </section>
      )}
    </>
  );
}

export function LegalPage({ title, intro, sections }: { title: string; intro: string; sections: { h: string; p: string }[] }) {
  return (
    <>
      <PageHero eyebrow="Policies" title={title} intro={intro} />
      <section className="container-x max-w-3xl space-y-8 py-14">
        {sections.map((s) => (
          <div key={s.h}><h2 className="text-xl font-medium">{s.h}</h2><p className="mt-2 leading-relaxed text-muted-foreground">{s.p}</p></div>
        ))}
      </section>
    </>
  );
}

export const meta = (title: string, description: string) => ({
  meta: [
    { title: `${title} — EasyRoute Trips` },
    { name: "description", content: description },
    { property: "og:title", content: `${title} — EasyRoute Trips` },
    { property: "og:description", content: description },
  ],
});
