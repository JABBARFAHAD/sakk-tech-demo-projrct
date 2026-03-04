import { useScrollReveal } from '../hooks/useScrollReveal'
import { CASE_STUDIES } from '../utils/data'

function CaseCard({ label, icon, gradientFrom, gradientTo, title, desc, tech }) {
  return (
    <div className="bg-black-3 overflow-hidden relative group transition-all duration-350">
      {/* Visual */}
      <div
        className="h-[200px] flex items-center justify-center relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})` }}
      >
        <div
          className="absolute top-[18px] left-[18px] px-3 py-1 text-gold text-[10px] font-bold tracking-[0.14em] uppercase"
          style={{ background: 'rgba(212,175,55,0.12)', border: '1px solid rgba(212,175,55,0.25)' }}
        >
          {label}
        </div>
        <span className="text-[52px] opacity-40 transition-all duration-400 group-hover:opacity-65 group-hover:scale-110">
          {icon}
        </span>
      </div>

      {/* Body */}
      <div className="p-[30px]">
        <h3 className="text-[17px] font-bold text-cream-DEFAULT mb-2.5">{title}</h3>
        <p className="text-[12.5px] text-cream-muted leading-[1.7] mb-[18px]">{desc}</p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-[22px]">
          {tech.map(t => (
            <span
              key={t}
              className="px-2.5 py-1 text-gold text-[10.5px] font-semibold tracking-[0.06em]"
              style={{ border: '1px solid rgba(212,175,55,0.25)' }}
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] uppercase text-gold no-underline transition-all duration-300 hover:gap-3.5"
        >
          View Case Study <span className="text-[14px]">→</span>
        </a>
      </div>

      {/* Hover border overlay */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-350"
        style={{ border: '1px solid transparent' }}
        ref={el => {
          if (el) {
            el.closest('.group')?.addEventListener('mouseenter', () => {
              el.style.borderColor = 'rgba(212,175,55,0.4)'
            })
            el.closest('.group')?.addEventListener('mouseleave', () => {
              el.style.borderColor = 'transparent'
            })
          }
        }}
      />
    </div>
  )
}

export default function CaseStudies() {
  const tagRef  = useScrollReveal()
  const headRef = useScrollReveal()
  const btnRef  = useScrollReveal()
  const gridRef = useScrollReveal()

  return (
    <section id="work" className="py-[120px] px-16 max-md:px-6 bg-black-DEFAULT">
      {/* Header */}
      <div className="flex justify-between items-end mb-16 max-md:flex-col max-md:items-start max-md:gap-5">
        <div>
          <div ref={tagRef} className="section-tag reveal">Portfolio</div>
          <h2
            ref={headRef}
            className="section-heading reveal reveal-delay-1 text-cream-DEFAULT"
            style={{ fontSize: 'clamp(36px, 4vw, 60px)' }}
          >
            Selected <em className="not-italic text-gold">Work</em>
          </h2>
        </div>
        <a
          ref={btnRef}
          href="#contact"
          className="btn-outline reveal reveal-delay-2"
        >
          All Projects
        </a>
      </div>

      {/* Grid */}
      <div
        ref={gridRef}
        className="reveal grid grid-cols-3 max-lg:grid-cols-1 gap-0.5"
        style={{ background: 'rgba(212,175,55,0.25)', border: '1px solid rgba(212,175,55,0.25)' }}
      >
        {CASE_STUDIES.map(cs => (
          <CaseCard key={cs.id} {...cs} />
        ))}
      </div>
    </section>
  )
}
