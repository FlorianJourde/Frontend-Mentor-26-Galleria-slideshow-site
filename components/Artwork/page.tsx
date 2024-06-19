'use client'

import React, { useContext, useEffect, useState } from 'react'
import artworks from "@/data/data.json";
import resolveImagePath from '@/utils/resolveImagePath';
import Footer from '../Footer/page';
import { PageIdContext } from '@/contexts/PageIdContext'
import Lightbox from './Lightbox';
import ViewIcon from '@/public/assets/shared/icon-view-image.svg'
import { motion, AnimatePresence } from 'framer-motion'
import convertToSlug from '@/utils/convertToSlug';

// export default function Artwork({ slug }: { slug: string }) {
export default function Artwork() {
  // console.log(params);
  // console.log(slug);
  // console.log(id);

  const [lightbox, setLightbox] = useState<boolean>(false)
  const slug = useContext(PageIdContext);
  let currentPageId: number

  // convertToSlug()

  // console.log(artworks.asList(TYPES).indexOf("Sedan"));
  // console.log(artworks.findIndex(artwork => convertToSlug(artwork.name) === slug));
  const pageId = artworks.findIndex(artwork => convertToSlug(artwork.name) === slug);

  // console.log(artworks.name);
  // console.log(slug);
  // console.log(pageId);

  // if (typeof pageId === 'number' && !Number.isNaN(pageId)) {
  //   currentPageId = pageId
  // } else {
  //   currentPageId = 0
  // }

  // useEffect(() => {
  // }, [slug])

  if (typeof pageId === 'number' && pageId >= 0) {
    // if (typeof pageId === 'number' && !Number.isNaN(pageId)) {
    currentPageId = pageId
  } else {
    currentPageId = 0
  }

  // console.log(currentPageId);

  const artwork = artworks[currentPageId]
  const heroImagePath = resolveImagePath(artworks[currentPageId].images.gallery);
  const artistImagePath = resolveImagePath(artworks[currentPageId].artist.image);

  // console.log(artwork);
  // console.log(heroImagePath);
  // console.log(artistImagePath);


  return (
    <div className='overflow-x-hidden'>
      <div className="wrapper">
        <div className="artwork flex py-24 pb-40 sm:py-40 lg:pb-60 font-libre-baskerville">
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20 md:gap-40 xl:gap-20'>
            <div className='image-showing relative md:col-span-2 grid md:grid-cols-3 md:grid-rows-[minmax(0,_auto)_minmax(0,_1fr)] xl:grid-rows-[repeat(2,_minmax(0,_auto))]'>

              <AnimatePresence>
                <motion.img
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -10, opacity: 0 }}
                  transition={{ duration: .8 }}
                  className='w-full h-full max-h-[600px] lg:max-h-[800px] object-cover md:col-span-2 md:row-span-2 max-w-full' src={`..${heroImagePath}`} alt="" />
              </AnimatePresence>

              <AnimatePresence>
                <motion.div
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -10, opacity: 0 }}
                  transition={{ delay: .4, duration: .8 }}
                  className="image-title self-start p-5 sm:p-12 md:pr-0 md:pt-0 mr-12 xs:mr-24 sm:mr-32 md:mr-0 -mt-24 md:-mt-0 md:-ml-40 xl:-ml-40 bg-white">
                  <h1 className='text-2xl sm:text-4xl md:text-6xl break-words font-bold'>{artwork.name}</h1>
                  <h2 className='pt-3 xl:pt-10 opacity-50'>{artwork.artist.name}</h2>
                </motion.div>
              </AnimatePresence>

              <AnimatePresence>
                <motion.img
                  initial={{ x: 10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 10, opacity: 0 }}
                  transition={{ delay: 1.2, duration: .8 }}
                  className='md:self-start xl:self-end justify-self-start pt-8 md:pt-0 md:p-10 xl:-mb-24 max-w-20 md:max-w-full' src={`..${artistImagePath}`} 
                  alt="" />
              </AnimatePresence>

              <AnimatePresence>
                <motion.button
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -10, opacity: 0 }}
                  transition={{ delay: 1.6, duration: .8 }}
                  onClick={() => setLightbox(lightbox => !lightbox)} className='text-white uppercase font-bold tracking-widest text-xs bg-black absolute top-5 right-5 md:right-auto md:top-auto md:bottom-5 md:left-5  py-3 px-6 md:py-4 md:px-8 flex gap-2 items-center justify-center'>
                  View Image <ViewIcon />
                </motion.button>
              </AnimatePresence>

              <Lightbox heroImagePath={heroImagePath} lightbox={lightbox} setLightbox={setLightbox} />
            </div>

            <div className="details md:col-span-2 xl:col-auto flex flex-col self-center relative md:mx-24 xl:mx-auto xl:mt-40">

              <AnimatePresence>
                <motion.div
                  initial={{ x: 20, y: '-50%', opacity: 0 }}
                  animate={{ x: 0, y: '-50%', opacity: .05 }}
                  exit={{ x: 20, y: '-50%', opacity: 0 }}
                  transition={{ delay: 1.6, duration: 1.6 }}
                  className="date text-8xl md:text-[200px] font-bold opacity-5 absolute right-0 md:-left-24 md:right-auto xl:right-0 xl:left-auto -translate-y-2/3 l:translate-x-1/4">{artwork.year}
                </motion.div>
              </AnimatePresence>

              <AnimatePresence>
                <motion.p
                  initial={{ x: 10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 10, opacity: 0 }}
                  transition={{ delay: .8, duration: .8 }}
                  className='grow leading-8 text-gray-600'>{artwork.description}</motion.p>
              </AnimatePresence>

              <AnimatePresence>
                <motion.a
                  initial={{ x: 10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 10, opacity: 0 }}
                  transition={{ delay: 1.6, duration: .8 }}
                  target="_blank" className='pt-20 uppercase opacity-50 font-bold tracking-widest text-xs underline' href={artwork.source}>Go to source
                </motion.a>
              </AnimatePresence>

            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
