import { dynamicStats } from "../utils/dynamicStats";

export type Lang = "ar" | "en";

export const translations = {
  ar: {
    nav: {
      home: "الرئيسية",
      services: "خدماتنا",
      portfolio: "أعمالنا",
      about: "من نحن",
      blog: "المدونة",
      contact: "تواصل معنا",
      cta: "ابدأ مشروعك",
    },
    hero: {
      eyebrow: "شركة برمجيات شاملة",
      title1: "نحوّل أفكارك إلى",
      title2: "تجربة رقمية تقود مستقبلك",
      subtitle:
        "في Codexa نقدم خدمات تصميم المواقع، المتاجر الإلكترونية، تطوير التطبيقات، منصات كورسات، مواقع شركات احترافية وبناء هوية رقمية احترافية تساعدك على الوصول لعملائك وتحقيق نتائج حقيقية.",
      ctaPrimary: "اطلب عرض سعر",
      ctaSecondary: "استكشف خدماتنا",
      stat1n: dynamicStats.uptime,
      stat1l: "استقرار البنية التحتية",
      stat2n: dynamicStats.deliverySpeed,
      stat2l: "سرعة تسليم الحلول",
      stat3n: dynamicStats.growthMultiplier,
      stat3l: "متوسط نمو مبيعات شركائنا",
      stat4n: dynamicStats.projectsDelivered,
      stat4l: "مشروع مُسلَّم",
      stat5n: dynamicStats.collaborations,
      stat5l: "تعاون ناجح",
      weBuild: "نبني",
      typewriter: ["تصميم مواقع", "متاجر إلكترونية", "منصات كورسات", "أنظمة ERP", "تطوير تطبيقات", "هوية رقمية"],
      badges: [
        { label: "تصميم عصري", color: "#22D3EE" },
        { label: "سرعة وأداء", color: "#6C4CF1" },
        { label: "حلول مخصصة", color: "#34D399" }
      ],
      annotations: [
        { title: "أداء فائق", desc: "تقييم 100/100" },
        { title: "حلول مخصصة", desc: "معمارية فريدة" }
      ]
    },
    trust: {
      label: "الأدوات اللي بنبني بيها",
    },
    problem: {
      eyebrow: "المقارنة",
      title: "ليه Codexa؟",
      withoutTitle: "من غير Codexa",
      without1t: "أدوات متفرقة من كل حتة",
      without1d: "استضافة من شركة، تصميم من فريلانسر، وصيانة من حد تالت — ولا حاجة متكاملة",
      without2t: "كود مقفول ومش مملوك ليك",
      without2d: "لما تحتاج تتطور أو تغيّر مزود، بتكتشف إنك مش فاهم إيه اللي اتبنى",
      without3t: "بناء بيبطأ مع كل ميزة جديدة",
      without3d: "معمارية مش مصممة للتوسع، فكل إضافة بتاخد وقت أطول من اللي قبلها",
      withTitle: "مع Codexa",
      with1t: "نظام واحد متكامل من الأول",
      with1d: "من الـ Design لحد الـ Deployment — فريق واحد مسؤول عن كل حاجة",
      with2t: "كود نظيف ومملوك ليك 100%",
      with2d: "Repository كامل، Documentation، وحرية تنقل المشروع لأي مكان",
      with3t: "معمارية مبنية للتوسع من اليوم الأول",
      with3d: "Clean Architecture وType-safe codebase — الإضافات بتاخد وقت ثابت مش متزايد",
    },
    compare: {
      eyebrow: "مقارنة تفصيلية",
      title: "Codexa مقابل الخيارات التانية",
      subtitle: "مقارنة صريحة بين التعامل مع Codexa، فريلانسر مستقل، ووكالة تقليدية",
      cols: ["Codexa", "فريلانسر", "وكالة تقليدية"],
      rows: [
        { label: "معمارية Type-safe وClean Code", values: ["yes", "partial", "partial"] },
        { label: "فريق واحد من التحليل للنشر", values: ["yes", "no", "partial"] },
        { label: "ملكية كاملة للكود بعد التسليم", values: ["yes", "partial", "no"] },
        { label: "دعم عربي RTL أصلي مش مترجم", values: ["yes", "partial", "no"] },
        { label: "معمارية جاهزة للتوسع من اليوم الأول", values: ["yes", "no", "partial"] },
        { label: "تواصل مباشر بدون طبقات وسيطة", values: ["yes", "yes", "no"] },
      ],
    },
    services: {
      eyebrow: "مجالات التميز",
      title: "حلول تقنية متكاملة ومخصصة",
      subtitle: "نركز على بناء منصات تعليمية احترافية للمدرسين وأنظمة إدارة داخلية (ERP) تلبي كافة احتياجات الشركات.",
      categories: [
        {
          id: "web-mobile",
          title: "تطوير المنصات والتطبيقات",
          desc: "حلول تقنية شاملة للمنصات السحابية وتطبيقات الهواتف الذكية",
          items: [
            { title: "تطوير المواقع والمنصات", desc: "بناء المواقع التعريفية، المنصات التفاعلية، والكتالوجات الرقمية عالية الأداء." },
            { title: "تطوير تطبيقات الجوال", desc: "تطبيقات iOS و Android (سواء Native أو Cross-Platform مثل Flutter و React Native)." },
            { title: "حلول التجارة الإلكترونية", desc: "المتاجر الإلكترونية، منصات متعددة التجار (Multi-vendor)، وأنظمة حجز الخدمات." },
            { title: "حلول الشركات الناشئة (MVP)", desc: "تحويل الأفكار إلى منتجات أولية قابلة للتجربة والتوسع السريع في السوق." },
          ],
          technologies: ["React", "Next.js", "Flutter", "Swift", "Kotlin", "Node.js"],
          benefits: [
            "تصميم مخصص وتجربة مستخدم (UX) فائقة",
            "أكواد نظيفة (Clean Code) جاهزة للتوسع",
            "لوحات تحكم قوية لإدارة التطبيق بسهولة",
            "رفع التطبيقات على المتاجر (App Store / Google Play)"
          ]
        },
        {
          id: "edtech",
          title: "المنصات التعليمية والأنظمة الأكاديمية",
          desc: "أنظمة إدارة التعلم والمراكز التعليمية لتجربة تعليمية آمنة وذكية",
          items: [
            { title: "منصات المدرسين والسناتر", desc: "منصات مخصصة تشمل حماية الفيديوهات ضد التسجيل، بنوك الأسئلة، الاختبارات الإلكترونية، ومتابعة أولياء الأمور." },
            { title: "أنظمة إدارة التعلم (LMS)", desc: "منصات بيع وإدارة الكورسات، المسارات التعليمية، إرسال الواجبات، وإصدار الشهادات التلقائية." },
          ],
          technologies: ["Next.js", "PostgreSQL", "AWS S3", "Redis", "WebRTC", "Moodle"],
          benefits: [
            "حماية متقدمة للفيديوهات ضد التحميل (DRM)",
            "استضافة سحابية تتحمل آلاف الطلاب في نفس الوقت",
            "امتحانات تفاعلية وبنوك أسئلة متطورة",
            "شهادات إلكترونية آلية بعد إتمام الكورس"
          ]
        },
        {
          id: "enterprise",
          title: "الأنظمة الإدارية والبرمجيات المخصصة",
          desc: "أتمتة العمليات الداخلية للشركات لتحقيق أقصى كفاءة وإنتاجية",
          items: [
            { title: "لوحات التحكم والإدارة", desc: "شاشات متابعة البيانات الحية، أداء المبيعات، التقارير الذكية، وإدارة صلاحيات المستخدمين." },
            { title: "أنظمة ERP", desc: "تطويع وتطبيق أنظمة متكاملة مثل Odoo للربط بين الحسابات، المخازن، والمشتريات." },
            { title: "أنظمة CRM", desc: "أتمتة عمليات البيع، متابعة الفرص التجارية، وتتبع التواصل مع العملاء." },
            { title: "تحديث الأنظمة القديمة", desc: "استلام الأنظمة القائمة وتطويرها وإعادة هندسة الكود (Refactoring & Modernization)." },
          ],
          technologies: ["Odoo", "Python", "NestJS", "PostgreSQL", "Docker", "Vue.js"],
          benefits: [
            "أتمتة كاملة تقلل من الأخطاء البشرية والورقيات",
            "تقارير فورية ودقيقة (Real-time Dashboards)",
            "نظام صلاحيات متعدد المستويات (RBAC)",
            "تخصيص بنسبة 100% ليطابق دورة عملك الفعلية"
          ]
        },
        {
          id: "infrastructure",
          title: "البنية التحتية والاستضافة",
          desc: "استضافة سحابية آمنة وموثوقة لضمان استقرار الأنظمة",
          items: [
            { title: "إدارة السيرفرات السحابية", desc: "إعداد وتأمين الاستضافات والسيرفرات على AWS, Google Cloud, و DigitalOcean." },
            { title: "الصيانة والدعم الفني", desc: "التحديثات الدورية للأنظمة، النسخ الاحتياطي التلقائي، وتأمين البرمجيات ضد الثغرات." },
          ],
          technologies: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Linux", "Nginx"],
          benefits: [
            "توافر النظام بنسبة 100% (Uptime)",
            "نسخ احتياطي تلقائي مشفر (Automated Backups)",
            "حماية متقدمة ضد هجمات الـ DDoS",
            "توسع مرن للموارد وقت الضغط (Auto-scaling)"
          ]
        },
        {
          id: "design-digital",
          title: "تصميم التجربة والحلول المكملة",
          desc: "خدمات شاملة تبدأ من التصميم وصولاً للتسويق واستشارات النمو",
          items: [
            { title: "تصميم واجهات المستخدم (UI/UX)", desc: "دراسة سلوك المستخدم ورسم الهيكلية وتصميم واجهات حديثة وتفاعلية." },
            { title: "تهيئة محركات البحث (SEO)", desc: "تحسين الكود والبنية التحتية للمواقع لتصدر نتائج البحث في Google." },
            { title: "ربط الأنظمة وبوابات الدفع", desc: "دمج بوابات الدفع الإلكتروني، شركات الشحن، وأنظمة الإشعارات و الـ SMS." },
            { title: "استشارات تقنية وهندسة النظم", desc: "إدارة المشاريع، تصميم المعمارية البرمجية، وحلول زيادة المبيعات ومعدل التحويل (CRO)." },
          ],
          technologies: ["Figma", "Adobe XD", "Google Analytics", "Stripe", "Paymob", "Twilio"],
          benefits: [
            "تصميمات تبني ثقة وتزيد من معدل التحويل (CRO)",
            "تأسيس قوي لـ SEO يقلل تكلفة الإعلانات لاحقاً",
            "ربط سلس مع أشهر بوابات الدفع المحلية والعالمية",
            "استشارات هندسية توفر عليك إعادة بناء النظام"
          ]
        }
      ],
      core1Title: "منصات تعليمية متطورة (LMS)",
      core1Desc: "نبني أنظمة تعليمية ذكية للمدرسين والمؤسسات، تتيح إدارة الكورسات، حماية الفيديوهات من التسريب، امتحانات تفاعلية، ومتابعة دقيقة لأداء الطلاب.",
      core2Title: "أنظمة إدارة الشركات (ERP & HR)",
      core2Desc: "أنظمة داخلية مخصصة لإدارة موارد شركتك بالكامل. من الحضور والانصراف، الضرائب والتأمينات، إلى إدارة المبيعات، المخزون والحسابات.",
      coreSpecializations: "مجالات التخصص",
      coreMoreThan: "أكثر من مجرد شركة برمجة",
      coreSub: "نحن نركز على بناء حلول برمجية ضخمة ومستدامة. تركيزنا الأساسي ينصب على قطاعين رئيسيين لضمان تقديم أعلى جودة ممكنة.",
    },
    process: {
      eyebrow: "طريقة الشغل",
      title: "من الفكرة للإطلاق",
      steps: [
        { t: "تحليل", d: "بنفهم احتياجك بالتفصيل قبل أي سطر كود — الهدف، المستخدمين، والنطاق" },
        { t: "تصميم", d: "هوية بصرية ونظام تصميم مخصص، مش قالب جاهز" },
        { t: "تطوير", d: "بناء بمعايير إنتاجية حقيقية — كود نظيف، اختبارات، ومراجعة مستمرة" },
        { t: "إطلاق ودعم", d: "نشر، متابعة أداء، ودعم فني مستمر بعد التسليم" },
      ],
    },
    portfolio: {
      eyebrow: "أعمالنا",
      title: "مشاريع بنيناها من الصفر",
      subtitle: "عينة من الأنظمة والمنصات اللي طورناها لعملاء ومشاريع مختلفة",
      viewAll: "شاهد كل الأعمال",
      viewProject: "التفاصيل",
      challenge: "التحدي",
      approach: "الحل",
      result: "النتيجة",
    },
    why: {
      eyebrow: "الفرق",
      title: "مش أول شركة تبني موقع… بس مختلفين إزاي",
      items: [
        { t: "حلول مخصصة", d: "نبني أنظمة مصممة خصيصاً لتلبية احتياجات عملك بدقة، بدون الاعتماد على قوالب جاهزة." },
        { t: "خبرة احترافية", d: "فريق من المهندسين والمصممين ذوي خبرة واسعة في بناء منصات معقدة قابلة للتوسع." },
        { t: "دعم مستمر", d: "نقف بجانبك حتى بعد الإطلاق، لضمان استقرار النظام وتطويره المستمر." },
        { t: "دقة تنفيذ", d: "نلتزم بأعلى معايير الجودة ومواعيد التسليم لضمان نجاح مشروعك من اليوم الأول." },
      ],
    },
    stats: {
      title: "أرقام بتتكلم",
      items: [
        { n: dynamicStats.uptime, l: "استقرار البنية التحتية" },
        { n: dynamicStats.deliverySpeed, l: "سرعة تسليم الحلول" },
        { n: dynamicStats.growthMultiplier, l: "نمو مبيعات شركائنا" },
        { n: dynamicStats.projectsDelivered, l: "مشروع مُسلَّم" },
        { n: dynamicStats.collaborations, l: "تعاون ناجح" },
      ],
    },
    cta: {
      title: "جاهز تبني منتجك الرقمي؟",
      subtitle: "احكيلنا عن فكرتك، وهنرجعلك بخطة واضحة وسعر مبدئي خلال يوم عمل",
      primary: "اطلب عرض سعر",
      secondary: "كلمنا على واتساب",
    },
    faq: {
      eyebrow: "الأسئلة",
      title: "أسئلة شائعة",
      items: [
        {
          q: "بتبدأوا التنفيذ إزاي؟",
          a: "بنبدأ بجلسة تحليل لفهم احتياجك بالكامل، بعدها بنجهز Brief تقني وتصميمي قبل أي سطر كود.",
        },
        {
          q: "المشروع بياخد قد إيه؟",
          a: "بيعتمد على حجم النظام — موقع تعريفي ممكن ياخد أسبوعين، ومنصة SaaS كاملة ممكن تاخد شهرين لثلاثة. بنديك Timeline واضح من البداية.",
        },
        {
          q: "الكود بيبقى ملكي بعد التسليم؟",
          a: "أيوه، 100%. بتستلم الـ Repository كامل مع Documentation وحرية تستضيفه فين ما تحب.",
        },
        {
          q: "فيه دعم بعد الإطلاق؟",
          a: "أيوه، بنقدم باقات صيانة ودعم فني مستمر — تحديثات، مراقبة أداء، وإصلاح أي مشكلة.",
        },
        {
          q: "تقدروا تشتغلوا على نظام موجود بالفعل؟",
          a: "أكيد. سواء تطوير ميزة جديدة أو إعادة بناء نظام قديم بمعمارية أحدث.",
        },
      ],
    },
    footer: {
      tagline: "نبني أنظمة، مش مجرد مواقع.",
      product: "المنتج",
      company: "الشركة",
      links: "روابط",
      rights: "جميع الحقوق محفوظة",
    },
    contactPage: {
      eyebrow: "تواصل معنا",
      title: "خلينا نسمع فكرتك",
      subtitle: "املأ الفورم أو كلمنا مباشرة على واتساب — بنرد خلال يوم عمل",
      name: "الاسم",
      email: "البريد الإلكتروني",
      projectType: "نوع المشروع",
      message: "تفاصيل المشروع",
      send: "إرسال",
      sending: "جاري الإرسال...",
      success: "تم إرسال طلبك بنجاح، هنتواصل معاك قريب.",
      error: "حصل خطأ، حاول تاني أو كلمنا على واتساب.",
    },
    servicesPage: {
      eyebrow: "الخدمات",
      title: "خدمات Codexa بالتفصيل",
      subtitle: "كل خدمة مبنية على معايير إنتاجية حقيقية — مش MVP مؤقت",
    },
    aboutPage: {
      eyebrow: "من نحن",
      title: "شركة برمجة صغيرة، معايير كبيرة",
      p1: "Codexa شركة برمجيات بتبني منتجات رقمية كاملة — من الموقع التعريفي البسيط لمنصات SaaS معقدة بأدوار وصلاحيات متعددة.",
      p2: "بنؤمن إن كل مشروع محتاج معمارية مختلفة، مش قالب جاهز بيتكرر. عشان كده كل نظام بنبنيه بيتصمم من الصفر حسب احتياج العميل الفعلي.",
      p3: "شغالين بأحدث الأدوات في السوق — Next.js، TypeScript، PostgreSQL — مع التزام كامل بالأداء وقابلية التوسع.",
      values: [
        { t: "الشفافية", d: "تعرف بالظبط بنعمل إيه وليه في كل خطوة" },
        { t: "الجودة قبل السرعة", d: "مش بنسلّم حاجة مش واثقين فيها" },
        { t: "الملكية الكاملة", d: "الكود والبيانات بتاعتك، دايماً" },
      ],
    },
    pricing: {
      eyebrow: "الأسعار",
      title: "باقات واضحة، بدون مفاجآت",
      subtitle: "كل مشروع مختلف، فالأسعار هنا تقديرية — هنرجعلك بعرض دقيق بعد جلسة التحليل",
      note: "الأسعار قابلة للتعديل حسب نطاق المشروع الفعلي",
      cta: "اطلب عرض سعر",
      popular: "الأكثر طلباً",
      freeOffer: "عرض حصري: أول شهر مجاناً على جميع الباقات للاشتراكات الشهرية 🚀",
      tiers: [
        {
          name: "Starter",
          price: "تواصل لمعرفة السعر",
          desc: "لموقع تعريفي أو بورتفوليو احترافي بتصميم مخصص",
          features: [
            "حتى 5 صفحات",
            "تصميم مخصص بالكامل",
            "متجاوب مع كل الشاشات",
            "SEO أساسي",
            "فورم تواصل",
          ],
        },
        {
          name: "Business",
          price: "تواصل لمعرفة السعر",
          desc: "لمنصة متكاملة بلوحة تحكم وقاعدة بيانات",
          features: [
            "لوحة تحكم إدارية",
            "نظام مستخدمين وصلاحيات",
            "قاعدة بيانات مخصصة",
            "تكامل بوابات دفع محلية",
            "دعم فني 3 أشهر",
          ],
        },
        {
          name: "Enterprise",
          price: "حسب المشروع",
          desc: "لأنظمة SaaS معقدة أو منصات بحجم مؤسسي",
          features: [
            "معمارية Multi-tenant",
            "تكاملات مخصصة (APIs)",
            "بنية تحتية قابلة للتوسع",
            "فريق مخصص للمشروع",
            "دعم فني مستمر (SLA)",
          ],
        },
      ],
    },
    notFound: {
      title: "الصفحة مش موجودة",
      subtitle: "يمكن الرابط اتغيّر أو الصفحة اتشالت",
      cta: "ارجع للرئيسية",
    },
    errorBoundary: {
      errorText: "حصل خطأ غير متوقع",
      tryRefresh: "حاول تحدّث الصفحة، أو ارجع للرئيسية",
      homeCta: "الرئيسية",
    },
    enterpriseTrust: {
      eyebrow: "ثقة المؤسسات",
      title: "لماذا تعتمد علينا الشركات الكبرى؟",
      subtitle: "نحن نبني أنظمة قوية، قابلة للتوسع، وآمنة لتلبية معايير المؤسسات متعددة الجنسيات.",
      items: [
        { title: "أمان متقدم", desc: "تشفير البيانات وحماية ضد الثغرات وتطبيق أفضل ممارسات الأمان العالمية." },
        { title: "بنية تحتية سحابية", desc: "نشر على منصات سحابية رائدة (AWS, GCP) لضمان توافر بنسبة 100%." },
        { title: "ملكية فكرية كاملة", desc: "نضمن لك الملكية الكاملة للكود المصدري وقواعد البيانات منذ اليوم الأول." },
        { title: "أداء فائق السرعة", desc: "تحسين شامل للأداء باستخدام أحدث التقنيات وأفضل ممارسات البرمجة." }
      ]
    },
    partnershipJourney: {
      eyebrow: "رحلة الشراكة",
      title: "منهجية هندسية واضحة للنجاح",
      subtitle: "لا نترك شيئاً للصدفة، كل خطوة في دورة حياة المشروع مدروسة وموثقة.",
      steps: [
        { title: "الاكتشاف والتحليل", desc: "دراسة متعمقة لمتطلبات العمل وتحديد الأهداف بوضوح قبل كتابة أي كود." },
        { title: "هندسة النظام", desc: "تصميم هيكلية قاعدة البيانات والمعمارية البرمجية لضمان قابلية التوسع." },
        { title: "تطوير مرن", desc: "تقسيم المشروع لمهام قابلة للتسليم مع مراجعة مستمرة للكود (Code Review)." },
        { title: "ضمان الجودة", desc: "اختبارات آلية ويدوية صارمة لضمان استقرار النظام وخلوه من الأخطاء." },
        { title: "الإطلاق والدعم", desc: "نشر آمن على خوادم الإنتاج مع مراقبة مستمرة ودعم فني على مدار الساعة." }
      ]
    },
    legal: {
      privacyTitle: "سياسة الخصوصية",
      termsTitle: "الشروط والأحكام",
      lastUpdated: "آخر تحديث",
    },
    seo: {
      home: { title: "Codexa — نبني أنظمة، مش مجرد مواقع", desc: "شركة برمجيات متخصصة في بناء منصات ويب ومنتجات SaaS من الصفر — تصميم، تطوير، وبنية تحتية جاهزة للنمو." },
      services: { title: "خدماتنا — Codexa", desc: "تصميم مواقع، منصات SaaS، متاجر إلكترونية، أنظمة HR وLMS — كل خدمة بمعايير إنتاجية حقيقية." },
      portfolio: { title: "أعمالنا — Codexa", desc: "مشاريع حقيقية بنيناها من الصفر: منصات عقارات، أنظمة HR، منصات تعليمية، ومتاجر إلكترونية." },
      about: { title: "من نحن — Codexa", desc: "شركة برمجة بتبني منتجات رقمية كاملة بمعمارية مخصصة لكل عميل." },
      contact: { title: "تواصل معنا — Codexa", desc: "احكيلنا عن فكرتك واحصل على خطة وعرض سعر مبدئي خلال يوم عمل." },
      pricing: { title: "الأسعار — Codexa", desc: "باقات واضحة لتصميم وتطوير المواقع والمنصات الرقمية." },
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      portfolio: "Work",
      about: "About",
      blog: "Blog",
      contact: "Contact",
      cta: "Start a project",
    },
    hero: {
      eyebrow: "Full-Service Software Agency",
      title1: "We build any idea,",
      title2: "any project, any vision",
      subtitle:
        "Websites, platforms, internal systems, apps, e-commerce, LMS, ERP — if you can imagine it, we build it. Online or offline, from scratch, with a custom design and clean code.",
      ctaPrimary: "Start your project",
      ctaSecondary: "See our work",
      stat1n: dynamicStats.uptime,
      stat1l: "Infrastructure uptime",
      stat2n: dynamicStats.deliverySpeed,
      stat2l: "Faster delivery speed",
      stat3n: dynamicStats.growthMultiplier,
      stat3l: "Average partner sales growth",
      stat4n: dynamicStats.projectsDelivered,
      stat4l: "Projects shipped",
      stat5n: dynamicStats.collaborations,
      stat5l: "Successful collaborations",
      weBuild: "We build",
      typewriter: ["Websites", "E-commerce", "LMS Platforms", "ERP Systems", "Mobile Apps", "Digital Identity"],
      badges: [
        { label: "Modern Design", color: "#22D3EE" },
        { label: "Speed & Perf", color: "#6C4CF1" },
        { label: "Custom Solutions", color: "#34D399" }
      ],
      annotations: [
        { title: "High Performance", desc: "Lighthouse 100/100" },
        { title: "Custom Solutions", desc: "Tailored architecture" }
      ]
    },
    trust: {
      label: "The tools we build with",
    },
    problem: {
      eyebrow: "Comparison",
      title: "Why Codexa?",
      withoutTitle: "Without Codexa",
      without1t: "Scattered tools from everywhere",
      without1d: "Hosting from one vendor, design from a freelancer, maintenance from someone else — nothing integrated",
      without2t: "Locked, unowned code",
      without2d: "When you need to scale or switch providers, you realize no one truly understands what was built",
      without3t: "Every new feature slows things down",
      without3d: "Architecture not designed to scale, so each addition takes longer than the last",
      withTitle: "With Codexa",
      with1t: "One integrated system from day one",
      with1d: "From design to deployment — one team accountable for everything",
      with2t: "Clean code, 100% yours",
      with2d: "Full repository, documentation, and freedom to move the project anywhere",
      with3t: "Architecture built to scale from the start",
      with3d: "Clean architecture and a type-safe codebase — additions take constant time, not increasing",
    },
    compare: {
      eyebrow: "Detailed comparison",
      title: "Codexa vs. the alternatives",
      subtitle: "An honest comparison between working with Codexa, an independent freelancer, and a traditional agency",
      cols: ["Codexa", "Freelancer", "Traditional agency"],
      rows: [
        { label: "Type-safe, clean architecture", values: ["yes", "partial", "partial"] },
        { label: "One team from discovery to launch", values: ["yes", "no", "partial"] },
        { label: "Full code ownership after delivery", values: ["yes", "partial", "no"] },
        { label: "Native Arabic RTL, not translated", values: ["yes", "partial", "no"] },
        { label: "Architecture ready to scale from day one", values: ["yes", "no", "partial"] },
        { label: "Direct communication, no middle layers", values: ["yes", "yes", "no"] },
      ],
    },
    services: {
      eyebrow: "Core Expertise",
      title: "Comprehensive Custom Solutions",
      subtitle: "We focus on building professional educational platforms for teachers and robust internal management systems (ERP) for businesses.",
      categories: [
        {
          id: "web-mobile",
          title: "Web & Mobile Development",
          desc: "Comprehensive technical solutions for cloud platforms and smartphones.",
          items: [
            { title: "Web Platforms", desc: "Building high-performance corporate websites, interactive platforms, and digital catalogs." },
            { title: "Mobile Applications", desc: "iOS and Android apps (Native or Cross-Platform using Flutter/React Native)." },
            { title: "E-Commerce Solutions", desc: "Online stores, multi-vendor platforms, and service booking systems." },
            { title: "Startup MVPs", desc: "Transforming ideas into testable minimum viable products ready for market scaling." },
          ],
          technologies: ["React", "Next.js", "Flutter", "Swift", "Kotlin", "Node.js"],
          benefits: [
            "Custom design and superior User Experience (UX)",
            "Clean, scalable code architecture",
            "Powerful admin dashboards for easy management",
            "App Store & Google Play deployment included"
          ]
        },
        {
          id: "edtech",
          title: "EdTech Solutions",
          desc: "Learning management systems and secure educational platforms.",
          items: [
            { title: "Tutoring Centers Platforms", desc: "Custom platforms featuring video DRM, question banks, online exams, and parent reporting." },
            { title: "Learning Management (LMS)", desc: "Platforms for selling and managing courses, learning paths, assignments, and automated certificates." },
          ],
          technologies: ["Next.js", "PostgreSQL", "AWS S3", "Redis", "WebRTC", "Moodle"],
          benefits: [
            "Advanced video protection & DRM anti-piracy",
            "Cloud infrastructure built for high concurrent traffic",
            "Interactive exams and advanced question banks",
            "Automated PDF certificates upon completion"
          ]
        },
        {
          id: "enterprise",
          title: "Enterprise & Internal Systems",
          desc: "Automating internal business workflows for maximum efficiency.",
          items: [
            { title: "Custom Dashboards", desc: "Live data monitoring, sales performance, smart reporting, and advanced role management." },
            { title: "ERP Systems", desc: "Customizing and implementing full systems like Odoo linking accounting, inventory, and procurement." },
            { title: "CRM Systems", desc: "Sales automation, opportunity tracking, and managing customer communications." },
            { title: "Legacy System Modernization", desc: "Taking over existing systems for updates, maintenance, and complete code refactoring." },
          ],
          technologies: ["Odoo", "Python", "NestJS", "PostgreSQL", "Docker", "Vue.js"],
          benefits: [
            "Complete automation reducing human errors",
            "Real-time dashboards and accurate reporting",
            "Multi-level Role-Based Access Control (RBAC)",
            "100% custom-tailored to your actual workflows"
          ]
        },
        {
          id: "infrastructure",
          title: "Infrastructure & Cloud",
          desc: "Secure and reliable cloud hosting to guarantee system stability.",
          items: [
            { title: "Cloud & Hosting Solutions", desc: "Setup and security of cloud servers on AWS, Google Cloud, and DigitalOcean." },
            { title: "Support & Maintenance", desc: "Regular system updates, automated backups, and software vulnerability patching." },
          ],
          technologies: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Linux", "Nginx"],
          benefits: [
            "100% guaranteed system uptime SLA",
            "Encrypted, automated daily backups",
            "Advanced protection against DDoS attacks",
            "Elastic auto-scaling during traffic spikes"
          ]
        },
        {
          id: "design-digital",
          title: "Design & Digital Services",
          desc: "End-to-end services from UI/UX design to tech consulting and growth.",
          items: [
            { title: "UI/UX Design", desc: "User behavior research, wireframing, and designing modern interactive interfaces." },
            { title: "SEO Optimization", desc: "Optimizing codebase and infrastructure to rank high on Google search results." },
            { title: "API & Payment Integration", desc: "Integrating electronic payment gateways, shipping providers, and SMS notifications." },
            { title: "Tech Consulting & Architecture", desc: "Project management, system architecture design, and CRO/sales optimization strategies." },
          ],
          technologies: ["Figma", "Adobe XD", "Google Analytics", "Stripe", "Paymob", "Twilio"],
          benefits: [
            "Designs engineered to boost Conversion Rates (CRO)",
            "Solid SEO foundation reducing future ad spend",
            "Seamless integration with global and local payment gateways",
            "Expert architectural consulting to prevent costly rewrites"
          ]
        }
      ],
      core1Title: "Advanced Educational Platforms (LMS)",
      core1Desc: "We build smart educational systems for teachers and institutions, enabling course management, video protection, interactive exams, and precise tracking of student performance.",
      core2Title: "Enterprise Management Systems (ERP & HR)",
      core2Desc: "Custom internal systems to fully manage your company's resources. From attendance and payroll to sales, inventory, and accounting.",
      coreSpecializations: "Core Specializations",
      coreMoreThan: "More than a software company",
      coreSub: "We focus on building large-scale, sustainable software solutions. Our core focus is on two main sectors to ensure the highest possible quality.",
    },
    process: {
      eyebrow: "How we work",
      title: "From idea to launch",
      steps: [
        { t: "Analyze", d: "We understand your need in detail before a single line of code — goal, users, scope" },
        { t: "Design", d: "A custom visual identity and design system, never a generic template" },
        { t: "Build", d: "Production-grade engineering — clean code, testing, continuous review" },
        { t: "Launch & support", d: "Deployment, performance monitoring, and ongoing support after delivery" },
      ],
    },
    portfolio: {
      eyebrow: "Our work",
      title: "Projects we built from the ground up",
      subtitle: "A sample of the systems and platforms we've engineered for different clients and products",
      viewAll: "View all work",
      viewProject: "Details",
      challenge: "The challenge",
      approach: "The approach",
      result: "The result",
    },
    why: {
      eyebrow: "The difference",
      title: "Not the first agency you'll find — here's how we differ",
      items: [
        { t: "Custom Solutions", d: "We build systems tailored specifically to your business needs, without relying on ready-made templates." },
        { t: "Professional Expertise", d: "A team of engineers and designers with extensive experience in building complex, scalable platforms." },
        { t: "Continuous Support", d: "We stand by you even after launch, ensuring system stability and continuous development." },
        { t: "Execution Precision", d: "We adhere to the highest quality standards and delivery deadlines to ensure your project's success from day one." },
      ],
    },
    stats: {
      title: "Numbers that speak",
      items: [
        { n: dynamicStats.uptime, l: "Infrastructure uptime" },
        { n: dynamicStats.deliverySpeed, l: "Faster delivery speed" },
        { n: dynamicStats.growthMultiplier, l: "Average partner growth" },
        { n: dynamicStats.projectsDelivered, l: "Projects shipped" },
        { n: dynamicStats.collaborations, l: "Successful collaborations" },
      ],
    },
    cta: {
      title: "Ready to build your product?",
      subtitle: "Tell us about your idea and we'll get back with a clear plan and initial estimate within one business day",
      primary: "Request a quote",
      secondary: "Message us on WhatsApp",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently asked questions",
      items: [
        {
          q: "How do you start a project?",
          a: "We start with a discovery session to fully understand your need, then prepare a technical and design brief before writing any code.",
        },
        {
          q: "How long does a project take?",
          a: "Depends on scope — a brochure site can take two weeks, a full SaaS platform two to three months. You get a clear timeline upfront.",
        },
        {
          q: "Do I own the code after delivery?",
          a: "Yes, 100%. You receive the full repository with documentation and the freedom to host it anywhere.",
        },
        {
          q: "Is there support after launch?",
          a: "Yes, we offer ongoing maintenance and support packages — updates, performance monitoring, and issue fixes.",
        },
        {
          q: "Can you work on an existing system?",
          a: "Absolutely. Whether it's adding a new feature or rebuilding a legacy system with modern architecture.",
        },
      ],
    },
    footer: {
      tagline: "We build systems, not just websites.",
      product: "Product",
      company: "Company",
      links: "Links",
      rights: "All rights reserved",
    },
    contactPage: {
      eyebrow: "Contact",
      title: "Let's hear your idea",
      subtitle: "Fill the form or message us directly on WhatsApp — we reply within one business day",
      name: "Name",
      email: "Email",
      projectType: "Project type",
      message: "Project details",
      send: "Send",
      sending: "Sending...",
      success: "Your request was sent — we'll be in touch shortly.",
      error: "Something went wrong, try again or reach us on WhatsApp.",
    },
    servicesPage: {
      eyebrow: "Services",
      title: "Codexa's services in detail",
      subtitle: "Every service is built to production standards — never a throwaway MVP",
    },
    aboutPage: {
      eyebrow: "About us",
      title: "A small software studio, high standards",
      p1: "Codexa is a software studio building complete digital products — from simple brochure sites to complex multi-role SaaS platforms.",
      p2: "We believe every project needs different architecture, not a recycled template. That's why every system is designed from scratch around the client's real need.",
      p3: "We work with the latest tools in the market — Next.js, TypeScript, PostgreSQL — with a full commitment to performance and scalability.",
      values: [
        { t: "Transparency", d: "You know exactly what we're doing and why, every step" },
        { t: "Quality over speed", d: "We don't ship what we're not confident in" },
        { t: "Full ownership", d: "The code and data are always yours" },
      ],
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Clear packages, no surprises",
      subtitle: "Every project is different — we'll follow up with an accurate quote after a discovery call",
      note: "Prices are adjustable based on actual project scope",
      cta: "Request a quote",
      popular: "Most popular",
      freeOffer: "Exclusive Offer: First month free on all monthly retainers 🚀",
      tiers: [
        {
          name: "Starter",
          price: "Contact for pricing",
          desc: "For a professional brochure site or portfolio with custom design",
          features: [
            "Up to 5 pages",
            "Fully custom design",
            "Responsive on all screens",
            "Basic SEO",
            "Contact form",
          ],
        },
        {
          name: "Business",
          price: "Contact for pricing",
          desc: "For a full platform with admin dashboard and database",
          features: [
            "Admin dashboard",
            "Users & roles system",
            "Custom database",
            "Local payment gateway integration",
            "3 months of support",
          ],
        },
        {
          name: "Enterprise",
          price: "Custom",
          desc: "For complex SaaS systems or enterprise-scale platforms",
          features: [
            "Multi-tenant architecture",
            "Custom API integrations",
            "Scalable infrastructure",
            "Dedicated project team",
            "Ongoing support (SLA)",
          ],
        },
      ],
    },
    notFound: {
      title: "Page not found",
      subtitle: "The link may have changed or the page was removed",
      cta: "Back to home",
    },
    errorBoundary: {
      errorText: "Something went wrong",
      tryRefresh: "Try refreshing, or head back home",
      homeCta: "Home",
    },
    enterpriseTrust: {
      eyebrow: "Enterprise Trust",
      title: "Why Multinational Companies Rely on Us",
      subtitle: "We engineer robust, scalable, and secure systems that meet the rigorous standards of global enterprises.",
      items: [
        { title: "Advanced Security", desc: "Data encryption, vulnerability protection, and strict adherence to global security best practices." },
        { title: "Cloud Infrastructure", desc: "Deployment on leading cloud platforms (AWS, GCP) ensuring 100% uptime SLA." },
        { title: "Full IP Ownership", desc: "We guarantee complete ownership of your source code and databases from day one." },
        { title: "Blazing Performance", desc: "Comprehensive performance optimization using cutting-edge technologies and coding standards." }
      ]
    },
    partnershipJourney: {
      eyebrow: "Partnership Journey",
      title: "An Engineered Methodology for Success",
      subtitle: "We leave nothing to chance. Every step in the project lifecycle is calculated and documented.",
      steps: [
        { title: "Discovery & Analysis", desc: "In-depth study of business requirements and clear goal-setting before writing any code." },
        { title: "System Architecture", desc: "Designing database schemas and software architecture to guarantee future scalability." },
        { title: "Agile Development", desc: "Breaking the project into deliverable milestones with continuous peer code reviews." },
        { title: "Quality Assurance", desc: "Rigorous automated and manual testing to ensure system stability and bug-free operation." },
        { title: "Launch & Support", desc: "Secure deployment to production servers with continuous monitoring and 24/7 technical support." }
      ]
    },
    legal: {
      privacyTitle: "Privacy Policy",
      termsTitle: "Terms & Conditions",
      lastUpdated: "Last updated",
    },
    seo: {
      home: { title: "Codexa — We build systems, not just websites", desc: "A software studio building web platforms and SaaS products from scratch — design, engineering, and infrastructure ready to scale." },
      services: { title: "Services — Codexa", desc: "Website design, SaaS platforms, e-commerce, HR & LMS systems — every service built to production standards." },
      portfolio: { title: "Our work — Codexa", desc: "Real projects built from scratch: real estate platforms, HR systems, education platforms, and online stores." },
      about: { title: "About us — Codexa", desc: "A software studio building complete digital products with custom architecture for every client." },
      contact: { title: "Contact — Codexa", desc: "Tell us about your idea and get a plan and initial quote within one business day." },
      pricing: { title: "Pricing — Codexa", desc: "Clear packages for designing and building websites and digital platforms." },
    },
  },
};

export type TranslationDict = typeof translations["ar"];
