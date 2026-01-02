import { injectable, inject } from "tsyringe";
import type { AboutRepository } from "../repository/AboutRepository";
import { type TeamMember } from "../entity/TeamMember";

@injectable()
export class GetTeamMembersUseCase {
    constructor(@inject("AboutRepository") private repository: AboutRepository) {}

    async execute(): Promise<TeamMember[]> {
        return this.repository.getTeamMembers();
    }
}
