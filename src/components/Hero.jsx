import { motion } from 'framer-motion'
import { BsStarFill } from 'react-icons/bs'
import { HiArrowDown } from 'react-icons/hi'

const PETALS = [
  { top: '12%',  left: '6%',   delay: 0   },
  { top: '25%',  right: '8%',  delay: 1   },
  { top: '55%',  left: '4%',   delay: 2   },
  { top: '70%',  right: '6%',  delay: 0.5 },
  { bottom:'20%',left: '8%',   delay: 1.5 },
  { top: '40%',  right: '3%',  delay: 0.8 }
]

export default function Hero() {
  const scrollDown = () => {
    document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="petal-bg" style={{
      minHeight: '100svh',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      paddingTop: 100, paddingBottom: 60,
      position: 'relative', overflow: 'hidden'
    }}>
      {/* Decorative blobs */}
      <div style={{
        position: 'absolute', top: '-10%', right: '-10%',
        width: 'min(500px, 70vw)', height: 'min(500px, 70vw)',
        borderRadius: '50%', pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(201,84,124,0.12) 0%, transparent 70%)'
      }} />
      <div style={{
        position: 'absolute', bottom: '-5%', left: '-10%',
        width: 'min(400px, 60vw)', height: 'min(400px, 60vw)',
        borderRadius: '50%', pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%)'
      }} />

      {/* Floating petals — hidden on tiny screens */}
      {PETALS.map((p, i) => (
        <motion.span key={i}
          animate={{ y: [0, -14, 0], rotate: [0, 12, -8, 0], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 5 + i * 0.7, repeat: Infinity, delay: p.delay }}
          style={{ position: 'absolute', fontSize: 20, pointerEvents: 'none', ...p }}
          aria-hidden="true"
        >🌸</motion.span>
      ))}

      {/* Content */}
      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '8px 20px', borderRadius: 999,
            background: 'rgba(201,84,124,0.08)',
            border: '1px solid rgba(201,84,124,0.2)',
            marginBottom: 24
          }}
        >
          <BsStarFill style={{ color: 'var(--gold)', fontSize: 11 }} />
          <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--rose)' }}>
            100+ baxtli juftlik ishongan studio
          </span>
          <BsStarFill style={{ color: 'var(--gold)', fontSize: 11 }} />
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="heading-xl"
          initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          style={{ marginBottom: 20 }}
        >
          Sevgingizni{' '}
          <em className="text-gradient" style={{ fontStyle: 'normal' }}>Raqamli Sehriga</em>
          <br />
          Aylantiring
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="body-italic"
          initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22 }}
          style={{ maxWidth: 540, margin: '0 auto 36px', fontSize: 'clamp(1rem, 2.5vw, 1.15rem)' }}
        >
          Har bir juftlikning muhabbat hikoyasi o'ziga xos. Men sizning orzuingizni
          nafis, animatsiyali va interaktiv to'y taklifnomasiga aylantirib beraman.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.35 }}
          style={{
            display: 'flex', flexWrap: 'wrap',
            gap: 12, justifyContent: 'center', marginBottom: 60
          }}
        >
          <button className="btn-primary" onClick={() => document.querySelector('#products')?.scrollIntoView({ behavior:'smooth' })}>
            Taklifnomalarni Ko'rish ✨
          </button>
          <button className="btn-outline" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior:'smooth' })}>
            Bepul Maslahat
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          style={{
            display: 'flex', flexWrap: 'wrap',
            justifyContent: 'center', gap: '20px 40px'
          }}
        >
          {[
            { num: '100+', label: 'Baxtli juftlik' },
            { num: '6',    label: 'Noyob dizayn' },
            { num: '98%',  label: 'Mamnuniyat' }
          ].map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div className="gold-gradient" style={{
                fontFamily: 'Playfair Display, serif',
                fontWeight: 700, fontSize: 'clamp(1.6rem, 4vw, 2.2rem)'
              }}>{s.num}</div>
              <div style={{ fontSize: 12, color: 'var(--gray-light)', marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        animate={{ y: [0, 7, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={scrollDown}
        style={{
          position: 'absolute', bottom: 24, left: '50%', transform: 'translateX(-50%)',
          background: 'none', border: 'none', cursor: 'pointer',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4
        }}
      >
        <span style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#bbb' }}>Pastga</span>
        <HiArrowDown style={{ color: 'var(--rose-light)', fontSize: 18 }} />
      </motion.button>
    </section>
  )
}
