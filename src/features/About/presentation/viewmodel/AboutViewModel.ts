import { injectable, inject } from "tsyringe";
import { type ViewModel } from "@/core/mvvm/useViewModel";
import { MutableStateFlow } from "@/core/flow";
import { GetTeamMembersUseCase } from "../../domain/usecase/GetTeamMembersUseCase";
import { GetStatisticsUseCase } from "../../domain/usecase/GetStatisticsUseCase";
import { GetCompanyValuesUseCase } from "../../domain/usecase/GetCompanyValuesUseCase";
import { type TeamMember } from "../../domain/entity/TeamMember";
import { type Statistic } from "../../domain/entity/Statistic";
import { type CompanyValue } from "../../domain/entity/CompanyValue";

export interface AboutState {
    isLoading: boolean;
    teamMembers: TeamMember[];
    statistics: Statistic[];
    companyValues: CompanyValue[];
}

@injectable()
export class AboutViewModel implements ViewModel {
    uiState = new MutableStateFlow<AboutState>({
        isLoading: false,
        teamMembers: [],
        statistics: [],
        companyValues: []
    });

    constructor(
        @inject(GetTeamMembersUseCase) private getTeamMembersUseCase: GetTeamMembersUseCase,
        @inject(GetStatisticsUseCase) private getStatisticsUseCase: GetStatisticsUseCase,
        @inject(GetCompanyValuesUseCase) private getCompanyValuesUseCase: GetCompanyValuesUseCase
    ) {}

    init() {
        this.loadAboutData();
    }

    async loadAboutData() {
        this.uiState.update({ isLoading: true });
        
        try {
            const [teamMembers, statistics, companyValues] = await Promise.all([
                this.getTeamMembersUseCase.execute(),
                this.getStatisticsUseCase.execute(),
                this.getCompanyValuesUseCase.execute()
            ]);

            this.uiState.update({
                isLoading: false,
                teamMembers,
                statistics,
                companyValues
            });
        } catch (error) {
            console.error('Error loading about data:', error);
            this.uiState.update({ isLoading: false });
        }
    }
}
