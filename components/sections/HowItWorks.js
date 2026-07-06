"use client";

import { motion } from "framer-motion";
import { Label } from "@/components/ui";
import { animation } from "@/lib/tokens";

const weeks = [
  {
    id: "Week 1–2",
    title: "Onboarding & Setup — Live in Two Weeks",
    description:
      "We spend 30 minutes mapping your pipeline. Within two weeks your WhatsApp is connected, your dashboard is live, and leads are being captured automatically.",
    outcome: "First lead captured without you lifting a finger.",
  },
  {
    id: "Week 3",
    title: "Leads Are Replying Automatically",
    description:
      "Follow-up sequences kick in. New leads receive an instant response. Existing leads get nudged. Your phone stops being the first point of contact.",
    outcome: "Your response time drops from hours to minutes.",
  },
  {
    id: "Week 4+",
    title: "You're Running on Time",
    description:
      "The dashboard shows every lead, open quote, and active job in one place. You check it once in the morning and once at the end of the day. That's it.",
    outcome: "6–8 hours a week back in your hands.",
  },
];

const headerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const stepContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

function PipelineDiagram() {
  return (
    <motion.svg
      viewBox="0 0 480 336"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      aria-hidden="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.6 }}
    >
      <defs>
        <pattern
          id="diag-grid"
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 24 0 L 0 0 0 24"
            fill="none"
            stroke="rgba(14,13,11,0.055)"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>

      {/* ── Background grid ── */}
      <rect width="480" height="336" fill="url(#diag-grid)" />

      {/* ── Column labels ── */}
      <text
        x="60"
        y="22"
        textAnchor="middle"
        fontSize="6.5"
        letterSpacing="0.16em"
        fill="rgba(14,13,11,0.22)"
        fontFamily="var(--font-dm-mono)"
      >
        INPUT
      </text>
      <text
        x="420"
        y="22"
        textAnchor="middle"
        fontSize="6.5"
        letterSpacing="0.16em"
        fill="rgba(14,13,11,0.22)"
        fontFamily="var(--font-dm-mono)"
      >
        OUTPUT
      </text>

      {/* ══ LEFT BUS ══ */}
      <line
        x1="150"
        y1="52"
        x2="150"
        y2="284"
        stroke="rgba(14,13,11,0.13)"
        strokeWidth="1"
      />

      {/* ══ RIGHT BUS ══ */}
      <line
        x1="330"
        y1="52"
        x2="330"
        y2="284"
        stroke="rgba(14,13,11,0.13)"
        strokeWidth="1"
      />

      {/* ── Active bus ↔ centre ── */}
      <line
        x1="150"
        y1="168"
        x2="180"
        y2="168"
        stroke="#1a6b54"
        strokeWidth="1"
      />
      <line
        x1="300"
        y1="168"
        x2="330"
        y2="168"
        stroke="#1a6b54"
        strokeWidth="1"
      />

      {/* ── Input horizontals (box → left bus) ── */}
      <line
        x1="120"
        y1="52"
        x2="150"
        y2="52"
        stroke="rgba(14,13,11,0.13)"
        strokeWidth="1"
      />
      <line
        x1="120"
        y1="168"
        x2="150"
        y2="168"
        stroke="rgba(14,13,11,0.13)"
        strokeWidth="1"
      />
      <line
        x1="120"
        y1="284"
        x2="150"
        y2="284"
        stroke="rgba(14,13,11,0.13)"
        strokeWidth="1"
      />

      {/* ── Output horizontals (right bus → box) ── */}
      <line
        x1="330"
        y1="52"
        x2="360"
        y2="52"
        stroke="rgba(14,13,11,0.13)"
        strokeWidth="1"
      />
      <line
        x1="330"
        y1="168"
        x2="360"
        y2="168"
        stroke="rgba(14,13,11,0.13)"
        strokeWidth="1"
      />
      <line
        x1="330"
        y1="284"
        x2="360"
        y2="284"
        stroke="rgba(14,13,11,0.13)"
        strokeWidth="1"
      />

      {/* ── Junction dots – left bus ── */}
      <circle cx="150" cy="52" r="2.5" fill="rgba(14,13,11,0.18)" />
      <circle cx="150" cy="168" r="4" fill="#1a6b54" />
      <circle cx="150" cy="284" r="2.5" fill="rgba(14,13,11,0.18)" />

      {/* ── Junction dots – right bus ── */}
      <circle cx="330" cy="52" r="2.5" fill="rgba(14,13,11,0.18)" />
      <circle cx="330" cy="168" r="4" fill="#1a6b54" />
      <circle cx="330" cy="284" r="2.5" fill="rgba(14,13,11,0.18)" />

      {/* ══ INPUT BOXES ══ */}
      <rect
        x="1"
        y="36"
        width="119"
        height="32"
        stroke="rgba(14,13,11,0.13)"
        strokeWidth="1"
        fill="rgba(245,243,239,0.75)"
      />
      <text
        x="60"
        y="56"
        textAnchor="middle"
        fontSize="8.5"
        letterSpacing="0.14em"
        fill="rgba(14,13,11,0.42)"
        fontFamily="var(--font-dm-mono)"
      >
        WHATSAPP
      </text>

      <rect
        x="1"
        y="152"
        width="119"
        height="32"
        stroke="rgba(14,13,11,0.13)"
        strokeWidth="1"
        fill="rgba(245,243,239,0.75)"
      />
      <text
        x="60"
        y="172"
        textAnchor="middle"
        fontSize="8.5"
        letterSpacing="0.14em"
        fill="rgba(14,13,11,0.42)"
        fontFamily="var(--font-dm-mono)"
      >
        WEBSITE
      </text>

      <rect
        x="1"
        y="268"
        width="119"
        height="32"
        stroke="rgba(14,13,11,0.13)"
        strokeWidth="1"
        fill="rgba(245,243,239,0.75)"
      />
      <text
        x="60"
        y="288"
        textAnchor="middle"
        fontSize="8.5"
        letterSpacing="0.14em"
        fill="rgba(14,13,11,0.42)"
        fontFamily="var(--font-dm-mono)"
      >
        REFERRAL
      </text>

      {/* ══ CENTRAL SYSTEM BOX ══ */}
      <rect
        x="180"
        y="120"
        width="120"
        height="96"
        stroke="#1a6b54"
        strokeWidth="1"
        fill="rgba(26,107,84,0.045)"
      />

      {/* Corner accents */}
      <path
        d="M180 136 L180 120 L196 120"
        stroke="#1a6b54"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M300 136 L300 120 L284 120"
        stroke="#1a6b54"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M180 200 L180 216 L196 216"
        stroke="#1a6b54"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M300 200 L300 216 L284 216"
        stroke="#1a6b54"
        strokeWidth="2"
        fill="none"
      />

      <text
        x="240"
        y="155"
        textAnchor="middle"
        fontSize="10"
        letterSpacing="0.13em"
        fill="#1a6b54"
        fontFamily="var(--font-dm-mono)"
        fontWeight="500"
      >
        LE FOND
      </text>
      <text
        x="240"
        y="169"
        textAnchor="middle"
        fontSize="7"
        letterSpacing="0.13em"
        fill="rgba(26,107,84,0.55)"
        fontFamily="var(--font-dm-mono)"
      >
        OPERATIONS
      </text>

      <line
        x1="206"
        y1="180"
        x2="274"
        y2="180"
        stroke="rgba(26,107,84,0.18)"
        strokeWidth="0.75"
      />

      {/* ── Live pulse indicator ── */}
      <motion.circle
        cx="223"
        cy="196"
        r="3"
        fill="#1a6b54"
        animate={{ opacity: [0.25, 1, 0.25] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
      />
      <text
        x="233"
        y="199"
        fontSize="7"
        letterSpacing="0.11em"
        fill="rgba(26,107,84,0.65)"
        fontFamily="var(--font-dm-mono)"
      >
        ACTIVE
      </text>

      {/* ══ OUTPUT BOXES ══ */}
      <rect
        x="360"
        y="36"
        width="119"
        height="32"
        stroke="rgba(14,13,11,0.13)"
        strokeWidth="1"
        fill="rgba(245,243,239,0.75)"
      />
      <text
        x="420"
        y="56"
        textAnchor="middle"
        fontSize="8.5"
        letterSpacing="0.14em"
        fill="rgba(14,13,11,0.42)"
        fontFamily="var(--font-dm-mono)"
      >
        CAPTURED
      </text>

      <rect
        x="360"
        y="152"
        width="119"
        height="32"
        stroke="rgba(14,13,11,0.13)"
        strokeWidth="1"
        fill="rgba(245,243,239,0.75)"
      />
      <text
        x="420"
        y="172"
        textAnchor="middle"
        fontSize="8.5"
        letterSpacing="0.14em"
        fill="rgba(14,13,11,0.42)"
        fontFamily="var(--font-dm-mono)"
      >
        QUOTED
      </text>

      <rect
        x="360"
        y="268"
        width="119"
        height="32"
        stroke="rgba(14,13,11,0.13)"
        strokeWidth="1"
        fill="rgba(245,243,239,0.75)"
      />
      <text
        x="420"
        y="288"
        textAnchor="middle"
        fontSize="8.5"
        letterSpacing="0.14em"
        fill="rgba(14,13,11,0.42)"
        fontFamily="var(--font-dm-mono)"
      >
        TRACKED
      </text>
    </motion.svg>
  );
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-surface section-pad">
      <div className="container-layout">
        {/* ── Section header ── */}
        <motion.div
          variants={headerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={animation.fadeUp}>
            <Label>How It Works</Label>
          </motion.div>
          <motion.h2
            variants={animation.fadeUp}
            className="mt-6 font-serif text-display-md text-ink"
          >
            Live in two weeks. Running by week four.
          </motion.h2>
        </motion.div>

        {/* ── Steps + Diagram ── */}
        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left: Week timeline */}
          <motion.div
            className="flex flex-col gap-0"
            variants={stepContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {weeks.map((week) => (
              <motion.div
                key={week.id}
                variants={animation.fadeUp}
                className="group border-t border-ink/[0.08] py-10 first:border-t-0"
              >
                <div className="flex items-start gap-6">
                  <span className="font-mono text-sm tracking-[0.12em] text-teal shrink-0 pt-0.5">
                    {week.id}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl text-ink">
                      {week.title}
                    </h3>
                    <p className="mt-3 font-sans text-[15px] leading-relaxed text-ink/55">
                      {week.description}
                    </p>
                    {/* Outcome box */}
                    <div className="mt-4 border-l-2 border-teal bg-teal/[0.04] px-4 py-3">
                      <p className="font-mono text-[11px] tracking-[0.12em] text-teal">
                        {week.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Pipeline Diagram */}
          <div className="hidden lg:flex lg:items-center lg:justify-center">
            <PipelineDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}
