import convertToSlug from "@/utils/convertToSlug"
import NextButtonLogo from '@/public/assets/shared/icon-next-button.svg'
import Link from 'next/link'

export default function getNextArtwork(currentPageId: any, artworks: Array<any>) {
  if (currentPageId !== undefined) {
    const nextArtwork = currentPageId + 1
    const firstArtwork = 0

    if (currentPageId < (artworks.length - 1)) {
      return (
        <Link
          href={{
            pathname: `/artworks/${convertToSlug(artworks[nextArtwork].name)}`,
          }}>
          {/* <NextButtonLogo className="w-5 md:w-7" /> */}

          {getNextButton()}
        </Link>
      )
    } else {
      return (
        <Link
          href={{
            pathname: `/artworks/${convertToSlug(artworks[firstArtwork].name)}`,
          }}>
          {/* <NextButtonLogo className="w-5 md:w-7" /> */}

          {getNextButton()}
        </Link>
      )
    }
  }
}

export function getNextButton() {
  return <NextButtonLogo className="w-5 sm:w-7" />
}