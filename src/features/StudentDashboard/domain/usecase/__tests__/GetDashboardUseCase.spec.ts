import "reflect-metadata";
import { describe, it, expect, vi } from "vitest";
import { GetDashboardUseCase } from "../GetDashboardUseCase";
import type { DashboardRepository } from "../../repository/DashboardRepository";

describe("GetDashboardUseCase", () => {
  it("should return dashboard data", async () => {
    const mockRepo: DashboardRepository = {
        getStudentDashboard: vi.fn()
    };
    
    const mockData = { enrolledCourses: [], completedCourses: 0, learningHours: 0, certificates: 0 };
    (mockRepo.getStudentDashboard as any).mockResolvedValue(mockData);

    const useCase = new GetDashboardUseCase(mockRepo);
    const result = await useCase.execute();

    expect(mockRepo.getStudentDashboard).toHaveBeenCalled();
    expect(result).toEqual(mockData);
  });
});
