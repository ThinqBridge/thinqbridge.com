'use client'

import { motion } from 'motion/react'

import { GradientBackground } from '@/app/elements/GradientBackground'

export const Hero = () => {
  return (
    <section className="relative flex h-screen w-screen flex-col items-start justify-end overflow-hidden">
      <GradientBackground className="absolute inset-0" />
      <div
        className="bg-background-dark/45 absolute inset-0"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl p-10">
        <motion.div
          className="bg-primary mb-8 h-px w-12"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          style={{ originX: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
        <motion.h1
          className="font-display text-4xl leading-[1.2] font-bold text-white md:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
        >
          ThinqBridge was built on a simple belief:{' '}
          <span className="text-primary">
            good ideas should not be lost in complexity.
          </span>
        </motion.h1>
        <motion.h2
          className="text-secondary mt-6 text-xl leading-loose font-normal"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
        >
          We help businesses turn complexity into clarity and ideas into working
          systems. Through structured thinking, modern technology, and practical
          execution, we build the tools, workflows, and platforms that help
          organisations move forward with more confidence.
        </motion.h2>
      </div>
    </section>
  )
}
