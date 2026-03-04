import { useScrollReveal } from '../hooks/useScrollReveal'
import { TESTIMONIALS } from '../utils/data'

function TestimonialCard({ initials, text, name, role }) {
  return (
    <div
      className="w-[390px] flex-shrink-0 p-[38px] transition-colors duration-300"
      style={{
        background: '#181818',
        border: '1px solid rgba(212,175,55,0.25)',
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = '#D4AF37')}
      onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(212,175,55,0.25)')}
    >
      {/* Opening quote */}
      <div
        className="font-display text-[64px] text-gold leading-[0.5] mb-[18px]"
        style={{ opacity: 0.35 }}
        aria-hidden="true"
      >
        "
      </div>

      <p className="text-[14.5px] text-cream-dim italic leading-[1.8] mb-[30px]">
        {text}
      </p>

      <div className="flex items-center gap-3.5">
        {/* Avatar */}
        <div
          className="w-[42px] h-[42px] rounded-full flex items-center justify-center font-display text-[16px] text-gold flex-shrink-0"
          style={{ border: '1px solid rgba(212,175,55,0.25)', background: 'rgba(212,175,55,0.12)' }}
        >
          {initials}
        </div>
        <div>
          <div className="text-[13.5px] font-bold text-cream-DEFAULT">{name}</div>
          <div className="text-[12px] text-cream-muted mt-0.5">{role}</div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const tagRef  = useScrollReveal()
  const headRef = useScrollReveal()
  const wrapRef = useScrollReveal()

  // Duplicate for infinite scroll
  const doubled = [...TESTIMONIALS, ...TESTIMONIALS]

  return (
    <section id="testimonials" className="py-[120px] bg-black-2 overflow-hidden">
      <div className="px-16 max-md:px-6 mb-16">
        <div ref={tagRef} className="section-tag reveal">Client Voices</div>
        <h2
          ref={headRef}
          className="section-heading reveal reveal-delay-1 text-cream-DEFAULT"
          style={{ fontSize: 'clamp(36px, 4vw, 60px)' }}
        >
          What Clients <em className="not-italic text-gold">Say</em>
        </h2>
      </div>

      <div ref={wrapRef} className="reveal overflow-hidden">
        <div className="testimonial-track">
          {doubled.map((t, i) => (
            <TestimonialCard key={`${t.id}-${i}`} {...t} />
          ))}
        </div>
      </div>
    </section>
  )
}
