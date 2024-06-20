import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/page";
import { PageIdProvider } from "@/contexts/SlugContext";
// import Transition from "@/utils/Transition";
import { AnimatePresence, motion } from "framer-motion";
// import Template from "./Template";
// import PageAnimatePresence from '@/utils/PageAnimatePresence'
import { Component } from "react";
import Footer from "@/components/Footer/page";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";


const inter = Inter({ subsets: ["latin"] });
const libreBaskerville = Libre_Baskerville({ subsets: ["latin"], weight: ['400', '700'], variable: '--font-baskerville' });

export const metadata: Metadata = {
  title: "Galleria",
  description: "Galleria slideshow site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const pathname = usePathname()
  // const router = useRouter() 

  return (
    <html lang="en">
      <body className={`${inter.className} ${libreBaskerville.variable} min-h-svh overflow-x-hidden`}>


        <PageIdProvider>
          {/* <AnimatePresence mode="wait">
            <motion.div
            
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -10, opacity: 0 }}
          transition={{ duration: .8 }}
          key={'test'}
            > */}
          <Header />
          {/* </motion.div>
          </AnimatePresence> */}
          {/* </AnimatePresence> */}
          {/* {children} */}
          {/* <Transition> */}

          {/* <AnimatePresence mode="wait"> */}
          {children}

          {/* <Component {...children} /> */}


          {/* <PageAnimatePresence>{children}</PageAnimatePresence> */}


          {/* <Template>{children}</Template> */}
          {/* </Transition> */}
          <Footer />

        </PageIdProvider>

      </body>
    </html>
  );
}
