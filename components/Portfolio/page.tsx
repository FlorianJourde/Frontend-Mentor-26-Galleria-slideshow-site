'use client'

import React from 'react'
import artworks from "@/data/data.json";
import Link from "next/link";
import convertToSlug from '@/utils/convertToSlug'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image';

export default function Portfolio() {
  return (
    <>
      <div className="wrapper">

        <ul className="masonry-portfolio py-24 pb-0 sm:py-40 sm:pb-8 columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-10">
          {artworks.map((artwork, index) => (

            <AnimatePresence mode='wait'>
              <motion.li
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -10, opacity: 0 }}
                transition={{ delay: index * .1, duration: .8 }}
                key={artwork.name}
                className="artwork relative mb-5 sm:mb-10 z-0 overflow-hidden"
              >
                <Link className="flex flex-col p-5 justify-end absolute bottom-0 text-white h-full w-full before:content-[''] before:top-0 before:absolute before:left-0 before:w-full before:h-full before:bg-[linear-gradient(360deg,_black,_transparent_50%)] before:z-0 [&>*]:z-10 before:pointer-events-none [&:hover+img]:blur" href={{
                  pathname: `/artworks/${convertToSlug(artwork.name)}`,
                }}>
                  <p className={`text-2xl font-bold font-libre-baskerville`}>{artwork.name}</p>
                  <p className={`text-sm opacity-50 font-libre-baskerville`}>{artwork.artist.name}</p>
                </Link>
                <Image height={0} width={0} sizes="100vw" className='relative w-full h-auto -z-10 transition-all duration-700' alt='' src={artwork.images.gallery} />
              </motion.li>
            </AnimatePresence>

          ))}
        </ul>

      </div>
    </>
  )
}
