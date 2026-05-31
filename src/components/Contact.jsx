import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BsTelegram, BsInstagram, BsWhatsapp, BsEnvelope } from 'react-icons/bs'
import { HiCheckCircle } from 'react-icons/hi'
import { PROCESS_STEPS } from '../data/index'
import toast, { Toaster } from 'react-hot-toast'

const CONTACTS = [
  { icon: BsTelegram,  label: 'Telegram',  value: '@ismoilov_ibroxim',     href: 'https://t.me/ismoilov_ibroxim',         color: '#0088cc' },
  { icon: BsInstagram, label: 'Instagram', value: '@taklif.uz',     href: 'https://instagram.com',               color: '#E1306C' },
  { icon: BsEnvelope,  label: 'Email',     value: 'ibrohimismoilov738@gmail.com',   href: 'https://ibrohimismoilov738@gmail.com',            color: 'var(--rose)' }
]

export default function Contact() {
  const [form, setForm]     = useState({ name: '', phone: '', message: '' })
  const [sent, setSent]     = useState(false)
  const [loading, setLoading] = useState(false)
  const { ref, inView }     = useInView({ triggerOnce: true, threshold: 0.05 })

  // Faqat raqam, +, bo'shliq, chiziq qabul qiladi
  const handlePhone = (e) => {
    const val = e.target.value.replace(/[^\d\s+\-()]/g, '')
    setForm(p => ({ ...p, phone: val }))
  }

  const submit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error('Ism va telefon raqamni kiriting!')
      return
    }
    if (form.phone.replace(/\D/g, '').length < 9) {
      toast.error('Telefon raqam to\'liq emas!')
      return
    }
    setLoading(true)
    const msg = `Yangi buyurtma!\n\nIsm: ${form.name}\nTelefon: ${form.phone}\nXabar: ${form.message || 'yo\'q'}`
    setTimeout(() => {
      window.open(`https://t.me/ismoilov_ibroxim?text=${encodeURIComponent(msg)}`, '_blank')
      setSent(true)
      setLoading(false)
      toast.success('Muvaffaqiyatli yuborildi!')
    }, 400)
  }

  // Yana yuborish — inputlarni tozalaydi
  const reset = () => {
    setSent(false)
    setForm({ name: '', phone: '', message: '' })
  }

  return (
    <section id="contact" style={{ background: 'white' }} className="section">
      <Toaster position="top-center" toastOptions={{
        style: {
          fontFamily: 'DM Sans, sans-serif', fontSize: 14,
          borderRadius: 12, border: '1px solid rgba(201,84,124,0.2)'
        }
      }} />

      <div className="container" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: 'center', marginBottom: 48 }}
        >
          <span className="section-tag">Bog'lanish</span>
          <h2 className="heading-lg" style={{ marginBottom: 10 }}>
            Orzuingizni <span className="text-gradient">Aytib Bering</span>
          </h2>
          <p className="body-italic">Bepul maslahat va arzon narxda chiroyli taklifnoma!</p>
        </motion.div>

        {/* Process steps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 160px), 1fr))',
          gap: 20, marginBottom: 56
        }}>
          {PROCESS_STEPS.map((s, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              style={{ textAlign: 'center' }}
            >
              <div style={{
                width: 52, height: 52, borderRadius: 14, margin: '0 auto 12px',
                background: 'linear-gradient(135deg, var(--rose) 0%, var(--gold) 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white', fontFamily: 'Playfair Display, serif',
                fontWeight: 700, fontSize: 18
              }}>{s.num}</div>
              <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--charcoal)', marginBottom: 4 }}>{s.title}</div>
              <div style={{ fontSize: 12, color: 'var(--gray)', lineHeight: 1.5 }}>{s.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* Two columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
          gap: 40
        }}>

          {/* Contact list */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h3 style={{
              fontFamily: 'Playfair Display, serif', fontWeight: 700,
              fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
              color: 'var(--charcoal)', marginBottom: 20
            }}>Qanday bog'lanasiz?</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
              {CONTACTS.map((c, i) => {
                const Icon = c.icon
                return (
                  <a key={i} href={c.href} target="_blank" rel="noreferrer"
                    style={{
                      display: 'flex', alignItems: 'center', gap: 14,
                      padding: '14px 16px', borderRadius: 14, textDecoration: 'none',
                      border: '1px solid rgba(201,84,124,0.1)',
                      transition: 'background 0.2s, transform 0.2s'
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--rose-pale)'; e.currentTarget.style.transform = 'translateX(4px)' }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'none' }}
                  >
                    <div style={{
                      width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                      background: c.color, display: 'flex', alignItems: 'center',
                      justifyContent: 'center', color: 'white', fontSize: 18
                    }}><Icon /></div>
                    <div>
                      <div style={{ fontSize: 11, color: 'var(--gray-light)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 2 }}>
                        {c.label}
                      </div>
                      <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--charcoal)' }}>{c.value}</div>
                    </div>
                  </a>
                )
              })}
            </div>

            {/* Hours */}
            <div style={{
              padding: '16px 20px', borderRadius: 14,
              background: 'rgba(201,84,124,0.05)',
              border: '1px solid rgba(201,84,124,0.15)'
            }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--rose)', marginBottom: 10 }}>
                ⏰ Ish vaqtimiz
              </div>
              {[
                ['Du – Shan', '09:00 – 22:00'],
                ['Yakshanba', '08:00 – 17:00']
              ].map(([d, h]) => (
                <div key={d} style={{
                  display: 'flex', justifyContent: 'space-between',
                  fontSize: 13, color: 'var(--gray)', padding: '3px 0'
                }}>
                  <span>{d}</span><span style={{ fontWeight: 500 }}>{h}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            {sent ? (
              <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                justifyContent: 'center', textAlign: 'center',
                padding: '40px 20px', gap: 12
              }}>
                <HiCheckCircle style={{ fontSize: 64, color: 'var(--rose)' }} />
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 22, color: 'var(--charcoal)' }}>
                  Rahmat! 🌸
                </h3>
                <p style={{ fontSize: 14, color: 'var(--gray)' }}>
                  Xabaringiz yuborildi. Tez orada bog'lanamiz!
                </p>
                <button onClick={reset}
                  style={{ marginTop: 8, fontSize: 13, color: 'var(--rose)', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>
                  Yana yuborish
                </button>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <h3 style={{
                  fontFamily: 'Playfair Display, serif', fontWeight: 700,
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', color: 'var(--charcoal)'
                }}>Buyurtma qoldiring</h3>

                {[
                  { label: 'Ismingiz *', key: 'name',    type: 'text', placeholder: 'Masalan: Malika' },
                  { label: 'Telefon *',  key: 'phone',   type: 'tel',  placeholder: '+998 90 000 00 00' }
                ].map(f => (
                  <div key={f.key}>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 500, color: 'var(--charcoal)', marginBottom: 6 }}>
                      {f.label}
                    </label>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        value={form[f.key ]}
                        onChange={f.key === 'phone' ? handlePhone : e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                        inputMode={f.key === 'phone' ? 'tel' : 'text'}
                        className="input"
                      />
                  </div>
                ))}

                <div>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 500, color: 'var(--charcoal)', marginBottom: 6 }}>
                    Xabar (ixtiyoriy)
                  </label>
                  <textarea
                    rows={4} placeholder="Qaysi dizayn? To'y sanasi?.."
                    value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    className="input"
                    style={{ resize: 'none' }}
                  />
                </div>

                <button type="submit" className="btn-primary" disabled={loading}
                  style={{ width: '100%', opacity: loading ? 0.7 : 1 }}>
                  {loading ? 'Yuborilmoqda...' : 'Yuborish 🌸'}
                </button>

                <p style={{ fontSize: 11, color: '#ccc', textAlign: 'center' }}>
                  Xabar to'g'ridan-to'g'ri Telegram'ga yuboriladi
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
