import React, { useContext, useEffect } from 'react'
import artworks from "@/data/data.json";
import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation'
import resolveImagePath from '@/utils/resolveImagePath';
import Footer from '../Footer/page';
import { AnimatePresence } from 'framer-motion';
// import { usePageId } from '@/contexts/PageIdContext';
// import { PageIdProvider } from '@/contexts/PageIdContext';
import { PageIdContext } from '@/contexts/PageIdContext'
// import { useRouter } from 'next/router';

// import { PageIdProvider, usePageId } from "@/contexts/PageIdContext";

export default function Artwork() {
  const pageId = useContext(PageIdContext);
  const router = useRouter()
  const pathname = usePathname()
  let id: number
  // const { pageId } = usePageId()


  // const user = useContext(pageId);


  // const test: any = useContext({pageId})
  // if (searchParams !== null) {
  // id = searchParams.get('id')

  // if (searchParams !== null) {
  //   id = parseInt(searchParams.get('id')!)
  // }

  // console.log(pageId);

  // useEffect(() => {

  // if (typeof pageId === 'number') {
  // const currentId = searchParams.get("id");

  if (typeof pageId === 'number' && !Number.isNaN(pageId)) {
    console.log(pageId);
    // if (typeof pageId !== 'number') {
    // setArtworkPage(parseInt(currentId))
    id = pageId
  } else {
    // setArtworkPage(undefined)
    id = 0
  }
  // }
  // }, [router, id])

  // const artwork = artworks[id]
  // const heroImagePath = resolveImagePath(artworks[id].images.thumbnail);
  // const artistImagePath = resolveImagePath(artworks[id].artist.image);

  const artwork = artworks[id]
  const heroImagePath = resolveImagePath(artworks[id].images.thumbnail);
  const artistImagePath = resolveImagePath(artworks[id].artist.image);



  // const [artworkPage, setArtworkPage] = useState<number>()
  // const searchParams = useSearchParams()
  // const pathname = usePathname();
  // const params = useParams()
  // const search = searchParams.get('search')
  // console.log(searchParams.get('id'));
  // console.log(params);
  // console.log(heroImagePath);
  // console.log(artistImagePath);
  // console.log(id);
  // console.log(artwork);


  return (
    <div>
      <div className="wrapper">

        <div className="artwork flex py-40 pb-60 font-libre-baskerville">
          <div className='grid grid-cols-3 gap-20'>
            <div className='image-showing col-span-2 grid grid-cols-3 grid-rows-[repeat(2,_minmax(0,_auto))]'>
              <img className='w-full h-full max-h-[800px] object-cover col-span-2 row-span-2' src={heroImagePath} alt="" />
              <div className="image-title self-start p-16 pt-0 -ml-28 bg-white">
                <h1 className='text-5xl break-words font-bold'>{artwork.name}</h1>
                <h2 className='pt-10 opacity-50'>{artwork.artist.name}</h2>
              </div>
              <img className='self-end justify-self-start p-10 -mb-24' src={artistImagePath} alt="" />
            </div>
            <div className="details flex flex-col self-center relative mt-40">
              <div className="date text-[200px] font-bold opacity-5 absolute right-0 left-auto -translate-y-2/3 translate-x-1/4">{artwork.year}</div>
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
