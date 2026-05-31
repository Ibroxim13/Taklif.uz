import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BsStarFill, BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { TESTIMONIALS } from '../data/index'

export default function Reviews() {
  const [cur, setCur] = useState(0)
  const [dir, setDir] = useState(1)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  const go = useCallback((d) => {
    setDir(d)
    setCur(c => (c + d + TESTIMONIALS.length) % TESTIMONIALS.length)
  }, [])

  useEffect(() => {
    const t = setInterval(() => go(1), 5000)
    return () => clearInterval(t)
  }, [go])

  const variants = {
    enter:  d => ({ x: d > 0 ? 50  : -50, opacity: 0 }),
    center:   { x: 0, opacity: 1 },
    exit:   d => ({ x: d > 0 ? -50 : 50,  opacity: 0 })
  }

  const t = TESTIMONIALS[cur]

  return (
    <section id="reviews" className="section petal-bg">
      <div className="container" style={{ maxWidth: 720, margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          style={{ textAlign: 'center', marginBottom: 40 }}
        >
          <span className="section-tag">Sharhlar</span>
          <h2 className="heading-lg" style={{ marginBottom: 10 }}>
            Baxtli <span className="text-gradient">Juftliklar</span> Aytadi
          </h2>
          <p className="body-italic">100+ juftlikning ishonchi — bizning eng katta mukofotimiz</p>
        </motion.div>

        {/* Slider */}
        <div style={{ position: 'relative' }}>
          <AnimatePresence custom={dir} mode="wait">
            <motion.div
              key={cur}
              custom={dir}
              variants={variants}
              initial="enter" animate="center" exit="exit"
              transition={{ duration: 0.4 }}
              style={{
                background: 'white', borderRadius: 24,
                padding: 'clamp(24px, 5vw, 48px)',
                boxShadow: '0 8px 40px rgba(201,84,124,0.1)',
                border: '1px solid rgba(201,84,124,0.1)',
                textAlign: 'center', position: 'relative', overflow: 'hidden'
              }}
            >
              {/* Big quote */}
              <span style={{
                position: 'absolute', top: 16, left: 20,
                fontSize: 80, color: 'var(--rose)',
                opacity: 0.05, fontFamily: 'serif', lineHeight: 1,
                pointerEvents: 'none'
              }}>"</span>

              {/* Stars */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: 4, marginBottom: 20 }}>
                {[...Array(t.stars)].map((_, i) => (
                  <BsStarFill key={i} style={{ color: 'var(--gold)', fontSize: 14 }} />
                ))}
              </div>

              {/* Quote text */}
              <p style={{
                fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic',
                fontSize: 'clamp(1.05rem, 2.5vw, 1.25rem)',
                color: 'var(--charcoal)', lineHeight: 1.7,
                marginBottom: 28, maxWidth: 520, margin: '0 auto 28px'
              }}>
                "{t.text}"
              </p>

              {/* Avatar + name */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--rose), var(--gold))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'white', fontWeight: 700, fontSize: 18,
                  fontFamily: 'Playfair Display, serif'
                }}>{t.initial}</div>
                <div style={{
                  fontFamily: 'Playfair Display, serif', fontWeight: 700,
                  fontSize: 16, color: 'var(--charcoal)'
                }}>{t.name}</div>
                <div style={{ fontSize: 12, color: 'var(--gray-light)' }}>{t.date}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav buttons */}
          {['left', 'right'].map(side => (
            <button key={side}
              onClick={() => go(side === 'left' ? -1 : 1)}
              style={{
                position: 'absolute', top: '50%',
                [side]: -16, transform: 'translateY(-50%)',
                width: 40, height: 40, borderRadius: '50%',
                background: 'white', border: '1px solid rgba(201,84,124,0.2)',
                boxShadow: '0 4px 12px rgba(201,84,124,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--rose)', cursor: 'pointer', fontSize: 14
              }}
            >
              {side === 'left' ? <BsChevronLeft /> : <BsChevronRight />}
            </button>
          ))}
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 24 }}>
          {TESTIMONIALS.map((_, i) => (
            <button key={i}
              onClick={() => { setDir(i > cur ? 1 : -1); setCur(i) }}
              style={{
                height: 8, borderRadius: 99, border: 'none', cursor: 'pointer',
                transition: 'all 0.3s',
                width: i === cur ? 24 : 8,
                background: i === cur ? 'var(--rose)' : 'rgba(201,84,124,0.2)'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
