import React from 'react'
import Artwork from '@/components/Artwork/page';
import artworks from "@/data/data.json";
import convertToSlug from '@/utils/convertToSlug';
import { Suspense } from 'react';
import { promises as fs } from 'fs';

export async function generateStaticParams() {
  const artworkSlugs = [
    'starry-night',
    'girl-with-a-pearl-earring',
    'guernica',
    'penitent-magdalene',
    'the-storm-on-the-sea-of-galilee',
    'the-great-wave-off-kanagawa',
    'van-gogh-self-portrait',
    'the-sleeping-gypsy',
    'lady-with-an-ermine',
    'the-night-cafe',
    'the-basket-of-apples',
    'the-boy-in-the-red-vest',
    'arnolfini-portrait',
    'mona-lisa',
    'the-swing',
  ]

  return artworkSlugs.map((slug) => {
    return slug
  })

  // const file = await fs.readFile(process.cwd() + './data/data.json', 'utf8');
  // const data = JSON.parse(file);

  // slug: convertToSlug(artwork.name)
  // slug
  // slug: `/artworks/${slug}`
  // slug: `/artworks/${slug}`
  // index
  // return {
  // params: { slug, index }
  // slug, index
  // artwork, index
  // query: { id: index }
  // slug: artwork.name,
  // slug: `/artworks/${convertToSlug(artwork.name)}?id=${index}`,
  // }
}

export default function artwork({ params }: { params: any }) {
  // const artworks = await fetchArtworksBySlug(params.slug)
  // const artworks = await generateStaticParams(params.slug)

  return (
    <div>
      {/* {() => generateStaticParams()} */}
      {/* <Suspense> */}
      <Artwork params={params} />
      {/* </Suspense> */}
    </div>
  )
}
