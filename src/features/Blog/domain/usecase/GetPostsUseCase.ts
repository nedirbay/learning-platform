import { injectable, inject } from "tsyringe";
import type { BlogRepository } from "../repository/BlogRepository";
import { type Post } from "../entity/Post";

@injectable()
export class GetPostsUseCase {
  constructor(@inject("BlogRepository") private repository: BlogRepository) {}

  async execute(): Promise<Post[]> {
    return this.repository.getPosts();
  }
}
