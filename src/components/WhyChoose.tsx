import React from 'react';
import { CheckCircle2, SlidersHorizontal, MessageSquare, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  CheckCircle2,
  SlidersHorizontal,
  MessageSquare,
  FileText,
};

export const WhyChoose: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].whyChoose;

  return (
    <section id="why-choose-us" className="py-20 bg-gradient-to-b from-[#EAF4FF]/50 to-white border-b border-[#E5EDF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* 4 Benefit Cards in White with Rounded Corners and Subtle Shadows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.items.map((item, index) => {
            const Icon = iconMap[item.iconName] || CheckCircle2;

            return (
              <div
                key={index}
                className="relative p-7 rounded-3xl bg-white border border-[#E5EDF7] shadow-sm hover:shadow-lg hover:border-[#4F8FEF]/60 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Simple Blue Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-[#EAF4FF] flex items-center justify-center text-[#4F8FEF] mb-6 shadow-xs">
                    <Icon className="w-6 h-6 text-[#4F8FEF]" />
                  </div>

                  <h3 className="text-lg font-bold text-[#17243A] mb-3 leading-snug font-display">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#667085] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E5EDF7] flex items-center justify-between text-xs text-[#667085] font-medium">
                  <span>{t.principle} 0{index + 1}</span>
                  <span className="text-[#4F8FEF] font-semibold">{t.verifiedStandard}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
