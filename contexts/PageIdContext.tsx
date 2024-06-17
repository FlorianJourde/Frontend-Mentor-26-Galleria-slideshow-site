'use client'

import { useSearchParams, usePathname } from 'next/navigation';
import React, { createContext, useContext, useEffect, useState } from 'react';

export const PageIdContext = createContext<number>(0);

export const PageIdProvider = ({ children }: any) => {
  const [pageId, setPageId] = useState<number>(0);
  const searchParams = useSearchParams()
  const pathname = usePathname()

  useEffect(() => {
    if (searchParams !== null && searchParams !== undefined) {
      setPageId(parseInt(searchParams.get('id')!));
    } else {
      setPageId(0);
    }
  }, [pathname]);

  return (
    <PageIdContext.Provider value={pageId}>
      {children}
    </PageIdContext.Provider>
  );
};

export const usePageId = () => {
  return useContext(PageIdContext);
};
