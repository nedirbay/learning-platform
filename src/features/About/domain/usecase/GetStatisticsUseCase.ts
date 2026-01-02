import { injectable, inject } from "tsyringe";
import type { AboutRepository } from "../repository/AboutRepository";
import { type Statistic } from "../entity/Statistic";

@injectable()
export class GetStatisticsUseCase {
    constructor(@inject("AboutRepository") private repository: AboutRepository) {}

    async execute(): Promise<Statistic[]> {
        return this.repository.getStatistics();
    }
}
