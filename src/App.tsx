import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { LangProvider } from "./context/LangContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import RouteLoader from "./components/RouteLoader";
import ErrorBoundary from "./components/ErrorBoundary";
import Analytics from "./components/Analytics";
import Preloader from "./components/Preloader";
import PageTransition from "./components/PageTransition";
import FloatingContact from "./components/FloatingContact";
import CustomCursor from "./components/CustomCursor";

const Home = lazy(() => import("./pages/Home"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const ServiceCategoryPage = lazy(() => import("./pages/ServiceCategoryPage"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const PricingPage = lazy(() => import("./pages/PricingPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Same page tree rendered under both "/" (Arabic, default) and "/en"
// (English) — this is what makes each language a real, crawlable,
// separately-indexable URL instead of a client-side-only toggle.
function PageRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/services" element={<PageTransition><ServicesPage /></PageTransition>} />
        <Route path="/services/:categoryId" element={<PageTransition><ServiceCategoryPage /></PageTransition>} />
        <Route path="/portfolio" element={<PageTransition><PortfolioPage /></PageTransition>} />
        <Route path="/portfolio/:slug" element={<PageTransition><ProjectDetail /></PageTransition>} />
        <Route path="/pricing" element={<PageTransition><PricingPage /></PageTransition>} />
        <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
        <Route path="/blog" element={<PageTransition><BlogPage /></PageTransition>} />
        <Route path="/blog/:id" element={<PageTransition><BlogPostPage /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
        <Route path="/privacy" element={<PageTransition><PrivacyPage /></PageTransition>} />
        <Route path="/terms" element={<PageTransition><TermsPage /></PageTransition>} />

        <Route path="/en" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/en/services" element={<PageTransition><ServicesPage /></PageTransition>} />
        <Route path="/en/services/:categoryId" element={<PageTransition><ServiceCategoryPage /></PageTransition>} />
        <Route path="/en/portfolio" element={<PageTransition><PortfolioPage /></PageTransition>} />
        <Route path="/en/portfolio/:slug" element={<PageTransition><ProjectDetail /></PageTransition>} />
        <Route path="/en/pricing" element={<PageTransition><PricingPage /></PageTransition>} />
        <Route path="/en/about" element={<PageTransition><AboutPage /></PageTransition>} />
        <Route path="/en/blog" element={<PageTransition><BlogPage /></PageTransition>} />
        <Route path="/en/blog/:id" element={<PageTransition><BlogPostPage /></PageTransition>} />
        <Route path="/en/contact" element={<PageTransition><ContactPage /></PageTransition>} />
        <Route path="/en/privacy" element={<PageTransition><PrivacyPage /></PageTransition>} />
        <Route path="/en/terms" element={<PageTransition><TermsPage /></PageTransition>} />

        <Route path="*" element={<PageTransition><NotFoundPage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function AppShell() {
  return (
    <LangProvider>
      <CustomCursor />
      <Preloader />
      <ScrollToTop />
      <ScrollProgress />
      <Analytics />
      <Navbar />
      <main id="main-content">
        <Suspense fallback={<RouteLoader />}>
          <PageRoutes />
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
      <FloatingContact />
    </LangProvider>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </ErrorBoundary>
  );
}
