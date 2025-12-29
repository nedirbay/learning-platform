import "reflect-metadata";
import { describe, it, expect } from "vitest";
import { DashboardRepositoryImpl } from "../DashboardRepositoryImpl";

describe("DashboardRepositoryImpl", () => {
  it("should return updated dashboard stats", async () => {
    const repo = new DashboardRepositoryImpl();
    const data = await repo.getStudentDashboard();
    
    expect(data.completedCourses).toBeDefined();
    expect(data.enrolledCourses).toBeDefined();
  });
});
