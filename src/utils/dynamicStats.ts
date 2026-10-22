/**
 * Dynamic Statistics Engine with Automatic Time Progression Factor (عامل الزمن).
 *
 * Rules & Logic:
 * 1. Infrastructure Uptime: Strictly 100% (100% SLA uptime guarantee).
 * 2. Projects Delivered: Baseline starts at 23+, automatically incrementing over time
 *    (approx 1 project completed every ~40-45 days).
 * 3. Successful Collaborations: Baseline starts at 50+, automatically incrementing with business expansion.
 * 4. Delivery Speed: 10x acceleration.
 * 5. Partner Sales Growth: 3.2x.
 */

// Calibration baseline date: October 2024
const BASELINE_DATE = new Date("2024-10-01T00:00:00Z");

export interface DynamicStatsData {
  uptime: string;            // "100%"
  deliverySpeed: string;     // "10x"
  growthMultiplier: string;  // "3.2x"
  projectsDelivered: string; // "23+" or higher depending on elapsed time
  collaborations: string;    // "50+" or higher depending on elapsed time
  raw: {
    uptimeNum: number;
    projectsNum: number;
    collaborationsNum: number;
  };
}

export function getDynamicStats(customDate?: Date): DynamicStatsData {
  const now = customDate || new Date();

  // Calculate elapsed months since baseline
  const diffMonths = Math.max(
    0,
    (now.getFullYear() - BASELINE_DATE.getFullYear()) * 12 +
      (now.getMonth() - BASELINE_DATE.getMonth())
  );

  // Projects delivered: guaranteed minimum of 23, increments automatically by ~0.7 projects / month
  const projectsNum = Math.max(23, 23 + Math.floor(diffMonths * 0.7));

  // Successful collaborations: guaranteed minimum of 50, increments automatically by ~1.1 collaborations / month
  const collaborationsNum = Math.max(50, 50 + Math.floor(diffMonths * 1.1));

  return {
    uptime: "100%",
    deliverySpeed: "10x",
    growthMultiplier: "3.2x",
    projectsDelivered: `${projectsNum}+`,
    collaborations: `${collaborationsNum}+`,
    raw: {
      uptimeNum: 100,
      projectsNum,
      collaborationsNum,
    },
  };
}

// Default computed singleton for application-wide consistency
export const dynamicStats = getDynamicStats();
