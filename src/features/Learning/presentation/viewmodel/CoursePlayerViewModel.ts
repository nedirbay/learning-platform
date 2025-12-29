import { injectable, inject } from "tsyringe";
import { type ViewModel } from "@/core/mvvm/useViewModel";
import { MutableStateFlow } from "@/core/flow";
import { GetLessonsUseCase } from "../../domain/usecase/GetLessonsUseCase";
import { type Lesson } from "../../domain/entity/Lesson";

export interface PlayerState {
  isLoading: boolean;
  lessons: Lesson[];
  currentLesson: Lesson | null;
}

@injectable()
export class CoursePlayerViewModel implements ViewModel {
  uiState = new MutableStateFlow<PlayerState>({
    isLoading: false,
    lessons: [],
    currentLesson: null,
  });

  constructor(private getLessonsUseCase: GetLessonsUseCase) {}

  init() {}

  async loadLessons(courseId: string) {
    this.uiState.update({ isLoading: true });
    try {
      const lessons = await this.getLessonsUseCase.execute(courseId);
      this.uiState.update({ 
        isLoading: false, 
        lessons,
        currentLesson: lessons.length > 0 ? lessons[0] : null 
      });
    } catch (e) {
      this.uiState.update({ isLoading: false });
    }
  }

  selectLesson(lesson: Lesson) {
    this.uiState.update({ currentLesson: lesson });
  }
}
