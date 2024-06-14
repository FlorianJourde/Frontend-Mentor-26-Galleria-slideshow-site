import React from 'react'
import Artworks from "@/data/data.json";
import Link from "next/link";
import convertToSlug from '@/utils/convertToSlug'
import { Libre_Baskerville } from "next/font/google";

export default function Portfolio() {

  return (
    <ul className="masonry-portfolio py-40">
      {Artworks.map((artwork, index) => (
        <li className="artwork relative">
          <Link key={index} className="flex flex-col p-5 justify-end absolute bottom-0 text-white h-full w-full before:content-[''] before:top-0 before:absolute before:left-0 before:w-full before:h-full before:bg-[linear-gradient(360deg,_black,_transparent_50%)] before:z-0 [&>*]:z-10" href={{
            pathname: `/artworks/${convertToSlug(artwork.name)}`,
            query: { id: index },
          }}>
            <p className={`text-lg font-libre-baskerville`}>{artwork.name}</p>
            <p className={`text-xs opacity-50 font-libre-baskerville`}>{artwork.artist.name}</p>
          </Link>
          <img className="h-full w-full" src={artwork.images.thumbnail} alt="" />
        </li>
      ))}
    </ul>
  )
}
