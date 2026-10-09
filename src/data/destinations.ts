import sikkim from "@/assets/sikkim.jpg";
import darjeeling from "@/assets/darjeeling.jpg";
import kerala from "@/assets/kerala.jpg";
import kedarnath from "@/assets/kedarnath.jpg";
import rajasthan from "@/assets/rajasthan.jpg";
import varanasi from "@/assets/varanasi.jpg";
import ladakh from "@/assets/ladakh.jpg";
import nainital from "@/assets/nainital.jpg";
import coorg from "@/assets/coorg.jpg";
import shimla from "@/assets/shimla.jpg";
import goa from "@/assets/goa.jpg";

export interface Destination {
  slug: string;
  name: string;
  state: string;
  image: string;
  tagline: string;
  description: string;
  bestTime: string;
}

export const DESTINATIONS: Destination[] = [
  { slug: "sikkim", name: "Gangtok, Sikkim", state: "Sikkim", image: sikkim, tagline: "Monasteries and mountain lakes", description: "Gangtok sits on a ridge facing the Kanchenjunga range. Trips here combine Buddhist monasteries, view points over the valley and a day trip to the glacial Tsomgo Lake.", bestTime: "March–June, October–December" },
  { slug: "darjeeling", name: "Darjeeling", state: "West Bengal", image: darjeeling, tagline: "Tea gardens and Tiger Hill sunrises", description: "Known for its tea estates, the heritage toy train and sunrise over Kanchenjunga from Tiger Hill. Nearby Kalimpong and Mirik add adventure or a quiet lakeside day.", bestTime: "March–May, October–December" },
  { slug: "kerala", name: "Kerala", state: "Kerala", image: kerala, tagline: "Hills, houseboats and beaches", description: "From the tea hills of Munnar and the spice plantations of Thekkady to a night on an Alleppey houseboat and the beaches of Kovalam.", bestTime: "September–March" },
  { slug: "uttarakhand", name: "Kedarnath", state: "Uttarakhand", image: kedarnath, tagline: "A Himalayan pilgrimage", description: "One of the Char Dham shrines, reached by a 16 km trek from Gaurikund. Our yatra package includes stays in Guptkashi and a day in Rishikesh.", bestTime: "May–June, September–October (seasonal)" },
  { slug: "rajasthan", name: "Jaipur & Golden Triangle", state: "Rajasthan · UP · Delhi", image: rajasthan, tagline: "Forts, palaces and temples", description: "The Pink City's forts and palaces, plus heritage and pilgrimage circuits through Agra, Mathura, Vrindavan and Delhi.", bestTime: "October–March" },
  { slug: "varanasi", name: "Varanasi", state: "Uttar Pradesh", image: varanasi, tagline: "Ghats, aarti and Sarnath", description: "India's oldest living city — sunrise boat rides on the Ganga, the evening aarti at Dashashwamedh Ghat and the Buddhist site of Sarnath.", bestTime: "October–March" },
  { slug: "ladakh", name: "Leh-Ladakh", state: "Ladakh", image: ladakh, tagline: "High passes and blue lakes", description: "A high-altitude desert of monasteries, the Nubra Valley dunes and Pangong Lake, reached over Khardung La and Chang La.", bestTime: "May–September" },
  { slug: "nainital", name: "Nainital", state: "Uttarakhand", image: nainital, tagline: "Lakeside hill station", description: "A lake town in the Kumaon hills, an easy drive from Delhi, with boating, Mall Road cafés and the Kainchi Dham ashram nearby.", bestTime: "March–June, September–November" },
  { slug: "coorg-ooty", name: "Coorg & Ooty", state: "Karnataka · Tamil Nadu", image: coorg, tagline: "Coffee country and Nilgiri hills", description: "Coorg's coffee estates and waterfalls followed by a drive through Bandipur and Mudumalai to the tea gardens of Ooty.", bestTime: "October–May" },
  { slug: "shimla", name: "Shimla", state: "Himachal Pradesh", image: shimla, tagline: "Toy train to the hills", description: "The former summer capital, reached by the UNESCO-listed Kalka–Shimla toy train, with Kufri, Naldehra and Mashobra close by.", bestTime: "March–June, December–January for snow" },
  { slug: "goa", name: "Goa", state: "Goa", image: goa, tagline: "Beaches, nightlife and sunsets", description: "North Goa's lively beaches, South Goa's quieter heritage and island trips for dolphins and snorkelling — from party-style to luxury.", bestTime: "November–February" },
];

export function getDestination(slug: string) {
  return DESTINATIONS.find((d) => d.slug === slug);
}
