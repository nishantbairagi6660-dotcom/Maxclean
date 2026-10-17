import React, { useState } from 'react';
import {
  Home,
  Sparkles,
  Building2,
  Castle,
  KeyRound,
  Truck,
  Sun,
  Briefcase,
  ArrowRight,
  Info,
  ExternalLink,
} from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home,
  Sparkles,
  Building2,
  Castle,
  KeyRound,
  Truck,
  Sun,
  Briefcase,
};

// Map service ID to dedicated page route if available
const slugRouteMap: Record<string, string> = {
  'regular-house-cleaning': '/services/regular-house-cleaning',
  'deep-cleaning': '/services/deep-cleaning',
  'apartment-cleaning': '/services/apartment-cleaning',
  'villa-cleaning': '/services/villa-cleaning',
  'holiday-rental-turnover': '/services/holiday-rental-cleaning',
  'move-in-move-out': '/services/move-in-move-out-cleaning',
};

// Map service ID to relevant preview image
const previewImageMap: Record<string, string> = {
  'regular-house-cleaning': '/images/about_spotless_home_1792220476705.jpg',
  'deep-cleaning': '/images/gallery_spotless_kitchen_1792220477336.jpg',
  'apartment-cleaning': '/images/about_clean_bedroom_1792221222996.jpg',
  'villa-cleaning': '/images/hero_clean_villa_living_1792220476225.jpg',
  'holiday-rental-turnover': '/images/service_holiday_turnover_1792222074619.jpg',
  'move-in-move-out': '/images/service_move_in_out_1792222074615.jpg',
};

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<'core' | 'additional'>('core');
  const { navigate } = useRouter();
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].services;

  const currentServices = activeTab === 'core' ? t.coreItems : t.additionalItems;

  const handleCardClick = (serviceId: string) => {
    const route = slugRouteMap[serviceId];
    if (route) {
      navigate(route);
    }
  };

  const handleQuoteClick = (e: React.MouseEvent, serviceTitle: string) => {
    e.stopPropagation();
    onSelectService(serviceTitle);
    const element = document.getElementById('quote');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 sm:py-20 bg-white border-b border-[#E5EDF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4F8FEF] mb-3 font-display">
            <span>{t.kicker}</span>
            <span aria-hidden="true">·</span>
            <span>Paphos, Cyprus</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#17243A] tracking-tight leading-tight font-display">
            {t.title}
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-[#667085] leading-relaxed font-normal">
            {t.subtitle}
          </p>

          {/* Scope notice banner */}
          <div className="mt-5 p-4 rounded-2xl bg-[#EAF4FF] border border-[#E5EDF7] flex items-start gap-3">
            <Info className="w-5 h-5 text-[#4F8FEF] shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-[#17243A]">
              <span className="font-bold font-display">{t.disclaimerTitle}</span>{' '}
              {t.disclaimerText}
            </div>
          </div>
        </div>

        {/* Tab Selector: Primary Services vs Additional on Request */}
        <div className="flex flex-wrap items-center gap-2 mb-8 sm:mb-10 pb-2 border-b border-[#E5EDF7]">
          <button
            type="button"
            onClick={() => setActiveTab('core')}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold rounded-full transition-all font-display ${
              activeTab === 'core'
                ? 'bg-[#4F8FEF] text-white shadow-xs'
                : 'bg-[#EAF4FF] text-[#17243A] hover:bg-[#dceeff]'
            }`}
          >
            {t.coreTab}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('additional')}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold rounded-full transition-all font-display ${
              activeTab === 'additional'
                ? 'bg-[#4F8FEF] text-white shadow-xs'
                : 'bg-[#EAF4FF] text-[#17243A] hover:bg-[#dceeff]'
            }`}
          >
            {t.additionalTab}
          </button>
        </div>

        {/* Responsive Services Grid: 1 col on mobile, 2 on tablet, 3-4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {currentServices.map((service: ServiceItem) => {
            const Icon = iconMap[service.iconName] || Sparkles;
            const hasDedicatedPage = Boolean(slugRouteMap[service.id]);
            const previewImg = previewImageMap[service.id];

            return (
              <div
                key={service.id}
                onClick={() => hasDedicatedPage && handleCardClick(service.id)}
                className={`group flex flex-col justify-between p-5 sm:p-6 rounded-3xl bg-white border border-[#E5EDF7] hover:border-[#4F8FEF] hover:shadow-lg transition-all duration-300 ${
                  hasDedicatedPage ? 'cursor-pointer' : ''
                }`}
              >
                <div>
                  {/* Optional Image Thumbnail Preview for Dedicated Pages */}
                  {previewImg && (
                    <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-4 bg-neutral-100">
                      <img
                        src={previewImg}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  )}

                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-[#EAF4FF] border border-[#E5EDF7] flex items-center justify-center text-[#4F8FEF] group-hover:bg-[#4F8FEF] group-hover:text-white transition-colors shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    {hasDedicatedPage ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#4F8FEF] bg-[#EAF4FF] px-2.5 py-0.5 rounded-full">
                        <span>{language === 'el' ? 'Σελίδα Υπηρεσίας' : 'Dedicated Page'}</span>
                        <ArrowRight className="w-2.5 h-2.5" />
                      </span>
                    ) : (
                      <span className="text-[11px] font-semibold text-[#667085] bg-[#EAF4FF]/60 px-2.5 py-0.5 rounded-full">
                        Paphos
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#17243A] mb-2 group-hover:text-[#4F8FEF] transition-colors font-display">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#667085] leading-relaxed font-normal mb-4">
                    {service.description}
                  </p>

                  {/* Note */}
                  {service.note && (
                    <div className="text-xs text-[#17243A]/70 mb-5 flex items-center gap-1.5 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4F8FEF]" />
                      <span>{service.note}</span>
                    </div>
                  )}
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-[#E5EDF7] flex items-center justify-between gap-2">
                  {hasDedicatedPage ? (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCardClick(service.id);
                      }}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#4F8FEF] hover:text-[#3d7fdc] transition-colors font-display"
                    >
                      <span>{language === 'el' ? 'Περισσότερα' : 'Learn More'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <span className="text-xs text-[#667085]">{t.quoteModel}</span>
                  )}

                  <button
                    type="button"
                    onClick={(e) => handleQuoteClick(e, service.title)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#17243A] hover:text-[#4F8FEF] px-3 py-1.5 rounded-full bg-[#EAF4FF] hover:bg-[#dceeff] transition-colors font-display"
                  >
                    <span>{t.requestQuote}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Scope Footer Note */}
        <div className="mt-10 sm:mt-12 text-center text-xs text-[#667085]">
          {t.customPrompt}{' '}
          <a
            href="#quote"
            className="font-semibold text-[#4F8FEF] hover:underline transition-colors"
          >
            {t.customLink}
          </a>{' '}
          {t.customSuffix}
        </div>
      </div>
    </section>
  );
};
