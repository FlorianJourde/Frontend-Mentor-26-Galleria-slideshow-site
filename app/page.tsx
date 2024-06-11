import Artworks from "@/data/data.json";
import Link from "next/link";
import convertToSlug from '@/utils/convertToSlug'

export default function Home() {

  return (
    <main className="p-5">
      <ul className="masonry-portfolio gap-5">
        {Artworks.map((artwork, index) => (
          <li className="artwork relative">
            <Link key={index} className="flex flex-col p-5 justify-end absolute bottom-0 text-white h-full w-full" href={{
              pathname: `/artworks/${convertToSlug(artwork.name)}`,
              query: {id: index},
            }}>
              <p>{artwork.name}</p>
              <p>{artwork.artist.name}</p>
            </Link>
            <img className="h-full w-full" src={artwork.images.thumbnail} alt="" />
          </li>
        ))}
      </ul>
    </main >
  );
}
