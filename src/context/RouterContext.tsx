import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

interface RouterContextType {
  currentPath: string;
  navigate: (to: string, options?: { scrollTarget?: string }) => void;
}

export const RouterContext = createContext<RouterContextType>({
  currentPath: '/',
  navigate: () => {},
});

export const useRouter = () => useContext(RouterContext);

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback((to: string, options?: { scrollTarget?: string }) => {
    if (typeof window === 'undefined') return;

    // Handle hash on same page
    if (to.startsWith('#')) {
      const element = document.getElementById(to.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    // Split path and hash if any
    const [path, hash] = to.split('#');
    const targetPath = path || '/';

    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', to);
      setCurrentPath(targetPath);
    }

    if (hash || options?.scrollTarget) {
      setTimeout(() => {
        const id = hash || options?.scrollTarget;
        const element = document.getElementById(id || '');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, []);

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};
