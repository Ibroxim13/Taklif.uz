import { BsTelegram, BsInstagram } from 'react-icons/bs'
import { motion } from 'framer-motion'
import logo from "./logo.png"

const LINKS = [
  { href: '#home',     label: 'Bosh sahifa' },
  { href: '#products', label: 'Taklifnomalar' },
  { href: '#about',    label: 'Biz haqimizda' },
  { href: '#reviews',  label: 'Sharhlar' },
  { href: '#contact',  label: 'Aloqa' }
]

const SOCIALS = [
  { Icon: BsTelegram,  href: 'https://t.me/ismoilov_ibroxim',   color: '#0088cc' },
  { Icon: BsInstagram, href: 'https://instagram.com',          color: '#E1306C' },
]

export default function Footer() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer style={{ background: 'var(--charcoal)', padding: '48px 0 32px' }}>
      <div className="container">
        {/* Top row */}
        <div style={{
          display: 'flex', flexWrap: 'wrap',
          alignItems: 'center', justifyContent: 'space-between',
          gap: 24, marginBottom: 32
        }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <a href='#home' style={{
              fontFamily: 'Playfair Display, serif', fontWeight: 700,
              fontSize: 18, color: 'white'
            }}>
              <img src={logo} alt="logo" className="cursor-pointer w-48 h-16" />
            </a>
          </div>

          {/* Nav */}
          <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 20px' }}>
            {LINKS.map(l => (
              <button key={l.href} onClick={() => scrollTo(l.href)}
                style={{
                  background: 'none', border: 'none',
                  color: 'rgba(255,255,255,0.45)', fontSize: 13,
                  cursor: 'pointer', fontFamily: 'DM Sans, sans-serif',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.9)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
              >{l.label}</button>
            ))}
          </nav>

          {/* Socials */}
          <div style={{ display: 'flex', gap: 10 }}>
            {SOCIALS.map(({ Icon, href, color }, i) => (
              <motion.a key={i} href={href} target="_blank" rel="noreferrer"
                whileHover={{ scale: 1.12, y: -2 }}
                style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: color, display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  color: 'white', fontSize: 16, textDecoration: 'none'
                }}
              ><Icon /></motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(255,255,255,0.07)', marginBottom: 24 }} />

        {/* Bottom row */}
        <div style={{
          display: 'flex', flexWrap: 'wrap',
          alignItems: 'center', justifyContent: 'space-between',
          gap: 12
        }}>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>
            © 2024 Taklif.uz. Barcha huquqlar himoyalangan.
          </span>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)' }}>
            Sevgi bilan yaratilgan 🌸 Toshkent
          </span>
        </div>
      </div>
    </footer>
  )
}
