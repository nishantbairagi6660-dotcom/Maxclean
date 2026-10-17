import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className = '' }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language selector"
      className={`inline-flex items-center p-1 rounded-full bg-[#EAF4FF] border border-[#E5EDF7] text-xs font-semibold ${className}`}
    >
      <div className="flex items-center gap-1 px-1.5 text-[#17243A]/70">
        <Globe className="w-3.5 h-3.5 text-[#4F8FEF]" />
      </div>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-2.5 py-1 rounded-full transition-all text-xs ${
          language === 'en'
            ? 'bg-white text-[#17243A] shadow-xs font-bold'
            : 'text-[#667085] hover:text-[#17243A]'
        }`}
        aria-pressed={language === 'en'}
        title="Switch to English"
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage('el')}
        className={`px-2.5 py-1 rounded-full transition-all text-xs ${
          language === 'el'
            ? 'bg-white text-[#17243A] shadow-xs font-bold'
            : 'text-[#667085] hover:text-[#17243A]'
        }`}
        aria-pressed={language === 'el'}
        title="Αλλαγή σε Ελληνικά"
      >
        ΕΛ
      </button>
    </div>
  );
};
