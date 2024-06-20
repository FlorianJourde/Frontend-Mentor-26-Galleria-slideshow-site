'use client'

import { SlugContext } from '@/contexts/SlugContext'
import artworks from "@/data/data.json";
import getNextArtwork from '@/components/Footer/getNextArtwork';
import getPreviousArtwork from '@/components/Footer/getPreviousArtwork';
import React, { useContext, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import convertToSlug from '@/utils/convertToSlug';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const slug = useContext(SlugContext);
  const pageId = artworks.findIndex(artwork => convertToSlug(artwork.name) === slug);
  // let currentPageId: number = 0
  const [currentPageId, setCurrentPageId] = useState<number | null>(null)
  // let currentPageId: number | null = null
  // const [currentPageId, setCurrentPageId] = useState<number | null>(null)
  const pathname = usePathname()
  // console.log(usePathname());


  // if (typeof pageId === 'number' && pageId >= 0) {
  //   currentPageId = pageId
  // } else {
  //   currentPageId = 0
  // }

  useEffect(() => {
    if (typeof pageId === 'number' && pageId >= 0) {
      setCurrentPageId(pageId)
    }


    // if (typeof pageId === 'number' && pageId >= 0) {
    //   currentPageId = pageId
    // } else {
    //   currentPageId = null
    // }
  }, [pageId]);


  if (currentPageId === null) {
    return null;
  }

  function progressBar() {
    if (currentPageId !== null) {
      let progressBarWidth = (100 / 15) * (currentPageId + 1);

      return (
        <div className="progressbar w-1/2 transition-all h-[2px] bg-black -top-[2px] absolute" style={{ width: progressBarWidth + "%" }}></div>
      )
    }
  }
  if (pathname.startsWith('/artworks')) {
    return (
      <AnimatePresence mode='wait'>
        <motion.footer

          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}
          transition={{ duration: .8 }}

          className='fixed w-full bg-white bottom-0 flex py-5 lg:py-8 justify-between items-center border-t-2'>

          {progressBar()}

          <div className="wrapper">

            <div className='flex justify-between items-center gap-5 w-full'>
              <div className="title w-full overflow-hidden before:content-[''] before:absolute before:right-0 before:top-0 before:h-full before:w-8 relative before:bg-gradient-to-r before:from-transparent before:to-white flex flex-col gap-2">

                <AnimatePresence mode='wait'>
                  <motion.h2
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -10, opacity: 0 }}
                    transition={{ duration: .8 }}
                    key={artworks[currentPageId].name}
                    className='font-bold md:text-xl font-libre-baskerville whitespace-nowrap'>
                    {currentPageId !== undefined && artworks[currentPageId].name}
                  </motion.h2>
                </AnimatePresence>

                <AnimatePresence mode='wait'>
                  <motion.h3
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: .5 }}
                    exit={{ x: -10, opacity: 0 }}
                    transition={{ delay: .4, duration: .8 }}
                    key={artworks[currentPageId].artist.name}
                    className='opacity-50 font-bold text-xs md:text-sm font-libre-baskerville'>
                    {currentPageId !== undefined && artworks[currentPageId].artist.name}
                  </motion.h3>
                </AnimatePresence>

              </div>

              {currentPageId !== undefined &&
                <div
                  className='buttons-container flex gap-8 md:gap-12'>

                  {getPreviousArtwork(currentPageId, artworks)}
                  {getNextArtwork(currentPageId, artworks)}

                </div>
              }

            </div>
          </div>
        </motion.footer>
      </AnimatePresence>

    )
  }
}
