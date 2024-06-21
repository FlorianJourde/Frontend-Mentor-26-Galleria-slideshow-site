// 'use client'

import React from 'react'
import Artwork from '@/components/Artwork/page';
import { AnimatePresence, motion } from 'framer-motion';
import artworks from "@/data/data.json";
import convertToSlug from '@/utils/convertToSlug';
// import Template from './template';


export function generateStaticParams() {


  return artworks.map((artwork) => {
    // console.log(artwork);
    // console.log(artwork.name);
    // slug: convertToSlug(artwork.name)
    return { slug: convertToSlug(artwork.name) }
  })

  return [
    { slug: 'starry-night' },
    { slug: 'girl-with-a-pearl-earring' },
    { slug: 'guernica' },
    { slug: 'penitent-magdalene' },
    { slug: 'the-storm-on-the-sea-of-galilee' },
    { slug: 'the-great-wave-off-kanagawa' },
    { slug: 'van-gogh-self-portrait' },
    { slug: 'the-sleeping-gypsy' },
    { slug: 'lady-with-an-ermine' },
    { slug: 'the-night-cafe' },
    { slug: 'the-basket-of-apples' },
    { slug: 'the-boy-in-the-red-vest' },
    { slug: 'arnolfini-portrait' },
    { slug: 'mona-lisa' },
    { slug: 'the-swing' },
  ]
}

// export function generateStaticParams() {
//   return [
//     { slug: 'starry-night' },
//     { slug: 'girl-with-a-pearl-earring' },
//     { slug: 'guernica' },
//     { slug: 'penitent-magdalene' },
//     { slug: 'the-storm-on-the-sea-of-galilee' },
//     { slug: 'the-great-wave-off-kanagawa' },
//     { slug: 'van-gogh-self-portrait' },
//     { slug: 'the-sleeping-gypsy' },
//     { slug: 'lady-with-an-ermine' },
//     { slug: 'the-night-cafe' },
//     { slug: 'the-basket-of-apples' },
//     { slug: 'the-boy-in-the-red-vest' },
//     { slug: 'arnolfini-portrait' },
//     { slug: 'mona-lisa' },
//     { slug: 'the-swing' },
//   ]
// }

export default function Page() {

  const variants = {
    hidden: { scaleX: 0, scaleY: 0 },
    enter: { scaleX: 1, scaleY: 1 },
    // hidden: { opacity: 0, x: 0, y: 0 },
    // enter: { opacity: 1, x: 0, y: 0 },
  }

  return (
    // <div>

    <>
      {/* <AnimatePresence mode='wait'>
        <motion.main
          variants={variants}
          initial="hidden"
          exit="hidden"
          animate="enter"
          key={'artwork'}> */}
      {/* {children} */}
      {/* <Template> */}

        <Artwork />
      {/* </Template> */}

      {/* </motion.main>
      </AnimatePresence> */}
    </>

    // </div>
  )
}
