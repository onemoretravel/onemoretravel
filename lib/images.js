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

const CDN = (id, w = 1200) => {
  const localMap = {
    'photo-1566073771259-6a8506099945': '/images/hotels/four-seasons.jpg',
  }

  if (localMap[id]) {
    return localMap[id]
  }

  return `https://images.unsplash.com/${id}?w=${w}&q=88&auto=format&fit=crop`
}

// ─── Registry ─────────────────────────────────────────────────
export const REGISTRY = {

  // ── PAGE HEROES ─────────────────────────────────────────────
  'hero-main': {
    id: 'photo-1501785888041-af3ef285b470',
    alt: 'Calm alpine village reflection at dawn — quiet luxury hero',
    category: 'hero', note: 'Homepage hero. Typography-friendly, Aman-style stillness.',
  },
  'hero-about': {
  id: 'about-planning',
  url: '/images/home/about-planning.jpg',
  alt: '玩陌旅行高端定制旅行顾问策划场景',
  category: 'hero',
  note: 'About + Philosophy section. Bespoke travel planning image.',
  },
  'hero-destinations': {
    url: '/images/home/destinations.jpg',
    alt: 'Patagonia landscape — sense of global destination expertise',
    category: 'hero', note: 'Destinations index hero. Sense of global travel.',
  },
  'hero-hotels': {
    url: '/images/home/hotels.jpg',
    alt: 'Refined hotel lobby — curated luxury hospitality',
    category: 'hero', note: 'Hotels index hero.',
  },
  'hero-styles': {
    url: '/images/home/styles.jpg',
    alt: 'Family travelling with light luggage in warm evening light',
    category: 'hero', note: 'Travel Styles hero — family travel mood',
  },
  'hero-experiences': {
    url: '/images/home/experiences.jpg',
    alt: 'Vintage luxury train at platform — extraordinary experiences hero',
    category: 'hero', note: 'Extraordinary Experiences hero. Atmospheric editorial.',
  },
  'hero-journeys': {
    id: 'photo-1500530855697-b586d89ba3ee',
    alt: 'Calm landscape with light — journeys index hero',
    category: 'hero', note: 'Journeys index hero. Sense of crafted itineraries.',
  },
  'hero-journal': {
    url: '/images/home/journal.jpg',
    alt: 'Editorial travel notebook and atlas — journal writing scene',
    category: 'hero', note: 'Journal index hero. Editorial / writing mood, not headphones.',
  },
  'hero-inquiry': {
    url: '/images/home/inquiry.jpg',
    alt: 'Atmospheric mountain landscape — quiet planning environment',
    category: 'hero', note: 'Inquiry hero. Reflective / calm.',
  },

  // ── ABOUT SECTIONS ──────────────────────────────────────────
  'about-1': {
    url: '/images/home/1.jpg',
    alt: 'Refined travel-planning desk with notebooks and maps — founder story',
    category: 'about', note: 'About > Our Story (Founded 2018).',
  },
  'about-2': {
    url: '/images/home/2.jpg',
    alt: 'Travel advisor planning workspace — concierge work',
    category: 'about', note: 'About > How We Work / The Work Happens Before You Arrive.',
  },
  'about-3': {
    id: 'photo-1488085061387-422e29b40080',
    alt: 'Vintage world atlas with route lines — global travel network',
    category: 'about', note: 'About > Global Reach / Personal Execution.',
  },
  'about-chengdu': {
    url: '/images/home/chengdu.jpg',
    alt: 'Editorial Chengdu lifestyle moment — tea, books, refined atmosphere',
    category: 'about', note: 'Chengdu / Founded 2018. Origin story — tea house / lifestyle.',
  },
  'about-melbourne': {
    url: '/images/home/melbourne.jpg',
    alt: 'Melbourne contemporary urban architecture and culture',
    category: 'about', note: 'Melbourne office — contemporary urban, NOT Sydney Opera House',
  },

  // ── DESTINATIONS ────────────────────────────────────────────
  'dest-italy': {
    url: '/images/home/italy.jpg',
    alt: 'Cinque Terre colourful village on Italian Riviera cliff',
    category: 'destination', note: 'Italy — coastal village, Italian atmosphere',
  },
  'dest-france': {
    url: '/images/home/france.jpg',
    alt: 'Paris rooftop view with Haussmann architecture at dusk',
    category: 'destination', note: 'France — refined Paris aerial, not tourist cliché',
  },
  'dest-switzerland': {
    url: '/images/home/switzerland.jpg',
    alt: 'Swiss alpine lake at calm dawn — Switzerland destination',
    category: 'destination', note: 'Switzerland — Alps, Lake Geneva, Zermatt, St. Moritz.',
  },
  'dest-japan': {
    url: '/images/home/japan.jpg',
    alt: 'Quiet Kyoto temple lane with stone path — refined Japan',
    category: 'destination', note: 'Japan destination. Kyoto quiet / ryokan / temple.',
  },
  'dest-thailand': {
    url: '/images/home/thailand.jpg',
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
    url: '/images/home/antarctica.jpg',
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
  url: '/images/hotels/aman.jpg',
    alt: 'Quiet Kyoto stone path through forested temple — Aman-style monastic atmosphere',
    category: 'hotel', note: 'Aman — Tokyo/Kyoto/Amanjiwo. Quiet luxury, stillness, courtyards.',
  },
  'hotel-four-seasons': {
    url: '/images/hotels/four-seasons.jpg',
    alt: 'Refined hotel suite with city view — Four Seasons reliable destination luxury',
    category: 'hotel', note: 'Four Seasons — refined, reliable, destination luxury.',
  },
  'hotel-rosewood': {
  url: '/images/hotels/rosewood.jpg',
    alt: 'Warm hotel lobby with design detail — Rosewood Sense of Place atmosphere',
    category: 'hotel', note: 'Rosewood — Sense of Place, warm intimate design-led luxury.',
  },
  'hotel-six-senses': {
    url: '/images/hotels/Six Senses.jpg',
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
    url: '/images/hotels/Clinique La Prairie.jpg',
    alt: 'Swiss alpine lake at calm dawn — Clinique La Prairie / Lanserhof atmosphere',
    category: 'hotel', note: 'Wellness retreats brand. Swiss medical wellness / longevity retreat.',
  },

  // ── HOTEL CATEGORIES ────────────────────────────────────────
  'cat-city-hotels': {
    url: '/images/home/city-hotels.jpg',
    alt: 'Grand urban hotel with dramatic architectural lobby',
    category: 'hotel-cat', note: 'City Landmark Hotels',
  },
  'cat-private-villas': {
    url: '/images/home/private-villas.jpg',
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
    url: '/images/home/safari-lodges.jpg',
    alt: 'Luxury tented camp with elevated deck overlooking African plains',
    category: 'hotel-cat', note: 'Safari Lodges & Remote Camps',
  },

  // ── TRAVEL STYLES ──────────────────────────────────────────
 'style-school-holidays': {
  url: '/images/home/school-holidays.jpg',
  alt: 'Family with light luggage walking through sunlit travel destination',
  category: 'style',
  note: 'School Holidays — family movement, warm light',
},
'style-family': {
  url: '/images/home/style-family.jpg',
  alt: 'Family luxury travel',
  category: 'style',
  note: 'Family journeys travel style.',
},
  'style-culture': {
    url: '/images/home/culture.jpg',
    alt: 'European city in soft afternoon light — cultural discovery',
    category: 'style', note: 'Culture Discovery travel style.',
  },
  'style-safari': {
    url: '/images/home/safari.jpg',
    alt: 'Luxury safari camp deck overlooking wilderness',
    category: 'style', note: 'Safari & Wilderness travel style.',
  },
  'style-islands': {
    id: 'photo-1573843981267-be1999ff37cd',
    alt: 'Refined overwater villa at dawn — island escape',
    category: 'style', note: 'Island Escapes travel style.',
  },
  'style-celebration': {
    url: '/images/home/celebration.jpg',
    alt: 'Refined private dining at sunset — anniversary / milestone atmosphere',
    category: 'style', note: 'Celebration Journeys travel style. Anniversary / milestone moment.',
  },
  'style-slow-luxury': {
    url: '/images/home/slow-luxury.jpg',
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
    url: '/images/home/luxury-rail.jpg',
    alt: 'Vintage luxury train at refined platform — Venice Simplon-Orient-Express atmosphere',
    category: 'experience', note: 'Luxury Rail. Belmond Orient-Express heritage.',
  },
  'exp-private-jet': {
    url: '/images/home/private-jet.jpg',
    alt: 'Aerial view from private aircraft — refined aviation atmosphere',
    category: 'experience', note: 'Private Jet. Refined aerial / aviation mood, not flashy.',
  },
  'exp-expedition': {
    url: '/images/home/expedition.jpg',
    alt: 'Antarctica iceberg landscape — expedition cruise environment',
    category: 'experience', note: 'Expedition Cruise. Antarctica / polar landscape.',
  },
  'exp-safari': {
    url: '/images/home/safari.jpg',
    alt: 'Safari vehicle in golden savannah — wildlife journey moment',
    category: 'experience', note: 'Safari experience. Game drive perspective.',
  },
  'exp-villas': {
    url: '/images/home/villas.jpg',
    alt: 'Private villa with infinity pool — estate atmosphere',
    category: 'experience', note: 'Private Villas experience.',
  },
  'exp-wellness': {
    url: '/images/home/wellness.jpg',
    alt: 'Forest wellness pavilion — calm retreat environment',
    category: 'experience', note: 'Wellness Retreats experience.',
  },

  // ── JOURNEYS ────────────────────────────────────────────────
  'journey-italy-family': {
    url: '/images/home/italy-family.jpg',
    alt: 'Lake Como boat excursion, Italian villa garden, summer afternoon',
    category: 'journey', note: 'Italy Family Summer — Lake Como / villa mood',
  },
  'journey-japan-winter': {
    url: '/images/home/japan-winter.jpg',
    alt: 'Snowy Japanese mountain landscape with traditional rooftop',
    category: 'journey', note: 'Japan Winter — Hokkaido/snow/onsen mood, NOT generic',
  },
  'journey-maldives': {
    id: 'photo-1573843981267-be1999ff37cd',
    alt: 'Private overwater villa at dawn, calm turquoise lagoon',
    category: 'journey', note: 'Maldives Island Escape — quiet luxury, NOT generic drone',
  },
  'journey-africa': {
    url: '/images/home/africa.jpg',
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
    url: '/images/home/swiss.jpg',
    alt: 'Swiss alpine lake — Switzerland journey',
    category: 'journey', note: 'Switzerland Wellness & Alps journey.',
  },

  // ── JOURNAL ─────────────────────────────────────────────────
  'journal-safari': {
    url: '/images/home/journal-safari.jpg',
    alt: 'Safari lodge deck overlooking open savanna at sunset',
    category: 'journal', note: 'Safari journal article',
  },
  'journal-japan': {
    url: '/images/home/japan.jpg',
    alt: 'Cherry blossom pathway leading to ancient Japanese temple',
    category: 'journal', note: 'Japan cherry blossom article',
  },
  'journal-wellness': {
    url: '/images/hotels/Clinique La Prairie.jpg',
    alt: 'Clinique La Prairie lakeside wellness architecture, Lake Geneva',
    category: 'journal', note: 'Clinique La Prairie / wellness article',
  },
  'journal-lake-como': {
    url: '/images/home/lake-como.jpg',
    alt: 'Lake Como early morning, boat and villa garden reflection',
    category: 'journal', note: 'Lake Como practical guide article',
  },
  'journal-family': {
    id: 'photo-1476514525535-07fb3b4ae5f1',
    alt: 'Family travelling lightly through European destination',
    category: 'journal', note: 'Family travel article',
  },
  'journal-orient-express': {
    url: '/images/home/orient-express.jpg',
    alt: 'Luxury train corridor with wood panelling, Venice Simplon-Orient-Express style',
    category: 'journal', note: 'Orient-Express article',
  },

  // ── REGIONS (homepage grid) ──────────────────────────────────
  'region-europe': {
    url: '/images/home/europe.jpg',
    alt: 'Refined European street at dusk, warm architectural light',
    category: 'region', note: 'Europe region card',
  },
  'region-japan-asia': {
    url: '/images/home/japan-asia.jpg',
    alt: 'Quiet Kyoto temple lane — refined Japan, not neon nightlife',
    category: 'region', note: 'Japan & Asia region. Kyoto quiet / ryokan / temple, never neon Tokyo.',
  },
  'region-australia': {
    url: '/images/home/australia.jpg',
    alt: 'Australian coastal landscape with golden afternoon light',
    category: 'region', note: 'Australia & NZ region card',
  },
  'region-islands': {
    url: '/images/home/islands.jpg',
    alt: 'Overwater villas at dawn, Indian Ocean lagoon',
    category: 'region', note: 'Indian Ocean & Islands region card',
  },
  'region-africa': {
    url: '/images/home/africa.jpg',
    alt: 'African savanna at golden hour with safari vehicle silhouette',
    category: 'region', note: 'Africa Safari region card',
  },
  'region-middle-east': {
    url: '/images/home/middle-east.jpg',
    alt: 'Desert landscape with ancient Omani architecture at golden hour',
    category: 'region', note: 'Middle East region card',
  },
  'region-polar': {
    url: '/images/home/polar.jpg',
    alt: 'Antarctica iceberg landscape — polar expedition environment',
    category: 'region', note: 'Polar & Expedition region. Antarctic ice / vessel.',
  },
  'region-americas': {
    url: '/images/home/americas.jpg',
    alt: 'Torres del Paine landscape — Patagonia / Americas luxury travel',
    category: 'region', note: 'Americas region. Patagonia / Peru / Chile.',
  },

  // ── ADDITIONAL HOTEL BRANDS (v7) ────────────────────────────────────────
  'hotel-mandarin-oriental': {
    url: '/images/hotels/mandarin-oriental.jpg',
    alt: 'Urban grand hotel facade with refined detail — Mandarin Oriental Asian sophistication',
    category: 'hotel', note: 'Mandarin Oriental — Bangkok / Tokyo / Hong Kong. Asian service-led luxury.',
  },
  'hotel-peninsula': {
    url: '/images/hotels/peninsula.jpg',
    alt: 'Refined European city at twilight — Peninsula classic grand luxury',
    category: 'hotel', note: 'The Peninsula — Hong Kong / Paris / Tokyo / London. Classic grand luxury.',
  },
  'hotel-capella': {
  url: '/images/hotels/capella.jpg',
    alt: 'Atmospheric mountain landscape at dusk — Capella intimate retreat mood',
    category: 'hotel', note: 'Capella — Bangkok / Singapore / Hanoi / Ubud. Intimate sophistication.',
  },
  'hotel-belmond': {
    url: '/images/hotels/belmond.jpg',
    alt: 'Vintage luxury train at platform — Belmond Orient-Express heritage',
    category: 'hotel', note: 'Belmond — Orient-Express / Cipriani / Caruso. Heritage glamour.',
  },
  'hotel-cheval-blanc': {
  url: '/images/hotels/cheval-blanc.jpg',
    alt: 'Refined overwater villa at dawn — Cheval Blanc Randheli atmosphere',
    category: 'hotel', note: 'Cheval Blanc — Randheli / Paris / Courchevel. French ultra-luxury.',
  },
  'hotel-one-and-only': {
  url: '/images/hotels/oneandonly.jpg',
    alt: 'Refined island resort lagoon — One&Only Reethi Rah atmosphere',
    category: 'hotel', note: 'One&Only — Reethi Rah / Mandarina. Glamorous but tasteful resort luxury.',
  },
  'hotel-como': {
    url: '/images/hotels/como.jpg',
    alt: 'Calm landscape with soft light — COMO Shambhala wellness atmosphere',
    category: 'hotel', note: 'COMO — Shambhala / Uma / Maalifushi. Wellness, calm, refined understated.',
  },
  'hotel-aman-maldives-coming-soon': {
    url: '/images/hotels/Aman Maldives.jpg',
    alt: 'Overwater villa concept — Aman Maldives future opening (Vaavu Atoll)',
    category: 'hotel', note: 'Aman Maldives — Coming Soon / Future Opening. Vaavu Atoll.',
  },

  // ── JOURNAL EXPANSION IMAGES (v7) ────────────────────────────────────────
  // Hotel Notes
  'jn-aman-vs-four-seasons-tokyo': {
    url: '/images/home/aman-vs-four-seasons-tokyo.jpg',
    alt: 'Refined Tokyo skyline at dusk — Otemachi luxury hotel district',
    category: 'journal', note: 'Journal article. Refined Tokyo skyline at dusk — Otemachi luxury hotel district',
  },
  'jn-rosewood-sense-of-place': {
    url: '/images/home/rosewood-sense-of-place.jpg',
    alt: 'Refined hotel lobby with warm design detail — Rosewood Sense of Place',
    category: 'journal', note: 'Journal article. Refined hotel lobby with warm design detail — Rosewood Sense of Place',
  },
  'jn-villa-vs-hotel': {
    url: '/images/home/villa-vs-hotel.jpg',
    alt: 'Private villa with infinity pool — when villa works better than hotel',
    category: 'journal', note: 'Journal article. Private villa with infinity pool — when villa works better than hotel',
  },
  'jn-maldives-family-selection': {
    url: '/images/home/maldives-family-selection.jpg',
    alt: 'Calm Maldives lagoon — family resort selection',
    category: 'journal', note: 'Journal article. Calm Maldives lagoon — family resort selection',
  },
  'jn-singita-difference': {
    id: 'photo-1547471080-7cc2caa01a7e',
    alt: 'Luxury safari camp deck overlooking wilderness — Singita atmosphere',
    category: 'journal', note: 'Journal article. Luxury safari camp deck overlooking wilderness — Singita atmosphere',
  },
  'jn-four-seasons-jet': {
    url: '/images/home/four-seasons-jet.jpg',
    alt: 'Aerial view from private aircraft — Four Seasons Private Jet',
    category: 'journal', note: 'Journal article. Aerial view from private aircraft — Four Seasons Private Jet',
  },
  'jn-bvlgari-milan': {
    url: '/images/home/bvlgari-milan.jpg',
    alt: 'Italian coastal village — Bvlgari Italian luxury heritage',
    category: 'journal', note: 'Journal article. Italian coastal village — Bvlgari Italian luxury heritage',
  },
  // Destination Guides
  'jn-kyoto-deserves-time': {
    url: '/images/home/kyoto-deserves-time.jpg',
    alt: 'Quiet Kyoto temple stone path — deserves more than one night',
    category: 'journal', note: 'Journal article. Quiet Kyoto temple stone path — deserves more than one night',
  },
  'jn-tuscany-children': {
    url: '/images/home/tuscany-children.jpg',
    alt: 'Italian countryside light — Tuscany with children',
    category: 'journal', note: 'Journal article. Italian countryside light — Tuscany with children',
  },
  'jn-fewer-hotel-changes-italy': {
    url: '/images/home/fewer-hotel-changes-italy.jpg',
    alt: 'Italian coastal village — fewer hotel changes',
    category: 'journal', note: 'Journal article. Italian coastal village — fewer hotel changes',
  },
  'jn-patagonia-worth-it': {
    url: '/images/home/patagonia-worth-it.jpg',
    alt: 'Torres del Paine peaks — Patagonia journey',
    category: 'journal', note: 'Journal article. Torres del Paine peaks — Patagonia journey',
  },
  'jn-amalfi-coast': {
    url: '/images/home/amalfi-coast.jpg',
    alt: 'Italian coastal cliffside village — Amalfi Coast',
    category: 'journal', note: 'Journal article. Italian coastal cliffside village — Amalfi Coast',
  },
  'jn-bhutan-slow': {
    url: '/images/home/bhutan-slow.jpg',
    alt: 'Himalayan mountain landscape — Bhutan slow travel',
    category: 'journal', note: 'Journal article. Himalayan mountain landscape — Bhutan slow travel',
  },
  'jn-oman-quiet': {
    url: '/images/home/oman-quiet.jpg',
    alt: 'Oman desert with ancient architecture — quiet Middle East',
    category: 'journal', note: 'Journal article. Oman desert with ancient architecture — quiet Middle East',
  },
  'jn-melbourne-favourite': {
    url: '/images/home/melbourne-favourite.jpg',
    alt: 'Melbourne city laneway — refined Australian urban culture',
    category: 'journal', note: 'Journal article. Melbourne city laneway — refined Australian urban culture',
  },
  // Family Travel
  'jn-summer-europe-light': {
    url: '/images/home/summer-europe-light.jpg',
    alt: 'European summer light — family travel without overpacking',
    category: 'journal', note: 'Journal article. European summer light — family travel without overpacking',
  },
  'jn-japan-with-children': {
    url: '/images/home/japan-with-children.jpg',
    alt: 'Quiet Kyoto path — Japan with children',
    category: 'journal', note: 'Journal article. Quiet Kyoto path — Japan with children',
  },
  'jn-school-holiday-relaxed': {
    url: '/images/home/school-holiday-relaxed.jpg',
    alt: 'Family at sunset — school holiday escape',
    category: 'journal', note: 'Journal article. Family at sunset — school holiday escape',
  },
  'jn-multi-generational': {
    url: '/images/home/multi-generational.jpg',
    alt: 'Villa with multiple pools — multi-generational gathering',
    category: 'journal', note: 'Journal article. Villa with multiple pools — multi-generational gathering',
  },
  'jn-teen-explorers': {
    url: '/images/home/teen-explorers.jpg',
    alt: 'Safari vehicle in plains — teen explorers',
    category: 'journal', note: 'Journal article. Safari vehicle in plains — teen explorers',
  },
  // Seasonal Ideas
  'jn-spring-japan': {
    url: '/images/home/spring-japan.jpg',
    alt: 'Kyoto temple path in spring — beautiful but plan slowly',
    category: 'journal', note: 'Journal article. Kyoto temple path in spring — beautiful but plan slowly',
  },
  'jn-summer-europe': {
    url: '/images/home/summer-europe.jpg',
    alt: 'Italian Riviera in summer — culture, villas, lakes',
    category: 'journal', note: 'Journal article. Italian Riviera in summer — culture, villas, lakes',
  },
  'jn-winter-japan-ski': {
    url: '/images/home/winter-japan-ski.jpg',
    alt: 'Snow-dusted Japan mountains — winter ski and onsen',
    category: 'journal', note: 'Journal article. Snow-dusted Japan mountains — winter ski and onsen',
  },
  'jn-christmas-europe': {
    url: '/images/home/christmas-europe.jpg',
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
    url: '/images/home/private-conservancies.jpg',
    alt: 'Private conservancy safari vehicle — vs main reserves',
    category: 'journal', note: 'Journal article. Private conservancy safari vehicle — vs main reserves',
  },
  'jn-first-safari-kenya-sa': {
    url: '/images/home/first-safari-kenya-sa.jpg',
    alt: 'Luxury safari lodge with plains view — first safari',
    category: 'journal', note: 'Journal article. Luxury safari lodge with plains view — first safari',
  },
  'jn-great-migration': {
    url: '/images/home/great-migration.jpg',
    alt: 'Savannah migration crossing — Great Migration',
    category: 'journal', note: 'Journal article. Savannah migration crossing — Great Migration',
  },
  'jn-safari-teenagers': {
    url: '/images/home/safari-teenagers.jpg',
    alt: 'Open safari vehicle in golden light — safari with teenagers',
    category: 'journal', note: 'Journal article. Open safari vehicle in golden light — safari with teenagers',
  },
  'jn-safari-camp-style': {
    url: '/images/home/safari-camp-style.jpg',
    alt: 'Refined safari camp interior — camp style selection',
    category: 'journal', note: 'Journal article. Refined safari camp interior — camp style selection',
  },
  // Island Escapes
  'jn-maldives-right-island': {
    url: '/images/home/maldives-right-island.jpg',
    alt: 'Maldives at calm dawn — why the right island matters',
    category: 'journal', note: 'Journal article. Maldives at calm dawn — why the right island matters',
  },
  'jn-soneva-cheval-joali': {
    url: '/images/home/soneva-cheval-joali.jpg',
    alt: 'Refined Maldives villa — Soneva / Cheval Blanc / JOALI personalities',
    category: 'journal', note: 'Journal article. Refined Maldives villa — Soneva / Cheval Blanc / JOALI personalities',
  },
  'jn-maldives-family-villas': {
    url: '/images/home/maldives-family-villas.jpg',
    alt: 'Maldives family beach villa with pool',
    category: 'journal', note: 'Journal article. Maldives family beach villa with pool',
  },
  'jn-seychelles-vs-maldives': {
    url: '/images/home/seychelles-vs-maldives.jpg',
    alt: 'Seychelles granite boulders on tropical beach',
    category: 'journal', note: 'Journal article. Seychelles granite boulders on tropical beach',
  },
  'jn-thailand-villas': {
    url: '/images/home/thailand-villas.jpg',
    alt: 'Thailand private villa with infinity pool.jpg',
    category: 'journal', note: 'Journal article. Thailand private villa with infinity pool',
  },
  // Wellness
  'jn-clp-expect': {
    url: '/images/hotels/Clinique La Prairie.jpg',
    alt: 'Swiss alpine lake — Clinique La Prairie atmosphere',
    category: 'journal', note: 'Journal article. Swiss alpine lake — Clinique La Prairie atmosphere',
  },
  'jn-lanserhof-vs-sha': {
    url: '/images/home/lanserhof-vs-sha.jpg',
    alt: 'Mountain landscape — Lanserhof vs SHA different philosophies',
    category: 'journal', note: 'Journal article. Mountain landscape — Lanserhof vs SHA different philosophies',
  },
  'jn-six-senses-best-for': {
    url: '/images/home/six-senses-best-for.jpg',
    alt: 'Forest wellness pavilion — Six Senses Wellness',
    category: 'journal', note: 'Journal article. Forest wellness pavilion — Six Senses Wellness',
  },
  'jn-wellness-more-than-spa': {
    url: '/images/home/wellness-more-than-spa.jpg',
    alt: 'Calm landscape — wellness needs more than spa',
    category: 'journal', note: 'Journal article. Calm landscape — wellness needs more than spa',
  },
  'jn-recovery-journey': {
    url: '/images/home/recovery-journey.jpg',
    alt: 'Tranquil lake — recovery-focused journey',
    category: 'journal', note: 'Journal article. Tranquil lake — recovery-focused journey',
  },
  // Luxury Rail
  'jn-europe-luxury-rail': {
    url: '/images/home/europe-luxury-rail.jpg',
    alt: 'Vintage luxury train at refined platform — Europe by rail',
    category: 'journal', note: 'Journal article. Vintage luxury train at refined platform — Europe by rail',
  },
  'jn-belmond-trains-suit': {
    url: '/images/home/belmond-trains-suit.jpg',
    alt: 'Heritage luxury train — Belmond trains',
    category: 'journal', note: 'Journal article. Heritage luxury train — Belmond trains',
  },
  'jn-the-ghan': {
    url: '/images/home/the-ghan.jpg',
    alt: 'Australian outback landscape — The Ghan',
    category: 'journal', note: 'Journal article. Australian outback landscape — The Ghan',
  },
  'jn-eo-express-asia': {
    url: '/images/home/eo-express-asia.jpg',
    alt: 'Luxury train at platform — Eastern & Oriental Express',
    category: 'journal', note: 'Journal article. Luxury train at platform — Eastern & Oriental Express',
  },
  // Private Jet
  'jn-jet-traveller-type': {
    url: '/images/home/jet-traveller-type.jpg',
    alt: 'Aerial view over clouds — Four Seasons Private Jet suits',
    category: 'journal', note: 'Journal article. Aerial view over clouds — Four Seasons Private Jet suits',
  },
  'jn-jet-without-flash': {
    url: '/images/home/jet-without-flash.jpg',
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
    url: '/images/home/antarctica-ship-choice.jpg',
    alt: 'Antarctica iceberg landscape — how to choose the right ship',
    category: 'journal', note: 'Journal article. Antarctica iceberg landscape — how to choose the right ship',
  },
  'jn-arctic-vs-antarctic': {
    url: '/images/home/arctic-vs-antarctic.jpg',
    alt: 'Polar ice landscape — Arctic vs Antarctica comparison',
    category: 'journal', note: 'Journal article. Polar ice landscape — Arctic vs Antarctica comparison',
  },
  'jn-galapagos-families': {
    url: '/images/home/galapagos-families.jpg',
    alt: 'Wildlife landscape — Galápagos for families',
    category: 'journal', note: 'Journal article. Wildlife landscape — Galápagos for families',
  },
  'jn-expedition-comfort': {
    url: '/images/home/expedition-comfort.jpg',
    alt: 'Polar landscape — expedition without losing comfort',
    category: 'journal', note: 'Journal article. Polar landscape — expedition without losing comfort',
  },
  // Villas & Estates
  'jn-samujana-villas': {
    url: '/images/home/samujana-villas.jpg',
    alt: 'Private villa with infinity pool — Samujana-style villas',
    category: 'journal', note: 'Journal article. Private villa with infinity pool — Samujana-style villas',
  },
  'jn-nihi-sumba': {
    url: '/images/home/nihi-sumba.jpg',
    alt: 'Wild remote island resort — Nihi Sumba wild luxury',
    category: 'journal', note: 'Journal article. Wild remote island resort — Nihi Sumba wild luxury',
  },
  'jn-tuscany-estates': {
    url: '/images/home/tuscany-estates.jpg',
    alt: 'Italian countryside — Tuscany estates for family summers',
    category: 'journal', note: 'Journal article. Italian countryside — Tuscany estates for family summers',
  },
  'jn-lake-como-villas': {
    url: '/images/home/lake-como-villas.jpg',
    alt: 'Italian lakeside — Lake Como villas, privacy and boats',
    category: 'journal', note: 'Journal article. Italian lakeside — Lake Como villas, privacy and boats',
  },
  // Behind the Journey
  'jn-how-we-design': {
    url: '/images/home/how-we-design.jpg',
    alt: 'Travel planning desk — how we design journeys',
    category: 'journal', note: 'Journal article. Travel planning desk — how we design journeys',
  },
  'jn-supplier-relationships': {
    url: '/images/home/supplier-relationships.jpg',
    alt: 'Refined hotel lobby — supplier relationships',
    category: 'journal', note: 'Journal article. Refined hotel lobby — supplier relationships',
  },

  // ── BVLGARI HOTELS (NEW) ────────────────────────────────────────────────
  'hotel-bvlgari': {
  url: '/images/hotels/hotel-bvlgari.jpg',
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

  if (entry?.url) {
    return entry.url;
  }

  if (entry?.id) {
    return CDN(entry.id, w);
  }

  if (keyOrId && keyOrId.startsWith('photo-')) {
    return CDN(keyOrId, w);
  }

  return CDN('photo-1520250497591-112f2f40a3f4', w);
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

