// Shared content + imagery for the Avenora Estates landing page.
// Unsplash photos sized via query params; layout containers carry a fallback bg color.

const U = "https://images.unsplash.com/";
export const img = (id: string, w = 1200, h = 800) =>
  `${U}${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`;

export const HERO_IMG = img("photo-1748063578185-3d68121b11ff", 2200, 1400);

export type Property = {
  id: string;
  name: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  area: string;
  match: number;
  tag: string;
  image: string;
};

export const featuredProperties: Property[] = [
  {
    id: "p1",
    name: "The Meridian Pavilion",
    location: "Beverly Hills, CA",
    price: "$8,450,000",
    beds: 5,
    baths: 6,
    area: "7,200 sq ft",
    match: 98,
    tag: "New Listing",
    image: img("photo-1706164971302-e30c0640cc3b", 1100, 800),
  },
  {
    id: "p2",
    name: "Casa Lumina",
    location: "Palm Springs, CA",
    price: "$4,920,000",
    beds: 4,
    baths: 5,
    area: "5,400 sq ft",
    match: 95,
    tag: "Featured",
    image: img("photo-1706164971309-fb4785fe6ceb", 1100, 800),
  },
  {
    id: "p3",
    name: "The Aria Residence",
    location: "Aspen, CO",
    price: "$12,300,000",
    beds: 6,
    baths: 7,
    area: "9,800 sq ft",
    match: 92,
    tag: "Exclusive",
    image: img("photo-1613490493576-7fde63acd811", 1100, 800),
  },
  {
    id: "p4",
    name: "Solstice House",
    location: "Malibu, CA",
    price: "$6,750,000",
    beds: 4,
    baths: 4,
    area: "4,900 sq ft",
    match: 90,
    tag: "Oceanfront",
    image: img("photo-1670589953882-b94c9cb380f5", 1100, 800),
  },
];

export const recommendations: Property[] = [
  {
    id: "r1",
    name: "Greige Loft No. 4",
    location: "SoHo, New York",
    price: "$3,200,000",
    beds: 3,
    baths: 3,
    area: "2,800 sq ft",
    match: 96,
    tag: "Matches your style",
    image: img("photo-1724582586529-62622e50c0b3", 900, 700),
  },
  {
    id: "r2",
    name: "The Ivory Atrium",
    location: "Austin, TX",
    price: "$2,150,000",
    beds: 4,
    baths: 3,
    area: "3,500 sq ft",
    match: 93,
    tag: "Near your work",
    image: img("photo-1628744876497-eb30460be9f6", 900, 700),
  },
  {
    id: "r3",
    name: "Bronze & Stone Villa",
    location: "Scottsdale, AZ",
    price: "$4,400,000",
    beds: 5,
    baths: 5,
    area: "6,100 sq ft",
    match: 91,
    tag: "Within budget",
    image: img("photo-1560448204-e02f11c3d0e2", 900, 700),
  },
];

export const neighborhoods = [
  {
    id: "n1",
    name: "Hillcrest Heights",
    city: "Los Angeles",
    walk: 88,
    growth: "+12.4%",
    median: "$5.2M",
    image: img("photo-1763257708545-18addc8bef6b", 900, 700),
  },
  {
    id: "n2",
    name: "Lakeside Commons",
    city: "Austin",
    walk: 74,
    growth: "+9.1%",
    median: "$2.8M",
    image: img("photo-1496782850948-d8e6bbe11a9f", 900, 700),
  },
  {
    id: "n3",
    name: "Old Quarter",
    city: "Boston",
    walk: 95,
    growth: "+7.6%",
    median: "$3.4M",
    image: img("photo-1531471904536-f31131c89e3b", 900, 700),
  },
];

export const spotlightImg = img("photo-1564078516393-cf04bd966897", 1400, 1700);
export const spotlightDetail = img("photo-1638885930125-85350348d266", 1000, 700);

export const testimonials = [
  {
    id: "t1",
    quote:
      "Avenora's AI match score pointed us to a home we'd have scrolled past. It understood us better than we understood ourselves.",
    name: "Eleanor Vance",
    role: "Acquired in Beverly Hills",
  },
  {
    id: "t2",
    quote:
      "The neighborhood insights were extraordinary — school data, growth curves, noise levels. We bought with total confidence.",
    name: "Marcus Reyes",
    role: "Relocated to Austin",
  },
  {
    id: "t3",
    quote:
      "From the affordability estimator to the smart tour booking, every step felt considered. The most elegant purchase of my life.",
    name: "Priya Anand",
    role: "Purchased in Aspen",
  },
];

export const blogPosts = [
  {
    id: "b1",
    category: "Market Report",
    title: "The 2026 Luxury Index: Where Quiet Capital Is Moving",
    date: "Jun 2026",
    read: "6 min read",
    image: img("photo-1600596542815-ffad4c1539a9", 900, 650),
  },
  {
    id: "b2",
    category: "Design",
    title: "Material Honesty: The Return of Stone, Bronze & Light",
    date: "May 2026",
    read: "4 min read",
    image: img("photo-1580587771525-78b9dba3b914", 900, 650),
  },
  {
    id: "b3",
    category: "AI & Living",
    title: "How Predictive Models Are Reshaping Where We Buy",
    date: "May 2026",
    read: "8 min read",
    image: img("photo-1613545325278-f24b0cae1224", 900, 650),
  },
];

export const faqs = [
  {
    q: "How does the AI match score work?",
    a: "Our model weighs your saved preferences, browsing patterns, lifestyle inputs and financial profile against thousands of property signals to produce a single, transparent compatibility score for every listing.",
  },
  {
    q: "Is my financial information private?",
    a: "Always. Affordability estimates are computed on encrypted data and are never shared with sellers or third parties without your explicit consent.",
  },
  {
    q: "Can I book a tour entirely through Avenora?",
    a: "Yes. Smart Tour Booking syncs your calendar with the listing agent's availability and confirms in-person or live-video viewings in seconds.",
  },
  {
    q: "Do you cover properties outside the United States?",
    a: "We currently curate residences across 40+ U.S. metros, with select international markets opening through 2026.",
  },
  {
    q: "What does it cost to use Avenora?",
    a: "Browsing, AI matching and insights are complimentary for buyers. We're compensated by partner brokerages only when a transaction completes.",
  },
];
