import { useScrollReveal } from '../hooks/useScrollReveal'
import ServiceCard from './ServiceCard'
import { SERVICES } from '../utils/data'

export default function Services() {
  const tagRef    = useScrollReveal()
  const headRef   = useScrollReveal()
  const descRef   = useScrollReveal()
  const gridRef   = useScrollReveal()

  return (
    <section id="services" className="py-[120px] px-16 max-md:px-6 bg-black-2">
      {/* Header row */}
      <div className="flex justify-between items-end mb-16 gap-10 max-md:flex-col max-md:items-start">
        <div>
          <div ref={tagRef} className="section-tag reveal">Our Capabilities</div>
          <h2
            ref={headRef}
            className="section-heading reveal reveal-delay-1 text-cream-DEFAULT"
            style={{ fontSize: 'clamp(36px, 4vw, 60px)' }}
          >
            Complete Technology{' '}
            <em className="not-italic text-gold">Solutions</em>
          </h2>
        </div>
        <p
          ref={descRef}
          className="reveal reveal-delay-2 text-cream-dim text-[16px] max-w-[540px] leading-[1.8] max-md:max-w-full"
        >
          End-to-end digital transformation for enterprises and high-growth
          startups seeking scalable digital systems.
        </p>
      </div>

      {/* Grid */}
      <div
        ref={gridRef}
        className="reveal reveal-delay-1 grid gap-px"
        style={{
          gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
          background: 'rgba(212,175,55,0.25)',
          border: '1px solid rgba(212,175,55,0.25)',
        }}
      >
        {SERVICES.map(({ id, icon, name, blurb, items }) => (
          <ServiceCard
            key={id}
            icon={icon}
            name={name}
            blurb={blurb}
            items={items}
          />
        ))}
      </div>
    </section>
  )
}
