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
    id: 'photo-1501785888041-af3ef285b470',
    alt: 'Calm alpine village reflection at dawn — quiet luxury hero',
    category: 'hero', note: 'Homepage hero. Typography-friendly, Aman-style stillness.',
  },
  'hero-about': {
    id: 'photo-1554118811-1e0d58224f24',
    alt: 'Refined travel-planning desk with notebook and warm light — bespoke planning moment',
    category: 'hero', note: 'About + Philosophy section. Travel-advisor planning scene.',
  },
  'hero-destinations': {
    id: 'photo-1501854140801-50d01698950b',
    alt: 'Patagonia landscape — sense of global destination expertise',
    category: 'hero', note: 'Destinations index hero. Sense of global travel.',
  },
  'hero-hotels': {
    id: 'photo-1551882547-ff40c63fe5fa',
    alt: 'Refined hotel lobby — curated luxury hospitality',
    category: 'hero', note: 'Hotels index hero.',
  },
  'hero-styles': {
    id: 'photo-1476514525535-07fb3b4ae5f1',
    alt: 'Family travelling with light luggage in warm evening light',
    category: 'hero', note: 'Travel Styles hero — family travel mood',
  },
  'hero-experiences': {
    id: 'photo-1474487548417-781cb6d646b3',
    alt: 'Vintage luxury train at platform — extraordinary experiences hero',
    category: 'hero', note: 'Extraordinary Experiences hero. Atmospheric editorial.',
  },
  'hero-journeys': {
    id: 'photo-1500530855697-b586d89ba3ee',
    alt: 'Calm landscape with light — journeys index hero',
    category: 'hero', note: 'Journeys index hero. Sense of crafted itineraries.',
  },
  'hero-journal': {
    id: 'photo-1488646953014-85cb44e25828',
    alt: 'Editorial travel notebook and atlas — journal writing scene',
    category: 'hero', note: 'Journal index hero. Editorial / writing mood, not headphones.',
  },
  'hero-inquiry': {
    id: 'photo-1542640244-7e672d6cef4e',
    alt: 'Atmospheric mountain landscape — quiet planning environment',
    category: 'hero', note: 'Inquiry hero. Reflective / calm.',
  },

  // ── ABOUT SECTIONS ──────────────────────────────────────────
  'about-1': {
    id: 'photo-1547036967-23d11aacaee0',
    alt: 'Refined travel-planning desk with notebooks and maps — founder story',
    category: 'about', note: 'About > Our Story (Founded 2018).',
  },
  'about-2': {
    id: 'photo-1517816743773-6e0fd518b4a6',
    alt: 'Travel advisor planning workspace — concierge work',
    category: 'about', note: 'About > How We Work / The Work Happens Before You Arrive.',
  },
  'about-3': {
    id: 'photo-1488085061387-422e29b40080',
    alt: 'Vintage world atlas with route lines — global travel network',
    category: 'about', note: 'About > Global Reach / Personal Execution.',
  },
  'about-chengdu': {
    id: 'photo-1556909114-f6e7ad7d3136',
    alt: 'Editorial Chengdu lifestyle moment — tea, books, refined atmosphere',
    category: 'about', note: 'Chengdu / Founded 2018. Origin story — tea house / lifestyle.',
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
    id: 'photo-1469474968028-56623f02e42e',
    alt: 'Swiss alpine lake at calm dawn — Switzerland destination',
    category: 'destination', note: 'Switzerland — Alps, Lake Geneva, Zermatt, St. Moritz.',
  },
  'dest-japan': {
    id: 'photo-1545569341-9eb8b30979d9',
    alt: 'Quiet Kyoto temple lane with stone path — refined Japan',
    category: 'destination', note: 'Japan destination. Kyoto quiet / ryokan / temple.',
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
    alt: 'Antarctic iceberg in calm polar water — expedition landscape',
    category: 'destination', note: 'Antarctica destination.',
  },
  'dest-patagonia': {
    id: 'photo-1501854140801-50d01698950b',
    alt: 'Torres del Paine granite peaks at golden hour — dramatic Patagonia landscape',
    category: 'destination', note: 'Patagonia destination. Torres del Paine, not random green hills.',
  },

  // ── HOTELS — BRANDS ──────────────────────────────────────────
  'hotel-aman': {
    id: 'photo-1545569341-9eb8b30979d9',
    alt: 'Quiet Kyoto stone path through forested temple — Aman-style monastic atmosphere',
    category: 'hotel', note: 'Aman — Tokyo/Kyoto/Amanjiwo. Quiet luxury, stillness, courtyards.',
  },
  'hotel-four-seasons': {
    id: 'photo-1566073771259-6a8506099945',
    alt: 'Refined hotel suite with city view — Four Seasons reliable destination luxury',
    category: 'hotel', note: 'Four Seasons — refined, reliable, destination luxury.',
  },
  'hotel-rosewood': {
    id: 'photo-1551882547-ff40c63fe5fa',
    alt: 'Warm hotel lobby with design detail — Rosewood Sense of Place atmosphere',
    category: 'hotel', note: 'Rosewood — Sense of Place, warm intimate design-led luxury.',
  },
  'hotel-six-senses': {
    id: 'photo-1441974231531-c6227db76b6e',
    alt: 'Forest pavilion in dappled light — Six Senses nature-integrated wellness',
    category: 'hotel', note: 'Six Senses — Douro / Zighy Bay / Yao Noi / Ibiza. Nature-integrated wellness.',
  },
  'hotel-safari': {
    id: 'photo-1547471080-7cc2caa01a7e',
    alt: 'Luxury safari lodge deck overlooking African plains',
    category: 'hotel', note: 'Safari Lodges — Singita / andBeyond / Wilderness / Royal Malewane.',
  },
  'hotel-villas': {
    id: 'photo-1512917774080-9991f1c4c750',
    alt: 'Private villa with infinity pool overlooking landscape — Samujana / Tuscany estate atmosphere',
    category: 'hotel', note: 'Private Villas & Estates. Samujana / Lake Como / Tuscan estate feel.',
  },
  'hotel-wellness': {
    id: 'photo-1469474968028-56623f02e42e',
    alt: 'Swiss alpine lake at calm dawn — Clinique La Prairie / Lanserhof atmosphere',
    category: 'hotel', note: 'Wellness retreats brand. Swiss medical wellness / longevity retreat.',
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
    id: 'photo-1551882547-ff40c63fe5fa',
    alt: 'Refined hotel lobby with warm design detail',
    category: 'hotel-cat', note: 'Boutique hotel category. Editorial / refined.',
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
    id: 'photo-1502086223501-7ea6ecd79368',
    alt: 'Family travelling together at sunset — multi-generational moment',
    category: 'style', note: 'Family Journeys travel style. Real emotional family mood.',
  },
  'style-culture': {
    id: 'photo-1467269204594-9661b134dd2b',
    alt: 'European city in soft afternoon light — cultural discovery',
    category: 'style', note: 'Culture Discovery travel style.',
  },
  'style-safari': {
    id: 'photo-1547471080-7cc2caa01a7e',
    alt: 'Luxury safari camp deck overlooking wilderness',
    category: 'style', note: 'Safari & Wilderness travel style.',
  },
  'style-islands': {
    id: 'photo-1573843981267-be1999ff37cd',
    alt: 'Refined overwater villa at dawn — island escape',
    category: 'style', note: 'Island Escapes travel style.',
  },
  'style-celebration': {
    id: 'photo-1414235077428-338989a2e8c0',
    alt: 'Refined private dining at sunset — anniversary / milestone atmosphere',
    category: 'style', note: 'Celebration Journeys travel style. Anniversary / milestone moment.',
  },
  'style-slow-luxury': {
    id: 'photo-1523906834658-6e24ef2386f9',
    alt: 'Italian coastal village at sunset — slow luxury rhythm',
    category: 'style', note: 'Slow Luxury travel style.',
  },
  'style-wellness': {
    id: 'photo-1469474968028-56623f02e42e',
    alt: 'Swiss alpine lake — wellness retreat atmosphere',
    category: 'style', note: 'Wellness & Longevity travel style. Lake / mountain retreat feel.',
  },

  // ── EXTRAORDINARY EXPERIENCES ────────────────────────────────
  'exp-luxury-rail': {
    id: 'photo-1474487548417-781cb6d646b3',
    alt: 'Vintage luxury train at refined platform — Venice Simplon-Orient-Express atmosphere',
    category: 'experience', note: 'Luxury Rail. Belmond Orient-Express heritage.',
  },
  'exp-private-jet': {
    id: 'photo-1436491865332-7a61a109cc05',
    alt: 'Aerial view from private aircraft — refined aviation atmosphere',
    category: 'experience', note: 'Private Jet. Refined aerial / aviation mood, not flashy.',
  },
  'exp-expedition': {
    id: 'photo-1509516350595-ef0def7aa265',
    alt: 'Antarctica iceberg landscape — expedition cruise environment',
    category: 'experience', note: 'Expedition Cruise. Antarctica / polar landscape.',
  },
  'exp-safari': {
    id: 'photo-1516026672322-bc52d61a55d5',
    alt: 'Safari vehicle in golden savannah — wildlife journey moment',
    category: 'experience', note: 'Safari experience. Game drive perspective.',
  },
  'exp-villas': {
    id: 'photo-1512917774080-9991f1c4c750',
    alt: 'Private villa with infinity pool — estate atmosphere',
    category: 'experience', note: 'Private Villas experience.',
  },
  'exp-wellness': {
    id: 'photo-1441974231531-c6227db76b6e',
    alt: 'Forest wellness pavilion — calm retreat environment',
    category: 'experience', note: 'Wellness Retreats experience.',
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
    id: 'photo-1469474968028-56623f02e42e',
    alt: 'Swiss alpine lake — Switzerland journey',
    category: 'journey', note: 'Switzerland Wellness & Alps journey.',
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
    id: 'photo-1545569341-9eb8b30979d9',
    alt: 'Quiet Kyoto temple lane — refined Japan, not neon nightlife',
    category: 'region', note: 'Japan & Asia region. Kyoto quiet / ryokan / temple, never neon Tokyo.',
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
    alt: 'Antarctica iceberg landscape — polar expedition environment',
    category: 'region', note: 'Polar & Expedition region. Antarctic ice / vessel.',
  },
  'region-americas': {
    id: 'photo-1501854140801-50d01698950b',
    alt: 'Torres del Paine landscape — Patagonia / Americas luxury travel',
    category: 'region', note: 'Americas region. Patagonia / Peru / Chile.',
  },

  // ── ADDITIONAL HOTEL BRANDS (v7) ────────────────────────────────────────
  'hotel-mandarin-oriental': {
    id: 'photo-1564501049412-61c2a3083791',
    alt: 'Urban grand hotel facade with refined detail — Mandarin Oriental Asian sophistication',
    category: 'hotel', note: 'Mandarin Oriental — Bangkok / Tokyo / Hong Kong. Asian service-led luxury.',
  },
  'hotel-peninsula': {
    id: 'photo-1499856871958-5b9627545d1a',
    alt: 'Refined European city at twilight — Peninsula classic grand luxury',
    category: 'hotel', note: 'The Peninsula — Hong Kong / Paris / Tokyo / London. Classic grand luxury.',
  },
  'hotel-capella': {
    id: 'photo-1542640244-7e672d6cef4e',
    alt: 'Atmospheric mountain landscape at dusk — Capella intimate retreat mood',
    category: 'hotel', note: 'Capella — Bangkok / Singapore / Hanoi / Ubud. Intimate sophistication.',
  },
  'hotel-belmond': {
    id: 'photo-1474487548417-781cb6d646b3',
    alt: 'Vintage luxury train at platform — Belmond Orient-Express heritage',
    category: 'hotel', note: 'Belmond — Orient-Express / Cipriani / Caruso. Heritage glamour.',
  },
  'hotel-cheval-blanc': {
    id: 'photo-1573843981267-be1999ff37cd',
    alt: 'Refined overwater villa at dawn — Cheval Blanc Randheli atmosphere',
    category: 'hotel', note: 'Cheval Blanc — Randheli / Paris / Courchevel. French ultra-luxury.',
  },
  'hotel-one-and-only': {
    id: 'photo-1571019613454-1cb2f99b2d8b',
    alt: 'Refined island resort lagoon — One&Only Reethi Rah atmosphere',
    category: 'hotel', note: 'One&Only — Reethi Rah / Mandarina. Glamorous but tasteful resort luxury.',
  },
  'hotel-como': {
    id: 'photo-1500530855697-b586d89ba3ee',
    alt: 'Calm landscape with soft light — COMO Shambhala wellness atmosphere',
    category: 'hotel', note: 'COMO — Shambhala / Uma / Maalifushi. Wellness, calm, refined understated.',
  },
  'hotel-aman-maldives-coming-soon': {
    id: 'photo-1520250497591-112f2f40a3f4',
    alt: 'Overwater villa concept — Aman Maldives future opening (Vaavu Atoll)',
    category: 'hotel', note: 'Aman Maldives — Coming Soon / Future Opening. Vaavu Atoll.',
  },

  // ── JOURNAL EXPANSION IMAGES (v7) ────────────────────────────────────────
  // Hotel Notes
  'jn-aman-vs-four-seasons-tokyo': {
    id: 'photo-1503899036084-c55cdd92da26',
    alt: 'Refined Tokyo skyline at dusk — Otemachi luxury hotel district',
    category: 'journal', note: 'Journal article. Refined Tokyo skyline at dusk — Otemachi luxury hotel district',
  },
  'jn-rosewood-sense-of-place': {
    id: 'photo-1551882547-ff40c63fe5fa',
    alt: 'Refined hotel lobby with warm design detail — Rosewood Sense of Place',
    category: 'journal', note: 'Journal article. Refined hotel lobby with warm design detail — Rosewood Sense of Place',
  },
  'jn-villa-vs-hotel': {
    id: 'photo-1512917774080-9991f1c4c750',
    alt: 'Private villa with infinity pool — when villa works better than hotel',
    category: 'journal', note: 'Journal article. Private villa with infinity pool — when villa works better than hotel',
  },
  'jn-maldives-family-selection': {
    id: 'photo-1571019613454-1cb2f99b2d8b',
    alt: 'Calm Maldives lagoon — family resort selection',
    category: 'journal', note: 'Journal article. Calm Maldives lagoon — family resort selection',
  },
  'jn-singita-difference': {
    id: 'photo-1547471080-7cc2caa01a7e',
    alt: 'Luxury safari camp deck overlooking wilderness — Singita atmosphere',
    category: 'journal', note: 'Journal article. Luxury safari camp deck overlooking wilderness — Singita atmosphere',
  },
  'jn-four-seasons-jet': {
    id: 'photo-1436491865332-7a61a109cc05',
    alt: 'Aerial view from private aircraft — Four Seasons Private Jet',
    category: 'journal', note: 'Journal article. Aerial view from private aircraft — Four Seasons Private Jet',
  },
  'jn-bvlgari-milan': {
    id: 'photo-1523906834658-6e24ef2386f9',
    alt: 'Italian coastal village — Bvlgari Italian luxury heritage',
    category: 'journal', note: 'Journal article. Italian coastal village — Bvlgari Italian luxury heritage',
  },
  // Destination Guides
  'jn-kyoto-deserves-time': {
    id: 'photo-1545569341-9eb8b30979d9',
    alt: 'Quiet Kyoto temple stone path — deserves more than one night',
    category: 'journal', note: 'Journal article. Quiet Kyoto temple stone path — deserves more than one night',
  },
  'jn-tuscany-children': {
    id: 'photo-1523906834658-6e24ef2386f9',
    alt: 'Italian countryside light — Tuscany with children',
    category: 'journal', note: 'Journal article. Italian countryside light — Tuscany with children',
  },
  'jn-fewer-hotel-changes-italy': {
    id: 'photo-1523906834658-6e24ef2386f9',
    alt: 'Italian coastal village — fewer hotel changes',
    category: 'journal', note: 'Journal article. Italian coastal village — fewer hotel changes',
  },
  'jn-patagonia-worth-it': {
    id: 'photo-1501854140801-50d01698950b',
    alt: 'Torres del Paine peaks — Patagonia journey',
    category: 'journal', note: 'Journal article. Torres del Paine peaks — Patagonia journey',
  },
  'jn-amalfi-coast': {
    id: 'photo-1523906834658-6e24ef2386f9',
    alt: 'Italian coastal cliffside village — Amalfi Coast',
    category: 'journal', note: 'Journal article. Italian coastal cliffside village — Amalfi Coast',
  },
  'jn-bhutan-slow': {
    id: 'photo-1542640244-7e672d6cef4e',
    alt: 'Himalayan mountain landscape — Bhutan slow travel',
    category: 'journal', note: 'Journal article. Himalayan mountain landscape — Bhutan slow travel',
  },
  'jn-oman-quiet': {
    id: 'photo-1512453979798-5ea266f8880c',
    alt: 'Oman desert with ancient architecture — quiet Middle East',
    category: 'journal', note: 'Journal article. Oman desert with ancient architecture — quiet Middle East',
  },
  'jn-melbourne-favourite': {
    id: 'photo-1545044846-351ba102b6d5',
    alt: 'Melbourne city laneway — refined Australian urban culture',
    category: 'journal', note: 'Journal article. Melbourne city laneway — refined Australian urban culture',
  },
  // Family Travel
  'jn-summer-europe-light': {
    id: 'photo-1523906834658-6e24ef2386f9',
    alt: 'European summer light — family travel without overpacking',
    category: 'journal', note: 'Journal article. European summer light — family travel without overpacking',
  },
  'jn-japan-with-children': {
    id: 'photo-1545569341-9eb8b30979d9',
    alt: 'Quiet Kyoto path — Japan with children',
    category: 'journal', note: 'Journal article. Quiet Kyoto path — Japan with children',
  },
  'jn-school-holiday-relaxed': {
    id: 'photo-1502086223501-7ea6ecd79368',
    alt: 'Family at sunset — school holiday escape',
    category: 'journal', note: 'Journal article. Family at sunset — school holiday escape',
  },
  'jn-multi-generational': {
    id: 'photo-1512917774080-9991f1c4c750',
    alt: 'Villa with multiple pools — multi-generational gathering',
    category: 'journal', note: 'Journal article. Villa with multiple pools — multi-generational gathering',
  },
  'jn-teen-explorers': {
    id: 'photo-1516026672322-bc52d61a55d5',
    alt: 'Safari vehicle in plains — teen explorers',
    category: 'journal', note: 'Journal article. Safari vehicle in plains — teen explorers',
  },
  // Seasonal Ideas
  'jn-spring-japan': {
    id: 'photo-1545569341-9eb8b30979d9',
    alt: 'Kyoto temple path in spring — beautiful but plan slowly',
    category: 'journal', note: 'Journal article. Kyoto temple path in spring — beautiful but plan slowly',
  },
  'jn-summer-europe': {
    id: 'photo-1523906834658-6e24ef2386f9',
    alt: 'Italian Riviera in summer — culture, villas, lakes',
    category: 'journal', note: 'Journal article. Italian Riviera in summer — culture, villas, lakes',
  },
  'jn-winter-japan-ski': {
    id: 'photo-1528360983277-13d401cdc186',
    alt: 'Snow-dusted Japan mountains — winter ski and onsen',
    category: 'journal', note: 'Journal article. Snow-dusted Japan mountains — winter ski and onsen',
  },
  'jn-christmas-europe': {
    id: 'photo-1467269204594-9661b134dd2b',
    alt: 'European street in winter light — Christmas in Europe',
    category: 'journal', note: 'Journal article. European street in winter light — Christmas in Europe',
  },
  'jn-autumn-kyoto-tuscany': {
    id: 'photo-1545569341-9eb8b30979d9',
    alt: 'Autumn light in Kyoto — autumn pairing with Tuscany',
    category: 'journal', note: 'Journal article. Autumn light in Kyoto — autumn pairing with Tuscany',
  },
  // Safari
  'jn-private-conservancies': {
    id: 'photo-1516026672322-bc52d61a55d5',
    alt: 'Private conservancy safari vehicle — vs main reserves',
    category: 'journal', note: 'Journal article. Private conservancy safari vehicle — vs main reserves',
  },
  'jn-first-safari-kenya-sa': {
    id: 'photo-1547471080-7cc2caa01a7e',
    alt: 'Luxury safari lodge with plains view — first safari',
    category: 'journal', note: 'Journal article. Luxury safari lodge with plains view — first safari',
  },
  'jn-great-migration': {
    id: 'photo-1516026672322-bc52d61a55d5',
    alt: 'Savannah migration crossing — Great Migration',
    category: 'journal', note: 'Journal article. Savannah migration crossing — Great Migration',
  },
  'jn-safari-teenagers': {
    id: 'photo-1547471080-7cc2caa01a7e',
    alt: 'Open safari vehicle in golden light — safari with teenagers',
    category: 'journal', note: 'Journal article. Open safari vehicle in golden light — safari with teenagers',
  },
  'jn-safari-camp-style': {
    id: 'photo-1547471080-7cc2caa01a7e',
    alt: 'Refined safari camp interior — camp style selection',
    category: 'journal', note: 'Journal article. Refined safari camp interior — camp style selection',
  },
  // Island Escapes
  'jn-maldives-right-island': {
    id: 'photo-1573843981267-be1999ff37cd',
    alt: 'Maldives at calm dawn — why the right island matters',
    category: 'journal', note: 'Journal article. Maldives at calm dawn — why the right island matters',
  },
  'jn-soneva-cheval-joali': {
    id: 'photo-1573843981267-be1999ff37cd',
    alt: 'Refined Maldives villa — Soneva / Cheval Blanc / JOALI personalities',
    category: 'journal', note: 'Journal article. Refined Maldives villa — Soneva / Cheval Blanc / JOALI personalities',
  },
  'jn-maldives-family-villas': {
    id: 'photo-1571019613454-1cb2f99b2d8b',
    alt: 'Maldives family beach villa with pool',
    category: 'journal', note: 'Journal article. Maldives family beach villa with pool',
  },
  'jn-seychelles-vs-maldives': {
    id: 'photo-1589197331516-4d84b72ebde3',
    alt: 'Seychelles granite boulders on tropical beach',
    category: 'journal', note: 'Journal article. Seychelles granite boulders on tropical beach',
  },
  'jn-thailand-villas': {
    id: 'photo-1537996194471-e657df975ab4',
    alt: 'Thailand private villa with infinity pool',
    category: 'journal', note: 'Journal article. Thailand private villa with infinity pool',
  },
  // Wellness
  'jn-clp-expect': {
    id: 'photo-1469474968028-56623f02e42e',
    alt: 'Swiss alpine lake — Clinique La Prairie atmosphere',
    category: 'journal', note: 'Journal article. Swiss alpine lake — Clinique La Prairie atmosphere',
  },
  'jn-lanserhof-vs-sha': {
    id: 'photo-1542640244-7e672d6cef4e',
    alt: 'Mountain landscape — Lanserhof vs SHA different philosophies',
    category: 'journal', note: 'Journal article. Mountain landscape — Lanserhof vs SHA different philosophies',
  },
  'jn-six-senses-best-for': {
    id: 'photo-1441974231531-c6227db76b6e',
    alt: 'Forest wellness pavilion — Six Senses Wellness',
    category: 'journal', note: 'Journal article. Forest wellness pavilion — Six Senses Wellness',
  },
  'jn-wellness-more-than-spa': {
    id: 'photo-1500530855697-b586d89ba3ee',
    alt: 'Calm landscape — wellness needs more than spa',
    category: 'journal', note: 'Journal article. Calm landscape — wellness needs more than spa',
  },
  'jn-recovery-journey': {
    id: 'photo-1469474968028-56623f02e42e',
    alt: 'Tranquil lake — recovery-focused journey',
    category: 'journal', note: 'Journal article. Tranquil lake — recovery-focused journey',
  },
  // Luxury Rail
  'jn-europe-luxury-rail': {
    id: 'photo-1474487548417-781cb6d646b3',
    alt: 'Vintage luxury train at refined platform — Europe by rail',
    category: 'journal', note: 'Journal article. Vintage luxury train at refined platform — Europe by rail',
  },
  'jn-belmond-trains-suit': {
    id: 'photo-1474487548417-781cb6d646b3',
    alt: 'Heritage luxury train — Belmond trains',
    category: 'journal', note: 'Journal article. Heritage luxury train — Belmond trains',
  },
  'jn-the-ghan': {
    id: 'photo-1523428096881-5bd79d043006',
    alt: 'Australian outback landscape — The Ghan',
    category: 'journal', note: 'Journal article. Australian outback landscape — The Ghan',
  },
  'jn-eo-express-asia': {
    id: 'photo-1474487548417-781cb6d646b3',
    alt: 'Luxury train at platform — Eastern & Oriental Express',
    category: 'journal', note: 'Journal article. Luxury train at platform — Eastern & Oriental Express',
  },
  // Private Jet
  'jn-jet-traveller-type': {
    id: 'photo-1436491865332-7a61a109cc05',
    alt: 'Aerial view over clouds — Four Seasons Private Jet suits',
    category: 'journal', note: 'Journal article. Aerial view over clouds — Four Seasons Private Jet suits',
  },
  'jn-jet-without-flash': {
    id: 'photo-1436491865332-7a61a109cc05',
    alt: 'Refined aerial view — private jet without flashiness',
    category: 'journal', note: 'Journal article. Refined aerial view — private jet without flashiness',
  },
  'jn-world-jet-milestone': {
    id: 'photo-1436491865332-7a61a109cc05',
    alt: 'Aerial perspective — around the world jet milestone',
    category: 'journal', note: 'Journal article. Aerial perspective — around the world jet milestone',
  },
  // Expedition
  'jn-antarctica-ship-choice': {
    id: 'photo-1509516350595-ef0def7aa265',
    alt: 'Antarctica iceberg landscape — how to choose the right ship',
    category: 'journal', note: 'Journal article. Antarctica iceberg landscape — how to choose the right ship',
  },
  'jn-arctic-vs-antarctic': {
    id: 'photo-1509516350595-ef0def7aa265',
    alt: 'Polar ice landscape — Arctic vs Antarctica comparison',
    category: 'journal', note: 'Journal article. Polar ice landscape — Arctic vs Antarctica comparison',
  },
  'jn-galapagos-families': {
    id: 'photo-1516026672322-bc52d61a55d5',
    alt: 'Wildlife landscape — Galápagos for families',
    category: 'journal', note: 'Journal article. Wildlife landscape — Galápagos for families',
  },
  'jn-expedition-comfort': {
    id: 'photo-1509516350595-ef0def7aa265',
    alt: 'Polar landscape — expedition without losing comfort',
    category: 'journal', note: 'Journal article. Polar landscape — expedition without losing comfort',
  },
  // Villas & Estates
  'jn-samujana-villas': {
    id: 'photo-1512917774080-9991f1c4c750',
    alt: 'Private villa with infinity pool — Samujana-style villas',
    category: 'journal', note: 'Journal article. Private villa with infinity pool — Samujana-style villas',
  },
  'jn-nihi-sumba': {
    id: 'photo-1573843981267-be1999ff37cd',
    alt: 'Wild remote island resort — Nihi Sumba wild luxury',
    category: 'journal', note: 'Journal article. Wild remote island resort — Nihi Sumba wild luxury',
  },
  'jn-tuscany-estates': {
    id: 'photo-1523906834658-6e24ef2386f9',
    alt: 'Italian countryside — Tuscany estates for family summers',
    category: 'journal', note: 'Journal article. Italian countryside — Tuscany estates for family summers',
  },
  'jn-lake-como-villas': {
    id: 'photo-1523906834658-6e24ef2386f9',
    alt: 'Italian lakeside — Lake Como villas, privacy and boats',
    category: 'journal', note: 'Journal article. Italian lakeside — Lake Como villas, privacy and boats',
  },
  // Behind the Journey
  'jn-how-we-design': {
    id: 'photo-1554118811-1e0d58224f24',
    alt: 'Travel planning desk — how we design journeys',
    category: 'journal', note: 'Journal article. Travel planning desk — how we design journeys',
  },
  'jn-supplier-relationships': {
    id: 'photo-1551882547-ff40c63fe5fa',
    alt: 'Refined hotel lobby — supplier relationships',
    category: 'journal', note: 'Journal article. Refined hotel lobby — supplier relationships',
  },

  // ── BVLGARI HOTELS (NEW) ────────────────────────────────────────────────
  'hotel-bvlgari': {
    id: 'photo-1523906834658-6e24ef2386f9',
    alt: 'Italian coastal village in late afternoon light — Bvlgari Milano / Roma atmosphere',
    category: 'hotel', note: 'Bvlgari Hotels — Italian contemporary luxury, fashion-design heritage.',
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

