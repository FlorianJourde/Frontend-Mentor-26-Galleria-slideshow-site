'use client'

import { PageIdContext } from '@/contexts/PageIdContext'
import artworks from "@/data/data.json";
import getNextArtwork from '@/components/Footer/getNextArtwork';
import getPreviousArtwork from '@/components/Footer/getPreviousArtwork';
import React, { useContext } from 'react'

export default function Footer() {
  const pageId = useContext(PageIdContext);
  let currentPageId: number = 0

  if (typeof pageId === 'number' && !Number.isNaN(pageId)) {
    currentPageId = pageId
  } else {
    currentPageId = 0
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
    <footer className='fixed w-full bg-white bottom-0 flex py-5 lg:py-8 justify-between items-center border-t-2'>

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

              {getPreviousArtwork(currentPageId, artworks)}
              {getNextArtwork(currentPageId, artworks)}

            </div>
          }

        </div>
      </div>
    </footer>
  )
}
