import LegalLayout from "../components/LegalLayout";
import Seo from "../components/Seo";
import { useLang } from "../context/LangContext";

export default function PrivacyPage() {
  const { t, lang } = useLang();

  return (
    <>
      <Seo
        title={`${t.legal.privacyTitle} — Codexa`}
        description={t.legal.privacyTitle}
      />
      <LegalLayout title={t.legal.privacyTitle}>
        {lang === "ar" ? (
          <>
            <p>
              بنحترم خصوصيتك. الصفحة دي بتوضح إزاي Codexa بتجمع وتستخدم بياناتك لما تستخدم الموقع أو تتواصل معانا.
            </p>
            <p>
              <strong className="text-(--color-ink)">البيانات اللي بنجمعها:</strong> الاسم والبريد الإلكتروني وتفاصيل مشروعك، لما تبعتهم عن طريق فورم التواصل.
            </p>
            <p>
              <strong className="text-(--color-ink)">استخدام البيانات:</strong> بنستخدم بياناتك فقط للرد على طلبك والتواصل معاك بخصوص مشروعك. مش بنبيع أو نشارك بياناتك مع أي طرف تالت لأغراض تسويقية.
            </p>
            <p>
              <strong className="text-(--color-ink)">ملفات تعريف الارتباط:</strong> الموقع بيستخدم تخزين محلي بسيط (localStorage) بس لحفظ تفضيل اللغة، من غير أي تتبع إعلاني.
            </p>
            <p>
              <strong className="text-(--color-ink)">حقوقك:</strong> تقدر تطلب حذف بياناتك في أي وقت بالتواصل معانا مباشرة.
            </p>
          </>
        ) : (
          <>
            <p>
              We respect your privacy. This page explains how Codexa collects and uses your data when you use the site or contact us.
            </p>
            <p>
              <strong className="text-(--color-ink)">Data we collect:</strong> Name, email, and project details when submitted via the contact form.
            </p>
            <p>
              <strong className="text-(--color-ink)">How we use it:</strong> Solely to respond to your request and discuss your project. We never sell or share your data with third parties for marketing.
            </p>
            <p>
              <strong className="text-(--color-ink)">Cookies:</strong> The site uses simple local storage only to remember your language preference — no advertising tracking.
            </p>
            <p>
              <strong className="text-(--color-ink)">Your rights:</strong> You may request deletion of your data at any time by contacting us directly.
            </p>
          </>
        )}
      </LegalLayout>
    </>
  );
}
