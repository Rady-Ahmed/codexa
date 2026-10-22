import Hero from "../components/Hero";
import TrustMarquee from "../components/TrustMarquee";
import ProblemSolution from "../components/ProblemSolution";
import EnterpriseTrust from "../components/EnterpriseTrust";
import PartnershipJourney from "../components/PartnershipJourney";
import Services from "../components/Services";
import StartupInitiative from "../components/StartupInitiative";
import ROICalculator from "../components/ROICalculator";
import Testimonials from "../components/Testimonials";
import Process from "../components/Process";
import PortfolioPreview from "../components/PortfolioPreview";
import WhyUs from "../components/WhyUs";
import StatsBar from "../components/StatsBar";
import LiveDashboard from "../components/LiveDashboard";
import CTASection from "../components/CTASection";
import FAQ from "../components/FAQ";
import Seo from "../components/Seo";
import { useLang } from "../context/LangContext";

export default function Home() {
  const { t } = useLang();
  return (
    <>
      <Seo title={t.seo.home.title} description={t.seo.home.desc} />
      <Hero />
      <TrustMarquee />
      <EnterpriseTrust />
      <PartnershipJourney />
      <ProblemSolution />
      <StartupInitiative />
      <Services />
      <ROICalculator />
      <Process />
      <PortfolioPreview />
      <WhyUs />
      <Testimonials />
      <StatsBar />
      <LiveDashboard />
      <CTASection />
      <FAQ />
    </>
  );
}
