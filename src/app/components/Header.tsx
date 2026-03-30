'use client'

import Image from 'next/image'
import Link from 'next/link'

import { useNavStore } from '@/stores/nav'

import { BubbleChatIcon } from '../icons/BubbleChat'
import { MenuSquareIcon } from '../icons/MenuSquare'

export const Header = () => (
  <header className="absolute top-0 right-0 left-0 z-50 flex items-center justify-between px-10 py-6">
    <Image
      src="/thinqbridge-logo.svg"
      alt="ThinqBridge logo"
      width={75}
      height={75}
      loading="eager"
      className="w-12 sm:w-16 md:w-18.75"
      style={{ height: 'auto' }}
    />
    <div className="inline-flex items-center gap-6 md:gap-10">
      <LetsTalkButton />
      <NavButton />
    </div>
  </header>
)

const LetsTalkButton = () => (
  <Link
    href="#"
    className="group border-primary hover:bg-primary flex items-center gap-2 rounded-full border-2 px-3 py-2 font-medium text-white transition-all duration-300 sm:gap-3 sm:px-5 sm:py-2.5 md:px-6 md:py-3"
  >
    <BubbleChatIcon className="text-primary size-5 group-hover:text-white sm:size-6" />
    <span className="text-base font-semibold text-white sm:inline md:text-xl">
      Let&apos;s Talk
    </span>
  </Link>
)

const NavButton = () => {
  const { toggle } = useNavStore()
  return (
    <button className="group" onClick={toggle}>
      <MenuSquareIcon className="text-primary size-6 cursor-pointer transition-all duration-300 group-hover:scale-120" />
    </button>
  )
}
