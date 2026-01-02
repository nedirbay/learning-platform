import type { IAdminRepository } from '../repositories/IAdminRepository';
import type { DashboardStats } from '../models/DashboardStats';

export class GetDashboardStatsUseCase {
    constructor(private repository: IAdminRepository) {}

    async execute(): Promise<DashboardStats> {
        return await this.repository.getDashboardStats();
    }
}
