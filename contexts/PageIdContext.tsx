'use client'

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';
import React, { Suspense, createContext, useContext, useEffect, useState } from 'react';

export const PageIdContext = createContext<string>('/');

// function PageIdProviderFallback() {
//   return <>placeholder</>
// }


export const PageIdProvider = ({ children }: any) => {
  // const [pageId, setPageId] = useState<number>(0);
  const [slug, setSlug] = useState<string>('/');
  // const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  // console.log(searchParams);
  // console.log(pathname);
  

  useEffect(() => {
    if (typeof pathname === 'string' && pathname.startsWith('/artworks/')) {
      // pathname.startsWith('/artworks/')
      // console.log(pathname.replace("/artworks/", ""))
      setSlug(pathname.replace("/artworks/", ""))
      // pathname.replace("/artworks/", "");
    } else {
      setSlug('/')
    }

    // if (searchParams !== null && searchParams !== undefined) {
    //   setPageId(parseInt(searchParams.get('id')!));
    //   // setPageId(parseInt(searchParams.get('id')!));
    //   // console.log(router);

    // } else {
    //   setPageId(0);
    // }
  }, [pathname]);

  return (
    // <Suspense>
    // <Suspense fallback={<PageIdProviderFallback />}>

      <PageIdContext.Provider value={slug}>
        {children}
      </PageIdContext.Provider>
    // {/* </Suspense> */}
  );
};

export const usePageId = () => {
  return useContext(PageIdContext);
};
