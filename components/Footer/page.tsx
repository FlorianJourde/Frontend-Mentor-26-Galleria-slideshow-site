'use client'

import { SlugContext } from '@/contexts/SlugContext'
import artworks from "@/data/data.json";
import getNextArtwork from '@/components/Footer/getNextArtwork';
import getPreviousArtwork from '@/components/Footer/getPreviousArtwork';
import React, { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import convertToSlug from '@/utils/convertToSlug';

export default function Footer() {
  const slug = useContext(SlugContext);
  const pageId = artworks.findIndex(artwork => convertToSlug(artwork.name) === slug);
  let currentPageId: number = 0

  if (typeof pageId === 'number' && pageId >= 0) {
    currentPageId = pageId
  } else {
    currentPageId = 0
  }

  function progressBar() {
    if (currentPageId !== undefined) {
      let progressBarWidth = (100 / 15) * (currentPageId + 1);

      return (
        <div className="progressbar w-1/2 transition-all h-[2px] bg-black -top-[2px] absolute" style={{ width: progressBarWidth + "%" }}></div>
      )
    }
  }

  return (
    <footer className='fixed w-full bg-white bottom-0 flex py-5 lg:py-8 justify-between items-center border-t-2'>

      {progressBar()}

      <div className="wrapper">

        <div className='flex justify-between items-center gap-10 w-full'>
          <div className="title flex flex-col gap-2">

            <AnimatePresence>
              <motion.h2
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -10, opacity: 0 }}
                transition={{ duration: .8 }}
                className='font-bold tracking-widest md:text-xl font-libre-baskerville'>
                {currentPageId !== undefined && artworks[currentPageId].name}
              </motion.h2>
            </AnimatePresence>

            <AnimatePresence>
              <motion.h3
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: .5 }}
                exit={{ x: -10, opacity: 0 }}
                transition={{ delay: .4, duration: .8 }}
                className='opacity-50 font-bold tracking-widest text-xs md:text-sm font-libre-baskerville'>
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
    </footer>
  )
}
