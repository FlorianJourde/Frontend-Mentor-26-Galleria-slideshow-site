'use client'

import React from 'react'
import artworks from "@/data/data.json";
import Link from "next/link";
import convertToSlug from '@/utils/convertToSlug'

export default function Portfolio() {

  return (
    <div className="wrapper">

      <ul className="masonry-portfolio py-24 pb-0 sm:py-40 sm:pb-8 columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-10">
        {artworks.map((artwork, index) => (
          <li className="artwork relative mb-5 sm:mb-10">
            <Link key={index} className="flex flex-col p-5 justify-end absolute bottom-0 text-white h-full w-full before:content-[''] before:top-0 before:absolute before:left-0 before:w-full before:h-full before:bg-[linear-gradient(360deg,_black,_transparent_50%)] before:z-0 [&>*]:z-10" href={{
              pathname: `/artworks/${convertToSlug(artwork.name)}`,
              query: { id: index },
            }}>
              <p className={`text-2xl font-bold font-libre-baskerville`}>{artwork.name}</p>
              <p className={`text-sm opacity-50 font-libre-baskerville`}>{artwork.artist.name}</p>
            </Link>
            <img className="h-full w-full" src={artwork.images.thumbnail} alt="" />
          </li>
        ))}
      </ul>

    </div>

  )
}
