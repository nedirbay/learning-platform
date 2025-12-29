import { container } from "tsyringe";
import { AuthRepositoryImpl } from "./features/Auth/data/repository/AuthRepositoryImpl";
import { CourseRepositoryImpl } from "./features/CourseCatalog/data/repository/CourseRepositoryImpl";
import { LearningRepositoryImpl } from "./features/Learning/data/repository/LearningRepositoryImpl";
import { DashboardRepositoryImpl } from "./features/StudentDashboard/data/repository/DashboardRepositoryImpl";
import { CartRepositoryImpl } from "./features/Checkout/data/repository/CartRepositoryImpl";
import { BlogRepositoryImpl } from "./features/Blog/data/repository/BlogRepositoryImpl";

export function setupDi() {
  container.registerSingleton("AuthRepository", AuthRepositoryImpl);
  container.register("CourseRepository", { useClass: CourseRepositoryImpl });
  container.register("LearningRepository", { useClass: LearningRepositoryImpl });
  container.register("DashboardRepository", { useClass: DashboardRepositoryImpl });
  container.register("CartRepository", { useClass: CartRepositoryImpl });
  container.register("BlogRepository", { useClass: BlogRepositoryImpl });
}
