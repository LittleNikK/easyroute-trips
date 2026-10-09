import { createFileRoute } from "@tanstack/react-router";
import img from "@/assets/hero.jpg";
import { InfoPage, meta } from "@/components/site/InfoPage";

export const Route = createFileRoute("/about")({
  head: () => meta("About Us", "EasyRoute Trips is a Pune-based travel company planning tour packages and custom trips across India."),
  component: () => (
    <InfoPage eyebrow="About EasyRoute Trips" title="A Pune travel team that plans trips the way we'd want them planned." image={img}
      intro="We design India holidays for families, couples, friends, students and companies — with honest pricing and someone you can actually reach."
      points={[
        { t: "Transparent by default", d: "Every package lists what's included and what isn't, so there are no surprises later." },
        { t: "Personal planning", d: "We talk to you before suggesting anything, and adjust plans to fit your group." },
        { t: "Support on the road", d: "You have a direct contact before and during your trip." },
      ]} />
  ),
});
