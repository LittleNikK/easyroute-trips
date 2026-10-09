import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { meta } from "@/components/site/InfoPage";
import { SITE, waLink } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => meta("Contact Us", "Call, WhatsApp or email EasyRoute Trips in Pune to plan your next trip."),
  component: () => (
    <>
      <PageHero eyebrow="Contact" title="Talk to us" intro="WhatsApp is usually the quickest way to reach us." />
      <section className="container-x grid gap-10 py-14 lg:grid-cols-[1fr_1.4fr]">
        <ul className="space-y-6">
          <li className="flex gap-3"><MessageCircle className="size-5 text-whatsapp" /><a href={waLink("Hi EasyRoute Trips!")} target="_blank" rel="noopener noreferrer" className="font-medium underline-offset-4 hover:underline">WhatsApp {SITE.phones[0]}</a></li>
          {SITE.phones.map((p, i) => <li key={p} className="flex gap-3"><Phone className="size-5 text-primary" /><a href={`tel:${SITE.phoneLinks[i]}`} className="font-medium">{p}</a></li>)}
          <li className="flex gap-3"><Mail className="size-5 text-primary" /><a href={`mailto:${SITE.email}`} className="font-medium">{SITE.email}</a></li>
          <li className="flex gap-3"><MapPin className="size-5 text-primary" /><span className="font-medium">{SITE.location}</span></li>
        </ul>
        <EnquiryForm context="General" />
      </section>
    </>
  ),
});
