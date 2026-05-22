import Head from 'next/head'
import LeadForm from '../components/LeadForm'
import { useLang } from '../components/LanguageContext'

const PHONE = '01008900076'
const WA_LINK = `https://wa.me/2${PHONE}/?text=Hello, I'm interested in Creek View Mountain View`
const IMG = 'https://creekview-mountainview.com/wp-content/uploads/2026/05'

// Use smaller/optimized versions where possible
const IMGS = {
  logo:     `${IMG}/MV_Logo_Horizontal.png`,
  hero:     `${IMG}/%D9%83%D8%B1%D9%8A%D9%83-%D9%81%D9%8A%D9%88-%D9%85%D8%A7%D9%88%D9%86%D8%AA%D9%86-%D9%81%D9%8A%D9%88-.jpg`,
  location: `${IMG}/%D9%83%D8%B1%D9%8A%D9%83-%D9%81%D9%8A%D9%88-%D9%85%D8%A7%D9%88%D9%86%D8%AA%D9%86-%D9%81%D9%8A%D9%88--5.jpg`,
  gallery: [
    `${IMG}/%D9%83%D8%B1%D9%8A%D9%83-%D9%81%D9%8A%D9%88-%D9%85%D8%A7%D9%88%D9%86%D8%AA%D9%86-%D9%81%D9%8A%D9%88--3.jpg`,
    `${IMG}/%D9%83%D8%B1%D9%8A%D9%83-%D9%81%D9%8A%D9%88-%D9%85%D8%A7%D9%88%D9%86%D8%AA%D9%86-%D9%81%D9%8A%D9%88--4.jpg`,
    `${IMG}/%D9%83%D8%B1%D9%8A%D9%83-%D9%81%D9%8A%D9%88-%D9%85%D8%A7%D9%88%D9%86%D8%AA%D9%86-%D9%81%D9%8A%D9%88--1.jpg`,
    `${IMG}/%D9%83%D8%B1%D9%8A%D9%83-%D9%81%D9%8A%D9%88-%D9%85%D8%A7%D9%88%D9%86%D8%AA%D9%86-%D9%81%D9%8A%D9%88--2.jpg`,
    `${IMG}/%D9%83%D8%B1%D9%8A%D9%83-%D9%81%D9%8A%D9%88-%D9%85%D8%A7%D9%88%D9%86%D8%AA%D9%86-%D9%81%D9%8A%D9%88--1.jpg`,
    `${IMG}/creek-view.png`,
  ],
}

// Lazy image component - loads only when visible
function LazyImg({ src, alt, style, className }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      style={style}
      className={className}
    />
  )
}

export default function Home() {
  const { lang, t, toggle } = useLang()
  const isRTL = lang === 'ar'

  return (
    <>
      <Head>
        <title>Creek View — New Cairo | Mountain View</title>
        <meta name="description" content="A new project by Mountain View on 119 acres in the heart of the Fifth Settlement." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Preload hero image for fast LCP */}
        <link rel="preload" as="image" href={IMGS.hero} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://creekview-mountainview.com" />
      </Head>

      <div dir={t.dir} style={{ fontFamily: isRTL ? "'Cairo', 'Inter', sans-serif" : "'Inter', sans-serif" }}>

        {/* ─── NAVBAR ─── */}
        <nav className="navbar">
          <div className="navbar-inner">
            <div className="navbar-logo">
              <img src={IMGS.logo} alt="Mountain View" width={120} height={36} />
            </div>
            {/* Desktop links */}
            <ul className="navbar-links">
              <li><a href="#home">{t.nav.home}</a></li>
              <li><a href="#register">{t.nav.register}</a></li>
              <li><a href="#features">{t.nav.features}</a></li>
              <li><a href="#units">{t.nav.projects}</a></li>
              <li>
                <button onClick={toggle} style={{
                  background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.25)',
                  color: '#fff', padding: '7px 16px', borderRadius: 6, cursor: 'pointer',
                  fontSize: 13, fontWeight: 700, fontFamily: 'inherit',
                }}>
                  {lang === 'en' ? 'عربي' : 'English'}
                </button>
              </li>
              <li><a href="#register" className="navbar-cta">{t.nav.contact}</a></li>
            </ul>
            {/* Mobile lang button — always visible on mobile */}
            <button onClick={toggle} className="mobile-lang-btn">
              {lang === 'en' ? 'عربي' : 'English'}
            </button>
          </div>
        </nav>

        {/* ─── HERO ─── */}
        <section className="hero" id="home">
          <div className="hero-inner">
            <div>
              <img src={IMGS.logo} alt="Mountain View" className="hero-logo" width={160} height={44} />
              <h1>{t.hero.title1}<br /><em>{t.hero.title2}</em></h1>
              <p className="hero-sub">{t.hero.sub}</p>
              <a href="#register" className="btn-hero">{t.hero.cta}</a>
            </div>
            <LeadForm id="register" />
          </div>
        </section>

        {/* ─── ABOUT ─── */}
        <section className="section section-bg" id="about">
          <div className="section-inner">
            <div className="about-grid">
              <div className="about-img">
                <LazyImg src={IMGS.hero} alt="Creek View" />
              </div>
              <div className="about-text">
                <div className="section-label">{t.about.label}</div>
                <h2 className="section-title">{t.about.title1}<br />{t.about.title2}</h2>
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
                <p>{t.about.p3}</p>
                <a href="#register" className="btn-hero" style={{ marginTop: 8 }}>{t.about.cta}</a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FEATURES ─── */}
        <section className="section" id="features">
          <div className="section-inner">
            <div style={{ textAlign: 'center' }}>
              <div className="section-label">{t.features.label}</div>
              <h2 className="section-title">{t.features.title}</h2>
              <p className="section-desc" style={{ margin: '0 auto' }}>{t.features.sub}</p>
            </div>
            <div className="features-grid">
              {t.features.items.map(([icon, title, desc]) => (
                <div key={title} className="feature-card">
                  <div className="feature-icon">{icon}</div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── LOCATION ─── */}
        <section className="section section-bg" id="location">
          <div className="section-inner">
            <div className="location-grid">
              <div>
                <div className="section-label">{t.location.label}</div>
                <h2 className="section-title">{t.location.title1}<br />{t.location.title2}</h2>
                <p className="section-desc">{t.location.sub}</p>
                <ul className="location-list">
                  {t.location.items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
                <p style={{ color: 'var(--muted)', fontSize: 15, marginTop: 20, lineHeight: 1.7 }}>
                  {t.location.note}
                </p>
              </div>
              <div className="location-img">
                <a href="https://www.google.com/maps/search/Mountain+View+Creek+View+New+Cairo" target="_blank" rel="noreferrer">
                  <LazyImg src={IMGS.location} alt="Creek View Location" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── GALLERY ─── */}
        <section className="section" id="gallery">
          <div className="section-inner">
            <div style={{ textAlign: 'center' }}>
              <div className="section-label">{t.gallery.label}</div>
              <h2 className="section-title">{t.gallery.title}</h2>
              <p className="section-desc" style={{ margin: '0 auto' }}>{t.gallery.sub}</p>
            </div>
            <div className="gallery-grid">
              {IMGS.gallery.map((src, i) => (
                <a key={i} href={src} target="_blank" rel="noreferrer" className="gallery-item">
                  <LazyImg src={src} alt={`Creek View ${i + 1}`} />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ─── UNITS ─── */}
        <section className="section section-bg" id="units">
          <div className="section-inner">
            <div style={{ textAlign: 'center' }}>
              <div className="section-label">{t.units.label}</div>
              <h2 className="section-title">{t.units.title}</h2>
              <p className="section-desc" style={{ margin: '0 auto' }}>{t.units.sub}</p>
            </div>
            <div className="units-grid">
              {t.units.items.map((u, i) => (
                <div key={i} className="unit-card" style={i === 1 ? { borderColor: 'var(--blue)' } : {}}>
                  {u.badge && <div className="unit-badge">{u.badge}</div>}
                  <h3>{u.title}</h3>
                  <div className="unit-size">{u.size}</div>
                  <div className="unit-price-label">{u.priceLabel}</div>
                  <div className="unit-price">{u.price} <span>{u.currency}</span></div>
                  <div className="unit-payment">{u.payment}</div>
                  <a href="#register2" className="btn-unit">{t.units.cta}</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── DARK FORM ─── */}
        <LeadForm dark id="register2" />

        {/* ─── FOOTER ─── */}
        <footer className="footer">
          <div className="footer-inner">
            <div className="footer-brand">
              <img src={IMGS.logo} alt="Mountain View" width={120} height={36} loading="lazy" />
              <p>{t.footer.desc}</p>
            </div>
            <div className="footer-col">
              <h4>{t.footer.quickLinks}</h4>
              <ul>
                {['#about','#features','#location','#units'].map((href, i) => (
                  <li key={i}><a href={href}>{t.footer.links[i]}</a></li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h4>{t.footer.mvProjects}</h4>
              <ul>
                {t.footer.projects.map((p, i) => (
                  <li key={i}><a href="#units">{p}</a></li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h4>{t.footer.contact}</h4>
              <p>
                <strong style={{ color: 'rgba(255,255,255,0.7)' }}>Email:</strong><br />
                leads@grandeur-spaces.com<br /><br />
                <strong style={{ color: 'rgba(255,255,255,0.7)' }}>{isRTL ? 'هاتف' : 'Call'}:</strong><br />
                <a href={`tel:${PHONE}`} style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>{PHONE}</a><br /><br />
                <strong style={{ color: 'rgba(255,255,255,0.7)' }}>{isRTL ? 'العنوان' : 'Address'}:</strong><br />
                {t.footer.address}
              </p>
            </div>
          </div>
          <div className="footer-bottom">{t.footer.copyright}</div>
        </footer>

        {/* ─── STICKY CTA ─── */}
        <div className="sticky-cta">
          <a href={`tel:${PHONE}`}>{t.sticky.call}</a>
          <a href={WA_LINK} target="_blank" rel="noreferrer">{t.sticky.wa}</a>
        </div>

      </div>
    </>
  )
}
