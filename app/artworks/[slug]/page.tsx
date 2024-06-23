import React from 'react'
import Artwork from '@/components/Artwork/page';
import artworks from "@/data/data.json";
import convertToSlug from '@/utils/convertToSlug';

export function generateStaticParams() {
  return artworks.map((artwork) => {
    return { slug: convertToSlug(artwork.name) }
  })
}

export default function Page() {

  const variants = {
    hidden: { scaleX: 0, scaleY: 0 },
    enter: { scaleX: 1, scaleY: 1 },
  }

  return (
    <>
      <Artwork />
    </>
  )
}
