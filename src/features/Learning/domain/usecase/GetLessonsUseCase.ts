import { injectable, inject } from "tsyringe";
import type { LearningRepository } from "../repository/LearningRepository";
import { type Lesson } from "../entity/Lesson";

@injectable()
export class GetLessonsUseCase {
  constructor(@inject("LearningRepository") private repository: LearningRepository) {}

  async execute(courseId: string): Promise<Lesson[]> {
    return this.repository.getLessonsByCourseId(courseId);
  }
}
