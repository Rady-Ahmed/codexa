import LegalLayout from "../components/LegalLayout";
import Seo from "../components/Seo";
import { useLang } from "../context/LangContext";

export default function TermsPage() {
  const { t, lang } = useLang();

  return (
    <>
      <Seo
        title={`${t.legal.termsTitle} — Codexa`}
        description={t.legal.termsTitle}
      />
      <LegalLayout title={t.legal.termsTitle}>
        {lang === "ar" ? (
          <>
            <p>
              باستخدامك لموقع Codexa، إنت موافق على الشروط دي. لو عندك أي استفسار، تواصل معانا قبل ما تكمل.
            </p>
            <p>
              <strong className="text-(--color-ink)">نطاق الخدمة:</strong> الأسعار الموضحة في صفحة الأسعار تقديرية، وبيتم تأكيد النطاق والتكلفة النهائية بعد جلسة تحليل مع العميل.
            </p>
            <p>
              <strong className="text-(--color-ink)">الملكية الفكرية:</strong> بعد اكتمال الدفع بالكامل، العميل بيمتلك الكود المصدري والأصول المطورة خصيصًا لمشروعه.
            </p>
            <p>
              <strong className="text-(--color-ink)">المحتوى:</strong> كل المحتوى المعروض في قسم الأعمال بيعكس مشاريع حقيقية تم تطويرها من قبل الفريق.
            </p>
            <p>
              <strong className="text-(--color-ink)">التعديلات:</strong> ممكن نحدّث الشروط دي من وقت للتاني، وأي تحديث هيتم نشره على نفس الصفحة.
            </p>
          </>
        ) : (
          <>
            <p>
              By using the Codexa website, you agree to these terms. If you have any questions, reach out before proceeding.
            </p>
            <p>
              <strong className="text-(--color-ink)">Scope of service:</strong> Prices shown on the pricing page are indicative; final scope and cost are confirmed after a discovery session with the client.
            </p>
            <p>
              <strong className="text-(--color-ink)">Intellectual property:</strong> Upon full payment, the client owns the source code and assets built specifically for their project.
            </p>
            <p>
              <strong className="text-(--color-ink)">Content:</strong> All content shown in the portfolio section reflects real projects developed by the team.
            </p>
            <p>
              <strong className="text-(--color-ink)">Changes:</strong> These terms may be updated from time to time; updates will be published on this same page.
            </p>
          </>
        )}
      </LegalLayout>
    </>
  );
}
