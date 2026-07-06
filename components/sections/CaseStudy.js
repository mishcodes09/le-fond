"use client";

import { motion } from "framer-motion";
import { Label, Button } from "@/components/ui";
import { animation } from "@/lib/tokens";

const metrics = [
  { label: "Leads / month", before: "15–20", after: "45–60" },
  { label: "Response time", before: "24–48 hrs", after: "2–4 hrs" },
  { label: "Admin saved", before: "—", after: "6–8 hrs/week" },
  { label: "Close rate", before: "~30%", after: "~45%" },
];

const timeline = [
  {
    day: "Week 2",
    milestone:
      "System live. WhatsApp connected. First lead captured automatically.",
    active: false,
  },
  {
    day: "Week 3",
    milestone:
      "All incoming leads routed through the system. Owner checks the dashboard, not WhatsApp.",
    active: false,
  },
  {
    day: "Week 6",
    milestone:
      "Follow-up sequences running. Leads being qualified without any manual effort.",
    active: false,
  },
  {
    day: "Day 90",
    milestone:
      "Close rate up 15 points. Admin time cut by 8 hours a week. Nothing missed.",
    active: true,
  },
];

const headerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const timelineContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1 7h12M7 1l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CaseStudy() {
  return (
    <section id="case-study" className="bg-ink section-pad">
      <div className="container-layout">
        {/* Header */}
        <motion.div
          className="mb-16"
          variants={headerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={animation.fadeUp}>
            <Label light>Case Study</Label>
          </motion.div>
          <motion.h2
            variants={animation.fadeUp}
            className="mt-6 font-serif text-display-md text-surface"
          >
            Madolo Construction went from 20 to 60 leads a month.
          </motion.h2>
          <motion.p
            variants={animation.fadeUp}
            className="mt-4 max-w-xl font-sans text-base text-surface/50"
          >
            Without hiring anyone. Without changing how the owner works. Just a
            system that captured what was already coming in.
          </motion.p>
        </motion.div>

        {/* Content: story left + timeline right */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left: Problem → System → Results */}
          <div>
            <motion.div
              className="space-y-10"
              variants={headerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div
                variants={animation.fadeUp}
                className="border-l-2 border-surface/10 pl-6"
              >
                <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-surface/30 mb-3">
                  The Problem
                </p>
                <p className="font-sans text-[15px] leading-relaxed text-surface/60">
                  Madolo's owner was managing 15–20 leads a month manually on
                  WhatsApp. Two to three hours a day responding, following up,
                  qualifying. Leads went cold on weekends. Quotes were getting
                  delayed by 48 hours.
                </p>
              </motion.div>

              <motion.div
                variants={animation.fadeUp}
                className="border-l-2 border-teal/40 pl-6"
              >
                <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-teal/60 mb-3">
                  The System
                </p>
                <p className="font-sans text-[15px] leading-relaxed text-surface/60">
                  We built a WhatsApp-first lead capture system with an AI
                  assistant to qualify leads and an operations dashboard for
                  tracking jobs and quotes. Setup took two weeks.
                </p>
              </motion.div>

              <motion.div
                variants={animation.fadeUp}
                className="border-l-2 border-teal pl-6"
              >
                <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-teal mb-3">
                  The Results
                </p>
                <p className="font-sans text-[15px] leading-relaxed text-surface/60">
                  Leads tripled in 90 days — not because they spent more on
                  advertising, but because none of them went unanswered anymore.
                  The owner gained back 8 hours a week.
                </p>
              </motion.div>
            </motion.div>

            {/* Metrics table */}
            <motion.div
              className="mt-12 border border-surface/[0.08]"
              variants={animation.fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="grid grid-cols-3 border-b border-surface/[0.08] px-6 py-3">
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-surface/30">
                  Metric
                </span>
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-surface/30">
                  Before
                </span>
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-teal">
                  After
                </span>
              </div>
              {metrics.map((row, i) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-3 px-6 py-4 ${
                    i < metrics.length - 1
                      ? "border-b border-surface/[0.06]"
                      : ""
                  }`}
                >
                  <span className="font-sans text-[13px] text-surface/50">
                    {row.label}
                  </span>
                  <span className="font-mono text-[13px] text-surface/25 line-through decoration-surface/20">
                    {row.before}
                  </span>
                  <span className="font-mono text-[13px] text-teal">
                    {row.after}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Visual timeline */}
          <div>
            <motion.p
              className="font-mono text-[10px] tracking-[0.18em] uppercase text-surface/30 mb-8"
              variants={animation.fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              Timeline
            </motion.p>

            <motion.div
              className="relative"
              variants={timelineContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Vertical connector line */}
              <div className="absolute left-[19px] top-5 bottom-5 w-px bg-surface/[0.08]" />

              <div className="flex flex-col gap-0">
                {timeline.map((item) => (
                  <motion.div
                    key={item.day}
                    variants={animation.fadeUp}
                    className="relative flex gap-6 pb-10 last:pb-0"
                  >
                    {/* Node */}
                    <div
                      className={`relative z-10 h-10 w-10 shrink-0 flex items-center justify-center border ${
                        item.active
                          ? "border-teal bg-teal/10"
                          : "border-surface/[0.15] bg-ink"
                      }`}
                    >
                      <div
                        className={`h-2 w-2 rounded-full ${
                          item.active ? "bg-teal" : "bg-surface/20"
                        }`}
                      />
                    </div>

                    {/* Content */}
                    <div className="pt-2">
                      <p
                        className={`font-mono text-[11px] tracking-[0.14em] uppercase mb-2 ${
                          item.active ? "text-teal" : "text-surface/40"
                        }`}
                      >
                        {item.day}
                      </p>
                      <p className="font-sans text-[14px] leading-relaxed text-surface/60">
                        {item.milestone}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              className="mt-12 border border-teal/20 bg-teal/[0.05] p-6"
              variants={animation.fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="font-sans text-[15px] text-surface/70 mb-4">
                Madolo's results in 90 days. Yours could start in two weeks.
              </p>
              <Button variant="primary" href="https://calendly.com/le-fond">
                Book a Discovery Call
                <ArrowIcon />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
