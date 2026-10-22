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
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "alsharea-society",
    name: "Al-Sharea Society",
    category: { ar: "موقع خيري متكامل", en: "Charity Platform" },
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb7?auto=format&fit=crop&w=1200&q=80",
    summary: {
      ar: "موقع الجمعية الشرعية لإدارة التبرعات والأنشطة الخيرية.",
      en: "Al-Sharea Society website for managing donations and charitable activities.",
    },
    description: {
      ar: "منصة متكاملة تدير أنشطة الجمعية الشرعية، تتيح استقبال التبرعات بشفافية، عرض أحدث المشاريع، وإدارة بيانات المتبرعين بكفاءة.",
      en: "A comprehensive platform managing the society's activities, allowing transparent donations, displaying latest projects, and efficiently managing donor data.",
    },
    challenge: {
      ar: "الجمعية كانت تعاني من تشتت بيانات المتبرعين وصعوبة متابعة التبرعات وحملات الإغاثة بشكل مركزي ومنظم.",
      en: "The society suffered from scattered donor data and difficulty in centrally tracking donations and relief campaigns.",
    },
    approach: {
      ar: "بناء نظام داخلي (ERP مصغر) متصل بالموقع العام لتسهيل التبرع وإدارة الموارد البشرية والمشاريع.",
      en: "Built an internal system (mini ERP) connected to the public site to facilitate donations and manage human resources and projects.",
    },
    result: {
      ar: "نظام متكامل يرفع من شفافية الجمعية ويزيد من حجم التبرعات الرقمية بشكل ملحوظ.",
      en: "An integrated system that increases the society's transparency and significantly boosts digital donations.",
    },
    stack: ["Next.js", "Node.js", "PostgreSQL", "TailwindCSS"],
    color: "#22D3EE",
    metrics: [
      { label: { ar: "نمو التبرعات الرقمية", en: "Digital Donations" }, value: "+185%" },
      { label: { ar: "زمن استجابة النظام", en: "p95 Latency" }, value: "< 180ms" },
    ],
  },
  {
    slug: "masar-lms",
    name: "Masar LMS",
    category: { ar: "منصة تعليمية (LMS)", en: "Educational LMS" },
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80",
    summary: {
      ar: "منصة مسار التعليمية المتكاملة للمدرسين والطلاب.",
      en: "Masar educational platform for teachers and students.",
    },
    description: {
      ar: "منصة قوية تتيح للمدرسين رفع محتوى تعليمي محمي، إنشاء امتحانات تفاعلية، ومتابعة دقيقة لأداء الطلاب في الوقت الفعلي.",
      en: "A robust platform allowing teachers to upload protected content, create interactive exams, and closely track student performance in real-time.",
    },
    challenge: {
      ar: "حماية الفيديوهات من التحميل، وتنظيم المحتوى للطلاب بطريقة تمنع التشتت وتزيد من التركيز.",
      en: "Protecting videos from downloading, and organizing content for students in a way that prevents distraction and increases focus.",
    },
    approach: {
      ar: "استخدام خوادم بث فيديو مشفرة، وتصميم واجهة مستخدم (UI) تعتمد على علم النفس التعليمي لزيادة التفاعل.",
      en: "Used encrypted video streaming servers and designed a UI based on educational psychology to increase engagement.",
    },
    result: {
      ar: "منصة تعتمد عليها المؤسسات التعليمية بفضل استقرارها وميزات الحماية العالية.",
      en: "A platform relied upon by educational institutions due to its stability and high security features.",
    },
    stack: ["React", "NestJS", "AWS", "BunnyCDN"],
    color: "#6C4CF1",
    metrics: [
      { label: { ar: "معدل إكمال الدورات", en: "Course Completion" }, value: "+74%" },
      { label: { ar: "حماية المحتوى الرقمي", en: "Content Security" }, value: "100% DRM" },
    ],
  },
  {
    slug: "roaa-quran",
    name: "Roaa Quran",
    category: { ar: "منصة تعليم عن بعد", en: "Remote Learning Platform" },
    image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=1200&q=80",
    summary: {
      ar: "منصة رؤى لتحفيظ القرآن الكريم عن بعد بجودة عالية.",
      en: "Roaa platform for remote high-quality Quran memorization.",
    },
    description: {
      ar: "نظام يربط بين المحفظين والطلاب عالمياً، يدعم غرف صوتية وفيديو بجودة عالية، ونظام جدولة متقدم للحلقات.",
      en: "A system connecting memorizers and students globally, supporting high-quality audio/video rooms and an advanced scheduling system for sessions.",
    },
    challenge: {
      ar: "إدارة الحجوزات وفروق التوقيت بين الدول، وضمان جودة اتصال ممتازة للحلقات.",
      en: "Managing bookings, time zone differences between countries, and ensuring excellent connection quality for sessions.",
    },
    approach: {
      ar: "دمج نظام WebRTC للاتصال المباشر ونظام ذكي لإدارة المواعيد وتنبيهات تلقائية.",
      en: "Integrated WebRTC for direct communication and a smart appointment management system with automated alerts.",
    },
    result: {
      ar: "منصة موثوقة تقدم تجربة مستخدم سلسة وتزيد من التزام الطلاب بحلقات التحفيظ.",
      en: "A reliable platform providing a smooth user experience and increasing students' commitment to memorization sessions.",
    },
    stack: ["Next.js", "WebRTC", "Socket.IO", "Redis"],
    color: "#34D399",
    metrics: [
      { label: { ar: "تأخير الصوت في المكالمات", en: "Audio Latency" }, value: "< 65ms" },
      { label: { ar: "جلسات متزامنة نشطة", en: "Concurrent Sessions" }, value: "5,000+" },
    ],
  },
  {
    slug: "codexa-portfolio",
    name: "Codexa Portfolio",
    category: { ar: "موقع عرض أعمال احترافي", en: "Professional Portfolio" },
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    summary: {
      ar: "موقع بورتفوليو احترافي لشركات البرمجة والوكالات الإبداعية.",
      en: "A professional portfolio website for software companies and creative agencies.",
    },
    description: {
      ar: "واجهة رقمية فائقة الحداثة تعتمد على الحركات الانسيابية (Animations) وتقدم تجربة تصفح فريدة تبرز قيمة المشاريع المعروضة.",
      en: "An ultra-modern digital interface relying on fluid animations, offering a unique browsing experience that highlights the value of the displayed projects.",
    },
    challenge: {
      ar: "التميز في سوق مليء بالمواقع التقليدية وجذب انتباه العملاء المحتملين من الثواني الأولى.",
      en: "Standing out in a market full of traditional websites and capturing the attention of potential clients from the first seconds.",
    },
    approach: {
      ar: "استخدام تقنيات متقدمة مثل Framer Motion وتصميم Glassmorphism لبناء هوية بصرية لا تُنسى.",
      en: "Using advanced technologies like Framer Motion and Glassmorphism design to build an unforgettable visual identity.",
    },
    result: {
      ar: "موقع سريع، متجاوب، ويعتبر أداة تسويقية فعالة في حد ذاته.",
      en: "A fast, responsive site that serves as an effective marketing tool in itself.",
    },
    stack: ["React", "Framer Motion", "TailwindCSS"],
    color: "#8B6FF5",
    metrics: [
      { label: { ar: "معدل التحويل للعملاء", en: "Conversion Rate" }, value: "+42%" },
      { label: { ar: "تقييم الأداء والسرعة", en: "Lighthouse Score" }, value: "100/100" },
    ],
  },
  {
    slug: "care-hospital-erp",
    name: "Care Hospital ERP",
    category: { ar: "نظام إدارة مستشفيات", en: "Hospital ERP System" },
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
    summary: {
      ar: "نظام شامل (ERP) لإدارة المستشفيات والعيادات الطبية.",
      en: "A comprehensive ERP system for managing hospitals and medical clinics.",
    },
    description: {
      ar: "نظام متكامل يدير كل شيء من سجلات المرضى (EMR)، حجوزات الأطباء، الصيدلية، المخزون، وحتى حسابات الموظفين والرواتب.",
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
    stack: ["Node.js", "Microservices", "PostgreSQL", "Docker"],
    color: "#ff5f56",
    metrics: [
      { label: { ar: "تقليص زمن الانتظار", en: "Wait Time Reduction" }, value: "-40%" },
      { label: { ar: "معايير أمان السجلات", en: "Data Compliance" }, value: "HIPAA Ready" },
    ],
  },
];
