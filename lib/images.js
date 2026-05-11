// ═══════════════════════════════════════════════════════════════
//  ONE MORE TRAVEL — Central Image Registry v2
//
//  All images use Unsplash CDN (temporary showcase assets).
//  Status: cdn-placeholder — replace with approved editorial
//  assets before commercial/marketing use.
//
//  To swap an image:
//    1. Update the `id` field with a new Unsplash photo ID
//    2. Or change `url` to a local path: '/images/...'
//    3. Update `alt` and `note` to match the new image
//
//  Fallback: SafeImg component handles 404s gracefully.
// ═══════════════════════════════════════════════════════════════

const CDN = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?w=${w}&q=88&auto=format&fit=crop`;

// ─── Registry ─────────────────────────────────────────────────
export const REGISTRY = {

  // ── PAGE HEROES ─────────────────────────────────────────────
  'hero-main': {
    id: 'photo-1520250497591-112f2f40a3f4',
    alt: 'Overwater villas at sunset, Indian Ocean',
    category: 'hero', note: 'Homepage hero — overwater resort aerial',
  },
  'hero-about': {
    id: 'photo-1566073771259-6a8506099945',
    alt: 'Luxury resort pool surrounded by palm trees, aerial view',
    category: 'hero', note: 'About page hero — resort aerial',
  },
  'hero-destinations': {
    id: 'photo-1467269204594-9661b134dd2b',
    alt: 'Narrow European street with warm evening light',
    category: 'hero', note: 'Destinations hero — European travel mood',
  },
  'hero-hotels': {
    id: 'photo-1584132967334-10e028bd69f7',
    alt: 'Elegant hotel suite interior with natural light',
    category: 'hero', note: 'Hotels & Lodges hero — suite interior',
  },
  'hero-styles': {
    id: 'photo-1476514525535-07fb3b4ae5f1',
    alt: 'Family travelling with light luggage in warm evening light',
    category: 'hero', note: 'Travel Styles hero — family travel mood',
  },
  'hero-experiences': {
    id: 'photo-1507608616759-54f48f0af0ee',
    alt: 'Sailing yacht on open ocean, aerial view',
    category: 'hero', note: 'Extraordinary Experiences hero',
  },
  'hero-journeys': {
    id: 'photo-1571896349842-33c89424de2d',
    alt: 'Luxury resort pool with mountain backdrop',
    category: 'hero', note: 'Journeys hero',
  },
  'hero-journal': {
    id: 'photo-1524678606370-a47ad25cb82a',
    alt: 'Travel journal, coffee and morning light',
    category: 'hero', note: 'Journal hero — reading/travel mood',
  },
  'hero-inquiry': {
    id: 'photo-1540202404-a2f29016b523',
    alt: 'Luxury resort infinity pool overlooking ocean at golden hour',
    category: 'hero', note: 'Inquiry hero — aspirational resort',
  },

  // ── ABOUT SECTIONS ──────────────────────────────────────────
  'about-1': {
    id: 'photo-1520250497591-112f2f40a3f4',
    alt: 'Overwater villa deck with steps leading to lagoon',
    category: 'about', note: 'About — resort arrival / our story',
  },
  'about-2': {
    id: 'photo-1571896349842-33c89424de2d',
    alt: 'Luxury resort with tiered pools and tropical garden — travel planning and curation',
    category: 'about', note: 'About — How We Work section. FIXED: was bedroom',
  },
  'about-3': {
    id: 'photo-1584132967334-10e028bd69f7',
    alt: 'Refined hotel suite interior with natural light',
    category: 'about', note: 'About — hotel interior / expertise',
  },
  'about-chengdu': {
    id: 'photo-1556909114-f6e7ad7d3136',
    alt: 'Contemporary boutique interior in Chengdu — modern lifestyle',
    category: 'about', note: 'Chengdu office — modern boutique lifestyle, NOT tourist landmark',
  },
  'about-melbourne': {
    id: 'photo-1545044846-351ba102b6d5',
    alt: 'Melbourne contemporary urban architecture and culture',
    category: 'about', note: 'Melbourne office — contemporary urban, NOT Sydney Opera House',
  },

  // ── DESTINATIONS ────────────────────────────────────────────
  'dest-italy': {
    id: 'photo-1523906834658-6e24ef2386f9',
    alt: 'Cinque Terre colourful village on Italian Riviera cliff',
    category: 'destination', note: 'Italy — coastal village, Italian atmosphere',
  },
  'dest-france': {
    id: 'photo-1499856871958-5b9627545d1a',
    alt: 'Paris rooftop view with Haussmann architecture at dusk',
    category: 'destination', note: 'France — refined Paris aerial, not tourist cliché',
  },
  'dest-switzerland': {
    id: 'photo-1506905925346-21bda4d32df4',
    alt: 'Swiss Alps reflected in mountain lake, dramatic peaks',
    category: 'destination', note: 'Switzerland — Alps reflection lake, NOT Eiffel Tower',
  },
  'dest-japan': {
    id: 'photo-1528360983277-13d401cdc186',
    alt: 'Misty mountain landscape with pagoda, Japan countryside',
    category: 'destination', note: 'Japan — traditional landscape, sense of place',
  },
  'dest-thailand': {
    id: 'photo-1537996194471-e657df975ab4',
    alt: 'Ancient Buddhist temple complex surrounded by tropical trees',
    category: 'destination', note: 'Thailand — temple, culture, NOT beach cliché',
  },
  'dest-australia': {
    id: 'photo-1523428096881-5bd79d043006',
    alt: 'Australian coastal landscape with golden grass and ocean',
    category: 'destination', note: 'Australia — landscape, NOT Sydney Opera House',
  },
  'dest-maldives': {
    id: 'photo-1573843981267-be1999ff37cd',
    alt: 'Overwater villas at dawn with calm turquoise lagoon',
    category: 'destination', note: 'Maldives — quiet villa morning, not generic drone',
  },
  'dest-middle-east': {
    id: 'photo-1512453979798-5ea266f8880c',
    alt: 'Desert landscape with ancient architecture at golden hour',
    category: 'destination', note: 'Middle East — desert/architecture, NOT only Dubai skyline',
  },
  'dest-kenya': {
    id: 'photo-1516026672322-bc52d61a55d5',
    alt: 'Safari vehicle at sunset in African savanna, giraffe silhouette',
    category: 'destination', note: 'Kenya — safari mood, landscape + wildlife',
  },
  'dest-antarctica': {
    id: 'photo-1509516350595-ef0def7aa265',
    alt: 'Expedition ship navigating Antarctic ice with dramatic peaks',
    category: 'destination', note: 'Antarctica — ice + ship, NOT aurora placeholder',
  },
  'dest-patagonia': {
    id: 'photo-1501854140801-50d01698950b',
    alt: 'Torres del Paine dramatic granite peaks with turquoise lake, Patagonia',
    category: 'destination', note: 'Patagonia — Torres del Paine mountains, FIXED broken image',
  },

  // ── HOTELS — BRANDS ──────────────────────────────────────────
  'hotel-aman': {
    id: 'photo-1520250497591-112f2f40a3f4',
    alt: 'Serene overwater villa with reflection pool — Aman-style luxury',
    category: 'hotel', note: 'Aman — quiet luxury, reflection, stillness. Replace with Aman press image.',
  },
  'hotel-four-seasons': {
    id: 'photo-1566073771259-6a8506099945',
    alt: 'Four Seasons Resort aerial view — lush tropical pool, consistent luxury hospitality',
    category: 'hotel', note: 'Four Seasons — refined resort, reliable luxury',
  },
  'hotel-rosewood': {
    id: 'photo-1551882547-ff40c63fe5fa',
    alt: 'Grand hotel lobby with warm lighting and architectural detail',
    category: 'hotel', note: 'Rosewood — sense of place, warm, design-led',
  },
  'hotel-six-senses': {
    id: 'photo-1441974231531-c6227db76b6e',
    alt: 'Six Senses-style outdoor pavilion in lush forest landscape, nature-integrated wellness',
    category: 'hotel', note: 'Six Senses — Douro Valley/Ibiza/Kyoto style; forest, nature, outdoor wellness. FIXED: was soap bottle',
  },
  'hotel-safari': {
    id: 'photo-1516026672322-bc52d61a55d5',
    alt: 'Luxury safari lodge deck overlooking vast African savanna at sunset',
    category: 'hotel', note: 'Safari Lodges — lodge deck + landscape, elegant wilderness',
  },
  'hotel-villas': {
    id: 'photo-1512917774080-9991f1c4c750',
    alt: 'Private villa with outdoor infinity pool and lush gardens — Samujana or Nihi Sumba style',
    category: 'hotel', note: 'Private Villas — outdoor pool, privacy. FIXED: was generic bedroom',
  },
  'hotel-wellness': {
    id: 'photo-1469474968028-56623f02e42e',
    alt: 'Clinique La Prairie-style Swiss alpine lake with mountain backdrop — longevity wellness',
    category: 'hotel', note: 'CLP/Lanserhof style — Swiss lake, alpine calm, medical longevity. FIXED: was soap bottle',
  },

  // ── HOTEL CATEGORIES ────────────────────────────────────────
  'cat-city-hotels': {
    id: 'photo-1551882547-ff40c63fe5fa',
    alt: 'Grand urban hotel with dramatic architectural lobby',
    category: 'hotel-cat', note: 'City Landmark Hotels',
  },
  'cat-private-villas': {
    id: 'photo-1512917774080-9991f1c4c750',
    alt: 'Private villa with pool — Samujana / Nihi Sumba / Lake Como villa style',
    category: 'hotel-cat', note: 'Private Villas & Estates category. FIXED: was generic bedroom',
  },
  'cat-island-resorts': {
    id: 'photo-1573843981267-be1999ff37cd',
    alt: 'Overwater villa at sunrise, Maldives lagoon',
    category: 'hotel-cat', note: 'Island Resorts & Overwater Villas',
  },
  'cat-wellness': {
    id: 'photo-1469474968028-56623f02e42e',
    alt: 'Alpine lake wellness retreat, Swiss mountain setting for longevity programmes',
    category: 'hotel-cat', note: 'Wellness & Longevity Retreats category. FIXED: was soap bottle',
  },
  'cat-boutique': {
    id: 'photo-1571896349842-33c89424de2d',
    alt: 'Design-led boutique hotel with distinctive architecture and pool',
    category: 'hotel-cat', note: 'Design-led Boutique Hotels',
  },
  'cat-safari-lodges': {
    id: 'photo-1516026672322-bc52d61a55d5',
    alt: 'Luxury tented camp with elevated deck overlooking African plains',
    category: 'hotel-cat', note: 'Safari Lodges & Remote Camps',
  },

  // ── TRAVEL STYLES ──────────────────────────────────────────
  'style-school-holidays': {
    id: 'photo-1476514525535-07fb3b4ae5f1',
    alt: 'Family with light luggage walking through sunlit travel destination',
    category: 'style', note: 'School Holidays — family movement, warm light',
  },
  'style-family': {
    id: 'photo-1540202404-a2f29016b523',
    alt: 'Family enjoying sunset view from luxury resort terrace',
    category: 'style', note: 'Family Journeys — resort family moment',
  },
  'style-culture': {
    id: 'photo-1467269204594-9661b134dd2b',
    alt: 'Quiet European street at dusk with warm window lights',
    category: 'style', note: 'Culture & Discovery — European atmosphere',
  },
  'style-safari': {
    id: 'photo-1516026672322-bc52d61a55d5',
    alt: 'Open safari vehicle with passengers at golden hour in savanna',
    category: 'style', note: 'Safari & Wilderness — vehicle silhouette, landscape',
  },
  'style-islands': {
    id: 'photo-1573843981267-be1999ff37cd',
    alt: 'Overwater villa with breakfast terrace and lagoon view at dawn',
    category: 'style', note: 'Island Escapes — villa morning calm',
  },
  'style-celebration': {
    id: 'photo-1540202404-a2f29016b523',
    alt: 'Romantic dinner table on resort terrace overlooking ocean at sunset',
    category: 'style', note: 'Celebration Journeys — honeymoon / anniversary',
  },
  'style-slow-luxury': {
    id: 'photo-1523906834658-6e24ef2386f9',
    alt: 'Italian coastal village — Cinque Terre / Lake Como atmosphere for slow luxury travel',
    category: 'style', note: 'Slow Luxury — Italian landscape, Lake Como, Tuscany mood. FIXED: was bedroom',
  },
  'style-wellness': {
    id: 'photo-1441974231531-c6227db76b6e',
    alt: 'Serene forest pathway for outdoor wellness and nature therapy',
    category: 'style', note: 'Wellness & Longevity style — nature, outdoor, renewal. FIXED: was soap bottle',
  },

  // ── EXTRAORDINARY EXPERIENCES ────────────────────────────────
  'exp-luxury-rail': {
    id: 'photo-1474487548417-781cb6d646b3',
    alt: 'Orient-Express style dining car with white tablecloths, evening service',
    category: 'experience', note: 'Luxury Rail — dining car, NOT generic train',
  },
  'exp-private-jet': {
    id: 'photo-1436491865332-7a61a109cc05',
    alt: 'Aerial view over clouds from private aircraft — journey perspective',
    category: 'experience', note: 'Private Jet — refined aviation, NOT flashy',
  },
  'exp-expedition': {
    id: 'photo-1509516350595-ef0def7aa265',
    alt: 'Expedition ship breaking through Antarctic ice, dramatic polar landscape',
    category: 'experience', note: 'Expedition Cruise — polar ship + ice, NOT aurora',
  },
  'exp-safari': {
    id: 'photo-1516026672322-bc52d61a55d5',
    alt: 'Luxury safari camp deck at sunset with sweeping savanna view',
    category: 'experience', note: 'Safari — lodge deck + landscape, elegant',
  },
  'exp-villas': {
    id: 'photo-1512917774080-9991f1c4c750',
    alt: 'Private villa outdoor infinity pool at dusk — Samujana / Nihi Sumba style outdoor living',
    category: 'experience', note: 'Private Villas experience. FIXED: was bedroom',
  },
  'exp-wellness': {
    id: 'photo-1469474968028-56623f02e42e',
    alt: 'Mountain lake wellness setting for longevity retreats — Clinique La Prairie / SHA Wellness style',
    category: 'experience', note: 'Wellness Retreats experience — alpine lake, longevity. FIXED: was soap bottle',
  },

  // ── JOURNEYS ────────────────────────────────────────────────
  'journey-italy-family': {
    id: 'photo-1523906834658-6e24ef2386f9',
    alt: 'Lake Como boat excursion, Italian villa garden, summer afternoon',
    category: 'journey', note: 'Italy Family Summer — Lake Como / villa mood',
  },
  'journey-japan-winter': {
    id: 'photo-1528360983277-13d401cdc186',
    alt: 'Snowy Japanese mountain landscape with traditional rooftop',
    category: 'journey', note: 'Japan Winter — Hokkaido/snow/onsen mood, NOT generic',
  },
  'journey-maldives': {
    id: 'photo-1573843981267-be1999ff37cd',
    alt: 'Private overwater villa at dawn, calm turquoise lagoon',
    category: 'journey', note: 'Maldives Island Escape — quiet luxury, NOT generic drone',
  },
  'journey-africa': {
    id: 'photo-1516026672322-bc52d61a55d5',
    alt: 'Safari vehicle with guests watching elephants at sunset in Kenya',
    category: 'journey', note: 'Africa Safari & Beach — safari mood + landscape',
  },
  'journey-europe-rail': {
    id: 'photo-1474487548417-781cb6d646b3',
    alt: 'Luxury train dining car at night, silver service, passing landscape',
    category: 'journey', note: 'Europe by Luxury Rail — Orient-Express style dining',
  },
  'journey-australia': {
    id: 'photo-1523428096881-5bd79d043006',
    alt: 'Yarra Valley vineyard at harvest time, late afternoon golden light',
    category: 'journey', note: 'Australia Nature & Wine — Yarra Valley, NOT Sydney Opera House',
  },
  'journey-antarctica': {
    id: 'photo-1509516350595-ef0def7aa265',
    alt: 'Expedition ship among Antarctic icebergs, vast polar seascape',
    category: 'journey', note: 'Antarctica Expedition — ship + ice landscape',
  },
  'journey-swiss': {
    id: 'photo-1506905925346-21bda4d32df4',
    alt: 'Swiss mountain wellness retreat with lake view and alpine peaks',
    category: 'journey', note: 'Switzerland Wellness — alpine + wellness, NOT Eiffel Tower',
  },

  // ── JOURNAL ─────────────────────────────────────────────────
  'journal-safari': {
    id: 'photo-1516026672322-bc52d61a55d5',
    alt: 'Safari lodge deck overlooking open savanna at sunset',
    category: 'journal', note: 'Safari journal article',
  },
  'journal-japan': {
    id: 'photo-1528360983277-13d401cdc186',
    alt: 'Cherry blossom pathway leading to ancient Japanese temple',
    category: 'journal', note: 'Japan cherry blossom article',
  },
  'journal-wellness': {
    id: 'photo-1469474968028-56623f02e42e',
    alt: 'Clinique La Prairie lakeside wellness architecture, Lake Geneva',
    category: 'journal', note: 'Clinique La Prairie / wellness article',
  },
  'journal-lake-como': {
    id: 'photo-1523906834658-6e24ef2386f9',
    alt: 'Lake Como early morning, boat and villa garden reflection',
    category: 'journal', note: 'Lake Como practical guide article',
  },
  'journal-family': {
    id: 'photo-1476514525535-07fb3b4ae5f1',
    alt: 'Family travelling lightly through European destination',
    category: 'journal', note: 'Family travel article',
  },
  'journal-orient-express': {
    id: 'photo-1474487548417-781cb6d646b3',
    alt: 'Luxury train corridor with wood panelling, Venice Simplon-Orient-Express style',
    category: 'journal', note: 'Orient-Express article',
  },

  // ── REGIONS (homepage grid) ──────────────────────────────────
  'region-europe': {
    id: 'photo-1467269204594-9661b134dd2b',
    alt: 'Refined European street at dusk, warm architectural light',
    category: 'region', note: 'Europe region card',
  },
  'region-japan-asia': {
    id: 'photo-1528360983277-13d401cdc186',
    alt: 'Misty Japanese mountain landscape with traditional architecture',
    category: 'region', note: 'Japan & Asia region card',
  },
  'region-australia': {
    id: 'photo-1523428096881-5bd79d043006',
    alt: 'Australian coastal landscape with golden afternoon light',
    category: 'region', note: 'Australia & NZ region card',
  },
  'region-islands': {
    id: 'photo-1573843981267-be1999ff37cd',
    alt: 'Overwater villas at dawn, Indian Ocean lagoon',
    category: 'region', note: 'Indian Ocean & Islands region card',
  },
  'region-africa': {
    id: 'photo-1516026672322-bc52d61a55d5',
    alt: 'African savanna at golden hour with safari vehicle silhouette',
    category: 'region', note: 'Africa Safari region card',
  },
  'region-middle-east': {
    id: 'photo-1512453979798-5ea266f8880c',
    alt: 'Desert landscape with ancient Omani architecture at golden hour',
    category: 'region', note: 'Middle East region card',
  },
  'region-polar': {
    id: 'photo-1509516350595-ef0def7aa265',
    alt: 'Expedition vessel in Arctic waters with ice formations',
    category: 'region', note: 'Polar & Expedition region card',
  },
  'region-americas': {
    id: 'photo-1501854140801-50d01698950b',
    alt: 'Torres del Paine dramatic peaks reflected in mountain lake, Patagonia',
    category: 'region', note: 'Americas region card — Patagonia/mountains, FIXED',
  },
  // ── BVLGARI HOTELS (NEW) ────────────────────────────────────────────────
  'hotel-bvlgari': {
    id: 'photo-1551009175-15bdf9dcb580',
    alt: 'Bulgari Hotel style contemporary Italian luxury interior with architectural detail',
    category: 'hotel', note: 'Bulgari Hotels — Milan/London/Dubai/Tokyo; fashion luxury, Italian design.',
  },
};

// ─── pic() — same call signature as before, now uses registry ─────────────────
// If key matches registry → use that image.
// If key looks like a raw 'photo-XXXX' ID → use it directly.
// Either way, SafeImg handles 404s with a branded fallback.
export function pic(keyOrId, w = 1200) {
  const entry = REGISTRY[keyOrId];
  if (entry) {
    return `https://images.unsplash.com/${entry.id}?w=${w}&q=88&auto=format&fit=crop`;
  }
  // Backward-compatible: raw Unsplash ID string
  if (keyOrId && keyOrId.startsWith('photo-')) {
    return `https://images.unsplash.com/${keyOrId}?w=${w}&q=88&auto=format&fit=crop`;
  }
  // Fallback
  return `https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=${w}&q=88&auto=format&fit=crop`;
}

export function imgAlt(key) {
  return REGISTRY[key]?.alt || 'ONE MORE TRAVEL';
}

export function imgMeta(key) {
  return REGISTRY[key] || { alt: 'ONE MORE TRAVEL', category: 'general', note: 'Image to be defined' };
}


// ─── Backward-compatible camelCase aliases for page imports ──────────────────
// Pages reference IMAGES.heroJournal etc; this mapping bridges old→new keys.
export const IMAGES = {
  // All kebab-case registry keys
  ...Object.fromEntries(Object.keys(REGISTRY).map(k => [k, k])),
  // CamelCase aliases (used by existing page files)
  heroMain:      'hero-main',
  heroAbout:     'hero-about',
  heroDest:      'hero-destinations',
  heroHotels:    'hero-hotels',
  heroStyles:    'hero-styles',
  heroExp:       'hero-experiences',
  heroJourneys:  'hero-journeys',
  heroJournal:   'hero-journal',
  heroInquiry:   'hero-inquiry',
  concierge:     'hero-experiences',
  aboutSec1:     'about-1',
  aboutSec2:     'about-2',
  aboutSec3:     'about-3',
  chengdu:       'about-chengdu',
  melbourne:     'about-melbourne',
};

