import { useScrollReveal } from '../hooks/useScrollReveal'
import { useProcessReveal } from '../hooks/useProcessReveal'
import { PROCESS_STEPS } from '../utils/data'

export default function Process() {
  const tagRef  = useScrollReveal()
  const headRef = useScrollReveal()
  const descRef = useScrollReveal()
  const procRef = useProcessReveal(130)

  return (
    <section id="process" className="py-[120px] px-16 max-md:px-6 bg-black-DEFAULT">
      <div ref={tagRef} className="section-tag reveal">How We Work</div>
      <h2
        ref={headRef}
        className="section-heading reveal reveal-delay-1 text-cream-DEFAULT mb-4"
        style={{ fontSize: 'clamp(36px, 4vw, 60px)' }}
      >
        Our Proven <em className="not-italic text-gold">Process</em>
      </h2>
      <p ref={descRef} className="reveal reveal-delay-2 text-cream-dim text-[16px] max-w-[540px] leading-[1.8] mb-0">
        A structured methodology refined across 150+ enterprise engagements —
        delivering predictable results every time.
      </p>

      {/* Steps row */}
      <div
        ref={procRef}
        className="relative flex gap-0 mt-[72px] overflow-x-auto pb-3"
      >
        {/* Connector line */}
        <div className="process-line" aria-hidden="true" />

        {PROCESS_STEPS.map(({ phase, name, desc }) => (
          <div
            key={phase}
            className="proc-step flex-1 min-w-[155px] px-5 relative z-10"
            style={{ opacity: 0, transform: 'translateY(22px)', transition: 'opacity .6s, transform .6s' }}
          >
            {/* Number dot */}
            <div className="w-16 h-16 border border-gold-border bg-black-DEFAULT flex items-center justify-center font-display text-[20px] text-gold mb-[26px] transition-all duration-350 hover:bg-gold-dim hover:border-gold hover:shadow-gold-sm">
              {phase}
            </div>

            <div className="text-[10px] font-bold tracking-[0.18em] text-gold mb-2 uppercase">
              Phase {phase}
            </div>
            <div className="text-[15px] font-bold text-cream-DEFAULT mb-2.5">
              {name}
            </div>
            <p className="text-[12.5px] text-cream-muted leading-[1.65]">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
