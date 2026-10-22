export interface PortfolioProject {
  slug: string;
  name: string;
  category: { ar: string; en: string };
  summary: { ar: string; en: string };
  description: { ar: string; en: string };
  challenge: { ar: string; en: string };
  approach: { ar: string; en: string };
  result: { ar: string; en: string };
  stack: string[];
  color: string; // accent hex per project
  image: string; // real project screenshot / showcase image
  metrics: { label: { ar: string; en: string }; value: string }[];
  liveUrl?: string; // Direct URL to live project on Vercel
  year?: string;
  client?: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "alsharea-society",
    name: "الجمعية الشرعية بشارونة",
    category: { ar: "بوابة خيرية وتبرعات رقمية", en: "Charity & Donation Platform" },
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb7?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://algm3a.vercel.app/",
    year: "2024",
    client: "الجمعية الشرعية لخدمة المجتمع",
    summary: {
      ar: "بوابة رقمية متكاملة لجمعية خيرية رائدة تخدم التعليم، الرعاية الصحية، محطات المياه، وكفالة الأيتام وتلقي التبرعات بشفافية.",
      en: "Comprehensive digital portal for a leading NGO managing donations, orphan sponsorships, healthcare projects, and community relief.",
    },
    description: {
      ar: "منصة ويب متطورة تخدم الجمعية الشرعية وتتيح استعراض أكثر من 23 عاماً من العطاء المجتمعي، مع بوابات مخصصة لمشاريع محطات المياه وتبرعات الأيتام، ونظام إلكتروني لإدارة بيانات المتبرعين ومتابعة أثر مساهماتهم في الوقت الفعلي.",
      en: "An advanced NGO web portal showcasing 23+ years of community service, dedicated modules for clean water stations and orphan sponsorships, and a streamlined digital donation flow.",
    },
    challenge: {
      ar: "صعوبة إدارة تبرعات الفروع وتوثيق المشاريع الصحية ومحطات المياه الميدانية رقمياً وبناء ثقة المتبرعين عبر عرض شفاف لبيانات الإنفاق والإنجازات.",
      en: "Managing multi-branch donations, documenting field relief and clean water installations, and building donor trust through transparent impact reporting.",
    },
    approach: {
      ar: "هندسة واجهة عصرية سريعة التحميل متوافقة مع الهواتف، مع بناء بنية Schema.org لمحركات البحث، وقسم تفاعلي للمشاريع الجارية، وربط قنوات تواصل وتبرع مباشرة عبر واتساب والحسابات البنكية المعتمدة.",
      en: "Built a high-performance responsive web portal with full SEO Schema markup, active campaign tracking, and direct bank/WhatsApp donation channels.",
    },
    result: {
      ar: "زيادة بنسبة 185% في وصول التبرعات الرقمية وتوثيق كامل لأكثر من 10,000 مستفيد شهرياً في قطاعات الصحة والتعليم والإغاثة.",
      en: "185% surge in digital fundraising outreach and comprehensive live tracking for over 10,000 monthly beneficiaries across health and education.",
    },
    stack: ["Next.js", "React", "TailwindCSS", "FontAwesome", "Schema.org", "Vercel"],
    color: "#10B981",
    metrics: [
      { label: { ar: "نمو التبرعات الرقمية", en: "Digital Donations" }, value: "+185%" },
      { label: { ar: "تاريخ العطاء المجتمعي", en: "Community Service" }, value: "23+ عاماً" },
      { label: { ar: "مستفيدون شهرياً", en: "Monthly Beneficiaries" }, value: "10,000+" },
    ],
  },
  {
    slug: "rawaa-quran-academy",
    name: "أكاديمية رَواء للقرآن الكريم",
    category: { ar: "منصة تعليم قرآني عن بُعد", en: "Online Quran Academy" },
    image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://rawaa-quran-academy.vercel.app/",
    year: "2025",
    client: "أكاديمية رواء التعليمية",
    summary: {
      ar: "منصة تعليمية إلكترونية متخصصة في تحفيظ القرآن الكريم وتصحيح التلاوة والتجويد بحصص فردية خاصة 1-on-1 للسوق الخليجي والعربي.",
      en: "High-end EdTech platform delivering 1-on-1 personalized Quran memorization, tajweed, and recitation coaching across the GCC and Arab world.",
    },
    description: {
      ar: "منصة تفاعلية متكاملة مصممة بأعلى معايير الـ UI/UX، توفر مسارات تعليمية مخصصة للأطفال، الرجال، والنساء مع نخبة من المعلمين والمعلمات المجازين. تدعم نظام حجز جلسات التقييم المجانية وجداول الحفظ المرنة والتنسيق المباشر.",
      en: "A tailored Quranic learning platform built to provide private 1-on-1 sessions, diagnostic level assessments, dedicated female teachers for women & kids, and automated scheduling.",
    },
    challenge: {
      ar: "توفير تجربة استيعاب سلسة لأولياء الأمور لحجز تقييمات فورية بدون احتكاك تقني، وتنسيق المواعيد عبر مختلف المناطق الزمنية في السعودية ودول الخليج.",
      en: "Creating a frictionless booking funnel for trial assessment sessions while smoothly managing time zone discrepancies across Gulf countries.",
    },
    approach: {
      ar: "تطوير المنصة باستخدام Next.js 15 مع خطوط IBM Plex Sans Arabic المحسنة، ونظام حجز ذكي مدمج مع واتساب لتسريع تحويل الزوار إلى طلاب مشتركين.",
      en: "Developed a Next.js 15 web app with optimized Arabic typography, automated lead qualification, and instantaneous WhatsApp consultation routing.",
    },
    result: {
      ar: "معدل تحويل قياسي لجلسات التقييم المجاني بنسبة 68%، وانضمام مئات الطلاب في السعودية والإمارات خلال الربع الأول.",
      en: "68% conversion rate from landing visit to free evaluation booking, onboarding hundreds of students in Saudi Arabia and the UAE.",
    },
    stack: ["Next.js 15", "React", "TailwindCSS", "Lucide Icons", "WebRTC", "Vercel"],
    color: "#2563EB",
    metrics: [
      { label: { ar: "معدل حجز التقييمات", en: "Free Trial Conversion" }, value: "68%" },
      { label: { ar: "نمط التعليم المباشر", en: "Learning Model" }, value: "1-on-1 فردي" },
      { label: { ar: "سرعة تحميل الصفحة", en: "Page Load Speed" }, value: "0.6s" },
    ],
  },
  {
    slug: "center-amenities",
    name: "مركز العناية الطبية",
    category: { ar: "رعاية صحية ومرافقة كبار السن", en: "Medical Care & Senior Companion" },
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://centeramenities.vercel.app/",
    year: "2025",
    client: "مركز العناية الطبية — السعودية",
    summary: {
      ar: "منصة رائدة في المملكة العربية السعودية لحجز مرافقين معتمدين لكبار السن والمرضى في المنازل والمستشفيات بخبرة تمريضية 24/7.",
      en: "Premier Saudi platform providing certified elderly companions and home nursing care specialists across 10+ kingdom cities 24/7.",
    },
    description: {
      ar: "منصة متطورة تقدم حلول رعاية متكاملة تجمع بين الخبرة التمريضية والاهتمام الإنساني، مع تغطية محيط كبرى مستشفيات الرياض، جدة، والدمام، ونظام باقات يومية ومتكاملة وتقارير دورية لأسر المرضى.",
      en: "A comprehensive digital healthcare service platform linking families with qualified medical companions, hospital care attendants, and personalized daily care packages.",
    },
    challenge: {
      ar: "بناء ثقة فورية مع الأسر الباحثة عن رعاية حساسة لوالديهم، وعرض التراخيص الطبية وسرعة التجاوب في الحالات الطارئة.",
      en: "Instilling deep credibility and trust for delicate eldercare services, highlighting medical accreditations, and ensuring emergency dispatch within 1 hour.",
    },
    approach: {
      ar: "تصميم واجهة مستخدم فائقة الراحة النفسية بألوان طبية مطمئنة، وتكامل شريط شارات الاعتماد والمستشفيات الشريكة، مع زر طلب فوري متجاوب 24/7.",
      en: "Created an ultra-clean, trustworthy UI with medical color theory, partner hospital credentials ticker, and instant one-click request dispatcher.",
    },
    result: {
      ar: "خدمة أكثر من 500 مستفيد بنسبة رضا بلغت 98% وتوسع التغطية إلى أكثر من 10 مدن في المملكة العربية السعودية.",
      en: "Served over 500+ patients with a 98% family satisfaction rate, expanding operations to 10+ cities across Saudi Arabia.",
    },
    stack: ["React", "TailwindCSS", "Lucide Icons", "Schema.org", "Vercel"],
    color: "#00B4D8",
    metrics: [
      { label: { ar: "مستفيد تمت خدمتهم", en: "Beneficiaries Served" }, value: "500+" },
      { label: { ar: "نسبة رضا العائلات", en: "Client Satisfaction" }, value: "98%" },
      { label: { ar: "تغطية المملكة", en: "Kingdom Coverage" }, value: "10+ مدن" },
    ],
  },
  {
    slug: "spak-taif",
    name: "فَنّي سباكة الطائف",
    category: { ar: "خدمات صيانة منزلية وطوارئ", en: "Emergency Home Services" },
    image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://spakprottt.vercel.app/",
    year: "2026",
    client: "فَنّي الطائف للسباكة والصيانة",
    summary: {
      ar: "منصة طوارئ وصيانة سباكة فورية تعمل على مدار 24 ساعة في كافة أحياء الطائف، متخصصة في كشف التسربات بالأجهزة الرقمية بدون تكسير.",
      en: "24/7 emergency plumbing dispatch platform covering all Taif districts with non-destructive acoustic water leak detection.",
    },
    description: {
      ar: "موقع وتطبيق ويب متكامل يتيح لسكان الطائف طلب سباك معتمد فورياً بنقرة واحدة، مع حساب أسعار شفاف، كشف تسربات المياه بالموجات والحرارة، وتسليك المجاري بالضغط، مع دعم PWA وتثبيت على الهاتف.",
      en: "Next.js progressive web app providing instant emergency plumber booking, non-destructive acoustic leak diagnosis, drain jetting, and villa plumbing infrastructure.",
    },
    challenge: {
      ar: "تحقيق تصدر سريع لمحركات البحث المحلية (Local SEO) في أحياء الطائف مع سرعة اتصال هاتفية وواتساب خلال ثوانٍ معدودة في أوقات الطوارئ.",
      en: "Dominating hyper-local SEO for emergency search queries and providing lightning-fast mobile calling and WhatsApp dispatch within 3 seconds.",
    },
    approach: {
      ar: "هندسة Microdata Schema وGeotagging دقيقة لأحياء الطائف (الحوية، الشفا، الهدا)، وتصميم شريط عائم سفلي مخصص للهواتف للاتصال الفوري.",
      en: "Engineered rich LocalBusiness Schema with district geo-coordinates and a sticky mobile action dock for friction-free calls and chats.",
    },
    result: {
      ar: "أكثر من 380 تقييم معتمد بمتوسط 4.9 نجوم، وزمن وصول ميداني يقل عن 30 دقيقة لكافة البلاغات الطارئة.",
      en: "Over 380+ verified reviews with a 4.9-star rating, maintaining under 30-minute field response times across Taif.",
    },
    stack: ["Next.js", "TypeScript", "TailwindCSS", "Local SEO", "PWA", "Vercel"],
    color: "#06B6D4",
    metrics: [
      { label: { ar: "استجابة الطوارئ", en: "Emergency Response" }, value: "< 30 دقيقة" },
      { label: { ar: "تقييم العملاء", en: "Customer Rating" }, value: "4.9 / 5.0" },
      { label: { ar: "دقة كشف التسربات", en: "Leak Detection Accuracy" }, value: "100% بدون تكسير" },
    ],
  },
  {
    slug: "clean-najran",
    name: "صفوة النظافة نجران",
    category: { ar: "خدمات تنظيف شامل وميداني", en: "Commercial & Residential Cleaning" },
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://cleannajran.vercel.app/",
    year: "2026",
    client: "مؤسسة صفوة النظافة — نجران",
    summary: {
      ar: "المنصة الرائدة لخدمات التنظيف الشامل في مدينة نجران — تنظيف فلل ومنازل، جلي رخام، غسيل كنب ومجالس بالبخار، وتعقيم خزانات.",
      en: "Leading on-demand cleaning service platform in Najran offering deep villa cleaning, steam sofa restoration, and water tank sanitization.",
    },
    description: {
      ar: "واجهة تسويقية وتنفيذية احترافية لشركة صفوة النظافة بنجران، توفر استعراضاً تفاعلياً لنتائج (قبل وبعد)، باقات تنظيف شفافة للفلل والشقق والشركات، وضمان كتابي لجودة التنفيذ بمواد آمنة ومصرحة.",
      en: "An engaging enterprise cleaning showcase featuring before/after sliders, transparent villa & corporate packages, and certified eco-safe sanitization workflows.",
    },
    challenge: {
      ar: "إبراز جودة العمل الميداني وإقناع أصحاب الفلل والمجالس في نجران بأمان المواد والاحترافية العالية عبر الهواتف الذكية.",
      en: "Convincing residential and commercial clients in Najran through tangible visual proof of quality, safe materials, and punctual scheduling.",
    },
    approach: {
      ar: "بناء الموقع بتقنية Next.js مع تكامل صور فائقة الدقة، وعرض بطاقات الضمان الذهبية (ضمان الرضا، مواد مصرحة، أمانة وخصوصية)، مع نموذج حجز مباشر.",
      en: "Built with Next.js and optimized responsive media, showcasing golden trust guarantees and direct WhatsApp reservation flows.",
    },
    result: {
      ar: "تصدر نتائج البحث في منطقة نجران، وتحقيق زيادة بنسبة 210% في طلبات تنظيف المجالس والفلل السكنية.",
      en: "Ranked #1 for cleaning queries across Najran districts, achieving a 210% increase in weekly booking volume.",
    },
    stack: ["Next.js", "React", "TailwindCSS", "IBM Plex Sans Arabic", "SEO Schema", "Vercel"],
    color: "#D4AF37",
    metrics: [
      { label: { ar: "نمو الحجوزات الشهرية", en: "Booking Growth" }, value: "+210%" },
      { label: { ar: "تقييم الجودة", en: "Quality Rating" }, value: "4.9 ★" },
      { label: { ar: "أحياء ومخططات مغطاة", en: "Covered Districts" }, value: "كافة نجران" },
    ],
  },
  {
    slug: "rady-portfolio",
    name: "بورتفوليو راضي أحمد",
    category: { ar: "بورتفوليو شخصي وهندسة برمجيات", en: "Full-Stack Engineer Portfolio" },
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://radyahmed.vercel.app/",
    year: "2026",
    client: "المهندس راضي أحمد (Rady Ahmed)",
    summary: {
      ar: "الموقع التعريفي الشخصي للمهندس راضي أحمد — مهندس برمجيات ومطور ويب متكامل Full-Stack متخصص في بناء منصات الويب الحديثة وحلول الأعمال.",
      en: "Official portfolio of Software Engineer Rady Ahmed — showcasing full-stack web platforms, SaaS apps, and enterprise dashboards.",
    },
    description: {
      ar: "معرض أعمال شخصي متطور يتميز بثيم داكن جذاب وتأثيرات بصرية تفاعلية، يستعرض خبرات متقدمة في React، Next.js، Node.js، وPHP، مع إحصائيات برمجية ومشاريع حية ومقالات تقنية.",
      en: "A sleek dark-mode developer portfolio featuring fluid micro-interactions, comprehensive project breakdowns across React, Next.js, Node.js, and technical case studies.",
    },
    challenge: {
      ar: "تقديم واجهة رقمية تعكس الاحترافية الهندسية العالية وسرعة التحميل القياسية مع التميز البصري الكامل بدون الاعتماد على قوالب جاهزة.",
      en: "Crafting a bespoke digital identity reflecting engineering craftsmanship, sub-second load times, and standout aesthetics without generic templates.",
    },
    approach: {
      ar: "بناء واجهة مخصصة بالكامل تدعم التبديل السلس بين اللغتين (i18n)، مع تحسينات أداء صارمة لتحقيق 100/100 على مؤشرات Lighthouse.",
      en: "Handcrafted UI with multi-language i18n support, custom SVG animations, and zero-compromise Lighthouse 100/100 performance optimization.",
    },
    result: {
      ar: "تحقيق درجة أداء 100/100 على مؤشرات Google Lighthouse، وجذب عملاء دوليين من مصر والخليج العربي.",
      en: "Achieved 100/100 Google Lighthouse scores, attracting international enterprise clients across Egypt and the Gulf.",
    },
    stack: ["React", "Next.js", "Node.js", "TailwindCSS", "Framer Motion", "Vercel"],
    color: "#8B5CF6",
    metrics: [
      { label: { ar: "تقييم الأداء والسرعة", en: "Lighthouse Score" }, value: "100/100" },
      { label: { ar: "أنظمة ومشاريع منجزة", en: "Delivered Systems" }, value: "30+ مشروع" },
      { label: { ar: "زمن التحميل الأولي", en: "First Contentful Paint" }, value: "< 0.4s" },
    ],
  },
  {
    slug: "care-hospital-erp",
    name: "Care Hospital ERP",
    category: { ar: "نظام إدارة مستشفيات", en: "Hospital ERP System" },
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
    year: "2024",
    client: "Care Healthcare Network",
    summary: {
      ar: "نظام شامل (ERP) لإدارة المستشفيات والعيادات الطبية وسجلات المرضى والصيدلية.",
      en: "A comprehensive ERP system for managing hospitals, medical clinics, EMR, and pharmacies.",
    },
    description: {
      ar: "نظام متكامل يدير كل شيء من سجلات المرضى (EMR)، حجوزات الأطباء، الصيدلية، المخزون، وحتى حسابات الموظفين والرواتب بمعمارية Microservices.",
      en: "An integrated system managing everything from electronic medical records (EMR), doctor appointments, pharmacy, inventory, to staff accounts and payroll.",
    },
    challenge: {
      ar: "الترابط بين الأقسام المختلفة (الاستقبال، الأطباء، المعمل، الصيدلية) يتطلب نظاماً لا يحتمل التأخير أو الأخطاء.",
      en: "Interconnection between different departments (reception, doctors, lab, pharmacy) requires a system with zero tolerance for delays or errors.",
    },
    approach: {
      ar: "تصميم بنية Microservices لضمان استقرار كل قسم، مع استخدام قواعد بيانات سريعة وآمنة للحفاظ على خصوصية المرضى.",
      en: "Designed a Microservices architecture to ensure the stability of each department, using fast and secure databases to maintain patient privacy.",
    },
    result: {
      ar: "نظام يقلل من وقت الانتظار بنسبة 40% ويمنع الأخطاء الطبية الناتجة عن الوصفات الورقية.",
      en: "A system that reduces waiting time by 40% and prevents medical errors caused by paper prescriptions.",
    },
    stack: ["Node.js", "Microservices", "PostgreSQL", "Docker", "Redis"],
    color: "#ff5f56",
    metrics: [
      { label: { ar: "تقليص زمن الانتظار", en: "Wait Time Reduction" }, value: "-40%" },
      { label: { ar: "معايير أمان السجلات", en: "Data Compliance" }, value: "HIPAA Ready" },
      { label: { ar: "جاهزية الخوادم", en: "System Uptime" }, value: "100%" },
    ],
  },
];
