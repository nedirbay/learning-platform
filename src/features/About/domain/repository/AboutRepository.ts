import { type TeamMember } from '../entity/TeamMember';
import { type Statistic } from '../entity/Statistic';
import { type CompanyValue } from '../entity/CompanyValue';

export interface AboutRepository {
    getTeamMembers(): Promise<TeamMember[]>;
    getStatistics(): Promise<Statistic[]>;
    getCompanyValues(): Promise<CompanyValue[]>;
}
