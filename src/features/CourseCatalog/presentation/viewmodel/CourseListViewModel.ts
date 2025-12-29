import { injectable, inject } from "tsyringe";
import { type ViewModel } from "@/core/mvvm/useViewModel";
import { MutableStateFlow } from "@/core/flow";
import { GetCoursesUseCase } from "../../domain/usecase/GetCoursesUseCase";
import { type Course } from "../../domain/entity/Course";

export interface CourseListState {
  isLoading: boolean;
  courses: Course[];
  error: string | null;
}

@injectable()
export class CourseListViewModel implements ViewModel {
  uiState = new MutableStateFlow<CourseListState>({
    isLoading: false,
    courses: [],
    error: null,
  });

  constructor(@inject(GetCoursesUseCase) private getCoursesUseCase: GetCoursesUseCase) {}

  init() {
    this.fetchCourses();
  }

  async fetchCourses() {
    this.uiState.update({ isLoading: true, error: null });
    try {
      const courses = await this.getCoursesUseCase.execute();
      this.uiState.update({ isLoading: false, courses });
    } catch (error) {
      this.uiState.update({ isLoading: false, error: "Kurslary ýükläp bolmady" });
    }
  }
}
