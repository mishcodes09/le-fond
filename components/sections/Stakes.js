"use client";

import { motion } from "framer-motion";
import { animation } from "@/lib/tokens";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14 },
  },
};

const rule = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Stakes() {
  return (
    <section id="stakes" className="bg-ink py-28 md:py-36">
      <div className="container-layout">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* ── Identity hook ── */}
          <motion.h2
            variants={animation.fadeUp}
            className="font-serif text-display-lg text-surface"
          >
            You didn't start this business to chase leads.
          </motion.h2>

          {/* ── Structural rule ── */}
          <motion.div
            variants={rule}
            className="mx-auto my-10 h-px w-12 origin-center bg-surface/10"
          />

          {/* ── Supporting points ── */}
          <motion.p
            variants={animation.fadeUp}
            className="font-sans text-lg leading-relaxed text-surface/60"
          >
            Chasing clients for quotes is not what a business owner does. We
            automate it.
          </motion.p>

          <motion.p
            variants={animation.fadeUp}
            className="mt-6 font-sans text-base leading-relaxed text-surface/40"
          >
            Every hour spent on manual follow-ups is time your business isn't
            getting back.
          </motion.p>

          <motion.p
            variants={animation.fadeUp}
            className="mt-8 font-mono text-sm tracking-[0.08em] text-coral"
          >
            The contractors that move on this now will be ahead of everyone else
            in three years.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
