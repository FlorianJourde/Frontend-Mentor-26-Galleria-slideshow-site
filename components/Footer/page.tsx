'use client'

import React, { useContext, useState } from 'react'
import BackButtonLogo from '@/public/assets/shared/icon-back-button.svg'
import NextButtonLogo from '@/public/assets/shared/icon-next-button.svg'
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import artworks from "@/data/data.json";
import Link from 'next/link'
import convertToSlug from '@/utils/convertToSlug'
import { PageIdContext } from '@/contexts/PageIdContext'

export default function Footer() {
  // const [artworkPage, setArtworkPage] = useState<number>()
  const searchParams = useSearchParams()
  const pathname = usePathname();


  const pageId = useContext(PageIdContext);
  let id: number

  // useEffect(() => {
  //   if (searchParams !== null) {
  //     const currentId = searchParams.get("id");

  //     if (typeof currentId === 'string') {
  //       setArtworkPage(parseInt(currentId))
  //     } else {
  //       setArtworkPage(undefined)
  //     }
  //   }
  // }, [searchParams])

  // if (searchParams !== null) {
  //   const currentId = searchParams.get("id");

  //   if (typeof currentId === 'string') {
  //     setArtworkPage(parseInt(currentId))
  //   } else {
  //     setArtworkPage(undefined)
  //   }
  // }

  if (typeof pageId === 'number' && !Number.isNaN(pageId)) {
    // if (typeof pageId !== 'number') {
    // setArtworkPage(parseInt(currentId))
    id = pageId
  } else {
    // setArtworkPage(undefined)
    id = 0
  }


  function getPreviousArtwork() {
    if (id !== undefined) {
      const previousArtwork = id - 1

      if (id > 0) {
        return (
          <Link
            href={{
              pathname: `/artworks/${convertToSlug(artworks[previousArtwork].name)}`,
              query: { id: id - 1 },
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
    if (id !== undefined) {
      const nextArtwork = id + 1

      if (id < (artworks.length - 1)) {
        return (
          <Link
            href={{
              pathname: `/artworks/${convertToSlug(artworks[nextArtwork].name)}`,
              query: { id: id + 1 },
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
    if (id !== undefined) {
      let progressBarWidth = (100 / 15) * (id + 1);

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
              {id !== undefined && artworks[id].name}
            </h2>
            <h3 className='opacity-50 font-bold tracking-widest text-sm font-libre-baskerville'>
              {id !== undefined && artworks[id].artist.name}
            </h3>
          </div>

          {id !== undefined &&
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
