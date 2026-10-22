import { describe, it, expect } from "vitest";
import { getDynamicStats } from "./dynamicStats";

describe("dynamicStats engine", () => {
  it("enforces 100% infrastructure uptime", () => {
    const stats = getDynamicStats();
    expect(stats.uptime).toBe("100%");
    expect(stats.raw.uptimeNum).toBe(100);
  });

  it("enforces minimum 23+ projects delivered at baseline", () => {
    // At baseline date Oct 2024
    const statsAtBase = getDynamicStats(new Date("2024-10-01T00:00:00Z"));
    expect(statsAtBase.projectsDelivered).toBe("23+");
    expect(statsAtBase.raw.projectsNum).toBe(23);
  });

  it("automatically increments projects and collaborations over time", () => {
    // 10 months after baseline (Aug 2025)
    const futureStats10m = getDynamicStats(new Date("2025-08-01T00:00:00Z"));
    expect(futureStats10m.raw.projectsNum).toBeGreaterThanOrEqual(23);
    expect(futureStats10m.raw.projectsNum).toBe(23 + Math.floor(10 * 0.7)); // 23 + 7 = 30
    expect(futureStats10m.projectsDelivered).toBe("30+");

    // Collaborations also increment
    expect(futureStats10m.raw.collaborationsNum).toBe(50 + Math.floor(10 * 1.1)); // 50 + 11 = 61
    expect(futureStats10m.collaborations).toBe("61+");
  });

  it("never returns a project count below 23 even if date is earlier", () => {
    const pastStats = getDynamicStats(new Date("2023-01-01T00:00:00Z"));
    expect(pastStats.raw.projectsNum).toBe(23);
    expect(pastStats.projectsDelivered).toBe("23+");
  });
});
