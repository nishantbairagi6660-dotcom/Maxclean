import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/constants';
import { useRouter } from '../context/RouterContext';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { LanguageSwitcher } from './LanguageSwitcher';

interface HeaderProps {
  onSelectService?: (serviceName: string) => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { currentPath, navigate } = useRouter();
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].nav;

  const isHome = currentPath === '/';

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop || document.body.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = winHeightPx > 0 ? (scrollPx / winHeightPx) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateScrollProgress();

    return () => window.removeEventListener('scroll', onScroll);
  }, [currentPath]);

  const handleNavClick = (target: string, anchorId?: string) => {
    setMobileMenuOpen(false);
    navigate(target, { scrollTarget: anchorId });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E5EDF7] transition-colors relative">
      {/* Thin, subtle blue scroll progress bar at very top of header */}
      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(scrollProgress)}
        aria-label="Page scroll progress"
        className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#EAF4FF]/40 pointer-events-none z-50 overflow-hidden"
      >
        <div
          className="h-full bg-gradient-to-r from-[#4F8FEF] via-[#6BA5F5] to-[#4F8FEF] transition-all duration-150 ease-out origin-left shadow-xs"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 lg:gap-8 h-18 sm:h-20">
          {/* Zone 1: Brand Wordmark with subtle bright blue sparkle */}
          <button
            type="button"
            onClick={() => handleNavClick('/')}
            className="flex items-center gap-2 sm:gap-2.5 text-xl sm:text-2xl font-extrabold tracking-tight text-[#17243A] group whitespace-nowrap shrink-0 text-left"
            aria-label="Maxclean Home"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#EAF4FF] flex items-center justify-center text-[#4F8FEF] group-hover:bg-[#4F8FEF] group-hover:text-white transition-all shadow-xs shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="font-display font-extrabold text-[#17243A]">Maxclean</span>
          </button>

          {/* Zone 2: Navigation Links (single-line, clean text with active states) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium text-[#667085]">
            <button
              type="button"
              onClick={() => handleNavClick('/')}
              className={`hover:text-[#4F8FEF] transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                isHome ? 'text-[#4F8FEF] font-semibold' : ''
              }`}
            >
              {t.home}
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('/about')}
              className={`hover:text-[#4F8FEF] transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentPath === '/about' ? 'text-[#4F8FEF] font-semibold' : ''
              }`}
            >
              {t.about}
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('/services')}
              className={`hover:text-[#4F8FEF] transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentPath.startsWith('/services') ? 'text-[#4F8FEF] font-semibold' : ''
              }`}
            >
              {t.services}
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('/why-choose-us')}
              className={`hover:text-[#4F8FEF] transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentPath === '/why-choose-us' ? 'text-[#4F8FEF] font-semibold' : ''
              }`}
            >
              {t.whyUs}
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('/reviews')}
              className={`hover:text-[#4F8FEF] transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentPath === '/reviews' ? 'text-[#4F8FEF] font-semibold' : ''
              }`}
            >
              {t.reviews}
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('/faqs')}
              className={`hover:text-[#4F8FEF] transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentPath === '/faqs' ? 'text-[#4F8FEF] font-semibold' : ''
              }`}
            >
              {t.faqs}
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('/contact')}
              className={`hover:text-[#4F8FEF] transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentPath === '/contact' ? 'text-[#4F8FEF] font-semibold' : ''
              }`}
            >
              {t.contact}
            </button>
          </nav>

          {/* Zone 3: Language switcher + Primary CTA button + Mobile toggle */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <LanguageSwitcher />

            <button
              type="button"
              onClick={() => handleNavClick('/contact')}
              className="hidden sm:inline-flex items-center justify-center px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#4F8FEF] hover:bg-[#3d7fdc] rounded-full shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4F8FEF] font-display cursor-pointer"
            >
              {t.getQuote}
            </button>

            {/* Mobile hamburger button with 44px touch target */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-[#17243A] hover:bg-[#EAF4FF] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4F8FEF] cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E5EDF7] bg-white px-4 pt-4 pb-6 space-y-4 shadow-xl animate-in fade-in slide-in-from-top-2 max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col space-y-2 font-medium text-base text-[#17243A]">
            <button
              type="button"
              onClick={() => handleNavClick('/')}
              className={`py-2 px-3 rounded-xl transition-colors text-left flex items-center justify-between cursor-pointer ${
                isHome ? 'bg-[#EAF4FF] text-[#4F8FEF] font-bold' : 'hover:bg-[#EAF4FF]'
              }`}
            >
              <span>{t.home}</span>
              {isHome && <span className="w-2 h-2 rounded-full bg-[#4F8FEF]" />}
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('/about')}
              className={`py-2 px-3 rounded-xl transition-colors text-left flex items-center justify-between cursor-pointer ${
                currentPath === '/about' ? 'bg-[#EAF4FF] text-[#4F8FEF] font-bold' : 'hover:bg-[#EAF4FF]'
              }`}
            >
              <span>{t.about}</span>
              {currentPath === '/about' && <span className="w-2 h-2 rounded-full bg-[#4F8FEF]" />}
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('/services')}
              className={`py-2 px-3 rounded-xl transition-colors text-left flex items-center justify-between cursor-pointer ${
                currentPath.startsWith('/services') ? 'bg-[#EAF4FF] text-[#4F8FEF] font-bold' : 'hover:bg-[#EAF4FF]'
              }`}
            >
              <span>{t.services}</span>
              {currentPath.startsWith('/services') && <span className="w-2 h-2 rounded-full bg-[#4F8FEF]" />}
            </button>

            {/* Quick sub-links to all dedicated service pages inside mobile drawer for quick navigation */}
            <div className="pl-4 pr-1 py-1 space-y-1.5 border-l-2 border-[#E5EDF7] ml-2 text-xs text-[#667085]">
              <button
                type="button"
                onClick={() => handleNavClick('/services/regular-house-cleaning')}
                className="block w-full text-left py-1 hover:text-[#4F8FEF] cursor-pointer"
              >
                • {language === 'el' ? 'Τακτικός Καθαρισμός Σπιτιού' : 'Regular House Cleaning'}
              </button>
              <button
                type="button"
                onClick={() => handleNavClick('/services/deep-cleaning')}
                className="block w-full text-left py-1 hover:text-[#4F8FEF] cursor-pointer"
              >
                • {language === 'el' ? 'Γενικός Καθαρισμός' : 'Deep Cleaning'}
              </button>
              <button
                type="button"
                onClick={() => handleNavClick('/services/apartment-cleaning')}
                className="block w-full text-left py-1 hover:text-[#4F8FEF] cursor-pointer"
              >
                • {language === 'el' ? 'Καθαρισμός Διαμερίσματος' : 'Apartment Cleaning'}
              </button>
              <button
                type="button"
                onClick={() => handleNavClick('/services/villa-cleaning')}
                className="block w-full text-left py-1 hover:text-[#4F8FEF] cursor-pointer"
              >
                • {language === 'el' ? 'Καθαρισμός Έπαυλης' : 'Villa Cleaning'}
              </button>
              <button
                type="button"
                onClick={() => handleNavClick('/services/holiday-rental-cleaning')}
                className="block w-full text-left py-1 hover:text-[#4F8FEF] cursor-pointer"
              >
                • {language === 'el' ? 'Τουριστικά Καταλύματα' : 'Holiday Rental Cleaning'}
              </button>
              <button
                type="button"
                onClick={() => handleNavClick('/services/move-in-move-out-cleaning')}
                className="block w-full text-left py-1 hover:text-[#4F8FEF] cursor-pointer"
              >
                • {language === 'el' ? 'Μετακόμιση (Move In/Out)' : 'Move-In / Move-Out Clean'}
              </button>
              <button
                type="button"
                onClick={() => handleNavClick('/services/window-cleaning')}
                className="block w-full text-left py-1 hover:text-[#4F8FEF] cursor-pointer"
              >
                • {language === 'el' ? 'Καθαρισμός Παραθύρων' : 'Window Cleaning'}
              </button>
              <button
                type="button"
                onClick={() => handleNavClick('/services/office-commercial')}
                className="block w-full text-left py-1 hover:text-[#4F8FEF] cursor-pointer"
              >
                • {language === 'el' ? 'Επαγγελματικοί Χώροι & Γραφεία' : 'Office & Commercial Cleaning'}
              </button>
            </div>

            <button
              type="button"
              onClick={() => handleNavClick('/why-choose-us')}
              className={`py-2 px-3 rounded-xl transition-colors text-left flex items-center justify-between cursor-pointer ${
                currentPath === '/why-choose-us' ? 'bg-[#EAF4FF] text-[#4F8FEF] font-bold' : 'hover:bg-[#EAF4FF]'
              }`}
            >
              <span>{t.whyUs}</span>
              {currentPath === '/why-choose-us' && <span className="w-2 h-2 rounded-full bg-[#4F8FEF]" />}
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('/reviews')}
              className={`py-2 px-3 rounded-xl transition-colors text-left flex items-center justify-between cursor-pointer ${
                currentPath === '/reviews' ? 'bg-[#EAF4FF] text-[#4F8FEF] font-bold' : 'hover:bg-[#EAF4FF]'
              }`}
            >
              <span>{t.reviews}</span>
              {currentPath === '/reviews' && <span className="w-2 h-2 rounded-full bg-[#4F8FEF]" />}
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('/faqs')}
              className={`py-2 px-3 rounded-xl transition-colors text-left flex items-center justify-between cursor-pointer ${
                currentPath === '/faqs' ? 'bg-[#EAF4FF] text-[#4F8FEF] font-bold' : 'hover:bg-[#EAF4FF]'
              }`}
            >
              <span>{t.faqs}</span>
              {currentPath === '/faqs' && <span className="w-2 h-2 rounded-full bg-[#4F8FEF]" />}
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('/contact')}
              className={`py-2 px-3 rounded-xl transition-colors text-left flex items-center justify-between cursor-pointer ${
                currentPath === '/contact' ? 'bg-[#EAF4FF] text-[#4F8FEF] font-bold' : 'hover:bg-[#EAF4FF]'
              }`}
            >
              <span>{t.contact}</span>
              {currentPath === '/contact' && <span className="w-2 h-2 rounded-full bg-[#4F8FEF]" />}
            </button>
          </nav>

          <div className="pt-3 border-t border-[#E5EDF7] flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => handleNavClick('/contact')}
              className="w-full py-3 text-center font-semibold text-white bg-[#4F8FEF] rounded-full shadow-sm font-display cursor-pointer"
            >
              {t.getQuote}
            </button>
            <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
              <a
                href={BUSINESS_INFO.phoneHref}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 text-[#17243A] bg-[#EAF4FF] rounded-xl"
              >
                <Phone className="w-3.5 h-3.5 text-[#4F8FEF]" />
                {t.callNow}
              </a>
              <a
                href={BUSINESS_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 text-[#17243A] bg-[#EAF4FF] rounded-xl"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#4F8FEF]" />
                {t.whatsApp}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
