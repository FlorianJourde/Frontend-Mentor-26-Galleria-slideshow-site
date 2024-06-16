'use client'

import React from 'react'
// import Logo from '/public/assets/shared/logo.svg'
import Logo from '/public/assets/shared/logo.svg'
import Link from 'next/link'
import { Libre_Baskerville } from "next/font/google";
import { useSearchParams } from 'next/navigation';

// const libreBaskerville = Libre_Baskerville({ subsets: ["latin"], weight: ['400', '700'] });

export default function Header() {
  const searchParams = useSearchParams()
  let id: number = 0

  // if (searchParams !== null) {
  if (searchParams !== null) {
    // id = searchParams.get('id')
    id = parseInt(searchParams.get('id')!)
  }

  // console.log(id)

  return (
    <header className="flex py-8 bg-white justify-between items-center border-b-2 fixed top-0 left-0 w-full z-10">
      <div className="wrapper">
        <Link href="/">
          <Logo />
        </Link>
        <div className={`uppercase opacity-50 font-bold tracking-widest text-xs font-libre-baskerville`}>Start Slideshow</div>
      </div>
    </header>
  )
}
