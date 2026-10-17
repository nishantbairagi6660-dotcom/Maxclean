import React, { useState } from 'react';
import { ArrowRight, MessageCircle, MapPin, Sparkles, ShieldCheck, Home } from 'lucide-react';
import { BUSINESS_INFO } from '../data/constants';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const Hero: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].hero;

  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-28 bg-gradient-to-b from-[#EAF4FF]/80 via-[#DCEEFF]/30 to-white">
      {/* Decorative soft circles inspired by the reference design */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-r from-[#DCEEFF] to-[#B8E4F4]/40 rounded-full blur-3xl opacity-50 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Headline, Copy, and Rounded CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            {/* Subtle blue trust indicator */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5EDF7] shadow-xs text-xs font-semibold text-[#17243A] self-start">
              <span className="w-2 h-2 rounded-full bg-[#4F8FEF]" />
              <span className="text-[#4F8FEF]">{t.badge}</span>
              <span aria-hidden="true" className="text-[#667085]/40">|</span>
              <span className="text-[#667085]">{t.homeCleaning} • {t.deepCleaning} • {t.villaCleaning}</span>
            </div>

            {/* Headline with dark navy text and bright blue accent */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#17243A] leading-[1.12] text-balance font-display">
              {t.headlinePart1}{' '}
              <span className="text-[#4F8FEF]">{t.headlineHighlight}</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg lg:text-xl text-[#667085] max-w-2xl leading-relaxed font-normal">
              {t.subtext}
            </p>

            {/* CTAs: Large rounded blue button + WhatsApp button */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <a
                href="#quote"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-[#4F8FEF] hover:bg-[#3d7fdc] rounded-full shadow-md hover:shadow-lg transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4F8FEF]"
              >
                <span>{t.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={BUSINESS_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-semibold text-[#17243A] bg-white border border-[#E5EDF7] hover:border-[#4F8FEF] hover:bg-[#EAF4FF]/40 rounded-full transition-all shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4F8FEF]"
              >
                <MessageCircle className="w-4 h-4 text-[#4F8FEF]" />
                <span>{t.ctaSecondary}</span>
              </a>
            </div>

            {/* Verified Business Trust Indicators */}
            <div className="pt-6 border-t border-[#E5EDF7] flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-[#667085] font-medium">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#4F8FEF] shrink-0" />
                <span>{t.verifiedLocation}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#4F8FEF] shrink-0" />
                <span>{t.quoteBased}</span>
              </div>
              <div className="flex items-center gap-2">
                <Home className="w-4 h-4 text-[#4F8FEF] shrink-0" />
                <span>{t.tailoredChecklists}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset in Rounded Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#E5EDF7] bg-white aspect-[4/3] sm:aspect-[16/11]">
              {!imgError ? (
                <img
                  src="/images/hero_clean_villa_living_1792220476225.jpg"
                  alt="Spotless Mediterranean villa living room in Paphos with clean floors and sunlight"
                  className="w-full h-full object-cover object-center transform hover:scale-[1.02] transition-transform duration-700"
                  onError={() => setImgError(true)}
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#EAF4FF] to-white text-[#17243A]">
                  <Sparkles className="w-12 h-12 text-[#4F8FEF] mb-3" />
                  <p className="text-base font-bold font-display">Maxclean Paphos</p>
                  <p className="text-xs text-[#667085] text-center mt-1">Pristine home cleaning standards</p>
                </div>
              )}

              {/* Floating Badge in White Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#E5EDF7] shadow-lg flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-[#17243A] font-display">{t.overlayTitle}</p>
                  <p className="text-[11px] text-[#667085]">{t.overlaySubtitle}</p>
                </div>
                <span className="text-xs font-semibold text-[#4F8FEF] bg-[#EAF4FF] px-3 py-1 rounded-full">
                  Paphos, Cyprus
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
