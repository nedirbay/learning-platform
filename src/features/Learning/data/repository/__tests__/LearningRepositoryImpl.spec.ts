import "reflect-metadata";
import { describe, it, expect } from "vitest";
import { LearningRepositoryImpl } from "../LearningRepositoryImpl";

describe("LearningRepositoryImpl", () => {
  it("should return lessons", async () => {
    const repo = new LearningRepositoryImpl();
    const lessons = await repo.getLessonsByCourseId("1");
    
    expect(lessons.length).toBeGreaterThan(0);
    expect(lessons[0].courseId).toBe("1");
  });
});
