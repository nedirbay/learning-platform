import { injectable } from "tsyringe";
import type { CourseRepository } from "../../domain/repository/CourseRepository";
import { type Course } from "../../domain/entity/Course";

@injectable()
export class CourseRepositoryImpl implements CourseRepository {
  async getCourses(): Promise<Course[]> {
    // Mock data
    return [
      {
        id: "1",
        title: "Vue 3 Masterclass",
        description: "Learn Vue 3 from scratch",
        instructor: "John Doe",
        price: 100,
        rating: 4.8,
        thumbnailUrl: "https://via.placeholder.com/300",
        categories: ["Programming", "Web"],
      },
      {
        id: "2",
        title: "TypeScript Essentials",
        description: "Deep dive into TS",
        instructor: "Jane Smith",
        price: 80,
        rating: 4.9,
        thumbnailUrl: "https://via.placeholder.com/300",
        categories: ["Programming"],
      },
    ];
  }

  async getCourseById(id: string): Promise<Course | null> {
    return null;
  }
}
