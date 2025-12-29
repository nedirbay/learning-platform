import "reflect-metadata";
import { describe, it, expect } from "vitest";
import { BlogRepositoryImpl } from "../BlogRepositoryImpl";

describe("BlogRepositoryImpl", () => {
  it("should return mock posts", async () => {
    const repo = new BlogRepositoryImpl();
    const posts = await repo.getPosts();
    
    expect(posts.length).toBeGreaterThan(0);
    expect(posts[0].title).toBeDefined();
  });
});
