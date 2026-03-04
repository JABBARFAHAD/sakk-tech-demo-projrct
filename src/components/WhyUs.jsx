import { useScrollReveal } from '../hooks/useScrollReveal'
import { WHY_ITEMS } from '../utils/data'

function WhyCard({ icon, number, title, desc, delay }) {
  const ref = useScrollReveal()
  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${delay} border-reveal bg-black-2 p-14 max-md:p-8 transition-all duration-350 hover:bg-black-3`}
    >
      <span className="text-[30px] mb-5 block">{icon}</span>
      <div
        className="font-display text-[76px] font-normal leading-none mb-5 transition-colors duration-350"
        style={{ color: 'rgba(212,175,55,0.18)' }}
      >
        {number}
      </div>
      <div className="text-[17px] font-bold text-cream-DEFAULT mb-3.5">
        {title}
      </div>
      <p className="text-[13.5px] text-cream-muted leading-[1.8]">{desc}</p>
    </div>
  )
}

export default function WhyUs() {
  const tagRef  = useScrollReveal()
  const headRef = useScrollReveal()

  return (
    <section id="why" className="py-[120px] px-16 max-md:px-6 bg-black-2">
      <div ref={tagRef} className="section-tag reveal">Why Choose Us</div>
      <h2
        ref={headRef}
        className="section-heading reveal reveal-delay-1 text-cream-DEFAULT mb-[72px]"
        style={{ fontSize: 'clamp(36px, 4vw, 60px)' }}
      >
        Built for <em className="not-italic text-gold">Enterprise</em>
      </h2>

      <div
        className="grid grid-cols-2 max-md:grid-cols-1 gap-0.5"
        style={{ background: 'rgba(212,175,55,0.25)', border: '1px solid rgba(212,175,55,0.25)' }}
      >
        {WHY_ITEMS.map(({ icon, number, title, desc }, i) => (
          <WhyCard
            key={number}
            icon={icon}
            number={number}
            title={title}
            desc={desc}
            delay={i + 1}
          />
        ))}
      </div>
    </section>
  )
}
