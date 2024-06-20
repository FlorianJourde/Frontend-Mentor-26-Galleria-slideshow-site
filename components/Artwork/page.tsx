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
  const pathname = usePathname()
  // let currentPageId: number
  const pageId = artworks.findIndex(artwork => convertToSlug(artwork.name) === slug);


  const variants = {
    hidden: { scaleX: 0, scaleY: 0 },
    enter: { scaleX: 1, scaleY: 1 },
    // hidden: { opacity: 0, x: 0, y: 0 },
    // enter: { opacity: 1, x: 0, y: 0 },
  }


  // console.log(pageId);

  // if (typeof pageId === 'number' && pageId >= 0) {
  //   currentPageId = pageId
  // } else {
  //   currentPageId = 0
  // }


  useEffect(() => {
    if (typeof pageId === 'number' && pageId >= 0) {
      // setTimeout(function() {
      // setCurrentPageId(pageId)
      setCurrentPageId(pageId)
      //your code to be executed after 1 second
      // }, 800);
    }

    // console.log(pathname);
    console.log(pageId);


  }, [pageId]);


  if (currentPageId === null) {
    // setTimeout(function() {

    return null;
    // setCurrentPageId(pageId)
    //your code to be executed after 1 second
    // }, 800);
  }

  const artwork = artworks[currentPageId]
  const heroImagePath = resolveImagePath(artworks[currentPageId].images.gallery);
  const artistImagePath = resolveImagePath(artworks[currentPageId].artist.image);

  return (

    <>
      {/* <AnimatePresence mode='wait'>
        <motion.div

          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -10, opacity: 0 }}
          transition={{ duration: .8 }}
          key={pageId}
        > */}

      <div className='overflow-x-hidden'>
        <div className="wrapper">


          {/* <AnimatePresence mode='wait'> */}
          {/* <motion.div */}
          <div
            // variants={variants}
            // initial="hidden"
            // exit="hidden"
            // animate="enter"
            // key={pathname}
            className="artwork flex py-24 pb-40 sm:py-40 lg:pb-60 font-libre-baskerville">
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-20 xl:gap-20'>
              <div className='image-showing relative md:col-span-2 grid md:grid-cols-3 max-h-[600px] md:grid-rows-[minmax(0,_auto)_minmax(0,_1fr)] xl:grid-rows-[repeat(2,_minmax(0,_auto))]'>

                <AnimatePresence mode='wait'>

                  <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -10, opacity: 0 }}
                    transition={{ duration: .8 }}
                    key={pageId}
                    className='w-full h-full overflow-hidden md:col-span-2 md:row-span-2'
                  >
                    <Image height={0} width={0} sizes="100vw" className='w-full h-full  object-cover' alt='' src={`..${heroImagePath}`} />

                  </motion.div>

                </AnimatePresence>

                {/* <AnimatePresence mode='wait'>

                <motion.img
                  // initial={{ x: -10, opacity: 0 }}
                  // animate={{ x: 0, opacity: 1 }}
                  // exit={{ x: -10, opacity: 0 }}
                  // transition={{ delay: .4, duration: .8 }}
                  // key={pathname}
                  key={pageId}

                  className='w-full h-full max-h-[600px] lg:max-h-[800px] object-cover md:col-span-2 md:row-span-2 max-w-full' src={`..${heroImagePath}`} alt="" />
              </AnimatePresence> */}


                {/* <motion.img
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -10, opacity: 0 }}
                  transition={{ duration: .8 }}
                  className='w-full h-full max-h-[600px] lg:max-h-[800px] object-cover md:col-span-2 md:row-span-2 max-w-full' src={`..${heroImagePath}`} alt="" /> */}


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
                    className='md:self-start xl:self-end md:justify-self-end xl:justify-self-start pt-5 sm:pt-0 xl:p-10 xl:-mb-24 max-w-20 md:max-w-full' src={`..${artistImagePath}`}
                    alt="" />
                </AnimatePresence>

                <AnimatePresence>
                  <motion.button
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -10, opacity: 0 }}
                    transition={{ delay: 1.6, duration: .8 }}
                    onClick={() => setLightbox(lightbox => !lightbox)} className='text-white uppercase font-bold tracking-widest text- bg-black absolute top-5 right-5 md:right-auto md:top-auto md:bottom-5 md:left-5 py-3 px-6 md:py-4 md:px-8 flex text-xs gap-4 md:gap-6 items-center justify-center'>
                    <ViewIcon /> View Image
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
                    className="date text-[100px] md:text-[200px] font-bold opacity-5 absolute right-0 md:-left-24 md:right-auto xl:right-0 xl:left-auto -translate-y-2/3 l:translate-x-1/4">{artwork.year}
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
            {/* </div> */}

          </div>
          {/* </AnimatePresence> */}
          {/* </> */}

        </div>
      </div>


      {/* </motion.div> */}

      {/* </AnimatePresence> */}
    </>
  )
  // })
}

// export default transition(Artwork)