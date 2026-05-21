import Head from 'next/head'
import LeadForm from '../components/LeadForm'

const PHONE = '01008900076'
const WA_LINK = `https://wa.me/2${PHONE}/?text=مرحباً، أريد الاستفسار عن مشروع كريك فيو ماونتن فيو`
const MV = 'https://mountianvieweg.com/wp-content/uploads'

export default function Home() {
  return (
    <>
      <Head>
        <title>كريك فيو — ماونتن فيو للتطوير العقاري | التجمع الخامس</title>
        <meta name="description" content="كريك فيو ماونتن فيو — التجمع الخامس. مقدم 5% وتقسيط يصل لـ 14 سنة. I-Villas وشقق Millennials بأفضل الأسعار." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>

      {/* ─── NAVBAR ─── */}
      <nav className="navbar">
        <div className="navbar-inner">
          <div className="navbar-logo">
            <img src={`${MV}/2025/01/MV_Logo_Horizontal.png`} alt="Mountain View" />
          </div>
          <div className="navbar-btns">
            <a href={`tel:${PHONE}`} className="btn-nav-call">📞 {PHONE}</a>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-nav-wa">💬 واتساب</a>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="hero" id="hero">
        <div className="hero-inner">
          <div className="hero-text">
            <span className="hero-tag">Launching Now — 2026</span>
            <h1>Creekview<br /><span>التجمع الخامس</span></h1>
            <p className="hero-desc">
              في قلب الـ Golden Square، صممنا مجتمع سكني يقدم معنى مختلف للحياة اليومية…
              مساحات مفتوحة، خصوصية حقيقية، وتفاصيل مدروسة تخلّي كل لحظة أكثر راحة.
            </p>
            <div className="hero-highlight">
              🏠 مقدم 5% وتقسيط يصل لـ 14 سنة<br />
              ⏰ أول قسط بعد 3 شهور
            </div>
            <div className="hero-btns">
              <a href={`tel:${PHONE}`} className="btn-hero-call">📞 هاتف</a>
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-hero-wa">💬 واتساب</a>
            </div>
          </div>
          <LeadForm id="form" title="سجل بياناتك" subtitle="وسيتواصل معك فريق المبيعات" />
        </div>
      </section>

      {/* ─── ABOUT PROJECT ─── */}
      <section className="section section-bg">
        <div className="section-inner">
          <div className="location-grid">
            <div className="location-img">
              <img src={`${MV}/2026/05/ddd-1024x1024.png`} alt="كريك فيو موقع" />
            </div>
            <div>
              <div className="sec-tag">نظرة عامة</div>
              <h2 className="sec-title">مشروع كريك فيو — 119 فدان</h2>
              <p className="sec-desc">
                على مساحة 119 فدان، حافظنا على إن نسبة البناء تكون 16% علشان تفضل الطبيعة
                هي العنصر الأساسي في حياتك. لاندسكيب ممتد، مساحات مفتوحة، وإحساس دائم بالهدوء.
                موقع مميز جداً في قلب التجمع الخامس وأهم الميادين.
              </p>
              <ul className="location-items">
                <li>دقيقة من Family Park</li>
                <li>محور محمد نجيب</li>
                <li>10 دقائق من AUC</li>
                <li>10 دقائق من مطار القاهرة</li>
                <li>Cairo Festival City</li>
                <li>العاصمة الإدارية</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── AMENITIES ─── */}
      <section className="section">
        <div className="section-inner">
          <div style={{ textAlign: 'center', marginBottom: 10 }}>
            <div className="sec-tag">الخدمات والمرافق</div>
            <h2 className="sec-title">تجربة حياة استثنائية</h2>
            <p className="sec-desc" style={{ maxWidth: 500, margin: '0 auto' }}>
              كل ما تحتاجه لحياة عصرية وصحية محاطة بالطبيعة
            </p>
          </div>
          <div className="amenities-grid">
            {[
              ['🏊', 'Swimming Pool'],
              ['🏡', 'Clubhouse'],
              ['🛍️', 'Commercial Areas'],
              ['👶', 'Kids Areas'],
              ['🌿', 'Landscape'],
              ['🔐', '24H Security'],
              ['🏋️', 'GYM & SPA'],
              ['🚗', 'Parking'],
            ].map(([icon, label]) => (
              <div key={label} className="amenity-card">
                <div className="amenity-icon">{icon}</div>
                <p>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FORM 1 ─── */}
      <LeadForm dark id="form1" title="احجز وحدتك الآن" subtitle="أسعار تفضيلية للحجز المبكر" />

      {/* ─── PRICES ─── */}
      <section className="section section-dark">
        <div className="section-inner">
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <div className="sec-tag">الأسعار</div>
            <h2 className="sec-title light">أسعار مشروع كريك فيو</h2>
            <p className="sec-desc light">
              الأسعار على نظام سداد 14 سنة — استلام سنتين ونصف
            </p>
          </div>
          <div className="price-grid">
            {[
              ['Garden Millennial 2 BRs', 'تبدأ من 7.5 مليون جنيه'],
              ['Millennial 2 BRs', 'تبدأ من 6.9 مليون جنيه'],
              ['Garden Millennial 1 BR', 'تبدأ من 6.5 مليون جنيه'],
              ['Millennial 1 BR', 'تبدأ من 5.4 مليون جنيه'],
              ['I-Villa Garden 3 BRs', 'تبدأ من 12.9 مليون جنيه'],
              ['Skyvilla 3 BRs', 'تبدأ من 11.5 مليون جنيه'],
              ['Garden Millennial 3 BRs', 'تبدأ من 9.8 مليون جنيه'],
              ['Millennial 3 BRs', 'تبدأ من 8.6 مليون جنيه'],
            ].map(([type, price]) => (
              <div key={type} className="price-card">
                <h4>{type}</h4>
                <div className="amount">{price}</div>
                <a href="#form2">اعرف أكتر عن المشروع</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GALLERY ─── */}
      <section className="section section-bg">
        <div className="section-inner">
          <div style={{ textAlign: 'center', marginBottom: 10 }}>
            <div className="sec-tag">صور المشروع</div>
            <h2 className="sec-title">لمحات من كريك فيو</h2>
            <p className="sec-desc">شاهد جمال تصميم المشروع</p>
          </div>
          <div className="gallery-grid">
            {[
              `${MV}/2026/05/WhatsApp-Image-2026-05-18-at-17.20.08-2.jpeg`,
              `${MV}/2026/05/WhatsApp-Image-2026-05-18-at-17.20.08.jpeg`,
              `${MV}/2026/05/WhatsApp-Image-2026-05-18-at-17.20.09-1.jpeg`,
              `${MV}/2026/05/WhatsApp-Image-2026-05-18-at-17.20.09.jpeg`,
              `${MV}/2026/05/WhatsApp-Image-2026-05-18-at-17.20.08-1.png`,
              `${MV}/2026/05/WhatsApp-Image-2026-05-18-at-17.20.08-1.jpeg`,
            ].map((src, i) => (
              <a key={i} href={src} target="_blank" rel="noreferrer">
                <img src={src} alt={`كريك فيو ${i + 1}`} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FORM 2 ─── */}
      <LeadForm dark id="form2" title="سجل بياناتك" subtitle="وسيتواصل معك مستشارنا العقاري في أقرب وقت" />

      {/* ─── OTHER PROJECTS ─── */}
      <section className="section section-dark2">
        <div className="section-inner">
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <div className="sec-tag">مشاريع أخرى</div>
            <h2 className="sec-title light">مشاريع ماونتن فيو</h2>
          </div>

          {/* CRYSTA */}
          <div className="project-grid" style={{ marginBottom: 60 }}>
            <div className="project-img">
              <img src={`${MV}/2025/06/WhatsApp-Image-2025-06-27-at-02.23.10-1024x683.jpeg`} alt="Crysta" />
              <img src={`${MV}/2026/05/1500x628px_image_1_81e3dda2c2-1024x429.webp`} alt="Crysta Location" />
            </div>
            <div>
              <div className="sec-tag">الساحل الشمالي</div>
              <h3 className="sec-title light" style={{ fontSize: 26 }}>Crysta — سيدي عبد الرحمن</h3>
              <ul className="project-bullets">
                <li>الكيلو 123 — المساحة: 470 فدان</li>
                <li>شاطئ خاص بطول 1 كم</li>
                <li>90% من الوحدات تطل على البحر أو اللاجون</li>
                <li>وحدات كاملة التشطيب</li>
                <li>أسعار تبدأ من 14 مليون جنيه</li>
                <li>مقدم 5% وقسط على 9 سنوات</li>
                <li>بجوار Plage — 15 دقيقة من مراسي</li>
                <li>10 دقائق من مطار العلمين</li>
              </ul>
              <div style={{ display: 'flex', gap: 10, marginTop: 16, flexWrap: 'wrap' }}>
                <a href={`tel:${PHONE}`} className="btn-hero-call" style={{ fontSize: 14, padding: '10px 18px' }}>📞 هاتف</a>
                <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-hero-wa" style={{ fontSize: 14, padding: '10px 18px' }}>💬 واتساب</a>
              </div>
            </div>
          </div>

          {/* JIRIAN */}
          <div className="project-grid" style={{ marginBottom: 60 }}>
            <div className="project-img">
              <img src={`${MV}/2025/06/5-8.png`} alt="Jirian" />
              <img src={`${MV}/2025/05/1.webp`} alt="Jirian 2" />
            </div>
            <div>
              <div className="sec-tag">6 أكتوبر</div>
              <h3 className="sec-title light" style={{ fontSize: 26 }}>Jirian — جريان ماونتن فيو</h3>
              <ul className="project-bullets">
                <li>على مساحة 1500 فدان</li>
                <li>محور الشيخ زايد — مدينة 6 أكتوبر</li>
                <li>فيلات، آي فيلا، شقق</li>
                <li>واجهة مباشرة على الطريق الدائري الأوسطي</li>
                <li>دقائق من المتحف المصري الجديد ومطار سفينكس</li>
                <li>النيل يمر وسط المشروع</li>
                <li>أسعار تبدأ من 12 مليون جنيه</li>
                <li>مقدم 5% وقسط على 8 سنوات</li>
              </ul>
              <div style={{ display: 'flex', gap: 10, marginTop: 16, flexWrap: 'wrap' }}>
                <a href={`tel:${PHONE}`} className="btn-hero-call" style={{ fontSize: 14, padding: '10px 18px' }}>📞 هاتف</a>
                <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-hero-wa" style={{ fontSize: 14, padding: '10px 18px' }}>💬 واتساب</a>
              </div>
            </div>
          </div>

          {/* ICITY NEW CAIRO */}
          <div className="project-grid" style={{ marginBottom: 60 }}>
            <div className="project-img">
              <img src={`${MV}/2025/06/10-8.png`} alt="iCity New Cairo" />
              <img src={`${MV}/2025/01/Image00008_692d8e4ccc.webp`} alt="iCity 2" />
            </div>
            <div>
              <div className="sec-tag">التجمع الخامس</div>
              <h3 className="sec-title light" style={{ fontSize: 26 }}>iCity New Cairo</h3>
              <ul className="project-bullets">
                <li>في قلب التجمع الخامس — 500 فدان</li>
                <li>6 جزر متصلة بطرق رئيسية</li>
                <li>مساحات خضراء واسعة ومرافق ترفيهية عالمية</li>
                <li>مسارات رياضية ومناطق ترفيهية</li>
                <li>أسعار تبدأ من 14 مليون جنيه</li>
                <li>مقدم 10% وقسط على 8 سنوات</li>
              </ul>
              <div style={{ display: 'flex', gap: 10, marginTop: 16, flexWrap: 'wrap' }}>
                <a href={`tel:${PHONE}`} className="btn-hero-call" style={{ fontSize: 14, padding: '10px 18px' }}>📞 هاتف</a>
                <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-hero-wa" style={{ fontSize: 14, padding: '10px 18px' }}>💬 واتساب</a>
              </div>
            </div>
          </div>

          {/* ALIVA */}
          <div className="project-grid">
            <div className="project-img">
              <img src={`${MV}/2025/06/aliva.png`} alt="Aliva" />
              <img src={`${MV}/2025/01/Project_Cover_Overview_8_b42788db8a.webp`} alt="Aliva 2" />
            </div>
            <div>
              <div className="sec-tag">مدينة المستقبل</div>
              <h3 className="sec-title light" style={{ fontSize: 26 }}>Aliva — مدينة المستقبل</h3>
              <ul className="project-bullets">
                <li>664 فدان — مدينة المستقبل</li>
                <li>River Park، Fields Park، Heart Work</li>
                <li>مساحات خضراء واسعة ومرافق متكاملة</li>
                <li>مسارات رياضية ومناطق ترفيهية</li>
                <li>أسعار تبدأ من 11 مليون جنيه</li>
                <li>مقدم 5% وقسط على 10 سنوات</li>
              </ul>
              <div style={{ display: 'flex', gap: 10, marginTop: 16, flexWrap: 'wrap' }}>
                <a href={`tel:${PHONE}`} className="btn-hero-call" style={{ fontSize: 14, padding: '10px 18px' }}>📞 هاتف</a>
                <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-hero-wa" style={{ fontSize: 14, padding: '10px 18px' }}>💬 واتساب</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ABOUT COMPANY ─── */}
      <section className="section section-dark">
        <div className="section-inner" style={{ maxWidth: 800 }}>
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <img src={`${MV}/2025/01/mv-slogo.png`} alt="MV" style={{ height: 60, marginBottom: 16 }} />
            <div className="sec-tag">من نحن</div>
            <h2 className="sec-title light">ماونتن فيو للتطوير العقاري</h2>
          </div>
          <p className="about-text" style={{ textAlign: 'center' }}>
            تأسست <strong>Mountain View</strong> في عام 2005، تسعى إلى تقديم مشروعات تمزج بين الحياة العصرية والطبيعة،
            مع التركيز على خلق بيئة سكنية توفر رفاهية للسكان في جميع جوانب حياتهم.
            يتم تصميم المشاريع بعناية لضمان بيئة صحية ومتوازنة من حيث المساحات الخضراء،
            المرافق الحديثة، والموقع الاستراتيجي الذي يُسهل الوصول إلى كافة احتياجات الحياة اليومية.
          </p>
        </div>
      </section>

      {/* ─── FINAL FORM ─── */}
      <LeadForm dark id="final-form" title="تواصل معنا الآن" subtitle="احصل على استشارة مجانية وأفضل الأسعار" />

      {/* ─── FOOTER ─── */}
      <footer className="footer">
        <img src={`${MV}/2025/01/MV_Logo_Horizontal.png`} alt="Mountain View" />
        <a href={`tel:${PHONE}`}>{PHONE}</a>
        <p>© 2026 Mountain View Developments Egypt — All Rights Reserved</p>
      </footer>

      {/* ─── STICKY CTA ─── */}
      <div className="sticky-cta">
        <a href={`tel:${PHONE}`}>📞 اتصل بنا</a>
        <a href={WA_LINK} target="_blank" rel="noreferrer">💬 واتساب</a>
      </div>
    </>
  )
}
