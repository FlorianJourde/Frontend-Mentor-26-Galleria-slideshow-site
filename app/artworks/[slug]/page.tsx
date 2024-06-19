import React from 'react'
import Artwork from '@/components/Artwork/page';
import artworks from "@/data/data.json";
import convertToSlug from '@/utils/convertToSlug';
import { Suspense } from 'react';
import { promises as fs } from 'fs';

// export const generateStaticParams = (): Params[] =>

export function generateStaticParams() {
  return [
    { slug: 'starry-night' },
    { slug: 'girl-with-a-pearl-earring' },
    { slug: 'guernica' },
    { slug: 'penitent-magdalene' },
    { slug: 'the-storm-on-the-sea-of-galilee' },
    { slug: 'the-great-wave-off-kanagawa' },
    { slug: 'van-gogh-self-portrait' },
    { slug: 'the-sleeping-gypsy' },
    { slug: 'lady-with-an-ermine' },
    { slug: 'the-night-cafe' },
    { slug: 'the-basket-of-apples' },
    { slug: 'the-boy-in-the-red-vest' },
    { slug: 'arnolfini-portrait' },
    { slug: 'mona-lisa' },
    { slug: 'the-swing' },
  ]
}

// export async function generateStaticParams() {
//   const artworkSlugs = [
//     'starry-night',
//     'girl-with-a-pearl-earring',
//     'guernica',
//     'penitent-magdalene',
//     'the-storm-on-the-sea-of-galilee',
//     'the-great-wave-off-kanagawa',
//     'van-gogh-self-portrait',
//     'the-sleeping-gypsy',
//     'lady-with-an-ermine',
//     'the-night-cafe',
//     'the-basket-of-apples',
//     'the-boy-in-the-red-vest',
//     'arnolfini-portrait',
//     'mona-lisa',
//     'the-swing',
//   ]

//   return artworkSlugs.map((slug) => {
//     return slug
//   })

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
// }

export const dynamicParams = false;

// export default function artwork({ params }: { params: any }) {
// export default function Page({ params }: { params: { slug: string } }) {
export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params
  // const artworks = await fetchArtworksBySlug(params.slug)
  // const artworks = await generateStaticParams(params.slug)

  return (
    <div>
      {/* {() => generateStaticParams()} */}
      {/* <Suspense> */}
      {/* <Artwork slug={slug} /> */}
      <Artwork slug={slug} />
      {/* </Suspense> */}
    </div>
  )
}
