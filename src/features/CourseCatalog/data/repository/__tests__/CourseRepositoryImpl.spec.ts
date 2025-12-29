import "reflect-metadata";
import { describe, it, expect } from "vitest";
import { CourseRepositoryImpl } from "../CourseRepositoryImpl";

describe("CourseRepositoryImpl", () => {
  it("should return mock courses", async () => {
    const repo = new CourseRepositoryImpl();
    const courses = await repo.getCourses();
    
    expect(courses.length).toBeGreaterThan(0);
    expect(courses[0].title).toBeDefined();
  });
});
