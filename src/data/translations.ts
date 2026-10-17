import { ServiceItem, FAQItem, GalleryItem } from '../types';

export interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    whyUs: string;
    reviews: string;
    faqs: string;
    contact: string;
    getQuote: string;
    callNow: string;
    whatsApp: string;
  };
  hero: {
    badge: string;
    homeCleaning: string;
    deepCleaning: string;
    villaCleaning: string;
    headlinePart1: string;
    headlineHighlight: string;
    subtext: string;
    ctaPrimary: string;
    ctaSecondary: string;
    verifiedLocation: string;
    quoteBased: string;
    tailoredChecklists: string;
    overlayTitle: string;
    overlaySubtitle: string;
  };
  benefits: {
    kicker: string;
    title: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
      iconName: string;
    }[];
  };
  services: {
    kicker: string;
    title: string;
    subtitle: string;
    coreTab: string;
    additionalTab: string;
    disclaimerTitle: string;
    disclaimerText: string;
    quoteModel: string;
    requestQuote: string;
    customPrompt: string;
    customLink: string;
    customSuffix: string;
    coreItems: ServiceItem[];
    additionalItems: ServiceItem[];
  };
  about: {
    kicker: string;
    title: string;
    p1: string;
    p2: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    badgeTitle: string;
    badgeSub: string;
    ctaQuote: string;
    callUs: string;
  };
  whyChoose: {
    kicker: string;
    title: string;
    subtitle: string;
    principle: string;
    verifiedStandard: string;
    items: {
      title: string;
      description: string;
      iconName: string;
    }[];
  };
  howItWorks: {
    kicker: string;
    title: string;
    subtitle: string;
    cta: string;
    steps: {
      stepNumber: string;
      title: string;
      description: string;
      iconName: string;
    }[];
  };
  gallery: {
    kicker: string;
    title: string;
    subtitle: string;
    disclaimer: string;
    categories: string[];
    standardBadge: string;
    items: GalleryItem[];
  };
  reviews: {
    kicker: string;
    title: string;
    subtitle: string;
    badgeGoogle: string;
    ratingText: string;
    cardTitle: string;
    cardSubtitle: string;
    cardBody: string;
    btnText: string;
    honestNote: string;
    verifiedLabel: string;
  };
  serviceArea: {
    kicker: string;
    title: string;
    description: string;
    addressTitle: string;
    confirmationTitle: string;
    confirmationText: string;
    viewMaps: string;
    districtTitle: string;
    districtSub: string;
    paphosAreas: { name: string; status: string }[];
    checkWaBtn: string;
  };
  faqs: {
    kicker: string;
    title: string;
    subtitle: string;
    haveQuestion: string;
    haveQuestionSub: string;
    callBtn: string;
    items: FAQItem[];
  };
  quoteForm: {
    kicker: string;
    title: string;
    subtitle: string;
    instantChat: string;
    instantChatTitle: string;
    phoneTitle: string;
    hubTitle: string;
    transparentNote: string;
    cardTitle: string;
    cardSubtitle: string;
    fullName: string;
    fullNameReq: string;
    fullNamePlaceholder: string;
    phone: string;
    phoneReq: string;
    phonePlaceholder: string;
    email: string;
    emailOptional: string;
    location: string;
    locationReq: string;
    locationPlaceholder: string;
    propertyType: string;
    service: string;
    frequency: string;
    preferredDate: string;
    optional: string;
    additionalDetails: string;
    additionalDetailsPlaceholder: string;
    consentText: string;
    submitBtn: string;
    submittingBtn: string;
    prefillWaBtn: string;
    directNote: string;
    successTitle: string;
    successSub: (name: string, service: string, loc: string) => string;
    summaryTitle: string;
    propertyLabel: string;
    serviceLabel: string;
    locationLabel: string;
    dateLabel: string;
    sendWaBtn: string;
    anotherRequestBtn: string;
    errors: {
      fullName: string;
      phone: string;
      phoneInvalid: string;
      location: string;
      consent: string;
    };
    frequencies: { value: string; label: string }[];
    propertyTypes: { value: string; label: string }[];
  };
  stickyMobile: {
    call: string;
    whatsapp: string;
  };
  footer: {
    desc: string;
    categoryLabel: string;
    navHeading: string;
    contactHeading: string;
    googleMapsListing: string;
    rights: string;
    credits: string;
    privacyBtn: string;
  };
  privacyModal: {
    title: string;
    s1Title: string;
    s1Text: string;
    s2Title: string;
    s2Text: string;
    s3Title: string;
    s3Text: string;
    s4Title: string;
    s4Text: string;
    closeBtn: string;
  };
}

export const TRANSLATIONS: Record<'en' | 'el', Translations> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      whyUs: 'Why Choose Us',
      reviews: 'Reviews',
      faqs: 'FAQs',
      contact: 'Contact',
      getQuote: 'Get a Free Quote',
      callNow: 'Call Now',
      whatsApp: 'WhatsApp',
    },
    hero: {
      badge: 'Maxclean Paphos',
      homeCleaning: 'Home Cleaning',
      deepCleaning: 'Deep Cleaning',
      villaCleaning: 'Villa Cleaning',
      headlinePart1: 'Feel Your',
      headlineHighlight: "Home's Freshness",
      subtext:
        'Professional cleaning for homes, apartments and villas in Paphos. Enjoy a fresh, comfortable space with cleaning tailored to your needs.',
      ctaPrimary: 'Get a Free Quote',
      ctaSecondary: 'Chat on WhatsApp',
      verifiedLocation: 'Alvertou, Paphos 8015, Cyprus',
      quoteBased: 'Quote-Based • No Hidden Fees',
      tailoredChecklists: 'Tailored Cleaning Checklists',
      overlayTitle: 'Spotless Living Standard',
      overlaySubtitle: 'Residential and villa cleaning in Paphos',
    },
    benefits: {
      kicker: 'Our Commitment',
      title: 'Cleaning Made Simple & Reliable',
      subtitle: 'Experience seamless home care designed around your property in Paphos.',
      items: [
        {
          title: 'Personalised Cleaning',
          description:
            'Every home is unique. We tailor the cleaning checklist and focus areas around your specific property and schedule.',
          iconName: 'Sparkles',
        },
        {
          title: 'Attention to Detail',
          description:
            'From spotless kitchen surfaces to fresh bathroom tiles, our thorough approach ensures high standards of care.',
          iconName: 'CheckCircle2',
        },
        {
          title: 'Convenient Communication',
          description:
            'Easy direct contact via phone or WhatsApp. Discuss your requirements, schedule, and quote without delay.',
          iconName: 'MessageSquare',
        },
      ],
    },
    services: {
      kicker: 'Our Core Cleaning Services',
      title: 'Tailored Services for Every Property',
      subtitle:
        'Professional cleaning solutions designed for homes, apartments, and private villas in Paphos.',
      coreTab: 'Primary Services',
      additionalTab: 'Additional Services (On Request)',
      disclaimerTitle: 'Scope Notice:',
      disclaimerText:
        'Core residential cleaning services are tailored to your property. Additional specialized services are confirmed individually with Maxclean.',
      quoteModel: 'Personalised Quote',
      requestQuote: 'Request a Quote',
      customPrompt: 'Need custom cleaning or special arrangements?',
      customLink: 'Submit custom details',
      customSuffix: 'for a direct assessment.',
      coreItems: [
        {
          id: 'regular-house-cleaning',
          title: 'Regular House Cleaning',
          description:
            'Routine cleaning to keep your living spaces fresh, tidy, and comfortable on your preferred schedule.',
          iconName: 'Home',
          category: 'residential',
          note: 'Flexible schedule tailored to your residence',
        },
        {
          id: 'deep-cleaning',
          title: 'Deep Cleaning',
          description:
            'A detailed clean for areas needing extra attention, including kitchens, bathrooms, and detailed surface care.',
          iconName: 'Sparkles',
          category: 'residential',
          note: 'Ideal for seasonal resets & intensive refreshes',
        },
        {
          id: 'apartment-cleaning',
          title: 'Apartment Cleaning',
          description:
            'Cleaning tailored to apartments, including living rooms, bedrooms, kitchens, and bathrooms.',
          iconName: 'Building2',
          category: 'residential',
          note: 'Convenient scheduling for studios & flats',
        },
        {
          id: 'villa-cleaning',
          title: 'Villa Cleaning',
          description:
            'Cleaning for larger residences and villas in Paphos, with scope agreed according to property size and layout.',
          iconName: 'Castle',
          category: 'residential',
          note: 'Complete coverage for multi-room villas',
        },
      ],
      additionalItems: [
        {
          id: 'holiday-rental-turnover',
          title: 'Holiday Rental / Turnover Cleaning',
          description:
            'Cleaning between guest stays to help prepare your property for the next arrival. Availability confirmed directly.',
          iconName: 'KeyRound',
          category: 'rental',
          note: 'Confirmed with Maxclean based on calendar',
        },
        {
          id: 'move-in-move-out',
          title: 'Move-In / Move-Out Cleaning',
          description:
            'Detailed clean before moving into a new property or after moving out, subject to an agreed checklist.',
          iconName: 'Truck',
          category: 'residential',
          note: 'Thorough handover preparation',
        },
        {
          id: 'window-cleaning',
          title: 'Window Cleaning',
          description:
            'Cleaning of accessible windows and glass patio surfaces, if offered by the business.',
          iconName: 'Sun',
          category: 'specialist',
          note: 'Subject to accessibility confirmation',
        },
        {
          id: 'office-commercial',
          title: 'Office and Commercial Cleaning',
          description:
            'Cleaning for offices and small business premises in Paphos, if offered by Maxclean.',
          iconName: 'Briefcase',
          category: 'specialist',
          note: 'Tailored for workspaces & studios',
        },
      ],
    },
    about: {
      kicker: 'About Maxclean',
      title: 'Dedicated Cleaning for Paphos Homes & Villas',
      p1: 'At Maxclean, our goal is to help homeowners, apartment dwellers, and villa hosts enjoy cleaner, fresher, and more comfortable living spaces. Whether you require a routine freshen-up or a meticulous deep clean, our service begins with understanding your home and expectations.',
      p2: 'We take pride in direct, honest communication from your first inquiry. You receive a clear scope of work and a transparent quote so you always know what to expect before our visit begins.',
      pillar1Title: 'Personalised Approach',
      pillar1Desc: 'Checklists tailored to your property size, materials, and living routine.',
      pillar2Title: 'Clear Quotes',
      pillar2Desc: 'No hidden fees or unexpected costs. Every clean is confirmed in advance.',
      badgeTitle: 'Alvertou, Paphos 8015',
      badgeSub: 'Verified Local Business',
      ctaQuote: 'Get a Free Quote',
      callUs: 'Call',
    },
    whyChoose: {
      kicker: 'Why Choose Maxclean',
      title: 'The Trusted Choice in Paphos',
      subtitle:
        'Built on reliability, respect for your home, and responsive customer service.',
      principle: 'Principle',
      verifiedStandard: 'Verified standard',
      items: [
        {
          title: 'Attention to Detail',
          description:
            'A clear cleaning checklist helps define the specific areas to be covered for your home.',
          iconName: 'CheckCircle2',
        },
        {
          title: 'Flexible Cleaning Needs',
          description:
            'Discuss the service and schedule that suit your property, from one-off cleans to recurring visits.',
          iconName: 'SlidersHorizontal',
        },
        {
          title: 'Clear Communication',
          description:
            'Make it easy to explain your requirements and property priorities before the visit begins.',
          iconName: 'MessageSquare',
        },
        {
          title: 'Simple Quote Requests',
          description:
            'Contact Maxclean directly to discuss the work and receive a straightforward, honest quote.',
          iconName: 'FileText',
        },
      ],
    },
    howItWorks: {
      kicker: 'Simple 3-Step Process',
      title: 'How It Works',
      subtitle:
        'Booking your cleaning in Paphos is quick, clear, and hassle-free.',
      cta: 'Start Now: Contact Maxclean',
      steps: [
        {
          stepNumber: '01',
          title: 'Contact Maxclean',
          description:
            'Reach out via phone, WhatsApp, or our online quote form to introduce your property.',
          iconName: 'PhoneCall',
        },
        {
          stepNumber: '02',
          title: 'Discuss Your Cleaning Needs',
          description:
            'Share details about your home, number of rooms, and any specific areas needing focus.',
          iconName: 'ClipboardList',
        },
        {
          stepNumber: '03',
          title: 'Receive Your Personalised Quote',
          description:
            'Get a clear, direct quote and confirm a date that suits your schedule.',
          iconName: 'Sparkles',
        },
      ],
    },
    gallery: {
      kicker: 'Our Cleaning Standards',
      title: 'Spotless Results You Can See',
      subtitle:
        'Explore the presentation of gleaming countertops, streak-free glass, sanitized bathrooms, and fresh Mediterranean bedrooms.',
      disclaimer:
        'Photographs represent our high standards of cleanliness. Exact scopes are tailored for each property in Paphos.',
      categories: ['All', 'Living Spaces', 'Kitchens', 'Bathrooms'],
      standardBadge: 'Maxclean Standard',
      items: [
        {
          id: '1',
          title: 'Sunlit Living Room & Terrace',
          category: 'Living Spaces',
          image: '/images/hero_clean_villa_living_1792220476225.jpg',
          description:
            'Pristine tiled floors, crystal clean glass doors, and inviting Mediterranean living spaces.',
        },
        {
          id: '2',
          title: 'Fresh & Crisp Bedroom Suite',
          category: 'Living Spaces',
          image: '/images/about_clean_bedroom_1792221222996.jpg',
          description:
            'Spotless wooden flooring, fresh white bed linen, and calm sunlit atmosphere.',
        },
        {
          id: '3',
          title: 'Spotless Island & Countertops',
          category: 'Kitchens',
          image: '/images/gallery_spotless_kitchen_1792220477336.jpg',
          description:
            'Polished quartz counters, gleaming chrome faucets, and immaculately wiped cabinetry.',
        },
        {
          id: '4',
          title: 'Pristine Bathroom Vanity & Glass',
          category: 'Bathrooms',
          image: '/images/gallery_bright_bathroom_1792220476971.jpg',
          description:
            'Clean transparent shower glass, fresh towels, sanitized fixtures, and gleaming tiles.',
        },
      ],
    },
    reviews: {
      kicker: 'Customer Reviews',
      title: 'What Our Customers Say',
      subtitle:
        'We value honest feedback and transparent service for homeowners, residents, and villa hosts across Paphos.',
      badgeGoogle: 'Google Reviews',
      ratingText: 'Verified Google Business Listing',
      cardTitle: 'Official Google Business Profile',
      cardSubtitle: 'Alvertou, Paphos 8015, Cyprus',
      cardBody:
        'Have you recently experienced Maxclean services for your home, apartment, or villa? Read genuine feedback from our clients or share your own review directly on Google Maps.',
      btnText: 'Read Our Google Reviews',
      honestNote: 'Authentic reviews on Google Maps • Zero fabricated ratings',
      verifiedLabel: 'Verified Business',
    },
    serviceArea: {
      kicker: 'Service Location',
      title: 'House Cleaning Services in Paphos',
      description:
        'Looking for reliable cleaning in Paphos? Contact Maxclean to discuss your property location and arrange your cleaning visit.',
      addressTitle: 'Verified Business Location',
      confirmationTitle: 'Location Coverage',
      confirmationText:
        'We cover Paphos town and surrounding areas. Confirm your specific street and property during quote enquiry.',
      viewMaps: 'View on Google Maps',
      districtTitle: 'Paphos & Surrounds',
      districtSub:
        'Apartments, family houses, holiday lets, and residential villas across the Paphos area.',
      paphosAreas: [
        { name: 'Central Paphos & Kato Paphos', status: 'Available' },
        { name: 'Universal, Tombs of the Kings, Chloraka', status: 'Confirm Address' },
        { name: 'Peyia, Coral Bay, Geroskipou', status: 'Confirm Scope' },
      ],
      checkWaBtn: 'Check Your Location on WhatsApp',
    },
    faqs: {
      kicker: 'Helpful Information',
      title: 'Frequently Asked Questions',
      subtitle:
        'Find straightforward answers about booking, services, and requesting a quote in Paphos.',
      haveQuestion: 'Have a specific question about your home?',
      haveQuestionSub: 'Contact Maxclean directly via phone or WhatsApp.',
      callBtn: 'Call Us',
      items: [
        {
          question: 'What cleaning services can I request from Maxclean?',
          answer:
            'You can request regular house cleaning, deep cleaning, apartment and villa cleaning, as well as move-in/out and turnover cleans. Specific cleaning requirements are confirmed directly with Maxclean based on your property.',
        },
        {
          question: 'How do I request a personalized quote?',
          answer:
            'Simply complete the quote form on this page or send a message directly on WhatsApp at +357 96 066878. Share your property type and cleaning priorities to receive a direct quote.',
        },
        {
          question: 'Can I book a one-time deep clean?',
          answer:
            'Yes! One-time deep cleans are popular for seasonal refreshes, moving into a new residence, or preparing for visiting family and guests.',
        },
        {
          question: 'Do you clean both apartments and large villas?',
          answer:
            'Yes, we cater to apartments, townhouses, and detached villas across the Paphos area. Property size and room counts are reviewed before confirming the visit.',
        },
        {
          question: 'Do you clean holiday rentals and Airbnbs in Paphos?',
          answer:
            'Yes, turnover cleaning between guest bookings can be requested. Please contact Maxclean in advance to confirm scheduling availability around check-in times.',
        },
        {
          question: 'Which areas in Paphos do you cover?',
          answer:
            'Maxclean is located at Alvertou, Paphos 8015, Cyprus. We focus on Paphos and surrounding residential areas. Please contact us to confirm your specific address.',
        },
        {
          question: 'How can I contact Maxclean directly?',
          answer:
            'You can call us directly on +357 96 066878, message us via WhatsApp on +357 96 066878, or submit an enquiry using the quote request form.',
        },
      ],
    },
    quoteForm: {
      kicker: 'Free Quote Request',
      title: "Let's Make Your Home Shine",
      subtitle:
        'Tell us a little about your property and cleaning requirements. Receive a prompt, personalized quote without obligation.',
      instantChat: 'Fast WhatsApp Chat',
      instantChatTitle: 'WhatsApp Maxclean (+357 96 066878)',
      phoneTitle: 'Direct Phone Call',
      hubTitle: 'Service Location',
      transparentNote:
        'Every property in Paphos is quoted transparently based on rooms, layout, and your specific cleaning priorities.',
      cardTitle: 'Request a Free Quote',
      cardSubtitle: 'Prompt response • Tailored for Paphos residences',
      fullName: 'Full Name',
      fullNameReq: 'Full Name *',
      fullNamePlaceholder: 'e.g. Maria Georgiou',
      phone: 'Phone Number',
      phoneReq: 'Phone Number *',
      phonePlaceholder: 'e.g. +357 99 123456',
      email: 'Email Address',
      emailOptional: '(Optional)',
      location: 'Property Location in Paphos',
      locationReq: 'Property Location in Paphos *',
      locationPlaceholder: 'e.g. Universal, Kato Paphos, Chloraka',
      propertyType: 'Property Type',
      service: 'Cleaning Service',
      frequency: 'Cleaning Frequency',
      preferredDate: 'Preferred Date',
      optional: '(Optional)',
      additionalDetails: 'Additional Details',
      additionalDetailsPlaceholder:
        'Tell us about your property, approximate size, balconies, or any specific requirements...',
      consentText:
        'I agree that Maxclean may use my provided contact details to respond to this cleaning quote enquiry.',
      submitBtn: 'Send Quote Request',
      submittingBtn: 'Preparing Quote...',
      prefillWaBtn: 'Prefill WhatsApp',
      directNote:
        'Direct communication with Maxclean (+357 96 066878) • No spam guarantee',
      successTitle: 'Quote Request Ready!',
      successSub: (name, service, loc) =>
        `Thank you, ${name}. Your enquiry for ${service} in ${loc} has been formatted.`,
      summaryTitle: 'Summary of your request:',
      propertyLabel: 'Property:',
      serviceLabel: 'Service:',
      locationLabel: 'Location:',
      dateLabel: 'Date:',
      sendWaBtn: 'Send via WhatsApp to Maxclean',
      anotherRequestBtn: 'Create Another Request',
      errors: {
        fullName: 'Full name is required',
        phone: 'Phone number is required for quotes',
        phoneInvalid: 'Please enter a valid phone or mobile number',
        location: 'Please provide your area or street in Paphos',
        consent: 'Please confirm consent to use details for your enquiry response',
      },
      frequencies: [
        { value: 'One-Time', label: 'One-Time Clean' },
        { value: 'Weekly', label: 'Weekly Routine' },
        { value: 'Fortnightly', label: 'Fortnightly (Every 2 weeks)' },
        { value: 'Monthly', label: 'Monthly' },
        { value: 'Not Sure', label: 'Not Sure / Discuss with Maxclean' },
      ],
      propertyTypes: [
        { value: 'Apartment', label: 'Apartment' },
        { value: 'House', label: 'House' },
        { value: 'Villa', label: 'Villa' },
        { value: 'Office', label: 'Office / Business' },
        { value: 'Other', label: 'Other Space' },
      ],
    },
    stickyMobile: {
      call: 'Call Maxclean',
      whatsapp: 'WhatsApp',
    },
    footer: {
      desc: 'Professional house, apartment, and villa cleaning services in Paphos, Cyprus. Tailored cleaning scopes and direct quotes for your property.',
      categoryLabel: 'Category: House Cleaning Service',
      navHeading: 'Navigation',
      contactHeading: 'Verified Contact',
      googleMapsListing: 'Google Maps Listing',
      rights: 'All rights reserved.',
      credits: 'Website demo prepared for Maxclean by Nexovia Media',
      privacyBtn: 'Privacy Information',
    },
    privacyModal: {
      title: 'Privacy Information',
      s1Title: '1. Information Collection',
      s1Text:
        'When you submit a quote request on this website or reach out via WhatsApp/phone, we collect basic details you choose to provide (such as your name, telephone number, optional email, property type, and general area in Paphos).',
      s2Title: '2. Purpose of Use',
      s2Text:
        'Your contact information is used strictly and exclusively for communicating with you regarding your cleaning inquiry, discussing property scope, providing an honest quotation, and arranging cleaning service visits.',
      s3Title: '3. No Sharing or Marketing Lists',
      s3Text:
        'We do not sell, rent, or transfer your contact information to third parties or use it for unsolicited email blasts. Communications are direct between you and Maxclean (+357 96 066878).',
      s4Title: '4. Contact & Inquiries',
      s4Text:
        'If you have any questions regarding how your details are handled, you can contact Maxclean directly at +357 96 066878 or visit our verified business location at Alvertou, Paphos, Pafos 8015, Cyprus.',
      closeBtn: 'I Understand',
    },
  },
  el: {
    nav: {
      home: 'Αρχική',
      about: 'Σχετικά',
      services: 'Υπηρεσίες',
      whyUs: 'Γιατί Εμάς',
      reviews: 'Κριτικές',
      faqs: 'Συχνές Ερωτήσεις',
      contact: 'Επικοινωνία',
      getQuote: 'Δωρεάν Προσφορά',
      callNow: 'Κλήση',
      whatsApp: 'WhatsApp',
    },
    hero: {
      badge: 'Maxclean Πάφος',
      homeCleaning: 'Καθαρισμός Σπιτιών',
      deepCleaning: 'Γενικός Καθαρισμός',
      villaCleaning: 'Καθαρισμός Επαύλεων',
      headlinePart1: 'Νιώστε τη',
      headlineHighlight: 'Φρεσκάδα του Σπιτιού σας',
      subtext:
        'Επαγγελματικός καθαρισμός για σπίτια, διαμερίσματα και επαύλεις στην Πάφο. Απολαύστε έναν φρέσκο, άνετο χώρο με καθαριότητα προσαρμοσμένη στις ανάγκες σας.',
      ctaPrimary: 'Δωρεάν Προσφορά',
      ctaSecondary: 'Συνομιλία στο WhatsApp',
      verifiedLocation: 'Αλβέρτου, Πάφος 8015, Κύπρος',
      quoteBased: 'Βάσει Προσφοράς • Χωρίς Κρυφές Χρεώσεις',
      tailoredChecklists: 'Εξατομικευμένη Λίστα Εργασιών',
      overlayTitle: 'Πρότυπο Άψογης Καθαριότητας',
      overlaySubtitle: 'Καθαρισμός οικιών και επαύλεων στην Πάφο',
    },
    benefits: {
      kicker: 'Η Δέσμευσή μας',
      title: 'Απλή & Αξιόπιστη Καθαριότητα',
      subtitle: 'Απολαύστε ολοκληρωμένη φροντίδα σπιτιού σχεδιασμένη για το ακίνητό σας στην Πάφο.',
      items: [
        {
          title: 'Εξατομικευμένος Καθαρισμός',
          description:
            'Κάθε χώρος είναι μοναδικός. Προσαρμόζουμε τη λίστα εργασιών και τα σημεία εστίασης στις δικές σας ανάγκες.',
          iconName: 'Sparkles',
        },
        {
          title: 'Προσοχή στη Λεπτομέρεια',
          description:
            'Από τους άψογους πάγκους κουζίνας έως τα λαμπερά πλακάκια μπάνιου, η προσέγγισή μας διασφαλίζει υψηλά πρότυπα.',
          iconName: 'CheckCircle2',
        },
        {
          title: 'Άμεση Επικοινωνία',
          description:
            'Εύκολη επικοινωνία μέσω τηλεφώνου ή WhatsApp. Συζητήστε τις ανάγκες, το πρόγραμμα και την προσφορά σας χωρίς καθυστέρηση.',
          iconName: 'MessageSquare',
        },
      ],
    },
    services: {
      kicker: 'Κύριες Υπηρεσίες Καθαρισμού',
      title: 'Προσαρμοσμένες Υπηρεσίες για Κάθε Χώρο',
      subtitle:
        'Επαγγελματικές λύσεις καθαρισμού σχεδιασμένες για σπίτια, διαμερίσματα και ιδιωτικές επαύλεις στην Πάφο.',
      coreTab: 'Βασικές Υπηρεσίες',
      additionalTab: 'Πρόσθετες Υπηρεσίες (Κατόπιν Αιτήματος)',
      disclaimerTitle: 'Ενημέρωση Εύρους:',
      disclaimerText:
        'Οι βασικές υπηρεσίες προσαρμόζονται στο ακίνητό σας. Πρόσθετες ειδικές υπηρεσίες επιβεβαιώνονται ξεχωριστά με τη Maxclean.',
      quoteModel: 'Βάσει Προσφοράς',
      requestQuote: 'Ζητήστε Προσφορά',
      customPrompt: 'Χρειάζεστε ειδικό πακέτο ή ξεχωριστές ρυθμίσεις;',
      customLink: 'Στείλτε λεπτομέρειες',
      customSuffix: 'για απευθείας εκτίμηση.',
      coreItems: [
        {
          id: 'regular-house-cleaning',
          title: 'Τακτικός Καθαρισμός Σπιτιού',
          description:
            'Συστηματικός καθαρισμός ρουτίνας για να διατηρείται το σπίτι σας φρέσκο, τακτοποιημένο και άνετο στο πρόγραμμα που επιθυμείτε.',
          iconName: 'Home',
          category: 'residential',
          note: 'Ευέλικτο πρόγραμμα προσαρμοσμένο στην κατοικία σας',
        },
        {
          id: 'deep-cleaning',
          title: 'Γενικός / Βαθύς Καθαρισμός',
          description:
            'Λεπτομερής καθαρισμός για χώρους που χρειάζονται εντατική προσοχή, όπως κουζίνες, μπάνια και επιφάνειες.',
          iconName: 'Sparkles',
          category: 'residential',
          note: 'Ιδανικός για εποχιακό φρεσκάρισμα & εντατική φροντίδα',
        },
        {
          id: 'apartment-cleaning',
          title: 'Καθαρισμός Διαμερίσματος',
          description:
            'Καθαρισμός προσαρμοσμένος σε διαμερίσματα, συμπεριλαμβανομένων σαλονιού, υπνοδωματίων, κουζίνας και μπάνιων.',
          iconName: 'Building2',
          category: 'residential',
          note: 'Ευέλικτος προγραμματισμός για στούντιο & διαμερίσματα',
        },
        {
          id: 'villa-cleaning',
          title: 'Καθαρισμός Έπαυλης / Βίλας',
          description:
            'Καθαρισμός για μεγαλύτερες κατοικίες και επαύλεις στην Πάφο, με εύρος που συμφωνείται βάσει μεγέθους και διαρρύθμισης.',
          iconName: 'Castle',
          category: 'residential',
          note: 'Ολοκληρωμένη κάλυψη για ευρύχωρες επαύλεις',
        },
      ],
      additionalItems: [
        {
          id: 'holiday-rental-turnover',
          title: 'Καθαρισμός Τουριστικών Καταλυμάτων / Airbnb',
          description:
            'Καθαρισμός μεταξύ αφίξεων επισκεπτών για την ιδανική προετοιμασία του χώρου. Διαθεσιμότητα κατόπιν συνεννόησης.',
          iconName: 'KeyRound',
          category: 'rental',
          note: 'Επιβεβαίωση βάσει ημερολογίου κρατήσεων',
        },
        {
          id: 'move-in-move-out',
          title: 'Καθαρισμός Μετακόμισης (Move-In / Move-Out)',
          description:
            'Διεξοδικός καθαρισμός πριν από την εγκατάσταση ή μετά την αποχώρηση από ακίνητο, σύμφωνα με συμφωνημένη λίστα.',
          iconName: 'Truck',
          category: 'residential',
          note: 'Σχολαστική προετοιμασία παράδοσης',
        },
        {
          id: 'window-cleaning',
          title: 'Καθαρισμός Υαλοπινάκων & Παραθύρων',
          description:
            'Καθαρισμός προσβάσιμων παραθύρων και γυάλινων επιφανειών, εφόσον προσφέρεται από την επιχείρηση.',
          iconName: 'Sun',
          category: 'specialist',
          note: 'Κατόπιν επιβεβαίωσης προσβασιμότητας',
        },
        {
          id: 'office-commercial',
          title: 'Καθαρισμός Γραφείων & Επαγγελματικών Χώρων',
          description:
            'Καθαρισμός γραφείων και μικρών επιχειρήσεων στην Πάφο, εφόσον προσφέρεται από τη Maxclean.',
          iconName: 'Briefcase',
          category: 'specialist',
          note: 'Προσαρμοσμένο για χώρους εργασίας & στούντιο',
        },
      ],
    },
    about: {
      kicker: 'Σχετικά με τη Maxclean',
      title: 'Αφοσιωμένος Καθαρισμός για Σπίτια & Επαύλεις στην Πάφο',
      p1: 'Στη Maxclean, στόχος μας είναι να βοηθάμε τους ιδιοκτήτες κατοικιών, ενοίκους διαμερισμάτων και διαχειριστές επαύλεων να απολαμβάνουν καθαρότερους, πιο φρέσκους χώρους διαβίωσης. Είτε χρειάζεστε τακτικό καθαρισμό είτε σχολαστικό γενικό καθάρισμα, η υπηρεσία μας ξεκινά από την κατανόηση του σπιτιού σας.',
      p2: 'Δεσμευόμαστε για άμεση και ειλικρινή επικοινωνία από την πρώτη στιγμή. Λαμβάνετε σαφές εύρος εργασιών και διαφανή προσφορά, ώστε να γνωρίζετε ακριβώς τι περιλαμβάνει η επίσκεψη.',
      pillar1Title: 'Εξατομικευμένη Προσέγγιση',
      pillar1Desc: 'Λίστα εργασιών προσαρμοσμένη στο μέγεθος και τις ανάγκες του χώρου σας.',
      pillar2Title: 'Διαφανείς Προσφορές',
      pillar2Desc: 'Χωρίς κρυφές χρεώσεις. Κάθε καθαρισμός επιβεβαιώνεται εκ των προτέρων.',
      badgeTitle: 'Αλβέρτου, Πάφος 8015',
      badgeSub: 'Επιβεβαιωμένη Τοπική Επιχείρηση',
      ctaQuote: 'Δωρεάν Προσφορά',
      callUs: 'Κλήση',
    },
    whyChoose: {
      kicker: 'Γιατί Maxclean',
      title: 'Η Αξιόπιστη Επιλογή στην Πάφο',
      subtitle:
        'Βασισμένη στη συνέπεια, τον σεβασμό στον χώρο σας και την άμεση εξυπηρέτηση.',
      principle: 'Αρχή',
      verifiedStandard: 'Επιβεβαιωμένο πρότυπο',
      items: [
        {
          title: 'Προσοχή στη Λεπτομέρεια',
          description:
            'Μια σαφής λίστα εργασιών βοηθά στον καθορισμό των συγκεκριμένων σημείων που θα καλυφθούν στο σπίτι σας.',
          iconName: 'CheckCircle2',
        },
        {
          title: 'Ευέλικτες Ανάγκες Καθαρισμού',
          description:
            'Συζητήστε την υπηρεσία και το χρονοδιάγραμμα που ταιριάζει στο ακίνητό σας, από μεμονωμένες επισκέψεις έως τακτικό πρόγραμμα.',
          iconName: 'SlidersHorizontal',
        },
        {
          title: 'Ξεκάθαρη Επικοινωνία',
          description:
            'Εύκολη συνεννόηση για τις προτεραιότητες και τις ιδιαίτερες ανάγκες του χώρου σας πριν από την επίσκεψη.',
          iconName: 'MessageSquare',
        },
        {
          title: 'Απλή Διαδικασία Προσφοράς',
          description:
            'Επικοινωνήστε απευθείας με τη Maxclean για να συζητήσετε τις εργασίες και να λάβετε μια ειλικρινή προσφορά.',
          iconName: 'FileText',
        },
      ],
    },
    howItWorks: {
      kicker: 'Απλή Διαδικασία 3 Βημάτων',
      title: 'Πώς Λειτουργεί',
      subtitle:
        'Η οργάνωση του καθαρισμού σας στην Πάφο γίνεται γρήγορα, ξεκάθαρα και εύκολα.',
      cta: 'Ξεκινήστε Τώρα: Επικοινωνήστε με τη Maxclean',
      steps: [
        {
          stepNumber: '01',
          title: 'Επικοινωνήστε με τη Maxclean',
          description:
            'Καλέστε στο τηλέφωνο, στείλτε μήνυμα στο WhatsApp ή συμπληρώστε τη φόρμα προσφοράς.',
          iconName: 'PhoneCall',
        },
        {
          stepNumber: '02',
          title: 'Συζητήστε τις Ανάγκες σας',
          description:
            'Μοιραστείτε λεπτομέρειες για το ακίνητο, τον αριθμό δωματίων και τυχόν ιδιαίτερες περιοχές εστίασης.',
          iconName: 'ClipboardList',
        },
        {
          stepNumber: '03',
          title: 'Λάβετε την Προσωπική σας Προσφορά',
          description:
            'Λάβετε σαφή, απευθείας προσφορά και επιβεβαιώστε την ημερομηνία που σας εξυπηρετεί.',
          iconName: 'Sparkles',
        },
      ],
    },
    gallery: {
      kicker: 'Τα Πρότυπα Καθαριότητας μας',
      title: 'Αποτελέσματα που Μιλούν από Μόνα τους',
      subtitle:
        'Δείτε την παρουσίαση γυαλισμένων πάγκων, κρυστάλλινων τζαμιών, απολυμασμένων μπάνιων και φρέσκων μεσογειακών υπνοδωματίων.',
      disclaimer:
        'Οι φωτογραφίες αντικατοπτρίζουν τα υψηλά πρότυπα καθαριότητάς μας. Το ακριβές εύρος προσαρμόζεται σε κάθε ακίνητο.',
      categories: ['Όλα', 'Καθιστικά', 'Κουζίνες', 'Μπάνια'],
      standardBadge: 'Πρότυπο Maxclean',
      items: [
        {
          id: '1',
          title: 'Φωτεινό Καθιστικό & Βεράντα',
          category: 'Living Spaces',
          image: '/images/hero_clean_villa_living_1792220476225.jpg',
          description:
            'Πεντακάθαρα δάπεδα, αστραφτερές γυάλινες πόρτες και ευχάριστος μεσογειακός χώρος διαβίωσης.',
        },
        {
          id: '2',
          title: 'Φρέσκια & Κομψή Κρεβατοκάμαρα',
          category: 'Living Spaces',
          image: '/images/about_clean_bedroom_1792221222996.jpg',
          description:
            'Αστραφτερό ξύλινο πάτωμα, κατάλευκα σεντόνια και ήρεμη φωτεινή ατμόσφαιρα.',
        },
        {
          id: '3',
          title: 'Άψογη Νησίδα & Πάγκοι Κουζίνας',
          category: 'Kitchens',
          image: '/images/gallery_spotless_kitchen_1792220477336.jpg',
          description:
            'Γυαλισμένοι πάγκοι χαλαζία, αστραφτερή βρύση χρωμίου και σχολαστικά καθαρισμένα ντουλάπια.',
        },
        {
          id: '4',
          title: 'Κρυστάλλινο Μπάνιο & Γυάλινη Καμπίνα',
          category: 'Bathrooms',
          image: '/images/gallery_bright_bathroom_1792220476971.jpg',
          description:
            'Καθαρό διάφανο γυαλί ντους, απολυμασμένα είδη υγιεινής και αστραφτερά πλακάκια.',
        },
      ],
    },
    reviews: {
      kicker: 'Αξιολογήσεις Πελατών',
      title: 'Τι Λένε οι Πελάτες μας',
      subtitle:
        'Εκτιμούμε την ειλικρινή γνώμη και τη διαφανή εξυπηρέτηση για ιδιοκτήτες και επισκέπτες στην Πάφο.',
      badgeGoogle: 'Google Reviews',
      ratingText: 'Επιβεβαιωμένη Καταχώριση στο Google',
      cardTitle: 'Επίσημο Προφίλ στο Google Business',
      cardSubtitle: 'Αλβέρτου, Πάφος 8015, Κύπρος',
      cardBody:
        'Χρησιμοποιήσατε πρόσφατα τις υπηρεσίες της Maxclean για το σπίτι, το διαμέρισμα ή την έπαυλή σας; Διαβάστε αυθεντικά σχόλια των πελατών μας ή μοιραστείτε τη δική σας κριτική απευθείας στο Google Maps.',
      btnText: 'Διαβάστε τις Κριτικές μας στο Google',
      honestNote: 'Μόνο αυθεντικές αξιολογήσεις στο Google Maps • Χωρίς κατασκευασμένες βαθμολογίες',
      verifiedLabel: 'Επιβεβαιωμένη Επιχείρηση',
    },
    serviceArea: {
      kicker: 'Περιοχή Εξυπηρέτησης',
      title: 'Υπηρεσίες Καθαρισμού Σπιτιών στην Πάφο',
      description:
        'Αναζητάτε αξιόπιστο καθαρισμό στην Πάφο; Επικοινωνήστε με τη Maxclean για να συζητήσετε την τοποθεσία του ακινήτου σας και να προγραμματίσετε την επίσκεψή σας.',
      addressTitle: 'Επιβεβαιωμένη Έδρα Επιχείρησης',
      confirmationTitle: 'Κάλυψη Περιοχών',
      confirmationText:
        'Καλύπτουμε την πόλη της Πάφου και τις γύρω οικιστικές περιοχές. Επιβεβαιώστε την οδό σας κατά την υποβολή της προσφοράς.',
      viewMaps: 'Προβολή στο Google Maps',
      districtTitle: 'Πάφος & Γύρω Περιοχές',
      districtSub:
        'Διαμερίσματα, μονοκατοικίες, τουριστικά καταλύματα και επαύλεις σε όλη την επαρχία Πάφου.',
      paphosAreas: [
        { name: 'Κεντρική Πάφος & Κάτω Πάφος', status: 'Διαθέσιμο' },
        { name: 'Universal, Τάφοι των Βασιλέων, Χλώρακα', status: 'Επιβεβαίωση Οδού' },
        { name: 'Πέγεια, Coral Bay, Γεροσκήπου', status: 'Επιβεβαίωση Εύρους' },
      ],
      checkWaBtn: 'Ελέγξτε την Περιοχή σας στο WhatsApp',
    },
    faqs: {
      kicker: 'Χρήσιμες Πληροφορίες',
      title: 'Συχνές Ερωτήσεις',
      subtitle:
        'Βρείτε ξεκάθαρες απαντήσεις σχετικά με την κράτηση, τις υπηρεσίες και τη λήψη προσφοράς στην Πάφο.',
      haveQuestion: 'Έχετε συγκεκριμένη ερώτηση για το σπίτι σας;',
      haveQuestionSub: 'Επικοινωνήστε απευθείας με τη Maxclean μέσω τηλεφώνου ή WhatsApp.',
      callBtn: 'Καλέστε μας',
      items: [
        {
          question: 'Ποιες υπηρεσίες καθαρισμού μπορώ να ζητήσω από τη Maxclean;',
          answer:
            'Μπορείτε να ζητήσετε τακτικό καθαρισμό σπιτιού, γενικό καθαρισμό, καθαρισμό διαμερισμάτων και επαύλεων, καθώς και καθαρισμό μετακόμισης και τουριστικών καταλυμάτων. Οι απαιτήσεις επιβεβαιώνονται απευθείας με τη Maxclean.',
        },
        {
          question: 'Πώς μπορώ να ζητήσω εξατομικευμένη προσφορά;',
          answer:
            'Απλώς συμπληρώστε τη φόρμα προσφοράς σε αυτή τη σελίδα ή στείλτε μήνυμα απευθείας στο WhatsApp στο +357 96 066878. Μοιραστείτε τον τύπο του ακινήτου και τις προτεραιότητές σας.',
        },
        {
          question: 'Μπορώ να κλείσω μεμονωμένο γενικό καθαρισμό;',
          answer:
            'Ναι! Ο μεμονωμένος γενικός καθαρισμός είναι ιδιαίτερα δημοφιλής για εποχιακό φρεσκάρισμα, μετακόμιση σε νέα κατοικία ή προετοιμασία για φιλοξενία οικογένειας.',
        },
        {
          question: 'Καθαρίζετε τόσο διαμερίσματα όσο και μεγάλες επαύλεις;',
          answer:
            'Ναι, εξυπηρετούμε διαμερίσματα, μεζονέτες και ανεξάρτητες επαύλεις σε όλη την περιοχή της Πάφου. Το μέγεθος και τα δωμάτια εξετάζονται πριν από την επιβεβαίωση.',
        },
        {
          question: 'Καθαρίζετε τουριστικά καταλύματα και Airbnb στην Πάφο;',
          answer:
            'Ναι, μπορείτε να ζητήσετε καθαρισμό προετοιμασίας μεταξύ κρατήσεων. Παρακαλούμε επικοινωνήστε εγκαίρως για επιβεβαίωση διαθεσιμότητας γύρω από τις ώρες check-in.',
        },
        {
          question: 'Ποιες περιοχές στην Πάφο καλύπτετε;',
          answer:
            'Η Maxclean εδρεύει στην οδό Αλβέρτου, Πάφος 8015, Κύπρος. Εστιάζουμε στην Πάφο και τις γύρω οικιστικές περιοχές. Επικοινωνήστε μαζί μας για να επιβεβαιώσουμε τη διεύθυνσή σας.',
        },
        {
          question: 'Πώς μπορώ να επικοινωνήσω απευθείας με τη Maxclean;',
          answer:
            'Μπορείτε να μας καλέσετε απευθείας στο +357 96 066878, να στείλετε μήνυμα στο WhatsApp στο +357 96 066878 ή να υποβάλετε αίτημα μέσω της φόρμας.',
        },
      ],
    },
    quoteForm: {
      kicker: 'Αίτημα Δωρεάν Προσφοράς',
      title: 'Ας Κάνουμε το Σπίτι σας να Λάμψει',
      subtitle:
        'Πείτε μας λίγα λόγια για το ακίνητό σας και τις ανάγκες σας. Λάβετε άμεση, εξατομικευμένη προσφορά χωρίς καμία δέσμευση.',
      instantChat: 'Γρήγορη Συνομιλία WhatsApp',
      instantChatTitle: 'WhatsApp Maxclean (+357 96 066878)',
      phoneTitle: 'Απευθείας Τηλεφωνική Κλήση',
      hubTitle: 'Τοποθεσία Εξυπηρέτησης',
      transparentNote:
        'Κάθε ακίνητο στην Πάφο εκτιμάται με διαφάνεια βάσει δωματίων, διαρρύθμισης και συγκεκριμένων προτεραιοτήτων.',
      cardTitle: 'Ζητήστε Δωρεάν Προσφορά',
      cardSubtitle: 'Άμεση απάντηση • Προσαρμοσμένη για οικίες στην Πάφο',
      fullName: 'Ονοματεπώνυμο',
      fullNameReq: 'Ονοματεπώνυμο *',
      fullNamePlaceholder: 'π.χ. Μαρία Γεωργίου',
      phone: 'Τηλέφωνο Επικοινωνίας',
      phoneReq: 'Τηλέφωνο Επικοινωνίας *',
      phonePlaceholder: 'π.χ. +357 99 123456',
      email: 'Ηλεκτρονικό Ταχυδρομείο (Email)',
      emailOptional: '(Προαιρετικό)',
      location: 'Περιοχή Ακινήτου στην Πάφο',
      locationReq: 'Περιοχή Ακινήτου στην Πάφο *',
      locationPlaceholder: 'π.χ. Universal, Κάτω Πάφος, Χλώρακα',
      propertyType: 'Τύπος Ακινήτου',
      service: 'Υπηρεσία Καθαρισμού',
      frequency: 'Συχνότητα Καθαρισμού',
      preferredDate: 'Επιθυμητή Ημερομηνία',
      optional: '(Προαιρετικό)',
      additionalDetails: 'Πρόσθετες Πληροφορίες',
      additionalDetailsPlaceholder:
        'Πείτε μας για το ακίνητό σας, ενδεικτικό μέγεθος, υπνοδωμάτια, μπαλκόνια ή ειδικές απαιτήσεις...',
      consentText:
        'Συμφωνώ η Maxclean να χρησιμοποιήσει τα στοιχεία επικοινωνίας μου για να ανταποκριθεί σε αυτό το αίτημα προσφοράς.',
      submitBtn: 'Αποστολή Αιτήματος Προσφοράς',
      submittingBtn: 'Προετοιμασία...',
      prefillWaBtn: 'Προετοιμασία στο WhatsApp',
      directNote:
        'Απευθείας επικοινωνία με τη Maxclean (+357 96 066878) • Εγγύηση μη αποστολής spam',
      successTitle: 'Το Αίτημα είναι Έτοιμο!',
      successSub: (name, service, loc) =>
        `Ευχαριστούμε, ${name}. Το αίτημά σας για ${service} στην περιοχή ${loc} έχει μορφοποιηθεί.`,
      summaryTitle: 'Σύνοψη του αιτήματός σας:',
      propertyLabel: 'Ακίνητο:',
      serviceLabel: 'Υπηρεσία:',
      locationLabel: 'Τοποθεσία:',
      dateLabel: 'Ημερομηνία:',
      sendWaBtn: 'Αποστολή μέσω WhatsApp στη Maxclean',
      anotherRequestBtn: 'Νέο Αίτημα Προσφοράς',
      errors: {
        fullName: 'Το ονοματεπώνυμο είναι υποχρεωτικό',
        phone: 'Ο αριθμός τηλεφώνου είναι υποχρεωτικός',
        phoneInvalid: 'Παρακαλούμε εισάγετε έγκυρο αριθμό τηλεφώνου',
        location: 'Παρακαλούμε εισάγετε περιοχή ή οδό στην Πάφο',
        consent: 'Παρακαλούμε επιβεβαιώστε τη συγκατάθεσή σας για την επικοινωνία',
      },
      frequencies: [
        { value: 'One-Time', label: 'Μεμονωμένος Καθαρισμός' },
        { value: 'Weekly', label: 'Εβδομαδιαία Ρουτίνα' },
        { value: 'Fortnightly', label: 'Ανά 2 Εβδομάδες' },
        { value: 'Monthly', label: 'Μηνιαία' },
        { value: 'Not Sure', label: 'Δεν είμαι σίγουρος/η / Συζήτηση με τη Maxclean' },
      ],
      propertyTypes: [
        { value: 'Apartment', label: 'Διαμέρισμα' },
        { value: 'House', label: 'Μονοκατοικία / Σπίτι' },
        { value: 'Villa', label: 'Έπαυλη / Βίλα' },
        { value: 'Office', label: 'Γραφείο / Επιχείρηση' },
        { value: 'Other', label: 'Άλλος Χώρος' },
      ],
    },
    stickyMobile: {
      call: 'Κλήση Maxclean',
      whatsapp: 'WhatsApp',
    },
    footer: {
      desc: 'Επαγγελματικές υπηρεσίες καθαρισμού οικιών, διαμερισμάτων και επαύλεων στην Πάφο, Κύπρος. Εξατομικευμένο εύρος εργασιών και άμεσες προσφορές.',
      categoryLabel: 'Κατηγορία: Υπηρεσίες Καθαρισμού Οικιών',
      navHeading: 'Πλοήγηση',
      contactHeading: 'Επιβεβαιωμένη Επικοινωνία',
      googleMapsListing: 'Καταχώριση στο Google Maps',
      rights: 'Με επιφύλαξη παντός δικαιώματος.',
      credits: 'Επίδειξη ιστοτόπου σχεδιασμένη για τη Maxclean από τη Nexovia Media',
      privacyBtn: 'Πληροφορίες Απορρήτου',
    },
    privacyModal: {
      title: 'Πληροφορίες Απορρήτου',
      s1Title: '1. Συλλογή Πληροφοριών',
      s1Text:
        'Όταν υποβάλλετε αίτημα προσφοράς σε αυτόν τον ιστότοπο ή επικοινωνείτε μέσω WhatsApp/τηλεφώνου, συλλέγουμε τα βασικά στοιχεία που επιλέγετε να παράσχετε (όνομα, τηλέφωνο, προαιρετικό email, τύπο ακινήτου και γενική περιοχή στην Πάφο).',
      s2Title: '2. Σκοπός Χρήσης',
      s2Text:
        'Τα στοιχεία επικοινωνίας σας χρησιμοποιούνται αυστηρά και αποκλειστικά για την επικοινωνία σχετικά με το αίτημά σας, τη συζήτηση των αναγκών του χώρου σας, την παροχή ειλικρινούς προσφοράς και τον προγραμματισμό επισκέψεων.',
      s3Title: '3. Μη Διαμοιρασμός σε Τρίτους',
      s3Text:
        'Δεν πωλούμε, δεν ενοικιάζουμε και δεν μεταβιβάζουμε τα στοιχεία σας σε τρίτους ούτε τα χρησιμοποιούμε για ανεπιθύμητα διαφημιστικά μηνύματα. Η επικοινωνία είναι άμεση μεταξύ εσάς και της Maxclean (+357 96 066878).',
      s4Title: '4. Επικοινωνία & Ερωτήσεις',
      s4Text:
        'Εάν έχετε οποιαδήποτε ερώτηση σχετικά με τη διαχείριση των στοιχείων σας, μπορείτε να επικοινωνήσετε απευθείας με τη Maxclean στο +357 96 066878 ή να επισκεφθείτε την έδρα μας στην οδό Αλβέρτου, Πάφος 8015, Κύπρος.',
      closeBtn: 'Κατάλαβα',
    },
  },
};
