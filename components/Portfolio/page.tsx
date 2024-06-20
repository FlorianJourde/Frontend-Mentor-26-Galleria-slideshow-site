'use client'

import React from 'react'
import artworks from "@/data/data.json";
import Link from "next/link";
import convertToSlug from '@/utils/convertToSlug'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image';

export default function Portfolio() {

  const variants = {
    hidden: { scaleX: 0, scaleY: 0 },
    enter: { scaleX: 1, scaleY: 1 },
    // hidden: { opacity: 0, x: 0, y: 0 },
    // enter: { opacity: 1, x: 0, y: 0 },
  }

  return (

    <>

      {/* <AnimatePresence mode='wait'>
        <motion.div
          variants={variants}
          initial="hidden"
          exit="hidden"
          animate="enter"
          key={'home'}> */}

          <div className="wrapper">

            <ul className="masonry-portfolio py-24 pb-0 sm:py-40 sm:pb-8 columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-10">
              {artworks.map((artwork, index) => (

                <AnimatePresence key={`${convertToSlug(artwork.name)}`}>
                  <motion.li
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -10, opacity: 0 }}
                    transition={{ delay: index * .1, duration: .8 }}
                    className="artwork relative mb-5 sm:mb-10"
                  >
                    <Link className="flex flex-col p-5 justify-end absolute bottom-0 text-white h-full w-full before:content-[''] before:top-0 before:absolute before:left-0 before:w-full before:h-full before:bg-[linear-gradient(360deg,_black,_transparent_50%)] before:z-0 [&>*]:z-10" href={{
                      pathname: `/artworks/${convertToSlug(artwork.name)}`,
                    }}>
                      <p className={`text-2xl font-bold font-libre-baskerville`}>{artwork.name}</p>
                      <p className={`text-sm opacity-50 font-libre-baskerville`}>{artwork.artist.name}</p>
                    </Link>
                    <Image height={0} width={0} sizes="100vw" className='relative w-full h-auto -z-10' alt='' src={artwork.images.gallery} />

                    {/* <img className="h-full w-full" src={artwork.images.thumbnail} alt="" /> */}

                  </motion.li>
                </AnimatePresence>

              ))}
            </ul>

          </div>

        {/* </motion.div>
      </AnimatePresence> */}
    </>
  )
}
