import "reflect-metadata";
import { describe, it, expect, vi } from "vitest";
import { GetCoursesUseCase } from "../GetCoursesUseCase";
import type { CourseRepository } from "../../repository/CourseRepository";

describe("GetCoursesUseCase", () => {
  it("should return list of courses", async () => {
    const mockRepo: CourseRepository = {
      getCourses: vi.fn(),
      getCourseById: vi.fn(),
    };

    const mockCourses = [{ id: "1", title: "Course 1", description: "desc", instructor: "inst", price: 10, rating: 5, thumbnailUrl: "url", categories: [] }];
    (mockRepo.getCourses as any).mockResolvedValue(mockCourses);

    const useCase = new GetCoursesUseCase(mockRepo);
    const result = await useCase.execute();

    expect(mockRepo.getCourses).toHaveBeenCalled();
    expect(result).toHaveLength(1);
    expect(result[0].title).toBe("Course 1");
  });
});
