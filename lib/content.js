// ═══════════════════════════════════════════════════════════════
//  ONE MORE TRAVEL / 玩陌旅行
//  Master content: nav, footer, homepage, about, inquiry
//  Images: see lib/images.js for the complete registry
// ═══════════════════════════════════════════════════════════════

// Re-export pic so existing code that imports from lib/content still works
export { pic, imgAlt, IMAGES } from './images';

export const CONTENT = {

  nav: {
    en: ['Home','Destinations','Hotels & Lodges','Travel Styles','Extraordinary Experiences','Journeys','About Us','Journal','Tailor-Made Inquiry'],
    zh: ['首页','目的地','酒店与别墅','旅行方式','非凡体验','精选行程','关于我们','旅行日记','定制咨询'],
    pages: ['/','/destinations','/hotels','/travel-styles','/experiences','/journeys','/about','/journal','/inquiry'],
    langBtn: { en: '中文', zh: 'EN' },
  },

  footer: {
    tagline: { en: 'Private journeys, designed with care.', zh: '以细节成就每一段私密旅程。' },
    cities: { en: ['Chengdu','Melbourne'], zh: ['成都','墨尔本'] },
    cols: {
      explore: { en: 'Explore',        zh: '探索' },
      travel:  { en: 'How We Travel',  zh: '旅行方式' },
      contact: { en: 'Contact',        zh: '联系方式' },
    },
    copy: {
      en: '© 2025 ONE MORE TRAVEL / 玩陌旅行. All rights reserved.',
      zh: '© 2025 ONE MORE TRAVEL / 玩陌旅行. 保留所有权利。',
    },
  },

  home: {
    heroEyebrow: { en: 'ONE MORE TRAVEL', zh: '玩陌旅行' },
    heroTitle: {
      en: 'Travel, Thoughtfully Designed.',
      zh: '旅行，以思考为起点。',
    },
    heroSub: {
      en: 'Not just where to go — but how to experience it.',
      zh: '旅行，不只是去哪里，而是如何体验。',
    },
    heroCta:    { en: 'Explore Destinations', zh: '探索目的地' },
    heroCtaAlt: { en: 'Start Your Journey',   zh: '开始规划' },

    philLabel: { en: 'Our Philosophy',     zh: '我们的理念' },
    philTitle: {
      en: 'We Design Around\nPeople, Not Products',
      zh: '围绕旅行者本身\n而非行程产品',
    },
    philBody: {
      en: 'Before we suggest a single hotel or destination, we ask: who is travelling, how do they like to move, what matters most to them, and what kind of experience do they want to carry home.\n\nWe consider children\'s ages, travel pace, season, comfort levels, meaningful moments and logistics. Every journey we design is different — because every client is.',
      zh: '在推荐任何酒店或目的地之前，我们首先会问：谁在旅行，他们喜欢怎样的节奏，什么对他们最重要，他们希望带回怎样的感受。\n\n我们关注孩子的年龄、旅行节奏、出行季节、舒适度、有意义的时刻与后勤安排。每一段旅程都有所不同——因为每一位客户都是独一无二的。',
    },

    regionsLabel: { en: 'Explore The World',              zh: '探索世界' },
    regionsTitle: { en: 'Eight Regions,\nEndless Possibilities', zh: '八大区域\n无限可能' },
    regions: {
      en: [
        { name: 'Europe',                 slug: 'europe',     sub: 'Italy · France · Switzerland · Greece',   imgKey: 'region-europe' },
        { name: 'Japan & Asia',           slug: 'japan-asia', sub: 'Japan · Thailand · Bhutan · Vietnam',     imgKey: 'region-japan-asia' },
        { name: 'Australia & NZ',         slug: 'australia',  sub: 'Melbourne · Sydney · Tasmania · NZ',      imgKey: 'region-australia' },
        { name: 'Indian Ocean & Islands', slug: 'islands',    sub: 'Maldives · Seychelles · Bali · Fiji',     imgKey: 'region-islands' },
        { name: 'Africa Safari',          slug: 'africa',     sub: 'Kenya · Tanzania · Botswana · Rwanda',    imgKey: 'region-africa' },
        { name: 'Middle East',            slug: 'middle-east',sub: 'Oman · UAE · Jordan · Saudi Arabia',      imgKey: 'region-middle-east' },
        { name: 'Polar & Expedition',     slug: 'polar',      sub: 'Antarctica · Arctic · Galápagos',         imgKey: 'region-polar' },
        { name: 'Americas',               slug: 'americas',   sub: 'Patagonia · Peru · Chile · Caribbean',    imgKey: 'region-americas' },
      ],
      zh: [
        { name: '欧洲',          slug: 'europe',     sub: '意大利 · 法国 · 瑞士 · 希腊',      imgKey: 'region-europe' },
        { name: '日本与亚洲',    slug: 'japan-asia', sub: '日本 · 泰国 · 不丹 · 越南',        imgKey: 'region-japan-asia' },
        { name: '澳大利亚与新西兰', slug: 'australia', sub: '墨尔本 · 悉尼 · 塔斯马尼亚',    imgKey: 'region-australia' },
        { name: '印度洋与岛屿',  slug: 'islands',    sub: '马尔代夫 · 塞舌尔 · 巴厘岛',       imgKey: 'region-islands' },
        { name: '非洲野生之旅',  slug: 'africa',     sub: '肯尼亚 · 坦桑尼亚 · 博茨瓦纳',     imgKey: 'region-africa' },
        { name: '中东',          slug: 'middle-east',sub: '阿曼 · 阿联酋 · 约旦 · 沙特',      imgKey: 'region-middle-east' },
        { name: '极地与探险',    slug: 'polar',      sub: '南极洲 · 北极 · 加拉帕戈斯',       imgKey: 'region-polar' },
        { name: '美洲',          slug: 'americas',   sub: '巴塔哥尼亚 · 秘鲁 · 智利 · 加勒比', imgKey: 'region-americas' },
      ],
    },

    hotelsLabel: { en: 'Hotels & Lodges',            zh: '酒店与别墅' },
    hotelsTitle: { en: 'Curated Hotel\nInspirations', zh: '精选住宿\n灵感' },
    hotelsNote: {
      en: 'The hotels and lodges featured here are curated highlights, not limitations. Every stay is recommended according to destination, season, travel style and guest preferences.',
      zh: '网站展示酒店为玩陌精选灵感，并非完整合作清单。实际安排中，我们会根据目的地、季节、同行人群与旅行节奏灵活推荐更合适的酒店组合。',
    },
    hotelsSubNote: {
      en: 'These are selected highlights only. Final recommendations vary according to destination, season, travel style and guest preferences.',
      zh: '以下为玩陌精选灵感，并非完整合作清单。实际安排中，我们会根据目的地、季节、同行人群、预算与旅行节奏灵活推荐更合适的酒店组合。',
    },
    hotelsCta: { en: 'Explore Hotels & Lodges', zh: '探索酒店与别墅' },
    hotelsPreview: [
      { name: 'Aman',          slug: 'aman',          imgKey: 'hotel-aman',       tag: { en: 'Quiet Luxury',      zh: '静谧奢华' } },
      { name: 'Four Seasons',  slug: 'four-seasons',  imgKey: 'hotel-four-seasons',tag: { en: 'Family Favourite',  zh: '家庭首选' } },
      { name: 'Safari Lodges', slug: 'safari-lodges', imgKey: 'hotel-safari',     tag: { en: 'Wilderness Camps',  zh: '野生营地' } },
      { name: 'Private Villas',slug: 'private-villas-estates', imgKey: 'hotel-villas', tag: { en: 'Complete Privacy', zh: '完全私密' } },
    ],

    stylesLabel: { en: 'Travel Styles', zh: '旅行方式' },
    stylesTitle: { en: 'How Would\nYou Like to Travel?', zh: '您想以\n哪种方式旅行？' },
    stylesCta:   { en: 'All Travel Styles',          zh: '全部旅行方式' },
    stylesPreview: {
      en: [
        { name: 'School Holidays',      slug: 'school-holidays',  imgKey: 'style-school-holidays' },
        { name: 'Family Journeys',      slug: 'family-journeys',  imgKey: 'style-family' },
        { name: 'Safari & Wilderness',  slug: 'safari-wilderness',imgKey: 'style-safari' },
        { name: 'Slow Luxury',          slug: 'slow-luxury',      imgKey: 'style-slow-luxury' },
      ],
      zh: [
        { name: '学校假期出行', slug: 'school-holidays',  imgKey: 'style-school-holidays' },
        { name: '家庭旅行',    slug: 'family-journeys',  imgKey: 'style-family' },
        { name: '野生地境',    slug: 'safari-wilderness',imgKey: 'style-safari' },
        { name: '慢游奢华',    slug: 'slow-luxury',      imgKey: 'style-slow-luxury' },
      ],
    },

    expLabel: { en: 'Extraordinary Experiences', zh: '非凡体验' },
    expTitle: { en: 'Journeys Beyond\nthe Ordinary',  zh: '超越寻常\n的旅程' },
    expCta:   { en: 'Explore All Experiences',       zh: '探索全部体验' },
    expPreview: [
      { name: { en: 'Luxury Rail',       zh: '豪华列车' },  slug: 'luxury-rail',     imgKey: 'exp-luxury-rail' },
      { name: { en: 'Expedition Cruise', zh: '探险游轮' },  slug: 'expedition-cruise',imgKey: 'exp-expedition' },
      { name: { en: 'Private Jet',       zh: '私人飞机' },  slug: 'private-jet',     imgKey: 'exp-private-jet' },
      { name: { en: 'Safari',            zh: '野生动物' },  slug: 'safari',          imgKey: 'exp-safari' },
      { name: { en: 'Private Villas',    zh: '私人别墅' },  slug: 'private-villas',  imgKey: 'exp-villas' },
      { name: { en: 'Wellness Retreats', zh: '疗愈静修' },  slug: 'wellness-retreats',imgKey: 'exp-wellness' },
    ],

    journeysLabel: { en: 'Signature Journeys', zh: '精选行程' },
    journeysTitle: { en: 'A Few Journeys\nWe Love',    zh: '我们喜爱的\n几段旅程' },
    journeysCta:   { en: 'All Journeys',               zh: '全部行程' },
    journeysPreview: [
      { slug: 'italy-family-summer',    title: { en: 'Italy Family Summer',    zh: '意大利家庭夏日' },    region: { en: 'Europe', zh: '欧洲' },    imgKey: 'journey-italy-family' },
      { slug: 'japan-winter-family',    title: { en: 'Japan Winter Journey',   zh: '日本冬日行旅' },      region: { en: 'Japan',  zh: '日本' },    imgKey: 'journey-japan-winter' },
      { slug: 'maldives-island-escape', title: { en: 'Maldives Island Escape', zh: '马尔代夫岛屿私游' }, region: { en: 'Islands',zh: '岛屿' },   imgKey: 'journey-maldives' },
      { slug: 'africa-safari-beach',    title: { en: 'Africa Safari & Beach',  zh: '非洲野生与海滩' },   region: { en: 'Africa', zh: '非洲' },    imgKey: 'journey-africa' },
    ],

    whyLabel: { en: 'Why One More Travel', zh: '为何选择玩陌旅行' },
    whyTitle: {
      en: 'What We Bring\nto Every Journey',
      zh: '我们为每段旅程\n带来什么',
    },
    whyItems: {
      en: [
        { t: 'Founded 2018',               d: 'Over six years designing private journeys — with accumulated hotel knowledge, supplier relationships and real travel wisdom.' },
        { t: 'Chengdu + Melbourne',         d: 'Two offices, two markets, one consistent standard. We bridge East and West, and communicate across time zones.' },
        { t: 'Global Hotel Network',        d: 'We know properties from the inside — room categories, seasonal nuances, which teams go further, and how to place requests that are acted upon.' },
        { t: 'Private Ground Execution',    d: 'Airport arrivals, driver-guides, hotel coordination and on-trip support — handled quietly and reliably.' },
        { t: 'Family & Multi-Generational', d: 'Extensive experience planning complex family journeys across generations, destinations and logistical requirements.' },
        { t: 'Bilingual Service',           d: 'Fluent in Mandarin and English, client-facing and supplier-facing. Nothing is lost in translation.' },
        { t: 'ILTM Buyer Background',       d: 'Our team has attended ILTM Singapore and ILTM Cannes — direct relationships with global luxury hotel professionals.' },
        { t: 'No Fixed Packages',           d: 'We do not sell pre-built itineraries. Every journey is designed from scratch around the specific people making the trip.' },
      ],
      zh: [
        { t: '创立于2018年',   d: '六年来为挑剔的客户设计私密旅程——积累了深厚的酒店知识、供应商关系与真实的旅行智慧。' },
        { t: '成都与墨尔本双城布局', d: '两个办公室、两个市场、一贯如一的标准。我们连接东西方，跨越时区有效沟通。' },
        { t: '全球顶级酒店网络', d: '我们了解住宿的真实面貌——客房类别、季节差异、哪支团队愿意多走一步，以及如何提出真正会被落实的请求。' },
        { t: '私人地面执行',   d: '机场接机、司导安排、酒店协调与旅途支持——低调而可靠地处理好每个细节。' },
        { t: '家庭与多代同行', d: '在跨代、跨目的地、多重后勤要求的复杂家庭旅行方面积累了丰富经验。' },
        { t: '中英双语服务',   d: '精通中文与英文——无论面向客户还是供应商。不因语言产生误解，每一个偏好都被准确传达。' },
        { t: 'ILTM买手背景',  d: '我们的团队参加过ILTM新加坡与ILTM戛纳，与全球顶级酒店和旅行专业人士建立了直接关系。' },
        { t: '无固定套餐',    d: '我们不销售预设行程。每段旅程都围绕具体的旅行者从零开始设计。' },
      ],
    },

    ctaTitle: { en: 'Tell Us How\nYou Like to Travel', zh: '告诉我们\n您理想的旅行方式' },
    ctaSub:   { en: 'We will design from there.',       zh: '剩下的由我们为您慢慢设计。' },
    ctaBtn:   { en: 'Start Your Journey',               zh: '开始规划' },
    whoStat: { en: ['2018','Founded · Chengdu'], zh: ['2018','创立于成都'] },
  },

  about: {
    heroTitle: { en: 'About Us',   zh: '关于我们' },
    heroSub: {
      en: 'An independent boutique luxury travel company, founded in Chengdu in 2018.',
      zh: '一家于2018年创立于成都的独立精品旅行公司。',
    },
    sections: {
      en: [
        { label: 'Our Story',    title: 'Built Around the Idea\nThat Travel Can Be Different', body: 'ONE MORE TRAVEL was founded in Chengdu in 2018 on a simple premise: that the best travel experiences are not found in a brochure — they are designed around the people making the journey.\n\nOver six years, we have grown into a trusted boutique travel company with a presence in Melbourne, designing private journeys for clients across Greater China, Australia and beyond. We attend ILTM Singapore and ILTM Cannes, which gives us direct access to the world\'s leading luxury hotels, safari lodges and travel specialists.' },
        { label: 'How We Work',  title: 'The Work Happens\nBefore You Arrive', body: 'Our process begins with conversation — understanding who is travelling, what pace suits them, which moments matter most and what kind of experience they want to carry home.\n\nFrom there, we build an itinerary from scratch. We select hotels based on destination knowledge, seasonal factors and guest preferences. We coordinate arrivals, transfers and guides. We communicate with property teams before you arrive. And we remain available throughout your journey.\n\nWe communicate with clients via WeChat, email or call — whichever is most natural. Daily itinerary notes, driver and guide coordination, hotel check-in support — all of this is part of the service.' },
        { label: 'Our Expertise',title: 'Global Reach,\nPersonal Execution', body: 'We arrange journeys across Europe, Japan, Australia, the Maldives, Africa, the polar regions and beyond. Our team has direct relationships with hotel sales teams, private villa managers, expedition specialists and local ground partners built over years of careful, consistent work.\n\nWe are fluent in Mandarin and English — which means nothing is lost in communication between clients, suppliers and the properties themselves. This is rarely a small thing.' },
      ],
      zh: [
        { label: '我们的故事',   title: '因为相信旅行\n可以有所不同', body: '玩陌旅行于2018年创立于成都，源于一个朴素的前提：最好的旅行体验不在于画册，而在于围绕旅行者本身去设计。\n\n六年来，我们已成长为一家受信赖的精品旅行公司，在澳大利亚墨尔本设有业务，为大中华区、澳大利亚及全球的客户设计私密旅程。我们参加ILTM新加坡与ILTM戛纳，与全球顶级酒店、野生营地及旅行专家保持直接联系。' },
        { label: '我们如何工作', title: '真正的工作\n在您抵达之前就已完成', body: '我们的过程始于对话——了解谁在旅行、什么节奏适合他们、哪些时刻最重要，以及他们希望带回怎样的感受。\n\n之后，我们从零开始构建行程。我们根据目的地知识、季节因素与客户偏好甄选酒店。我们协调接机、专车与向导。我们在您抵达前与住宿团队沟通。全程旅途中我们随时待命。\n\n我们通过微信、邮件或电话与客户沟通——以最自然的方式。每日行程备注、司导协调、酒店入住支持——这些都是服务的一部分。' },
        { label: '我们的专业',   title: '全球触达\n个人执行', body: '我们为欧洲、日本、澳大利亚、马尔代夫、非洲、极地及更多目的地安排旅程。我们的团队与酒店销售团队、私人别墅管理方、探险专家及当地地接商建立了多年深厚的直接关系。\n\n我们精通中文与英文——这意味着客户、供应商与住宿之间的沟通不会因语言产生误差。这往往并非小事。' },
      ],
    },
    approach: {
      label: { en: 'Our Approach',              zh: '我们的方式' },
      title: { en: 'Four Steps to\nEvery Journey', zh: '每段旅程的\n四个步骤' },
      steps: {
        en: [
          { n:'01', t:'Understand You',          d:'We start with a conversation — not a booking form. We want to understand who is travelling, how they like to move, what kind of experiences resonate, and what would make this journey genuinely memorable.' },
          { n:'02', t:'Curate Thoughtfully',     d:'We select destinations, hotels, guides and experiences based on your specific brief — not from a fixed catalogue. Seasonal timing, property knowledge and personal preferences all shape the proposal.' },
          { n:'03', t:'Refine The Details',      d:'Once the framework is agreed, we focus on the details: room categories, arrival preferences, guide profiles, restaurant recommendations and coordination with property teams.' },
          { n:'04', t:'Travel With Confidence',  d:'Throughout your journey, we are available via WeChat or call — for adjustments, on-trip support, restaurant assistance or simply a reassuring answer when something unexpected happens.' },
        ],
        zh: [
          { n:'01', t:'了解您',         d:'我们从对话开始，而非预订表格。我们想了解谁在旅行、他们喜欢怎样的移动方式、什么样的体验能引起共鸣，以及什么能让这段旅程真正令人难忘。' },
          { n:'02', t:'用心甄选',       d:'我们根据您的具体需求选择目的地、酒店、向导与体验——而非固定目录。季节时机、住宿专业知识与个人偏好共同塑造方案。' },
          { n:'03', t:'打磨细节',       d:'框架确定后，我们专注于细节：客房类别、抵达偏好、向导资质、餐厅推荐以及与住宿团队的协调。' },
          { n:'04', t:'满怀信心地旅行', d:'全程旅途中，我们通过微信或电话随时待命——应对调整、旅途支持、餐厅协助，或在意外发生时给予让人安心的回应。' },
        ],
      },
    },
    offLabel: { en: 'Our Presence', zh: '我们的城市' },
    offices: {
      en: [
        { city:'Chengdu',   desc:'Our founding office since 2018. Chengdu\'s sophisticated lifestyle and international outlook inform how we think about travel, design and hospitality.', imgKey:'about-chengdu' },
        { city:'Melbourne', desc:'Our Australian home — a city of culture, architecture, great food and natural beauty that shapes how we approach experiential design.',                  imgKey:'about-melbourne' },
      ],
      zh: [
        { city:'成都',   desc:'我们自2018年创立至今的根据地。成都的精致生活方式与国际视野，深刻塑造了我们对旅行、设计与待客之道的理解。',     imgKey:'about-chengdu' },
        { city:'墨尔本', desc:'我们的澳大利亚据点——这座以文化、建筑、美食与自然风光著称的城市，持续影响着我们的体验设计思路。',                imgKey:'about-melbourne' },
      ],
    },
    sectionsImgKeys: ['about-1','about-2','about-3'],
  },

  inquiry: {
    heroTitle: { en: 'Tailor-Made Inquiry', zh: '定制咨询' },
    heroSub: {
      en: 'Tell us how you like to travel. We will design from there.',
      zh: '告诉我们您理想中的旅行方式，剩下的由我们为您慢慢设计。',
    },
    introLabel: { en: 'Let\'s Start Planning',   zh: '开始规划' },
    introTitle: {
      en: 'Every Journey Begins\nWith a Conversation',
      zh: '每段旅程\n始于一次对话',
    },
    introBody: {
      en: 'There is no standard form here — we would genuinely like to understand how you travel before we suggest a single destination or hotel. The more you share, the better we can design around you.',
      zh: '这里没有标准表格——在我们推荐任何目的地或酒店之前，我们真心希望了解您的旅行方式。您分享得越多，我们便能为您设计得越贴切。',
    },
    thankTitle: { en: 'Thank You',   zh: '感谢您的咨询' },
    thankBody: {
      en: 'We look forward to thoughtfully designing your journey.',
      zh: '感谢您的咨询，我们会尽快与您联系，并一起慢慢设计这段旅程。',
    },
    submit: { en: 'Send Enquiry', zh: '发送咨询' },
    note:   { en: 'We respond within one business day. Your information is kept entirely private.', zh: '我们将在一个工作日内回复。您的信息将完全保密。' },
    fields: {
      en: { name:'Your Name', wechat:'WeChat / WhatsApp / Phone', email:'Email Address', departure:'Departure City', interests:'Travel Interests', dest:'Destination Interests', dates:'Travel Dates', travelers:'Number of Travellers', children:"Children's Ages (if any)", style:'Travel Style', hotel:'Hotel Preference', budget:'Estimated Budget Range', occasion:'Special Occasion', notes:'Anything Important We Should Know' },
      zh: { name:'您的姓名', wechat:'微信号 / WhatsApp / 电话', email:'邮箱地址', departure:'出发城市', interests:'旅行兴趣', dest:'目的地方向', dates:'出行时间', travelers:'出行人数', children:'孩子年龄（如有）', style:'旅行方式', hotel:'住宿偏好', budget:'预算范围', occasion:'特殊场合', notes:'其他重要信息' },
    },
    styleOptions: {
      en: ['— Select style —','School Holidays & Family Escapes','Family Journeys','Culture & Discovery','Safari & Wilderness','Island Escapes','Celebration Journeys','Slow Luxury','Wellness & Longevity','Expedition & Polar','Other / Not Sure Yet'],
      zh: ['— 请选择 —','学校假期出行','家庭旅行','文化探索','野生地境','岛屿度假','庆典旅行','慢游奢华','健康静修','极地探险','其他 / 暂未确定'],
    },
    budgetOptions: {
      en: ['— Select range —','Under USD 5,000','USD 5,000–10,000','USD 10,000–20,000','USD 20,000–50,000','USD 50,000+','Prefer not to say'],
      zh: ['— 请选择 —','5万人民币以内','5–10万人民币','10–20万人民币','20–50万人民币','50万人民币以上','暂不说明'],
    },
  },
};
