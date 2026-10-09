import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, meta } from "@/components/site/InfoPage";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/privacy-policy")({
  head: () => meta("Privacy Policy", "How EasyRoute Trips uses the details you share when enquiring or booking."),
  component: () => (
    <LegalPage title="Privacy Policy" intro="How we handle the information you share with us."
      sections={[
        { h: "What we collect", p: "Details you choose to send us — such as your name, phone number, travel dates, destination and group size — through WhatsApp, phone, email or our enquiry forms." },
        { h: "How we use it", p: "Only to respond to your enquiry, prepare quotes, and make and manage bookings. We share necessary details with hotels, transport providers and other suppliers involved in your trip." },
        { h: "What we don't do", p: "We do not sell your personal information. The enquiry forms on this website open WhatsApp on your device; the website itself does not store your form entries." },
        { h: "Contact", p: `To ask about or remove your information, email ${SITE.email}.` },
      ]} />
  ),
});
