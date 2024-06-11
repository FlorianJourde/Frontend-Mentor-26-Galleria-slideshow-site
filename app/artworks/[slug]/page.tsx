'use client'

import React from 'react'
import artworks from "@/data/data.json";
import { useSearchParams } from 'next/navigation'
import resolveImagePath from '@/utils/resolveImagePath';

export default function artwork() {
  const searchParams = useSearchParams()
  let id: string = '0'

  if (searchParams !== null) {
    id = searchParams.get('id')!
  }

  const artwork = artworks[parseInt(id)]
  const heroImagePath = resolveImagePath(artwork.images.thumbnail);
  const artistImagePath = resolveImagePath(artwork.artist.image);

  return (
    <div>
      <h1>Artwork</h1>
      <div className='p-5 flex gap-5' key={artwork.name}>
        <div className='flex flex-col justify-between'>
          <div className='flex'>
            <div className='-mr-5'>
              <h1>{artwork.name}</h1>
              <h2>{artwork.name}</h2>
            </div>
          </div>
          <img src={heroImagePath} alt="" />
          <img src={artistImagePath} alt="" />
        </div>
      </div>
    </div>

  )
}
