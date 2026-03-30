import type { Metadata } from 'next'

import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Playfair_Display, Source_Sans_3 } from 'next/font/google'

import './globals.css'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  weight: ['400', '500', '600', '700']
})

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans-pro',
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  authors: [{ name: 'ThinqBridge' }],
  description:
    'ThinqBridge helps businesses turn complexity into clarity through workflow automation, custom platforms, dashboards, web applications, and AI-enabled systems built for confident progress.',
  keywords: [
    'ThinqBridge',
    'business systems partner',
    'workflow automation',
    'business process automation',
    'custom platforms',
    'dashboards',
    'reporting systems',
    'custom web applications',
    'AI assistants',
    'AI agents',
    'operational systems'
  ],
  openGraph: {
    description:
      'We help businesses turn complexity into clarity and ideas into working systems through structured thinking, modern technology, and practical execution.',
    siteName: 'ThinqBridge',
    title: 'ThinqBridge | Turn Complexity into Clarity',
    type: 'website'
  },
  robots: {
    follow: true,
    index: true
  },
  title:
    'ThinqBridge | AI-Native Business Systems, Automation & Custom Platforms',
  twitter: {
    card: 'summary_large_image',
    description:
      'AI-native business systems, workflow automation, dashboards, custom applications, and practical execution for businesses ready to move forward.',
    title: 'ThinqBridge | Turn Complexity into Clarity'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${sourceSans3.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
