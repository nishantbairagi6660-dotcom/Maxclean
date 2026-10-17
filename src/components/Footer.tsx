import React, { useState } from 'react';
import { Sparkles, Phone, MessageCircle, MapPin, ExternalLink, Shield } from 'lucide-react';
import { BUSINESS_INFO } from '../data/constants';
import { useRouter } from '../context/RouterContext';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { PrivacyModal } from './PrivacyModal';

export const Footer: React.FC = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const { navigate } = useRouter();
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].footer;
  const nav = TRANSLATIONS[language].nav;

  const handleLink = (target: string, anchorId?: string) => {
    navigate(target, { scrollTarget: anchorId });
  };

  return (
    <footer className="bg-[#17243A] text-white border-t border-white/10 pt-16 pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#4F8FEF] flex items-center justify-center text-white shadow-md">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight font-display text-white">
                Maxclean
              </span>
            </div>

            <p className="text-sm text-white/70 max-w-sm leading-relaxed font-normal">
              {t.desc}
            </p>

            <div className="pt-2 text-xs text-white/50">
              <span>{t.categoryLabel}</span>
            </div>

            {/* Quick WhatsApp CTA Button in Footer */}
            <div className="pt-2">
              <a
                href={BUSINESS_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#4F8FEF] hover:bg-[#3d7fdc] text-white text-xs font-semibold shadow-sm transition-all font-display"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#6BA5F5] font-display">
              {navHeadingText(language)}
            </h4>
            <ul className="space-y-2 text-sm text-white/75">
              <li>
                <button
                  type="button"
                  onClick={() => handleLink('/')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {nav.home}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLink('/about')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {nav.about}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLink('/services')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {nav.services}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLink('/why-choose-us')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {nav.whyUs}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLink('/reviews')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {nav.reviews}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLink('/faqs')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {nav.faqs}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLink('/contact')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {nav.getQuote}
                </button>
              </li>
            </ul>
          </div>

          {/* Dedicated Service Pages Links in Footer */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#6BA5F5] font-display">
              {language === 'el' ? 'Σελίδες Υπηρεσιών' : 'Cleaning Services'}
            </h4>
            <ul className="space-y-2 text-xs text-white/75">
              <li>
                <button
                  type="button"
                  onClick={() => handleLink('/services/regular-house-cleaning')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {language === 'el' ? 'Τακτικός Καθαρισμός Σπιτιού' : 'Regular House Cleaning'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLink('/services/deep-cleaning')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {language === 'el' ? 'Γενικός Καθαρισμός' : 'Deep Cleaning'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLink('/services/apartment-cleaning')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {language === 'el' ? 'Καθαρισμός Διαμερίσματος' : 'Apartment Cleaning'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLink('/services/villa-cleaning')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {language === 'el' ? 'Καθαρισμός Έπαυλης' : 'Villa Cleaning'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLink('/services/holiday-rental-cleaning')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {language === 'el' ? 'Τουριστικά Καταλύματα' : 'Holiday Rental Cleaning'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLink('/services/move-in-move-out-cleaning')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {language === 'el' ? 'Μετακόμιση (Move In/Out)' : 'Move-In / Move-Out Clean'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLink('/services/window-cleaning')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {language === 'el' ? 'Καθαρισμός Παραθύρων' : 'Window Cleaning'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLink('/services/office-commercial')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {language === 'el' ? 'Επαγγελματικοί Χώροι & Γραφεία' : 'Office & Commercial Cleaning'}
                </button>
              </li>
            </ul>
          </div>

          {/* Verified Contact & Location */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#6BA5F5] font-display">
              {t.contactHeading}
            </h4>
            <ul className="space-y-3 text-sm text-white/85">
              <li>
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="flex items-center gap-2.5 hover:text-[#6BA5F5] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#4F8FEF] shrink-0" />
                  <span>{BUSINESS_INFO.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-[#6BA5F5] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#4F8FEF] shrink-0" />
                  <span>WhatsApp (+357 96 066878)</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 pt-1">
                <MapPin className="w-4 h-4 text-[#4F8FEF] shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">{BUSINESS_INFO.address}</span>
              </li>
              <li>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#6BA5F5] hover:underline"
                >
                  <span>{t.googleMapsListing}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Maxclean. {t.rights}</p>

          <p className="font-medium text-white/70">
            {t.credits}
          </p>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setPrivacyOpen(true)}
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <Shield className="w-3 h-3 text-[#6BA5F5]" />
              <span>{t.privacyBtn}</span>
            </button>
          </div>
        </div>
      </div>

      <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </footer>
  );
};

function navHeadingText(lang: string) {
  return lang === 'el' ? 'Πλοήγηση' : 'Navigation';
}
