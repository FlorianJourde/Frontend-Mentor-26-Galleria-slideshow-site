'use client'

import { PageIdContext } from '@/contexts/PageIdContext';
import Link from 'next/link'
import Logo from '/public/assets/shared/logo.svg'
import artworks from "@/data/data.json";
import React, { useContext, useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation';
import convertToSlug from '@/utils/convertToSlug';

export default function Header() {
  const [slideshow, setSlideshow] = useState<boolean>(false)
  const pageId = useContext(PageIdContext);
  const router = useRouter()
  const pathname = usePathname()
  let currentPageId: number

  function toggleSlideshow() {
    if (slideshow === false) {
      setSlideshow(true)
    } else {
      setSlideshow(false)
    }
    console.log(slideshow);
  }

  if (typeof pageId === 'number' && !Number.isNaN(pageId)) {
    currentPageId = pageId
  } else {
    currentPageId = 0
  }

  useEffect(() => {
    if (!pathname?.startsWith('/artworks')) {
      setSlideshow(false)
      return
    }

    if (slideshow === true) {
      const updatePage = setInterval(() => {
        if (artworks.length - 1 === currentPageId) {
          console.log(artworks.length - 1);
          console.log(currentPageId);
          router.push(`/artworks/${convertToSlug(artworks[0].name)}?id=0`)
        } else {
          router.push(`/artworks/${convertToSlug(artworks[currentPageId + 1].name)}?id=${currentPageId + 1}`)
        }
      }, 1000 * 5)

      return () => clearInterval(updatePage);
    }

  }, [slideshow, pathname, pageId])

  return (
    <header className="flex py-8 bg-white justify-between items-center border-b-2 fixed top-0 left-0 w-full z-10">
      <div className="wrapper">
        <Link href="/">
          <Logo />
        </Link>
        <button onClick={() => toggleSlideshow()} className={`uppercase opacity-50 font-bold tracking-widest text-xs font-libre-baskerville`}>{slideshow === false ? 'Start' : 'Stop'} Slideshow</button>
      </div>
    </header>
  )
}
