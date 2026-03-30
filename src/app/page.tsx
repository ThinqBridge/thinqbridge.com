import { ReactLenis } from 'lenis/react'

import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Navigation } from './components/Navigation'

export default function Home() {
  return (
    <>
      <ReactLenis root />
      <Navigation />
      <Header />
      <Hero />
    </>
  )
}
