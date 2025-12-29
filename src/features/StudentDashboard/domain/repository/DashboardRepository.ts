import { type DashboardData } from "../entity/DashboardData";

export interface DashboardRepository {
  getStudentDashboard(): Promise<DashboardData>;
}
