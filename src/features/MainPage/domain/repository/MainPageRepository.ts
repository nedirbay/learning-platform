import type { HomePageData } from "../entity/HomePageEntities";

export interface MainPageRepository {
    getHomePageData(): Promise<HomePageData>;
}
