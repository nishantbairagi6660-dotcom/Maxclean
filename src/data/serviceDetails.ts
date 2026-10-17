export interface ServiceDetailData {
  slug: string;
  path: string;
  title: { en: string; el: string };
  metaTitle: { en: string; el: string };
  metaDescription: { en: string; el: string };
  badge: { en: string; el: string };
  image: string;
  summary: { en: string; el: string };
  fullDescription: { en: string[]; el: string[] };
  checklist: { en: string[]; el: string[] };
  benefits: { en: string[]; el: string[] };
  faqs: {
    question: { en: string; el: string };
    answer: { en: string; el: string };
  }[];
  whatsAppText: { en: string; el: string };
}

export const SERVICE_DETAILS: Record<string, ServiceDetailData> = {
  'regular-house-cleaning': {
    slug: 'regular-house-cleaning',
    path: '/services/regular-house-cleaning',
    title: {
      en: 'Regular House Cleaning',
      el: 'Τακτικός Καθαρισμός Σπιτιού',
    },
    metaTitle: {
      en: 'Regular House Cleaning in Paphos | Maxclean',
      el: 'Τακτικός Καθαρισμός Σπιτιού στην Πάφο | Maxclean',
    },
    metaDescription: {
      en: 'Routine house cleaning in Paphos by Maxclean. Keep your home fresh, tidy, and clean with personalized weekly or fortnightly cleaning visits.',
      el: 'Τακτικός καθαρισμός σπιτιού στην Πάφο από τη Maxclean. Διατηρήστε το σπίτι σας φρέσκο και καθαρό με εβδομαδιαίες ή δεκαπενθήμερες επισκέψεις.',
    },
    badge: {
      en: 'Routine Residential Care',
      el: 'Συστηματική Φροντίδα Κατοικίας',
    },
    image: '/images/about_spotless_home_1792220476705.jpg',
    summary: {
      en: 'Routine cleaning to help keep living spaces fresh, tidy, and comfortable on your preferred schedule.',
      el: 'Συστηματικός καθαρισμός ρουτίνας για να διατηρείται το σπίτι σας φρέσκο, τακτοποιημένο και άνετο στο πρόγραμμα που επιθυμείτε.',
    },
    fullDescription: {
      en: [
        'Our Regular House Cleaning service is tailored for homeowners and residents in Paphos who want a consistently fresh, inviting home without the stress of constant upkeep.',
        'We work with you to establish an agreed room-by-room checklist covering all high-traffic areas, kitchens, bathrooms, bedrooms, and living spaces. Whether you prefer weekly, fortnightly, or monthly visits, the service is adjusted to your household schedule.',
      ],
      el: [
        'Η υπηρεσία Τακτικού Καθαρισμού Σπιτιού είναι σχεδιασμένη για ιδιοκτήτες και ενοίκους στην Πάφο που επιθυμούν ένα διαρκώς φρέσκο και περιποιημένο σπίτι.',
        'Συνεργαζόμαστε μαζί σας για τον καθορισμό συμφωνημένης λίστας εργασιών ανά δωμάτιο, καλύπτοντας κουζίνες, μπάνια, υπνοδωμάτια και καθιστικά σε εβδομαδιαία ή δεκαπενθήμερη βάση.',
      ],
    },
    checklist: {
      en: [
        'Dusting of accessible surfaces, tables, shelves, and furnishings',
        'Sweeping, vacuuming, and mopping of all hard floors and rugs',
        'Wiping and sanitizing kitchen countertops, stovetops, and sink surrounds',
        'Exterior wiping of kitchen cupboards and major appliances',
        'Scrubbing and disinfecting bathroom basins, toilets, and shower areas',
        'Emptying waste bins and replacing trash liners',
        'Making beds and straightening common living spaces',
      ],
      el: [
        'Ξεσκόνισμα προσβάσιμων επιφανειών, επίπλων και ραφιών',
        'Σκούπισμα και σφουγγάρισμα όλων των δαπέδων και χαλιών',
        'Καθαρισμός και απολύμανση πάγκων κουζίνας, εστιών και νεροχύτη',
        'Εξωτερικό καθάρισμα ντουλαπιών κουζίνας και οικιακών συσκευών',
        'Καθαρισμός και απολύμανση νιπτήρα, λεκάνης και ντουζιέρας',
        'Άδειασμα κάδων απορριμμάτων',
        'Στρώσιμο κρεβατιών και τακτοποίηση κοινόχρηστων χώρων',
      ],
    },
    benefits: {
      en: [
        'Consistent cleaning standards agreed before the visit',
        'Flexible scheduling (weekly, fortnightly, or monthly)',
        'Direct communication with Maxclean via phone or WhatsApp',
        'Quote tailored strictly to your property layout',
      ],
      el: [
        'Σταθερά πρότυπα καθαριότητας συμφωνημένα εκ των προτέρων',
        'Ευέλικτο πρόγραμμα (εβδομαδιαίο, δεκαπενθήμερο ή μηνιαίο)',
        'Άμεση επικοινωνία με τη Maxclean μέσω τηλεφώνου ή WhatsApp',
        'Προσφορά προσαρμοσμένη στη διαρρύθμιση του ακινήτου σας',
      ],
    },
    faqs: [
      {
        question: {
          en: 'How often can regular house cleaning be scheduled?',
          el: 'Πόσο συχνά μπορεί να προγραμματιστεί ο τακτικός καθαρισμός;',
        },
        answer: {
          en: 'You can arrange weekly, fortnightly, or monthly cleaning visits depending on your property and schedule availability in Paphos.',
          el: 'Μπορείτε να κανονίσετε εβδομαδιαίες, δεκαπενθήμερες ή μηνιαίες επισκέψεις, ανάλογα με τις ανάγκες σας και τη διαθεσιμότητα στην Πάφο.',
        },
      },
      {
        question: {
          en: 'Can I customize the areas covered during each visit?',
          el: 'Μπορώ να προσαρμόσω τις περιοχές που καλύπτονται σε κάθε επίσκεψη;',
        },
        answer: {
          en: 'Yes. We discuss your priorities beforehand so our cleaning checklist focuses on the rooms and surfaces most important to you.',
          el: 'Ναι. Συζητάμε τις προτεραιότητές σας εκ των προτέρων ώστε η λίστα εργασιών να επικεντρώνεται στα δωμάτια που επιθυμείτε.',
        },
      },
    ],
    whatsAppText: {
      en: 'Hello Maxclean, I am interested in Regular House Cleaning in Paphos. Please send me a quote.',
      el: 'Γεια σας Maxclean, ενδιαφέρομαι για Τακτικό Καθαρισμό Σπιτιού στην Πάφο. Παρακαλώ στείλτε μου μια προσφορά.',
    },
  },

  'deep-cleaning': {
    slug: 'deep-cleaning',
    path: '/services/deep-cleaning',
    title: {
      en: 'Deep Cleaning',
      el: 'Γενικός / Βαθύς Καθαρισμός',
    },
    metaTitle: {
      en: 'Deep Cleaning Services in Paphos | Maxclean',
      el: 'Υπηρεσίες Γενικού Καθαρισμού στην Πάφο | Maxclean',
    },
    metaDescription: {
      en: 'Comprehensive deep cleaning for homes and villas in Paphos. Intensive detailing of kitchens, bathrooms, tiles, and hard-to-reach surfaces.',
      el: 'Ολοκληρωμένος γενικός καθαρισμός σπιτιών και επαύλεων στην Πάφο από τη Maxclean. Σχολαστική καθαριότητα κουζίνας, μπάνιων και επιφανειών.',
    },
    badge: {
      en: 'Intensive Reset Clean',
      el: 'Εντατικός Καθαρισμός Επαναφοράς',
    },
    image: '/images/gallery_spotless_kitchen_1792220477336.jpg',
    summary: {
      en: 'A more detailed clean for areas that need extra attention, including kitchens, bathrooms, and commonly overlooked surfaces.',
      el: 'Λεπτομερής καθαρισμός για χώρους που χρειάζονται εντατική προσοχή, συμπεριλαμβανομένων κουζινών, μπάνιων και συχνά παραμελημένων επιφανειών.',
    },
    fullDescription: {
      en: [
        'Deep cleaning goes beyond surface tidying to tackle built-up grime, soap scum, limescale, grease, and neglected corners across your residence.',
        'Ideal for seasonal refreshes, pre-event preparation, or restoring an unlived-in home, this detailed service covers thorough scrubbing of sanitary ware, kitchen splashbacks, tile grout lines, and behind furniture where accessible.',
      ],
      el: [
        'Ο γενικός καθαρισμός προχωρά πέρα από το απλό επιφανειακό καθάρισμα, αντιμετωπίζοντας συσσωρευμένη σκόνη, άλατα, λίπη και δυσπρόσιτες γωνίες.',
        'Ιδανικός για εποχιακό φρεσκάρισμα, προετοιμασία εκδηλώσεων ή ανανέωση κατοικίας, ο γενικός καθαρισμός περιλαμβάνει σχολαστική φροντίδα ειδών υγιεινής και κουζίνας.',
      ],
    },
    checklist: {
      en: [
        'Detailed scrubbing and descaling of bathroom wall tiles, faucets, and grout',
        'Deep cleaning of shower screens, basins, toilets, and bath surrounds',
        'Degreasing of kitchen extractor hoods, cooker hobs, and tiled splashbacks',
        'Wiping down of interior doors, door handles, light switches, and baseboards',
        'Dusting and wiping behind and underneath accessible movable furniture',
        'Detailed vacuuming and washing of floor skirting boards and corners',
        'Internal window sill and accessible glass surface cleaning',
      ],
      el: [
        'Σχολαστικό τρίψιμο και αφαίρεση αλάτων από πλακάκια μπάνιου και βρύσες',
        'Βαθύς καθαρισμός καμπίνας ντους, νιπτήρα, λεκάνης και μπανιέρας',
        'Απολίπανση απορροφητήρα κουζίνας, εστιών και επιφανειών προστασίας',
        'Καθάρισμα εσωτερικών πορτών, διακοπτών και σοβατεπί',
        'Ξεσκόνισμα πίσω και κάτω από προσβάσιμα έπιπλα',
        'Σχολαστικό σκούπισμα και σφουγγάρισμα σε όλες τις γωνίες',
        'Καθαρισμός περβαζιών και προσβάσιμων τζαμιών',
      ],
    },
    benefits: {
      en: [
        'Reaches overlooked areas and built-up residue',
        'Ideal baseline before starting a regular cleaning routine',
        'Leaves your home noticeably brighter and hygienic',
        'Custom scope agreed based on property inspection or photos',
      ],
      el: [
        'Φτάνει σε δυσπρόσιτα σημεία και συσσωρευμένα υπολείμματα',
        'Ιδανικό σημείο εκκίνησης πριν από τακτικό καθαρισμό',
        'Αφήνει τον χώρο αισθητά φωτεινότερο και υγιεινό',
        'Εξατομικευμένη εκτίμηση βάσει περιγραφής ή φωτογραφιών',
      ],
    },
    faqs: [
      {
        question: {
          en: 'How long does a deep clean usually take?',
          el: 'Πόση ώρα διαρκεί συνήθως ένας γενικός καθαρισμός;',
        },
        answer: {
          en: 'Duration depends on the property size and condition. A typical deep clean in Paphos can take from 4 to 8 hours depending on room count.',
          el: 'Η διάρκεια εξαρτάται από το μέγεθος και την κατάσταση του ακινήτου, συνήθως από 4 έως 8 ώρες.',
        },
      },
      {
        question: {
          en: 'Do I need to be present during the deep cleaning?',
          el: 'Χρειάζεται να βρίσκομαι στον χώρο κατά τον γενικό καθαρισμό;',
        },
        answer: {
          en: 'You are welcome to be home or arrange key access for the visit. We can walk through the agreed checklist before and after completion.',
          el: 'Μπορείτε να βρίσκεστε στον χώρο ή να κανονίσετε παράδοση κλειδιών κατόπιν συνεννόησης.',
        },
      },
    ],
    whatsAppText: {
      en: 'Hello Maxclean, I would like to request a quote for Deep Cleaning in Paphos.',
      el: 'Γεια σας Maxclean, θα ήθελα μια προσφορά για Γενικό Καθαρισμό στην Πάφο.',
    },
  },

  'apartment-cleaning': {
    slug: 'apartment-cleaning',
    path: '/services/apartment-cleaning',
    title: {
      en: 'Apartment Cleaning',
      el: 'Καθαρισμός Διαμερίσματος',
    },
    metaTitle: {
      en: 'Apartment Cleaning Services in Paphos | Maxclean',
      el: 'Καθαρισμός Διαμερισμάτων στην Πάφο | Maxclean',
    },
    metaDescription: {
      en: 'Professional apartment cleaning in Paphos for studios, 1-bed, 2-bed, and penthouse residences. Flexible scheduling and transparent quotes.',
      el: 'Επαγγελματικός καθαρισμός διαμερισμάτων στην Πάφο για στούντιο, διαμερίσματα και ρετιρέ. Ευέλικτος προγραμματισμός και σαφείς προσφορές.',
    },
    badge: {
      en: 'Tailored for Flats & Condos',
      el: 'Ειδικά για Διαμερίσματα',
    },
    image: '/images/about_clean_bedroom_1792221222996.jpg',
    summary: {
      en: 'Cleaning tailored to apartments, including living areas, bedrooms, kitchens, and bathrooms.',
      el: 'Καθαρισμός προσαρμοσμένος σε διαμερίσματα, συμπεριλαμβανομένων σαλονιού, υπνοδωματίων, κουζίνας και μπάνιων.',
    },
    fullDescription: {
      en: [
        'Apartment living in Paphos calls for streamlined, flexible cleaning that maximizes comfort in compact and multi-bedroom layouts.',
        'Whether you live in a modern studio near Kato Paphos or a spacious penthouse in Universal, our apartment cleaning service covers all essential rooms, balcony glass doors, and interior living zones with high attention to detail.',
      ],
      el: [
        'Η διαμονή σε διαμέρισμα στην Πάφο απαιτεί ευέλικτη και οργανωμένη φροντίδα που διατηρεί τον χώρο σας άνετο και πεντακάθαρο.',
        'Είτε πρόκειται για στούντιο στην Κάτω Πάφο είτε για ευρύχωρο διαμέρισμα στο Universal, καλύπτουμε όλους τους χώρους, μπαλκονόπορτες και καθιστικό με προσοχή στη λεπτομέρεια.',
      ],
    },
    checklist: {
      en: [
        'Complete cleaning of kitchen surfaces, sink, and outside cabinetry',
        'Balcony floor sweep and sliding patio glass door wiping',
        'Sanitizing bathroom tiles, mirrors, toilet, and shower enclosure',
        'Dusting of bedroom nightstands, headboards, and wardrobes',
        'Vacuuming of rugs and mopping of all tile and laminate floors',
        'Disposal of trash and general tidying',
      ],
      el: [
        'Πλήρης καθαρισμός επιφανειών κουζίνας, νεροχύτη και εξωτερικών ντουλαπιών',
        'Σκούπισμα μπαλκονιού και καθάρισμα συρόμενων γυάλινων πορτών',
        'Απολύμανση πλακιδίων μπάνιου, καθρεφτών, λεκάνης και καμπίνας',
        'Ξεσκόνισμα κομοδίνων, κεφαλαριών και ντουλαπών',
        'Σκούπισμα και σφουγγάρισμα όλων των δαπέδων',
        'Αποκομιδή απορριμμάτων και τακτοποίηση',
      ],
    },
    benefits: {
      en: [
        'Optimized for 1, 2, and 3-bedroom apartment floorplans',
        'Quick turnaround without disrupting building neighbours',
        'Includes balcony and glass door maintenance',
        'Affordable, transparent quotes per apartment size',
      ],
      el: [
        'Προσαρμοσμένο για διαμερίσματα 1, 2 ή 3 υπνοδωματίων',
        'Γρήγορη και αθόρυβη εξυπηρέτηση με σεβασμό στην πολυκατοικία',
        'Περιλαμβάνει καθάρισμα μπαλκονιού και τζαμιών',
        'Διαφανείς προσφορές βάσει τετραγωνικών μέτρων',
      ],
    },
    faqs: [
      {
        question: {
          en: 'Do you clean apartment balconies and terraces?',
          el: 'Καθαρίζετε μπαλκόνια και βεράντες διαμερισμάτων;',
        },
        answer: {
          en: 'Yes, balcony floor sweeping and wiping of accessible glass terrace doors can be included in the agreed checklist.',
          el: 'Ναι, το σκούπισμα και σφουγγάρισμα μπαλκονιών και οι γυάλινες μπαλκονόπορτες περιλαμβάνονται στη συμφωνημένη λίστα.',
        },
      },
    ],
    whatsAppText: {
      en: 'Hello Maxclean, I need an Apartment Cleaning quote in Paphos.',
      el: 'Γεια σας Maxclean, χρειάζομαι προσφορά για Καθαρισμό Διαμερίσματος στην Πάφο.',
    },
  },

  'villa-cleaning': {
    slug: 'villa-cleaning',
    path: '/services/villa-cleaning',
    title: {
      en: 'Villa Cleaning',
      el: 'Καθαρισμός Έπαυλης / Βίλας',
    },
    metaTitle: {
      en: 'Villa Cleaning Services in Paphos & Coral Bay | Maxclean',
      el: 'Καθαρισμός Επαύλεων στην Πάφο & Coral Bay | Maxclean',
    },
    metaDescription: {
      en: 'Comprehensive cleaning for private residential villas and holiday homes in Paphos, Peyia, and Coral Bay. Multilevel floors, verandas, and bathrooms.',
      el: 'Ολοκληρωμένος καθαρισμός ιδιωτικών επαύλεων και εξοχικών κατοικιών στην Πάφο, Πέγεια και Coral Bay από τη Maxclean.',
    },
    badge: {
      en: 'Large Residential Estates',
      el: 'Ευρύχωρες Κατοικίες & Επαύλεις',
    },
    image: '/images/hero_clean_villa_living_1792220476225.jpg',
    summary: {
      en: 'Cleaning for larger residential properties and villas, with the scope agreed according to the property and customer requirements.',
      el: 'Καθαρισμός για μεγαλύτερες κατοικίες και επαύλεις στην Πάφο, με εύρος που συμφωνείται βάσει των απαιτήσεων του ακινήτου.',
    },
    fullDescription: {
      en: [
        'Villas in Paphos, Peyia, and surrounding coastal areas feature multi-floor layouts, expansive glass patio doors, outdoor dining verandas, and multiple ensuite bathrooms.',
        'Our Villa Cleaning service is designed specifically to handle large residential footprints efficiently. We establish a clear plan covering master bedrooms, guest suites, extensive living spaces, and poolside verandas.',
      ],
      el: [
        'Οι επαύλεις στην Πάφο, την Πέγεια και τις γύρω παράκτιες περιοχές διαθέτουν πολλαπλά επίπεδα, μεγάλες τζαμαρίες, βεράντες και αρκετά en-suite μπάνια.',
        'Η υπηρεσία Καθαρισμού Έπαυλης της Maxclean είναι σχεδιασμένη για μεγάλους χώρους, με σαφές πλάνο για όλα τα υπνοδωμάτια, καθιστικά και βεράντες.',
      ],
    },
    checklist: {
      en: [
        'Multi-level floor care (vacuuming, wet mopping of marble, stone, and tile)',
        'Cleaning and sanitizing of all villa bathrooms and guest powder rooms',
        'Large open-plan kitchen and island deep cleaning',
        'Cleaning of extensive patio sliding doors and ground-level glass',
        'Sweeping of covered verandas and outdoor dining terraces',
        'Staircase handrail and banister dusting and wiping',
        'Linen change and master suite presentation',
      ],
      el: [
        'Φροντίδα δαπέδων πολλαπλών επιπέδων (μάρμαρο, πέτρα, πλακάκια)',
        'Καθαρισμός και απολύμανση όλων των μπάνιων και WC επισκεπτών',
        'Σχολαστικός καθαρισμός κουζίνας ενιαίου χώρου και νησίδας',
        'Καθαρισμός συρόμενων τζαμαριών βεράντας και ισογείων παραθύρων',
        'Σκούπισμα σκεπαστών βεραντών και εξωτερικών τραπεζαριών',
        'Ξεσκόνισμα κουπαστής σκάλας και κιγκλιδωμάτων',
        'Αλλαγή κλινοσκεπασμάτων και προετοιμασία δωματίων',
      ],
    },
    benefits: {
      en: [
        'Experienced handling of multi-bedroom and multi-bathroom properties',
        'Ideal for private owners and seasonal villa residents',
        'Veranda and outdoor lounge surface care included',
        'Direct quote based on floor area and confirmed checklist',
      ],
      el: [
        'Εμπειρία σε ακίνητα με πολλά υπνοδωμάτια και μπάνια',
        'Ιδανικό για μόνιμους κατοίκους και εποχιακούς ιδιοκτήτες',
        'Περιλαμβάνει καθαρισμό εξωτερικών βεραντών και χώρων χαλάρωσης',
        'Άμεση προσφορά βάσει εμβαδού και λίστας εργασιών',
      ],
    },
    faqs: [
      {
        question: {
          en: 'Do you cover villas in Coral Bay, Peyia, or Chloraka?',
          el: 'Καλύπτετε επαύλεις σε Coral Bay, Πέγεια ή Χλώρακα;',
        },
        answer: {
          en: 'Yes. We provide villa cleaning services across Paphos and adjacent communities. Please confirm your exact location when requesting your quote.',
          el: 'Ναι. Παρέχουμε υπηρεσίες σε όλη την επαρχία Πάφου κατόπιν επιβεβαίωσης της διεύθυνσής σας.',
        },
      },
    ],
    whatsAppText: {
      en: 'Hello Maxclean, I would like to discuss Villa Cleaning for my property in Paphos.',
      el: 'Γεια σας Maxclean, θα ήθελα να συζητήσουμε για Καθαρισμό Έπαυλης στην Πάφο.',
    },
  },

  'holiday-rental-cleaning': {
    slug: 'holiday-rental-cleaning',
    path: '/services/holiday-rental-cleaning',
    title: {
      en: 'Holiday Rental & Turnover Cleaning',
      el: 'Καθαρισμός Τουριστικών Καταλυμάτων / Airbnb',
    },
    metaTitle: {
      en: 'Holiday Rental & Airbnb Turnover Cleaning in Paphos | Maxclean',
      el: 'Καθαρισμός Airbnb & Τουριστικών Καταλυμάτων στην Πάφο | Maxclean',
    },
    metaDescription: {
      en: 'Professional guest turnover cleaning for Airbnbs and holiday apartments in Paphos. Spotless standards to welcome five-star guest reviews.',
      el: 'Επαγγελματικός καθαρισμός προετοιμασίας επισκεπτών για Airbnb και τουριστικά καταλύματα στην Πάφο από τη Maxclean.',
    },
    badge: {
      en: 'Guest Turnover Standard',
      el: 'Προετοιμασία Επισκεπτών',
    },
    image: '/images/service_holiday_turnover_1792222074619.jpg',
    summary: {
      en: 'Cleaning between guest stays to help prepare a property for the next arrival. Availability confirmed directly with Maxclean.',
      el: 'Καθαρισμός μεταξύ αφίξεων επισκεπτών για την ιδανική προετοιμασία του χώρου. Επιβεβαιώστε διαθεσιμότητα με τη Maxclean.',
    },
    fullDescription: {
      en: [
        'In Paphos, guest reviews depend on first impressions of cleanliness. Our Holiday Rental Turnover Cleaning ensures every incoming guest arrives at a pristine, sanitised, and welcoming property.',
        'We help hosts and property managers maintain hotel-grade standards between check-out and check-in times. Availability is confirmed with Maxclean based on your booking schedule.',
      ],
      el: [
        'Στην τουριστική αγορά της Πάφου, οι θετικές κριτικές επισκεπτών βασίζονται στην πρώτη εντύπωση καθαριότητας.',
        'Βοηθάμε τους οικοδεσπότες και διαχειριστές να διατηρούν πρότυπα υψηλού επιπέδου μεταξύ αναχωρήσεων και νέων αφίξεων. Η διαθεσιμότητα επιβεβαιώνεται βάσει του ημερολογίου σας.',
      ],
    },
    checklist: {
      en: [
        'Complete strip and remaking of beds with fresh guest linen',
        'Bathroom sanitation, mirror polishing, and clean towel staging',
        'Kitchen degreasing, dish inspection, and wiping appliances',
        'Refrigerator wipe-out and emptying of previous guest food',
        'Balcony terrace sweeping and patio furniture wiping',
        'Refilling guest toilet paper and basic amenities if supplied',
        'Final presentation check and security lockup check',
      ],
      el: [
        'Αλλαγή και στρώσιμο κρεβατιών με καθαρά κλινοσκεπάσματα',
        'Απολύμανση μπάνιου, γυάλισμα καθρεφτών και τοποθέτηση πετσετών',
        'Καθαρισμός κουζίνας, έλεγχος σκευών και καθάρισμα συσκευών',
        'Καθάρισμα ψυγείου και απομάκρυνση τροφίμων προηγούμενων επισκεπτών',
        'Σκούπισμα μπαλκονιού και καθάρισμα επίπλων εξωτερικού χώρου',
        'Τοποθέτηση αναλωσίμων εφόσον παρέχονται από τον ιδιοκτήτη',
        'Τελικός έλεγχος παρουσίασης και ασφάλισης χώρου',
      ],
    },
    benefits: {
      en: [
        'Reliable turnaround between check-out and check-in hours',
        'Helps protect host ratings and positive guest reviews',
        'Thorough inspection for left-behind items or damages',
        'Confirmed directly with Maxclean per booking calendar',
      ],
      el: [
        'Συνέπεια στο ωράριο μεταξύ αναχώρησης και νέας άφιξης',
        'Προστασία των υψηλών κριτικών του καταλύματός σας',
        'Έλεγχος για τυχόν ξεχασμένα αντικείμενα ή ζημιές',
        'Επιβεβαίωση διαθεσιμότητας απευθείας με τη Maxclean',
      ],
    },
    faqs: [
      {
        question: {
          en: 'Can you work within strict check-out and check-in windows?',
          el: 'Μπορείτε να εργαστείτε μέσα στο χρονικό παράθυρο check-out και check-in;',
        },
        answer: {
          en: 'Yes, turnover visits are scheduled in advance around your guest changeover hours, subject to calendar confirmation with Maxclean.',
          el: 'Ναι, οι επισκέψεις προγραμματίζονται εγκαίρως γύρω από τις ώρες αλλαγής επισκεπτών, κατόπιν επιβεβαίωσης διαθεσιμότητας.',
        },
      },
    ],
    whatsAppText: {
      en: 'Hello Maxclean, I need Holiday Rental turnover cleaning in Paphos. Can we discuss scheduling?',
      el: 'Γεια σας Maxclean, χρειάζομαι καθαρισμό τουριστικού καταλύματος στην Πάφο. Μπορούμε να συζητήσουμε διαθεσιμότητα;',
    },
  },

  'move-in-move-out-cleaning': {
    slug: 'move-in-move-out-cleaning',
    path: '/services/move-in-move-out-cleaning',
    title: {
      en: 'Move-In / Move-Out Cleaning',
      el: 'Καθαρισμός Μετακόμισης (Move-In / Out)',
    },
    metaTitle: {
      en: 'Move-In & Move-Out Cleaning in Paphos | Maxclean',
      el: 'Καθαρισμός Μετακόμισης στην Πάφο | Maxclean',
    },
    metaDescription: {
      en: 'Thorough tenancy and handover cleaning in Paphos. Prepare empty apartments and houses for new occupants or end-of-lease inspections.',
      el: 'Σχολαστικός καθαρισμός παράδοσης και παραλαβής ακινήτων στην Πάφο από τη Maxclean. Ετοιμάστε το σπίτι για μετακόμιση.',
    },
    badge: {
      en: 'Tenancy & Handover Ready',
      el: 'Έτοιμο για Παράδοση / Μετακόμιση',
    },
    image: '/images/service_move_in_out_1792222074615.jpg',
    summary: {
      en: 'A detailed clean before moving into a property or after moving out, subject to the agreed checklist.',
      el: 'Διεξοδικός καθαρισμός πριν από την εγκατάσταση ή μετά την αποχώρηση από ένα ακίνητο, σύμφωνα με συμφωνημένη λίστα.',
    },
    fullDescription: {
      en: [
        'Moving property is demanding. Our Move-In / Move-Out Cleaning service provides a comprehensive reset for empty residences, ensuring incoming tenants arrive at a sanitized home or outgoing tenants fulfill their handover expectations.',
        'With furniture cleared or unpacked, we deep clean cupboards inside and out, sanitize bathrooms, remove dust, and thoroughly wash all floors.',
      ],
      el: [
        'Η μετακόμιση είναι απαιτητική διαδικασία. Ο καθαρισμός Move-In / Move-Out προσφέρει πλήρη ανανέωση για άδεια ακίνητα πριν την είσοδο ή μετά την έξοδο.',
        'Με τον χώρο ελεύθερο, καθαρίζουμε ντουλάπια εσωτερικά και εξωτερικά, απολυμαίνουμε μπάνια και πλένουμε όλα τα δάπεδα σχολαστικά.',
      ],
    },
    checklist: {
      en: [
        'Interior and exterior wiping of all empty kitchen cabinets and drawers',
        'Deep cleaning of oven interior/exterior, stovetop, and extractor',
        'Scrubbing and descaling of all bathrooms, showers, and toilets',
        'Wiping inside bedroom wardrobes, shelving, and closets',
        'Wiping of interior doors, frames, light switches, and skirting boards',
        'Vacuuming and washing of all tiled and laminate floors',
        'Cleaning of window tracks, sills, and reachable glass',
      ],
      el: [
        'Εσωτερικό και εξωτερικό καθάρισμα όλων των άδειων ντουλαπιών και συρταριών',
        'Σχολαστικός καθαρισμός φούρνου, εστιών και απορροφητήρα',
        'Τρίψιμο και απολύμανση όλων των μπάνιων και ειδών υγιεινής',
        'Καθάρισμα εσωτερικού ντουλαπών υπνοδωματίων και ραφιών',
        'Καθάρισμα πορτών, κασών, διακοπτών και σοβατεπί',
        'Σκούπισμα και πλύσιμο όλων των δαπέδων',
        'Καθαρισμός οδηγών παραθύρων, περβαζιών και τζαμιών',
      ],
    },
    benefits: {
      en: [
        'Helps secure rental deposit return during tenancy inspections',
        'Provides peace of mind moving into a completely fresh home',
        'Focuses on empty property detailing (cabinets, closets, corners)',
        'Quote agreed upfront based on property size and state',
      ],
      el: [
        'Βοηθά στην ομαλή επιστροφή εγγύησης κατά την παράδοση',
        'Εξασφαλίζει απόλυτη καθαριότητα στο νέο σας σπίτι',
        'Εστίαση σε άδειους χώρους (ντουλάπια, ράφια, γωνίες)',
        'Σαφής προσφορά βάσει μεγέθους ακινήτου',
      ],
    },
    faqs: [
      {
        question: {
          en: 'Should the property be completely empty for this clean?',
          el: 'Πρέπει το ακίνητο να είναι εντελώς άδειο;',
        },
        answer: {
          en: 'Ideally yes. Having personal belongings and boxes cleared allows our team to clean inside all wardrobes, drawers, and floors efficiently.',
          el: 'Ιδανικά ναι. Χωρίς κούτες και έπιπλα ο καθαρισμός σε ντουλάπες, συρτάρια και δάπεδα γίνεται πολύ πιο αποτελεσματικά.',
        },
      },
    ],
    whatsAppText: {
      en: 'Hello Maxclean, I need a Move-In / Move-Out cleaning quote in Paphos.',
      el: 'Γεια σας Maxclean, χρειάζομαι προσφορά για Καθαρισμό Μετακόμισης στην Πάφο.',
    },
  },
};
