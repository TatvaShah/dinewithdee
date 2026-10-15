import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "DINE WITH DEE",
  tagline: "Caribbean fusion catering and pop up plates in East Brampton, Ontario.",
  category: "Caribbean fusion catering",
  schemaType: "FoodEstablishment",
  area: "East Brampton, ON",
  siteUrl: "https://dinewithdee.vercel.app",

  theme: {
    preset: "catering-events",
    wordmark: "script",
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "East Brampton, Ontario",
    headline: "Caribbean fusion for your celebration",
    subhead:
      "Catering and pop up plates with Caribbean fusion flavours. Minimum 2 weeks notice for catering. DM to lock in your date.",
    images: [
      { src: "/images/post-5.jpg", alt: "Caribbean fusion catering spread", width: 1080, height: 1260 },
      { src: "/images/post-1.jpg", alt: "Holiday catering trays", width: 1080, height: 1440 },
      { src: "/images/post-8.jpg", alt: "Sweet 16 catering spread", width: 1080, height: 1440 },
    ],
    secondaryCta: { label: "See the work", href: "#gallery" },
  },

  highlights: [
    "Caribbean fusion cuisine",
    "Catering and pop up plates",
    "East Brampton, Ontario",
    "Minimum 2 weeks notice for catering",
  ],

  about: {
    title: "Catering with Caribbean soul",
    body: [
      "DINE WITH DEE brings Caribbean fusion style cuisine to East Brampton and the GTA. From birthday parties and baby showers to micro weddings and holiday gatherings, every tray is made to celebrate.",
      "Accepting orders for November and December. Catering needs at least 2 weeks notice. Send a DM to lock in your date.",
    ],
    image: { src: "/images/post-4.jpg", alt: "Jerk pork off menu special", width: 1080, height: 1922 },
  },

  menu: {
    label: "What we offer",
    title: "Catering and pop ups",
    intro: "Caribbean fusion catering tailored to your event. Message for a custom menu and quote.",
    variant: "list",
    showPrices: false,
    priceNote: "DM for a quote based on your date and guest count.",
    groups: [
      {
        title: "Services",
        items: [
          { name: "Event catering", description: "Minimum 2 weeks notice required." },
          { name: "Pop up plates", description: "Caribbean fusion style cuisine." },
        ],
      },
    ],
  },

  gallery: {
    title: "From recent events",
    items: [
      { src: "/images/post-1.jpg", width: 1080, height: 1440, alt: "Holiday catering orders open", caption: "November and December bookings", href: "https://www.instagram.com/p/Dec9AntDVyh/" },
      { src: "/images/post-5.jpg", width: 1080, height: 1260, alt: "Catering spread ready to serve", caption: "DM to book", href: "https://www.instagram.com/p/DcHQONqm94p/" },
      { src: "/images/post-8.jpg", width: 1080, height: 1440, alt: "Sweet 16 catering", caption: "Sweet 16 vibes", href: "https://www.instagram.com/p/DbZQ8hat9yd/" },
      { src: "/images/post-4.jpg", width: 1080, height: 1922, alt: "Jerk pork special", caption: "Off menu jerk pork", href: "https://www.instagram.com/p/DcuISlbS-Zz/" },
      { src: "/images/post-2.jpg", width: 886, height: 1572, alt: "Special celebration catering", caption: "Celebration catering", href: "https://www.instagram.com/p/DdSHC3mSqBc/" },
      { src: "/images/post-3.jpg", width: 796, height: 1410, alt: "Birthday catering", caption: "Birthday bookings", href: "https://www.instagram.com/p/DdCrYJTySuP/" },
      { src: "/images/post-6.jpg", width: 720, height: 1280, alt: "Rasta pasta plate", caption: "Waiting for you", href: "https://www.instagram.com/p/DcG2jeGugoW/" },
      { src: "/images/post-7.jpg", width: 720, height: 1280, alt: "Saltfish and callaloo", caption: "Saltfish and callaloo", href: "https://www.instagram.com/p/Db4ZnLKtU38/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "_dinewithdee",
    embeds: [
      "https://www.instagram.com/p/Dec9AntDVyh/",
      "https://www.instagram.com/p/DcHQONqm94p/",
      "https://www.instagram.com/p/DbZQ8hat9yd/",
    ],
    embedsTitle: "Fresh from Instagram",
  },

  order: {
    title: "Book your date by DM",
    intro:
      "Send a DM with your event date, guest count, and style of catering. Tap the button to copy a starter message.",
    dmMessage:
      "Hi Dee! I would like to book catering.\nEvent date:\nGuest count or servings:\nType of event (birthday, baby shower, micro wedding, holiday):\nAny dish ideas or dietary needs:\n",
    links: [],
    note: "Minimum 2 weeks notice required for catering. Accepting November and December orders.",
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I book?", a: "Send an Instagram DM with your event date, guest count, and what you need. We will confirm details in chat." },
    { q: "How much notice do you need?", a: "Catering requires a minimum of 2 weeks notice." },
    { q: "Where are you based?", a: "East Brampton, Ontario. We cater across the GTA." },
    { q: "Do you do pop ups as well as full catering?", a: "Yes. We offer both catering and pop up plates in a Caribbean fusion style." },
  ],

  contact: {
    area: "East Brampton, Ontario",
    socials: [],
  },

  seo: {
    title: "DINE WITH DEE | Caribbean fusion catering in Brampton",
    description:
      "Caribbean fusion catering and pop up plates in East Brampton, ON. Birthdays, baby showers, micro weddings, and holidays. DM to book with 2 weeks notice.",
    keywords: [
      "Brampton catering",
      "Caribbean fusion catering GTA",
      "pop up plates Brampton",
      "micro wedding catering Brampton",
    ],
    ogPhoto: "/images/og-photo.jpg",
  },
};
