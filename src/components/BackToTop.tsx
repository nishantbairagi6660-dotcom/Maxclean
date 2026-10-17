import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { language } = useLanguage();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Check if scrolled past the hero section
          const heroEl = document.getElementById('hero') || document.getElementById('service-hero');
          if (heroEl) {
            const rect = heroEl.getBoundingClientRect();
            // Visible when hero has scrolled off or past 60px from top
            setIsVisible(rect.bottom <= 60);
          } else {
            // Fallback for pages without an explicit #hero section
            setIsVisible(window.scrollY > 400);
          }

          // Calculate total scroll progress (0 - 100)
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (docHeight > 0) {
            const progress = Math.min(100, Math.max(0, (window.scrollY / docHeight) * 100));
            setScrollProgress(progress);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount in case the user reloads mid-page
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const label = language === 'el' ? 'Επιστροφή στην κορυφή' : 'Back to top';

  // Circle radius and circumference for scroll progress indicator
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      className={`fixed bottom-20 right-4 sm:bottom-8 sm:right-8 z-40 transition-all duration-300 ease-out group ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      {/* Desktop Tooltip */}
      <span
        role="tooltip"
        className="hidden sm:block absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2.5 py-1 text-xs font-semibold text-white bg-[#17243A] rounded-md shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none font-display"
      >
        {label}
        {/* Tooltip caret */}
        <span className="absolute top-1/2 -translate-y-1/2 -right-1 w-2 h-2 bg-[#17243A] rotate-45" />
      </span>

      {/* Button with circular progress ring */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label={label}
        title={label}
        className="relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#4F8FEF] hover:bg-[#3d7fdc] text-white shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4F8FEF]"
      >
        {/* SVG Progress Ring */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5"
          viewBox="0 0 52 52"
          aria-hidden="true"
        >
          {/* Background circle track */}
          <circle
            cx="26"
            cy="26"
            r={radius}
            fill="transparent"
            stroke="rgba(255, 255, 255, 0.25)"
            strokeWidth="2.5"
          />
          {/* Progress stroke */}
          <circle
            cx="26"
            cy="26"
            r={radius}
            fill="transparent"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-[stroke-dashoffset] duration-150 ease-out"
          />
        </svg>

        {/* Up Arrow Icon */}
        <ArrowUp className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-white transition-transform duration-200 group-hover:-translate-y-0.5" />
      </button>
    </div>
  );
};
