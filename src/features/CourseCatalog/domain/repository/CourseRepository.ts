import { type Course } from "../entity/Course";

export interface CourseRepository {
  getCourses(): Promise<Course[]>;
  getCourseById(id: string): Promise<Course | null>;
}
