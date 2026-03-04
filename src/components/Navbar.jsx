import { useState } from 'react'
import Logo from './Logo'
import { useNavScroll } from '../hooks/useNavScroll'
import { NAV_LINKS } from '../utils/data'

export default function Navbar() {
  const { scrolled } = useNavScroll(60)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-[76px] px-16 flex items-center justify-between transition-all duration-400 border-b border-gold-border ${
        scrolled
          ? 'bg-black-DEFAULT/[0.98] backdrop-blur-2xl'
          : 'bg-black-DEFAULT/90 backdrop-blur-2xl'
      }`}
    >
      <Logo />

      {/* Desktop links */}
      <ul className="hidden lg:flex items-center gap-9 list-none m-0 p-0">
        {NAV_LINKS.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              className="relative text-cream-dim text-[12px] font-semibold tracking-[0.12em] uppercase no-underline transition-colors duration-300 hover:text-gold group"
            >
              {label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#contact"
        className="hidden lg:inline-block px-7 py-[10px] border border-gold text-gold font-body text-[12px] font-bold tracking-[0.12em] uppercase no-underline transition-all duration-300 hover:bg-gold hover:text-black-DEFAULT"
      >
        Book Consultation
      </a>

      {/* Mobile hamburger */}
      <button
        className="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer bg-transparent border-none"
        onClick={() => setMobileOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-px bg-cream-DEFAULT transition-all duration-300 ${
            mobileOpen ? 'rotate-45 translate-y-[7px]' : ''
          }`}
        />
        <span
          className={`block w-6 h-px bg-cream-DEFAULT transition-all duration-300 ${
            mobileOpen ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`block w-6 h-px bg-cream-DEFAULT transition-all duration-300 ${
            mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''
          }`}
        />
      </button>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-[76px] left-0 right-0 bg-black-2 border-b border-gold-border py-6 px-8">
          <ul className="list-none m-0 p-0 flex flex-col gap-4">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="text-cream-dim text-[13px] font-semibold tracking-[0.1em] uppercase no-underline hover:text-gold transition-colors duration-300"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-6 inline-block px-7 py-3 border border-gold text-gold font-body text-[12px] font-bold tracking-[0.12em] uppercase no-underline"
          >
            Book Consultation
          </a>
        </div>
      )}
    </nav>
  )
}
