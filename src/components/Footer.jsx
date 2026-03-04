import Logo from './Logo'
import {
  FOOTER_QUICK_LINKS,
  FOOTER_SERVICE_LINKS,
  FOOTER_CONTACT_LINKS,
  SOCIAL_LINKS,
} from '../utils/data'

function FooterCol({ title, links }) {
  return (
    <div>
      <h4
        className="text-[10.5px] font-bold tracking-[0.2em] uppercase text-gold mb-[22px] pb-3"
        style={{ borderBottom: '1px solid rgba(212,175,55,0.25)' }}
      >
        {title}
      </h4>
      <ul className="list-none m-0 p-0 flex flex-col gap-3">
        {links.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              className="text-[13.5px] text-cream-muted no-underline transition-colors duration-300 hover:text-cream-DEFAULT flex items-center gap-2 group"
            >
              <span className="text-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100">›</span>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="bg-black-2 pt-16 pb-10 px-16 max-md:px-6"
      style={{ borderTop: '1px solid #D4AF37' }}
    >
      {/* Top grid */}
      <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-14 mb-14">
        {/* Brand */}
        <div>
          <div className="mb-4">
            <Logo size={34} />
          </div>
          <p className="text-[13px] text-cream-muted leading-[1.75] max-w-[270px] mb-7">
            Engineering digital excellence for enterprises and ambitious
            startups. Your trusted technology partner for the long term.
          </p>
          {/* Socials */}
          <div className="flex gap-2.5">
            {SOCIAL_LINKS.map(({ label, title, href }) => (
              <a
                key={title}
                href={href}
                title={title}
                className="w-9 h-9 flex items-center justify-center text-cream-muted text-[13px] font-bold no-underline transition-all duration-300 hover:text-gold hover:bg-gold-dim"
                style={{ border: '1px solid rgba(212,175,55,0.25)' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = '#D4AF37')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(212,175,55,0.25)')}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="Quick Links" links={FOOTER_QUICK_LINKS} />
        <FooterCol title="Services"    links={FOOTER_SERVICE_LINKS} />
        <FooterCol title="Contact"     links={FOOTER_CONTACT_LINKS} />
      </div>

      {/* Bottom bar */}
      <div
        className="flex justify-between items-center pt-7 max-sm:flex-col max-sm:gap-3 max-sm:items-start"
        style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
      >
        <p className="text-[12px] text-cream-muted tracking-[0.04em]">
          © {year} <span className="text-gold">SAKK Tech</span>. All rights reserved. Engineered with precision.
        </p>
        <p className="text-[12px] text-cream-muted tracking-[0.04em]">
          Privacy Policy · Terms of Service
        </p>
      </div>
    </footer>
  )
}
