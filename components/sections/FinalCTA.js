'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui'
import { animation } from '@/lib/tokens'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export function FinalCTA() {
  return (
    <section id="contact" className="bg-ink section-pad">
      <div className="container-layout">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >

          {/* ── Headline ── */}
          <motion.h2
            variants={animation.fadeUp}
            className="font-serif text-display-lg text-surface"
          >
            Your next 10 leads are<br className="hidden sm:block" /> already coming in.
          </motion.h2>

          {/* ── Subtext ── */}
          <motion.p
            variants={animation.fadeUp}
            className="mt-6 font-sans text-xl leading-relaxed text-surface/60"
          >
            The question is whether your system is ready to capture them.
          </motion.p>

          {/* ── CTAs ── */}
          <motion.div
            variants={animation.fadeUp}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Button variant="primary" href="https://calendly.com/le-fond">
              Book a Discovery Call
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M1 7h12M7 1l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
            <Button variant="ghost-light" href="https://wa.me/27000000000">
              WhatsApp Us
            </Button>
          </motion.div>

          {/* ── Reassurance ── */}
          <motion.p
            variants={animation.fadeUp}
            className="mt-8 font-mono text-[11px] tracking-[0.12em] text-surface/25"
          >
            No commitment. No quote. Just a 30-minute conversation.
          </motion.p>

        </motion.div>
      </div>
    </section>
  )
}
