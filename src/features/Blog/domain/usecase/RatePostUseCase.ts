import { injectable, inject } from "tsyringe";
import type { BlogRepository } from "../repository/BlogRepository";

@injectable()
export class RatePostUseCase {
  constructor(@inject("BlogRepository") private repository: BlogRepository) {}

  async execute(postId: string, rating: number): Promise<void> {
    return this.repository.ratePost(postId, rating);
  }
}
