'use client'

import { motion, type HTMLMotionProps } from 'motion/react'

type GradientBackgroundProps = HTMLMotionProps<'div'>

export const GradientBackground = ({
  className,
  transition = { duration: 15, ease: 'easeInOut', repeat: Infinity },
  ...props
}: GradientBackgroundProps) => {
  return (
    <motion.div
      data-slot="gradient-background"
      className={
        'from-primary via-background-dark to-secondary size-full bg-linear-to-br bg-size-[400%_400%]' +
        (className ? ` ${className}` : '')
      }
      animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
      transition={transition}
      {...props}
    />
  )
}
