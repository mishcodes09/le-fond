import { Icon } from "@/components/ui/Icon";
import Link from "next/link";
import { ContactButton } from "@/components/ui/ContactButton";
import { EnquiryForm } from "@/components/ui/EnquiryForm";
import { HeroLead, Workflow, AIAssistant, Dashboard } from "./Workflow";
function Top({ label, index }) {
  return (
    <div className="section-top">
      <p className="kicker">{label}</p>
      <span className="section-index">{index} / LE FOND</span>
    </div>
  );
}
export function ContactSection({ commerce = false }) {
  return (
    <section id="contact" className="final-cta">
      <div className="wrap">
        <Top label="Make the next enquiry count" index="LET’S TALK" />
        <h2 className="headline">
          {commerce ? (
            <>
              Make the next click
              <br />
              <span className="muted">a clearer journey.</span>
            </>
          ) : (
            <>
              Your next enquiry
              <br />
              deserves <span className="muted">a system.</span>
            </>
          )}
        </h2>
        <div className="bottom">
          <p className="lede">
            {commerce
              ? "Let’s look at your store, your customer journey and where the follow-through could work harder."
              : "Show us how enquiries reach your business. We’ll help define the funnel, the follow-up and a practical starting scope."}
          </p>
          <div className="actions">
            <ContactButton label="Book a Discovery Call" />
            <ContactButton channel="audit" secondary />
          </div>
        </div>
      </div>
    </section>
  );
}
const pricing = {
  capture: {
    name: "Enquiry Essentials",
    label: "Give every enquiry a clear way in.",
    setup: "From R7,500 once-off",
    description:
      "For businesses that need a focused page and an organised place to manage enquiries.",
    items: [
      "One landing page for one service or offer",
      "Enquiry form and WhatsApp contact button",
      "Simple lead pipeline to track enquiries",
      "Automatic email confirmation for form submissions",
      "Basic enquiry tracking and a team handover session",
      "30 days of support for the delivered setup",
    ],
    note: "No ongoing management fee required. Hosting and any required software are quoted separately.",
    cta: "Start with the essentials",
  },
  engine: {
    name: "Booking & Follow-Up",
    label: "Make it easier to book. Make follow-up consistent.",
    setup: "From R12,500 once-off",
    description:
      "For businesses receiving enquiries but losing time and opportunities between first contact, appointments and quotes.",
    includes: "Everything in Enquiry Essentials, plus:",
    items: [
      "Qualification questions to collect useful details upfront",
      "One booking or quote-request workflow",
      "One automated follow-up sequence through email or WhatsApp",
      "Clear lead stages and handoff to your team",
      "Appointment or quote reminders within the agreed workflow",
      "Team training and 30 days of launch support",
    ],
    note: "Optional ongoing care from R1,500/month: workflow checks, troubleshooting and one small adjustment each month.",
    cta: "Improve my follow-up",
  },
  growth: {
    name: "Lead Generation & Growth",
    label: "Bring in enquiries. Give each one a next step.",
    setup: "From R15,000 setup",
    monthly: "+ R3,500/month",
    description:
      "For businesses ready to advertise one service and improve the journey from first click to qualified enquiry.",
    items: [
      "One campaign landing page",
      "Campaign setup and management on Google Ads or Meta",
      "Lead capture, qualification and a simple pipeline",
      "One booking or quote-request workflow",
      "One follow-up sequence",
      "Conversion tracking",
      "Monthly campaign improvements and a plain-language results review",
    ],
    note: "Advertising spend is separate and paid directly to the advertising platform.",
    extra:
      "Already have a suitable website or lead system? We’ll quote for the work you actually need.",
    cta: "Plan my lead campaign",
  },
};
export function PriceCard({ type = "capture" }) {
  const p = pricing[type];
  return (
    <article className={`price-card ${type === "engine" ? "featured" : ""}`}>
      {type === "engine" && (
        <span className="package-highlight">
          For businesses already getting enquiries
        </span>
      )}
      <h3>{p.name}</h3>
      <p className="package-tagline">{p.label}</p>
      <p>{p.description}</p>
      <div className="price-numbers">
        <strong>{p.setup}</strong>
        {p.monthly && (
          <p className="monthly">
            {p.monthly}
            <small>Campaign management</small>
          </p>
        )}
      </div>
      {p.includes && <p className="package-includes">{p.includes}</p>}
      <ul>
        {p.items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
      <div className="package-costs">
        <p>{p.note}</p>
        {p.extra && <p>{p.extra}</p>}
      </div>
      <div className="actions">
        <ContactButton label={p.cta} secondary={type !== "engine"} />
      </div>
    </article>
  );
}
export function PricingNote() {
  return (
    <div className="pricing-scope">
      <h3>Payment & scope</h3>
      <ul>
        <li>Setup payments: 50% upfront and 50% at launch.</li>
        <li>
          Starting prices cover one business, one service or offer, and the
          workflows listed. Your proposal confirms deliverables and the full
          cost before work begins.
        </li>
        <li>
          Hosting, software and messaging costs are itemised where required.
          Advertising spend, additional pages, creative production, extra
          channels and custom integrations are separate.
        </li>
        <li>Any applicable VAT is shown in your quote.</li>
        <li>
          Your team handles sales conversations and important decisions. Lead
          volumes and sales results are not guaranteed.
        </li>
      </ul>
      <p>
        Full websites and complex integrations are available as separately
        quoted work. Ongoing service terms are confirmed in your proposal.
      </p>
    </div>
  );
}
export const pricingFAQs = [
  [
    "Do you generate leads or handle them?",
    "Enquiry Essentials and Booking & Follow-Up help capture and manage enquiries. Lead Generation & Growth also includes paid campaign management on Google Ads or Meta to attract enquiries.",
  ],
  [
    "Do I have to pay a monthly fee?",
    "Enquiry Essentials and Booking & Follow-Up are once-off setups. Ongoing care is optional, and hosting or software costs may continue. Lead Generation & Growth includes monthly campaign management at R3,500/month.",
  ],
  [
    "Is advertising spend included?",
    "No. Advertising spend is separate and paid directly to Google Ads or Meta.",
  ],
  [
    "Do I need a new website?",
    "Not necessarily. We can use suitable existing pages and lead systems, and your proposal reflects the work you actually need. Full websites and complex integrations are quoted separately.",
  ],
  [
    "What happens after launch?",
    "The two once-off packages include 30 days of support for the delivered setup. Optional ongoing care starts at R1,500/month for workflow checks, troubleshooting and one small adjustment each month. Lead Generation & Growth includes ongoing campaign management, monthly improvements and a results review.",
  ],
  [
    "How do payments work?",
    "Setup payments are 50% upfront and 50% at launch. Ongoing fees, billing dates and service terms are confirmed in your proposal.",
  ],
  [
    "Does AI replace our team?",
    "No. Automation and AI support repeatable tasks within agreed boundaries. Your team handles sales conversations and important decisions; uncertain or sensitive conversations are handed to a person.",
  ],
  [
    "How do we get started?",
    "Book a 15-minute discovery call through Cal.com, or contact us on WhatsApp or email to discuss your business.",
  ],
];
const industries = [
  [
    "Healthcare",
    "Capture enquiries and route appointment requests to the right team.",
    "Patient enquiry",
    "Appointment",
  ],
  [
    "Dental",
    "Gather booking details and keep appointment communication organised.",
    "Dental enquiry",
    "Booking",
  ],
  [
    "Home Services",
    "Qualify plumbing, electrical and construction requests before the next visit.",
    "Job request",
    "Qualified brief",
  ],
  [
    "Solar & Security",
    "Capture high-value enquiries and keep site visits and quote follow-up moving.",
    "Quote enquiry",
    "Site visit",
  ],
  [
    "Professional Services",
    "Turn website enquiries into clearly scoped consultations.",
    "Service enquiry",
    "Consultation",
  ],
  [
    "B2B",
    "Capture, qualify and route inbound enquiries with the right business context.",
    "Inbound lead",
    "Sales handoff",
  ],
];
export function HomePage() {
  return (
    <>
      <section className="hero" id="hero">
        <div className="wrap">
          <div className="hero-top">
            <p className="kicker">Independent systems studio · South Africa</p>
            <span className="section-index">EST. WITH INTENT</span>
          </div>
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="hero-wordmark" aria-hidden="true">
                LE FOND
              </p>
              <h1>
                We build the space
                <br />
                <span className="quiet">between interest</span>
                <br />
                and action.
              </h1>
              <p className="lede">
                Le Fond is a small, focused studio that designs the systems
                behind better customer journeys—from the first enquiry to the
                booked appointment, qualified quote and follow-up that keeps
                things moving.
              </p>
              <div className="actions">
                <ContactButton label="Start a project" />
                <a href="#system" className="text-link">
                  See the system <span aria-hidden="true">↓</span>
                </a>
              </div>
              <p className="hero-note">
                Strategy · Experience · Automation · Care
              </p>
            </div>
            <div className="hero-object">
              <div className="signal-orbit" aria-hidden="true">
                <span className="orbit orbit-one" />
                <span className="orbit orbit-two" />
                <span className="orbit-dot" />
                <strong>Interest</strong>
                <em>Action</em>
              </div>
              <HeroLead />
            </div>
          </div>
          <div className="hero-strip">
            <span>
              <b>01</b> Capture the lead
            </span>
            <span>
              <b>02</b> Qualify the enquiry
            </span>
            <span>
              <b>03</b> Book or quote
            </span>
            <span>
              <b>04</b> Keep following up
            </span>
          </div>
        </div>
      </section>
      <section className="section" id="problem">
        <div className="wrap">
          <Top label="The part that usually gets lost" index="01" />
          <h2 className="headline problem-title">
            Attention is easy to count.
            <br />
            <span>Progress takes a system.</span>
          </h2>
          <div className="problem-bottom">
            <p className="lede">
              A website can attract attention and still leave the business doing
              all the hard work by hand. Le Fond brings order to what happens
              after someone raises their hand.
            </p>
            <div className="problem-list">
              {[
                [
                  "Too many channels",
                  "Forms, calls and messages. No shared view.",
                ],
                [
                  "Too much manual work",
                  "The same questions. The same reminders.",
                ],
                [
                  "Too little follow-up",
                  "A quote sent. A conversation left hanging.",
                ],
                [
                  "Too little visibility",
                  "No clear owner, next step or useful reporting.",
                ],
              ].map(([t, d]) => (
                <p key={t}>
                  <b>{t}</b>
                  {d}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section section-soft" id="system">
        <div className="wrap">
          <Top label="The Le Fond lead system" index="02" />
          <div className="workflow-intro">
            <h2 className="headline">
              Your funnel shouldn’t
              <br />
              <span className="muted">stop at the enquiry.</span>
            </h2>
            <p className="lede">
              See how one enquiry becomes a clear next action. The industry
              changes. The connected process stays.
            </p>
          </div>
          <Workflow />
        </div>
      </section>
      <section className="section" id="services">
        <div className="wrap">
          <Top label="Three parts. One connected service." index="03" />
          <h2 className="headline">
            Capture. Convert.
            <br />
            <span className="muted">Follow through.</span>
          </h2>
          <div className="solutions-grid">
            {[
              [
                "01",
                "Capture",
                "Give interest a clear way in.",
                [
                  "Conversion-focused landing pages & websites",
                  "Advertising-to-landing-page funnels",
                  "Enquiry forms & quote requests",
                  "Organised lead capture",
                ],
              ],
              [
                "02",
                "Convert",
                "Move the conversation towards action.",
                [
                  "Lead qualification & routing",
                  "Appointment & consultation booking",
                  "Quote workflows & sales funnels",
                  "CRM stages & customer context",
                ],
              ],
              [
                "03",
                "Follow Through",
                "Keep the next step from getting lost.",
                [
                  "WhatsApp & email workflows",
                  "Appointment reminders & quote follow-up",
                  "AI-assisted customer care & notifications",
                  "CRM updates & useful reporting",
                ],
              ],
            ].map(([n, t, d, items]) => (
              <article className="solution" key={t}>
                <span className="kicker">{n} / THE SYSTEM</span>
                <h3>{t}</h3>
                <p>{d}</p>
                <ul>
                  {items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="actions">
            <ContactButton />
            <span className="muted text-xs">
              Acquisition and follow-up, scoped together.
            </span>
          </div>
        </div>
      </section>
      <section className="studio-statement" id="studio">
        <div className="wrap studio-grid">
          <div className="studio-mark" aria-hidden="true">
            <span>LF</span>
          </div>
          <div>
            <Top label="A small studio by design" index="04" />
            <h2 className="headline">
              Close to the work.
              <br />
              <span className="muted">Clear about the outcome.</span>
            </h2>
            <div className="studio-copy">
              <p className="lede">
                We work on a focused number of systems at a time. That keeps the
                thinking sharp, the communication direct and the people making
                decisions close to the people building the work.
              </p>
              <p>
                Every engagement starts with the real customer journey. We use
                design, code and automation where each one improves that
                journey. The result should feel considered to the customer and
                practical to the team running it.
              </p>
            </div>
            <div className="studio-principles">
              <span>Useful over impressive</span>
              <span>Human at the handoff</span>
              <span>Built to be operated</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-soft" id="ai">
        <div className="wrap split">
          <div>
            <Top label="Useful automation. Clear boundaries." index="05" />
            <h2 className="headline">
              AI where it helps.
              <br />
              <span className="muted">
                Humans where
                <br />
                it matters.
              </span>
            </h2>
            <p className="lede">
              Answer common questions, capture details and arrange the next step
              through your website or WhatsApp. When a conversation needs
              judgement, your team takes over with the context already in place.
            </p>
            <div className="ai-points">
              <span>FAQ handling</span>
              <span>Qualification</span>
              <span>Scheduling</span>
              <span>Confirmations</span>
              <span>Human escalation</span>
            </div>
            <p className="pricing-note">
              Sensitive advice, pricing and important decisions stay with the
              business. AI works within agreed knowledge, rules and escalation
              paths.
            </p>
          </div>
          <AIAssistant />
        </div>
      </section>
      <section className="section" id="industries">
        <div className="wrap">
          <Top label="Built around the way your business works" index="06" />
          <div className="workflow-intro">
            <h2 className="headline">
              One system.
              <br />
              <span className="muted">Adapted to your business.</span>
            </h2>
            <p className="lede">
              Different customers. Different questions. The same need for a
              reliable path from enquiry to action.
            </p>
          </div>
          <div className="industries-grid">
            {industries.map(([t, d, a, b]) => (
              <article className="industry-card" key={t}>
                <h3>{t}</h3>
                <p>{d}</p>
                <div className="industry-path">
                  <span>{a}</span>
                  <Icon name="arrowRight" />
                  <span>{b}</span>
                </div>
              </article>
            ))}
          </div>
          <p className="pricing-note">
            Illustrative use cases. Workflows are scoped to your business; these
            are not client results. Healthcare and other sensitive enquiries are
            routed to qualified people.
          </p>
        </div>
      </section>
      <section className="section section-soft" id="dashboard">
        <span id="results" aria-hidden="true" />
        <span id="case-study" aria-hidden="true" />
        <div className="wrap">
          <Top label="Optional dashboard capability" index="07" />
          <div className="workflow-intro">
            <h2 className="headline">
              A command centre
              <br />
              <span className="muted">for your customer pipeline.</span>
            </h2>
            <div>
              <p className="lede">
                When your workflow needs more visibility, a custom dashboard can
                bring leads, conversations, approvals, tasks and reporting
                together.
              </p>
              <p className="pricing-note">
                Premium add-on. Separately scoped and quoted. A custom app is
                not included in every package.
              </p>
            </div>
          </div>
          <Dashboard />
        </div>
      </section>
      <section className="section" id="how-it-works">
        <div className="wrap">
          <Top label="How we work" index="08" />
          <h2 className="headline">
            From a disconnected process
            <br />
            <span className="muted">to a working system.</span>
          </h2>
          <div className="process-grid">
            {[
              [
                "Audit",
                "Understand where enquiries come from, what happens next and where the process breaks down.",
              ],
              [
                "Build",
                "Create the funnel, capture points and automation around one clearly defined workflow.",
              ],
              [
                "Connect",
                "Bring CRM, calendar, customer communication and reporting into the same process.",
              ],
              [
                "Optimise",
                "Monitor the system, review the handoffs and improve the agreed measures over time.",
              ],
            ].map(([t, d], i) => (
              <article key={t}>
                <span className="kicker">0{i + 1}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
          <div className="actions">
            <ContactButton channel="audit" secondary />
          </div>
        </div>
      </section>
      <section className="section section-soft" id="investment">
        <div className="wrap">
          <Top label="A clear starting point" index="09" />
          <div className="workflow-intro">
            <h2 className="headline">
              Invest in the system
              <br />
              <span className="muted">behind the enquiry.</span>
            </h2>
            <p className="lede">
              Start with the gap you need to close. We agree the scope,
              connections and ongoing work before implementation.
            </p>
          </div>
          <div className="pricing-grid">
            <PriceCard />
            <PriceCard type="engine" />
          </div>
          <PricingNote />
          <Link className="text-link mt-5" href="/commerce#investment">
            See Commerce Growth pricing <Icon name="arrowUpRight" />
          </Link>
        </div>
      </section>
      <section className="section" id="commerce">
        <div className="wrap commerce-banner">
          <div>
            <p className="kicker">Also for established online stores</p>
            <h2 className="headline mt-6">
              Already selling online?
              <br />
              <span className="muted">Let’s tighten the funnel.</span>
            </h2>
            <p className="lede">
              Shopify and WooCommerce improvements, checkout optimisation and
              customer lifecycle automation. Turn a disconnected shopping
              journey into a clearer path to the next purchase.
            </p>
            <div className="actions">
              <Link href="/commerce" className="button secondary">
                Explore Commerce Growth <Icon name="arrowUpRight" />
              </Link>
            </div>
          </div>
          <div className="commerce-path">
            <div>
              Checkout <span>Reduce friction</span>
            </div>
            <div>
              Abandoned cart <span>Reconnect</span>
            </div>
            <div>
              Customer follow-up <span>Keep people informed</span>
            </div>
            <div>
              Repeat purchase <span>Give a reason to return</span>
            </div>
          </div>
        </div>
      </section>
      <FAQ />
      <ContactSection />
    </>
  );
}
function FAQ() {
  return (
    <section className="section">
      <div className="wrap faq-grid">
        <div>
          <p className="kicker">Before we build</p>
          <h2 className="headline mt-6">
            Good questions.
            <br />
            <span className="muted">Clear answers.</span>
          </h2>
        </div>
        <div className="faq">
          {pricingFAQs.map(([q, a]) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
export function CommercePage() {
  return (
    <>
      <section className="inner-hero">
        <div className="wrap">
          <p className="kicker">Commerce growth / Le Fond</p>
          <div className="split">
            <div>
              <h1>
                Make the journey
                <br />
                <span className="muted">
                  after the click
                  <br />
                  work harder.
                </span>
              </h1>
              <p className="lede">
                For established ecommerce businesses. Connect your Shopify or
                WooCommerce store with clearer checkout journeys, cart recovery
                and customer follow-up.
              </p>
              <div className="actions">
                <ContactButton label="Discuss Commerce Growth" />
                <a className="text-link" href="#investment">
                  See the investment ↓
                </a>
              </div>
            </div>
            <div className="lead-preview">
              <div className="panel-head">
                <span className="kicker">Customer lifecycle</span>
                <span className="tag">Example workflow</span>
              </div>
              <div className="commerce-path border-l-0 pl-0">
                <div>
                  Visit <span>Clear product information</span>
                </div>
                <div>
                  Checkout <span>Payment & delivery clarity</span>
                </div>
                <div>
                  Follow-up <span>Cart & order communication</span>
                </div>
                <div>
                  Return <span>Relevant lifecycle messages</span>
                </div>
              </div>
              <p className="pricing-note">
                A connected journey, not a promise of sales.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <Top label="Improve the existing funnel" index="01" />
          <h2 className="headline">
            A better store experience.
            <br />
            <span className="muted">A more useful follow-up.</span>
          </h2>
          <div className="solutions-grid">
            {[
              [
                "Convert",
                "Make the route to checkout clearer.",
                [
                  "Mobile usability & checkout optimisation",
                  "Product, delivery & payment information",
                  "Local payment and shipping fit",
                ],
              ],
              [
                "Recover",
                "Keep the conversation going.",
                [
                  "Abandoned-cart recovery",
                  "Order updates & post-purchase communication",
                  "Email and WhatsApp lifecycle flows",
                ],
              ],
              [
                "Retain",
                "Build a reason to return.",
                [
                  "Repeat-purchase and replenishment systems",
                  "Relevant customer segmentation",
                  "Conversion tests & ongoing reporting",
                ],
              ],
            ].map(([t, d, items]) => (
              <article className="solution" key={t}>
                <h3>{t}</h3>
                <p>{d}</p>
                <ul>
                  {items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-soft">
        <div className="wrap split">
          <h2 className="headline">
            Shopify or WooCommerce.
            <br />
            <span className="muted">Chosen for fit.</span>
          </h2>
          <div>
            <p className="lede">
              Your products, payment options, shipping needs and team capacity
              inform the platform decision. We assess your existing setup before
              recommending a rebuild or migration.
            </p>
            <p className="pricing-note">
              Best suited to stores with regular orders, product economics and
              the capacity to fulfil demand. Scope follows the opportunity shown
              by your data.
            </p>
          </div>
        </div>
      </section>
      <section className="section" id="investment">
        <div className="wrap split">
          <div>
            <Top label="Commerce investment" index="02" />
            <h2 className="headline">
              Connect the store.
              <br />
              <span className="muted">Keep improving it.</span>
            </h2>
            <p className="lede mt-6">
              Agree a focused audit or lifecycle pilot, then a clear
              implementation and optimisation scope.
            </p>
            <PricingNote />
          </div>
          <PriceCard type="growth" />
        </div>
      </section>
      <ContactSection commerce />
    </>
  );
}
export function AboutPage() {
  return (
    <>
      <section className="inner-hero">
        <div className="wrap">
          <p className="kicker">About Le Fond</p>
          <h1>
            Small by design.
            <br />
            <span className="muted">
              Serious about
              <br />
              what we build.
            </span>
          </h1>
          <p className="lede">
            Le Fond builds lead generation campaigns and sales funnels for
            service businesses. We connect the first click to a qualified
            enquiry, then help your team move the conversation towards a booking
            or quote.
          </p>
          <div className="actions">
            <ContactButton />
            <a href="/#system" className="text-link">
              See the system ↓
            </a>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <Top label="Our approach" index="01" />
          <h2 className="headline">
            Focused on the process.
            <br />
            <span className="muted">Grounded in your business.</span>
          </h2>
          <div className="about-principles">
            {[
              [
                "01",
                "Start with the gap",
                "Map the customer journey before choosing the technology. A website, CRM and automation should serve one clear process.",
              ],
              [
                "02",
                "Keep people in control",
                "Use automation for repeatable steps and AI for bounded assistance. Route judgement and sensitive questions to the right person.",
              ],
              [
                "03",
                "Define the work",
                "Agree the audience, campaign, funnel, responsibilities and success measures before building.",
              ],
              [
                "04",
                "Make the next step visible",
                "Build around clear ownership, useful reporting and ongoing improvements. Measure the work without inventing guarantees.",
              ],
            ].map(([n, t, d]) => (
              <article key={n}>
                <span className="kicker">{n}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
export function ContactPage() {
  return (
    <>
      <section className="inner-hero">
        <div className="wrap">
          <p className="kicker">Let’s talk about your funnel</p>
          <h1>
            The next enquiry
            <br />
            could have <span className="muted">a clearer path.</span>
          </h1>
          <p className="lede">
            Tell us where leads come from and where the process gets stuck.
            Start with a discovery call or request a review of your current
            system.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="wrap split">
          <div>
            <h2 className="subhead">
              Build around the
              <br />
              way your business works.
            </h2>
            <p className="lede">
              A useful first conversation covers your lead sources, current
              tools, team responsibilities and the handoff you want to improve.
            </p>
            <div className="actions">
              <ContactButton label="Book a Discovery Call" />
              <ContactButton channel="audit" secondary />
            </div>
            <div className="actions">
              <ContactButton
                channel="whatsapp"
                label="WhatsApp · 067 342 5533"
                secondary
              />
              <ContactButton
                channel="email"
                label="contact@lefondstudio.co.za"
                secondary
              />
            </div>
            <p className="pricing-note">
              South Africa · Book a 15-minute discovery call through Cal.com, or
              speak to us on WhatsApp or email.
            </p>
          </div>
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
export function LegalPage({ type }) {
  const privacy = type === "privacy";
  return (
    <>
      <section className="inner-hero">
        <div className="wrap">
          <p className="kicker">Website preview</p>
          <h1>{privacy ? "Privacy Policy" : "Terms"}</h1>
          <p className="lede">
            {privacy
              ? "Privacy information for this design preview."
              : "Information about using this design preview."}{" "}
            The final business policy will be provided before public launch.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="wrap prose">
          {privacy ? (
            <>
              <h2>Contact details and enquiries</h2>
              <p>
                WhatsApp and email links open the relevant communication
                service. Booking links open Cal.com. The separate audit button
                is currently a placeholder. The preview enquiry form does not
                submit or save the details entered. The interactive funnel
                demonstration uses example information.
              </p>
              <h2>Theme preference</h2>
              <p>
                The site stores your chosen dark or light theme in your
                browser’s local storage under “lefond-studio-theme”. This
                preference stays on this device and can be cleared through your
                browser settings.
              </p>
              <h2>Before collecting enquiries</h2>
              <p>
                The final policy must identify the business contact, the
                information collected, its purpose, recipients, retention
                arrangements and the way to make a privacy request. Those
                details will be supplied when the contact and form services are
                connected.
              </p>
            </>
          ) : (
            <>
              <h2>A preview, not a live service</h2>
              <p>
                This website demonstrates the proposed Le Fond services and
                design. Contact links open Cal.com, WhatsApp or your email app.
                Simulated workflows do not place orders, book appointments or
                send communications.
              </p>
              <h2>Scope and indicative pricing</h2>
              <p>
                Displayed prices are indicative and depend on agreed scope.
                Software licences, usage, media spend and applicable VAT are
                confirmed in a proposal. No lead volume, revenue or conversion
                result is guaranteed.
              </p>
              <h2>Final engagement terms</h2>
              <p>
                Project scope, deliverables, responsibilities, payment, support,
                data handling and other engagement terms must be agreed before
                work starts. This preview does not replace those agreements.
              </p>
            </>
          )}
          <div className="actions">
            <Link href="/contact" className="button secondary">
              Contact options <Icon name="arrowUpRight" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
