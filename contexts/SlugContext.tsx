'use client'

import { usePathname } from 'next/navigation';
import React, { createContext, useContext, useEffect, useState } from 'react';

export const SlugContext = createContext<string>('/');

export const PageIdProvider = ({ children }: any) => {
  const [slug, setSlug] = useState<string>('/');
  const pathname = usePathname()

  useEffect(() => {
    if (typeof pathname === 'string' && pathname.startsWith('/artworks/')) {
      setSlug(pathname.replace("/artworks/", ""))
    } else {
      setSlug('/')
    }
  }, [pathname]);

  return (
    <SlugContext.Provider value={slug}>
      {children}
    </SlugContext.Provider>
  );
};

export const usePageId = () => {
  return useContext(SlugContext);
};
