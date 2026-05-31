import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from "./logo.png"

const NAV_LINKS = [
  { href: '#home', label: 'Bosh sahifa' },
  { href: '#products', label: 'Taklifnomalar' },
  { href: '#about', label: 'Biz haqimizda' },
  { href: '#reviews', label: 'Sharhlar' },
  { href: '#contact', label: 'Aloqa' }
]

function scrollTo(id) {
  const el = document.querySelector(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    const fn = () => { if (window.innerWidth >= 920) setOpen(false) }
    window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const handleLink = (href) => {
    setOpen(false)
    setTimeout(() => scrollTo(href), 50)
  }

  return (
    <>
      <motion.header
        initial={{ y: -70 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          transition: 'background 0.4s, box-shadow 0.4s, padding 0.4s',
          background: scrolled ? 'rgba(250,245,238,0.95)' : 'transparent',
          boxShadow: scrolled ? '0 2px 20px rgba(201,84,124,0.08)' : 'none',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
          padding: scrolled ? '10px 0' : '18px 0'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo — menu ochiq bo'lsa yashirinadi */}
          <motion.button
            onClick={() => handleLink('#home')}
            animate={{ opacity: open ? 0 : 1 }}
            transition={{ duration: 0.2 }}
            style={{
              display: 'flex', alignItems: 'center', gap: 8,
              background: 'none', border: 'none', padding: 0,
              pointerEvents: open ? 'none' : 'auto', cursor: 'pointer'
            }}
          >
            <img src={logo} alt="logo" className="w-48 h-16 object-contain" />
          </motion.button>

          {/* Desktop nav — faqat 768px+ da ko'rinadi */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="nav-desktop">
            {NAV_LINKS.map(l => (
              <button key={l.href} onClick={() => handleLink(l.href)}
                style={{
                  background: 'none', border: 'none', padding: '4px 0',
                  fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: 14,
                  color: 'var(--charcoal)', cursor: 'pointer', position: 'relative'
                }}
                onMouseEnter={e => e.currentTarget.querySelector('span').style.width = '100%'}
                onMouseLeave={e => e.currentTarget.querySelector('span').style.width = '0%'}
              >
                {l.label}
                <span style={{
                  position: 'absolute', bottom: -2, left: 0, height: 2,
                  width: '0%', background: 'var(--rose)', borderRadius: 99,
                  transition: 'width 0.3s ease'
                }} />
              </button>
            ))}
            <button className="btn-primary" onClick={() => handleLink('#contact')}
              style={{ padding: '10px 22px', fontSize: 13 }}>
              Buyurtma berish
            </button>
          </nav>

          {/* Hamburger — faqat mobilda ko'rinadi */}
          <button
            onClick={() => setOpen(v => !v)}
            aria-label={open ? 'Yopish' : 'Menu'}
            className="nav-hamburger"
            style={{
              background: 'none', border: '1.5px solid rgba(201,84,124,0.3)',
              padding: '8px 10px', borderRadius: 10, flexDirection: 'column', gap: 5, cursor: 'pointer'
            }}
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: 'block', width: 22, height: 2, borderRadius: 2,
                background: 'var(--rose)',
                transition: 'transform 0.3s, opacity 0.3s',
                transform: open
                  ? i === 0 ? 'translateY(7px) rotate(45deg)'
                    : i === 1 ? 'scaleX(0)'
                      : 'translateY(-7px) rotate(-45deg)'
                  : 'none',
                opacity: open && i === 1 ? 0 : 1
              }} />
            ))}
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              style={{
                position: 'fixed', inset: 0, zIndex: 98,
                background: 'rgba(42,42,42,0.4)', backdropFilter: 'blur(4px)'
              }}
            />

            {/* Drawer panel */}
            <motion.div
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              style={{
                position: 'fixed', top: 0, right: 0, bottom: 0, zIndex: 99,
                width: '80vw', maxWidth: 300,
                background: 'white',
                boxShadow: '-8px 0 40px rgba(201,84,124,0.15)',
                display: 'flex', flexDirection: 'column',
                padding: '72px 28px 36px'
              }}
            >
              <nav style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 1 }}>
                {NAV_LINKS.map((l, i) => (
                  <motion.button
                    key={l.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    onClick={() => handleLink(l.href)}
                    style={{
                      background: 'none', border: 'none', textAlign: 'left',
                      padding: '13px 14px', borderRadius: 12, cursor: 'pointer',
                      fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: 16,
                      color: 'var(--charcoal)'
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'var(--rose-pale)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'none'}
                  >
                    {l.label}
                  </motion.button>
                ))}
              </nav>

              <motion.button
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.38 }}
                className="btn-primary"
                onClick={() => handleLink('#contact')}
                style={{ width: '100%' }}
              >
                Buyurtma berish 🌸
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Responsive styles */}
      <style>{`
        .nav-desktop   { display: flex; }
        .nav-hamburger { display: none; }

        @media (max-width: 920px) {
          .nav-desktop   { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}
