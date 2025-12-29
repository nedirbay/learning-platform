import { injectable } from "tsyringe";
import type { DashboardRepository } from "../../domain/repository/DashboardRepository";
import { type DashboardData } from "../../domain/entity/DashboardData";

@injectable()
export class DashboardRepositoryImpl implements DashboardRepository {
  async getStudentDashboard(): Promise<DashboardData> {
    return {
      enrolledCourses: [
        {
          id: "1",
          title: "Vue 3 Masterclass",
          description: "...",
          instructor: "John Doe",
          price: 100,
          rating: 5,
          thumbnailUrl: "",
          categories: ["Web"],
        },
      ],
      completedCourses: 2,
      learningHours: 15,
      certificates: 1,
    };
  }
}
