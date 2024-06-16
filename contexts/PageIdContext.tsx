'use client'

import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import React, { createContext, useContext, useEffect, useState } from 'react';

// interface PageId {
//   id: number;
// }

// interface PageIdContextProps {
//   pageId: string | null;
// }

//   pageId: string | null;
// interface PageIdContextProps {
//   pageId: number;
// }
// pageId: number | undefined;
// setPageId: React.Dispatch<React.SetStateAction<string | null>>;

// const PageIdContext = createContext<PageIdContextProps | undefined>(undefined);
// const PageIdContext = createContext<PageIdContextProps | undefined>(undefined);
export const PageIdContext = createContext<number | null>(null);
// const PageIdContext = createContext<AppContext>({} as AppContext);

export const PageIdProvider = ({ children }: any) => {
// export const PageIdProvider = ({ children }: any) => {
  const [pageId, setPageId] = useState<number>(4);

  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  // setPageId(3)

  // console.log(useSearchParams());

  useEffect(() => {
    // const id = router.pathname.replace('/', '') || 'home';

    if (searchParams !== null) {
      // if (pageId !== id) {
      // setPageId(id);
      setPageId(parseInt(searchParams.get('id')!));

      // }
    }
  }, [pathname]);
  // console.log('test');
  // console.log(searchParams.get('id'));
  // console.log(useSearchParams());
  // console.log(pageId);



  // let id: number = 0

  // if (searchParams !== null) {
  if (searchParams !== null) {
    // id = searchParams.get('id')
    // id = parseInt(searchParams.get('id')!)
    // id = parseInt(searchParams.get('id')!)
    // setPageId(parseInt(searchParams.get('id')!))
  }




  return (
    <PageIdContext.Provider value={pageId}>
      {children}
    </PageIdContext.Provider>
  );
};

export const usePageId = () => {
  return useContext(PageIdContext);
};
