'use client'

import React, { useContext } from 'react'
import BackButtonLogo from '@/public/assets/shared/icon-back-button.svg'
import NextButtonLogo from '@/public/assets/shared/icon-next-button.svg'
import artworks from "@/data/data.json";
import Link from 'next/link'
import convertToSlug from '@/utils/convertToSlug'
import { PageIdContext } from '@/contexts/PageIdContext'

export default function Footer() {
  const pageId = useContext(PageIdContext);
  let currentPageId: number = 0

  if (typeof pageId === 'number' && !Number.isNaN(pageId)) {
    currentPageId = pageId
  } else {
    currentPageId = 0
  }

  function getPreviousArtwork() {
    if (currentPageId !== undefined) {
      const previousArtwork = currentPageId - 1

      if (currentPageId > 0) {
        return (
          <Link
            href={{
              pathname: `/artworks/${convertToSlug(artworks[previousArtwork].name)}`,
              query: { id: currentPageId - 1 },
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
    if (currentPageId !== undefined) {
      const nextArtwork = currentPageId + 1

      if (currentPageId < (artworks.length - 1)) {
        return (
          <Link
            href={{
              pathname: `/artworks/${convertToSlug(artworks[nextArtwork].name)}`,
              query: { id: currentPageId + 1 },
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
    if (currentPageId !== undefined) {
      let progressBarWidth = (100 / 15) * (currentPageId + 1);

      return (
        <div className="progressbar w-1/2 transition-all h-[2px] bg-black -top-[2px] absolute" style={{ width: progressBarWidth + "%" }}></div>
      )
    }
  }

  return (
    <footer className='fixed w-full bg-white bottom-0 flex py-8 justify-between items-center border-t-2'>

      {progressBar()}

      <div className="wrapper">

        <div className='flex justify-between items-center gap-10 w-full'>
          <div className="title flex flex-col gap-2">
            <h2 className='font-bold tracking-widest text-xl font-libre-baskerville'>
              {currentPageId !== undefined && artworks[currentPageId].name}
            </h2>
            <h3 className='opacity-50 font-bold tracking-widest text-sm font-libre-baskerville'>
              {currentPageId !== undefined && artworks[currentPageId].artist.name}
            </h3>
          </div>

          {currentPageId !== undefined &&
            <div className='buttons-container flex gap-12'>

              {getPreviousArtwork()}
              {getNextArtwork()}

            </div>
          }

        </div>
      </div>
    </footer>
  )
}
