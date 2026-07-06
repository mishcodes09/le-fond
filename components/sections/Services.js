"use client";

import { motion } from "framer-motion";
import { Label } from "@/components/ui";
import { animation } from "@/lib/tokens";

const services = [
  {
    id: "01",
    title: "Lead Capture Systems",
    outcome: "Never miss another lead.",
    description:
      "Every enquiry from WhatsApp, your website, and referrals is captured, logged, and ready to follow up — without you doing it manually.",
    mock: "dashboard",
  },
  {
    id: "02",
    title: "WhatsApp Automation",
    outcome: "Your business replies, even when you're on-site.",
    description:
      "Leads are qualified, followed up, and moved through your pipeline automatically. You stop being the person who manually responds to every message.",
    mock: "whatsapp",
  },
  {
    id: "03",
    title: "AI Assistants",
    outcome: "24/7 response time. Zero extra staff.",
    description:
      "An AI handles initial qualification and client communication at 10pm, on weekends, and between jobs — so no lead goes cold.",
    mock: "ai",
  },
  {
    id: "04",
    title: "Operations System",
    outcome: "Run your business from one screen.",
    description:
      "Every lead, open quote, active job, and revenue figure — visible and tracked. No more running your business from memory and WhatsApp.",
    mock: "ops",
  },
];

const headerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

function DashboardMock() {
  return (
    <div className="w-full rounded-lg border border-ink/[0.08] bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between border-b border-ink/[0.06] pb-3">
        <span className="font-mono text-[10px] tracking-[0.1em] text-ink/40 uppercase">
          Today
        </span>
        <span className="font-mono text-[10px] text-teal">3 new leads</span>
      </div>
      <div className="mt-3 space-y-2">
        {[
          { name: "Bathroom Renovation", status: "New", time: "10:23" },
          { name: "Kitchen Quote Request", status: "Quoted", time: "09:15" },
          { name: "Plumbing Emergency", status: "Follow-up", time: "08:47" },
        ].map((lead) => (
          <div
            key={lead.name}
            className="flex items-center justify-between rounded bg-surface/50 px-3 py-2"
          >
            <span className="text-[11px] text-ink/70">{lead.name}</span>
            <div className="flex items-center gap-2">
              <span
                className={`text-[9px] px-1.5 py-0.5 rounded ${
                  lead.status === "New"
                    ? "bg-teal/10 text-teal"
                    : lead.status === "Quoted"
                      ? "bg-ink/5 text-ink/50"
                      : "bg-coral/10 text-coral"
                }`}
              >
                {lead.status}
              </span>
              <span className="text-[9px] text-ink/30">{lead.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function WhatsAppMockSmall() {
  return (
    <div className="w-full rounded-lg border border-ink/[0.08] bg-[#E5DDD5] p-3 shadow-sm">
      <div className="space-y-2">
        <div className="ml-auto max-w-[85%] rounded-lg rounded-tr-sm bg-[#DCF8C6] px-2.5 py-1.5">
          <p className="text-[10px] text-ink">Hi, do you do tiling?</p>
        </div>
        <div className="max-w-[90%] rounded-lg rounded-tl-sm bg-white px-2.5 py-1.5 shadow-sm">
          <p className="text-[10px] text-ink">Yes! What area and timeline?</p>
        </div>
        <div className="ml-auto max-w-[85%] rounded-lg rounded-tr-sm bg-[#DCF8C6] px-2.5 py-1.5">
          <p className="text-[10px] text-ink">Sandton, next month</p>
        </div>
        <div className="max-w-[95%] rounded-lg rounded-tl-sm bg-white px-2.5 py-1.5 shadow-sm">
          <p className="text-[10px] text-ink">
            Perfect! I've logged your request. Reference:{" "}
            <span className="font-mono text-teal">LF-2847</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function AIMock() {
  return (
    <div className="w-full rounded-lg border border-ink/[0.08] bg-ink p-4 shadow-sm">
      <div className="flex items-center gap-2 mb-3">
        <div className="h-2 w-2 rounded-full bg-teal animate-pulse" />
        <span className="font-mono text-[9px] tracking-[0.1em] text-surface/40 uppercase">
          AI Assistant Active
        </span>
      </div>
      <div className="space-y-2">
        <div className="rounded bg-surface/[0.06] px-3 py-2">
          <p className="text-[10px] text-surface/60">
            Q: "What are your rates for a full bathroom?"
          </p>
          <p className="text-[10px] text-surface/40 mt-1">
            A: "Our bathroom renovations start at R45,000..."
          </p>
        </div>
        <div className="rounded bg-surface/[0.06] px-3 py-2">
          <p className="text-[10px] text-surface/60">
            Q: "Are you available next week?"
          </p>
          <p className="text-[10px] text-surface/40 mt-1">
            A: "Let me check our schedule. We have..."
          </p>
        </div>
      </div>
    </div>
  );
}

function OpsMock() {
  return (
    <div className="w-full rounded-lg border border-ink/[0.08] bg-white p-4 shadow-sm">
      <div className="grid grid-cols-3 gap-2 mb-3">
        {[
          { label: "Open Quotes", value: "7", color: "text-teal" },
          { label: "Active Jobs", value: "4", color: "text-ink" },
          { label: "Revenue", value: "R127K", color: "text-ink" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="text-center rounded bg-surface/50 py-2"
          >
            <p className={`font-mono text-sm font-medium ${stat.color}`}>
              {stat.value}
            </p>
            <p className="text-[8px] text-ink/40 uppercase tracking-wider mt-0.5">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
      <div className="h-px bg-ink/[0.06] mb-3" />
      <div className="space-y-1.5">
        {[
          "Quote: Kitchen Reno — Due Tomorrow",
          "Job: Bathroom Sandton — Day 3 of 5",
          "Follow-up: Plumbing Job — 2 days ago",
        ].map((item) => (
          <div key={item} className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-teal" />
            <span className="text-[10px] text-ink/60">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const mockComponents = {
  dashboard: <DashboardMock />,
  whatsapp: <WhatsAppMockSmall />,
  ai: <AIMock />,
  ops: <OpsMock />,
};

export function Services() {
  return (
    <section id="services" className="bg-surface section-pad">
      <div className="container-layout">
        {/* ── Section header ── */}
        <motion.div
          variants={headerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={animation.fadeUp}>
            <Label>What We Build</Label>
          </motion.div>
          <motion.h2
            variants={animation.fadeUp}
            className="mt-6 font-serif text-display-md text-ink"
          >
            The systems that capture and convert leads, 24/7
          </motion.h2>
          <motion.p
            variants={animation.fadeUp}
            className="mt-4 max-w-lg font-sans text-base text-ink/55"
          >
            Solving problems contractors deal with every week.
          </motion.p>
        </motion.div>

        {/* ── Card grid ── */}
        <motion.div
          className="mt-16 grid grid-cols-1 gap-px border border-ink/[0.08] bg-ink/[0.08] md:grid-cols-2"
          variants={cardContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={animation.fadeUp}
              className="group flex min-h-[380px] flex-col justify-between bg-surface p-8 md:p-10"
            >
              <div>
                <span className="font-mono text-xs tracking-[0.12em] text-ink/30">
                  {service.id}
                </span>
                <h3 className="mt-5 font-serif text-2xl text-ink">
                  {service.title}
                </h3>
                <p className="mt-4 font-sans text-[15px] text-ink/85">
                  {service.outcome}
                </p>
                <p className="mt-1.5 font-sans text-sm leading-relaxed text-ink/45">
                  {service.description}
                </p>
              </div>

              {/* ── Mock UI ── */}
              <div className="mt-8">{mockComponents[service.mock]}</div>

              {/* ── Teal accent ── */}
              <div className="mt-6 h-[2px] bg-teal/[0.22] transition-colors duration-300 group-hover:bg-teal" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
