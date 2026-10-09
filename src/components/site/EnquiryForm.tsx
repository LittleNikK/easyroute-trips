import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/site";

const field = "w-full rounded-md border border-input bg-card px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring";

export function EnquiryForm({ context = "Custom trip", defaultDestination = "" }: { context?: string; defaultDestination?: string }) {
  const [error, setError] = useState("");
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    if (!d.name?.trim() || !/^[+\d\s-]{10,15}$/.test(d.phone ?? "")) {
      setError("Please enter your name and a valid phone number.");
      return;
    }
    setError("");
    const msg = [
      `Hi EasyRoute Trips — ${context} enquiry`,
      `Name: ${d.name}`, `Phone: ${d.phone}`,
      d.destination && `Destination: ${d.destination}`,
      d.date && `Travel date: ${d.date}`,
      d.travellers && `Travellers: ${d.travellers}`,
      d.budget && `Budget per person: ${d.budget}`,
      d.message && `Notes: ${d.message}`,
    ].filter(Boolean).join("\n");
    window.open(waLink(msg), "_blank", "noopener");
  }
  return (
    <form onSubmit={submit} className="grid gap-4 rounded-md border border-border bg-card p-6 shadow-soft sm:grid-cols-2" noValidate>
      <label className="text-sm font-medium">Name*<input name="name" required maxLength={80} className={`${field} mt-1.5`} /></label>
      <label className="text-sm font-medium">Phone*<input name="phone" type="tel" required maxLength={15} className={`${field} mt-1.5`} /></label>
      <label className="text-sm font-medium">Destination<input name="destination" defaultValue={defaultDestination} maxLength={80} className={`${field} mt-1.5`} /></label>
      <label className="text-sm font-medium">Travel date<input name="date" type="date" className={`${field} mt-1.5`} /></label>
      <label className="text-sm font-medium">Travellers<input name="travellers" type="number" min={1} max={500} className={`${field} mt-1.5`} /></label>
      <label className="text-sm font-medium">Budget per person
        <select name="budget" className={`${field} mt-1.5`} defaultValue="">
          <option value="">Not sure</option><option>Under ₹10,000</option><option>₹10,000–₹20,000</option><option>₹20,000–₹40,000</option><option>Above ₹40,000</option>
        </select>
      </label>
      <label className="text-sm font-medium sm:col-span-2">Anything else?<textarea name="message" rows={3} maxLength={600} className={`${field} mt-1.5`} /></label>
      {error && <p className="text-sm text-destructive sm:col-span-2" role="alert">{error}</p>}
      <div className="sm:col-span-2">
        <Button type="submit" variant="whatsapp" size="lg" className="w-full sm:w-auto">Send enquiry on WhatsApp</Button>
        <p className="mt-2 text-xs text-muted-foreground">Opens WhatsApp with your details pre-filled. We usually reply the same day.</p>
      </div>
    </form>
  );
}
