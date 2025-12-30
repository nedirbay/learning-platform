import { injectable, inject } from "tsyringe";
import type { BlogRepository } from "../repository/BlogRepository";
import { type BlogComment } from "../entity/Comment";

@injectable()
export class AddCommentUseCase {
  constructor(@inject("BlogRepository") private repository: BlogRepository) {}

  async execute(postId: string, content: string, userName: string): Promise<BlogComment> {
    return this.repository.addComment(postId, content, userName);
  }
}
