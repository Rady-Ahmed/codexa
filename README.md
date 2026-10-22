# Codexa — Website

موقع شركة Codexa الكامل. React 19 (Vite) + TypeScript strict + Tailwind v4 + Framer Motion، مع Backend بسيط (Vercel Serverless Function) لفورم التواصل، واختبارات Vitest، وCI عبر GitHub Actions.

## الفيتشرز

**المحتوى:**
- صفحات: Home, Services, Portfolio (+ Case study تفصيلي لكل مشروع بصيغة Challenge/Approach/Result + illustration مجردة), Pricing, About, Contact, Privacy, Terms, 404
- Comparison table احترافي (Codexa مقابل فريلانسر ووكالة تقليدية)

**i18n حقيقي (مش toggle بس):**
- كل لغة URL منفصل وقابل للفهرسة: `/services` (عربي) و`/en/services` (إنجليزي) — مش نفس الصفحة بلغتين
- `hreflang` alternates (`ar`/`en`/`x-default`) بتتحقن ديناميكي في كل صفحة
- الخطوط self-hosted بالكامل (`@fontsource`) — مفيش أي طلب لـ Google Fonts CDN

**SEO:**
- `Seo.tsx`: title/description/OG/Twitter meta ديناميكي لكل صفحة + canonical URL
- JSON-LD structured data (`ProfessionalService` schema)
- `sitemap.xml` بيتولد أوتوماتيك قبل كل build (`scripts/generate-sitemap.mjs`) من قائمة routes حقيقية + hreflang alternates لكل URL — مش ملف XML بيتكتب يدوي وممكن يبوظ

**أداء:**
- Route-level code splitting (`React.lazy` + `Suspense`)
- خطوط self-hosted بـ subsetting تلقائي (الـ browser بيحمّل بس الـ unicode range المستخدم فعليًا)

**Accessibility:**
- Skip-to-content link
- Escape key + focus trap أساسي على mobile menu
- `aria-expanded`/`aria-controls` على عناصر تفاعلية

**Resilience:**
- `ErrorBoundary` عام بيمسك أي crash ويبعته لـ Sentry (لو مفعّل) بدل صفحة بيضا فاضية
- Rate limiting بسيط على `/api/contact` (in-memory sliding window) ضد spam scripted

**الأمان في الفورم:**
- Honeypot field + validation + rate limiting

**اختبارات (Vitest + React Testing Library):**
- `LangContext`: التحقق من استنتاج اللغة من الـ URL، وبناء الـ localized paths
- `ContactPage`: required fields، submission، وhoneypot behavior

**CI:**
- `.github/workflows/ci.yml` — بيشغّل lint + typecheck + test + build على كل push/PR

**تكاملات اختيارية (معطّلة افتراضيًا، بتتفعّل بـ env var):**
- Sentry (error tracking) — `VITE_SENTRY_DSN`
- Plausible Analytics (privacy-friendly، مفيش أي تتبع من غيرها) — `VITE_PLAUSIBLE_DOMAIN`
- Resend (إيميل transactional للفورم) — `RESEND_API_KEY` + `NOTIFY_EMAIL_TO`

## التشغيل محليًا

```bash
npm install
npm run dev
```

## الاختبارات

```bash
npm run test        # watch mode
npx vitest run       # single run (زي CI بالظبط)
```

## البناء

```bash
npm run build   # بيولّد sitemap.xml تلقائي (prebuild) قبل ما يبني
npm run preview
```

## النشر على Vercel

1. ادخل على vercel.com/new واستورد الريبو أو اعمل `vercel` من الـ CLI داخل مجلد المشروع.
2. Vercel هيكتشف إنه مشروع Vite تلقائيًا (Build command: `npm run build`, Output: `dist`).
3. ملف `api/contact.ts` هيتحول أوتوماتيك لـ Serverless Function على `/api/contact`.
4. (اختياري) ضيف أي من الـ Environment Variables الموجودة في `.env.example` حسب التكاملات اللي عايزها.

## هيكل المشروع

```
src/
  components/    مكونات UI قابلة لإعادة الاستخدام
  pages/         الصفحات — كل صفحة lazy-loaded، وليها .test.tsx لو فيها منطق يستاهل اختبار
  context/       LangContext — اللغة مشتقة من الـ URL (/en prefix)، مش state منفصل
  data/          نصوص الترجمة (translations.ts) ومحتوى الـ Portfolio (portfolio.ts)
  lib/           تكاملات اختيارية (sentry.ts)
  config.ts      نقطة مركزية لدومين الموقع وقائمة الـ routes
api/
  contact.ts     Serverless function — validation + rate limiting + Slack/Resend اختياري
scripts/
  generate-sitemap.mjs   بيولّد public/sitemap.xml قبل كل build
public/
  robots.txt, manifest.json, favicon.svg
.github/workflows/ci.yml   lint + typecheck + test + build على كل push
```

## تعديلات سريعة قبل النشر

- **الدومين**: غيّر `SITE_URL` في `src/config.ts` و`scripts/generate-sitemap.mjs` لدومينك الفعلي — ده المصدر الوحيد اللي محتاج تعديل، والباقي (canonical, hreflang, JSON-LD) بيتولد منه أو من `window.location` تلقائي.
- **رقم الواتساب**: `wa.me/201000000000` في `CTASection.tsx` و`ContactPage.tsx`.
- **البريد/السوشيال**: `Footer.tsx`.
- **محتوى الأعمال**: `src/data/portfolio.ts`.
- **باقات الأسعار والنصوص كلها**: `src/data/translations.ts`.
