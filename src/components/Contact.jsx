import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { SERVICE_OPTIONS } from '../utils/data'

const CONTACT_INFO = [
  { icon: '✉',  text: 'hello@sakktech.com'          },
  { icon: '📞', text: '+1 (800) SAKK-TECH'           },
  { icon: '🌍', text: 'Global — Remote-First Ops'    },
  { icon: '⏱',  text: 'Response within 4 hours'     },
]

export default function Contact() {
  const tagRef    = useScrollReveal()
  const headRef   = useScrollReveal()
  const subRef    = useScrollReveal()
  const infoRef   = useScrollReveal()
  const formRef   = useScrollReveal()

  const [status, setStatus] = useState('idle') // idle | success

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('success')
    setTimeout(() => setStatus('idle'), 3500)
  }

  return (
    <section id="contact" className="py-[120px] px-16 max-md:px-6 bg-black-DEFAULT">
      <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-24 items-start">

        {/* ── Left info ── */}
        <div>
          <div ref={tagRef} className="section-tag reveal">Get In Touch</div>
          <h2
            ref={headRef}
            className="section-heading reveal reveal-delay-1 text-cream-DEFAULT mb-5"
            style={{ fontSize: 'clamp(36px, 4vw, 60px)' }}
          >
            Let's Build the{' '}
            <em className="not-italic text-gold block">Future Together.</em>
          </h2>
          <p
            ref={subRef}
            className="reveal reveal-delay-2 text-cream-dim text-[15px] leading-[1.8] mb-12"
          >
            Ready to transform your technology landscape? Tell us about your
            vision and we'll architect the perfect path forward.
          </p>

          <div ref={infoRef} className="reveal reveal-delay-3 flex flex-col gap-5">
            {CONTACT_INFO.map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-4 text-[14px] text-cream-dim">
                <div
                  className="w-[42px] h-[42px] flex items-center justify-center text-gold text-[15px] flex-shrink-0"
                  style={{ border: '1px solid rgba(212,175,55,0.25)' }}
                >
                  {icon}
                </div>
                {text}
              </div>
            ))}
          </div>
        </div>

        {/* ── Form ── */}
        <div ref={formRef} className="reveal reveal-delay-2">
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-[18px]">
            {/* Name + Email */}
            <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-[18px]">
              <div className="flex flex-col gap-2">
                <label className="text-[10.5px] font-bold tracking-[0.18em] uppercase text-cream-muted">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Anderson"
                  required
                  className="bg-black-2 text-cream-DEFAULT text-[14px] px-[18px] py-3.5 outline-none transition-all duration-300 focus:shadow-[0_0_0_3px_rgba(212,175,55,0.07)]"
                  style={{ border: '1px solid rgba(244,241,234,0.08)' }}
                  onFocus={e  => (e.target.style.borderColor = '#D4AF37')}
                  onBlur={e   => (e.target.style.borderColor = 'rgba(244,241,234,0.08)')}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10.5px] font-bold tracking-[0.18em] uppercase text-cream-muted">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@company.com"
                  required
                  className="bg-black-2 text-cream-DEFAULT text-[14px] px-[18px] py-3.5 outline-none transition-all duration-300"
                  style={{ border: '1px solid rgba(244,241,234,0.08)' }}
                  onFocus={e  => (e.target.style.borderColor = '#D4AF37')}
                  onBlur={e   => (e.target.style.borderColor = 'rgba(244,241,234,0.08)')}
                />
              </div>
            </div>

            {/* Company */}
            <div className="flex flex-col gap-2">
              <label className="text-[10.5px] font-bold tracking-[0.18em] uppercase text-cream-muted">
                Company
              </label>
              <input
                type="text"
                placeholder="Your Company Name"
                className="bg-black-2 text-cream-DEFAULT text-[14px] px-[18px] py-3.5 outline-none transition-all duration-300 w-full"
                style={{ border: '1px solid rgba(244,241,234,0.08)' }}
                onFocus={e  => (e.target.style.borderColor = '#D4AF37')}
                onBlur={e   => (e.target.style.borderColor = 'rgba(244,241,234,0.08)')}
              />
            </div>

            {/* Service */}
            <div className="flex flex-col gap-2">
              <label className="text-[10.5px] font-bold tracking-[0.18em] uppercase text-cream-muted">
                Service Needed
              </label>
              <select
                className="bg-black-2 text-cream-DEFAULT text-[14px] px-[18px] py-3.5 outline-none appearance-none cursor-pointer w-full transition-all duration-300"
                style={{ border: '1px solid rgba(244,241,234,0.08)' }}
                onFocus={e  => (e.target.style.borderColor = '#D4AF37')}
                onBlur={e   => (e.target.style.borderColor = 'rgba(244,241,234,0.08)')}
                defaultValue=""
              >
                <option value="" disabled>Select a service...</option>
                {SERVICE_OPTIONS.map(opt => (
                  <option key={opt} value={opt} style={{ background: '#181818' }}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="text-[10.5px] font-bold tracking-[0.18em] uppercase text-cream-muted">
                Project Details
              </label>
              <textarea
                placeholder="Tell us about your project, goals, timeline, and technical requirements..."
                rows={5}
                className="bg-black-2 text-cream-DEFAULT text-[14px] px-[18px] py-3.5 outline-none resize-y w-full transition-all duration-300 placeholder:text-cream-muted"
                style={{ border: '1px solid rgba(244,241,234,0.08)', minHeight: 120 }}
                onFocus={e  => (e.target.style.borderColor = '#D4AF37')}
                onBlur={e   => (e.target.style.borderColor = 'rgba(244,241,234,0.08)')}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className={`self-start px-[44px] py-[17px] font-body text-[12px] font-extrabold tracking-[0.12em] uppercase transition-all duration-350 relative overflow-hidden border-none cursor-pointer ${
                status === 'success'
                  ? 'bg-[#2a6e2a] text-white'
                  : 'bg-gold text-black-DEFAULT hover:shadow-gold hover:-translate-y-0.5'
              }`}
              style={status === 'idle' ? { background: '#D4AF37' } : {}}
            >
              {status === 'success' ? '✓ Message Sent!' : 'Send Message →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
