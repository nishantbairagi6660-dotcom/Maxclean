import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/constants';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].faqs;

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 bg-white border-b border-[#E5EDF7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#4F8FEF] mb-2 block font-display">
            {t.kicker}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17243A] tracking-tight leading-tight font-display">
            {t.title}
          </h2>
          <p className="mt-4 text-base text-[#667085] leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {t.items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-2xl bg-white border border-[#E5EDF7] shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full py-5 px-6 sm:px-7 flex items-center justify-between gap-4 text-left font-bold text-base sm:text-lg text-[#17243A] hover:text-[#4F8FEF] transition-colors focus-visible:outline-2 focus-visible:outline-[#4F8FEF] font-display"
                  aria-expanded={isOpen}
                >
                  <span className="leading-snug">{item.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#EAF4FF] flex items-center justify-center text-[#4F8FEF] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#4F8FEF] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 pt-1 text-sm sm:text-base text-[#667085] leading-relaxed border-t border-[#E5EDF7] animate-in fade-in duration-200">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ Support Prompt */}
        <div className="mt-12 p-6 sm:p-7 rounded-3xl bg-[#EAF4FF] border border-[#E5EDF7] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white text-[#4F8FEF] flex items-center justify-center shrink-0 shadow-xs">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <p className="text-base font-bold text-[#17243A] font-display">{t.haveQuestion}</p>
              <p className="text-xs sm:text-sm text-[#667085]">{t.haveQuestionSub}</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={BUSINESS_INFO.phoneHref}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold text-[#17243A] bg-white rounded-full hover:bg-neutral-50 transition-colors shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#4F8FEF]" />
              <span>{t.callBtn}</span>
            </a>
            <a
              href={BUSINESS_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold text-white bg-[#4F8FEF] rounded-full hover:bg-[#3d7fdc] transition-colors shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
