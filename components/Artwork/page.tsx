'use client'

import React, { useContext, useEffect, useState } from 'react'
import artworks from "@/data/data.json";
import resolveImagePath from '@/utils/resolveImagePath';
import Footer from '../Footer/page';
import { SlugContext } from '@/contexts/SlugContext'
import Lightbox from './Lightbox';
import ViewIcon from '@/public/assets/shared/icon-view-image.svg'
import { motion, AnimatePresence } from 'framer-motion'
import convertToSlug from '@/utils/convertToSlug';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
// import transition from '@/utils/transitions';
// import transition from '@/utils/Transition';
// import Transition from '@/utils/Transition';

export default function Artwork() {
  // export default Transition(function Artwork() {
  // export default transition(Artwork) = () => {
  // const Artwork = () => {
  const [lightbox, setLightbox] = useState<boolean>(false)
  const [currentPageId, setCurrentPageId] = useState<number | null>(null)
  const slug = useContext(SlugContext);
  const pageId = artworks.findIndex(artwork => convertToSlug(artwork.name) === slug);

  useEffect(() => {
    if (typeof pageId === 'number' && pageId >= 0) {
      setCurrentPageId(pageId)
    }

  }, [pageId]);

  if (currentPageId === null) {

    return null;
    //your code to be executed after 1 second
  }

  const artwork = artworks[currentPageId]
  const heroImagePath = resolveImagePath(artworks[currentPageId].images.hero.large);
  const artistImagePath = resolveImagePath(artworks[currentPageId].artist.image);

  return (
    <>
      <div className='overflow-x-hidden'>
        <div className="wrapper">
          <div className="artwork flex py-24 pb-40 sm:py-40 lg:pb-60 font-libre-baskerville">
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-20 xl:gap-20'>
              <div className='image-showing relative md:col-span-2 grid md:grid-cols-3 max-h-[800px] sm:max-h-[800px] md:max-h-[600px] md:grid-rows-[minmax(0,_auto)_minmax(0,_1fr)] xl:grid-rows-[repeat(2,_minmax(0,_auto))]'>

                <AnimatePresence mode='wait'>
                  <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -10, opacity: 0 }}
                    transition={{ duration: .8 }}
                    key={pageId}
                    className='w-full h-full overflow-hidden md:col-span-2 md:row-span-2'
                  >
                    <Image height={0} width={0} sizes="100vw" className='w-full h-full object-cover md:object-contain md:object-left' alt='' src={`..${heroImagePath}`} />
                  </motion.div>
                </AnimatePresence>

                <AnimatePresence mode='wait'>
                  <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -10, opacity: 0 }}
                    transition={{ delay: .4, duration: .8 }}
                    key={pageId}
                    className="image-title self-start p-5 sm:p-12 md:pr-0 md:pt-0 mr-12 xs:mr-24 sm:mr-32 md:mr-0 -mt-24 md:-mt-0 md:-ml-40 xl:-ml-40 bg-white">
                    <h1 className='text-2xl sm:text-4xl md:text-6xl break-words font-bold'>{artwork.name}</h1>
                    <h2 className='pt-3 xl:pt-10 opacity-50'>{artwork.artist.name}</h2>
                  </motion.div>
                </AnimatePresence>

                <AnimatePresence mode='wait'>
                  <motion.img
                    initial={{ x: 10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 10, opacity: 0 }}
                    transition={{ delay: 1.2, duration: .8 }}
                    key={pageId}
                    className='md:self-start xl:self-end md:justify-self-end xl:justify-self-start pt-5 sm:pt-0 xl:p-10 xl:-mb-24 max-w-20 md:max-w-full' src={`..${artistImagePath}`}
                    alt="" />
                </AnimatePresence>

                <AnimatePresence mode='wait'>
                  <motion.button
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -10, opacity: 0 }}
                    transition={{ delay: 1.6, duration: .8 }}
                    key={pageId}
                    onClick={() => setLightbox(lightbox => !lightbox)} className='text-white uppercase font-bold tracking-widest text- bg-black absolute top-5 right-5 md:right-auto md:top-auto md:bottom-5 md:left-5 py-3 px-6 md:py-4 md:px-8 flex text-xs gap-4 md:gap-6 items-center justify-center'>
                    <ViewIcon /> View Image
                  </motion.button>
                </AnimatePresence>

                <Lightbox heroImagePath={heroImagePath} lightbox={lightbox} setLightbox={setLightbox} />

              </div>

              <div className="details md:col-span-2 xl:col-auto flex flex-col self-center relative md:mx-24 xl:mx-auto xl:mt-40">

                <AnimatePresence mode='wait'>
                  <motion.div
                    initial={{ x: 40, y: '-50%', opacity: 0 }}
                    animate={{ x: 0, y: '-50%', opacity: .05 }}
                    exit={{ x: 40, y: '-50%', opacity: 0 }}
                    transition={{ duration: 4 }}
                    key={pageId}
                    className="date text-[100px] md:text-[200px] font-bold opacity-5 absolute right-0 md:-left-24 md:right-auto xl:right-0 xl:left-auto -translate-y-2/3 l:translate-x-1/4 pointer-events-none">{artwork.year}
                  </motion.div>
                </AnimatePresence>

                <AnimatePresence mode='wait'>
                  <motion.p
                    initial={{ x: 10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 10, opacity: 0 }}
                    transition={{ delay: .8, duration: .8 }}
                    key={pageId}
                    className='grow leading-8 text-gray-600'>{artwork.description}</motion.p>
                </AnimatePresence>

                <AnimatePresence mode='wait'>
                  <motion.a
                    initial={{ x: 10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 10, opacity: 0 }}
                    transition={{ delay: 1.6, duration: .8 }}
                    key={pageId}
                    target="_blank" className='pt-20 uppercase opacity-50 font-bold tracking-widest text-xs underline' href={artwork.source}>Go to source
                  </motion.a>
                </AnimatePresence>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
