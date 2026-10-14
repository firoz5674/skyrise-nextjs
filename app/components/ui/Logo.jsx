export default function Logo({ className = "" }) {
  return (
    <a
      href="#top"
      aria-label="Skyrise home"
      className={`inline-flex items-center gap-2.5 ${className}`}
    >
      <svg viewBox="0 0 40 40" className="size-9" aria-hidden="true">
        <defs>
          <linearGradient id="sr-logo" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#1d4ed8" />
            <stop offset="1" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
        <rect width="40" height="40" rx="11" fill="url(#sr-logo)" />
        <path d="M8 31 20 9l12 22h-6.5L20 20.5 14.5 31z" fill="#fff" />
        <path
          d="M20 9v6"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          opacity=".6"
        />
      </svg>
      <span className="font-display text-xl font-extrabold tracking-tight text-ink">
        Skyrise
      </span>
    </a>
  )
}
