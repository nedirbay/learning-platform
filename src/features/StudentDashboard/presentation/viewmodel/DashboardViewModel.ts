import { injectable, inject } from "tsyringe";
import { type ViewModel } from "@/core/mvvm/useViewModel";
import { MutableStateFlow } from "@/core/flow";
import { GetDashboardUseCase } from "../../domain/usecase/GetDashboardUseCase";
import { type DashboardData } from "../../domain/entity/DashboardData";

export interface DashboardState {
  isLoading: boolean;
  data: DashboardData | null;
}

@injectable()
export class DashboardViewModel implements ViewModel {
  uiState = new MutableStateFlow<DashboardState>({
    isLoading: false,
    data: null,
  });

  constructor(private getDashboardUseCase: GetDashboardUseCase) {}

  init() {
    this.loadData();
  }

  async loadData() {
    this.uiState.update({ isLoading: true });
    const data = await this.getDashboardUseCase.execute();
    this.uiState.update({ isLoading: false, data });
  }
}
