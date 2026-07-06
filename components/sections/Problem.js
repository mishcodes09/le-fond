'use client'

import { motion } from 'framer-motion'
import { Label } from '@/components/ui'
import { animation } from '@/lib/tokens'

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
}

const item = animation.fadeUp

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

const pains = [
  'Leads come in from WhatsApp, calls, and DMs — and go nowhere',
  'Quotes get lost in chat threads and never get followed up',
  'Follow-ups happen when you remember, not when they should',
  'You have no visibility of your pipeline or open jobs',
  'Every decision and every job depends on your availability',
]

export function Problem() {
  return (
    <section id="problem" className="bg-ink section-pad">
      <div className="container-layout">
        <motion.div
          className="mx-auto max-w-2xl"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >

          {/* ── Label ── */}
          <motion.div variants={item}>
            <Label light>The Current State</Label>
          </motion.div>

          {/* ── Headline ── */}
          <motion.h2
            variants={item}
            className="mt-8 font-serif text-display-lg text-surface"
          >
            Right now, your<br />business runs on you.
          </motion.h2>

          {/* ── Rule ── */}
          <motion.div
            variants={fadeIn}
            className="mt-12 h-px bg-surface/[0.08]"
          />

          {/* ── Pain items ── */}
          <div className="mt-10 flex flex-col gap-7">
            {pains.map((pain, i) => (
              <motion.div
                key={pain}
                variants={item}
                className="flex items-start gap-6"
              >
                <span className="font-mono text-[11px] tracking-[0.12em] text-surface/[0.22] shrink-0 mt-[5px] select-none whitespace-nowrap">
                  {String(i + 1).padStart(2, '0')} ──
                </span>
                <p className="font-sans text-[17px] leading-relaxed text-surface/70">
                  {pain}
                </p>
              </motion.div>
            ))}
          </div>

          {/* ── Rule ── */}
          <motion.div
            variants={fadeIn}
            className="mt-12 h-px bg-surface/[0.08]"
          />

          {/* ── Closing statement ── */}
          <motion.p
            variants={item}
            className="mt-10 font-sans text-xl leading-relaxed text-coral"
          >
            This is not a people problem. It is a systems problem.
          </motion.p>

        </motion.div>
      </div>
    </section>
  )
}
