'use client'

import { motion } from 'framer-motion'

const variantStyles = {
  primary: 'bg-coral text-surface hover:bg-[#b5421f]',
  ghost: 'border border-ink text-ink hover:bg-ink hover:text-surface',
  'ghost-light': 'border border-surface/40 text-surface hover:border-surface hover:text-surface/90',
}

export function Button({ children, variant = 'primary', href, className = '', ...props }) {
  const base =
    'inline-flex items-center gap-2 px-6 py-3 font-sans text-sm font-medium tracking-wide transition-colors duration-150 cursor-pointer whitespace-nowrap'
  const styles = `${base} ${variantStyles[variant] ?? variantStyles.primary} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        className={styles}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.1 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      className={styles}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.1 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}
