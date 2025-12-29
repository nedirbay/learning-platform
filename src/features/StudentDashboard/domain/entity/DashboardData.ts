import { type Course } from "../../../CourseCatalog/domain/entity/Course";

export interface DashboardData {
  enrolledCourses: Course[];
  completedCourses: number;
  learningHours: number;
  certificates: number;
}
