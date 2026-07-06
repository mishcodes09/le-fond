"use client";

import { motion } from "framer-motion";
import { Label, Button } from "@/components/ui";
import { animation } from "@/lib/tokens";

const tiers = [
  {
    id: "01",
    name: "Starter",
    price: "R8,500",
    period: "/month",
    setup: "R15,000 once-off setup",
    description:
      "For contractors who want to stop missing leads without rebuilding how they work.",
    features: [
      "WhatsApp lead capture",
      "Automated follow-up sequences",
      "Lead tracking dashboard",
      "AI qualification assistant",
      "Monthly performance report",
      "Email support",
    ],
    featured: false,
  },
  {
    id: "02",
    name: "Operating System",
    price: "R15,000",
    period: "/month",
    setup: "R25,000 once-off setup",
    description:
      "The full system. Built for contractors ready to run like a R50M business.",
    features: [
      "Everything in Starter",
      "Full operations dashboard",
      "Quote and job tracking",
      "AI trained on your business",
      "Advanced WhatsApp flows",
      "Revenue and pipeline reporting",
      "Priority support — 24 hours",
      "Quarterly strategy review",
    ],
    featured: true,
  },
  {
    id: "03",
    name: "Enterprise",
    price: "Custom",
    period: "",
    setup: "Pricing on request",
    description:
      "Multi-site operations, team management, and custom integrations for larger contractors.",
    features: [
      "Everything in Operating System",
      "Multi-site management",
      "Team performance tracking",
      "Custom integrations",
      "Dedicated account manager",
      "On-site onboarding",
    ],
    featured: false,
  },
];

const headerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className="shrink-0 mt-0.5"
    >
      <path
        d="M2 7l3.5 3.5L12 3"
        stroke="#1a6b54"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
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

export function Investment() {
  return (
    <section id="investment" className="bg-surface section-pad">
      <div className="container-layout">
        {/* Header */}
        <motion.div
          variants={headerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={animation.fadeUp}>
            <Label>Investment</Label>
          </motion.div>
          <motion.h2
            variants={animation.fadeUp}
            className="mt-6 font-serif text-display-md text-ink"
          >
            Know the numbers before the call.
          </motion.h2>
          <motion.p
            variants={animation.fadeUp}
            className="mt-4 max-w-lg font-sans text-base text-ink/55"
          >
            Every engagement starts with a discovery call. These are the
            systems we build — and what they cost.
          </motion.p>
        </motion.div>

        {/* Pricing cards */}
        <motion.div
          className="mt-16 grid grid-cols-1 gap-px border border-ink/[0.08] bg-ink/[0.08] lg:grid-cols-3"
          variants={cardContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {tiers.map((tier) => (
            <motion.div
              key={tier.id}
              variants={animation.fadeUp}
              className={`relative flex flex-col p-8 md:p-10 ${
                tier.featured ? "bg-teal/[0.04]" : "bg-surface"
              }`}
            >
              {/* Featured top bar */}
              {tier.featured && (
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-teal" />
              )}

              {/* Most Popular badge */}
              {tier.featured && (
                <div className="mb-4">
                  <span className="font-mono text-[10px] tracking-[0.18em] uppercase bg-teal text-surface px-3 py-1">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Tier number */}
              <span className="font-mono text-xs tracking-[0.12em] text-ink/30">
                {tier.id}
              </span>

              {/* Name */}
              <h3
                className={`mt-4 font-serif text-2xl ${
                  tier.featured ? "text-teal" : "text-ink"
                }`}
              >
                {tier.name}
              </h3>

              {/* Price */}
              <div className="mt-6 flex items-baseline gap-1.5">
                <span
                  className={`font-serif text-display-md leading-none ${
                    tier.featured ? "text-teal" : "text-ink"
                  }`}
                >
                  {tier.price}
                </span>
                {tier.period && (
                  <span className="font-mono text-sm text-ink/40">
                    {tier.period}
                  </span>
                )}
              </div>
              <p className="mt-2 font-mono text-[11px] tracking-[0.1em] text-ink/40">
                {tier.setup}
              </p>

              {/* Description */}
              <p className="mt-4 font-sans text-sm leading-relaxed text-ink/55">
                {tier.description}
              </p>

              {/* Features list */}
              <ul className="mt-8 flex flex-col gap-3 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <CheckIcon />
                    <span className="font-sans text-[14px] text-ink/70">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA button */}
              <div className="mt-10">
                <Button
                  variant={tier.featured ? "primary" : "ghost"}
                  href="https://calendly.com/le-fond"
                  className="w-full justify-center"
                >
                  Book a Discovery Call
                  <ArrowIcon />
                </Button>
              </div>

              {/* Bottom accent */}
              <div
                className={`mt-8 h-[2px] ${
                  tier.featured ? "bg-teal" : "bg-teal/[0.22]"
                }`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* ROI reassurance */}
        <motion.div
          className="mt-10 border border-ink/[0.08] p-8 md:p-10 text-center"
          variants={animation.fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <p className="font-serif text-xl text-ink">
            You'll see ROI within 60 days — or we fix it for free.
          </p>
          <p className="mt-2 font-sans text-sm text-ink/50">
            First 30 days is a trial period. If it's not working, we'll refund
            the setup fee.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
