export interface Lesson {
  id: string;
  courseId: string;
  title: string;
  videoUrl?: string;
  content: string;
  durationSeconds: number;
  isCompleted: boolean;
}
