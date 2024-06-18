import convertToSlug from "@/utils/convertToSlug"
import BackButtonLogo from '@/public/assets/shared/icon-back-button.svg'
import Link from 'next/link'

export default function getPreviousArtwork(currentPageId: any, artworks: Array<any>) {
  if (currentPageId !== undefined) {
    const previousArtwork = currentPageId - 1
    const lastArtwork = artworks.length - 1

    if (currentPageId > 0) {
      return (
        <Link
          href={{
            pathname: `/artworks/${convertToSlug(artworks[previousArtwork].name)}`,
            query: { id: currentPageId - 1 },
          }}>
          <BackButtonLogo />
        </Link>
      )
    } else {
      return (
        <Link
          href={{
            pathname: `/artworks/${convertToSlug(artworks[lastArtwork].name)}`,
            query: { id: lastArtwork },
          }}>
          <BackButtonLogo />
        </Link>
      )
    }
  }
}