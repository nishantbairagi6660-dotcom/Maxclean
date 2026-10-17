import React from 'react';
import { Sparkles, CheckCircle2, MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles,
  CheckCircle2,
  MessageSquare,
};

export const Benefits: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].benefits;

  return (
    <section className="py-16 bg-white border-b border-[#E5EDF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#4F8FEF] mb-2 block font-display">
            {t.kicker}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17243A] font-display">
            {t.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#667085]">
            {t.subtitle}
          </p>
        </div>

        {/* 3 Modern Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {t.items.map((item, index) => {
            const Icon = iconMap[item.iconName] || Sparkles;

            return (
              <div
                key={index}
                className="p-7 rounded-2xl bg-white border border-[#E5EDF7] shadow-sm hover:shadow-md hover:border-[#6BA5F5]/60 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#EAF4FF] flex items-center justify-center text-[#4F8FEF] mb-5 group-hover:bg-[#4F8FEF] group-hover:text-white transition-colors">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-[#17243A] mb-2.5 font-display">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#667085] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-[#E5EDF7] flex items-center justify-between text-xs text-[#667085]">
                  <span>Paphos, Cyprus</span>
                  <span className="text-[#4F8FEF] font-semibold">Maxclean Quality</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
