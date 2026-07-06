"use client";

import { motion } from "framer-motion";
import { Label } from "@/components/ui";
import { animation } from "@/lib/tokens";

const rows = [
  {
    feature: "Custom workflow",
    leFond: "Built around your business",
    others: "Generic templates only",
  },
  {
    feature: "Setup & onboarding",
    leFond: "Done for you — live in 2 weeks",
    others: "Self-serve or expensive agencies",
  },
  {
    feature: "WhatsApp",
    leFond: "Native — your existing number",
    others: "Limited or third-party bolt-on",
  },
  {
    feature: "AI training",
    leFond: "Trained on your trade and services",
    others: "Generic AI, not trade-specific",
  },
  {
    feature: "24/7 support",
    leFond: "Included in all plans",
    others: "Paid add-on or unavailable",
  },
  {
    feature: "Contractor-specific",
    leFond: "Built for the trades — nothing else",
    others: "Designed for any industry",
  },
];

const headerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

function CheckIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      aria-hidden="true"
      className="shrink-0 mt-0.5"
    >
      <path
        d="M2.5 7.5l3.5 3.5L12.5 3"
        stroke="#1a6b54"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      aria-hidden="true"
      className="shrink-0 mt-0.5"
    >
      <path
        d="M5 5l5 5M10 5l-5 5"
        stroke="rgba(14,13,11,0.22)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function WhyLeFond() {
  return (
    <section id="why-le-fond" className="bg-surface section-pad">
      <div className="container-layout">
        {/* Header */}
        <motion.div
          variants={headerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={animation.fadeUp}>
            <Label>Why Le Fond</Label>
          </motion.div>
          <motion.h2
            variants={animation.fadeUp}
            className="mt-6 font-serif text-display-md text-ink"
          >
            Not software. Not an agency. A system built for contractors.
          </motion.h2>
          <motion.p
            variants={animation.fadeUp}
            className="mt-4 max-w-xl font-sans text-base text-ink/55"
          >
            GoHighLevel, HubSpot, and DIY setups were not designed for a
            business where the owner is on-site at 7am.
          </motion.p>
        </motion.div>

        {/* Comparison table */}
        <motion.div
          className="mt-16 overflow-x-auto"
          variants={animation.fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <table className="w-full border-collapse min-w-[560px]">
            <thead>
              <tr>
                <th className="border border-ink/[0.08] px-6 py-4 text-left w-[30%]">
                  <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-ink/30">
                    Feature
                  </span>
                </th>
                <th className="border border-teal/30 bg-teal/[0.04] px-6 py-4 text-left w-[35%]">
                  <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-teal">
                    Le Fond
                  </span>
                </th>
                <th className="border border-ink/[0.08] px-6 py-4 text-left w-[35%]">
                  <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-ink/30">
                    GoHighLevel / HubSpot / DIY
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.feature}>
                  <td
                    className={`border border-ink/[0.08] px-6 py-4 ${
                      i % 2 !== 0 ? "bg-ink/[0.02]" : ""
                    }`}
                  >
                    <span className="font-sans text-sm text-ink/60">
                      {row.feature}
                    </span>
                  </td>
                  <td className="border border-teal/30 bg-teal/[0.04] px-6 py-4">
                    <div className="flex items-start gap-2.5">
                      <CheckIcon />
                      <span className="font-sans text-sm text-ink">
                        {row.leFond}
                      </span>
                    </div>
                  </td>
                  <td
                    className={`border border-ink/[0.08] px-6 py-4 ${
                      i % 2 !== 0 ? "bg-ink/[0.02]" : ""
                    }`}
                  >
                    <div className="flex items-start gap-2.5">
                      <CrossIcon />
                      <span className="font-sans text-sm text-ink/38">
                        {row.others}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Philosophy quote */}
        <motion.div
          className="mt-16 border-l-2 border-teal pl-8 max-w-2xl"
          variants={animation.fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <blockquote className="font-serif text-xl text-ink leading-relaxed">
            "We don't sell software. We build systems — and we run them for
            you, so you don't have to think about it."
          </blockquote>
          <p className="mt-4 font-mono text-[11px] tracking-[0.14em] uppercase text-ink/30">
            Le Fond — Systems that build businesses.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
