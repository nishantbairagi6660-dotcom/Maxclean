import React, { useState } from 'react';
import { Maximize2, X, Info } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { GalleryItem } from '../types';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].gallery;

  const filteredItems = t.items.filter((item) => {
    if (activeCategory === 'All' || activeCategory === 'Όλα') return true;
    if (activeCategory === 'Living Spaces' || activeCategory === 'Καθιστικά') return item.category === 'Living Spaces';
    if (activeCategory === 'Kitchens' || activeCategory === 'Κουζίνες') return item.category === 'Kitchens';
    if (activeCategory === 'Bathrooms' || activeCategory === 'Μπάνια') return item.category === 'Bathrooms';
    return true;
  });

  return (
    <section id="gallery" className="py-20 bg-[#EAF4FF]/30 border-b border-[#E5EDF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4F8FEF] mb-3 font-display">
            <span>{t.kicker}</span>
            <span aria-hidden="true">·</span>
            <span>Paphos, Cyprus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17243A] tracking-tight leading-tight font-display">
            {t.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#667085] leading-relaxed font-normal">
            {t.subtitle}
          </p>

          {/* Honest Transparency Note */}
          <div className="mt-4 flex items-center gap-2 text-xs text-[#667085]">
            <Info className="w-4 h-4 text-[#4F8FEF] shrink-0" />
            <span>{t.disclaimer}</span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {t.categories.map((cat, idx) => {
            const isAll = idx === 0;
            const isSelected = isAll
              ? activeCategory === 'All' || activeCategory === 'Όλα'
              : activeCategory === cat;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all font-display ${
                  isSelected
                    ? 'bg-[#4F8FEF] text-white shadow-xs'
                    : 'bg-white text-[#667085] hover:bg-[#EAF4FF] hover:text-[#17243A] border border-[#E5EDF7]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-3xl overflow-hidden bg-white border border-[#E5EDF7] shadow-sm hover:shadow-lg transition-all cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <div className="aspect-[16/10] overflow-hidden bg-neutral-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Card Meta */}
              <div className="p-6 flex items-start justify-between gap-4 bg-white">
                <div>
                  <span className="text-[11px] font-bold tracking-wider text-[#4F8FEF] uppercase font-display">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold text-[#17243A] mt-1 font-display">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#667085] mt-1.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <button
                  type="button"
                  className="p-2.5 rounded-full bg-[#EAF4FF] text-[#4F8FEF] group-hover:bg-[#4F8FEF] group-hover:text-white transition-colors shrink-0"
                  aria-label={`View ${item.title}`}
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors focus-visible:outline-2 focus-visible:outline-white"
                aria-label="Close image modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[16/10] bg-neutral-900">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 sm:p-8 bg-white">
                <div className="flex items-center gap-2 text-xs font-bold text-[#4F8FEF] uppercase font-display">
                  <span>{selectedItem.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{t.standardBadge}</span>
                </div>
                <h3 className="text-2xl font-bold text-[#17243A] mt-1 font-display">
                  {selectedItem.title}
                </h3>
                <p className="text-sm text-[#667085] mt-2 leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
