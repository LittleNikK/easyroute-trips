import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, meta } from "@/components/site/InfoPage";

export const Route = createFileRoute("/cancellation-policy")({
  head: () => meta("Cancellation Policy", "How cancellations and refunds work for EasyRoute Trips bookings."),
  component: () => (
    <LegalPage title="Cancellation Policy" intro="Cancellation terms depend on the trip and its suppliers."
      sections={[
        { h: "How cancellation works", p: "Please tell us in writing (WhatsApp or email) if you need to cancel. The applicable cancellation charges for your specific trip are shared with your booking confirmation." },
        { h: "Supplier charges", p: "Hotels, houseboats, trains, permits and activity providers have their own cancellation rules. Non-refundable amounts paid to suppliers cannot be refunded." },
        { h: "Changes by us", p: "If a trip cannot run due to circumstances beyond our control (weather, closures, government orders), we will offer alternative dates or a revised plan." },
      ]} />
  ),
});
