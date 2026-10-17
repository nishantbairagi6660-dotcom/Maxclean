import React from 'react';
import { PhoneCall, ClipboardList, Sparkles, ArrowRight } from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  PhoneCall,
  ClipboardList,
  Sparkles,
};

export const HowItWorks: React.FC = () => {
  const { navigate } = useRouter();
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].howItWorks;

  return (
    <section className="py-20 bg-white border-b border-[#E5EDF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
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

        {/* 3 Steps Timeline with Connecting Line */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-[#DCEEFF] via-[#4F8FEF] to-[#DCEEFF] -translate-y-12 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {t.steps.map((step, index) => {
              const Icon = iconMap[step.iconName] || Sparkles;

              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-8 rounded-3xl bg-white border border-[#E5EDF7] shadow-sm hover:shadow-lg hover:border-[#4F8FEF]/50 transition-all duration-300"
                >
                  {/* Step Circle with Step Number */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-[#EAF4FF] flex items-center justify-center text-[#4F8FEF] shadow-xs">
                      <Icon className="w-7 h-7 text-[#4F8FEF]" />
                    </div>
                    <span className="absolute -top-2.5 -right-2.5 w-7 h-7 rounded-full bg-[#4F8FEF] text-white text-xs font-bold flex items-center justify-center shadow-sm font-display">
                      {step.stepNumber}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#17243A] mb-3 font-display">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#667085] leading-relaxed max-w-xs font-normal">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA trigger */}
        <div className="mt-14 text-center">
          <button
            type="button"
            onClick={() => navigate('/contact')}
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-[#4F8FEF] hover:bg-[#3d7fdc] rounded-full shadow-md hover:shadow-lg transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4F8FEF] font-display"
          >
            <span>{t.cta}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
