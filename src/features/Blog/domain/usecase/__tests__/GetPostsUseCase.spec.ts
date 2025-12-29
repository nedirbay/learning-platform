import "reflect-metadata";
import { describe, it, expect, vi } from "vitest";
import { GetPostsUseCase } from "../GetPostsUseCase";
import type { BlogRepository } from "../../repository/BlogRepository";

describe("GetPostsUseCase", () => {
  it("should return posts", async () => {
    const mockRepo: BlogRepository = {
        getPosts: vi.fn()
    };
    
    const mockPosts = [{ id: "1", title: "Test", excerpt: "", content: "", author: "", publishedDate: new Date(), coverImage: "" }];
    (mockRepo.getPosts as any).mockResolvedValue(mockPosts);

    const useCase = new GetPostsUseCase(mockRepo);
    const result = await useCase.execute();

    expect(mockRepo.getPosts).toHaveBeenCalled();
    expect(result).toHaveLength(1);
  });
});
