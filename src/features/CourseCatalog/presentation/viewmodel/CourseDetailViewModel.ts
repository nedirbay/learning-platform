import { injectable, inject } from "tsyringe";
import { type ViewModel } from "@/core/mvvm/useViewModel";
import { MutableStateFlow } from "@/core/flow";
import { GetCourseDetailUseCase } from "../../domain/usecase/GetCourseDetailUseCase";
import { type Course } from "../../domain/entity/Course";

export interface CourseDetailState {
  isLoading: boolean;
  course: Course | null;
  error: string | null;
}

@injectable()
export class CourseDetailViewModel implements ViewModel {
  uiState = new MutableStateFlow<CourseDetailState>({
    isLoading: false,
    course: null,
    error: null,
  });

  constructor(
    @inject(GetCourseDetailUseCase) private getCourseDetailUseCase: GetCourseDetailUseCase
  ) {}

  init() {}

  async loadCourse(id: string) {
    this.uiState.update({ isLoading: true, error: null });
    try {
      const course = await this.getCourseDetailUseCase.execute(id);
      if (course) {
        this.uiState.update({ isLoading: false, course });
      } else {
        this.uiState.update({ isLoading: false, error: "Kurs tapylmady" });
      }
    } catch (error) {
      this.uiState.update({ isLoading: false, error: "Ýalňyşlyk ýüze çykdy" });
    }
  }
}
