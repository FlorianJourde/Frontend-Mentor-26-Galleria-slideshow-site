'use client'

import React from 'react'
// import Logo from '/public/assets/shared/logo.svg'
import Logo from '/public/assets/shared/logo.svg'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex p-5 bg-white justify-between items-center border-b-2">
      <Link href="/">
        <Logo />
      </Link>
      <div>Start Slideshow</div>
    </header>
  )
}
