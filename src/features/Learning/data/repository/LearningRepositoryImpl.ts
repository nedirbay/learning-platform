import { injectable } from "tsyringe";
import type { LearningRepository } from "../../domain/repository/LearningRepository";
import { type Lesson } from "../../domain/entity/Lesson";

@injectable()
export class LearningRepositoryImpl implements LearningRepository {
  async getLessonsByCourseId(courseId: string): Promise<Lesson[]> {
    return [
      {
        id: "101",
        courseId,
        title: "Introduction",
        content: "Welcome to the course",
        durationSeconds: 120,
        isCompleted: true,
      },
      {
        id: "102",
        courseId,
        title: "Setup",
        content: "Setting up environment",
        durationSeconds: 300,
        isCompleted: false,
      },
    ];
  }

  async markLessonAsComplete(lessonId: string): Promise<void> {
    console.log(`Lesson ${lessonId} marked as complete`);
  }
}
