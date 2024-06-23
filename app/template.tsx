"use client"

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useContext, useRef } from "react";

function FrozenRouter(props: { children: React.ReactNode }) {
  const context = useContext(LayoutRouterContext ?? {});
  const frozen = useRef(context).current;

  return (
    <>
      <LayoutRouterContext.Provider value={frozen}>
        {props.children}
      </LayoutRouterContext.Provider>
    </>
  );
}

export default function Template({ children }: { children: React.ReactNode }) {
  let pathname = usePathname();

  return (
    <>
      <AnimatePresence mode={'popLayout'} initial={false}>
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
