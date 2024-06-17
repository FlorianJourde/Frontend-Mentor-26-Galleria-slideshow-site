'use client'

import React, { useContext } from 'react'
import Logo from '/public/assets/shared/logo.svg'
import Link from 'next/link'
import { PageIdContext } from '@/contexts/PageIdContext';

export default function Header() {
  const pageId = useContext(PageIdContext);
  let currentPageId: number

  if (typeof pageId === 'number' && !Number.isNaN(pageId)) {
    currentPageId = pageId
  } else {
    currentPageId = 0
  }
  
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
