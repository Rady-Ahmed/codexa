import { vi } from "vitest";
import "@testing-library/jest-dom/vitest";

// jsdom doesn't implement IntersectionObserver, which framer-motion's
// `whileInView` (used by Reveal) relies on for scroll-triggered animations.
class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | null = null;
  readonly rootMargin: string = "";
  readonly scrollMargin: string = "";
  readonly thresholds: ReadonlyArray<number> = [];
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);
