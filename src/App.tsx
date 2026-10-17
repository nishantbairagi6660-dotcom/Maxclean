import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Star, MessageCircle, MapPin } from 'lucide-react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyChoose } from './components/WhyChoose';
import { Reviews } from './components/Reviews';
import { Gallery } from './components/Gallery';
import { HowItWorks } from './components/HowItWorks';
import { ServiceArea } from './components/ServiceArea';
import { Faq } from './components/Faq';
import { QuoteForm } from './components/QuoteForm';
import { Footer } from './components/Footer';
import { StickyMobileActions } from './components/StickyMobileActions';
import { ServiceDetailPage } from './components/ServiceDetailPage';
import { BackToTop } from './components/BackToTop';
import { PageBreadcrumb } from './components/PageBreadcrumb';
import { SERVICE_DETAILS } from './data/serviceDetails';
import { BUSINESS_INFO } from './data/constants';

function WebsiteContent() {
  const { currentPath, navigate } = useRouter();
  const { language } = useLanguage();
  const [selectedService, setSelectedService] = useState<string>('');

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
  };

  // Normalize path
  const normalizedPath = currentPath.split('#')[0].replace(/\/$/, '') || '/';

  // Check if current route is a dedicated service page: /services/:slug
  const isServicePage = normalizedPath.startsWith('/services/');
  const serviceSlug = isServicePage ? normalizedPath.replace('/services/', '').replace(/\/$/, '') : '';
  const validServiceSlug = Boolean(SERVICE_DETAILS[serviceSlug]);

  // Update document title and meta description based on route and language
  useEffect(() => {
    const pageTitles: Record<string, { en: string; el: string }> = {
      '/': {
        en: 'Maxclean | House Cleaning Services in Paphos, Cyprus',
        el: 'Maxclean | Υπηρεσίες Καθαρισμού στην Πάφο, Κύπρος',
      },
      '/about': {
        en: 'About Us | Maxclean House Cleaning Paphos',
        el: 'Σχετικά με Εμάς | Maxclean Καθαρισμός Σπιτιών Πάφος',
      },
      '/services': {
        en: 'Cleaning Services in Paphos | Maxclean',
        el: 'Υπηρεσίες Καθαρισμού στην Πάφο | Maxclean',
      },
      '/why-choose-us': {
        en: 'Why Choose Us | Maxclean Paphos',
        el: 'Γιατί να μας Επιλέξετε | Maxclean Πάφος',
      },
      '/reviews': {
        en: 'Customer Reviews & Results Gallery | Maxclean Paphos',
        el: 'Κριτικές Πελατών & Φωτογραφίες Έργων | Maxclean Πάφος',
      },
      '/faqs': {
        en: 'Frequently Asked Questions | Maxclean Paphos',
        el: 'Συχνές Ερωτήσεις | Maxclean Πάφος',
      },
      '/contact': {
        en: 'Contact & Free Quote | Maxclean Paphos',
        el: 'Επικοινωνία & Δωρεάν Προσφορά | Maxclean Πάφος',
      },
    };

    if (!isServicePage) {
      const pageMeta = pageTitles[normalizedPath];
      if (pageMeta) {
        document.title = pageMeta[language];
      }
    }
  }, [normalizedPath, isServicePage, language]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#667085] antialiased selection:bg-[#4F8FEF]/20 selection:text-[#17243A] overflow-x-hidden">
      {/* Top Header with Navigation Links & Language Switcher */}
      <Header onSelectService={handleSelectService} />

      {/* Main Content Area - Render Separate Pages Based on Route */}
      <main className="flex-1">
        {/* Route 1: Dedicated Service Detail Page */}
        {isServicePage ? (
          validServiceSlug ? (
            <>
              <ServiceDetailPage
                slug={serviceSlug}
                onOpenQuote={handleSelectService}
              />
              {/* Quote Form Section on Service Page for Instant Conversion */}
              <QuoteForm initialService={selectedService || SERVICE_DETAILS[serviceSlug]?.title.en} />
            </>
          ) : (
            <div className="max-w-3xl mx-auto px-4 py-20 text-center">
              <h1 className="text-3xl font-extrabold text-[#17243A] font-display mb-3">
                {language === 'el' ? 'Η Σελίδα δεν βρέθηκε' : 'Service Page Not Found'}
              </h1>
              <p className="text-base text-[#667085] mb-8">
                {language === 'el'
                  ? 'Η υπηρεσία που ζητήσατε δεν υπάρχει.'
                  : 'The requested cleaning service page does not exist.'}
              </p>
              <button
                type="button"
                onClick={() => navigate('/')}
                className="px-7 py-3 rounded-full bg-[#4F8FEF] hover:bg-[#3d7fdc] text-white font-semibold font-display shadow-md cursor-pointer"
              >
                {language === 'el' ? 'Επιστροφή στην Αρχική' : 'Return to Homepage'}
              </button>
            </div>
          )
        ) : normalizedPath === '/about' ? (
          /* Route 2: Separate About Us Page */
          <>
            <PageBreadcrumb title={language === 'el' ? 'Σχετικά με Εμάς' : 'About Us'} />
            <About />
            <HowItWorks />
          </>
        ) : normalizedPath === '/services' ? (
          /* Route 3: Separate Services Page */
          <>
            <PageBreadcrumb title={language === 'el' ? 'Υπηρεσίες Καθαρισμού' : 'Cleaning Services'} />
            <Services onSelectService={handleSelectService} />
          </>
        ) : normalizedPath === '/why-choose-us' || normalizedPath === '/why-us' ? (
          /* Route 4: Separate Why Choose Us Page */
          <>
            <PageBreadcrumb title={language === 'el' ? 'Γιατί να μας Επιλέξετε' : 'Why Choose Us'} />
            <WhyChoose />
            <HowItWorks />
          </>
        ) : normalizedPath === '/reviews' ? (
          /* Route 5: Separate Reviews & Work Gallery Page */
          <>
            <PageBreadcrumb title={language === 'el' ? 'Κριτικές & Φωτογραφίες Έργων' : 'Reviews & Gallery'} />
            <Reviews />
            <Gallery />
          </>
        ) : normalizedPath === '/faqs' || normalizedPath === '/faq' ? (
          /* Route 6: Separate FAQs Page */
          <>
            <PageBreadcrumb title={language === 'el' ? 'Συχνές Ερωτήσεις' : 'Frequently Asked Questions'} />
            <Faq />
          </>
        ) : normalizedPath === '/contact' || normalizedPath === '/quote' ? (
          /* Route 7: Separate Contact & Free Quote Page */
          <>
            <PageBreadcrumb title={language === 'el' ? 'Επικοινωνία & Προσφορά' : 'Contact & Quote'} />
            <ServiceArea />
            <QuoteForm initialService={selectedService} />
          </>
        ) : normalizedPath === '/' ? (
          /* Route 8: Dedicated Home Page */
          <>
            {/* 1. Hero Section ("Feel Your Home’s Freshness") */}
            <Hero />

            {/* 2. Benefits (3 Clean Modern Cards: Personalised, Detail, Communication) */}
            <Benefits />

            {/* 3. Homepage Highlights / Quick Nav Section linking to separate pages */}
            <section className="py-16 sm:py-20 bg-[#EAF4FF]/30 border-b border-[#E5EDF7]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E5EDF7] text-[#4F8FEF] text-xs font-bold uppercase tracking-wider font-display mb-3 shadow-xs">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{language === 'el' ? 'Ανακαλύψτε τη Maxclean' : 'Explore Maxclean'}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#17243A] tracking-tight font-display">
                    {language === 'el'
                      ? 'Ολοκληρωμένες Υπηρεσίες Καθαρισμού στην Πάφο'
                      : 'Complete Cleaning Care for Paphos Homes'}
                  </h2>
                  <p className="mt-3 text-sm sm:text-base text-[#667085] leading-relaxed">
                    {language === 'el'
                      ? 'Από τακτικό καθαρισμό σπιτιού και γενικό καθαρισμό μέχρι τουριστικά καταλύματα και επαύλεις, προσφέρουμε εξατομικευμένη φροντίδα.'
                      : 'From routine residential visits to intensive deep cleans and villa care, explore how Maxclean can help you enjoy a fresh, spotless space.'}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                  {/* Card 1: Services Page link */}
                  <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E5EDF7] shadow-xs hover:border-[#4F8FEF] hover:shadow-md transition-all flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-[#EAF4FF] text-[#4F8FEF] flex items-center justify-center mb-5">
                        <Sparkles className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-[#17243A] font-display mb-2">
                        {language === 'el' ? 'Υπηρεσίες Καθαρισμού' : 'Cleaning Services'}
                      </h3>
                      <p className="text-sm text-[#667085] leading-relaxed mb-6 font-normal">
                        {language === 'el'
                          ? 'Δείτε αναλυτικά όλες τις υπηρεσίες μας: Τακτικός Καθαρισμός, Γενικός Καθαρισμός, Διαμερίσματα, Επαύλεις, Τουριστικά Καταλύματα, Μετακόμιση και Τζάμια.'
                          : 'Explore dedicated pages for Regular House Cleaning, Deep Cleaning, Apartments, Villas, Holiday Rentals, Move-In / Out, and Windows.'}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => navigate('/services')}
                      className="inline-flex items-center justify-between w-full pt-4 border-t border-[#E5EDF7] text-sm font-bold text-[#4F8FEF] hover:text-[#3d7fdc] font-display cursor-pointer"
                    >
                      <span>{language === 'el' ? 'Όλες οι Υπηρεσίες' : 'View All Services'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Card 2: Why Choose Us link */}
                  <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E5EDF7] shadow-xs hover:border-[#4F8FEF] hover:shadow-md transition-all flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-[#EAF4FF] text-[#4F8FEF] flex items-center justify-center mb-5">
                        <ShieldCheck className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-[#17243A] font-display mb-2">
                        {language === 'el' ? 'Γιατί τη Maxclean' : 'Why Maxclean'}
                      </h3>
                      <p className="text-sm text-[#667085] leading-relaxed mb-6 font-normal">
                        {language === 'el'
                          ? 'Σαφής συνεννόηση, συμφωνημένες λίστες εργασιών ανά χώρο και διαφανείς προσφορές χωρίς κρυφά κόστη.'
                          : 'Attention to detail, flexible scheduling, and upfront confirmed checklists with verified local presence in Paphos.'}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => navigate('/why-choose-us')}
                      className="inline-flex items-center justify-between w-full pt-4 border-t border-[#E5EDF7] text-sm font-bold text-[#4F8FEF] hover:text-[#3d7fdc] font-display cursor-pointer"
                    >
                      <span>{language === 'el' ? 'Μάθετε Περισσότερα' : 'Why Choose Us'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Card 3: Reviews & Google Listing link */}
                  <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E5EDF7] shadow-xs hover:border-[#4F8FEF] hover:shadow-md transition-all flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-[#EAF4FF] text-[#4F8FEF] flex items-center justify-center mb-5">
                        <Star className="w-6 h-6 fill-[#4F8FEF]" />
                      </div>
                      <h3 className="text-xl font-bold text-[#17243A] font-display mb-2">
                        {language === 'el' ? 'Κριτικές & Φωτογραφίες' : 'Reviews & Gallery'}
                      </h3>
                      <p className="text-sm text-[#667085] leading-relaxed mb-6 font-normal">
                        {language === 'el'
                          ? 'Δείτε επαληθευμένες αξιολογήσεις 5 αστέρων στο Google Maps και δείγματα από τα υψηλά πρότυπα καθαριότητάς μας.'
                          : 'Read authentic 5-star customer feedback on Google Maps and browse our gallery of spotless living rooms, kitchens, and bathrooms.'}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => navigate('/reviews')}
                      className="inline-flex items-center justify-between w-full pt-4 border-t border-[#E5EDF7] text-sm font-bold text-[#4F8FEF] hover:text-[#3d7fdc] font-display cursor-pointer"
                    >
                      <span>{language === 'el' ? 'Δείτε Κριτικές & Έργα' : 'Explore Reviews & Work'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Quick CTA Banner on Homepage */}
                <div className="mt-12 sm:mt-14 rounded-3xl bg-gradient-to-r from-[#17243A] to-[#1e3458] text-white p-8 sm:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="space-y-2 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#6BA5F5]">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{BUSINESS_INFO.address}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-display">
                      {language === 'el' ? 'Χρειάζεστε Καθαρισμό στην Πάφο;' : 'Ready for a Spotless, Fresh Home?'}
                    </h3>
                    <p className="text-sm text-white/70 max-w-xl font-normal">
                      {language === 'el'
                        ? 'Επικοινωνήστε μαζί μας σήμερα για δωρεάν προσφορά ή συνομιλήστε άμεσα στο WhatsApp.'
                        : 'Get in touch for a transparent, no-obligation quote tailored to your property requirements.'}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
                    <button
                      type="button"
                      onClick={() => navigate('/contact')}
                      className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#4F8FEF] hover:bg-[#3d7fdc] text-white text-sm font-semibold shadow-md transition-all font-display cursor-pointer"
                    >
                      {language === 'el' ? 'Ζητήστε Προσφορά' : 'Get a Free Quote'}
                    </button>
                    <a
                      href={BUSINESS_INFO.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold border border-white/20 transition-all font-display"
                    >
                      <MessageCircle className="w-4 h-4 text-[#6BA5F5]" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : (
          /* 404 Route */
          <div className="max-w-3xl mx-auto px-4 py-24 text-center">
            <h1 className="text-3xl font-extrabold text-[#17243A] font-display mb-3">
              {language === 'el' ? 'Η Σελίδα δεν βρέθηκε (404)' : 'Page Not Found (404)'}
            </h1>
            <p className="text-base text-[#667085] mb-8">
              {language === 'el'
                ? 'Η σελίδα που αναζητάτε δεν υπάρχει.'
                : 'The page you are looking for does not exist.'}
            </p>
            <button
              type="button"
              onClick={() => navigate('/')}
              className="px-7 py-3 rounded-full bg-[#4F8FEF] hover:bg-[#3d7fdc] text-white font-semibold font-display shadow-md cursor-pointer"
            >
              {language === 'el' ? 'Επιστροφή στην Αρχική' : 'Return to Homepage'}
            </button>
          </div>
        )}
      </main>

      {/* Footer with Logo, Links, Verified Details & WhatsApp CTA */}
      <Footer />

      {/* Mobile Sticky Action Bar */}
      <StickyMobileActions />

      {/* Floating Back to Top Button */}
      <BackToTop />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <RouterProvider>
        <WebsiteContent />
      </RouterProvider>
    </LanguageProvider>
  );
}
