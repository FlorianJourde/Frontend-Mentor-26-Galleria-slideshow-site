import React, { Dispatch, SetStateAction, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Lightbox({ heroImagePath, lightbox, setLightbox }: { heroImagePath: string, lightbox: boolean, setLightbox: Dispatch<SetStateAction<boolean>> }) {
  // console.log(heroImagePath);
  // console.log(lightbox);
  // console.log(setLightbox);

  useEffect(() => {
    // console.log(lightbox);
  }, [lightbox])


  return (
    <div className={`lightbox z-20 fixed top-0 left-0 w-full h-full bg-[hsl(0deg_0%_0%_/_90%)] transition-opacity duration-500 ${lightbox === true ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}>

      <div className='image-container absolute w-[800px] max-w-full max-h-svh top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col gap-5 items-end p-5 sm:p-10'>
        <button onClick={() => setLightbox(lightbox => !lightbox)} className='text-white uppercase font-bold tracking-widest text-xs'>Close</button>

        <img src={`..${heroImagePath}`} className='w-full h-full object-contain max-h-[calc(100vh-200px)]' alt="" />

      </div>
    </div>
  )
}
