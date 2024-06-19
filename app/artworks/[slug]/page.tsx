import React from 'react'
import Artwork from '@/components/Artwork/page';

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

export default function Page() {
  return (
    <div>
      <Artwork />
    </div>
  )
}
