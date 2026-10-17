import React from 'react';
import { MapPin, Navigation, ExternalLink, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/constants';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const ServiceArea: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].serviceArea;

  return (
    <section className="py-20 bg-[#EAF4FF]/40 border-b border-[#E5EDF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Information */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4F8FEF] font-display">
              <span>{t.kicker}</span>
              <span aria-hidden="true">·</span>
              <span>Paphos, Cyprus</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17243A] tracking-tight leading-tight font-display">
              {t.title}
            </h2>

            <p className="text-base sm:text-lg text-[#667085] leading-relaxed font-normal">
              {t.description}
            </p>

            <div className="p-6 rounded-3xl bg-white border border-[#E5EDF7] shadow-sm space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-[#EAF4FF] flex items-center justify-center text-[#4F8FEF] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#17243A] font-display">{t.addressTitle}</h3>
                  <p className="text-sm text-[#667085] mt-0.5">
                    {BUSINESS_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-4 border-t border-[#E5EDF7]">
                <div className="w-10 h-10 rounded-2xl bg-[#EAF4FF] flex items-center justify-center text-[#4F8FEF] shrink-0">
                  <Navigation className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#17243A] font-display">{t.confirmationTitle}</h3>
                  <p className="text-xs text-[#667085] mt-0.5">
                    {t.confirmationText}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-[#4F8FEF] hover:bg-[#3d7fdc] rounded-full shadow-sm hover:shadow transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4F8FEF]"
              >
                <span>{t.viewMaps}</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#17243A] bg-white border border-[#E5EDF7] hover:bg-[#EAF4FF] rounded-full transition-colors"
              >
                <Phone className="w-4 h-4 text-[#4F8FEF]" />
                <span>{BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Stylized Paphos District Card with Soft Blue Gradient */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl p-7 sm:p-9 bg-gradient-to-br from-[#17243A] to-[#1e3458] text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-wider text-[#6BA5F5] uppercase font-display">
                    {t.districtTitle}
                  </span>
                  <span className="text-xs text-white/70">Paphos District</span>
                </div>

                <div>
                  <h3 className="text-2xl font-extrabold text-white font-display">
                    {t.districtTitle}
                  </h3>
                  <p className="text-xs text-white/80 mt-1 leading-relaxed">
                    {t.districtSub}
                  </p>
                </div>

                <div className="space-y-2.5 text-xs text-white/90">
                  {t.paphosAreas.map((area, i) => (
                    <div key={i} className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-xs flex items-center justify-between border border-white/5">
                      <span>{area.name}</span>
                      <span className="text-[#6BA5F5] font-semibold">{area.status}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={BUSINESS_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-full bg-[#4F8FEF] hover:bg-[#3d7fdc] text-white text-xs font-bold transition-all shadow-md font-display"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t.checkWaBtn}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
