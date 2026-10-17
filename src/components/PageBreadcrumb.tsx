import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import { useLanguage } from '../context/LanguageContext';

interface PageBreadcrumbProps {
  title: string;
  parent?: {
    label: string;
    path: string;
  };
}

export const PageBreadcrumb: React.FC<PageBreadcrumbProps> = ({ title, parent }) => {
  const { navigate } = useRouter();
  const { language } = useLanguage();

  return (
    <div className="bg-[#EAF4FF]/40 border-b border-[#E5EDF7] py-3.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumbs">
          <ol className="flex items-center flex-wrap gap-2 text-xs sm:text-sm text-[#667085]">
            <li>
              <button
                type="button"
                onClick={() => navigate('/')}
                className="hover:text-[#4F8FEF] transition-colors font-medium cursor-pointer"
              >
                {language === 'el' ? 'Αρχική' : 'Home'}
              </button>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="w-3.5 h-3.5 text-[#667085]/50" />
            </li>
            {parent && (
              <>
                <li>
                  <button
                    type="button"
                    onClick={() => navigate(parent.path)}
                    className="hover:text-[#4F8FEF] transition-colors font-medium cursor-pointer"
                  >
                    {parent.label}
                  </button>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="w-3.5 h-3.5 text-[#667085]/50" />
                </li>
              </>
            )}
            <li className="font-semibold text-[#17243A] truncate max-w-[240px] sm:max-w-none">
              {title}
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};
