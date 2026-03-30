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
      height={'75'}
      loading="eager"
      style={{ height: 'auto' }}
    />
    <div className="inline-flex items-center gap-10">
      <LetsTalkButton />
      <NavButton />
    </div>
  </header>
)

const LetsTalkButton = () => (
  <Link
    href="#"
    className="group border-primary hover:bg-primary flex items-center gap-3 rounded-full border-2 px-6 py-3 text-sm font-medium text-white transition-all duration-300"
  >
    <BubbleChatIcon className="text-primary size-6 group-hover:text-white" />
    <span className="text-xl font-semibold text-white">Let&apos;s Talk</span>
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
