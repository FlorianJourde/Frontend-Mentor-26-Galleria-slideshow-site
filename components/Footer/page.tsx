'use client'

import React, { useState } from 'react'
import BackButtonLogo from '@/public/assets/shared/icon-back-button.svg'
import NextButtonLogo from '@/public/assets/shared/icon-next-button.svg'
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import artworks from "@/data/data.json";
import Link from 'next/link'
import convertToSlug from '@/utils/convertToSlug'

export default function Footer() {
  const [artworkPage, setArtworkPage] = useState<number>()
  const searchParams = useSearchParams()
  const pathname = usePathname();

  useEffect(() => {
    if (searchParams !== null) {
      const currentId = searchParams.get("id");

      if (typeof currentId === 'string') {
        setArtworkPage(parseInt(currentId))
      } else {
        setArtworkPage(undefined)
      }
    }
  }, [searchParams])

  function getPreviousArtwork() {
    if (artworkPage !== undefined) {
      const previousArtwork = artworkPage - 1

      if (artworkPage > 0) {
        return (
          <Link
            href={{
              pathname: `/artworks/${convertToSlug(artworks[previousArtwork].name)}`,
              query: { id: artworkPage - 1 },
            }}>
            <BackButtonLogo />
          </Link>
        )
      } else {
        return (
          <Link href='#'>
            <BackButtonLogo className='opacity-10' />
          </Link>
        )
      }
    }
  }

  function getNextArtwork() {
    if (artworkPage !== undefined) {
      const nextArtwork = artworkPage + 1

      if (artworkPage < (artworks.length - 1)) {
        return (
          <Link
            href={{
              pathname: `/artworks/${convertToSlug(artworks[nextArtwork].name)}`,
              query: { id: artworkPage + 1 },
            }}>
            <NextButtonLogo />
          </Link>
        )
      } else {
        return (
          <Link href='#'>
            <NextButtonLogo className='opacity-10' />
          </Link>
        )
      }
    }
  }

  function progressBar() {
    if (artworkPage !== undefined) {
      let progressBarWidth = (100 / 15) * (artworkPage + 1);

      return (
        <div className="progressbar w-1/2 transition-all h-[2px] bg-black -top-[2px] absolute" style={{ width: progressBarWidth + "%" }}></div>
      )
    }
  }

  // if (pathname !== null && pathname.startsWith("/artworks")) {
    return (
      <footer className='fixed w-full bg-white bottom-0 flex py-8 justify-between items-center border-t-2'>

        {progressBar()}

        <div className="wrapper">

          <div className='flex justify-between items-center gap-10 w-full'>
            <div className="title flex flex-col gap-2">
              <h2 className='font-bold tracking-widest text-xl font-libre-baskerville'>
                {artworkPage !== undefined && artworks[artworkPage].name}
              </h2>
              <h3 className='opacity-50 font-bold tracking-widest text-sm font-libre-baskerville'>
                {artworkPage !== undefined && artworks[artworkPage].artist.name}
              </h3>
            </div>

            {artworkPage !== undefined &&
              <div className='buttons-container flex gap-12'>

                {getPreviousArtwork()}
                {getNextArtwork()}

              </div>
            }

          </div>
        </div>
      </footer>
    )
  // }
}
