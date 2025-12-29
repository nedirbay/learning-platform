import { type Lesson } from "../entity/Lesson";

export interface LearningRepository {
  getLessonsByCourseId(courseId: string): Promise<Lesson[]>;
  markLessonAsComplete(lessonId: string): Promise<void>;
}
