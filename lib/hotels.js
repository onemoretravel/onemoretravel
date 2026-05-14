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

  {
    slug: 'mandarin-oriental',
    category: 'luxury-brands',
    imgKey: 'hotel-mandarin-oriental',
    name: 'Mandarin Oriental',
    tag: { en: 'Asian Sophistication', zh: '亚洲精致典雅' },
    overview: {
      en: 'Mandarin Oriental is one of the most consistent luxury hotel groups in the world, with particular strength across Asia. The Bangkok flagship — among the longest-operating luxury hotels in the world — remains one of the best-known properties. The group has expanded carefully into Europe, the Americas and the Middle East.',
      zh: '文华东方是全球最稳定的奢华酒店集团之一，在亚洲尤为强势。曼谷旗舰店——世界上经营时间最长的奢华酒店之一——至今仍是最受认可的住宿。集团近年在欧洲、美洲与中东审慎拓展。',
    },
    whyRecommend: {
      en: 'Mandarin Oriental properties consistently deliver three things: refined Asian-style service, strong food and beverage, and beautifully maintained interior detail. The brand suits clients who appreciate calm elegance rather than dramatic design.',
      zh: '文华东方的住宿稳定地提供三样东西：精致的亚洲式服务、出色的餐饮、以及精心维护的室内细节。它适合更欣赏沉静优雅，而非张扬设计的客户。',
    },
    bestFor: {
      en: 'Travellers who value service consistency, food culture and refined Asian hospitality. City stays in Bangkok, Tokyo, Hong Kong, Lake Como and Marrakech.',
      zh: '重视服务一致性、餐饮文化与精致亚洲款待的旅行者。曼谷、东京、香港、科莫湖与马拉喀什的城市住宿。',
    },
    highlights: {
      en: ['Mandarin Oriental Bangkok', 'Mandarin Oriental Tokyo', 'Mandarin Oriental Hong Kong', 'Mandarin Oriental Lake Como', 'Mandarin Oriental Marrakech', 'Mandarin Oriental Munich'],
      zh: ['文华东方曼谷', '文华东方东京', '文华东方香港', '文华东方科莫湖', '文华东方马拉喀什', '文华东方慕尼黑'],
    },
    ourThoughts: {
      en: "Mandarin Oriental Bangkok remains the reference point for Asian luxury hospitality. The Authors' Lounge at afternoon tea, the river-facing suites and the quality of the spa make it a destination in itself. For a Tokyo stay with city views and excellent dining, the Mandarin Oriental Tokyo sits comfortably alongside the Aman and the Peninsula.",
      zh: '文华东方曼谷依然是亚洲奢华酒店的参照标准。Authors\' Lounge 下午茶、面向湄南河的套房与水疗品质，让它本身就是目的地。在东京寻找城市景观与出色餐饮的住宿，文华东方东京可以与安缦及半岛并列。',
    },
  },
  {
    slug: 'peninsula',
    category: 'luxury-brands',
    imgKey: 'hotel-peninsula',
    name: 'The Peninsula',
    tag: { en: 'Classic Grand Luxury', zh: '经典隆重奢华' },
    overview: {
      en: 'The Peninsula is the family-owned Hong Kong-based group that operates a deliberately small portfolio — currently ten properties — across Asia, the United States and Europe. Each property is a landmark in its city.',
      zh: '半岛酒店是总部位于香港的家族企业，刻意保持精简的版图——目前十家——分布于亚洲、美国与欧洲。每家住宿都是所在城市的地标。',
    },
    whyRecommend: {
      en: 'The Peninsula combines old-world hospitality with technical detail that other luxury groups have not matched. The fleet of Rolls-Royces, the in-room technology, the bathroom design — these are details that genuinely add up.',
      zh: '半岛将老派款待与其他奢华集团尚未匹敌的技术细节结合。劳斯莱斯接送车队、客房科技、浴室设计——这些细节是真的加分。',
    },
    bestFor: {
      en: 'Travellers who appreciate classic grand luxury — afternoon tea, doormen in white gloves, the rituals of traditional hospitality. Excellent for first-time visitors to a city.',
      zh: '欣赏经典隆重奢华——下午茶、戴白手套的门童、传统款待仪式——的旅行者。对城市的首次造访尤为合适。',
    },
    highlights: {
      en: ['The Peninsula Hong Kong', 'The Peninsula Tokyo', 'The Peninsula Paris', 'The Peninsula London', 'The Peninsula Bangkok', 'The Peninsula Beverly Hills'],
      zh: ['香港半岛', '东京半岛', '巴黎半岛', '伦敦半岛', '曼谷半岛', '比佛利山半岛'],
    },
    ourThoughts: {
      en: 'The Peninsula Tokyo is one of the most underrated luxury hotels in the city. The location at Marunouchi, the rooftop bar and the spa quality make it a strong alternative to the Aman or Four Seasons Otemachi. For first-time visitors to Hong Kong, The Peninsula Hong Kong remains the default recommendation.',
      zh: '东京半岛是这座城市最被低估的奢华酒店之一。位于丸之内的地点、屋顶酒吧与水疗品质，使它成为安缦或大手町四季的有力替代。对于首次造访香港的客人，香港半岛依然是默认推荐。',
    },
  },
  {
    slug: 'belmond',
    category: 'luxury-brands',
    imgKey: 'hotel-belmond',
    name: 'Belmond',
    tag: { en: 'Heritage Glamour', zh: '传承式优雅' },
    overview: {
      en: 'Belmond is the LVMH-owned travel collection that combines heritage hotels with iconic trains, river cruises and trains. The portfolio includes the Venice Simplon-Orient-Express, the Hotel Cipriani in Venice, the Hotel Caruso in Ravello, the Hotel Splendido in Portofino, and Belmond Villa San Michele above Florence.',
      zh: 'Belmond 是 LVMH 旗下的旅行品牌组合，将传承酒店与标志性列车、河船与铁路结合。版图包括威尼斯辛普隆东方快车、威尼斯 Cipriani 酒店、拉韦洛 Caruso 酒店、波托菲诺 Splendido 酒店，以及佛罗伦萨之上的 Villa San Michele。',
    },
    whyRecommend: {
      en: 'Belmond suits travellers who want a sense of occasion — heritage glamour, slow travel, the feeling of stepping into a different era. The trains in particular are unlike any other modern travel experience.',
      zh: 'Belmond 适合追求仪式感的旅行者——传承优雅、慢游、走入另一个时代的感觉。其列车体验尤其与现代旅行体验大不相同。',
    },
    bestFor: {
      en: 'Couples celebrating milestones. Slow travellers. Those who want their journey to feel like a sequence of cinematic moments. Honeymoons. Anniversaries.',
      zh: '庆祝里程碑的夫妻。慢节奏旅行者。希望旅程像一连串电影般时刻的客户。蜜月。周年纪念。',
    },
    highlights: {
      en: ['Venice Simplon-Orient-Express, A Belmond Train', 'Hotel Cipriani, A Belmond Hotel, Venice', 'Hotel Caruso, A Belmond Hotel, Amalfi Coast', 'Hotel Splendido, A Belmond Hotel, Portofino', 'Belmond Villa San Michele, Florence', 'Eastern & Oriental Express, A Belmond Train'],
      zh: ['威尼斯辛普隆东方快车', '威尼斯 Cipriani 酒店', '拉韦洛 Caruso 酒店', '波托菲诺 Splendido 酒店', '佛罗伦萨 Villa San Michele', '东方与亚洲快车'],
    },
    ourThoughts: {
      en: 'For an Italian summer journey, the Belmond chain creates one of the more cohesive itinerary frameworks — the Cipriani in Venice, the Villa San Michele above Florence, and the Caruso or Splendido on the coast. The Orient-Express ties it together if a rail journey is desired.',
      zh: '对于意大利夏季旅程，Belmond 体系创造了最为连贯的行程框架之一——威尼斯 Cipriani、佛罗伦萨上方的 Villa San Michele、以及海岸的 Caruso 或 Splendido。如果希望加入铁路体验，东方快车可串联整个旅程。',
    },
  },
  {
    slug: 'cheval-blanc',
    category: 'luxury-brands',
    imgKey: 'hotel-cheval-blanc',
    name: 'Cheval Blanc',
    tag: { en: 'French Ultra-Luxury', zh: '法式至臻奢华' },
    overview: {
      en: 'Cheval Blanc is the LVMH ultra-luxury hotel group, currently operating five properties — Paris, Courchevel, Saint-Tropez, Saint-Barth and the Maldives. The properties are unmistakably French in their refinement, deliberately small, and consistently among the best-designed hotels in their respective markets.',
      zh: 'Cheval Blanc 是 LVMH 旗下的至臻奢华酒店品牌，目前运营五家住宿——巴黎、库尔舍韦勒、圣特罗佩、圣巴特与马尔代夫。这些住宿都带有明确的法式精致感，规模刻意精小，并在各自市场中始终是设计最出色的酒店之一。',
    },
    whyRecommend: {
      en: 'Cheval Blanc properties combine high-end design with consistently exceptional service. The Paris flagship in the former La Samaritaine building is one of the most impressive hotel openings of the past decade.',
      zh: 'Cheval Blanc 的住宿将高级设计与始终如一的卓越服务结合。巴黎旗舰店位于原 La Samaritaine 百货大楼内，是过去十年最令人印象深刻的酒店开业之一。',
    },
    bestFor: {
      en: 'Travellers who appreciate French refinement, design-led hospitality and ultra-small properties. City stays in Paris, alpine stays in Courchevel, or extended seclusion at the Maldives Randheli.',
      zh: '欣赏法式精致、设计导向款待与极致精小住宿的旅行者。巴黎的城市住宿、库尔舍韦勒的高山住宿、或马尔代夫 Randheli 的长时间隐居。',
    },
    highlights: {
      en: ['Cheval Blanc Paris', 'Cheval Blanc Courchevel', 'Cheval Blanc Randheli, Maldives', 'Cheval Blanc St-Barth Isle de France', 'Cheval Blanc St-Tropez'],
      zh: ['Cheval Blanc 巴黎', 'Cheval Blanc 库尔舍韦勒', 'Cheval Blanc Randheli 马尔代夫', 'Cheval Blanc 圣巴特', 'Cheval Blanc 圣特罗佩'],
    },
    ourThoughts: {
      en: 'Cheval Blanc Randheli is one of our most recommended Maldives properties for couples seeking complete privacy with the highest design standard. The villas are larger than at most competitor properties, the food across all restaurants is genuinely excellent, and the staff-to-guest ratio shows.',
      zh: 'Cheval Blanc Randheli 是我们最常推荐给寻求完全私密与最高设计标准的客人的马尔代夫住宿之一。别墅比大多数同类住宿更大，所有餐厅的食物都真正出色，员工与客人的比例显而易见。',
    },
  },
  {
    slug: 'capella',
    category: 'luxury-brands',
    imgKey: 'hotel-capella',
    name: 'Capella Hotels & Resorts',
    tag: { en: 'Intimate Sophistication', zh: '亲密而精致' },
    overview: {
      en: 'Capella is a Singapore-based luxury hotel group with a deliberately small portfolio across Asia. The properties combine design-led architecture with intimate service — Capella Bangkok in particular has been widely regarded as one of the best new urban hotel openings in Asia.',
      zh: 'Capella 是总部位于新加坡的奢华酒店集团，在亚洲拥有刻意精简的版图。其住宿将设计导向的建筑与亲密服务结合——Capella 曼谷尤其被广泛视为亚洲近年最出色的城市酒店开业之一。',
    },
    whyRecommend: {
      en: 'Capella properties feel younger and more design-led than Mandarin Oriental or The Peninsula, while maintaining a similar service standard. The brand suits clients who want sophistication without the formality of older luxury hotel groups.',
      zh: 'Capella 的住宿比文华东方或半岛感觉更年轻、更注重设计，同时保持相似的服务标准。它适合追求精致但不想要老派奢华酒店集团那种正式感的客户。',
    },
    bestFor: {
      en: 'Younger luxury travellers. Design-conscious guests. Couples and small groups. Asia-focused journeys.',
      zh: '更年轻的奢华旅行者。注重设计的宾客。情侣与小型团体。以亚洲为核心的旅程。',
    },
    highlights: {
      en: ['Capella Bangkok', 'Capella Singapore', 'Capella Hanoi', 'Capella Ubud, Bali', 'Capella Shanghai, Jian Ye Li'],
      zh: ['Capella 曼谷', 'Capella 新加坡', 'Capella 河内', 'Capella 巴厘岛乌布', 'Capella 上海建业里'],
    },
    ourThoughts: {
      en: 'Capella Bangkok is currently one of our most-recommended Bangkok properties for couples. The riverside location, the design quality and the food at Cote and Phra Nakhon make it a destination in itself. For Bali, Capella Ubud is one of the most distinctive properties on the island.',
      zh: 'Capella 曼谷目前是我们最常推荐给情侣的曼谷住宿之一。河畔位置、设计品质，以及 Cote 和 Phra Nakhon 的餐饮，让它本身就是目的地。在巴厘岛，Capella Ubud 是岛上最具特色的住宿之一。',
    },
  },
  {
    slug: 'one-and-only',
    category: 'luxury-brands',
    imgKey: 'hotel-one-and-only',
    name: 'One&Only Resorts',
    tag: { en: 'Island & Resort Luxury', zh: '岛屿与度假村奢华' },
    overview: {
      en: 'One&Only is the Kerzner-owned luxury resort group with properties in island and resort destinations — Reethi Rah in the Maldives, Cape Town, Le Saint Géran in Mauritius, Mandarina in Mexico and others. The brand specialises in larger resort properties rather than small boutique hotels.',
      zh: 'One&Only 是 Kerzner 旗下的奢华度假村集团，住宿主要位于岛屿与度假目的地——马尔代夫 Reethi Rah、开普敦、毛里求斯 Le Saint Géran、墨西哥 Mandarina 等。品牌专注于较大的度假村，而非小型精品酒店。',
    },
    whyRecommend: {
      en: 'One&Only properties suit families and groups that want resort-level amenities — multiple restaurants, kids\' clubs, watersports, spa programmes — without sacrificing room-level luxury. The Reethi Rah villa configuration and acreage in the Maldives is genuinely difficult to match.',
      zh: 'One&Only 的住宿适合希望度假村级设施——多家餐厅、儿童俱乐部、水上运动、水疗项目——但不想牺牲客房奢华度的家庭与团体。Reethi Rah 在马尔代夫的别墅配置与占地面积难以匹敌。',
    },
    bestFor: {
      en: 'Families with mixed-age children. Multi-generational groups. Couples who want resort amenities alongside a beach holiday. Maldives, Mexico, Mauritius and Greece.',
      zh: '不同年龄孩子的家庭。多代同行团体。希望在海滩假期之外仍能享受度假村设施的情侣。马尔代夫、墨西哥、毛里求斯与希腊。',
    },
    highlights: {
      en: ['One&Only Reethi Rah, Maldives', 'One&Only Cape Town', 'One&Only Le Saint Géran, Mauritius', 'One&Only Mandarina, Mexico', 'One&Only Aesthesis, Athens', 'One&Only Kéa Island, Greece'],
      zh: ['One&Only Reethi Rah 马尔代夫', 'One&Only 开普敦', 'One&Only Le Saint Géran 毛里求斯', 'One&Only Mandarina 墨西哥', 'One&Only Aesthesis 雅典', 'One&Only Kéa 岛 希腊'],
    },
    ourThoughts: {
      en: 'One&Only Reethi Rah is one of our most recommended Maldives properties for families with children of mixed ages. The island is large enough that the villas feel private, the kids\' club is excellent, and the multiple restaurants make a longer stay easier.',
      zh: 'One&Only Reethi Rah 是我们最常推荐给不同年龄孩子家庭的马尔代夫住宿之一。岛屿足够大，使得别墅感觉私密；儿童俱乐部出色；多家餐厅让较长住宿更轻松。',
    },
  },
  {
    slug: 'como',
    category: 'luxury-brands',
    imgKey: 'hotel-como',
    name: 'COMO Hotels & Resorts',
    tag: { en: 'Wellness-Forward Minimalism', zh: '极简健康风格' },
    overview: {
      en: 'COMO is the Singapore-based group founded by Christina Ong, with a portfolio that integrates wellness into the hotel experience rather than treating it as an add-on. The COMO Shambhala programme is the signature element across most properties.',
      zh: 'COMO 是由王玲珍创立的新加坡集团，其酒店组合将健康融入住宿体验，而非视为附加。COMO Shambhala 项目是大部分住宿的标志性元素。',
    },
    whyRecommend: {
      en: 'COMO properties combine refined design with genuine wellness integration — yoga, breathwork, nutrition, treatment programmes. The brand suits clients who want wellness as part of their stay without committing to a full medical retreat.',
      zh: 'COMO 的住宿将精致设计与真实的健康融合结合——瑜伽、呼吸法、营养、疗愈项目。它适合希望住宿中包含健康元素、但不想承诺完整医疗静修的客户。',
    },
    bestFor: {
      en: 'Wellness-leaning travellers. Yoga and meditation practitioners. Couples seeking a balanced beach-and-wellness stay. Bhutan, Bali, Maldives and Thailand.',
      zh: '偏好健康的旅行者。瑜伽与冥想习练者。寻求海滩与健康并重的情侣。不丹、巴厘岛、马尔代夫与泰国。',
    },
    highlights: {
      en: ['COMO Shambhala Estate, Bali', 'COMO Uma Paro, Bhutan', 'COMO Maalifushi, Maldives', 'COMO Cocoa Island, Maldives', 'COMO Le Montrachet, Burgundy', 'COMO Castello Del Nero, Tuscany'],
      zh: ['COMO Shambhala 庄园 巴厘岛', 'COMO Uma Paro 不丹', 'COMO Maalifushi 马尔代夫', 'COMO Cocoa Island 马尔代夫', 'COMO Le Montrachet 勃艮第', 'COMO Castello Del Nero 托斯卡纳'],
    },
    ourThoughts: {
      en: 'COMO Uma Paro is one of the most distinctive Bhutan properties. For Maldives wellness, COMO Cocoa Island has a quieter, more intimate feeling than some larger properties. For a Bali stay that combines design, food and wellness, COMO Shambhala Estate remains the reference point.',
      zh: 'COMO Uma Paro 是不丹最具特色的住宿之一。在马尔代夫健康方向，COMO Cocoa Island 比一些大型住宿感觉更宁静、更亲密。在巴厘岛寻找将设计、美食与健康结合的住宿，COMO Shambhala 庄园依然是参照标准。',
    },
  },
  {
    slug: 'aman-maldives-coming-soon',
    category: 'luxury-brands',
    imgKey: 'hotel-aman-maldives-coming-soon',
    name: 'Aman Maldives (Coming Soon)',
    tag: { en: 'Future Opening', zh: '未来开业' },
    overview: {
      en: 'Aman Maldives is an announced future opening in Vaavu Atoll. As at the time of writing this is not an operating resort. For current Aman wellness or beach experiences, we recommend Aman properties in Tokyo, Kyoto, Phuket, Greece or Indonesia.',
      zh: 'Aman 马尔代夫是已宣布的未来开业项目，位于瓦武环礁。撰文时该住宿尚未运营。对于目前的安缦健康或海滩体验，我们推荐位于东京、京都、普吉、希腊或印度尼西亚的安缦住宿。',
    },
    whyRecommend: {
      en: 'We mention Aman Maldives only for clients who have asked specifically about it. Until the property opens and operates for at least one full season, we recommend other Maldives properties for guests seeking Aman-style stillness.',
      zh: '我们仅在客户特别问及时提及 Aman 马尔代夫。在该住宿开业并完整运营至少一个季节之前，我们建议为寻求安缦式宁静的客户推荐其他马尔代夫住宿。',
    },
    bestFor: {
      en: 'Clients prepared to wait for the opening. For current Aman experiences, we recommend Aman Tokyo, Amanjiwo (Java), Amanpuri (Phuket), Amanyara (Turks & Caicos) or Amanzoe (Greece).',
      zh: '愿意等待该项目开业的客户。对于目前的安缦体验，我们推荐 Aman 东京、Amanjiwo（爪哇）、Amanpuri（普吉）、Amanyara（特克斯凯科斯）或 Amanzoe（希腊）。',
    },
    highlights: {
      en: ['Vaavu Atoll location — pristine reef', 'Aman Maldives — future opening', 'For current Aman island experience: Amanpuri (Phuket), Amanyara (Turks & Caicos)'],
      zh: ['位于瓦武环礁——原始珊瑚礁', 'Aman 马尔代夫——未来开业', '当前安缦岛屿体验推荐：Amanpuri（普吉）、Amanyara（特克斯凯科斯）'],
    },
    ourThoughts: {
      en: 'We update this entry as the project progresses. As at the time of writing, the property has not opened. We strongly advise against booking opening-month stays at any new luxury property — the best service is usually two or three seasons in.',
      zh: '我们会随项目进展更新此条目。截至撰文时，该住宿尚未开业。我们强烈建议不要预订任何新开业奢华住宿的开业月——最好的服务通常出现在开业两到三个季节之后。',
    },
  },
];

export function getHotelBySlug(slug) {
  return HOTEL_BRANDS.find(h => h.slug === slug) || null;
}

export function getAllHotelSlugs() {
  return HOTEL_BRANDS.map(h => h.slug);
}
