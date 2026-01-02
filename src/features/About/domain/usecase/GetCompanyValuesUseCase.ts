import { injectable, inject } from "tsyringe";
import type { AboutRepository } from "../repository/AboutRepository";
import { type CompanyValue } from "../entity/CompanyValue";

@injectable()
export class GetCompanyValuesUseCase {
    constructor(@inject("AboutRepository") private repository: AboutRepository) {}

    async execute(): Promise<CompanyValue[]> {
        return this.repository.getCompanyValues();
    }
}
