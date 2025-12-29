import "reflect-metadata";
import { describe, it, expect, vi } from "vitest";
import { GetLessonsUseCase } from "../GetLessonsUseCase";
import type { LearningRepository } from "../../repository/LearningRepository";

describe("GetLessonsUseCase", () => {
  it("should return lessons for a course", async () => {
    const mockRepo: LearningRepository = {
        getLessonsByCourseId: vi.fn(),
        markLessonAsComplete: vi.fn()
    };
    
    const mockLessons = [{ id: "1", courseId: "1", title: "Intro", content: "", durationSeconds: 60, isCompleted: false }];
    (mockRepo.getLessonsByCourseId as any).mockResolvedValue(mockLessons);

    const useCase = new GetLessonsUseCase(mockRepo);
    const result = await useCase.execute("1");

    expect(mockRepo.getLessonsByCourseId).toHaveBeenCalledWith("1");
    expect(result).toHaveLength(1);
  });
});
