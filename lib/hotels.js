// Hotel brands, safari lodges, villas and wellness retreats

export const HOTEL_CATEGORIES = [
  {
    slug: 'luxury-brands',
    title:   { en: 'Luxury Hotel Brands',      zh: '顶级酒店品牌' },
    tagline: { en: 'The names that set the standard.', zh: '定义标准的品牌。' },
    imgKey: 'cat-city-hotels',
  },
  {
    slug: 'safari-lodges',
    title:   { en: 'Safari Lodges & Camps',    zh: '野生营地与帐篷营' },
    tagline: { en: 'Wilderness at the highest level.', zh: '荒野中的最高水准。' },
    imgKey: 'cat-safari-lodges',
  },
  {
    slug: 'private-villas',
    title:   { en: 'Private Villas & Estates', zh: '私人别墅与庄园' },
    tagline: { en: 'Complete privacy, on your terms.', zh: '完全私密，以您的方式。' },
    imgKey: 'cat-private-villas',
  },
  {
    slug: 'wellness-retreats',
    title:   { en: 'Wellness Retreats',         zh: '健康静修' },
    tagline: { en: 'Genuine outcomes, not just relaxation.', zh: '真实效果，不只是放松。' },
    imgKey: 'cat-wellness',
  },
];

export const HOTEL_BRANDS = [
  {
    slug: 'aman',
    category: 'luxury-brands',
    imgKey: 'hotel-aman',
    name: 'Aman',
    tag: { en: 'Quiet Luxury', zh: '静谧奢华' },
    overview: {
      en: 'Aman is the reference point for quiet luxury. Properties are typically small — rarely more than 40 rooms — and are designed to disappear into their landscape. The service style is discreet, personalised and genuinely unhurried.',
      zh: '安缦是静谧奢华的参照标准。旗下住宿通常规模精小——很少超过40间客房——设计上融入当地景观。服务风格低调、个性化，真正从容不迫。',
    },
    whyRecommend: {
      en: 'For travellers who want to be left alone — beautifully. Aman is not for everyone: if you want activity programmes, a busy pool scene or nightlife access, look elsewhere. If you want space, silence and exceptional design, there is very little comparable.',
      zh: '适合那些希望拥有真正独处空间的旅行者。安缦并非适合所有人：如果您想要丰富的活动节目、热闹的泳池氛围或夜生活，请另寻其他。但如果您想要空间、宁静与卓越的设计，几乎无可比拟。',
    },
    bestFor: {
      en: 'Couples seeking privacy. Solo travellers. Wellness-focused guests. Those who appreciate architecture and understated design.',
      zh: '寻求私密的夫妻。独行旅行者。注重健康的宾客。欣赏建筑与低调设计的人。',
    },
    highlights: {
      en: ['Amanjiwo, Java', 'Amangiri, Utah', 'Aman Tokyo', 'Amanemu, Japan', 'Amanpuri, Phuket', 'Amanyara, Turks & Caicos', 'Amanzoe, Greece'],
      zh: ['Amanjiwo，爪哇', 'Amangiri，犹他州', '安缦东京', 'Amanemu，日本', 'Amanpuri，普吉岛', 'Amanyara，特克斯和凯科斯', 'Amanzoe，希腊'],
    },
    ourThoughts: {
      en: 'Aman Tokyo is ideal for travellers who want calm, design and wellness in the city. For families with younger children, we sometimes lean toward Four Seasons Otemachi or The Peninsula Tokyo for convenience and a more active hotel environment.',
      zh: '安缦东京适合在城市中寻求宁静、设计感与健康体验的旅行者。对于有年幼孩子的家庭，我们有时会更倾向于推荐大手町四季或半岛东京，因其便利性与更活跃的酒店氛围。',
    },
  },
  {
    slug: 'four-seasons',
    category: 'luxury-brands',
    imgKey: 'hotel-four-seasons',
    name: 'Four Seasons',
    tag: { en: 'Global Reliability', zh: '全球可信赖' },
    overview: {
      en: 'Four Seasons is the most consistent global luxury hotel brand. The service standards are reliably excellent across markets, the family programming is strong, and the properties — from Tokyo to the Maldives to Paris — maintain a clear identity while adapting to their setting.',
      zh: '四季是全球最一致的奢华酒店品牌。跨市场的服务标准始终如一出色，家庭项目完善，旗下住宿——从东京到马尔代夫到巴黎——在保持鲜明特性的同时适应当地环境。',
    },
    whyRecommend: {
      en: 'Four Seasons works particularly well for families, because the kids\' clubs, pool quality and service responsiveness to children are consistently well-executed. For clients visiting a destination for the first time, Four Seasons rarely disappoints.',
      zh: '四季特别适合家庭，因为儿童俱乐部、泳池品质与对孩子的服务响应始终执行良好。对于首次造访某目的地的客户，四季很少令人失望。',
    },
    bestFor: {
      en: 'Families. First-time visitors to a destination. Those who value service consistency and strong hotel infrastructure.',
      zh: '家庭。首次造访某目的地的旅行者。重视服务一致性与酒店基础设施的宾客。',
    },
    highlights: {
      en: ['Four Seasons Tokyo at Otemachi', 'Four Seasons George V, Paris', 'Four Seasons Landaa Giraavaru', 'Four Seasons Bali at Sayan', 'Four Seasons Resort Maui'],
      zh: ['大手町四季东京', '巴黎乔治五世四季', '马尔代夫Landaa Giraavaru四季', '四季巴厘岛乌布', '四季茂宜岛度假村'],
    },
    ourThoughts: {
      en: 'Four Seasons is our default recommendation when a client wants reliable quality and exceptional service but does not need a property that is architecturally distinctive or particularly small and intimate. For the Maldives, Four Seasons Landaa Giraavaru is one of our most recommended properties for families.',
      zh: '当客户想要可靠的品质与卓越的服务，但不特别需要建筑风格独特或规模精小亲密的住宿时，四季是我们的默认推荐。在马尔代夫，Landaa Giraavaru四季是我们最常推荐给家庭的住宿之一。',
    },
  },
  {
    slug: 'rosewood',
    category: 'luxury-brands',
    imgKey: 'hotel-rosewood',
    name: 'Rosewood Hotels & Resorts',
    tag: { en: 'Sense of Place', zh: '地域感' },
    overview: {
      en: 'Rosewood has built a compelling portfolio by focusing on sense of place — each property is deeply connected to its location, culture and history. The brand spans urban landmarks like The Hague and São Paulo to island resorts in the Maldives and Phuket.',
      zh: '瑰丽通过专注于地域感打造了一个引人注目的组合——每家住宿都与所在地的位置、文化和历史深度连接。品牌版图从海牙和圣保罗等城市地标，延伸至马尔代夫和普吉岛的岛屿度假村。',
    },
    whyRecommend: {
      en: 'Rosewood offers a more design-led, locally connected experience than Four Seasons. Properties tend to have strong food and beverage programmes, interesting architectural contexts and a service culture that feels more personal than corporate.',
      zh: '瑰丽提供比四季更具设计感、更与当地连接的体验。旗下住宿通常拥有出色的餐饮项目、有趣的建筑背景，以及比企业化更显个人化的服务文化。',
    },
    bestFor: {
      en: 'Design-conscious travellers. Food and beverage enthusiasts. Those who want a hotel with genuine character and cultural depth.',
      zh: '注重设计的旅行者。美食爱好者。寻求具有真实个性与文化深度的酒店的宾客。',
    },
    highlights: {
      en: ['Rosewood London', 'Rosewood Phuket', 'Rosewood Maldives Kuda Villingili', 'Rosewood Guangzhou', 'Rosewood Vienna'],
      zh: ['瑰丽伦敦', '瑰丽普吉岛', '马尔代夫库达维灵吉里瑰丽', '广州瑰丽', '维也纳瑰丽'],
    },
    ourThoughts: {
      en: 'Rosewood Bangkok is one of the most impressive openings in Asia in recent years — the food quality, rooftop, and riverside location are all exceptional. We often recommend it alongside Capella Bangkok for clients who want to spend several nights in the city.',
      zh: '瑰丽曼谷是近年来亚洲最令人印象深刻的新开业住宿之一——餐饮品质、屋顶酒吧与河畔位置都格外出色。我们常与Capella曼谷一同推荐给希望在城市多住几晚的客户。',
    },
  },
  {
    slug: 'bvlgari',
    category: 'luxury-brands',
    imgKey: 'hotel-bvlgari',
    name: 'Bulgari Hotels & Resorts',
    tag: { en: 'Italian Fashion Luxury', zh: '意大利时尚奢华' },
    overview: {
      en: 'Bulgari Hotels & Resorts translates the precision and artistry of the Italian jewellery house into hospitality. Properties are deliberately small — rarely more than 100 rooms — and located in culturally significant cities: Milan, London, Bali, Dubai, Tokyo, Paris.',
      zh: '宝格丽酒店将意大利珠宝品牌的精准工艺转译为酒店体验。旗下住宿规模刻意保持精小——很少超过100间客房——坐落于具有文化意义的城市：米兰、伦敦、巴厘岛、迪拜、东京、巴黎。',
    },
    whyRecommend: {
      en: "Bulgari offers something no traditional luxury hotel group can replicate: fashion-house design applied to hospitality at the highest level. The brand's properties are consistently among the best-designed hotels in their respective cities, and the service — while different in character from Four Seasons or Aman — is impeccably personal." ,
      zh: '宝格丽提供了传统奢华酒店集团无法复制的东西：时尚品牌设计在酒店业最高层面的呈现。品牌旗下住宿在各自城市中始终名列设计最精良的酒店之列，服务虽与四季或安缦风格不同，却无不精准个性。',
    },
    bestFor: {
      en: 'Design-conscious travellers seeking fashion-house luxury. City stays in Milan, London, Dubai or Tokyo. Those who prioritise architectural and interior design excellence above all else.',
      zh: '寻求时尚品牌奢华的设计意识旅行者。米兰、伦敦、迪拜或东京的城市住宿。将建筑与室内设计卓越性置于首位的宾客。',
    },
    highlights: {
      en: ['Bulgari Hotel Milano', 'Bulgari Hotel London', 'Bulgari Hotel & Resort Bali', 'Bulgari Hotel Dubai', 'Bulgari Hotel & Residences Tokyo', 'Bulgari Hotel Paris'],
      zh: ['宝格丽酒店米兰', '宝格丽酒店伦敦', '宝格丽度假酒店巴厘岛', '宝格丽酒店迪拜', '宝格丽酒店及公寓东京', '宝格丽酒店巴黎'],
    },
    ourThoughts: {
      en: "Bulgari Milan remains one of Europe's finest design hotels — the scale, the detail and the location on the Goldoni are difficult to fault. For a Tokyo stay that combines extraordinary design with effortless service, the Bulgari is our first recommendation ahead of several other well-regarded properties. The Paris opening has added an important address to the city.",
      zh: '宝格丽米兰依然是欧洲设计最出色的酒店之一——其规模、细节与高登尼街的位置几乎无可挑剔。在东京寻找兼具卓越设计与无缝服务的住宿，宝格丽是我们优先推荐的选择。巴黎新开业的住宿也为这座城市增添了一个重要地址。',
    },
  },

  {
    slug: 'six-senses',
    category: 'luxury-brands',
    imgKey: 'hotel-six-senses',
    name: 'Six Senses',
    tag: { en: 'Wellness Integrated', zh: '融合健康理念' },
    overview: {
      en: 'Six Senses has built one of the most coherent wellness identities in global hospitality. The brand integrates sustainability, nutrition, sleep science and restorative programming into properties that are also genuinely beautiful places to stay.',
      zh: '六善在全球酒店业打造了最连贯的健康品牌形象之一。品牌将可持续发展、营养、睡眠科学与疗愈项目融入住宿，同时也是真正美丽的居住场所。',
    },
    whyRecommend: {
      en: "Six Senses works particularly well for clients who want wellness integration without sacrificing natural beauty or interesting destinations. Six Senses Douro Valley, Six Senses Ibiza and Six Senses Rome all show the brand's ability to create interesting properties beyond traditional resort settings.",
      zh: '六善特别适合那些在不牺牲自然之美或有趣目的地的前提下希望融入健康元素的客户。杜罗河谷六善、伊比萨六善与罗马六善都展示了品牌在传统度假村环境之外打造有趣住宿的能力。',
    },
    bestFor: {
      en: 'Wellness-focused travellers. Couples seeking meaningful slow travel. Those interested in sleep programmes, nutrition and recovery.',
      zh: '注重健康的旅行者。寻求有意义的慢旅行的夫妻。对睡眠项目、营养与恢复感兴趣的宾客。',
    },
    highlights: {
      en: ['Six Senses Douro Valley', 'Six Senses Ibiza', 'Six Senses Rome', 'Six Senses Uluwatu, Bali', 'Six Senses Zil Pasyon, Seychelles'],
      zh: ['杜罗河谷六善', '伊比萨六善', '罗马六善', '巴厘岛乌鲁瓦图六善', '塞舌尔六善'],
    },
    ourThoughts: {
      en: 'Six Senses Rome opened in a 15th-century palazzo and is one of the most interesting hotel openings in Europe in recent years. For clients who want Rome with wellness — specifically sleep recovery and nutrition — it is an exceptional option that most travel agents would not think to suggest.',
      zh: '罗马六善开设于一栋15世纪的宫殿内，是近年来欧洲最有趣的酒店开业之一。对于想要在罗马体验健康——特别是睡眠恢复与营养——的客户，这是一个大多数旅行顾问不会想到推荐的卓越选择。',
    },
  },
  {
    slug: 'safari-lodges',
    category: 'safari-lodges',
    imgKey: 'hotel-safari',
    name: 'Safari Lodges & Camps',
    tag: { en: 'Wilderness Experience', zh: '野地体验' },
    overview: {
      en: 'Africa\'s finest safari lodges and camps are small, private and deeply connected to their conservation landscape. Operators like Singita, andBeyond, Great Plains and Wilderness work within private conservancies and concessions that offer wildlife experiences impossible in the national parks.',
      zh: '非洲最优质的野生营地规模精小、私密，与其保护区景观深度连接。Singita、andBeyond、Great Plains和Wilderness等运营商在私人保护区和特许区内运营，提供国家公园内无法实现的野生动物体验。',
    },
    whyRecommend: {
      en: 'Private concessions mean you can go off-road, drive at night and have camp vehicles dedicated to your group. This makes a fundamental difference to the quality of the experience.',
      zh: '私人特许区意味着您可以越野行驶、夜间驾驶，并拥有专属于您团队的营地车辆。这对体验质量有着根本性的影响。',
    },
    bestFor: {
      en: 'Wildlife enthusiasts. Photography travellers. Families with older children. Those willing to invest in quality for a once-in-a-lifetime experience.',
      zh: '野生动物爱好者。摄影旅行者。有大孩子的家庭。愿意为终生难忘的体验投入的旅行者。',
    },
    highlights: {
      en: ['Singita Grumeti, Tanzania', 'andBeyond Ngorongoro Crater Lodge', 'Angama Mara, Kenya', 'Wilderness Mombo, Botswana', 'Royal Malewane, South Africa'],
      zh: ['Singita Grumeti，坦桑尼亚', 'andBeyond恩戈罗恩戈罗火山口小屋', 'Angama Mara，肯尼亚', 'Wilderness Mombo，博茨瓦纳', 'Royal Malewane，南非'],
    },
    ourThoughts: {
      en: 'We spend considerable time helping clients choose the right camp for their priorities. The Great Migration, gorilla trekking and the Okavango Delta each require different operators, timing and bases. It is not a category where one size fits all.',
      zh: '我们会花相当多的时间帮助客户根据优先需求选择合适的营地。角马大迁徙、大猩猩追踪与奥卡万戈三角洲各需要不同的运营商、时机与基地。这个类别并不适合一刀切。',
    },
  },
  {
    slug: 'private-villas-estates',
    category: 'private-villas',
    imgKey: 'hotel-villas',
    name: 'Private Villas & Estates',
    tag: { en: 'Complete Privacy', zh: '完全私密' },
    overview: {
      en: 'Private villa rental at the luxury level offers something that even the best hotels cannot: complete privacy, your own kitchen and dining schedule, space for larger groups, and a sense of genuine home — in Tuscany, Bali, Lake Como, Santorini or Provence.',
      zh: '奢华级别的私人别墅租住提供了即使最好的酒店也无法提供的东西：完全的私密性、您自己的厨房与用餐安排、适合大型团体的空间，以及真正家的感觉——无论是在托斯卡纳、巴厘岛、科莫湖、圣托里尼还是普罗旺斯。',
    },
    whyRecommend: {
      en: 'For families, multi-generational groups or close friends travelling together, a private villa often delivers a better experience than booking multiple hotel rooms. The logistics, the privacy and the flexibility of your own space are difficult to replicate.',
      zh: '对于家庭、多代同行或亲密朋友一起旅行，私人别墅往往比预订多间酒店客房提供更好的体验。后勤便利、私密性与您自己空间的灵活性难以复制。',
    },
    bestFor: {
      en: 'Families and multi-generational groups. Groups of close friends. Celebrations — anniversaries, birthdays. Those who want to base themselves in one place and explore a region at their own pace.',
      zh: '家庭与多代同行团体。亲密朋友团体。庆典——周年纪念、生日。那些希望驻扎一地、按自己的节奏探索某个区域的旅行者。',
    },
    highlights: {
      en: ['Lake Como estates', 'Tuscan farmhouses and villas', 'Provence châteaux', 'Samujana, Koh Samui', 'Nihi Sumba, Indonesia', 'Joali Being, Maldives'],
      zh: ['科莫湖庄园', '托斯卡纳农庄与别墅', '普罗旺斯城堡', 'Samujana，苏梅岛', 'Nihi Sumba，印度尼西亚', 'Joali Being，马尔代夫'],
    },
    ourThoughts: {
      en: 'Villa rental quality varies enormously. We are selective about the properties we recommend, and we always brief the villa management team before arrival with guest preferences, dietary requirements and any logistical details. The difference between a well-managed villa experience and a poorly managed one is significant.',
      zh: '别墅租住的品质差异极大。我们对推荐的住宿非常挑剔，并在客人抵达前始终与别墅管理团队沟通客人偏好、饮食要求与任何后勤细节。管理良好与管理不善的别墅体验之间的差异是显著的。',
    },
  },
  {
    slug: 'clinique-la-prairie',
    category: 'wellness-retreats',
    imgKey: 'hotel-wellness',
    name: 'Clinique La Prairie',
    tag: { en: 'Medical Wellness', zh: '医疗健康' },
    overview: {
      en: 'Clinique La Prairie in Montreux, Switzerland, is the original medical wellness retreat — founded in 1931 and now combining comprehensive health assessments, longevity programmes and regenerative medicine with world-class hotel facilities on Lake Geneva.',
      zh: 'Clinique La Prairie位于瑞士蒙特勒，是最早的医疗健康静修地——创立于1931年，如今将全面健康评估、长寿项目与再生医学结合世界级酒店设施，坐落于日内瓦湖畔。',
    },
    whyRecommend: {
      en: 'For clients who want genuine health outcomes — not simply relaxation — Clinique La Prairie is in a different category. The combination of medical assessment, personalised programming and the Swiss environment creates something that a standard spa retreat cannot replicate.',
      zh: '对于希望获得真实健康效果——而非单纯放松——的客户，Clinique La Prairie属于不同类别。医疗评估、个性化项目与瑞士环境的结合创造了标准水疗静修无法复制的体验。',
    },
    bestFor: {
      en: 'Clients interested in longevity and preventive medicine. Those recovering from high-stress periods. Individuals over 50 seeking a comprehensive health review.',
      zh: '对长寿与预防医学感兴趣的客户。从高压时期恢复的人士。50岁以上寻求全面健康评估的人。',
    },
    highlights: {
      en: ['Revitalisation Programme (7–10 days)', 'Holistic Detox Programme', 'Longevity Journey (4–14 days)', 'Mental Wellness Programme'],
      zh: ['活化计划（7–10天）', '整体排毒计划', '长寿旅程（4–14天）', '心理健康计划'],
    },
    ourThoughts: {
      en: 'Clinique La Prairie requires advance planning — their signature programmes are often booked several months ahead. We can assist with the initial inquiry and ensure that the guest\'s medical history and preferences are properly communicated before arrival.',
      zh: 'Clinique La Prairie需要提前规划——他们的标志性项目通常提前数月预订。我们可以协助初始咨询，并确保宾客的病史与偏好在抵达前得到妥善沟通。',
    },
  },
];

export function getHotelBySlug(slug) {
  return HOTEL_BRANDS.find(h => h.slug === slug) || null;
}

export function getAllHotelSlugs() {
  return HOTEL_BRANDS.map(h => h.slug);
}
