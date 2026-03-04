/**
 * Logo.jsx
 * SVG logo mark + wordmark. Accepts `size` (px for the icon) and `className`.
 */
export default function Logo({ size = 38, className = '' }) {
  return (
    <a href="#hero" className={`flex items-center gap-3 no-underline ${className}`}>
      {/* Icon */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
        aria-hidden="true"
      >
        {/* Outer hexagon */}
        <polygon
          points="40,6 68,22 68,58 40,74 12,58 12,22"
          stroke="#D4AF37"
          strokeWidth="1.8"
          fill="none"
        />
        {/* S letterform */}
        <path
          d="M27 27 L53 27 L53 36 L27 44 L27 53 L53 53"
          stroke="#D4AF37"
          strokeWidth="2.8"
          strokeLinecap="square"
          fill="none"
        />
        {/* Inner ghost S */}
        <path
          d="M23 23 L57 23 L57 34 L23 46 L23 57 L57 57"
          stroke="#D4AF37"
          strokeWidth="1"
          strokeLinecap="square"
          fill="none"
          opacity="0.22"
        />
      </svg>

      {/* Wordmark */}
      <span
        className="font-display text-[20px] font-bold tracking-[0.06em] text-cream-DEFAULT leading-none"
        aria-label="SAKK Tech"
      >
        SAKK{' '}
        <span className="text-gold">Tech</span>
      </span>
    </a>
  )
}
