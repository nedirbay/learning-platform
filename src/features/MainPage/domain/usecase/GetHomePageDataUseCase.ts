import { inject, injectable } from "tsyringe";
import type { MainPageRepository } from "../../domain/repository/MainPageRepository";
import type { HomePageData } from "../../domain/entity/HomePageEntities";


@injectable()
export class GetHomePageDataUseCase {
  constructor(@inject('MainPageRepository') private repository: MainPageRepository) {}

  async execute(): Promise<HomePageData> {
    return this.repository.getHomePageData();
  }
}
