import React, { useState } from 'react';
import { Sparkles, Check, MapPin, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/constants';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const About: React.FC = () => {
  const [img1Error, setImg1Error] = useState(false);
  const [img2Error, setImg2Error] = useState(false);
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].about;

  return (
    <section id="about" className="py-20 bg-[#EAF4FF]/40 border-b border-[#E5EDF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Collage */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-lg border-2 border-white aspect-[4/3] bg-white z-10">
                {!img1Error ? (
                  <img
                    src="/images/about_spotless_home_1792220476705.jpg"
                    alt="Careful surface polishing in a bright modern home kitchen in Paphos"
                    className="w-full h-full object-cover object-center"
                    onError={() => setImg1Error(true)}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-[#EAF4FF] text-[#17243A]">
                    <Sparkles className="w-10 h-10 text-[#4F8FEF] mb-2" />
                    <p className="text-sm font-bold font-display">Maxclean</p>
                  </div>
                )}
              </div>

              {/* Overlapping Secondary Image for Collage */}
              <div className="absolute -bottom-8 -right-4 sm:-right-6 w-3/5 rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] bg-white z-20 hidden sm:block">
                {!img2Error ? (
                  <img
                    src="/images/about_clean_bedroom_1792221222996.jpg"
                    alt="Fresh clean Mediterranean bedroom suite in Paphos"
                    className="w-full h-full object-cover object-center"
                    onError={() => setImg2Error(true)}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[#EAF4FF] text-[#4F8FEF]">
                    <Sparkles className="w-8 h-8" />
                  </div>
                )}
              </div>

              {/* Location Badge on Collage */}
              <div className="absolute -top-4 -left-3 z-30 bg-white px-4 py-2 rounded-2xl border border-[#E5EDF7] shadow-md flex items-center gap-2 text-xs font-semibold text-[#17243A]">
                <MapPin className="w-4 h-4 text-[#4F8FEF]" />
                <span>{t.badgeTitle}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Principles */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 order-1 lg:order-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4F8FEF] font-display">
              <span>{t.kicker}</span>
              <span aria-hidden="true">·</span>
              <span>Paphos, Cyprus</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17243A] tracking-tight leading-tight text-balance font-display">
              {t.title}
            </h2>

            <p className="text-base sm:text-lg text-[#667085] leading-relaxed font-normal">
              {t.p1}
            </p>

            <p className="text-sm sm:text-base text-[#667085] leading-relaxed font-normal">
              {t.p2}
            </p>

            {/* Core Service Principles in White Cards */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white border border-[#E5EDF7] shadow-xs">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#EAF4FF] flex items-center justify-center text-[#4F8FEF] shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#17243A] font-display">{t.pillar1Title}</h3>
                    <p className="text-xs text-[#667085] mt-1">
                      {t.pillar1Desc}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E5EDF7] shadow-xs">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#EAF4FF] flex items-center justify-center text-[#4F8FEF] shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#17243A] font-display">{t.pillar2Title}</h3>
                    <p className="text-xs text-[#667085] mt-1">
                      {t.pillar2Desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#quote"
                className="px-7 py-3.5 text-sm font-semibold text-white bg-[#4F8FEF] hover:bg-[#3d7fdc] rounded-full transition-all shadow-sm"
              >
                {t.ctaQuote}
              </a>
              <a
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#17243A] hover:text-[#4F8FEF] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#4F8FEF]" />
                <span>{t.callUs} {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
