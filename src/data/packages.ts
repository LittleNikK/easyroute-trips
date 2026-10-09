export type Style = "Mountains" | "Spiritual" | "Beaches" | "Heritage" | "Adventure" | "Nature" | "Luxury";

export interface PriceOption {
  label: string;
  price: number;
  note?: string;
}

export interface TourPackage {
  slug: string;
  title: string;
  destination: string; // destination slug
  region: string;
  days: number;
  nights: number;
  styles: Style[];
  summary: string;
  route?: string;
  start?: string;
  prices: PriceOption[]; // empty = Request a Quote
  priceNote?: string;
  itinerary: { day: string; text: string }[];
  inclusions: string[];
  exclusions: string[];
  addOns?: { label: string; price: string }[];
  notes?: string[];
  featured?: boolean;
}

const commonEx = ["Airfare / train tickets to the starting point", "Personal expenses, tips and shopping", "Travel insurance", "Anything not listed under inclusions"];

export const PACKAGES: TourPackage[] = [
  {
    slug: "gangtok-sikkim-3d2n",
    title: "Gangtok, Sikkim",
    destination: "sikkim",
    region: "North East",
    days: 3, nights: 2,
    styles: ["Mountains", "Nature"],
    summary: "Monasteries, high-altitude Tsomgo Lake and the view points of Gangtok in a compact Himalayan break.",
    start: "NJP / Bagdogra",
    prices: [{ label: "Budget", price: 11500 }, { label: "Premium", price: 14500 }],
    itinerary: [
      { day: "Day 1", text: "Arrival at NJP or Bagdogra, transfer to Gangtok, Tashi View Point, Ganesh Tok, Hanuman Tok, Enchey Monastery, Flower Exhibition Centre and MG Marg." },
      { day: "Day 2", text: "Tsomgo Lake and Baba Harbhajan Singh Mandir. Nathula Pass optional at additional cost." },
      { day: "Day 3", text: "Rumtek Monastery, optional ropeway or Banjhakri Falls, departure transfer." },
    ],
    inclusions: ["Two hotel nights", "Daily breakfast", "Sightseeing as per itinerary", "Tsomgo Lake permit", "Shared transport", "Driver allowance, tolls and parking"],
    exclusions: ["Nathula Pass permit and optional activities", ...commonEx],
    addOns: [
      { label: "Nathula Pass permit", price: "₹2,000" },
      { label: "Yak ride", price: "₹400" },
      { label: "Gangtok ropeway", price: "₹350" },
      { label: "Private vehicle upgrade", price: "₹2,500 per day" },
    ],
    featured: true,
  },
  {
    slug: "spiritual-heritage-tour-4d3n",
    title: "Spiritual & Heritage Tour",
    destination: "rajasthan",
    region: "North India",
    days: 4, nights: 3,
    styles: ["Spiritual", "Heritage"],
    summary: "Jaipur, Khatu Shyam, Agra, Mathura, Vrindavan and Delhi by private bus from Vadodara.",
    route: "Vadodara – Jaipur – Khatu – Agra – Mathura – Vrindavan – Gokul – Delhi – Vadodara",
    start: "Vadodara",
    prices: [{ label: "Per person", price: 8600 }],
    itinerary: [
      { day: "Day 0", text: "Night departure from Vadodara by private bus." },
      { day: "Day 1", text: "Jaipur — Amber Fort, Hawa Mahal, City Palace and Khatu Shyam Temple." },
      { day: "Day 2", text: "Taj Mahal, Agra Fort, Shri Krishna Janmabhoomi and evening aarti." },
      { day: "Day 3", text: "Banke Bihari Temple, ISKCON Temple, Gokul and Raman Reti, Delhi and India Gate." },
      { day: "Day 4", text: "Red Fort, Lotus Temple, Qutub Minar and return journey." },
    ],
    inclusions: ["Private bus", "Three nights' accommodation on triple sharing", "Meals as specified in the itinerary", "Monument entry tickets as specified", "Tolls, parking and driver allowances"],
    exclusions: ["Meals not specified", "Personal expenses", "Travel insurance"],
    notes: ["The Taj Mahal is closed on Fridays — plan travel dates accordingly."],
  },
  {
    slug: "kerala-4d3n",
    title: "Kerala — Munnar & Alleppey",
    destination: "kerala",
    region: "South India",
    days: 4, nights: 3,
    styles: ["Nature", "Beaches"],
    summary: "Tea-covered Munnar hills followed by a night on a deluxe houseboat in Alleppey's backwaters.",
    start: "Kochi",
    prices: [{ label: "Per person", price: 12999 }],
    itinerary: [
      { day: "Day 1", text: "Kochi arrival, transfer to Munnar, Cheeyappara and Valara waterfalls." },
      { day: "Day 2", text: "Eravikulam National Park, Mattupetty Dam, Tea Museum, Echo Point and Top Station." },
      { day: "Day 3", text: "Transfer to Alleppey and deluxe houseboat stay with backwater cruise." },
      { day: "Day 4", text: "Houseboat breakfast, transfer to Kochi, optional Fort Kochi visit, departure." },
    ],
    inclusions: ["Private AC cab", "Two nights in Munnar", "One night on a deluxe houseboat", "Three breakfasts, one houseboat lunch, one houseboat dinner", "Sightseeing, tolls, parking and driver allowance"],
    exclusions: ["Airfare and train tickets", "Entry tickets", "Activities", "Personal expenses"],
    featured: true,
  },
  {
    slug: "kerala-7d6n",
    title: "Kerala Grand Tour",
    destination: "kerala",
    region: "South India",
    days: 7, nights: 6,
    styles: ["Nature", "Beaches"],
    summary: "Munnar, Thekkady, an Alleppey houseboat, Kovalam beach and Trivandrum — the full Kerala circuit.",
    route: "Cochin – Munnar – Thekkady – Alleppey – Kovalam – Trivandrum",
    start: "Cochin",
    prices: [{ label: "Per person", price: 22999 }],
    priceNote: "Based on three adults sharing accommodation.",
    itinerary: [
      { day: "Day 1", text: "Cochin arrival, transfer to Munnar, waterfalls." },
      { day: "Day 2", text: "Munnar sightseeing, Mattupetty Dam, Kundala Lake, Echo Point, Tea Museum and Blossom Park." },
      { day: "Day 3", text: "Thekkady transfer and plantation tour; optional Periyar boat ride." },
      { day: "Day 4", text: "Super Deluxe houseboat stay in Alleppey." },
      { day: "Day 5", text: "Transfer to Kovalam and beach leisure." },
      { day: "Day 6", text: "Trivandrum sightseeing." },
      { day: "Day 7", text: "Departure." },
    ],
    inclusions: ["Six nights' accommodation", "Hotel breakfast and dinner", "All houseboat meals", "Private AC sedan with pickup and drop", "Sightseeing, tolls, parking and driver charges"],
    exclusions: ["Entry tickets and optional boat rides", ...commonEx],
  },
  {
    slug: "kedarnath-yatra-5d4n",
    title: "Kedarnath Yatra",
    destination: "uttarakhand",
    region: "North India",
    days: 5, nights: 4,
    styles: ["Spiritual", "Mountains", "Adventure"],
    summary: "Guptkashi, the trek to Kedarnath for darshan, and Rishikesh — with stays and transfers arranged.",
    start: "Haridwar / Rishikesh",
    prices: [{ label: "Per person", price: 18999 }],
    itinerary: [
      { day: "Day 1", text: "Haridwar/Rishikesh to Guptkashi." },
      { day: "Day 2", text: "Gaurikund and the 16 km trek to Kedarnath; optional pony, palki or helicopter at extra cost." },
      { day: "Day 3", text: "Kedarnath darshan and return trek to Guptkashi." },
      { day: "Day 4", text: "Rishikesh, Ram Jhula, Laxman Jhula, optional Ganga Aarti." },
      { day: "Day 5", text: "Departure transfer." },
    ],
    inclusions: ["Four nights in 3-star category hotels", "Breakfast and dinner", "Private transfers", "Driver charges, tolls and parking", "Basic yatra registration assistance"],
    exclusions: ["Helicopter, pony or palki charges", "Travel to/from Haridwar or Rishikesh", ...commonEx.slice(1)],
    notes: ["Involves a 16 km trek each way — a reasonable fitness level is required.", "The yatra is seasonal and weather dependent; schedules may change at short notice."],
    featured: true,
  },
  {
    slug: "jaipur-quick-escape-2d1n",
    title: "Jaipur Quick Escape",
    destination: "rajasthan",
    region: "North India",
    days: 2, nights: 1,
    styles: ["Heritage"],
    summary: "A short Jaipur-only break: Hawa Mahal by night, Amber Fort, City Palace and a Nahargarh sunset.",
    start: "Jaipur",
    prices: [],
    itinerary: [
      { day: "Day 1", text: "Jaipur arrival, hotel check-in, Hawa Mahal night photography, Jal Mahal photo stop, optional rooftop dinner." },
      { day: "Day 2", text: "Amber Fort, Jal Mahal, City Palace, Jantar Mantar, optional local lunch, Nahargarh Fort sunset, departure." },
    ],
    inclusions: ["One hotel night", "Breakfast", "Private cab with pickup and drop", "Fuel, tolls, parking and driver allowance"],
    exclusions: ["Monument entry tickets", "Meals not specified as included", "Travel to/from Jaipur"],
  },
  {
    slug: "varanasi-spiritual-4d3n",
    title: "Varanasi Spiritual & Cultural Tour",
    destination: "varanasi",
    region: "North India",
    days: 4, nights: 3,
    styles: ["Spiritual", "Heritage"],
    summary: "Ganga Aarti, sunrise boat rides, Kashi Vishwanath Corridor and a day at Sarnath.",
    start: "DDU Railway Station",
    prices: [],
    itinerary: [
      { day: "Day 1", text: "Arrival, hotel transfer, Dashashwamedh Ghat Ganga Aarti." },
      { day: "Day 2", text: "Morning Ganga boat ride, Assi Ghat and other major ghats, Kashi Vishwanath Corridor, Kal Bhairav Mandir, Maha Mrityunjay Mahadev Mandir, markets and evening aarti." },
      { day: "Day 3", text: "Sarnath Museum, Dhamek Stupa, Nepali Temple, optional café or ghat leisure." },
      { day: "Day 4", text: "Breakfast, checkout and railway station transfer." },
    ],
    inclusions: ["Three nights' accommodation", "One breakfast daily and Day 1 dinner", "Station pickup and drop", "Boat experiences as per itinerary", "Ganga Aarti visits", "Sarnath entry fees", "Local sightseeing assistance"],
    exclusions: ["Train or flight tickets", "Unspecified meals", "Personal expenses"],
  },
  {
    slug: "leh-ladakh-premium-6d5n",
    title: "Leh-Ladakh Premium Trip",
    destination: "ladakh",
    region: "North India",
    days: 6, nights: 5,
    styles: ["Mountains", "Adventure"],
    summary: "Khardung La, Nubra's dunes and Pangong Lake by private SUV, with a proper acclimatisation day.",
    start: "Leh Airport",
    prices: [{ label: "Per person", price: 19000 }],
    priceNote: "Based on a group of five travellers. Availability confirmed before booking.",
    itinerary: [
      { day: "Day 1", text: "Arrival, acclimatisation and rest, Shanti Stupa, Leh Market." },
      { day: "Day 2", text: "Hall of Fame, Magnetic Hill, Sangam Point, Gurudwara Pathar Sahib, Leh Palace." },
      { day: "Day 3", text: "Nubra Valley via Khardung La, Diskit Monastery, Hunder Sand Dunes." },
      { day: "Day 4", text: "Nubra to Pangong Lake via Shyok route." },
      { day: "Day 5", text: "Pangong sunrise, return to Leh via Chang La, Hemis Monastery." },
      { day: "Day 6", text: "Departure." },
    ],
    inclusions: ["Accommodation", "Breakfast and dinner", "Private SUV", "Inner-line permits", "Driver charges, tolls and parking"],
    exclusions: ["Airfare", "Lunches", "Entry tickets", "Optional adventure activities"],
    notes: ["Day 1 is reserved for acclimatisation — please rest fully.", "High-altitude travel: consult a doctor if you have heart or respiratory conditions."],
  },
  {
    slug: "nainital-premium-3d2n",
    title: "Nainital Premium Getaway",
    destination: "nainital",
    region: "North India",
    days: 3, nights: 2,
    styles: ["Mountains", "Nature"],
    summary: "Lakeside Nainital and Kainchi Dham from Delhi, with a choice of two premium stays.",
    start: "Delhi",
    prices: [
      { label: "Premium Comfort", price: 15999, note: "Shervani Hilltop or similar · two rooms, triple & double sharing · breakfast" },
      { label: "Premium Lake Experience", price: 18999, note: "The Naini Retreat, lake-view rooms · breakfast and boating" },
    ],
    itinerary: [
      { day: "Day 1", text: "Delhi pickup, drive to Nainital, hotel check-in, Mall Road, shopping, cafés." },
      { day: "Day 2", text: "Kainchi Dham, Naini Lake, Tiffin Top, Eco Cave Garden, Naina Devi Temple, café exploration." },
      { day: "Day 3", text: "Optional Bhimtal or Sattal visit and return to Delhi." },
    ],
    inclusions: ["Private AC vehicle from Delhi", "Two hotel nights", "Breakfast", "Sightseeing", "Driver charges, tolls and parking", "Boating — Premium Lake Experience only"],
    exclusions: ["Boating in the Premium Comfort option", ...commonEx.slice(1)],
  },
  {
    slug: "coorg-ooty-premium-5d4n",
    title: "Premium Coorg & Ooty Escape",
    destination: "coorg-ooty",
    region: "South India",
    days: 5, nights: 4,
    styles: ["Nature", "Mountains"],
    summary: "A road trip from Pune through Coorg's coffee country and the Nilgiri hills of Ooty.",
    start: "Pune",
    prices: [{ label: "Per person", price: 19899 }],
    itinerary: [
      { day: "Day 1", text: "Pune to Coorg, Raja's Seat subject to arrival time, Madikeri Market." },
      { day: "Day 2", text: "Abbey Falls, Madikeri Fort, Omkareshwara Temple, Dubare Elephant Camp subject to availability, coffee plantation, Namdroling Golden Temple." },
      { day: "Day 3", text: "Coorg to Ooty via Bandipur and Mudumalai, Ooty Lake, Rose Garden, Botanical Garden." },
      { day: "Day 4", text: "Doddabetta Peak, Tea Factory and Tea Museum, Pine Forest, Shooting Point, Wenlock Downs, Pykara Lake and waterfalls." },
      { day: "Day 5", text: "Return journey to Pune." },
    ],
    inclusions: ["Pune pickup and drop by private vehicle", "Four hotel nights", "Daily breakfast", "Sightseeing", "Tolls, parking and driver allowance", "Trip coordination"],
    exclusions: ["Meals other than breakfast", "Entry tickets", "Adventure activities", "Personal expenses", "Travel insurance"],
  },
  {
    slug: "shimla-quick-escape-3d2n",
    title: "Shimla Quick Escape",
    destination: "shimla",
    region: "North India",
    days: 3, nights: 2,
    styles: ["Mountains"],
    summary: "The Kalka–Shimla toy train, Kufri and Mashobra in a short weekend-style trip.",
    start: "Kalka",
    prices: [{ label: "Per person", price: 9499 }],
    priceNote: "Minimum two travellers.",
    itinerary: [
      { day: "Day 1", text: "Kalka to Shimla toy train, hotel check-in, Mall Road, The Ridge, Christ Church, dinner." },
      { day: "Day 2", text: "Kufri, Green Valley, Jakhu Temple, IIAS and Himachal State Museum." },
      { day: "Day 3", text: "Naldehra, Mashobra and return to Kalka by toy train or optional cab." },
    ],
    inclusions: ["Two hotel nights on double sharing", "One-side toy train tickets", "Local sightseeing transport", "Dinner on Day 1"],
    exclusions: ["Return toy train (optional cab available)", ...commonEx],
  },
  {
    slug: "shimla-summer-escape-4d3n",
    title: "Shimla Summer Escape",
    destination: "shimla",
    region: "North India",
    days: 4, nights: 3,
    styles: ["Mountains", "Adventure"],
    summary: "A slower Shimla trip with an extra night, toy train both ways and time for Kufri activities.",
    start: "Kalka",
    prices: [{ label: "Per person", price: 10500 }],
    priceNote: "Minimum two travellers.",
    itinerary: [
      { day: "Day 1", text: "Kalka–Shimla toy train, hotel check-in, Mall Road, The Ridge, Christ Church, dinner." },
      { day: "Day 2", text: "Kufri, optional adventure activities, Green Valley." },
      { day: "Day 3", text: "Jakhu Temple, IIAS, Himachal State Museum, Naldehra, Mashobra." },
      { day: "Day 4", text: "Return to Kalka by toy train." },
    ],
    inclusions: ["Three hotel nights on double sharing", "Toy train tickets both ways", "Local sightseeing transport", "Dinner on Day 1"],
    exclusions: ["Adventure activities", ...commonEx],
  },
  {
    slug: "darjeeling-3d2n",
    title: "Darjeeling Short Break",
    destination: "darjeeling",
    region: "North East",
    days: 3, nights: 2,
    styles: ["Mountains", "Nature"],
    summary: "Choose a Tiger Hill sightseeing day or a Pashupati Border and Mirik Lake excursion.",
    start: "NJP / Bagdogra",
    prices: [
      { label: "Option A — Sightseeing", price: 14800, note: "Tiger Hill sunrise, Ghoom Monastery, Batasia Loop, HMI, Zoo, Tea Garden, Peace Pagoda" },
      { label: "Option B — Mirik", price: 11500, note: "Pashupati Border, market and Mirik Lake" },
    ],
    itinerary: [
      { day: "Day 1", text: "Arrival at NJP or Bagdogra, Darjeeling transfer, Mall Road and cafés." },
      { day: "Day 2", text: "Option A: Tiger Hill sunrise, Ghoom Monastery, Batasia Loop, HMI, Zoo, Tea Garden and Peace Pagoda. Option B: Pashupati Border, market exploration, Mirik and Mirik Lake." },
      { day: "Day 3", text: "Leisure and departure." },
    ],
    inclusions: ["Hotel accommodation", "Daily breakfast and dinner", "Transfers", "Sightseeing as per selected option"],
    exclusions: commonEx,
    featured: true,
  },
  {
    slug: "darjeeling-4d3n",
    title: "Darjeeling & Kalimpong",
    destination: "darjeeling",
    region: "North East",
    days: 4, nights: 3,
    styles: ["Mountains", "Adventure"],
    summary: "Full Darjeeling sightseeing plus a choice of Kalimpong paragliding and rafting, or Mirik.",
    start: "NJP / Bagdogra",
    prices: [
      { label: "Option A — Kalimpong adventure", price: 16899, note: "Paragliding and river rafting" },
      { label: "Option B — Mirik", price: 13599, note: "Pashupati Border, market and Mirik" },
    ],
    itinerary: [
      { day: "Day 1", text: "Arrival, transfer, Mall Road and cafés." },
      { day: "Day 2", text: "Darjeeling sightseeing including Tiger Hill sunrise, Ghoom Monastery, Batasia Loop, HMI, Zoo, Tea Garden and Peace Pagoda." },
      { day: "Day 3", text: "Choose either the Kalimpong adventure day or the Pashupati Border and Mirik excursion." },
      { day: "Day 4", text: "Departure." },
    ],
    inclusions: ["Hotel accommodation", "Daily breakfast and dinner", "Transfers", "Sightseeing as per selected option"],
    exclusions: commonEx,
    notes: ["Adventure activities depend on weather and local permissions."],
  },
  {
    slug: "darjeeling-5d4n",
    title: "Darjeeling Leisure Holiday",
    destination: "darjeeling",
    region: "North East",
    days: 5, nights: 4,
    styles: ["Mountains", "Nature", "Adventure"],
    summary: "The unhurried version — an extra free day for cafés and shopping, plus Kalimpong or Mirik.",
    start: "NJP / Bagdogra",
    prices: [
      { label: "Option A — Kalimpong adventure", price: 18899, note: "Paragliding and river rafting" },
      { label: "Option B — Mirik", price: 15599, note: "Pashupati Border, market and Mirik" },
    ],
    itinerary: [
      { day: "Day 1", text: "Arrival and Mall Road." },
      { day: "Day 2", text: "Darjeeling sightseeing and Tiger Hill sunrise." },
      { day: "Day 3", text: "Leisure, shopping and cafés." },
      { day: "Day 4", text: "Choose the Kalimpong adventure option or the Nepal-border and Mirik option." },
      { day: "Day 5", text: "Departure." },
    ],
    inclusions: ["Accommodation", "Daily breakfast and dinner", "Transfers", "Sightseeing as specified"],
    exclusions: commonEx,
    notes: ["Adventure activities depend on weather and local permissions."],
  },
  {
    slug: "goa-party-pro-4d3n",
    title: "Goa Party Pro",
    destination: "goa",
    region: "West India",
    days: 4, nights: 3,
    styles: ["Beaches", "Adventure"],
    summary: "Beaches, club entry, water sports, Grand Island snorkelling and a Mandovi sunset cruise.",
    start: "Goa",
    prices: [{ label: "Per person", price: 17000 }],
    priceNote: "Minimum two travellers.",
    itinerary: [
      { day: "Day 1", text: "Arrival, hotel check-in, Baga or Calangute Beach, club entry." },
      { day: "Day 2", text: "North Goa sightseeing, water sports, sunset." },
      { day: "Day 3", text: "South Goa sightseeing, Grand Island dolphin spotting and snorkelling, Mandovi River sunset cruise." },
      { day: "Day 4", text: "Leisure, shopping and departure." },
    ],
    inclusions: ["Three nights in a 3-star hotel on triple/quad sharing", "Breakfast", "AC private transfers", "North and South Goa sightseeing", "One club entry", "Water sports combo", "Grand Island tour", "Mandovi cruise", "Trip assistance"],
    exclusions: commonEx,
    featured: true,
  },
  {
    slug: "goa-royale-signature-5d4n",
    title: "Goa Royale Signature",
    destination: "goa",
    region: "West India",
    days: 5, nights: 4,
    styles: ["Beaches", "Luxury"],
    summary: "A luxury Goa holiday: 5-star beachfront resort, private yacht charter, candlelight dinner and a photoshoot.",
    start: "Goa Airport",
    prices: [{ label: "Per person", price: 52999 }],
    itinerary: [
      { day: "Day 1", text: "Luxury airport transfer, 5-star beachfront resort check-in, welcome hamper, leisure and signature dining." },
      { day: "Day 2", text: "Curated North Goa exploration, premium water experiences, VIP nightlife access with two curated beverages." },
      { day: "Day 3", text: "Private yacht charter, dolphin trail, guided snorkelling, onboard refreshments, optional spa, private beachfront candlelight dinner." },
      { day: "Day 4", text: "South Goa heritage sightseeing, lifestyle photoshoot, premium sunset cruise, gala-style dinner." },
      { day: "Day 5", text: "Leisure, breakfast, late checkout subject to availability, airport transfer." },
    ],
    inclusions: ["Four nights in a 5-star beachfront resort", "Daily gourmet breakfast and four premium dinners", "Private candlelight dinner", "Private yacht charter", "VIP nightlife access", "Premium water experiences and sunset cruise", "Professional photoshoot with 20 edited images and a highlight reel", "Dedicated luxury experience manager", "Private transfers"],
    exclusions: ["Optional spa", ...commonEx],
    notes: ["Yacht, nightlife access and late checkout are subject to availability on the day."],
  },
];

export const STYLES: Style[] = ["Mountains", "Spiritual", "Beaches", "Heritage", "Adventure", "Nature", "Luxury"];

export function startingPrice(p: TourPackage): number | null {
  return p.prices.length ? Math.min(...p.prices.map((o) => o.price)) : null;
}

export function getPackage(slug: string) {
  return PACKAGES.find((p) => p.slug === slug);
}
