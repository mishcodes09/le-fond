export const colors = {
  ink: '#0e0d0b',
  surface: '#f5f3ef',
  coral: '#c94f2c',
  teal: '#1a6b54',
  amber: '#b86e0b',
}

export const fonts = {
  serif: 'var(--font-dm-serif)',
  sans: 'var(--font-outfit)',
  mono: 'var(--font-dm-mono)',
}

export const spacing = {
  section: {
    sm: 'section-pad-sm',
    md: 'section-pad',
  },
  container: 'container-layout',
}

export const animation = {
  fadeUp: {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  },
  staggerContainer: {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08 },
    },
  },
}
