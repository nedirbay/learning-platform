import { type DiModule } from "@/core/di/Container";
import { type DependencyContainer } from "tsyringe";
import { AdminRepository } from "../data/repositories/AdminRepository";
import { GetDashboardStatsUseCase } from "../domain/usecases/GetDashboardStatsUseCase";
import { AdminDashboardViewModel } from "../presentation/viewmodel/AdminDashboardViewModel";

export const AdminSymbols = {
    AdminRepository: Symbol.for("AdminRepository"),
    GetDashboardStatsUseCase: Symbol.for("GetDashboardStatsUseCase"),
    AdminDashboardViewModel: Symbol.for("AdminDashboardViewModel"),
};

export const AdminModule: DiModule = {
    registerModule: (container: DependencyContainer) => {
        // Register Repository
        container.register(AdminSymbols.AdminRepository, {
            useClass: AdminRepository,
        });

        // Register Use Cases
        container.register(AdminSymbols.GetDashboardStatsUseCase, {
            useFactory: (c) => {
                const repo = c.resolve(AdminSymbols.AdminRepository);
                return new GetDashboardStatsUseCase(repo);
            },
        });

        // Register ViewModel
        container.register(AdminSymbols.AdminDashboardViewModel, {
            useFactory: (c) => {
                const getDashboardStatsUseCase = c.resolve(
                    AdminSymbols.GetDashboardStatsUseCase
                );
                return new AdminDashboardViewModel(getDashboardStatsUseCase);
            },
        });
    },
};
