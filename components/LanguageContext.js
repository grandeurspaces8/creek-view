import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()

export const translations = {
  en: {
    dir: 'ltr',
    nav: {
      home: 'HOME',
      register: 'Register Interest',
      features: 'Features',
      projects: 'MV Projects',
      contact: 'Contact Us',
    },
    hero: {
      title1: 'Creek View —',
      title2: 'New Cairo',
      sub: 'A new project by Mountain View on 119 acres in the heart of the Fifth Settlement, with a built-up area of only 16.2%.',
      cta: 'Register Your Interest Now →',
    },
    form: {
      title: 'Register Your Interest in Creek View',
      sub: 'Leave your details and our team will contact you with full project information and payment plans.',
      name: 'Full Name *',
      phone: 'Phone Number *',
      email: 'Email (Optional)',
      submit: 'Submit',
      submitting: 'Submitting...',
      success: "✅ Thank you! We'll be in touch shortly.",
      error: '⚠️ Something went wrong. Please try again.',
      call: '📞 Call Us',
      whatsapp: '💬 WhatsApp',
    },
    about: {
      label: 'About the Project',
      title1: 'Creek View —',
      title2: 'The Fifth Settlement',
      p1: 'Creek View is the newest project by Mountain View in New Cairo, spread over 119 acres in the Fifth Settlement. The built-up area does not exceed 16.2% of the total land, while the remaining space is dedicated to landscape, water features and three garden zones: Creek Heights, Creek Valleys and Creek Islands.',
      p2: 'The project is located only 3 minutes from South 90th Road, close to North 90th Road, the Suez Road and the Ring Road, and less than 5 minutes from the American University in Cairo (AUC). It is also near the New Administrative Capital, Madinaty, Al Rehab, Mostakbal City and Maadi.',
      p3: 'Mountain View was founded in 2005 and has delivered over 20 projects across Egypt with revenues exceeding EGP 20 billion.',
      cta: 'Request Details & Prices Now →',
    },
    features: {
      label: 'Why Creek View',
      title: 'An Exceptional Lifestyle',
      sub: 'Everything you need for a modern, healthy life surrounded by nature.',
      items: [
        ['🌳', '119 Acres', 'A vast community with only 16.2% built-up area — the rest is open landscape.'],
        ['🌿', 'Three Garden Zones', 'Creek Heights, Creek Valleys, and Creek Islands — each with its own character.'],
        ['💧', 'Water Features', 'Waterways and lakes woven throughout the project for a serene living experience.'],
        ['📍', 'Prime Location', '3 minutes from South 90th Road and under 5 minutes from AUC.'],
        ['🏊', 'Swimming Pools', 'Multiple swimming pools and water amenities throughout the community.'],
        ['🏋️', 'Clubhouse & GYM', 'State-of-the-art clubhouse with gym, spa and wellness facilities.'],
        ['🛍️', 'Commercial Areas', 'Retail and dining options within walking distance of your home.'],
        ['🔐', '24/7 Security', 'Comprehensive security system ensuring peace of mind around the clock.'],
      ],
    },
    location: {
      label: 'Location',
      title1: 'A Strategic Location',
      title2: 'in New Cairo',
      sub: "Creek View sits in the Fifth Settlement, perfectly positioned between New Cairo's key roads and landmarks.",
      items: [
        '3 minutes from South 90th Road',
        'Less than 5 minutes from AUC',
        'Close to the Suez Road and the Ring Road',
        'Near the New Administrative Capital',
        'Close to Madinaty, Al Rehab, Mostakbal City, and Maadi',
      ],
      note: 'A location that combines easy access to all of Cairo with a calm, green lifestyle.',
    },
    gallery: {
      label: 'Gallery',
      title: 'Glimpses of Creek View',
      sub: 'See the beauty of the project design. (Click images to enlarge)',
    },
    units: {
      label: 'Units & Prices',
      title: 'Units, Spaces & Prices',
      sub: 'Creek View offers a variety of villas and luxury apartments for different needs.',
      cta: 'Request Prices & Payment Plan',
      items: [
        { title: 'Luxury Apartments', size: 'Starting from 65 m²', priceLabel: 'Prices starting from', price: '8,000,000', currency: 'EGP', badge: null, payment: '5% down payment — up to 10 years' },
        { title: 'Duplex Units', size: 'Various sizes available', priceLabel: 'Prices up to', price: '16,000,000', currency: 'EGP', badge: 'Most Popular', payment: '5% down payment — up to 10 years' },
        { title: 'Villas', size: 'Up to 200 m² and above', priceLabel: 'Payment plan', price: '5% down — 10 years', currency: '', badge: null, payment: 'Flexible payment plans available' },
      ],
    },
    form2: {
      title: 'Register Your Interest Now',
      sub: 'Be the first to know about Creek View. Fill in your details and we will contact you shortly.',
    },
    footer: {
      desc: 'Mountain View is a leading Egyptian real estate developer, founded in 2005, with over 20 projects and EGP 20 billion+ in revenues.',
      quickLinks: 'Quick Links',
      links: ['About the Project', 'Features', 'Location', 'Prices'],
      mvProjects: 'MV Projects',
      projects: ['MV Lagoon — New Cairo', 'Aliva — Mostakbal City', 'iCity October', 'Evia — North Coast'],
      contact: 'Contact',
      address: 'New Cairo, Fifth Settlement',
      copyright: '© 2026 All rights reserved — Creek View Mountain View.',
    },
    sticky: { call: '📞 Call Us', wa: '💬 WhatsApp' },
  },

  ar: {
    dir: 'rtl',
    nav: {
      home: 'الرئيسية',
      register: 'سجّل اهتمامك',
      features: 'المميزات',
      projects: 'مشاريع MV',
      contact: 'تواصل معنا',
    },
    hero: {
      title1: 'كريك فيو —',
      title2: 'القاهرة الجديدة',
      sub: 'أحدث مشاريع ماونتن فيو على 119 فدان في قلب التجمع الخامس، بنسبة بناء 16.2% فقط.',
      cta: 'سجّل اهتمامك الآن ←',
    },
    form: {
      title: 'سجّل اهتمامك في كريك فيو',
      sub: 'اترك بياناتك وسيتواصل معك فريقنا بكل المعلومات وأنظمة السداد.',
      name: 'الاسم الكامل *',
      phone: 'رقم الهاتف *',
      email: 'البريد الإلكتروني (اختياري)',
      submit: 'إرسال',
      submitting: 'جاري الإرسال...',
      success: '✅ شكراً! سنتواصل معك قريباً.',
      error: '⚠️ حدث خطأ، يرجى المحاولة مرة أخرى.',
      call: '📞 اتصل بنا',
      whatsapp: '💬 واتساب',
    },
    about: {
      label: 'عن المشروع',
      title1: 'كريك فيو —',
      title2: 'التجمع الخامس',
      p1: 'كريك فيو هو أحدث مشاريع ماونتن فيو في القاهرة الجديدة، على مساحة 119 فداناً في التجمع الخامس. نسبة البناء لا تتجاوز 16.2% من إجمالي المساحة، والباقي مخصص للاندسكيب والمسطحات المائية وثلاث مناطق خضراء: كريك هايتس، كريك فالييز، وكريك آيلاندز.',
      p2: 'يقع المشروع على بُعد 3 دقائق فقط من طريق التسعين الجنوبي، وقريب من الطريق الدائري وطريق السويس، وأقل من 5 دقائق من الجامعة الأمريكية AUC، وقريب من العاصمة الإدارية، مدينتي، الرحاب، مستقبل سيتي، والمعادي.',
      p3: 'تأسست ماونتن فيو عام 2005 وسلّمت أكثر من 20 مشروعاً في مصر بإيرادات تتجاوز 20 مليار جنيه.',
      cta: 'اطلب التفاصيل والأسعار الآن ←',
    },
    features: {
      label: 'لماذا كريك فيو',
      title: 'تجربة حياة استثنائية',
      sub: 'كل ما تحتاجه لحياة عصرية وصحية محاطة بالطبيعة.',
      items: [
        ['🌳', '119 فداناً', 'مجتمع ضخم بنسبة بناء 16.2% فقط — والباقي لاندسكيب مفتوح.'],
        ['🌿', 'ثلاث مناطق خضراء', 'كريك هايتس، كريك فالييز، وكريك آيلاندز — لكل منها طابعها المميز.'],
        ['💧', 'مسطحات مائية', 'ممرات مائية وبحيرات تمتد في أرجاء المشروع لتجربة هادئة ومميزة.'],
        ['📍', 'موقع استراتيجي', '3 دقائق من التسعين الجنوبي وأقل من 5 دقائق من AUC.'],
        ['🏊', 'حمامات سباحة', 'حمامات سباحة متعددة ومرافق مائية في أرجاء المجتمع.'],
        ['🏋️', 'كلوب هاوس وجيم', 'كلوب هاوس متطور مع جيم وسبا ومرافق عافية متكاملة.'],
        ['🛍️', 'مناطق تجارية', 'خيارات تسوق ومطاعم على مقربة من منزلك.'],
        ['🔐', 'أمن 24/7', 'نظام أمن متكامل يضمن راحة بالك على مدار الساعة.'],
      ],
    },
    location: {
      label: 'الموقع',
      title1: 'موقع استراتيجي',
      title2: 'في القاهرة الجديدة',
      sub: 'يقع كريك فيو في التجمع الخامس، في موقع مثالي بين أهم طرق ومعالم القاهرة الجديدة.',
      items: [
        '3 دقائق من طريق التسعين الجنوبي',
        'أقل من 5 دقائق من AUC',
        'قريب من الطريق الدائري وطريق السويس',
        'قريب من العاصمة الإدارية الجديدة',
        'قريب من مدينتي والرحاب ومستقبل سيتي والمعادي',
      ],
      note: 'موقع يجمع بين سهولة الوصول لكل القاهرة وأسلوب حياة هادئ وأخضر.',
    },
    gallery: {
      label: 'الصور',
      title: 'لمحات من كريك فيو',
      sub: 'شاهد جمال تصميم المشروع. (اضغط على الصور للتكبير)',
    },
    units: {
      label: 'الوحدات والأسعار',
      title: 'الوحدات والمساحات والأسعار',
      sub: 'كريك فيو يقدم مجموعة متنوعة من الفلل والشقق الفاخرة لمختلف الاحتياجات.',
      cta: 'اطلب الأسعار وخطة السداد',
      items: [
        { title: 'شقق فاخرة', size: 'تبدأ من 65 م²', priceLabel: 'الأسعار تبدأ من', price: '8,000,000', currency: 'جنيه', badge: null, payment: 'مقدم 5% — حتى 10 سنوات' },
        { title: 'وحدات دوبلكس', size: 'مساحات متنوعة', priceLabel: 'الأسعار تصل إلى', price: '16,000,000', currency: 'جنيه', badge: 'الأكثر طلباً', payment: 'مقدم 5% — حتى 10 سنوات' },
        { title: 'فلل', size: 'حتى 200 م² وأكثر', priceLabel: 'نظام السداد', price: 'مقدم 5% — 10 سنوات', currency: '', badge: null, payment: 'أنظمة سداد مرنة متاحة' },
      ],
    },
    form2: {
      title: 'سجّل اهتمامك الآن',
      sub: 'كن أول من يعلم عن كريك فيو. سجّل بياناتك وسنتواصل معك قريباً.',
    },
    footer: {
      desc: 'ماونتن فيو شركة تطوير عقاري رائدة في مصر، تأسست عام 2005، بأكثر من 20 مشروعاً وإيرادات تتجاوز 20 مليار جنيه.',
      quickLinks: 'روابط سريعة',
      links: ['عن المشروع', 'المميزات', 'الموقع', 'الأسعار'],
      mvProjects: 'مشاريع MV',
      projects: ['MV Lagoon — القاهرة الجديدة', 'Aliva — مستقبل سيتي', 'iCity أكتوبر', 'Evia — الساحل الشمالي'],
      contact: 'تواصل معنا',
      address: 'القاهرة الجديدة، التجمع الخامس',
      copyright: '© 2026 جميع الحقوق محفوظة — كريك فيو ماونتن فيو.',
    },
    sticky: { call: '📞 اتصل بنا', wa: '💬 واتساب' },
  },
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')
  const t = translations[lang]
  const toggle = () => setLang(l => l === 'en' ? 'ar' : 'en')
  return (
    <LanguageContext.Provider value={{ lang, t, toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
