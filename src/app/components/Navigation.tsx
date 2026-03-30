'use client'

import { AnimatePresence } from 'motion/react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { ComponentType, JSX } from 'react'

import { useNavStore } from '@/stores/nav'

import { BubbleChatIcon } from '../icons/BubbleChat'
import { BubbleChatQuestionIcon } from '../icons/BubbleChatQuestion'
import { CancelIcon } from '../icons/Cancel'
import { IdeaIcon } from '../icons/Idea'
import { MailAtSign } from '../icons/MailAtSign'
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

export const Navigation = () => {
  const { isOpen } = useNavStore()

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-100 flex w-full flex-col justify-between gap-4 rounded-none bg-white p-6 sm:absolute sm:inset-auto sm:top-0 sm:right-6 sm:bottom-0 sm:m-6 sm:w-md sm:rounded-2xl sm:p-10"
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <NavigationHeader />
          <nav className="flex flex-col border-t border-dashed border-gray-300">
            {navLinks.map(({ href, Icon, id, Label }, index) => (
              <NavigationLinks
                key={id}
                href={href}
                Icon={Icon}
                id={id}
                Label={Label}
                order={index}
              />
            ))}
          </nav>
          <NavigationFooter />
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

const NavigationHeader = () => {
  const { toggle } = useNavStore()

  return (
    <div className="flex items-center justify-between">
      <motion.h1
        initial={{ opacity: 0, x: 400 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="text-primary font-sans text-xl font-medium"
      >
        ThinqBridge
      </motion.h1>
      <button onClick={toggle} className="group cursor-pointer">
        <CancelIcon className="group-hover:text-primary size-10 text-black transition-all duration-300 group-hover:scale-120" />
      </button>
    </div>
  )
}

const NavigationLinks = ({
  href,
  Icon,
  id,
  Label,
  order
}: NavLink & { order: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.08 + order * 0.2, duration: 0.5, ease: 'easeOut' }}
  >
    <Link
      key={id}
      href={href}
      className="group flex flex-row items-center gap-5 border-b border-dashed border-gray-300 py-7 text-lg text-gray-700 hover:text-gray-900"
    >
      <Icon className="group-hover:text-primary size-8 transition-all duration-300 group-hover:scale-120" />
      <Label className="font-display group-hover:text-gray text-3xl transition-all duration-300" />
    </Link>
  </motion.div>
)

const NavigationFooter = () => (
  <motion.div
    initial={{ opacity: 0, x: 400 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
  >
    <Link
      href="#"
      className="group inline-flex items-center gap-3 text-gray-500 hover:text-gray-700"
    >
      <MailAtSign className="group-hover:text-primary size-5 transition-all duration-300 group-hover:scale-120" />
      <span className="transition-all duration-300 group-hover:text-gray-700">
        hello@thinqbridge.com
      </span>
    </Link>
  </motion.div>
)
