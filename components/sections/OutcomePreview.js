"use client";

import { motion } from "framer-motion";
import { Label } from "@/components/ui";
import { animation } from "@/lib/tokens";

const outcomes = [
  {
    statement: "Every lead, followed up.",
    detail:
      "No enquiry falls through the cracks — whether it came in at 7am or midnight.",
  },
  {
    statement: "Your business replies when you can't.",
    detail:
      "Leads are qualified and responded to automatically, keeping your pipeline moving 24/7.",
  },
  {
    statement: "Your pipeline, always visible.",
    detail:
      "Open quotes, active jobs, and pending follow-ups — tracked in one place, not your head.",
  },
  {
    statement: "You're no longer the bottleneck.",
    detail:
      "The system runs. You build. That's what a R50M operation looks like.",
  },
];

const headerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const rowContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export function OutcomePreview() {
  return (
    <section id="outcome" className="bg-ink section-pad">
      <div className="container-layout">
        {/* ── Section header ── */}
        <motion.div
          variants={headerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={animation.fadeUp}>
            <Label light>The Outcome</Label>
          </motion.div>
          <motion.h2
            variants={animation.fadeUp}
            className="mt-6 font-serif text-display-md text-surface"
          >
            Your business, after.
          </motion.h2>
        </motion.div>

        {/* ── Outcome rows ── */}
        <motion.div
          className="mt-16 border-t border-surface/[0.08]"
          variants={rowContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {outcomes.map((outcome) => (
            <motion.div
              key={outcome.statement}
              variants={animation.fadeUp}
              className="grid grid-cols-1 gap-6 border-b border-surface/[0.08] py-9 md:grid-cols-2 md:gap-16 md:py-11"
            >
              <p className="font-serif text-2xl italic text-surface">
                {outcome.statement}
              </p>
              <p className="font-sans text-base leading-relaxed text-surface/50 md:self-center">
                {outcome.detail}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
