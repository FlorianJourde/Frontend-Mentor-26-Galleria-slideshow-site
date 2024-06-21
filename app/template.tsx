"use client"

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useContext, useRef } from "react";

// Prevents instant page opening
function FrozenRouter(props: { children: React.ReactNode }) {
  const context = useContext(LayoutRouterContext ?? {});
  const frozen = useRef(context).current;
  // console.log(useRef(context).current);

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {props.children}
    </LayoutRouterContext.Provider>
  );
}


export default function Template({ children }: { children: React.ReactNode }) {
  let pathname = usePathname();

  return (
    <>
      <AnimatePresence mode={'wait'} initial={false}>
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: .8 }}
        >
          <FrozenRouter>{children}</FrozenRouter>
        </motion.div>
      </AnimatePresence>
    </>
  )
}

// "use client";

// import { AnimatePresence, motion } from "framer-motion";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

// export default function Template({ children }) {
//   // const router = useRouter
//   // const pathname = usePathname

//   useEffect(() => {
//     // console.log(router.pathname);
//     // console.log(pathname);
//     console.log(children);
//   }, [children])


//   return (
//     // <AnimatePresence mode="wait">
//     <AnimatePresence>
//       <motion.div
//         initial={{ y: 20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         exit={{ y: 20, opacity: 0 }}
//         transition={{ ease: "easeInOut", duration: 0.75 }}
//         key={children}
//       >
//         {children}
//       </motion.div>
//     </AnimatePresence>
//   );
// }
