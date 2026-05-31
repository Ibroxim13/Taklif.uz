import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BsCheckCircleFill } from 'react-icons/bs'
import me from "./me.png"

const SKILLS = [
  { icon: '💡', title: 'Kreativ Dizayn', desc: 'Har bir taklifnoma noyob va esda qoladigan' },
  { icon: '❤️', title: 'Sevgi bilan', desc: 'Sizning hikoyangizni his qilib yarataman' },
  { icon: '⚡', title: 'Tez Yetkazish', desc: '1-2 kun ichida tayyor — kafolatlanadi' }
]

const ACHIEVEMENTS = [
  '3 yillik tajriba',
  '100+ muvaffaqiyatli loyiha',
  'React & Framer Motion',
  '24/7 qo\'llab-quvvatlash',
  'Tez yetkazib berish',
  'Cheksiz tuzatishlar'
]

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 })

  return (
    <section id="about" style={{ background: 'white' }} className="section">
      <div className="container">
        <div ref={ref} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
          gap: 48, alignItems: 'center'
        }}>

          {/* Visual card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65 }}
            style={{ position: 'relative', paddingBottom: 30, paddingRight: 16 }}
          >
            {/* Main */}
            <div style={{
              borderRadius: 24, overflow: 'hidden',
              background: 'linear-gradient(135deg, var(--rose) 0%, #8b2252 100%)',
              padding: 'clamp(32px, 6vw, 56px)',
              textAlign: 'center', color: 'white',
              boxShadow: '0 20px 60px rgba(201,84,124,0.25)'
            }}>
              <div style={{ marginBottom: 16 }} className='flex items-center justify-center'>
                <img src={me} alt="me" className='w-24 h-24 object-contain' />
              </div>
              <h3 style={{
                fontFamily: 'Playfair Display, serif', fontWeight: 700,
                fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', marginBottom: 4
              }}>Ismoilov Ibroxim</h3>
              <p style={{ opacity: 0.75, fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: 15 }}>
                Web Dizayner & Developer
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8, marginTop: 20 }}>
                {['React', 'Framer', 'Tailwind', 'Vite'].map(t => (
                  <span key={t} style={{
                    fontSize: 11, padding: '5px 12px', borderRadius: 99,
                    background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)'
                  }}>{t}</span>
                ))}
              </div>
            </div>

            {/* Float: stat */}
            <div

              style={{
                position: 'absolute', bottom: -20, right: 0,
                background: 'white', borderRadius: 16, padding: '14px 20px',
                boxShadow: '0 8px 30px rgba(201,84,124,0.15)',
                border: '1px solid rgba(201,84,124,0.1)'
              }}
            >
              <div className="gold-gradient" style={{
                fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: 28
              }}>100+</div>
              <div style={{ fontSize: 12, color: 'var(--gray-light)', marginTop: 2 }}>Baxtli juftlik</div>
            </div>

            {/* Float: badge */}
            <div
              style={{
                position: 'absolute', top: -16, left: 0,
                background: 'white', borderRadius: 16, padding: '10px 16px',
                boxShadow: '0 8px 24px rgba(201,168,76,0.15)',
                border: '1px solid rgba(201,168,76,0.2)',
                display: 'flex', alignItems: 'center', gap: 8
              }}
            >
              <span style={{ fontSize: 22 }}>⭐</span>
              <div>
                <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--gold)' }}>Top Dizayner</div>
                <div style={{ fontSize: 11, color: 'var(--gray-light)' }}>2024 yil</div>
              </div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15 }}
          >
            <span className="section-tag">Biz haqimizda</span>
            <h2 className="heading-lg" style={{ marginBottom: 16 }}>
              Sizning Orzuingizni{' '}
              <span className="text-gradient">Amalga Oshiramiz</span>
            </h2>
            <p className="body-italic" style={{ marginBottom: 20 }}>
              To'y taklifnomalari — bu shunchaki habar emas, bu sizning sevgi hikoyangizning boshlanishi.
              Men har bir juftlikning orzusini tinglab, ularni maxsus, interaktiv va esda qoladigan
              digital taklifnomalarga aylantiraman.
            </p>
            <p style={{ fontSize: 14, color: 'var(--gray)', lineHeight: 1.7, marginBottom: 28 }}>
              3 yildan ortiq tajriba davomida 100 dan ziyod to'y uchun taklifnoma yaratdim.
              Har bir loyiha — yangi bir sevgi hikoyasi.
            </p>

            {/* Skill cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
              {SKILLS.map((s, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.12 }}
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: 14,
                    padding: '14px 16px', borderRadius: 14,
                    background: 'rgba(201,84,124,0.04)',
                    border: '1px solid rgba(201,84,124,0.1)'
                  }}
                >
                  <div style={{
                    fontSize: 22, width: 40, height: 40,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'var(--rose-pale)', borderRadius: 10, flexShrink: 0
                  }}>{s.icon}</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--charcoal)', marginBottom: 2 }}>{s.title}</div>
                    <div style={{ fontSize: 12, color: 'var(--gray)' }}>{s.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Achievements */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
              gap: '8px 16px'
            }}>
              {ACHIEVEMENTS.map((a, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <BsCheckCircleFill style={{ color: 'var(--rose)', fontSize: 13, flexShrink: 0 }} />
                  <span style={{ fontSize: 13, color: 'var(--gray)' }}>{a}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
