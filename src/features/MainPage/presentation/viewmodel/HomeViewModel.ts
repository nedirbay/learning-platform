import { injectable, inject } from "tsyringe";
import { type ViewModel } from "@/core/mvvm/useViewModel";
import { MutableStateFlow } from "@/core/flow";
import { GetHomePageDataUseCase } from "../../domain/usecase/GetHomePageDataUseCase";
import { type HomePageData } from "../../domain/entity/HomePageEntities";

export interface HomeState {
  isLoading: boolean;
  data: HomePageData | null;
  error: string | null;
}

@injectable()
export class HomeViewModel implements ViewModel {
  uiState = new MutableStateFlow<HomeState>({
    isLoading: false,
    data: null,
    error: null,
  });

  constructor(
    @inject(GetHomePageDataUseCase)
    private getHomePageDataUseCase: GetHomePageDataUseCase) { }

  init() {
    this.fetchData();
  }

  async fetchData() {
    this.uiState.update({ isLoading: true, error: null });
    try {
      const data = await this.getHomePageDataUseCase.execute();
      this.uiState.update({ isLoading: false, data });
    } catch (error) {
      this.uiState.update({ isLoading: false, error: "Maglumatlary ýükläp bolmady" });
    }
  }
}
