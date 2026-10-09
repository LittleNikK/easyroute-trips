export const SITE = {
  name: "EasyRoute Trips",
  location: "Pune, Maharashtra, India",
  phones: ["+91 93253 15810", "+91 99227 87113"],
  phoneLinks: ["+919325315810", "+919922787113"],
  whatsapp: "919325315810",
  email: "easyroutetrips@gmail.com",
};

export function waLink(message: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function formatINR(n: number) {
  return "₹" + n.toLocaleString("en-IN");
}
