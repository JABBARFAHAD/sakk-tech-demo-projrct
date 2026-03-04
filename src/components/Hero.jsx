import { HERO_STATS } from '../utils/data'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-[100px] pb-20 px-16 max-md:px-6"
    >
      {/* ── Animated grid background ── */}
      <div className="animated-grid pointer-events-none" aria-hidden="true" />

      {/* ── Glow orbs ── */}
      <div
        aria-hidden="true"
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 700, height: 700,
          top: -200, right: -150,
          background: 'radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 70%)',
          filter: 'blur(100px)',
          animation: 'orbFloat 10s ease-in-out infinite',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 400, height: 400,
          bottom: -100, left: '5%',
          background: 'radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)',
          filter: 'blur(100px)',
          animation: 'orbFloat 14s ease-in-out infinite reverse',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 300, height: 300,
          top: '40%', left: '40%',
          background: 'radial-gradient(circle, rgba(212,175,55,0.04) 0%, transparent 70%)',
          filter: 'blur(100px)',
          animation: 'orbFloat 18s ease-in-out infinite',
        }}
      />

      {/* ── Hero content ── */}
      <div className="relative z-10 max-w-[850px]">
        {/* Eyebrow badge */}
        <div
          className="inline-flex items-center gap-2.5 px-[18px] py-[7px] border border-gold-border bg-gold-dim text-gold text-[11px] font-bold tracking-[0.18em] uppercase mb-9"
          style={{ animation: 'fadeUp 0.9s ease both' }}
        >
          <span
            className="w-[7px] h-[7px] rounded-full bg-gold flex-shrink-0"
            style={{ animation: 'blink 2.2s infinite' }}
          />
          Enterprise Technology Consultancy
        </div>

        {/* Headline */}
        <h1
          className="font-display font-normal leading-[1] tracking-[-0.02em] mb-7"
          style={{
            fontSize: 'clamp(56px, 7.5vw, 104px)',
            animation: 'fadeUp 0.9s 0.15s ease both',
          }}
        >
          Engineering
          <em className="block not-italic text-gold">Digital Excellence.</em>
        </h1>

        {/* Subheading */}
        <p
          className="text-cream-dim text-[17px] font-normal max-w-[520px] leading-[1.8] mb-[52px]"
          style={{ animation: 'fadeUp 0.9s 0.3s ease both' }}
        >
          From strategy to scalable software, we design and build powerful
          digital systems that drive real business growth.
        </p>

        {/* CTA buttons */}
        <div
          className="flex gap-4 flex-wrap"
          style={{ animation: 'fadeUp 0.9s 0.45s ease both' }}
        >
          <a href="#contact" className="btn-gold">
            Book a Consultation
          </a>
          <a href="#services" className="btn-outline">
            Explore Services
          </a>
        </div>
      </div>

      {/* ── Stats (desktop only) ── */}
      <div
        className="absolute bottom-14 right-16 hidden lg:flex gap-14"
        style={{ animation: 'fadeUp 0.9s 0.6s ease both' }}
      >
        {HERO_STATS.map(({ number, label }) => (
          <div key={label} className="text-right">
            <div className="font-display text-[52px] font-medium text-gold leading-none">
              {number}
            </div>
            <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-cream-muted mt-1.5">
              {label}
            </div>
          </div>
        ))}
      </div>

      {/* ── Bottom scan line ── */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.25), transparent)' }}
      />
    </section>
  )
}
