import { injectable, inject } from 'tsyringe';
import { type ViewModel } from '@/core/mvvm/useViewModel';
import { MutableStateFlow } from '@/core/flow';
import { GetDashboardStatsUseCase } from '../../domain/usecases/GetDashboardStatsUseCase';
import type { DashboardStats } from '../../domain/models/DashboardStats';

export interface DashboardState {
    isLoading: boolean;
    error: string | null;
    stats: DashboardStats | null;
}

@injectable()
export class AdminDashboardViewModel implements ViewModel {
    uiState = new MutableStateFlow<DashboardState>({
        isLoading: false,
        error: null,
        stats: null
    });

    constructor(@inject(GetDashboardStatsUseCase) private getDashboardStatsUseCase: GetDashboardStatsUseCase) {}

    async init() {
        await this.loadStats();
    }

    async loadStats() {
        this.uiState.update({ isLoading: true, error: null });
        
        try {
            const stats = await this.getDashboardStatsUseCase.execute();
            this.uiState.update({ stats, isLoading: false });
        } catch (error) {
            this.uiState.update({
                error: error instanceof Error ? error.message : 'Maglumat ýüklenende ýalňyşlyk ýüze çykdy',
                isLoading: false
            });
        }
    }

    async refresh() {
        await this.loadStats();
    }
}

