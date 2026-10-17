import React from 'react';
import { ExternalLink, Star, MapPin, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/constants';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const Reviews: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].reviews;

  return (
    <section id="reviews" className="py-20 bg-white border-b border-[#E5EDF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          {/* Google Reviews Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAF4FF] border border-[#E5EDF7] mb-3">
            {/* Google "G" multi-colored or clean blue logo */}
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span className="text-xs font-bold text-[#17243A] font-display">{t.badgeGoogle}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17243A] tracking-tight leading-tight font-display">
            {t.title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#667085] leading-relaxed font-normal">
            {t.subtitle}
          </p>
        </div>

        {/* Elegant Google Reviews Card in White with Subtle Shadows */}
        <div className="max-w-4xl mx-auto p-8 sm:p-10 rounded-3xl bg-white border border-[#E5EDF7] shadow-lg">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-[#E5EDF7]">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#EAF4FF] flex items-center justify-center text-[#4F8FEF] shrink-0 shadow-xs">
                <svg className="w-8 h-8" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-[#17243A] font-display">
                    {t.cardTitle}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#4F8FEF] bg-[#EAF4FF] px-2.5 py-0.5 rounded-full">
                    <CheckCircle className="w-3 h-3" />
                    {t.verifiedLabel}
                  </span>
                </div>
                <p className="text-xs text-[#667085] mt-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#4F8FEF]" />
                  {t.cardSubtitle}
                </p>
              </div>
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
          </div>

          <div className="pt-6 space-y-4">
            <p className="text-sm sm:text-base text-[#667085] leading-relaxed font-normal">
              {t.cardBody}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-[#4F8FEF] hover:bg-[#3d7fdc] rounded-full shadow-sm hover:shadow transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4F8FEF]"
              >
                <span>{t.btnText}</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <span className="text-xs text-[#667085]/80 text-center sm:text-left">
                {t.honestNote}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
