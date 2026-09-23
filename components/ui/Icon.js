const paths = {
  arrowUpRight: "M7 17 17 7M7 7h10v10",
  arrowRight: "M4 12h16m-6-6 6 6-6 6",
  arrowDown: "M12 4v16m-6-6 6 6 6-6",
  check: "m5 12 4 4L19 6",
  chevronDown: "m6 9 6 6 6-6",
  play: "m8 5 11 7-11 7Z",
  pause: "M8 5v14M16 5v14",
};

export function Icon({ name = "arrowUpRight", className = "" }) {
  return (
    <svg
      className={`lf-icon ${className}`}
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {name === "dot" || name === "circle" ? (
        <circle
          cx="12"
          cy="12"
          r="5"
          fill={name === "dot" ? "currentColor" : "none"}
        />
      ) : (
        <path d={paths[name]} />
      )}
    </svg>
  );
}

export function IconText({ children }) {
  return String(children)
    .split(/(→|↗|✓)/)
    .map((part, index) => {
      const name = { "→": "arrowRight", "↗": "arrowUpRight", "✓": "check" }[
        part
      ];
      return name ? <Icon key={index} name={name} /> : part;
    });
}
