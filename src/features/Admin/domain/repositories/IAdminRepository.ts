import type { DashboardStats } from '../models/DashboardStats';

export interface IAdminRepository {
    getDashboardStats(): Promise<DashboardStats>;
}
