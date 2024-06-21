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
          }}>
          {/* <BackButtonLogo className="w-5 sm:w-7" /> */}

          {getBackButton()}

        </Link>
      )
    } else {
      return (
        <Link
          href={{
            pathname: `/artworks/${convertToSlug(artworks[lastArtwork].name)}`,
          }}>

          {/* {backButton()} */}
          {getBackButton()}

        </Link>
      )
    }
  }
}

export function getBackButton() {
  return <BackButtonLogo className="w-5 sm:w-7" />
}