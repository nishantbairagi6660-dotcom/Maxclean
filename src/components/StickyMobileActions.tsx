import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/constants';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const StickyMobileActions: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].stickyMobile;

  return (
    <aside 
      aria-label="Quick contact actions" 
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E5EDF7] px-4 py-2.5 shadow-xl max-h-[14vh]"
    >
      <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
        <a
          href={BUSINESS_INFO.phoneHref}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-full bg-[#17243A] text-white text-xs font-bold shadow-xs active:scale-[0.98] transition-transform font-display"
          aria-label="Call Maxclean telephone"
        >
          <Phone className="w-3.5 h-3.5 text-[#6BA5F5]" />
          <span className="truncate">{t.call}</span>
        </a>

        <a
          href={BUSINESS_INFO.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-full bg-[#4F8FEF] text-white text-xs font-bold shadow-xs active:scale-[0.98] transition-transform font-display"
          aria-label="Chat with Maxclean on WhatsApp"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span className="truncate">{t.whatsapp}</span>
        </a>
      </div>
    </aside>
  );
};
