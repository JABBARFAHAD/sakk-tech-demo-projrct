import { useState } from 'react'

/**
 * ServiceCard
 * Click to toggle expanded service items list.
 */
export default function ServiceCard({ icon, name, blurb, items }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      onClick={() => setOpen(o => !o)}
      className={`card-hover bg-black-2 p-9 cursor-pointer select-none ${open ? 'shadow-gold-lg' : ''}`}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && setOpen(o => !o)}
      aria-expanded={open}
    >
      {/* Plus / minus toggle */}
      <div
        className={`absolute top-7 right-7 w-[26px] h-[26px] border border-gold-border flex items-center justify-center text-gold text-[17px] transition-all duration-350 z-10 ${
          open ? 'rotate-45 bg-gold-dim border-gold' : ''
        }`}
      >
        +
      </div>

      {/* Icon */}
      <span className="text-[26px] mb-[18px] block relative z-10">{icon}</span>

      {/* Name */}
      <div className="text-[13px] font-bold tracking-[0.08em] uppercase text-cream-DEFAULT mb-2.5 relative z-10">
        {name}
      </div>

      {/* Short description — hidden when open */}
      {!open && (
        <p className="text-[13px] text-cream-muted leading-[1.65] relative z-10">
          {blurb}
        </p>
      )}

      {/* Expanded items */}
      {open && (
        <ul className="list-none m-0 p-0 relative z-10 mt-1">
          {items.map(item => (
            <li
              key={item}
              className="text-[12.5px] text-cream-muted py-[5px] border-b border-white/[0.05] flex items-center gap-2"
            >
              <span className="text-gold text-[15px] flex-shrink-0">›</span>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
