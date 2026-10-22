import PageHeader from "../components/PageHeader";
import Services from "../components/Services";
import Process from "../components/Process";
import CTASection from "../components/CTASection";
import Seo from "../components/Seo";
import { useLang } from "../context/LangContext";

export default function ServicesPage() {
  const { t } = useLang();
  return (
    <>
      <Seo title={t.seo.services.title} description={t.seo.services.desc} />
      <PageHeader
        eyebrow={t.servicesPage.eyebrow}
        title={t.servicesPage.title}
        subtitle={t.servicesPage.subtitle}
      />
      <Services showHeader={false} />
      <Process />
      <CTASection />
    </>
  );
}
