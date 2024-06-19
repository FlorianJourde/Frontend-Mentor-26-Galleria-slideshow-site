'use client'

import { PageIdContext } from '@/contexts/PageIdContext';
import Link from 'next/link'
import Logo from '/public/assets/shared/logo.svg'
import artworks from "@/data/data.json";
import React, { useContext, useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation';
import convertToSlug from '@/utils/convertToSlug';
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [slideshow, setSlideshow] = useState<boolean>(false)
  // const slug = useContext(PageIdContext);
  const slug = useContext(PageIdContext);
  const pageId = artworks.findIndex(artwork => convertToSlug(artwork.name) === slug);
  const router = useRouter()
  const pathname = usePathname()
  let currentPageId: number

  function toggleSlideshow() {
    if (slideshow === false) {
      setSlideshow(true)
      if (!pathname?.startsWith('/artworks')) {
        router.push(`/artworks/${convertToSlug(artworks[0].name)}`)
      }
    } else {
      setSlideshow(false)
    }
  }

  useEffect(() => {
    if (typeof pageId === 'number' && pageId >= 0) {
      // if (typeof pageId === 'number' && !Number.isNaN(pageId)) {
      currentPageId = pageId
    } else {
      currentPageId = 0
    }

    if (slideshow === true) {
      const updatePage = setInterval(() => {
        if (artworks.length - 1 === currentPageId) {
          // router.push(`/artworks/${convertToSlug(artworks[0].name)}?id=0`)
          router.push(`/artworks/${convertToSlug(artworks[0].name)}`)
        } else {
          // router.push(`/artworks/${convertToSlug(artworks[currentPageId + 1].name)}?id=${currentPageId + 1}`)
          router.push(`/artworks/${convertToSlug(artworks[currentPageId + 1].name)}`)
          // router.push(`/artworks/${convertToSlug(artworks[currentPageId + 1].name)}`)
        }
      }, 1000 * 5)

      return () => clearInterval(updatePage);
    }

  }, [slideshow, pathname, slug])

  return (
    <header className="flex py-5 sm:py-8 bg-white justify-between items-center border-b-2 fixed top-0 left-0 w-full z-20 flex-wrap gap-4">
      <div className="wrapper">

        <AnimatePresence>
          <motion.div
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -10, opacity: 0 }}
            transition={{ duration: .8 }}
            className="logo-container">
            <Link href="/">
              <Logo onClick={() => slideshow === true && toggleSlideshow()} className="w-32 sm:w-44" />
            </Link>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          <motion.button
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: .5 }}
            exit={{ x: 10, opacity: 0 }}
            transition={{ delay: .4, duration: .8 }}
            onClick={() => toggleSlideshow()} className={`uppercase opacity-50 font-bold tracking-widest text-xs font-libre-baskerville`}>{slideshow === false ? 'Start' : 'Stop'} Slideshow
          </motion.button>
        </AnimatePresence>

      </div>
    </header>
  )
}
