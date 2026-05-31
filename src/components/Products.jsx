import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BsStarFill, BsWhatsapp } from 'react-icons/bs'
import { PRODUCTS, CATEGORIES } from '../data/index'

function price(n) {
  return new Intl.NumberFormat('uz-UZ').format(n) + " so'm"
}

function Card({ p, i }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  const order = () => {
    const msg = `Salom! "${p.title}" taklifnomasini buyurtma qilmoqchiman (${price(p.price)})`
    window.open(`https://t.me/ismoilov_ibroxim?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: Math.min(i * 0.08, 0.4) }}
      className="card"
      style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
    >
      {/* Top image area */}
      <div style={{
        background: `linear-gradient(135deg, ${p.bgFrom} 0%, ${p.bgTo} 100%)`,
        padding: '32px 24px 24px',
        position: 'relative',
        minHeight: 160,
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
        {/* Badge */}
        <span style={{
          position: 'absolute', top: 14, right: 14,
          background: 'white', borderRadius: 99,
          padding: '4px 12px', fontSize: 11, fontWeight: 600,
          color: p.accentColor, boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
        }}>{p.emoji} {p.badge}</span>

        {/* Category pill */}
        <span style={{
          position: 'absolute', bottom: 14, left: 14,
          background: p.accentColor, borderRadius: 99,
          padding: '4px 12px', fontSize: 11, fontWeight: 600, color: 'white'
        }}>{p.category}</span>

        {/* Big letter */}
        <span style={{
          fontFamily: 'Playfair Display, serif', fontWeight: 700,
          fontSize: 80, color: p.accentColor, opacity: 0.18,
          lineHeight: 1, userSelect: 'none'
        }}>{p.title[0]}</span>
      </div>

      {/* Body */}
      <div style={{ padding: '20px 20px 24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{
          fontFamily: 'Playfair Display, serif', fontWeight: 700,
          fontSize: 18, color: 'var(--charcoal)', marginBottom: 2
        }}>{p.title}</h3>
        <p style={{
          fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic',
          fontSize: 13, color: p.accentColor, marginBottom: 10
        }}>{p.subtitle}</p>
        <p style={{ fontSize: 13, color: 'var(--gray)', lineHeight: 1.6, marginBottom: 14, flex: 1 }}>
          {p.description}
        </p>

        {/* Features */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
          {p.features.map((f, j) => (
            <span key={j} className="feature-tag">{f}</span>
          ))}
        </div>

        {/* Stars */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 16 }}>
          {[...Array(5)].map((_, k) => (
            <BsStarFill key={k} style={{ color: 'var(--gold)', fontSize: 11 }} />
          ))}
          <span style={{ fontSize: 11, color: 'var(--gray-light)', marginLeft: 4 }}>(24)</span>
        </div>

        {/* Price + CTA */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
          <span style={{
            fontFamily: 'Playfair Display, serif', fontWeight: 700,
            fontSize: 17, color: p.accentColor
          }}>{price(p.price)}</span>
          <button
            onClick={order}
            style={{
              background: p.accentColor, color: 'white', border: 'none',
              borderRadius: 12, padding: '10px 18px',
              fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: 13,
              cursor: 'pointer', transition: 'opacity 0.2s, transform 0.2s',
              flexShrink: 0
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'scale(1.04)' }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'scale(1)' }}
          >
            Buyurtma →
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default function Products() {
  const [active, setActive] = useState('Barchasi')
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  const list = active === 'Barchasi'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === active)

  return (
    <section id="products" className="section petal-bg">
      <div className="container">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 40 }}
        >
          <span className="section-tag">Kolleksiyamiz</span>
          <h2 className="heading-lg" style={{ marginBottom: 12 }}>
            Noyob <span className="text-gradient">Taklifnomalar</span>
          </h2>
          <p className="body-italic" style={{ maxWidth: 480, margin: '0 auto' }}>
            Har bir taklifnoma — sizning sevgingizni dunyoga e'lon qilish uchun yaratilgan san'at asari
          </p>
        </motion.div>

        {/* Filter */}
        <div style={{
          display: 'flex', flexWrap: 'wrap',
          justifyContent: 'center', gap: 8, marginBottom: 36
        }}>
          {CATEGORIES.map(c => (
            <button key={c} onClick={() => setActive(c)}
              style={{
                padding: '8px 18px', borderRadius: 99, fontSize: 13, fontWeight: 500,
                border: `1.5px solid ${active === c ? 'var(--rose)' : 'rgba(201,84,124,0.2)'}`,
                background: active === c ? 'var(--rose)' : 'white',
                color: active === c ? 'white' : 'var(--charcoal)',
                cursor: 'pointer', transition: 'all 0.2s',
                fontFamily: 'DM Sans, sans-serif'
              }}
            >{c}</button>
          ))}
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
          gap: 24
        }}>
          <AnimatePresence>
            {list.map((p, i) => <Card key={p.id} p={p} i={i} />)}
          </AnimatePresence>
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: 52 }}>
          <p style={{ fontSize: 13, color: 'var(--gray-light)', marginBottom: 16 }}>
            O'zingizga xos maxsus dizayn kerakmi?
          </p>
          <a
            href="https://t.me/ismoilov_ibroxim"
            target="_blank" rel="noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '12px 28px', borderRadius: 999,
              background: '#25D366', color: 'white',
              fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: 14,
              textDecoration: 'none', transition: 'opacity 0.2s'
            }}
          >
            <BsWhatsapp /> Maxsus buyurtma
          </a>
        </div>
      </div>
    </section>
  )
}
