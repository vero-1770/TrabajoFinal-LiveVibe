import albumNeonShadows from "@/assets/album-neon-shadows.jpg";
import albumMidnightEcho from "@/assets/album-midnight-echo.jpg";
import albumSilentThunder from "@/assets/album-silent-thunder.jpg";
import albumCosmicDrift from "@/assets/album-cosmic-drift.jpg";
import albumLostHorizon from "@/assets/album-lost-horizon.jpg";
import albumElectricDreams from "@/assets/album-electric-dreams.jpg";
import merchVinyl from "@/assets/merch-vinyl.jpg";
import merchTshirt from "@/assets/merch-tshirt.jpg";

export interface Release {
  id: string;
  title: string;
  type: string;
  year: number;
  description: string;
  image: string;
  date?: string;
  status?: string;
  platforms?: { name: string; url: string }[];
  merchOptions?: { name: string; price: string }[];
}

export interface MerchItem {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
  purchaseLinks?: { platform: string; price: string; url: string }[];
  details?: string;
}

export interface VideoItem {
  id: string;
  title: string;
  type: string;
  duration: string;
  image: string;
  date?: string;
  director?: string;
  description?: string;
}

export interface TourDate {
  id: string;
  date: string;
  day: string;
  month: string;
  city: string;
  state: string;
  venue: string;
  eventName: string;
  status: "available" | "sold-out" | "presale";
  ticketUrl?: string;
  doors?: string;
  showTime?: string;
  prices?: { tier: string; price: string }[];
  description?: string;
}

export const releases: Release[] = [
  {
    id: "neon-shadows",
    title: "Golden Hour",
    type: "LP",
    year: 2024,
    description: "Sun-drenched melodies about love, wonder, and wide-open skies",
    image: albumNeonShadows,
    date: "March 1, 2024",
    status: "Available Now",
    platforms: [
      { name: "Apple Music", url: "#" },
      { name: "Spotify", url: "#" },
      { name: "Bandcamp", url: "#" },
      { name: "SoundCloud", url: "#" },
      { name: "YouTube Music", url: "#" },
    ],
    merchOptions: [
      { name: "Vinyl (Honey Gold, Limited Edition)", price: "$29.99" },
      { name: "CD (Digipak)", price: "$14.99" },
      { name: "Digital Download (WAV/FLAC)", price: "$9.99" },
      { name: "Vinyl + Poster Bundle", price: "$44.99" },
    ],
  },
  {
    id: "midnight-echo",
    title: "Slow Burn",
    type: "Album",
    year: 2023,
    description: "A tender journey through heartbreak and healing under southern stars",
    image: albumMidnightEcho,
    date: "September 15, 2023",
    status: "Available Now",
    platforms: [
      { name: "Apple Music", url: "#" },
      { name: "Spotify", url: "#" },
      { name: "Bandcamp", url: "#" },
    ],
  },
  {
    id: "silent-thunder",
    title: "Butterflies",
    type: "Single",
    year: 2024,
    description: "A dreamy ode to new love and the feeling of falling",
    image: albumSilentThunder,
    date: "January 15, 2024",
    status: "Available Now",
    platforms: [
      { name: "Apple Music", url: "#" },
      { name: "Spotify", url: "#" },
    ],
  },
  {
    id: "cosmic-drift",
    title: "Wildflower",
    type: "EP",
    year: 2022,
    description: "Four songs about growing up, letting go, and blooming anyway",
    image: albumCosmicDrift,
    date: "June 1, 2022",
    status: "Available Now",
    platforms: [
      { name: "Spotify", url: "#" },
      { name: "Bandcamp", url: "#" },
    ],
  },
  {
    id: "lost-horizon",
    title: "Pageant Material",
    type: "Album",
    year: 2023,
    description: "Tongue-in-cheek country charm meets sparkling pop production",
    image: albumLostHorizon,
    date: "May 20, 2023",
    status: "Available Now",
    platforms: [
      { name: "SoundCloud", url: "#" },
      { name: "Bandcamp", url: "#" },
    ],
  },
  {
    id: "electric-dreams",
    title: "Same Trailer, Different Park",
    type: "Album",
    year: 2021,
    description: "Debut album — small-town stories wrapped in warm, golden sound",
    image: albumElectricDreams,
    date: "November 10, 2021",
    status: "Available Now",
    platforms: [
      { name: "Apple Music", url: "#" },
      { name: "Spotify", url: "#" },
      { name: "Bandcamp", url: "#" },
    ],
  },
];

export const merchItems: MerchItem[] = [
  {
    id: "neon-shadows-vinyl",
    name: '"Golden Hour" Vinyl',
    category: "Vinyl",
    description: "180g honey-gold vinyl with exclusive art insert. Limited to 500 copies worldwide.",
    price: "$29.99",
    image: merchVinyl,
    purchaseLinks: [
      { platform: "Bandcamp", price: "$29.99", url: "#" },
      { platform: "Official Store", price: "$29.99", url: "#" },
    ],
    details: "180g honey-gold vinyl pressed at Third Man Pressing. Includes exclusive 18x24 art print. Limited to 500 copies worldwide. Comes with digital download card.",
  },
  {
    id: "midnight-echo-cd",
    name: '"Slow Burn" CD',
    category: "CD",
    description: "Enhanced packaging with 12-page booklet and acoustic bonus track",
    price: "$14.99",
    image: albumMidnightEcho,
  },
  {
    id: "tour-2024-tshirt",
    name: "Golden Hour Tour T-Shirt",
    category: "Apparel",
    description: "100% cotton tee with tour dates on back, vintage sunflower design",
    price: "$35.00",
    image: merchTshirt,
  },
  {
    id: "band-logo-hoodie",
    name: "Cassidy Lane Hoodie",
    category: "Apparel",
    description: "Premium heavyweight hoodie with embroidered logo",
    price: "$65.00",
    image: merchTshirt,
  },
  {
    id: "cosmic-drift-poster",
    name: '"Wildflower" Poster',
    category: "Print",
    description: "18x24 hand-numbered art print, signed by Cassidy Lane",
    price: "$25.00",
    image: albumCosmicDrift,
  },
  {
    id: "electric-dreams-cassette",
    name: '"Same Trailer" Cassette',
    category: "Cassette",
    description: "Limited run of 300, includes digital download code",
    price: "$12.99",
    image: albumElectricDreams,
  },
];

export const videos: VideoItem[] = [
  {
    id: "silent-thunder-mv",
    title: "Butterflies",
    type: "Official Music Video",
    duration: "3:45",
    image: albumSilentThunder,
    date: "January 15, 2024",
    director: "Bardia Zeinali",
    description: "Filmed in wildflower meadows across the Texas Hill Country, capturing the magic of golden hour and first love.",
  },
  {
    id: "midnight-echo-live",
    title: "Slow Burn",
    type: "Live Session at The Bluebird Cafe",
    duration: "4:12",
    image: albumMidnightEcho,
  },
  {
    id: "electric-dreams-bts",
    title: "Same Trailer, Different Park",
    type: "Behind the Scenes",
    duration: "6:20",
    image: albumElectricDreams,
  },
  {
    id: "neon-shadows-lyric",
    title: "Golden Hour",
    type: "Lyric Video",
    duration: "3:58",
    image: albumNeonShadows,
  },
  {
    id: "tour-diary-2023",
    title: "Tour Diary 2023",
    type: "Documentary",
    duration: "12:45",
    image: albumLostHorizon,
  },
  {
    id: "cosmic-drift-live",
    title: "Wildflower",
    type: "Live at Bonnaroo",
    duration: "18:30",
    image: albumCosmicDrift,
  },
];

export const tourDates: TourDate[] = [
  {
    id: "nashville-mar-15",
    date: "2024-03-15",
    day: "15",
    month: "MAR",
    city: "Nashville",
    state: "TN",
    venue: "The Ryman Auditorium",
    eventName: "Golden Hour Tour",
    status: "available",
    ticketUrl: "#",
    doors: "7:00 PM",
    showTime: "8:30 PM",
    prices: [
      { tier: "General Admission", price: "$45" },
      { tier: "VIP Experience", price: "$95" },
    ],
    description: "Opening night of the 2024 Golden Hour Tour. Full album performance plus fan favorites. Special guest opener: Margo Price.",
  },
  {
    id: "la-mar-22",
    date: "2024-03-22",
    day: "22",
    month: "MAR",
    city: "Los Angeles",
    state: "CA",
    venue: "The Greek Theatre",
    eventName: "Sunset Sessions",
    status: "available",
    ticketUrl: "#",
  },
  {
    id: "chicago-apr-5",
    date: "2024-04-05",
    day: "05",
    month: "APR",
    city: "Chicago",
    state: "IL",
    venue: "Thalia Hall",
    eventName: "Heartland Bloom",
    status: "available",
    ticketUrl: "#",
  },
  {
    id: "austin-apr-12",
    date: "2024-04-12",
    day: "12",
    month: "APR",
    city: "Austin",
    state: "TX",
    venue: "Stubb's BBQ",
    eventName: "Lone Star Glow",
    status: "sold-out",
  },
  {
    id: "brooklyn-apr-20",
    date: "2024-04-20",
    day: "20",
    month: "APR",
    city: "Brooklyn",
    state: "NY",
    venue: "Brooklyn Steel",
    eventName: "City Lights",
    status: "presale",
    ticketUrl: "#",
  },
  {
    id: "denver-may-3",
    date: "2024-05-03",
    day: "03",
    month: "MAY",
    city: "Denver",
    state: "CO",
    venue: "Red Rocks Amphitheatre",
    eventName: "Mountain Glow",
    status: "available",
    ticketUrl: "#",
  },
];

export const bandInfo = {
  name: "Cassidy Lane",
  bio: "Cassidy Lane is a country-pop singer-songwriter from Nashville, Tennessee. With a voice like warm honey and lyrics that feel like handwritten postcards, she crafts songs about love, small-town wonder, and the bittersweet beauty of growing up. Inspired by the wide-open skies of the American South and the shimmering pop production of the 2010s, her music lives in that golden space between country storytelling and dreamy pop. With four acclaimed releases and performances at festivals like Bonnaroo and Stagecoach, Cassidy Lane has become one of Nashville's most magnetic new voices.",
  members: [
    { name: "Cassidy Lane", role: "Vocals, Guitar, Songwriting" },
  ],
  contact: {
    management: "management@cassidylane.com",
    press: "press@cassidylane.com",
  },
  socials: [
    { name: "Instagram", url: "#" },
    { name: "Twitter", url: "#" },
    { name: "Facebook", url: "#" },
    { name: "TikTok", url: "#" },
  ],
};
