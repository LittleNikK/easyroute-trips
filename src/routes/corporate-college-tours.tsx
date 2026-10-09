import { createFileRoute } from "@tanstack/react-router";
import img from "@/assets/coorg.jpg";
import { InfoPage, meta } from "@/components/site/InfoPage";

export const Route = createFileRoute("/corporate-college-tours")({
  head: () => meta("Corporate & College Tours", "Industrial visits, college trips, team offsites and incentive tours planned by EasyRoute Trips, Pune."),
  component: () => (
    <InfoPage eyebrow="Corporate & college" title="Offsites, team outings and college tours." image={img}
      intro="From a weekend team retreat near Pune to a multi-day college tour, we plan travel for organisations of any size."
      points={[
        { t: "College & student tours", d: "Educational and leisure trips with structured itineraries, group transport and a coordinator." },
        { t: "Corporate offsites", d: "Team outings, incentive trips and offsites with stays, transport and activities handled." },
        { t: "Clear quotations", d: "Itemised quotes per person so finance teams and college committees can approve quickly." },
      ]}
      form="Corporate / college tour" />
  ),
});
