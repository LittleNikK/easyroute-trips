import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, meta } from "@/components/site/InfoPage";

export const Route = createFileRoute("/terms")({
  head: () => meta("Terms & Conditions", "Booking terms for EasyRoute Trips packages and custom trips."),
  component: () => (
    <LegalPage title="Terms & Conditions" intro="Please read these before confirming a booking."
      sections={[
        { h: "Prices", p: "Prices are per person in Indian rupees unless stated, and are based on the sharing arrangement and group size shown on each package. Website prices are published package prices, not live rates; the final price is confirmed in writing before payment." },
        { h: "Booking confirmation", p: "A booking is confirmed only after we confirm availability in writing and receive the advance payment agreed for that trip." },
        { h: "Itinerary changes", p: "Itineraries may change due to weather, road conditions, permits, local authority decisions or supplier availability. We will offer the closest reasonable alternative." },
        { h: "Exclusions", p: "Anything not listed under inclusions — such as flights or trains to the start point, entry tickets, optional activities and personal expenses — is payable by the traveller." },
        { h: "Health and fitness", p: "Some trips (for example Kedarnath and Ladakh) involve trekking or high altitude. Travellers are responsible for ensuring they are fit to travel." },
      ]} />
  ),
});
