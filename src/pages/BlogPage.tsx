import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import CTASection from "../components/CTASection";
import Seo from "../components/Seo";
import { useLang } from "../context/LangContext";
import { Link } from "react-router-dom";

export default function BlogPage() {
  const { lang, dir, path } = useLang();
  
  const isAr = lang === "ar";

  const posts = [
    {
      id: "how-to-build-mvp",
      title: isAr ? "كيف تبني MVP ناجح لشركتك الناشئة في 2024؟" : "How to build a successful MVP for your startup in 2024?",
      excerpt: isAr 
        ? "دليلك الشامل لتحويل فكرتك من مجرد حلم إلى منتج حقيقي قابل للاختبار في السوق بأقل تكلفة ووقت ممكن."
        : "Your comprehensive guide to transforming your idea into a real, testable product with minimal cost and time.",
      category: isAr ? "ريادة الأعمال" : "Entrepreneurship",
      date: isAr ? "١٥ أكتوبر ٢٠٢٣" : "Oct 15, 2023",
      readTime: isAr ? "٥ دقائق" : "5 min read",
      featured: true,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "why-react-for-startups",
      title: isAr ? "لماذا نعتمد على React و Node.js في بناء المشاريع الضخمة؟" : "Why we rely on React and Node.js for large-scale projects?",
      excerpt: isAr 
        ? "نظرة تقنية عميقة حول اختيار التقنيات المناسبة لضمان أداء عالٍ وقابلية توسع للمستقبل."
        : "A deep technical dive into choosing the right technologies to ensure high performance and future scalability.",
      category: isAr ? "تقنية" : "Technology",
      date: isAr ? "٢ نوفمبر ٢٠٢٣" : "Nov 2, 2023",
      readTime: isAr ? "٧ دقائق" : "7 min read",
      featured: false,
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "ui-ux-importance",
      title: isAr ? "أهمية واجهة المستخدم (UI/UX) في تقليل تكلفة الاستحواذ على العملاء" : "The importance of UI/UX in reducing Customer Acquisition Cost",
      excerpt: isAr 
        ? "كيف يمكن لتصميم بسيط وذكي أن يضاعف مبيعاتك ويقلل من الأموال المهدرة في الإعلانات."
        : "How a simple and smart design can multiply your sales and reduce wasted ad spend.",
      category: isAr ? "تصميم" : "Design",
      date: isAr ? "١٠ ديسمبر ٢٠٢٣" : "Dec 10, 2023",
      readTime: isAr ? "٤ دقائق" : "4 min read",
      featured: false,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "cloud-hosting-guide",
      title: isAr ? "دليل الشركات الناشئة لاختيار الاستضافة السحابية المناسبة" : "Startup's guide to choosing the right cloud hosting",
      excerpt: isAr 
        ? "مقارنة بين AWS و Google Cloud و Azure لمساعدتك في اتخاذ القرار التقني الأهم لمنتجك."
        : "A comparison between AWS, Google Cloud, and Azure to help you make the most important technical decision.",
      category: isAr ? "بنية تحتية" : "Infrastructure",
      date: isAr ? "٥ يناير ٢٠٢٤" : "Jan 5, 2024",
      readTime: isAr ? "٨ دقائق" : "8 min read",
      featured: false,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <>
      <Seo 
        title={isAr ? "المدونة التقنية | Codexa" : "Tech Blog | Codexa"} 
        description={isAr ? "مقالات حول تطوير البرمجيات، ريادة الأعمال، والتقنية." : "Articles about software development, entrepreneurship, and tech."} 
      />
      
      <PageHeader 
        eyebrow={isAr ? "أفكار ورؤى" : "Insights & Ideas"} 
        title={isAr ? "المدونة التقنية" : "Our Journal"} 
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-5 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {posts.map((post, index) => (
            <Reveal key={post.id} delay={index * 0.1}>
              <motion.article 
                whileHover={{ y: -5 }}
                className={`group relative overflow-hidden rounded-3xl border border-(--color-border) bg-white/[0.02] flex flex-col h-full ${post.featured ? 'md:col-span-2' : ''}`}
              >
                {/* Image */}
                <div className={`relative w-full overflow-hidden ${post.featured ? 'h-52 sm:h-80' : 'h-44 sm:h-48'}`}>
                  <div className="absolute inset-0 bg-black/20 z-10 transition-opacity group-hover:opacity-0" />
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3.5 left-3.5 z-20 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 sm:gap-4 text-xs text-(--color-muted) mb-2.5 sm:mb-3">
                    <span className="flex items-center gap-1"><Calendar size={13} /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={13} /> {post.readTime}</span>
                  </div>
                  
                  <h3 className={`font-bold text-white mb-2.5 sm:mb-3 transition-colors group-hover:text-(--color-cyan) ${post.featured ? 'text-lg sm:text-3xl' : 'text-base sm:text-xl'}`}>
                    <Link to={path(`/blog/${post.id}`)} className="focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-(--color-muted) text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 flex-1">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-(--color-cyan)">
                    {isAr ? "اقرأ المزيد" : "Read more"}
                    <ArrowRight size={16} className={`transition-transform group-hover:${dir === 'rtl' ? '-translate-x-1' : 'translate-x-1'} ${dir === 'rtl' ? 'rotate-180' : ''}`} />
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
