'use client'

import { motion } from 'framer-motion'
import { animation } from '@/lib/tokens'

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.16 },
  },
}

const rule = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export function SolutionBridge() {
  return (
    <section id="solution" className="bg-surface py-28 md:py-44">
      <div className="container-layout">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >

          {/* ── Denial statement ── */}
          <motion.p
            variants={animation.fadeUp}
            className="font-mono text-sm tracking-[0.08em] text-ink/35"
          >
            Le Fond is not a web agency.
          </motion.p>

          {/* ── Structural rule ── */}
          <motion.div
            variants={rule}
            className="mx-auto my-8 h-px w-10 origin-center bg-ink/12"
          />

          {/* ── Positioning statement ── */}
          <motion.p
            variants={animation.fadeUp}
            className="font-serif text-display-md text-ink"
          >
            We build operational infrastructure — the systems that capture,
            qualify, and convert leads while you&apos;re running a job.
          </motion.p>

        </motion.div>
      </div>
    </section>
  )
}
