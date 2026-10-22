import { useParams, Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import CTASection from "../components/CTASection";
import Seo from "../components/Seo";
import { useLang } from "../context/LangContext";

const posts: Record<string, {
  title: { ar: string; en: string };
  excerpt: { ar: string; en: string };
  category: { ar: string; en: string };
  date: { ar: string; en: string };
  readTime: { ar: string; en: string };
  image: string;
  body: { ar: string; en: string };
}> = {
  "how-to-build-mvp": {
    title: { ar: "كيف تبني MVP ناجح لشركتك الناشئة في 2024؟", en: "How to build a successful MVP for your startup in 2024?" },
    excerpt: { ar: "دليلك الشامل لتحويل فكرتك من مجرد حلم إلى منتج حقيقي قابل للاختبار في السوق.", en: "Your comprehensive guide to transforming your idea into a real, testable product with minimal cost and time." },
    category: { ar: "ريادة الأعمال", en: "Entrepreneurship" },
    date: { ar: "١٥ أكتوبر ٢٠٢٣", en: "Oct 15, 2023" },
    readTime: { ar: "٥ دقائق", en: "5 min read" },
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    body: {
      ar: `**ما هو الـ MVP؟**

الـ MVP (Minimum Viable Product) هو النسخة الأولى من منتجك التي تحتوي على الحد الأدنى من الميزات الكافية لاختباره مع مستخدمين حقيقيين وجمع ردود الأفعال.

**لماذا تبدأ بـ MVP؟**

- توفير الوقت والمال: بدلاً من بناء منتج كامل قد لا يجد سوقاً، تبدأ بالجوهر.
- التحقق السريع: تتعلم من المستخدمين الحقيقيين وليس من الافتراضات.
- جذب الاستثمار: المستثمرون يريدون رؤية تحقق فعلي في السوق.

**خطوات بناء MVP ناجح:**

- حدد المشكلة بدقة: من هو العميل؟ ما المشكلة التي يعاني منها؟
- اختر ميزة واحدة فقط: ركز على القيمة الجوهرية الوحيدة.
- ابنِ بسرعة: استخدم أدوات جاهزة حيث يمكنك، وكود مخصص حيث لا بد.
- أطلق واستمع: احصل على مستخدمين حقيقيين وجمع ملاحظاتهم.
- كرر وحسّن: بناءً على البيانات، وليس التخمين.

**أشهر أخطاء الـ MVP:**

- بناء الكثير من الميزات في البداية.
- الانتظار حتى يكون مثالياً قبل الإطلاق.
- عدم التحدث مع المستخدمين قبل البناء.

في Codexa نساعدك على بناء MVP قابل للتوسع من اليوم الأول — تواصل معنا لجلسة استشارية مجانية.`,
      en: `**What is an MVP?**

An MVP (Minimum Viable Product) is the first version of your product that contains just enough features to test it with real users and gather feedback.

**Why start with an MVP?**

- Save time and money: Instead of building a complete product that may not find a market, you start with the core.
- Quick validation: You learn from real users, not assumptions.
- Attract investment: Investors want to see actual market validation.

**Steps to build a successful MVP:**

- Define the problem precisely: Who is the customer? What problem do they face?
- Pick ONE feature: Focus on the single core value proposition.
- Build fast: Use ready tools where you can, custom code where you must.
- Launch and listen: Get real users and collect their feedback.
- Iterate and improve: Based on data, not guesses.

**Common MVP mistakes:**

- Building too many features upfront.
- Waiting until it's perfect before launching.
- Not talking to users before building.

At Codexa, we help you build a scalable MVP from day one — contact us for a free consultation.`
    }
  },
  "why-react-for-startups": {
    title: { ar: "لماذا نعتمد على React و Node.js في بناء المشاريع الضخمة؟", en: "Why we rely on React and Node.js for large-scale projects?" },
    excerpt: { ar: "نظرة تقنية عميقة حول اختيار التقنيات المناسبة لضمان أداء عالٍ وقابلية توسع للمستقبل.", en: "A deep technical dive into choosing the right technologies to ensure high performance and future scalability." },
    category: { ar: "تقنية", en: "Technology" },
    date: { ar: "٢ نوفمبر ٢٠٢٣", en: "Nov 2, 2023" },
    readTime: { ar: "٧ دقائق", en: "7 min read" },
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200&auto=format&fit=crop",
    body: {
      ar: `**لماذا React؟**

React هي مكتبة JavaScript مبنية من فيسبوك، وأصبحت الخيار الأول لبناء واجهات المستخدم التفاعلية لأسباب وجيهة.

**مزايا React:**

- Component Architecture: تقسيم الواجهة إلى مكونات قابلة لإعادة الاستخدام.
- Virtual DOM: أداء عالٍ بدون إعادة رسم كاملة للصفحة.
- Ecosystem ضخم: آلاف المكتبات والأدوات الجاهزة.
- TypeScript Support: كتابة كود آمن ومنظم.

**لماذا Node.js للـ Backend؟**

- JavaScript في كل مكان: نفس اللغة في Frontend و Backend.
- Non-blocking I/O: مثالي للتطبيقات ذات الحمل العالي.
- NPM Ecosystem: أكبر مستودع للحزم البرمجية في العالم.
- Microservices Ready: يتوافق بشكل طبيعي مع معمارية الخدمات الصغيرة.

**متى لا نستخدمهما؟**

عندما يحتاج المشروع لمعالجة بيانات ضخمة أو علوم بيانات، قد نلجأ إلى Python. وعندما نبني تطبيقات إدارة داخلية بسيطة، قد نستخدم Laravel.

الاختيار الصحيح للتقنية يعتمد دائماً على طبيعة المشروع وليس على الموضة.`,
      en: `**Why React?**

React is a JavaScript library built by Facebook, and has become the top choice for building interactive user interfaces for good reasons.

**React advantages:**

- Component Architecture: Split the interface into reusable, composable components.
- Virtual DOM: High performance without full page re-renders.
- Massive Ecosystem: Thousands of ready-made libraries and tools.
- TypeScript Support: Write safe and organized code.

**Why Node.js for the Backend?**

- JavaScript everywhere: Same language on frontend and backend.
- Non-blocking I/O: Ideal for high-load applications.
- NPM Ecosystem: The world's largest package registry.
- Microservices Ready: Naturally aligns with microservice architecture.

**When do we NOT use them?**

When a project needs heavy data processing or data science, we may turn to Python. For simple internal management apps, we might choose Laravel instead.

The right technology choice always depends on the project's nature, not on trends.`
    }
  },
  "ui-ux-importance": {
    title: { ar: "أهمية واجهة المستخدم (UI/UX) في تقليل تكلفة الاستحواذ على العملاء", en: "The importance of UI/UX in reducing Customer Acquisition Cost" },
    excerpt: { ar: "كيف يمكن لتصميم بسيط وذكي أن يضاعف مبيعاتك ويقلل من الأموال المهدرة في الإعلانات.", en: "How a simple and smart design can multiply your sales and reduce wasted ad spend." },
    category: { ar: "تصميم", en: "Design" },
    date: { ar: "١٠ ديسمبر ٢٠٢٣", en: "Dec 10, 2023" },
    readTime: { ar: "٤ دقائق", en: "4 min read" },
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200&auto=format&fit=crop",
    body: {
      ar: `**تكلفة الاستحواذ على العملاء (CAC)**

كل ريال تصرفه على إعلانات يجب أن يتحول إلى عميل فعلي. هنا يأتي دور UI/UX — تصميم تجربة المستخدم.

**كيف يقلل التصميم الجيد من الـ CAC؟**

- معدل التحويل: صفحة هبوط مصممة جيداً تحول 5% بدلاً من 1% مما يعني 5 أضعاف العملاء بنفس الميزانية.
- الاحتفاظ بالعملاء: تجربة مستخدم سلسة تجعل العملاء يعودون بدون أن تنفق على إعادة استهدافهم.
- التوصية الشفهية: المستخدمون الراضون يوصون بمنتجك مجاناً.

**أرقام حقيقية:**

- شركة IBM وجدت أن كل 1 دولار تنفقه على UX يعيد 100 دولار عائداً.
- تحسين سرعة الصفحة بثانية واحدة يزيد التحويلات بنسبة 7%.

**ما الذي يجب تصميمه بعناية؟**

- صفحة الهبوط الرئيسية.
- عملية التسجيل أو الشراء.
- الرسائل الفارغة (Empty States).
- رسائل الخطأ.

في Codexa، كل مشروع نبنيه يبدأ بتحليل تجربة المستخدم — لأن الكود الجميل الذي لا يُستخدم لا قيمة له.`,
      en: `**Customer Acquisition Cost (CAC)**

Every dollar you spend on ads should convert into an actual customer. That's where UI/UX design comes in.

**How does good design reduce CAC?**

- Conversion Rate: A well-designed landing page converts 5% instead of 1%, meaning 5x more customers with the same budget.
- Customer Retention: A smooth user experience keeps customers coming back without paying for retargeting.
- Word-of-mouth: Satisfied users recommend your product for free.

**Real numbers:**

- IBM found that every 1 dollar spent on UX returns 100 dollars in revenue.
- Improving page speed by 1 second increases conversions by 7%.

**What needs careful design?**

- The main landing page.
- The registration or purchase flow.
- Empty States.
- Error messages.

At Codexa, every project we build starts with user experience analysis — because beautiful code that nobody uses is worthless.`
    }
  },
  "cloud-hosting-guide": {
    title: { ar: "دليل الشركات الناشئة لاختيار الاستضافة السحابية المناسبة", en: "Startup's guide to choosing the right cloud hosting" },
    excerpt: { ar: "مقارنة بين AWS و Google Cloud و Azure لمساعدتك في اتخاذ القرار التقني الأهم لمنتجك.", en: "A comparison between AWS, Google Cloud, and Azure to help you make the most important technical decision." },
    category: { ar: "بنية تحتية", en: "Infrastructure" },
    date: { ar: "٥ يناير ٢٠٢٤", en: "Jan 5, 2024" },
    readTime: { ar: "٨ دقائق", en: "8 min read" },
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    body: {
      ar: `**الثلاثة الكبار في الاستضافة السحابية**

**AWS (Amazon Web Services)**

- الأقدم والأوسع انتشاراً مع أكثر من 200 خدمة متاحة.
- الأفضل للمشاريع المعقدة التي تحتاج مرونة عالية.
- السلبية: منحنى تعلم حاد.

**Google Cloud Platform (GCP)**

- الأقوى في مجال الذكاء الاصطناعي والبيانات الضخمة.
- تكامل مثالي مع أدوات Google.
- الأفضل للتطبيقات التي تعتمد على ML/AI.

**Microsoft Azure**

- الخيار الأمثل للشركات التي تعتمد على بيئة Microsoft.
- تكامل مثالي مع Office 365 و Active Directory.

**ماذا توصي Codexa للشركات الناشئة؟**

- DigitalOcean أو Hetzner للبساطة والتكلفة المنخفضة.
- Vercel أو Railway للـ Web Apps الحديثة.
- AWS للمشاريع الضخمة بعد نمو المنتج.

التقنية الصحيحة تعتمد على حجم مشروعك وميزانيتك وفريقك.`,
      en: `**The Big Three in Cloud Hosting**

**AWS (Amazon Web Services)**

- The oldest and most widely adopted with over 200 available services.
- Best for complex projects requiring high flexibility.
- Downside: Steep learning curve.

**Google Cloud Platform (GCP)**

- The strongest in AI and big data.
- Perfect integration with Google tools (BigQuery, TensorFlow).
- Best for applications relying on ML/AI.

**Microsoft Azure**

- The best choice for companies relying on Microsoft environments.
- Perfect integration with Office 365 and Active Directory.

**What does Codexa recommend for startups?**

- DigitalOcean or Hetzner for simplicity and low cost.
- Vercel or Railway for modern Web Apps.
- AWS for large-scale projects after product growth.

The right technology depends on your project size, budget, and team.`
    }
  }
};

function renderBody(text: string) {
  return text.split("\n\n").map((para, i) => {
    const isBoldHeading = para.startsWith("**") && para.endsWith("**") && !para.slice(2, -2).includes("\n");
    if (isBoldHeading) {
      return <h2 key={i} className="mt-10 mb-2 text-xl font-bold text-(--color-ink)">{para.slice(2, -2)}</h2>;
    }
    const lines = para.split("\n");
    const isList = lines.every(l => l.startsWith("- "));
    if (isList) {
      return (
        <ul key={i} className="mt-3 space-y-2 list-disc list-inside text-(--color-muted) leading-relaxed text-base">
          {lines.map((l, j) => <li key={j}>{l.slice(2)}</li>)}
        </ul>
      );
    }
    const html = para.replace(/\*\*(.+?)\*\*/g, "<strong class=\"text-(--color-ink)\">$1</strong>");
    return <p key={i} className="mt-5 text-(--color-muted) leading-relaxed text-base" dangerouslySetInnerHTML={{ __html: html }} />;
  });
}

export default function BlogPostPage() {
  const { id } = useParams<{ id: string }>();
  const { lang, dir, path } = useLang();
  const isAr = lang === "ar";
  const post = id ? posts[id] : null;

  if (!post) {
    return (
      <>
        <Seo title={isAr ? "المقال غير موجود | Codexa" : "Post not found | Codexa"} description="" />
        <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-5 text-center">
          <p className="text-5xl font-black text-(--color-indigo)">404</p>
          <h1 className="text-2xl font-bold text-(--color-ink)">{isAr ? "المقال غير موجود" : "Post not found"}</h1>
          <Link to={path("/blog")} className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-(--color-indigo) to-(--color-cyan) px-6 py-3 text-sm font-semibold text-white">
            {isAr ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
            {isAr ? "العودة للمدونة" : "Back to blog"}
          </Link>
        </div>
      </>
    );
  }

  const title = post.title[lang];

  return (
    <>
      <Seo title={`${title} | Codexa`} description={post.excerpt[lang]} />

      <div className="relative h-48 sm:h-80 md:h-96 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-[#09090b] z-10" />
        <img src={post.image} alt={title} className="w-full h-full object-cover" />
      </div>

      <article className="mx-auto max-w-3xl px-4 sm:px-5 pb-16 sm:pb-24 -mt-4" dir={dir}>
        <Link
          to={path("/blog")}
          className="inline-flex items-center gap-2 text-sm text-(--color-muted) hover:text-(--color-cyan) transition-colors mb-6 mt-6 sm:mb-8 sm:mt-8"
        >
          {isAr ? <ArrowRight size={15} /> : <ArrowLeft size={15} />}
          {isAr ? "العودة للمدونة" : "Back to blog"}
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-block rounded-full bg-(--color-indigo)/20 border border-(--color-indigo)/30 px-3 py-1 text-xs font-semibold text-(--color-indigo) mb-3 sm:mb-4">
            {post.category[lang]}
          </span>
          <h1 className="text-2xl sm:text-4xl font-bold text-(--color-ink) leading-snug">{title}</h1>
          <div className="mt-3 sm:mt-4 flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-(--color-muted)">
            <span className="flex items-center gap-1.5"><Calendar size={13} />{post.date[lang]}</span>
            <span className="flex items-center gap-1.5"><Clock size={13} />{post.readTime[lang]}</span>
          </div>
          <div className="mt-8 sm:mt-10 border-t border-(--color-border) pt-6 sm:pt-8">{renderBody(post.body[lang])}</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 sm:mt-16 rounded-2xl border border-(--color-border) bg-white/[0.02] p-5 sm:p-8 text-center"
        >
          <h2 className="text-lg sm:text-xl font-bold text-(--color-ink) mb-2 sm:mb-3">
            {isAr ? "هل مشروعك جاهز للانطلاق؟" : "Ready to launch your project?"}
          </h2>
          <p className="text-xs sm:text-sm text-(--color-muted) mb-5 sm:mb-6">
            {isAr ? "تواصل معنا الآن لجلسة استشارية مجانية." : "Contact us now for a free consultation session."}
          </p>
          <a
            href={`https://wa.me/201101970882?text=${encodeURIComponent(isAr ? `مرحباً، قرأت مقال "${title}" وأريد الاستفسار` : `Hi, I read "${title}" and I'd like to inquire`)}`}
            target="_blank" rel="noreferrer"
            className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-xl bg-gradient-to-r from-(--color-indigo) to-(--color-cyan) px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            <MessageCircle size={16} />
            {isAr ? "تواصل عبر واتساب" : "Message on WhatsApp"}
          </a>
        </motion.div>
      </article>
      <CTASection />
    </>
  );
}
