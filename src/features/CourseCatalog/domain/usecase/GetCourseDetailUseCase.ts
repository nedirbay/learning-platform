import { injectable, inject } from "tsyringe";
import type { CourseRepository } from "../repository/CourseRepository";
import { type Course } from "../entity/Course";

@injectable()
export class GetCourseDetailUseCase {
  constructor(@inject("CourseRepository") private repository: CourseRepository) {}

  async execute(id: string): Promise<Course | null> {
    return this.repository.getCourseById(id);
  }
}
