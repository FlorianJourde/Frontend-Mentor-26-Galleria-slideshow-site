import React from 'react'
import Artwork from '@/components/Artwork/page';
import { AnimatePresence, motion } from 'framer-motion';

export function generateStaticParams() {
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
        <motion.div
          variants={variants}
          initial="hidden"
          exit="hidden"
          animate="enter"
          key={'artwork'}> */}
      {/* {children} */}

      <Artwork />
      {/* </motion.div> */}
      {/* </AnimatePresence> */}
    </>

    // </div>
  )
}
