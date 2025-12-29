import { injectable, inject } from "tsyringe";
import type { CourseRepository } from "../repository/CourseRepository";
import { type Course } from "../entity/Course";

@injectable()
export class GetCoursesUseCase {
  constructor(@inject("CourseRepository") private repository: CourseRepository) {}

  async execute(): Promise<Course[]> {
    return this.repository.getCourses();
  }
}
