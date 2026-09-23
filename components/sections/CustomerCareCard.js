import { Icon } from "@/components/ui/Icon";
function Person({ headset = false }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="50" cy="35" r="16" />
      <path d="M20 91V78c0-17 13-27 30-27s30 10 30 27v13M38 54l12 13 12-13" />
      {headset && (
        <>
          <path d="M27 37v-5a23 23 0 0146 0v5M73 43v7c0 7-7 10-14 10" />
          <rect x="23" y="31" width="7" height="17" rx="3" />
          <rect x="70" y="31" width="7" height="17" rx="3" />
        </>
      )}
    </svg>
  );
}
function RoutineDiagram() {
  return (
    <svg
      viewBox="0 0 360 125"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="20" y="16" width="97" height="100" rx="10" />
      <rect x="47" y="9" width="44" height="15" rx="4" fill="var(--panel)" />
      <path d="M33 55h69M33 80h69" opacity=".25" />
      <path d="M130 65h35m-8-7 8 7-8 7" />
      <rect x="186" y="20" width="145" height="92" rx="12" />
      <path d="M186 44h145M212 10v21M305 10v21" />
      <g opacity=".3">
        <circle cx="207" cy="62" r="1" />
        <circle cx="230" cy="62" r="1" />
        <circle cx="253" cy="62" r="1" />
        <circle cx="207" cy="83" r="1" />
        <circle cx="230" cy="83" r="1" />
      </g>
      <circle cx="284" cy="88" r="24" fill="var(--panel)" />
      <path d="m273 88 7 7 15-17" />
    </svg>
  );
}
function HandoffDiagram() {
  return (
    <div className="care-handoff-art" aria-hidden="true">
      <svg
        viewBox="0 0 190 125"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="18" y="23" width="104" height="88" rx="9" />
        <rect
          x="26"
          y="14"
          width="104"
          height="88"
          rx="9"
          fill="var(--panel)"
        />
        <rect x="39" y="29" width="18" height="16" rx="3" />
        <path d="M69 36h45M39 61h75M39 79h56" opacity=".3" />
        <path d="M144 64h34m-8-7 8 7-8 7" />
      </svg>
      <Person headset />
    </div>
  );
}
export function CustomerCareCard() {
  return (
    <article className="care-system" aria-labelledby="care-title">
      <header className="care-top">
        <span className="kicker">Customer care / system card</span>
        <span className="care-status">
          <i aria-hidden="true" />
          Human in control
        </span>
      </header>
      <div className="care-intro">
        <div>
          <h2 id="care-title">
            Routine help.
            <br />
            Human judgement.
          </h2>
          <p>
            An assistant handles the routine. Your team steps in when a
            conversation needs judgement.
          </p>
        </div>
        <div className="care-person">
          <Person headset />
        </div>
      </div>
      <div className="care-request">
        <div className="care-avatar">
          <Person />
        </div>
        <div>
          <span className="kicker">01 / Customer request</span>
          <p>“Can I arrange a consultation?”</p>
        </div>
      </div>
      <div className="care-gateway">
        <span className="kicker">02 / Approved workflow</span>
      </div>
      <div className="care-paths">
        <section className="care-path">
          <div className="care-path-label">
            <span className="kicker">Routine question</span>
            <span aria-hidden="true">
              <Icon name="dot" />
            </span>
          </div>
          <div className="care-diagram">
            <RoutineDiagram />
          </div>
          <h3>Assistant helps.</h3>
          <ul>
            <li>Capture consultation type</li>
            <li>Ask for a suitable time</li>
            <li>Check approved availability</li>
          </ul>
          <p className="care-note">Nothing is confirmed yet.</p>
        </section>
        <section className="care-path">
          <div className="care-path-label">
            <span className="kicker">Needs a person</span>
            <span aria-hidden="true">
              <Icon name="circle" />
            </span>
          </div>
          <div className="care-diagram">
            <HandoffDiagram />
          </div>
          <h3>A person takes over.</h3>
          <p>Sensitive question or judgement needed? Hand over to your team.</p>
          <div className="care-context">
            <span className="kicker">Handover context</span>
            <p>Request + details already shared</p>
          </div>
        </section>
      </div>
      <div className="care-merge" aria-hidden="true">
        <Icon name="arrowDown" />
      </div>
      <div className="care-confirm">
        <div className="care-avatar">
          <Person />
        </div>
        <div>
          <span className="kicker">03 / Human confirmation</span>
          <h3>Your team confirms the next step.</h3>
          <p>
            Important decisions and sensitive questions stay with your team.
          </p>
        </div>
      </div>
      <footer className="care-footer">
        <span>lefondstudio.co.za</span>
        <span className="kicker">Illustrative workflow</span>
      </footer>
    </article>
  );
}
