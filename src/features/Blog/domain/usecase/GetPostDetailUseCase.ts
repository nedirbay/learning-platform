import { injectable, inject } from "tsyringe";
import type { BlogRepository } from "../repository/BlogRepository";
import { type Post } from "../entity/Post";

@injectable()
export class GetPostDetailUseCase {
  constructor(@inject("BlogRepository") private repository: BlogRepository) {}

  async execute(id: string): Promise<Post | undefined> {
    return this.repository.getPostById(id);
  }
}
