"use client";
import { Icon, IconText } from "@/components/ui/Icon";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
const industries = {
  Solar: {
    message: "Hi, I’d like a quote for solar installation.",
    service: "Solar installation",
    detail: "Property type and installation needs",
    route: "Site visit → qualified quote",
    question: "What type of property is it, and which area are you in?",
    response: "A residential property in Johannesburg.",
    owner: "Installation team",
  },
  Dental: {
    message: "Hi, I’d like to book a dental appointment.",
    service: "Dental appointment",
    detail: "Appointment type and preferred time",
    route: "Enquiry → appointment",
    question: "Is this a routine appointment, and what time usually suits you?",
    response: "A routine check-up, preferably in the afternoon.",
    owner: "Reception team",
  },
  Plumbing: {
    message: "Hi, I’d like a quote for a bathroom repair.",
    service: "Plumbing enquiry",
    detail: "Job type, location and availability",
    route: "Job request → site assessment",
    question: "What needs attention, and which area is the property in?",
    response: "A leaking bathroom tap in Johannesburg.",
    owner: "Service team",
  },
  B2B: {
    message: "Hi, we’d like to discuss your services.",
    service: "Business consultation",
    detail: "Business requirements and decision-maker",
    route: "Enquiry → consultation",
    question:
      "What does your business need help with, and who should we speak to?",
    response: "We need help with our onboarding process.",
    owner: "Account team",
  },
};
const stages = [
  "Capture",
  "Qualify",
  "Book / Quote",
  "Follow Up",
  "Handoff",
  "Measure",
];
// Run demonstrations only while visible; manual interaction pauses the tour.
function useDemoClock(onTick, delay = 4500) {
  const ref = useRef(null);
  const tick = useRef(onTick);
  tick.current = onTick;
  const reduced = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  const playing = visible && !paused && !reduced;
  useEffect(() => {
    if (!playing) return;
    const timer = setInterval(() => {
      if (!document.hidden) tick.current();
    }, delay);
    return () => clearInterval(timer);
  }, [playing, delay]);
  return { ref, playing, paused, setPaused, reduced };
}
function DemoToggle({ demo, name }) {
  if (demo.reduced)
    return <span className="demo-caption">Select a step to explore</span>;
  return (
    <button
      className="demo-toggle"
      onClick={() => demo.setPaused(!demo.paused)}
      aria-label={`${demo.paused ? "Resume" : "Pause"} ${name}`}
    >
      <Icon name={demo.paused ? "play" : "pause"} />
      <span>{demo.paused ? "Resume tour" : "Pause tour"}</span>
    </button>
  );
}
export function HeroLead() {
  return (
    <div className="lead-preview">
      <div className="panel-head">
        <span className="kicker">From interest to next step</span>
        <span className="tag">Example workflow</span>
      </div>
      <div className="chat-message">
        <small>Customer · Website enquiry</small>“Hi, I’d like a quote for solar
        installation.”
      </div>
      <div className="chat-message reply">
        <small>Le Fond system · Automated reply</small>“Thanks. A few quick
        questions so we can connect you with the right person.”
      </div>
      <div className="preview-connector" aria-hidden="true" />
      <div className="lead-ticket">
        <div className="ticket-avatar" aria-hidden="true">
          <Icon name="arrowUpRight" />
        </div>
        <div>
          <p>Qualified enquiry</p>
          <small>Captured. Assigned. Ready for follow-up.</small>
        </div>
        <span className="ticket-check" aria-hidden="true">
          <Icon name="check" />
        </span>
      </div>
      <div className="panel-footer">
        <span>Human handoff built in</span>
        <span>No live customer data</span>
      </div>
    </div>
  );
}
export function Workflow() {
  const [sector, setSector] = useState("Solar");
  const [active, setActive] = useState(0);
  const [slot, setSlot] = useState("");
  const reduced = useReducedMotion();
  const data = industries[sector];
  const demo = useDemoClock(() => {
    setActive((x) => (x + 1) % stages.length);
    if (active === 5) setSlot("");
  }, 6000);
  const playing = demo.playing;
  const setPlaying = (value) => demo.setPaused(!value);
  const content = [
    {
      title: "The enquiry has somewhere to go.",
      description:
        "Traffic from a campaign, search or referral reaches a focused page. The enquiry is captured with the details your business actually needs.",
      status: "Enquiry captured",
      speaker: "Customer",
      message: data.message,
      rows: [
        ["Name", "Example customer"],
        ["Phone", "Captured in the form"],
        ["Location", "Johannesburg"],
      ],
    },
    {
      title: "Useful questions. A clearer conversation.",
      description:
        "Rules and AI-assisted communication gather information before your team steps in. Qualification stays within agreed boundaries.",
      status: "Qualification complete",
      speaker: "Automation → customer",
      message: data.question,
      rows: [
        ["Customer reply", data.response],
        ["Information", data.detail],
        ["Sensitive questions", "Escalate to a person"],
      ],
    },
    {
      title: "A booking or quote, with a next step.",
      description:
        "Offer approved appointment times or route the brief to the person who prepares quotes. Pricing decisions stay with the business.",
      status: slot ? "Example time selected" : "Ready to arrange",
      speaker: "Booking assistant",
      message: "Would Tuesday at 14:00 or Wednesday at 10:00 work?",
      rows: [
        ["Workflow", data.route],
        ["Selected time", slot || "Awaiting a preference"],
        ["Pricing", "Prepared by your team"],
      ],
    },
    {
      title: "Follow-up becomes part of the process.",
      description:
        "Send agreed confirmations and reminders. Keep an outstanding quote visible and give the customer a clear way to respond.",
      status: "Follow-up scheduled",
      speaker: "Automated follow-up",
      message:
        "Your request is with the team. We’ll confirm the next step. Reply here if anything changes.",
      rows: [
        ["Confirmation", "Request received"],
        ["Reminder", "Based on agreed timing"],
        ["Channel", "Email or WhatsApp"],
      ],
    },
    {
      title: "The right person gets the context.",
      description:
        "The conversation, qualification details and next action arrive together. Uncertain or sensitive questions are flagged for human review.",
      status: "Human review",
      speaker: "Internal handoff",
      message:
        "A qualified enquiry is ready. Review the brief and confirm the next step with the customer.",
      rows: [
        ["Assigned to", data.owner],
        ["Conversation", "Summary attached"],
        ["Decision", "Owned by your business"],
      ],
    },
    {
      title: "See what needs attention.",
      description:
        "Track the enquiry through the funnel. Use response time, follow-up completion and booking or quote progress to guide improvements.",
      status: "Visible in reporting",
      speaker: "Workflow record",
      message:
        "The enquiry has a source, an owner and a next action. Its progress can now be reviewed.",
      rows: [
        ["Source", "Campaign landing page"],
        ["Stage", "With the team"],
        ["Measures", "Response, progress, follow-up"],
      ],
    },
  ][active];
  function chooseStage(i) {
    setPlaying(false);
    setActive(i);
  }
  return (
    <div className="workflow-box" ref={demo.ref}>
      <div className="workflow-toolbar">
        <div>
          <span className="kicker">Example workflow</span>
          <p className="muted text-xs mt-1">
            Choose a business. Follow one enquiry.
          </p>
        </div>
        <DemoToggle demo={demo} name="workflow tour" />
        <div role="group" aria-label="Example industry" className="segmented">
          {Object.keys(industries).map((s) => (
            <button
              key={s}
              aria-pressed={s === sector}
              onClick={() => {
                setSector(s);
                setActive(0);
                setSlot("");
                setPlaying(true);
              }}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
      <div className="flow-upstream">
        Traffic <Icon name="arrowRight" /> Landing page / website{" "}
        <Icon name="arrowRight" /> Your connected lead system
      </div>
      <div role="group" aria-label="Lead flow stages" className="flow-steps">
        {stages.map((s, i) => (
          <button
            key={s}
            className="flow-step"
            aria-pressed={active === i}
            onClick={() => chooseStage(i)}
          >
            <small>
              0{i + 1} {active > i ? <Icon name="check" /> : null}
            </small>
            {s}
          </button>
        ))}
      </div>
      <div aria-live={playing ? "off" : "polite"}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`${sector}-${active}`}
            initial={{ opacity: 0, y: reduced ? 0 : 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.18 }}
            className="flow-stage"
          >
            <div>
              <span className="tag">{content.status}</span>
              <h3>{content.title}</h3>
              <p className="lede">{content.description}</p>
              {active === 2 && (
                <div
                  className="slot-list"
                  role="group"
                  aria-label="Example appointment times"
                >
                  {["Tuesday · 14:00", "Wednesday · 10:00"].map((t) => (
                    <button
                      key={t}
                      aria-pressed={slot === t}
                      onClick={() => {
                        setSlot(t);
                        setPlaying(false);
                      }}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="flow-record">
              <span className="kicker">
                <IconText>{content.speaker}</IconText>
              </span>
              <p className="text-sm leading-relaxed mt-4">
                “{content.message}”
              </p>
              <dl>
                {content.rows.map(([k, v]) => (
                  <div className="data-row" key={k}>
                    <dt>{k}</dt>
                    <dd>
                      <IconText>{v}</IconText>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flow-controls">
        <span className="kicker">
          Illustration only · Nothing sent or booked
        </span>
      </div>
    </div>
  );
}
export function AIAssistant() {
  const [human, setHuman] = useState(false);
  return (
    <div className="ai-visual">
      <div className="panel-head">
        <span className="kicker">Customer care / example</span>
        <span className="tag">Human escalation</span>
      </div>
      <div
        className="segmented mt-5"
        role="group"
        aria-label="Customer question examples"
      >
        <button aria-pressed={!human} onClick={() => setHuman(false)}>
          Routine question
        </button>
        <button aria-pressed={human} onClick={() => setHuman(true)}>
          Needs a person
        </button>
      </div>
      <div aria-live="polite">
        <div className="chat-message">
          <small>Customer</small>
          {human
            ? "“Can you guarantee this treatment is right for me?”"
            : "“Can I arrange a consultation?”"}
        </div>
        <div className="chat-message reply">
          <small>
            {human ? "Assistant · Escalating" : "Assistant · Approved workflow"}
          </small>
          {human
            ? "“That needs a qualified member of the team. I’ll pass on your question so they can advise you.”"
            : "“I can help with the request. What kind of consultation do you need, and which time usually suits you?”"}
        </div>
        <div className="ai-status">
          <Icon name="arrowRight" />
          {human
            ? "Human review requested. Context travels with the conversation."
            : "Capture the request. Check approved availability. Let the team confirm."}
        </div>
      </div>
    </div>
  );
}
export function Dashboard() {
  const [tab, setTab] = useState("Pipeline");
  const [action, setAction] = useState("Pending review");
  const [frame, setFrame] = useState(0);
  const demo = useDemoClock(() => {
    const next = (frame + 1) % 6;
    setFrame(next);
    setTab(
      [
        "Pipeline",
        "Pipeline",
        "Approvals",
        "Approvals",
        "Reporting",
        "Reporting",
      ][next],
    );
    setAction(
      next === 3
        ? "Example approval recorded. Nothing was sent."
        : "Pending review",
    );
  });
  const captions = [
    "01 / A new enquiry arrives",
    "02 / Qualification details reach your team",
    "03 / A follow-up awaits approval",
    "04 / Your team controls the next action",
    "05 / Progress appears in reporting",
    "06 / Every enquiry has a next step",
  ];
  return (
    <div className="dashboard" ref={demo.ref}>
      <div className="dash-top">
        <div>
          <span className="kicker">Le Fond / command centre</span>
          <p className="text-sm mt-2">Your customer pipeline, in view.</p>
        </div>
        <span className="tag">Add-on concept · Example data</span>
      </div>
      <div className="demo-player">
        <span className="demo-caption">{captions[frame]}</span>
        <DemoToggle demo={demo} name="dashboard tour" />
      </div>
      <div className="demo-progress" aria-hidden="true">
        {captions.map((_, i) => (
          <span key={i} className={i <= frame ? "is-complete" : ""} />
        ))}
      </div>
      <div className="dash-content">
        <div
          className="dash-nav"
          role="group"
          aria-label="Dashboard example views"
        >
          {["Pipeline", "Approvals", "Reporting"].map((t) => (
            <button
              key={t}
              onClick={() => {
                setTab(t);
                setFrame(["Pipeline", "Approvals", "Reporting"].indexOf(t) * 2);
                demo.setPaused(true);
              }}
              aria-pressed={tab === t}
            >
              {t}
            </button>
          ))}
        </div>
        <motion.div
          key={tab}
          initial={{ opacity: demo.reduced ? 1 : 0, y: demo.reduced ? 0 : 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="dash-main"
          aria-live={demo.playing ? "off" : "polite"}
          onClick={() => demo.setPaused(true)}
        >
          {tab === "Pipeline" ? (
            <>
              <div className="pipeline-row head">
                <span>Enquiry</span>
                <span>Stage</span>
                <span>Next action</span>
              </div>
              <div className="pipeline-row">
                <span>
                  Solar installation
                  <br />
                  <small className="muted">Example customer</small>
                </span>
                <span className="demo-status">
                  {frame === 0 ? "New enquiry" : "Qualified"}
                </span>
                <span>
                  {frame === 0 ? "Gather requirements" : "Arrange site visit"}
                </span>
              </div>
              <div className="pipeline-row">
                <span>Conversation summary</span>
                <span>
                  {frame === 0 ? "Capturing details" : "Ready for review"}
                </span>
                <span>Open customer context</span>
              </div>
              <p className="dash-notice">
                Lead details, conversations, appointments and notifications can
                be brought into one view.
              </p>
            </>
          ) : tab === "Approvals" ? (
            <>
              <span className="kicker">Action awaiting your team</span>
              <h4 className="text-xl mt-4">
                Review the follow-up before it goes out.
              </h4>
              <p className="muted text-sm mt-3 leading-relaxed">
                “Thanks for your enquiry. Let’s arrange the site visit so the
                team can prepare your quote.”
              </p>
              <div className="dash-actions">
                <button
                  onClick={() =>
                    setAction("Approved in this example. Nothing was sent.")
                  }
                >
                  Approve example
                </button>
                <button
                  onClick={() =>
                    setAction("Held for human review. Nothing was sent.")
                  }
                >
                  Hold for review
                </button>
                <button
                  onClick={() =>
                    setAction(
                      "Follow-up task added to this example. Nothing was scheduled externally.",
                    )
                  }
                >
                  Schedule follow-up
                </button>
              </div>
              <p className="dash-notice" role="status">
                {action}
              </p>
            </>
          ) : (
            <div className="dash-report">
              {[
                [
                  "Response time",
                  "See the interval between an enquiry and the first reply.",
                ],
                [
                  "Funnel progress",
                  "Review movement from capture to booking or quote.",
                ],
                ["Follow-up", "Spot the next action and who needs to take it."],
              ].map(([t, d]) => (
                <div key={t}>
                  <h4>{t}</h4>
                  <p>{d}</p>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
