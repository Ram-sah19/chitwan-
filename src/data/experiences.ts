import heroRhino from "@/assets/hero-rhino-grassland.jpg";
import expRiverside from "@/assets/exp-riverside.jpg";
import expJungleWalk from "@/assets/exp-jungle-walk.jpg";
import expCanoe from "@/assets/exp-canoe.jpg";
import expJeep from "@/assets/exp-jeep.jpg";
import expTower from "@/assets/exp-tower.jpg";
import expBirdwatching from "@/assets/exp-birdwatching.jpg";
import expTharu from "@/assets/exp-tharu.jpg";
import expElephant from "@/assets/exp-elephant.jpg";
import expBeeshazari from "@/assets/exp-beeshazari.jpg";
import wlTiger from "@/assets/wl-tiger.jpg";
import wlDeer from "@/assets/wl-deer.jpg";
import wlGharial from "@/assets/wl-gharial.jpg";
import wlCrocodile from "@/assets/wl-crocodile.jpg";
import wlForest from "@/assets/wl-forest.jpg";

export { heroRhino };

export type ExperienceCategory =
  | "wildlife"
  | "river-wetlands"
  | "adventure"
  | "birdwatching"
  | "culture"
  | "overnight";

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface Experience {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  excerpt: string;
  cta: string;
  categories: ExperienceCategory[];
  cover: string;
  coverAlt: string;
  /** Editable by the operator — no schedule is invented. */
  duration: string;
  /** Always null until the operator confirms pricing. */
  price: null;
  overview: string;
  mayExperience: string[];
  whatToBring: string[];
  safety: string[];
  seasonal: string[];
  /** Experience-specific responsible-tourism or booking note. */
  note?: string;
  gallery: GalleryImage[];
}

export const categoryLabels: Record<ExperienceCategory | "all", string> = {
  all: "All Experiences",
  wildlife: "Wildlife",
  "river-wetlands": "River & Wetlands",
  adventure: "Adventure",
  birdwatching: "Birdwatching",
  culture: "Culture",
  overnight: "Overnight Experiences",
};

export const experiences: Experience[] = [
  {
    slug: "riverside-tour",
    number: "01",
    title: "Scenic Riverside Tour",
    tagline: "Your first glimpse of the wild.",
    excerpt:
      "Begin your Chitwan journey with a welcoming exploration of the buffer zone and surrounding natural landscapes. Observe birds, discover local flora and fauna, enjoy a gentle hike, and finish with beautiful sunset views from the riverbank. A perfect introduction to the wilderness.",
    cta: "Explore the Riverside Tour",
    categories: ["river-wetlands", "adventure"],
    cover: expRiverside,
    coverAlt: "Sunset over the river with a wooden dugout canoe resting on the sandy bank",
    duration: "Flexible — confirm the schedule with us when you enquire",
    price: null,
    overview:
      "The Scenic Riverside Tour is a gentle way to arrive in Chitwan. We explore the buffer zone and surrounding natural landscapes at an easy pace — looking for birds, learning local flora and fauna, and walking an easy trail before settling on the riverbank for sunset. It is designed as a welcoming first experience, and pairs beautifully with any other day in the park.",
    mayExperience: [
      "Wetland and grassland birdlife along the buffer zone",
      "Local flora and fauna explained by your guide",
      "A gentle hike on easy trails",
      "Sunset over the river from a quiet bank",
    ],
    whatToBring: [
      "Comfortable walking shoes",
      "Light, breathable clothing",
      "Refillable water bottle",
      "Binoculars and camera",
      "Sun protection — hat and sunscreen",
    ],
    safety: [
      "Walk with your guide at all times",
      "Stay on marked trails and follow your guide's instructions",
      "Keep a respectful distance from any wildlife",
    ],
    seasonal: [
      "Winter (Oct–Feb): clear, pleasant days and soft evening light",
      "Spring (Mar–Apr): warm afternoons, active birdlife",
      "Monsoon (May–Sep): lush scenery, possible schedule changes with weather",
    ],
    gallery: [
      { src: expRiverside, alt: "Sunset over the river with a canoe on the bank" },
      { src: expCanoe, alt: "A dugout canoe drifting on the calm Rapti River at dawn" },
      { src: expBirdwatching, alt: "A white-throated kingfisher perched above a wetland" },
    ],
  },
  {
    slug: "guided-jungle-walk",
    number: "02",
    title: "Guided Jungle Walk",
    tagline: "Follow the signs of the forest.",
    excerpt:
      "Explore the forest on foot with an experienced local guide. Learn about wildlife behavior, discover animal tracks, and explore the trails, river crossings, and watering areas frequented by wildlife. Every walk is an opportunity to understand the jungle more closely.",
    cta: "Discover Jungle Walks",
    categories: ["wildlife", "adventure"],
    cover: expJungleWalk,
    coverAlt: "A local guide walking a narrow forest trail through dense sal forest",
    duration: "Flexible — confirm the schedule with us when you enquire",
    price: null,
    overview:
      "Walking the forest is the most intimate way to read the jungle. With an experienced local guide you learn to notice what the canopy hides: fresh tracks, alarm calls, wallows and watering areas. Routes follow established trails, river crossings and forest paths inside and around the park's protected landscapes.",
    mayExperience: [
      "Animal tracks, signs and feeding areas interpreted by your guide",
      "Forest ecology — sal trees, undergrowth, riverine forest",
      "Birdlife and smaller wildlife along quiet trails",
      "Watering areas and river crossings used by wildlife",
    ],
    whatToBring: [
      "Sturdy closed walking shoes",
      "Long trousers and neutral-coloured clothing",
      "Water and a light snack",
      "Binoculars",
      "Insect repellent",
    ],
    safety: [
      "Wildlife sightings are never guaranteed",
      "Always follow your guide's safety instructions without exception",
      "Walk in single file and stay quiet when instructed",
    ],
    seasonal: [
      "Winter: comfortable walking temperatures, thinner undergrowth",
      "Spring and early summer: warming days, active wildlife mornings",
      "Monsoon: dense green growth; some trails may close",
    ],
    note: "Wildlife sightings are never guaranteed, and visitors must follow their guide's safety instructions at all times.",
    gallery: [
      { src: expJungleWalk, alt: "A guide walking through dappled light in the sal forest" },
      { src: wlDeer, alt: "Spotted deer among sal trees in morning light" },
      { src: wlForest, alt: "Still forest pond framed by giant trees" },
    ],
  },
  {
    slug: "canoe-rapti-river",
    number: "03",
    title: "Canoeing on the Rapti River",
    tagline: "Drift into the wild.",
    excerpt:
      "Glide along the peaceful waters of the Rapti River while observing birds, riverbanks, and the fascinating reptiles that inhabit this ecosystem. Look for gharials and marsh crocodiles, with occasional opportunities to spot other wildlife near the river.",
    cta: "Explore River Journeys",
    categories: ["river-wetlands", "wildlife"],
    cover: expCanoe,
    coverAlt: "A traditional dugout canoe gliding on the glassy morning water of the Rapti River",
    duration: "Flexible — confirm the schedule with us when you enquire",
    price: null,
    overview:
      "A traditional dugout canoe carries you quietly along the Rapti River — one of the calmest ways to be present in the landscape. From the water you watch kingfishers and waders, read the riverbanks, and look for the resident gharials and marsh crocodiles basking on the sand.",
    mayExperience: [
      "Gharials and marsh crocodiles from a respectful distance",
      "Kingfishers, waders and other riverine birds",
      "Riverbank life and quiet backwaters",
      "Beautiful morning light on the water",
    ],
    whatToBring: [
      "Light layers — mornings on the water are cool",
      "Binoculars and camera with a strap",
      "Sun protection",
      "Water",
    ],
    safety: [
      "Stay seated and keep hands inside the canoe",
      "Wear the life jacket provided",
      "Follow your boatman's instructions at all times",
    ],
    seasonal: [
      "Winter: misty, atmospheric mornings on the water",
      "Spring: warm, calm conditions",
      "Monsoon: high water may suspend canoe trips",
    ],
    note: "Sightings of animals are never guaranteed. Canoeing does not promise sightings of tigers, rhinos, elephants or other large animals — the river journey is about the ecosystem itself.",
    gallery: [
      { src: expCanoe, alt: "Canoe on the calm Rapti River surrounded by mist" },
      { src: wlGharial, alt: "A gharial resting on a sandy riverbank" },
      { src: wlCrocodile, alt: "A marsh crocodile's eyes just above the water" },
    ],
  },
  {
    slug: "jeep-safari",
    number: "04",
    title: "Jeep Safari",
    tagline: "Go deeper into the wilderness.",
    excerpt:
      "Travel through designated safari routes in and around Chitwan's protected landscapes with an authorized local operator. Explore forests, grasslands, and wildlife habitats while learning about the ecosystem from your guide.",
    cta: "Plan a Jeep Safari",
    categories: ["wildlife", "adventure"],
    cover: expJeep,
    coverAlt: "An open safari jeep on a dust-lit dirt track through forest and grassland",
    duration:
      "Duration options — short, half-day, full-day and multi-day safaris — are confirmed with you at the time of booking",
    price: null,
    overview:
      "A jeep safari covers ground and habitat that walking cannot: designated safari routes through forests, grasslands and river valleys in and around Chitwan's protected landscapes. An authorized local operator and an experienced guide travel with you, interpreting everything the route offers.",
    mayExperience: [
      "Designated safari routes through forest and grassland",
      "Rhinos, deer, wild boar and other wildlife when present",
      "Diverse habitats from riverine forest to open phanta",
      "Ecology and behaviour explained by your guide",
    ],
    whatToBring: [
      "Neutral-coloured clothing",
      "Dust protection — scarf or buff",
      "Binoculars and camera",
      "Water and sun protection",
    ],
    safety: [
      "Remain inside the vehicle at all times",
      "Follow park rules and your guide's instructions",
      "Never feed or call to wildlife",
    ],
    seasonal: [
      "Winter: clear visibility through thinner vegetation",
      "Spring and early summer: best odds of viewing as grasses are cut or dry",
      "Monsoon: route access may change with weather and water levels",
    ],
    note: "Availability, route access, seasonal vegetation, weather and wildlife movement all affect the experience. Wildlife sightings cannot be guaranteed.",
    gallery: [
      { src: expJeep, alt: "A safari jeep on a forest track in golden light" },
      { src: heroRhino, alt: "A greater one-horned rhinoceros in tall grass at dawn" },
      { src: wlDeer, alt: "Spotted deer alert in the forest undergrowth" },
    ],
  },
  {
    slug: "overnight-tower-stay",
    number: "05",
    title: "Overnight Wildlife Tower Stay",
    tagline: "Let the jungle tell its nighttime stories.",
    excerpt:
      "Spend an unforgettable night immersed in the sounds of nature from a designated wildlife observation tower or authorized observation shelter. Enjoy the atmosphere of the forest after sunset and experience the quieter side of the wilderness.",
    cta: "Discover the Night Experience",
    categories: ["overnight", "wildlife"],
    cover: expTower,
    coverAlt: "A wooden observation tower above misty treetops under a twilight sky",
    duration: "One night — exact arrangements depend on the location and booking package",
    price: null,
    overview:
      "Few experiences change how you hear the forest like a night spent in it. From a designated wildlife observation tower or authorized observation shelter you fall asleep to insect song, frogs, and distant calls — and wake with the first light over the canopy.",
    mayExperience: [
      "The forest's night sounds from an authorized shelter",
      "Dawn over the canopy from the tower platform",
      "A quieter, slower side of the wilderness",
    ],
    whatToBring: [
      "Warm layer — nights are cooler than days",
      "Torch or headlamp with a red-light mode",
      "Mosquito repellent",
      "Water and simple provisions as agreed at booking",
    ],
    safety: [
      "Stay on the tower platform or inside the shelter after dark",
      "Follow the arrangements confirmed for your booking",
      "Never use bright white lights or make loud sounds at night",
    ],
    seasonal: [
      "Winter: crisp, clear nights with brilliant stars",
      "Spring: comfortable nights, active dawn chorus",
      "Monsoon: availability depends on weather and access",
    ],
    note: "Dinner arrangements, overnight access and facilities depend on the actual location and booking package. Nocturnal wildlife sightings — tiger, leopard or otherwise — are never guaranteed.",
    gallery: [
      { src: expTower, alt: "Observation tower above the treetops at dusk" },
      { src: wlTiger, alt: "A Bengal tiger moving through tall grass" },
      { src: wlForest, alt: "Forest pond under dense green canopy" },
    ],
  },
  {
    slug: "birdwatching",
    number: "06",
    title: "Birdwatching",
    tagline: "A paradise for curious eyes.",
    excerpt:
      "Discover Chitwan's remarkable birdlife across wetlands, marshes, grasslands, riverine forests, and sal forests. With its diverse habitats and seasonal visitors, the region offers rewarding opportunities for birdwatchers, photographers, and nature enthusiasts.",
    cta: "Explore Birdwatching",
    categories: ["birdwatching", "wildlife"],
    cover: expBirdwatching,
    coverAlt: "A white-throated kingfisher in vivid turquoise and orange above a wetland",
    duration: "Flexible — confirm the schedule with us when you enquire",
    price: null,
    overview:
      "Chitwan's mix of wetlands, marshes, grasslands, riverine forest and sal forest supports an extraordinary range of birdlife, from resident kingfishers and hornbills to seasonal visitors. We plan outings around habitat and time of day, moving slowly and quietly for the best viewing and photography.",
    mayExperience: [
      "Kingfishers, waders and waterbirds across the wetlands",
      "Hornbills, barbets and woodpeckers in the sal forest",
      "Grassland specialists and raptors",
      "Seasonal visitors depending on the time of year",
    ],
    whatToBring: [
      "Binoculars — essential",
      "Field guide or bird app",
      "Neutral, quiet clothing",
      "Camera with a longer lens if you photograph",
    ],
    safety: [
      "Stay with your guide and on marked paths",
      "Keep noise to a minimum around nesting areas",
      "Never disturb birds for a better photograph",
    ],
    seasonal: [
      "Winter: peak season for resident and migratory species",
      "Spring: breeding activity and vocal displays",
      "Monsoon: lush habitat; some areas harder to reach",
    ],
    note: "Chitwan is often cited as home to well over 500 recorded bird species. We prefer to let each outing show you what is present, rather than promise numbers.",
    gallery: [
      { src: expBirdwatching, alt: "White-throated kingfisher over a wetland" },
      { src: expBeeshazari, alt: "Interconnected lakes of the Beeshazari Tal wetlands" },
      { src: expRiverside, alt: "Riverbank at sunset" },
    ],
  },
  {
    slug: "tharu-cultural-dance",
    number: "07",
    title: "Tharu Cultural Dance",
    tagline: "Experience the living heritage of Chitwan.",
    excerpt:
      "Discover the traditions of the Tharu communities through local dance, music, and cultural performances. Learn about the people, stories, and customs that form an essential part of the region's identity.",
    cta: "Discover Tharu Culture",
    categories: ["culture"],
    cover: expTharu,
    coverAlt: "Tharu dancers in traditional attire performing around a fire at dusk",
    duration: "Evening performance — schedule confirmed with the community programme",
    price: null,
    overview:
      "The Tharu communities have shaped life in the Terai for centuries. An evening of local dance, music and storytelling — presented by the community itself — is a chance to learn about the people, stories and customs that form an essential part of the region's identity.",
    mayExperience: [
      "Traditional Tharu dance and music performed by community members",
      "Stories and context shared by local hosts",
      "A warm, locally led village welcome",
    ],
    whatToBring: [
      "Curiosity and respect",
      "A light layer for the evening",
      "Ask before photographing individuals",
    ],
    safety: [
      "This is a community-hosted event; follow your host's guidance",
      "Ask permission before photographing performers up close",
    ],
    seasonal: [
      "Performances run year-round; village festivals add special occasions",
    ],
    note: "Performances are presented with the participating communities and emphasise cultural respect and locally led experiences — never culture as a spectacle.",
    gallery: [
      { src: expTharu, alt: "Tharu community dance around a fire at dusk" },
      { src: aboutGuideImg, alt: "A local guide at the edge of the grassland at golden hour" },
    ],
  },
  {
    slug: "elephant-observation-walk",
    number: "08",
    title: "Ethical Elephant Observation Walk",
    tagline: "Observe elephants with respect.",
    excerpt:
      "Experience the presence and behavior of Asian elephants through a responsible, guide-led observation experience. Learn about these remarkable animals, observe them from an appropriate distance, and discover their natural behaviors without riding on their backs.",
    cta: "Learn About the Experience",
    categories: ["wildlife"],
    cover: expElephant,
    coverAlt: "A herd of wild Asian elephants grazing at a distance across grassland at dusk",
    duration: "Flexible — confirm the schedule with us when you enquire",
    price: null,
    overview:
      "This is an observation experience, not an interaction. With a guide, you watch wild Asian elephants from an appropriate distance — learning how they feed, move and socialise — without riding or approaching them. Our emphasis is on the animals' wellbeing and their own space.",
    mayExperience: [
      "Wild Asian elephants observed from a respectful distance",
      "Natural feeding, movement and herd behaviour",
      "Your guide's insight into elephant ecology and conservation",
    ],
    whatToBring: [
      "Binoculars — observation happens at a distance",
      "Neutral-coloured clothing",
      "Water and sun protection",
    ],
    safety: [
      "Wild elephants are unpredictable; always follow your guide",
      "Keep the distance your guide sets, always",
      "Never attempt to approach, feed or call to elephants",
    ],
    seasonal: [
      "Sightings vary with season, water levels and elephant movement",
    ],
    note: "Any additional activities such as feeding or walking alongside elephants would only be offered after confirming the activity, animal-welfare practices, supervision and safety arrangements with the operator. No interaction is labelled ethical without evidence supporting it.",
    gallery: [
      { src: expElephant, alt: "Elephant herd grazing across open grassland at dusk" },
      { src: wlForest, alt: "Riverine forest and wetland" },
    ],
  },
  {
    slug: "beeshazari-tal",
    number: "09",
    title: "Twenty Thousand Lakes (Beeshazari Tal)",
    tagline: "Discover Chitwan's wetland wonderland.",
    excerpt:
      "Explore the remarkable Beeshazari Tal wetland landscape, known for its interconnected lakes, rich biodiversity, and tranquil scenery. Discover the wetlands by bicycle where permitted or arrange a vehicle-based visit according to local access and conditions.",
    cta: "Explore Beeshazari Tal",
    categories: ["river-wetlands", "birdwatching", "adventure"],
    cover: expBeeshazari,
    coverAlt: "The interconnected lakes of the Beeshazari Tal wetlands winding through forest",
    duration: "Half to full day — access and route confirmed with local conditions",
    price: null,
    overview:
      "Beeshazari Tal — the Twenty Thousand Lakes — is a chain of interconnected wetlands rich with birdlife, fish and quiet water channels. Depending on local access and conditions, we explore by bicycle where permitted, or by vehicle along the wetland edge, with time to simply sit and watch.",
    mayExperience: [
      "A chain of interconnected lakes and water channels",
      "Waterbirds, waders and wetland wildlife",
      "Cycling the wetland edge where access permits",
      "Tranquil scenery far from the crowds",
    ],
    whatToBring: [
      "Comfortable cycling or walking shoes",
      "Binoculars",
      "Insect repellent",
      "Water and snacks",
    ],
    safety: [
      "Stay on designated paths and follow your guide",
      "Check access conditions — they change with the season",
      "Respect water levels and warning signs",
    ],
    seasonal: [
      "Winter: peak waterbird season and clear skies",
      "Monsoon: lakes swell; some routes close",
    ],
    note: "Beeshazari Tal is part of the wider Chitwan conservation landscape, which includes Chitwan National Park — a UNESCO World Heritage Site. The wetlands themselves are protected within this broader landscape.",
    gallery: [
      { src: expBeeshazari, alt: "Wetland lakes and forest channels of Beeshazari Tal" },
      { src: expBirdwatching, alt: "Kingfisher over the wetland" },
      { src: expJeep, alt: "Vehicle track through the jungle" },
    ],
  },
];

import aboutGuideImg from "@/assets/about-guide.jpg";

export function getExperience(slug: string): Experience | undefined {
  return experiences.find((e) => e.slug === slug);
}

export function relatedExperiences(slug: string, count = 3): Experience[] {
  const current = getExperience(slug);
  if (!current) return [];
  return experiences
    .filter((e) => e.slug !== slug)
    .sort((a, b) => {
      const aShared = a.categories.filter((c) => current.categories.includes(c)).length;
      const bShared = b.categories.filter((c) => current.categories.includes(c)).length;
      return bShared - aShared;
    })
    .slice(0, count);
}

export interface WildlifeFeature {
  name: string;
  blurb: string;
  image: string;
  alt: string;
}

export const wildlifeFeatures: WildlifeFeature[] = [
  {
    name: "Greater One-Horned Rhinoceros",
    blurb: "Chitwan's icon — a conservation success story grazing the river grasslands.",
    image: heroRhino,
    alt: "A greater one-horned rhinoceros in tall grassland at dawn",
  },
  {
    name: "Bengal Tiger",
    blurb: "Elusive and solitary; a presence felt in tracks and alarm calls.",
    image: wlTiger,
    alt: "A Bengal tiger moving through tall golden grass",
  },
  {
    name: "Asian Elephant",
    blurb: "Matriarch herds moving quietly between forest and river.",
    image: expElephant,
    alt: "Asian elephants grazing across open grassland at dusk",
  },
  {
    name: "Gharial",
    blurb: "A living fossil — the fish-eating crocodilian of the Rapti's sandbanks.",
    image: wlGharial,
    alt: "A gharial resting on a sandy riverbank",
  },
  {
    name: "Marsh Crocodile",
    blurb: "The mugger — patient, ancient, watching from still water.",
    image: wlCrocodile,
    alt: "A marsh crocodile's eyes just above the water surface",
  },
  {
    name: "Spotted Deer",
    blurb: "The forest's most graceful residents — and the tiger's constant shadow.",
    image: wlDeer,
    alt: "Spotted deer among sal trees in the morning light",
  },
  {
    name: "Birds of Chitwan",
    blurb: "From kingfishers to hornbills — hundreds of species across every habitat.",
    image: expBirdwatching,
    alt: "A white-throated kingfisher perched above a wetland",
  },
  {
    name: "Forest & Wetland Ecosystems",
    blurb: "Sal forests, oxbow lakes and grasslands — the landscape everything depends on.",
    image: wlForest,
    alt: "A still forest pond framed by giant sal trees",
  },
];

export const galleryImages: GalleryImage[] = [
  { src: heroRhino, alt: "Rhinoceros in the grasslands at dawn" },
  { src: expCanoe, alt: "Canoeing along the Rapti River at first light" },
  { src: wlGharial, alt: "Gharial resting on a riverbank" },
  { src: expBirdwatching, alt: "Birds of the wetlands — a white-throated kingfisher" },
  { src: expJeep, alt: "Jeep tracks through the jungle" },
  { src: expRiverside, alt: "Sunset over the river" },
  { src: expTharu, alt: "Tharu cultural performance at dusk" },
  { src: expBeeshazari, alt: "Beeshazari Tal wetlands" },
  { src: wlForest, alt: "Forest landscapes of Chitwan" },
];
