"use client";

import { motion } from "framer-motion";
import { Button, Label } from "@/components/ui";
import { animation } from "@/lib/tokens";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.11, delayChildren: 0.1 },
  },
};

const item = animation.fadeUp;

function WhatsAppMock() {
  return (
    <motion.div
      className="w-full max-w-[340px] rounded-2xl border border-ink/[0.08] bg-white shadow-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 bg-[#075E54] px-4 py-3">
        <div className="h-8 w-8 rounded-full bg-white/20" />
        <div>
          <p className="text-xs font-medium text-white">Leads Bot</p>
          <p className="text-[10px] text-white/60">online</p>
        </div>
      </div>

      {/* Messages */}
      <div className="space-y-3 bg-[#E5DDD5] px-3 py-4">
        <motion.div
          className="ml-auto max-w-[80%] rounded-lg rounded-tr-sm bg-[#DCF8C6] px-3 py-2"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.4 }}
        >
          <p className="text-[11px] leading-relaxed text-ink">
            Hi! I saw your ad. Do you do bathroom renovations in Sandton?
          </p>
          <p className="mt-0.5 text-right text-[9px] text-ink/40">14:32</p>
        </motion.div>

        <motion.div
          className="max-w-[85%] rounded-lg rounded-tl-sm bg-white px-3 py-2 shadow-sm"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.6, duration: 0.4 }}
        >
          <p className="text-[11px] leading-relaxed text-ink">
            Yes, we do! To give you an accurate quote, could you tell me:
          </p>
          <p className="mt-1 text-[11px] leading-relaxed text-ink">
            1. Approximate size of the bathroom?
          </p>
          <p className="text-[11px] leading-relaxed text-ink">
            2. Is this a full renovation or partial?
          </p>
          <p className="mt-0.5 text-right text-[9px] text-ink/40">14:32</p>
        </motion.div>

        <motion.div
          className="ml-auto max-w-[80%] rounded-lg rounded-tr-sm bg-[#DCF8C6] px-3 py-2"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.0, duration: 0.4 }}
        >
          <p className="text-[11px] leading-relaxed text-ink">
            About 4x3m, full renovation including tiling and plumbing
          </p>
          <p className="mt-0.5 text-right text-[9px] text-ink/40">14:35</p>
        </motion.div>

        <motion.div
          className="max-w-[90%] rounded-lg rounded-tl-sm bg-white px-3 py-2 shadow-sm"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.4, duration: 0.4 }}
        >
          <p className="text-[11px] leading-relaxed text-ink">
            Perfect! I've logged your request. A consultant will contact you
            within 2 hours with a detailed quote. Your reference:{" "}
            <span className="font-mono font-medium text-teal">LF-2847</span>
          </p>
          <p className="mt-0.5 text-right text-[9px] text-ink/40">14:35</p>
        </motion.div>
      </div>

      {/* Input */}
      <div className="flex items-center gap-2 border-t border-ink/[0.06] bg-white px-3 py-2">
        <div className="h-8 flex-1 rounded-full bg-[#F0F0F0] px-3">
          <p className="pt-1.5 text-[11px] text-ink/30">Type a message...</p>
        </div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-surface bg-blueprint flex flex-col justify-center pt-16"
    >
      <div className="container-layout py-24">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* ── Copy column ── */}
          <motion.div
            className="flex flex-col gap-8"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="font-serif text-display-xl text-ink"
              variants={item}
            >
              Your business has outgrown its systems.
            </motion.h1>

            <motion.p
              className="max-w-[560px] font-sans text-lg leading-relaxed text-ink/60"
              variants={item}
            >
              Le Fond builds the systems that keep your business moving —
              whether you're on site, in the office, or asleep.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-4"
              variants={item}
            >
              <Button variant="primary" href="#contact">
                Book a Discovery Call
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
              </Button>
              <Button variant="ghost" href="https://wa.me/27000000000">
                WhatsApp Us
              </Button>
            </motion.div>
          </motion.div>

          {/* ── Diagram column ── */}
          <div className="hidden lg:flex lg:items-center lg:justify-end">
            <WhatsAppMock />
          </div>
        </div>
      </div>

      {/* ── Bottom rule ── */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-ink/[0.06]" />
    </section>
  );
}
