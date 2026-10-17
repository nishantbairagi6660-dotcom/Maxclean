import React from 'react';
import { X, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].privacyModal;

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-policy-title"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-w-xl w-full bg-white rounded-3xl shadow-2xl border border-[#E5EDF7] p-6 sm:p-8 max-h-[85vh] overflow-y-auto text-[#17243A]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-[#E5EDF7]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#EAF4FF] flex items-center justify-center text-[#4F8FEF]">
              <Shield className="w-5 h-5" />
            </div>
            <h2 id="privacy-policy-title" className="text-xl font-bold text-[#17243A] font-display">
              {t.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full text-[#667085] hover:text-[#17243A] hover:bg-neutral-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="pt-4 space-y-4 text-sm text-[#667085] leading-relaxed font-normal">
          <div>
            <h3 className="font-bold text-[#17243A] mb-1 font-display">{t.s1Title}</h3>
            <p>{t.s1Text}</p>
          </div>

          <div>
            <h3 className="font-bold text-[#17243A] mb-1 font-display">{t.s2Title}</h3>
            <p>{t.s2Text}</p>
          </div>

          <div>
            <h3 className="font-bold text-[#17243A] mb-1 font-display">{t.s3Title}</h3>
            <p>{t.s3Text}</p>
          </div>

          <div>
            <h3 className="font-bold text-[#17243A] mb-1 font-display">{t.s4Title}</h3>
            <p>{t.s4Text}</p>
          </div>
        </div>

        <div className="pt-6 mt-6 border-t border-[#E5EDF7] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 text-xs font-bold text-white bg-[#4F8FEF] hover:bg-[#3d7fdc] rounded-full transition-colors font-display shadow-xs"
          >
            {t.closeBtn}
          </button>
        </div>
      </div>
    </div>
  );
};
