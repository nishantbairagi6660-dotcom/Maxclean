import { ServiceItem, FAQItem, GalleryItem } from '../types';

export const BUSINESS_INFO = {
  name: 'Maxclean',
  tagline: "Feel Your Home's Freshness",
  category: 'House Cleaning Service',
  address: 'Alvertou, Paphos, Pafos 8015, Cyprus',
  city: 'Paphos',
  country: 'Cyprus',
  phoneDisplay: '+357 96 066878',
  phoneHref: 'tel:+35796066878',
  whatsappHref: 'https://wa.me/35796066878',
  whatsappRaw: '35796066878',
  googleMapsUrl: 'https://maps.app.goo.gl/BghMAqBCjaZFnef78?g_st=ac',
  heroTrustLine: 'Home Cleaning • Deep Cleaning • Villa Cleaning',
  credits: 'Website demo prepared for Maxclean by Nexovia Media',
};

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'regular-house-cleaning',
    title: 'Regular House Cleaning',
    description: 'Routine cleaning to keep your living spaces fresh, tidy, and comfortable on your preferred schedule.',
    iconName: 'Home',
    category: 'residential',
    note: 'Flexible frequency tailored to your home',
  },
  {
    id: 'deep-cleaning',
    title: 'Deep Cleaning',
    description: 'A detailed clean for areas needing extra attention, including kitchens, bathrooms, and detailed surface care.',
    iconName: 'Sparkles',
    category: 'residential',
    note: 'Ideal for seasonal resets & intensive refreshes',
  },
  {
    id: 'apartment-cleaning',
    title: 'Apartment Cleaning',
    description: 'Cleaning tailored to apartments, including living rooms, bedrooms, kitchens, and bathrooms.',
    iconName: 'Building2',
    category: 'residential',
    note: 'Convenient scheduling for studios & flats',
  },
  {
    id: 'villa-cleaning',
    title: 'Villa Cleaning',
    description: 'Cleaning for larger residences and villas in Paphos, with scope agreed according to property size and layout.',
    iconName: 'Castle',
    category: 'residential',
    note: 'Complete coverage for multi-room villas',
  },
];

export const ADDITIONAL_SERVICES: ServiceItem[] = [
  {
    id: 'holiday-rental-turnover',
    title: 'Holiday Rental / Turnover Cleaning',
    description: 'Cleaning between guest stays to help prepare your property for the next arrival. Availability confirmed directly.',
    iconName: 'KeyRound',
    category: 'rental',
    note: 'Confirmed with Maxclean based on calendar',
  },
  {
    id: 'move-in-move-out',
    title: 'Move-In / Move-Out Cleaning',
    description: 'Detailed clean before moving into a new property or after moving out, subject to an agreed checklist.',
    iconName: 'Truck',
    category: 'residential',
    note: 'Thorough handover preparation',
  },
  {
    id: 'window-cleaning',
    title: 'Window Cleaning',
    description: 'Cleaning of accessible windows and glass patio surfaces, if offered by the business.',
    iconName: 'Sun',
    category: 'specialist',
    note: 'Subject to accessibility confirmation',
  },
  {
    id: 'office-commercial',
    title: 'Office and Commercial Cleaning',
    description: 'Cleaning for offices and small business premises in Paphos, if offered by Maxclean.',
    iconName: 'Briefcase',
    category: 'specialist',
    note: 'Tailored for workspaces & studios',
  },
];

export const ALL_SERVICES = [...CORE_SERVICES, ...ADDITIONAL_SERVICES];

export const THREE_BENEFITS = [
  {
    title: 'Personalised Cleaning',
    description: 'Every residence is unique. We tailor the cleaning checklist and focus areas around your specific property and lifestyle.',
    iconName: 'Sparkles',
  },
  {
    title: 'Attention to Detail',
    description: 'From spotless kitchen surfaces to fresh bathroom tiles, our systematic approach ensures high standards of care.',
    iconName: 'CheckCircle2',
  },
  {
    title: 'Convenient Communication',
    description: 'Easy direct communication via phone or WhatsApp. Discuss your requirements, schedule, and quote without delays.',
    iconName: 'MessageSquare',
  },
];

export const WHY_CHOOSE_ITEMS = [
  {
    title: 'Attention to Detail',
    description: 'A clear cleaning checklist helps define the specific areas to be covered for your home.',
    iconName: 'CheckCircle2',
  },
  {
    title: 'Flexible Cleaning Needs',
    description: 'Discuss the service and schedule that suit your property, from one-off cleans to recurring visits.',
    iconName: 'SlidersHorizontal',
  },
  {
    title: 'Clear Communication',
    description: 'Make it easy to explain your requirements and property priorities before the visit begins.',
    iconName: 'MessageSquare',
  },
  {
    title: 'Simple Quote Requests',
    description: 'Contact Maxclean directly to discuss the work and receive a straightforward, honest quote.',
    iconName: 'FileText',
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    stepNumber: '01',
    title: 'Contact Maxclean',
    description: 'Reach out via phone, WhatsApp, or our online quote form to introduce your property.',
    iconName: 'PhoneCall',
  },
  {
    stepNumber: '02',
    title: 'Discuss Your Cleaning Needs',
    description: 'Share details about your home, number of rooms, and any specific areas needing focus.',
    iconName: 'ClipboardList',
  },
  {
    stepNumber: '03',
    title: 'Receive Your Personalised Quote',
    description: 'Get a clear, direct quote and confirm a date that suits your schedule.',
    iconName: 'Sparkles',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: 'Sunlit Living Room & Terrace',
    category: 'Living Spaces',
    image: '/images/hero_clean_villa_living_1792220476225.jpg',
    description: 'Pristine tiled floors, crystal clean glass doors, and inviting Mediterranean living spaces.',
  },
  {
    id: '2',
    title: 'Fresh & Crisp Bedroom Suite',
    category: 'Living Spaces',
    image: '/images/about_clean_bedroom_1792221222996.jpg',
    description: 'Spotless wooden flooring, fresh white bed linen, and calm sunlit atmosphere.',
  },
  {
    id: '3',
    title: 'Spotless Island & Countertops',
    category: 'Kitchens',
    image: '/images/gallery_spotless_kitchen_1792220477336.jpg',
    description: 'Polished quartz counters, gleaming chrome faucets, and immaculately wiped cabinetry.',
  },
  {
    id: '4',
    title: 'Pristine Bathroom Vanity & Glass',
    category: 'Bathrooms',
    image: '/images/gallery_bright_bathroom_1792220476971.jpg',
    description: 'Clean transparent shower glass, fresh towels, sanitized fixtures, and gleaming tiles.',
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'What cleaning services can I request from Maxclean?',
    answer: 'You can request regular house cleaning, deep cleaning, apartment and villa cleaning, as well as move-in/out and turnover cleans. Specific cleaning requirements are confirmed directly with Maxclean based on your property.',
  },
  {
    question: 'How do I request a personalized quote?',
    answer: 'Simply complete the quote form on this page or send a message directly on WhatsApp at +357 96 066878. Share your property type and cleaning priorities to receive a direct quote.',
  },
  {
    question: 'Can I book a one-time deep clean?',
    answer: 'Yes! One-time deep cleans are popular for seasonal refreshes, moving into a new residence, or preparing for visiting family and guests.',
  },
  {
    question: 'Do you clean both apartments and large villas?',
    answer: 'Yes, we cater to apartments, townhouses, and detached villas across the Paphos area. Property size and room counts are reviewed before confirming the visit.',
  },
  {
    question: 'Do you clean holiday rentals and Airbnbs in Paphos?',
    answer: 'Yes, turnover cleaning between guest bookings can be requested. Please contact Maxclean in advance to confirm scheduling availability around check-in times.',
  },
  {
    question: 'Which areas in Paphos do you cover?',
    answer: 'Maxclean is located at Alvertou, Paphos 8015, Cyprus. We focus on Paphos and surrounding residential areas. Please contact us to confirm your specific address.',
  },
  {
    question: 'How can I contact Maxclean directly?',
    answer: 'You can call us directly on +357 96 066878, message us via WhatsApp on +357 96 066878, or submit an enquiry using the quote request form.',
  },
];
