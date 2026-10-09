import { createFileRoute } from "@tanstack/react-router";
import img from "@/assets/ladakh.jpg";
import { InfoPage, meta } from "@/components/site/InfoPage";

export const Route = createFileRoute("/group-trips")({
  head: () => meta("Group Trips", "Trips for friend groups and families — shared costs, private vehicles and one coordinator handling everything."),
  component: () => (
    <InfoPage eyebrow="Group trips" title="Travel together, without the planning headache." image={img}
      intro="Friends, families and extended groups — we handle stays, vehicles and the day-by-day plan so everyone just enjoys the trip."
      points={[
        { t: "Group pricing", d: "Several packages are priced for groups (for example Ladakh for five, Kerala for three sharing). Ask for a quote for your exact group size." },
        { t: "Private vehicles", d: "Your group travels together in a private cab, SUV or bus depending on the destination and group size." },
        { t: "One point of contact", d: "A single coordinator for questions, changes and support during the trip." },
      ]}
      form="Group trip" />
  ),
});
