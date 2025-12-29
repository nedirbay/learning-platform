import { injectable, inject } from "tsyringe";
import type { DashboardRepository } from "../repository/DashboardRepository";
import { type DashboardData } from "../entity/DashboardData";

@injectable()
export class GetDashboardUseCase {
  constructor(@inject("DashboardRepository") private repository: DashboardRepository) {}

  async execute(): Promise<DashboardData> {
    return this.repository.getStudentDashboard();
  }
}
