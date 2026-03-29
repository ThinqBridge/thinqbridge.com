'use client'

import { AnimatePresence, motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { ComponentType, JSX } from 'react'

import { useNavStore } from '@/stores/nav'

import { BubbleChatIcon } from '../icons/BubbleChat'
import { BubbleChatQuestionIcon } from '../icons/BubbleChatQuestion'
import { CancelIcon } from '../icons/Cancel'
import { IdeaIcon } from '../icons/Idea'
import { MailAtSign } from '../icons/MailAtSign'
import { MenuSquareIcon } from '../icons/MenuSquare'
import { StartUpIcon } from '../icons/StartUp'
import { ToolsIcon } from '../icons/Tools'

type NavLink = {
  href: string
  id: string
  Icon: ComponentType<{ className?: string }>
  Label: (props: React.HTMLAttributes<HTMLSpanElement>) => JSX.Element
}

const navLinks: NavLink[] = [
  {
    href: '#we-are-thinqbridge',
    Icon: StartUpIcon,
    id: 'we-are-thinqbridge',
    Label: (props) => <span {...props}>Start</span>
  },
  {
    href: '#why-we-exist',
    Icon: BubbleChatQuestionIcon,
    id: 'why-we-exist',
    Label: (props) => <span {...props}>Why we exist</span>
  },
  {
    href: '#what-we-build',
    Icon: ToolsIcon,
    id: 'what-we-build',
    Label: (props) => <span {...props}>What we build</span>
  },
  {
    href: '#our-belief',
    Icon: IdeaIcon,
    id: 'our-belief',
    Label: (props) => <span {...props}>Our belief</span>
  },
  {
    href: '#lets-talk',
    Icon: BubbleChatIcon,
    id: 'lets-talk',
    Label: (props) => <span {...props}>Let&apos;s Talk</span>
  }
]

export const Header = () => (
  <header className="mb-10 flex items-center justify-between">
    <Image
      src="/thinqbridge-logo.svg"
      alt="ThinqBridge logo"
      width={75}
      height={75}
      loading="eager"
    />
    <div className="inline-flex items-center gap-4">
      <LetsTalkButton />
      <NavButton />
      <Navigation />
    </div>
  </header>
)

const LetsTalkButton = () => (
  <Link
    href="#"
    className="rounded-lg bg-white px-6 py-3 text-xl font-medium text-black"
  >
    <BubbleChatIcon className="-mt-1 mr-2 inline-block" />
    Let&apos;s Talk
  </Link>
)

const NavButton = () => {
  const { toggle } = useNavStore()
  return (
    <button
      className="rounded-lg bg-white px-6 py-3 text-xl font-medium text-black"
      onClick={toggle}
    >
      <MenuSquareIcon className="-mt-1 mr-2 inline-block" />
      Menu
    </button>
  )
}

const Navigation = () => {
  const { isOpen } = useNavStore()

  return (
    <AnimatePresence>
      {isOpen ? (
        <section className="absolute top-0 right-0 flex h-full w-full backdrop-blur-xs">
          <motion.div
            className="m-6 flex w-md flex-col justify-between gap-4 rounded-2xl bg-white p-10 shadow-md"
            initial={{ opacity: 0, x: -1100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <NavigationHeader />
            <nav className="flex flex-col border-t border-dashed border-gray-300">
              {navLinks.map(({ href, Icon, id, Label }) => (
                <NavigationLinks
                  key={id}
                  href={href}
                  Icon={Icon}
                  id={id}
                  Label={Label}
                />
              ))}
            </nav>
            <NavigationFooter />
          </motion.div>
        </section>
      ) : null}
    </AnimatePresence>
  )
}

const NavigationHeader = () => {
  const { toggle } = useNavStore()

  return (
    <div className="flex items-center justify-between">
      <h1 className="font-sans text-xl text-black">ThinqBridge</h1>
      <motion.button
        onClick={toggle}
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.2 }}
        className="cursor-pointer"
      >
        <CancelIcon className="size-10 text-black" />
      </motion.button>
    </div>
  )
}

const NavigationLinks = ({ href, Icon, id, Label }: NavLink) => (
  <Link
    key={id}
    href={href}
    className="flex flex-row items-center gap-5 border-b border-dashed border-gray-300 py-7 text-lg text-gray-700 hover:text-gray-900"
  >
    <Icon className="size-8" />
    <Label className="font-display text-3xl" />
  </Link>
)

const NavigationFooter = () => (
  <Link
    href="#"
    className="flex items-center gap-2 text-gray-500 hover:text-gray-700"
  >
    <MailAtSign className="size-5" />
    <span>hello@thinqbridge.com</span>
  </Link>
)
