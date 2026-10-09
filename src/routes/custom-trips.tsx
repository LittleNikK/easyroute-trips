import { createFileRoute } from "@tanstack/react-router";
import { InfoPage, meta } from "@/components/site/InfoPage";

export const Route = createFileRoute("/custom-trips")({
  head: () => meta("Plan a Custom Trip", "Tell us where, when and your budget — EasyRoute Trips will design an itinerary around you."),
  component: () => (
    <InfoPage eyebrow="Custom trip planner" title="Plan my trip"
      intro="Share a few details and we'll reply on WhatsApp with a suggested itinerary and quote. No obligation."
      points={[
        { t: "1. Share your idea", d: "Destination, dates, travellers and rough budget — even a vague idea is fine." },
        { t: "2. Get a plan", d: "We suggest an itinerary, hotels and transport with a clear price." },
        { t: "3. Adjust and confirm", d: "Change anything you like. Book only when it's exactly right." },
      ]}
      form="Custom trip" />
  ),
});
