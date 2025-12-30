import { injectable, inject } from "tsyringe";
import type { BlogRepository } from "../repository/BlogRepository";
import { type BlogComment } from "../entity/Comment";

@injectable()
export class GetCommentsUseCase {
  constructor(@inject("BlogRepository") private repository: BlogRepository) {}

  async execute(postId: string): Promise<BlogComment[]> {
    return this.repository.getComments(postId);
  }
}
