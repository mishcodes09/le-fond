import { Icon } from "@/components/ui/Icon";
import Link from "next/link";
import { ContactButton } from "@/components/ui/ContactButton";
import { Workflow, Dashboard } from "./Workflow";
import { CustomerCareCard } from "./CustomerCareCard";
import { PriceCard } from "./GrowthPages";

function MiniSite({ type = "solar" }) {
  const commerce = type === "commerce";
  return (
    <div className={`mini-site mini-${type}`} aria-hidden="true">
      <div className="mini-nav">
        <b>LE FOND</b>
        <span>
          Example system <Icon name="arrowUpRight" />
        </span>
      </div>
      <div className="mini-page">
        <span className="mini-label">
          {commerce ? "COMMERCE GROWTH" : "A CLEARER NEXT STEP"}
        </span>
        <h3>
          {commerce ? (
            <>
              Made for
              <br />
              the everyday.
            </>
          ) : type === "dental" ? (
            <>
              Your next
              <br />
              appointment.
            </>
          ) : (
            <>
              Power your
              <br />
              next chapter.
            </>
          )}
        </h3>
        <div className="mini-art">
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
        <span className="mini-cta">
          {commerce
            ? "Discover the collection"
            : type === "dental"
              ? "Request an appointment"
              : "Request a solar quote"}{" "}
          <Icon name="arrowUpRight" />
        </span>
        <div className="mini-columns">
          <span>Clear information</span>
          <span>A simple next step</span>
          <span>Connected follow-up</span>
        </div>
      </div>
    </div>
  );
}
function Collage() {
  return (
    <div
      className="sf-collage"
      aria-label="Illustrative Le Fond landing page, booking and lead pipeline designs"
    >
      <div className="collage-sheet sheet-one">
        <MiniSite />
      </div>
      <div className="collage-sheet sheet-two">
        <MiniSite type="dental" />
      </div>
      <div className="collage-pipeline">
        <small>LE FOND / PIPELINE</small>
        <strong>
          Every enquiry.
          <br />A next step.
        </strong>
        <div>
          <i /> New enquiry <b>Captured</b>
        </div>
        <div>
          <i /> Site visit <b>To arrange</b>
        </div>
        <div>
          <i /> Quote follow-up <b>Scheduled</b>
        </div>
      </div>
      <span className="collage-caption">LE FOND SYSTEMS · DESIGN CONCEPTS</span>
    </div>
  );
}
function SectionTitle({ small, children }) {
  return (
    <div className="sf-heading">
      <p>{small}</p>
      <h2>{children}</h2>
    </div>
  );
}
function Callout() {
  return (
    <div className="sf-callout">
      <span className="sf-badge">CAPTURE. QUALIFY. BOOK. FOLLOW UP.</span>
      <h2>
        Give your next enquiry
        <br />
        somewhere to go.
      </h2>
      <p>Let’s connect your website, your follow-up and your team.</p>
      <ContactButton label="Book a Discovery Call" />
      <Link href="/contact" className="sf-small-link">
        Or tell us about your business <Icon name="arrowUpRight" />
      </Link>
    </div>
  );
}
export function StudioHome() {
  return (
    <div className="sf-home">
      <section className="sf-hero sf-wide" id="hero">
        <div className="sf-hero-copy">
          <span className="sf-badge">
            LEAD SYSTEMS FOR SOUTH AFRICAN BUSINESS
          </span>
          <h1>
            Turn enquiries
            <br />
            into bookings.
            <br />
            Keep quotes
            <br />
            moving.
          </h1>
          <p>
            We build the websites, funnels and follow-up systems that move
            service businesses from customer interest to the next conversation.
          </p>
          <ContactButton label="Build My Lead System" />
          <div className="sf-checks">
            <span>
              <Icon name="check" /> Connected follow-up
            </span>
            <span>
              <Icon name="check" /> Humans in control
            </span>
            <span>
              <Icon name="check" /> Clear next steps
            </span>
          </div>
        </div>
        <Collage />
      </section>
      <div
        className="sf-sector-strip sf-wide"
        aria-label="Industries we build systems for"
      >
        <span>Built around your business</span>
        <b>Healthcare</b>
        <b>Home services</b>
        <b>Solar & security</b>
        <b>Professional services</b>
        <b>B2B</b>
      </div>

      <section className="sf-section" id="services">
        <div className="sf-container">
          <SectionTitle small="A system for what happens next.">
            More clarity. Less chasing.
            <br />
            Better follow-through.
          </SectionTitle>
          <div className="sf-benefits">
            <article>
              <span className="sf-card-number">01 / CAPTURE</span>
              <h3>
                Give every enquiry
                <br />a clear way in.
              </h3>
              <p>
                Focused landing pages, websites and forms bring interest into
                one organised pipeline.
              </p>
              <div className="benefit-form" aria-hidden="true">
                <span>What can we help with?</span>
                <div>
                  Solar installation{" "}
                  <b>
                    <Icon name="chevronDown" />
                  </b>
                </div>
                <div>
                  Your contact details{" "}
                  <b>
                    <Icon name="arrowUpRight" />
                  </b>
                </div>
                <strong>
                  Enquiry captured <Icon name="check" />
                </strong>
              </div>
              <a href="#system">
                See the journey <Icon name="arrowUpRight" />
              </a>
            </article>
            <article className="sf-benefit-dark">
              <span className="sf-card-number">02 / CONVERT</span>
              <h3>
                A conversation
                <br />
                with direction.
              </h3>
              <p>
                Qualification, booking and quote workflows give your team the
                context to take the next step.
              </p>
              <div className="benefit-booking" aria-hidden="true">
                <small>NEXT STEP</small>
                <strong>Let’s find a time.</strong>
                <div>
                  <span>
                    Tue
                    <br />
                    <b>14:00</b>
                  </span>
                  <span>
                    Wed
                    <br />
                    <b>10:00</b>
                  </span>
                </div>
                <p>Example appointment options</p>
              </div>
              <a href="#system">
                See the journey <Icon name="arrowUpRight" />
              </a>
            </article>
            <article>
              <span className="sf-card-number">03 / FOLLOW THROUGH</span>
              <h3>
                Keep the follow-up
                <br />
                from falling away.
              </h3>
              <p>
                WhatsApp, email and reminders keep appointments and quotes
                moving. Your team stays in control.
              </p>
              <div className="benefit-messages" aria-hidden="true">
                <span>Thanks, your request is with the team.</span>
                <span>Here’s a reminder about your appointment.</span>
                <span>
                  A person takes over when needed. <Icon name="arrowUpRight" />
                </span>
              </div>
              <a href="#ai">
                See how handoff works <Icon name="arrowUpRight" />
              </a>
            </article>
          </div>
          <p className="sf-caption">
            Illustrative system designs. No client results or live customer
            data.
          </p>
        </div>
      </section>

      <section className="sf-section" id="problem">
        <div className="sf-container">
          <SectionTitle small="The gap we help close.">
            Getting enquiries is half the job.
            <br />
            What happens next matters.
          </SectionTitle>
          <div className="sf-comparison">
            <div>
              <span>WHEN THE PROCESS IS DISCONNECTED</span>
              <h3>
                Interest arrives.
                <br />
                Then it gets lost.
              </h3>
              <ul>
                <li>Messages across different channels</li>
                <li>The same questions answered by hand</li>
                <li>Quotes sent without a next step</li>
                <li>No clear owner or shared view</li>
              </ul>
            </div>
            <div>
              <span className="sf-badge">WITH A LE FOND SYSTEM</span>
              <h3>
                Captured. Qualified.
                <br />
                Ready for action.
              </h3>
              <ul>
                <li>A central place for enquiries</li>
                <li>Useful information gathered upfront</li>
                <li>Booking and quote follow-up built in</li>
                <li>Human handoff and visible progress</li>
              </ul>
            </div>
          </div>
          <div className="sf-editorial">
            <h3>
              One connected process.
              <br />
              Built around your business.
            </h3>
            <p>
              We connect acquisition, customer communication and the work your
              team does next. The technology serves the process: a clearer
              experience for your customer and less manual chasing for your
              business.
            </p>
          </div>
        </div>
      </section>

      <section className="sf-section" id="examples">
        <div className="sf-container">
          <SectionTitle small="See what the system can look like.">
            Different businesses.
            <br />
            Thoughtfully connected journeys.
          </SectionTitle>
          <div className="sf-showcases">
            <article>
              <a
                className="sf-showcase-visual solar-scene"
                href="#system"
                aria-label="Explore the solar quote example"
              >
                <MiniSite />
                <span className="sf-floating-label">
                  Enquiry <Icon name="arrowRight" /> Site visit{" "}
                  <Icon name="arrowRight" /> Quote
                </span>
              </a>
              <span className="sf-caption">01 / EXAMPLE WORKFLOW</span>
              <h3>A solar enquiry with a clear route to a qualified quote.</h3>
              <p>
                Capture property details, arrange the next conversation and keep
                quote follow-up visible.
              </p>
              <a className="sf-small-link" href="#system">
                Explore the lead system <Icon name="arrowUpRight" />
              </a>
            </article>
            <article>
              <a
                className="sf-showcase-visual dental-scene"
                href="#system"
                aria-label="Explore the appointment example"
              >
                <MiniSite type="dental" />
                <span className="sf-floating-label">
                  Enquiry <Icon name="arrowRight" /> Appointment{" "}
                  <Icon name="arrowRight" /> Reminder
                </span>
              </a>
              <span className="sf-caption">02 / EXAMPLE WORKFLOW</span>
              <h3>
                Appointment requests that keep the reception team in control.
              </h3>
              <p>
                Gather booking details, offer approved next steps and route
                sensitive questions to a person.
              </p>
              <a className="sf-small-link" href="#system">
                Explore the appointment flow <Icon name="arrowUpRight" />
              </a>
            </article>
            <article>
              <div className="sf-showcase-visual pipeline-scene">
                <div className="showcase-command">
                  <small>LE FOND / COMMAND CENTRE</small>
                  <h4>
                    A clearer view
                    <br />
                    of what’s next.
                  </h4>
                  <div>
                    <span>Enquiry</span>
                    <span>Next action</span>
                  </div>
                  <div>
                    <b>Solar installation</b>
                    <span>
                      Arrange site visit <Icon name="arrowUpRight" />
                    </span>
                  </div>
                  <div>
                    <b>Consultation request</b>
                    <span>
                      Team review <Icon name="arrowUpRight" />
                    </span>
                  </div>
                  <p>Optional dashboard concept · Example data</p>
                </div>
              </div>
              <span className="sf-caption">03 / OPTIONAL CAPABILITY</span>
              <h3>
                Customer context, conversations and approvals in one view.
              </h3>
              <p>
                A custom dashboard can give your team visibility. Scoped
                separately when your workflow needs it.
              </p>
              <a className="sf-small-link" href="#dashboard">
                Try the dashboard example <Icon name="arrowUpRight" />
              </a>
            </article>
            <article>
              <Link
                className="sf-showcase-visual commerce-scene"
                href="/commerce"
                aria-label="Explore Commerce Growth"
              >
                <MiniSite type="commerce" />
                <span className="sf-floating-label">
                  Checkout <Icon name="arrowRight" /> Follow-up{" "}
                  <Icon name="arrowRight" /> Return
                </span>
              </Link>
              <span className="sf-caption">04 / COMMERCE GROWTH</span>
              <h3>A store experience that follows through after the click.</h3>
              <p>
                Shopify and WooCommerce improvements, cart recovery and customer
                lifecycle automation.
              </p>
              <Link className="sf-small-link" href="/commerce">
                Explore Commerce Growth <Icon name="arrowUpRight" />
              </Link>
            </article>
          </div>
        </div>
      </section>
      <div className="sf-container">
        <Callout />
      </div>

      <section className="sf-section" id="system">
        <div className="sf-container">
          <SectionTitle small="Follow one enquiry through the system.">
            Capture. Qualify. Book.
            <br />
            Keep the conversation moving.
          </SectionTitle>
          <Workflow />
        </div>
      </section>
      <section className="sf-section" id="ai">
        <div className="sf-container">
          <CustomerCareCard />
        </div>
      </section>
      <section className="sf-section" id="dashboard">
        <span id="results" />
        <span id="case-study" />
        <div className="sf-container">
          <SectionTitle small="An optional command centre.">
            Your customer pipeline.
            <br />
            In view.
          </SectionTitle>
          <p className="sf-centred-copy">
            A custom dashboard is a premium add-on, scoped separately. Explore
            this example of pipeline visibility, approvals and reporting.
          </p>
          <Dashboard />
        </div>
      </section>

      <section className="sf-section" id="how-it-works">
        <div className="sf-container">
          <SectionTitle small="How we work.">
            A clear process.
            <br />
            From first conversation to launch.
          </SectionTitle>
          <div className="sf-process">
            {[
              [
                "Audit",
                "Map the enquiry journey and identify where it breaks down.",
              ],
              [
                "Build",
                "Create the capture points, funnel and agreed automation.",
              ],
              [
                "Connect",
                "Bring CRM, calendar, communication and reporting together.",
              ],
              [
                "Optimise",
                "Review the handoffs and improve the system over time.",
              ],
            ].map(([t, d], i) => (
              <article key={t}>
                <span>0{i + 1}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="sf-section" id="investment">
        <div className="sf-container">
          <SectionTitle small="Pricing.">
            A practical starting point.
            <br />A scope that fits.
          </SectionTitle>
          <div className="pricing-grid">
            <PriceCard />
            <PriceCard type="engine" />
          </div>
          <p className="pricing-note">
            Indicative pricing, based on agreed scope. Software licences,
            messaging usage and advertising spend may be additional. Applicable
            VAT is confirmed in the proposal. Custom dashboards are separately
            scoped. No lead volume or revenue is guaranteed.
          </p>
          <Link href="/commerce#investment" className="sf-small-link">
            Commerce Growth: R45,000–R90,000 setup + R8,000–R18,000 / month{" "}
            <Icon name="arrowUpRight" />
          </Link>
        </div>
      </section>
      <section className="sf-section" id="industries">
        <div className="sf-container">
          <SectionTitle small="One system. Adapted to your business.">
            Built for the way
            <br />
            your customers enquire.
          </SectionTitle>
          <div className="sf-industry-pills">
            {[
              "Healthcare",
              "Dental",
              "Home services",
              "Solar & security",
              "Professional services",
              "B2B",
            ].map((t) => (
              <a key={t} href="#system">
                {t}
                <span>
                  <Icon name="arrowUpRight" />
                </span>
              </a>
            ))}
          </div>
          <p className="sf-centred-copy">
            Appointment, quote, job request or consultation. We shape the
            questions, routing and follow-up around your business.
          </p>
        </div>
      </section>
      <section className="sf-section">
        <div className="sf-container sf-faq">
          <SectionTitle small="More information.">
            Good questions.
            <br />
            Clear answers.
          </SectionTitle>
          <div className="faq">
            {[
              [
                "Do you generate leads or handle them?",
                "Both can form part of the scope. The core system connects acquisition and landing pages with lead capture, qualification, booking and follow-up. Advertising spend is separate.",
              ],
              [
                "Do we need a new website or CRM?",
                "We assess the tools you already use. Improvements and integrations may be enough; a rebuild is recommended only where the agreed scope calls for it.",
              ],
              [
                "Does AI replace our team?",
                "No. It assists with repeatable communication within agreed boundaries. Uncertain or sensitive conversations are handed to the business.",
              ],
              [
                "What happens after launch?",
                "Ongoing monitoring, reporting and improvement are agreed in your monthly scope. Support expectations, software costs and responsibilities are set out in the proposal.",
              ],
              [
                "How do we get started?",
                "Book a 30-minute discovery call through Calendly, or contact us on WhatsApp or email to discuss your lead system or request an audit.",
              ],
            ].map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="sf-container sf-last">
        <Callout />
      </section>
    </div>
  );
}
