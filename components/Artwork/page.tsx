import React, { useContext } from 'react'
import artworks from "@/data/data.json";
import resolveImagePath from '@/utils/resolveImagePath';
import Footer from '../Footer/page';
import { PageIdContext } from '@/contexts/PageIdContext'

export default function Artwork() {
  const pageId = useContext(PageIdContext);
  let currentPageId: number

  if (typeof pageId === 'number' && !Number.isNaN(pageId)) {
    currentPageId = pageId
  } else {
    currentPageId = 0
  }

  const artwork = artworks[currentPageId]
  const heroImagePath = resolveImagePath(artworks[currentPageId].images.thumbnail);
  const artistImagePath = resolveImagePath(artworks[currentPageId].artist.image);

  return (
    <div className='overflow-x-hidden'>
      <div className="wrapper">
        <div className="artwork flex py-24 pb-40 sm:py-40 lg:pb-60 font-libre-baskerville">
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20 md:gap-40 xl:gap-20'>
            <div className='image-showing md:col-span-2 grid md:grid-cols-3 md:grid-rows-[minmax(0,_auto)_minmax(0,_1fr)] xl:grid-rows-[repeat(2,_minmax(0,_auto))]'>
              <img className='w-full h-full max-h-[600px] lg:max-h-[800px] object-cover md:col-span-2 md:row-span-2 max-w-full' src={heroImagePath} alt="" />
              <div className="image-title self-start p-5 sm:p-12 md:p-16 md:pr-0 md:pt-0 mr-12 xs:mr-24 sm:mr-32 md:mr-0 -mt-24 md:-mt-0 md:-ml-40 xl:-ml-28 bg-white">
                <h1 className='text-2xl sm:text-4xl md:text-6xl break-words font-bold'>{artwork.name}</h1>
                <h2 className='pt-3 xl:pt-10 opacity-50'>{artwork.artist.name}</h2>
              </div>
              <img className='md:self-start xl:self-end justify-self-start pt-8 md:pt-0 md:p-10 xl:-mb-24 max-w-20 md:max-w-full' src={artistImagePath} alt="" />
            </div>
            <div className="details md:col-span-2 xl:col-auto flex flex-col self-center relative md:mx-24 xl:mx-auto xl:mt-40">
              <div className="date text-8xl md:text-[200px] font-bold opacity-5 absolute right-0 md:-left-24 md:right-auto xl:right-0 xl:left-auto -translate-y-2/3 l:translate-x-1/4">{artwork.year}</div>
              <p className='grow'>{artwork.description}</p>
              <a target="_blank" className='pt-20 uppercase opacity-50 font-bold tracking-widest text-xs underline' href={artwork.source}>Go to source</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
