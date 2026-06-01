import { useState } from 'react'
import { useLang } from './LanguageContext'

const PHONE = '01008900076'
const WA_LINK = `https://wa.me/2${PHONE}/?text=Hello, I'm interested in Creek View Mountain View`

// ✅ تم تعديل رابط الفورم فقط
const FORMSUBMIT_URL = 'https://api.web3forms.com/submit'

export default function LeadForm({ dark = false, titleKey, subtitleKey, id }) {
  const { t } = useLang()
  const f = t.form

  const [form, setForm] = useState({
    name: '',
    phone1: '',
    phone2: '',
    email: ''
  })

  const [status, setStatus] = useState(null)

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch(FORMSUBMIT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: '968c2808-d4bd-482c-a72e-6489a307d7d7',

          name: form.name,
          phone1: form.phone1,
          phone2: form.phone2 || 'Not provided',
          email: form.email || 'Not provided',

          subject: `New Lead — Creek View MV | ${form.name} — ${form.phone1}`,
          _template: 'table',
        }),
      })

      const data = await res.json()

      if (res.ok) {
        setStatus('success')

        // ✅ تتبع Google Tag Manager
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event: 'lead_form_submit'
        })

        setForm({
          name: '',
          phone1: '',
          phone2: '',
          email: ''
        })

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
            <input
              type="text"
              name="name"
              placeholder={f.name}
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <input
              type="tel"
              name="phone1"
              placeholder="Phone Number 1 *"
              value={form.phone1}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <input
              type="tel"
              name="phone2"
              placeholder="Phone Number 2"
              value={form.phone2}
              onChange={handleChange}
            />
          </div>

          <div className="form-field">
            <input
              type="email"
              name="email"
              placeholder={f.email}
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="btn-submit"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? f.submitting : f.submit}
          </button>

          {status === 'error' && (
            <p className="form-error">{f.error}</p>
          )}
        </form>
      )}

      <div className="form-contact-row">
        <a href={`tel:${PHONE}`} className="btn-call-w">
          {f.call}
        </a>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noreferrer"
          className="btn-wa-w"
        >
          {f.whatsapp}
        </a>
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
