'use client'

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';
import React, { Suspense, createContext, useContext, useEffect, useState } from 'react';

export const PageIdContext = createContext<number>(0);

export const PageIdProvider = ({ children }: any) => {
  const [pageId, setPageId] = useState<number>(0);
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    if (searchParams !== null && searchParams !== undefined) {
      setPageId(parseInt(searchParams.get('id')!));
      // setPageId(parseInt(searchParams.get('id')!));
      // console.log(router);

    } else {
      setPageId(0);
    }
  }, [pathname]);

  return (
    // <Suspense>
    <PageIdContext.Provider value={pageId}>
      {children}
    </PageIdContext.Provider>
    // </Suspense>
  );
};

export const usePageId = () => {
  return useContext(PageIdContext);
};
