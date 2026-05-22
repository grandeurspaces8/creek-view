import { useState } from 'react'
import { useLang } from './LanguageContext'

const PHONE = '01008900076'
const WA_LINK = `https://wa.me/2${PHONE}/?text=Hello, I'm interested in Creek View Mountain View`
const FORMSUBMIT_URL = 'https://formsubmit.co/ajax/64aabd78887f35f7847e338d375f0317'

export default function LeadForm({ dark = false, titleKey, subtitleKey, id }) {
  const { t } = useLang()
  const f = t.form
  const [form, setForm] = useState({ name: '', phone: '', email: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(FORMSUBMIT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email || 'Not provided',
          _subject: `New Lead — Creek View MV | ${form.name} — ${form.phone}`,
          _template: 'table',
          _captcha: 'false',
        }),
      })
      const data = await res.json()
      if (data.success === 'true' || data.success === true) {
        setStatus('success')
        setForm({ name: '', phone: '', email: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const title = titleKey || (dark ? t.form2?.title : t.form.title)
  const subtitle = subtitleKey || (dark ? t.form2?.sub : t.form.sub)

  const fields = (
    <>
      {status === 'success' ? (
        <div className="form-success">{f.success}</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <input type="text" name="name" placeholder={f.name} value={form.name} onChange={handleChange} required />
          </div>
          <div className="form-field">
            <input type="tel" name="phone" placeholder={f.phone} value={form.phone} onChange={handleChange} required />
          </div>
          <div className="form-field">
            <input type="email" name="email" placeholder={f.email} value={form.email} onChange={handleChange} />
          </div>
          <button type="submit" className="btn-submit" disabled={status === 'loading'}>
            {status === 'loading' ? f.submitting : f.submit}
          </button>
          {status === 'error' && <p className="form-error">{f.error}</p>}
        </form>
      )}
      <div className="form-contact-row">
        <a href={`tel:${PHONE}`} className="btn-call-w">{f.call}</a>
        <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-wa-w">{f.whatsapp}</a>
      </div>
    </>
  )

  if (!dark) {
    return (
      <div className="hero-form" id={id || 'register'}>
        <h3>{title}</h3>
        <p>{subtitle}</p>
        {fields}
      </div>
    )
  }

  return (
    <section className="dark-form-section" id={id || 'register2'}>
      <div className="dark-form-box">
        <p className="dark-form-title">{title}</p>
        <p className="dark-form-sub">{subtitle}</p>
        {fields}
      </div>
    </section>
  )
}
