import React, { useEffect } from 'react';
import {
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Phone,
  HelpCircle,
  ShieldCheck,
  ArrowLeft,
  Calendar,
  Sparkles,
} from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import { useLanguage } from '../context/LanguageContext';
import { SERVICE_DETAILS, ServiceDetailData } from '../data/serviceDetails';
import { BUSINESS_INFO } from '../data/constants';

interface ServiceDetailPageProps {
  slug: string;
  onOpenQuote: (serviceTitle: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ slug, onOpenQuote }) => {
  const { navigate } = useRouter();
  const { language } = useLanguage();

  const service: ServiceDetailData | undefined = SERVICE_DETAILS[slug];

  useEffect(() => {
    if (service) {
      document.title = service.metaTitle[language];
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', service.metaDescription[language]);
      }
    }
  }, [service, language]);

  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-2xl font-bold text-[#17243A] font-display mb-3">
          {language === 'el' ? 'Η Υπηρεσία δεν βρέθηκε' : 'Service Not Found'}
        </h1>
        <p className="text-sm text-[#667085] mb-6">
          {language === 'el'
            ? 'Η υπηρεσία που αναζητάτε δεν είναι διαθέσιμη.'
            : 'The service you requested could not be found.'}
        </p>
        <button
          type="button"
          onClick={() => navigate('/')}
          className="px-6 py-2.5 rounded-full bg-[#4F8FEF] text-white text-sm font-semibold font-display hover:bg-[#3d7fdc]"
        >
          {language === 'el' ? 'Επιστροφή στην Αρχική' : 'Back to Home'}
        </button>
      </div>
    );
  }

  // Related services (exclude current slug)
  const relatedSlugs = Object.keys(SERVICE_DETAILS).filter((s) => s !== slug).slice(0, 3);

  const title = service.title[language];
  const summary = service.summary[language];
  const paragraphs = service.fullDescription[language];
  const checklist = service.checklist[language];
  const benefits = service.benefits[language];
  const faqs = service.faqs;
  const waMessage = encodeURIComponent(service.whatsAppText[language]);
  const waUrl = `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${waMessage}`;

  const handleQuoteClick = () => {
    onOpenQuote(title);
    navigate('/#quote', { scrollTarget: 'quote' });
  };

  return (
    <article className="py-8 sm:py-12 bg-white">
      {/* 1. Breadcrumbs */}
      <nav aria-label="Breadcrumbs" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <ol className="flex items-center flex-wrap gap-2 text-xs sm:text-sm text-[#667085]">
          <li>
            <button
              type="button"
              onClick={() => navigate('/')}
              className="hover:text-[#4F8FEF] transition-colors"
            >
              {language === 'el' ? 'Αρχική' : 'Home'}
            </button>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="w-3.5 h-3.5 text-[#667085]/50" />
          </li>
          <li>
            <button
              type="button"
              onClick={() => navigate('/#services', { scrollTarget: 'services' })}
              className="hover:text-[#4F8FEF] transition-colors"
            >
              {language === 'el' ? 'Υπηρεσίες' : 'Services'}
            </button>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="w-3.5 h-3.5 text-[#667085]/50" />
          </li>
          <li className="font-semibold text-[#17243A] truncate max-w-[200px] sm:max-w-none">
            {title}
          </li>
        </ol>
      </nav>

      {/* 2. Hero Header for Service */}
      <header id="service-hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF4FF] text-[#4F8FEF] text-xs font-bold uppercase tracking-wider font-display">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{service.badge[language]}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17243A] tracking-tight leading-[1.15] font-display">
              {title}
            </h1>

            <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
              {summary}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={handleQuoteClick}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#4F8FEF] hover:bg-[#3d7fdc] text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all font-display focus-visible:outline-2 focus-visible:outline-[#4F8FEF]"
              >
                <span>{language === 'el' ? 'Ζητήστε Δωρεάν Προσφορά' : 'Get a Free Quote'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-[#E5EDF7] hover:border-[#4F8FEF] hover:bg-[#EAF4FF]/40 text-[#17243A] text-sm font-semibold transition-all shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-[#4F8FEF]" />
                <span>{language === 'el' ? 'Συνομιλία στο WhatsApp' : 'Chat on WhatsApp'}</span>
              </a>
            </div>

            <div className="pt-4 flex items-center gap-4 text-xs text-[#667085] font-medium border-t border-[#E5EDF7]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#4F8FEF]" />
                {language === 'el' ? 'Βάσει εξατομικευμένης προσφοράς' : 'Tailored Quote Model'}
              </span>
              <span>·</span>
              <span>Paphos, Cyprus</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#E5EDF7] aspect-[16/11] bg-neutral-100">
              <img
                src={service.image}
                alt={title}
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3 rounded-2xl border border-[#E5EDF7] text-xs font-semibold text-[#17243A] flex items-center justify-between">
                <span>Maxclean Standard</span>
                <span className="text-[#4F8FEF]">{language === 'el' ? 'Πάφος' : 'Paphos, CY'}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 3. Detailed Scope & Checklist Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-[#E5EDF7]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Main Description & Checklist */}
          <div className="lg:col-span-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-[#17243A] font-display mb-4">
                {language === 'el' ? 'Επισκόπηση Υπηρεσίας' : 'Service Overview'}
              </h2>
              <div className="space-y-4 text-base text-[#667085] leading-relaxed">
                {paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </section>

            <section className="p-7 sm:p-9 rounded-3xl bg-[#EAF4FF]/40 border border-[#E5EDF7]">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-xl bg-[#4F8FEF] text-white flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#17243A] font-display">
                  {language === 'el' ? 'Τι Περιλαμβάνει η Υπηρεσία' : "What's Included in This Clean"}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#667085] mb-6">
                {language === 'el'
                  ? 'Παρακάτω αναφέρονται οι τυπικές εργασίες που συμφωνούνται για αυτή την κατηγορία καθαρισμού στην Πάφο:'
                  : 'Below are the typical cleaning tasks agreed for this category of service in Paphos:'}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {checklist.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-[#17243A]">
                    <CheckCircle2 className="w-4 h-4 text-[#4F8FEF] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Service-Specific FAQs */}
            {faqs.length > 0 && (
              <section className="pt-4">
                <h3 className="text-xl font-bold text-[#17243A] font-display mb-4 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#4F8FEF]" />
                  <span>{language === 'el' ? 'Συχνές Ερωτήσεις για την Υπηρεσία' : 'Frequently Asked Questions'}</span>
                </h3>
                <div className="space-y-3">
                  {faqs.map((faq, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-white border border-[#E5EDF7] shadow-xs">
                      <h4 className="font-bold text-[#17243A] text-sm sm:text-base font-display">
                        {faq.question[language]}
                      </h4>
                      <p className="mt-2 text-xs sm:text-sm text-[#667085] leading-relaxed">
                        {faq.answer[language]}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar CTA Card */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="sticky top-28 p-7 rounded-3xl bg-white border border-[#E5EDF7] shadow-lg space-y-6">
              <div className="text-center pb-4 border-b border-[#E5EDF7]">
                <h3 className="text-lg font-bold text-[#17243A] font-display">
                  {language === 'el' ? 'Ενδιαφέρεστε για αυτή την υπηρεσία;' : 'Interested in this service?'}
                </h3>
                <p className="text-xs text-[#667085] mt-1">
                  {language === 'el' ? 'Λάβετε σαφή προσφορά για το ακίνητό σας.' : 'Receive a clear, tailored quote for your property.'}
                </p>
              </div>

              <div className="space-y-3">
                <button
                  type="button"
                  onClick={handleQuoteClick}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-full bg-[#4F8FEF] hover:bg-[#3d7fdc] text-white text-sm font-semibold shadow-md transition-all font-display"
                >
                  <span>{language === 'el' ? 'Ζητήστε Προσφορά' : 'Request a Quote'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-full bg-[#EAF4FF] hover:bg-[#dceeff] text-[#17243A] text-sm font-semibold transition-all border border-[#E5EDF7] font-display"
                >
                  <MessageCircle className="w-4 h-4 text-[#4F8FEF]" />
                  <span>WhatsApp (+357 96 066878)</span>
                </a>

                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs font-semibold text-[#667085] hover:text-[#17243A] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#4F8FEF]" />
                  <span>{BUSINESS_INFO.phoneDisplay}</span>
                </a>
              </div>

              <div className="pt-4 border-t border-[#E5EDF7] space-y-2 text-xs text-[#667085]">
                <p className="font-semibold text-[#17243A]">{language === 'el' ? 'Βασικά Οφέλη:' : 'Key Service Benefits:'}</p>
                {benefits.map((b, idx) => (
                  <p key={idx} className="flex items-start gap-1.5">
                    <span className="text-[#4F8FEF]">•</span>
                    <span>{b}</span>
                  </p>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* 4. Related Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 mt-12 border-t border-[#E5EDF7]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#17243A] font-display">
              {language === 'el' ? 'Άλλες Υπηρεσίες Καθαρισμού' : 'Other Cleaning Services'}
            </h3>
            <p className="text-xs sm:text-sm text-[#667085] mt-1">
              {language === 'el' ? 'Ανακαλύψτε περισσότερες επιλογές καθαρισμού στην Πάφο.' : 'Discover our other tailored cleaning options in Paphos.'}
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate('/#services', { scrollTarget: 'services' })}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#4F8FEF] hover:text-[#3d7fdc] transition-colors font-display"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{language === 'el' ? 'Όλες οι Υπηρεσίες' : 'View All Services'}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedSlugs.map((relSlug) => {
            const relService = SERVICE_DETAILS[relSlug];
            if (!relService) return null;

            return (
              <div
                key={relSlug}
                onClick={() => navigate(relService.path)}
                className="group p-5 rounded-3xl bg-white border border-[#E5EDF7] shadow-xs hover:shadow-md hover:border-[#4F8FEF] transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-4 bg-neutral-100">
                    <img
                      src={relService.image}
                      alt={relService.title[language]}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="text-base font-bold text-[#17243A] font-display group-hover:text-[#4F8FEF] transition-colors">
                    {relService.title[language]}
                  </h4>
                  <p className="text-xs text-[#667085] mt-1.5 line-clamp-2">
                    {relService.summary[language]}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#E5EDF7] flex items-center justify-between text-xs font-semibold text-[#4F8FEF]">
                  <span>{language === 'el' ? 'Περισσότερα' : 'Learn More'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </article>
  );
};
