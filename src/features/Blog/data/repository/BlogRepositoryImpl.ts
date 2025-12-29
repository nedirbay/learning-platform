import { injectable } from "tsyringe";
import type { BlogRepository } from "../../domain/repository/BlogRepository";
import { type Post } from "../../domain/entity/Post";

@injectable()
export class BlogRepositoryImpl implements BlogRepository {
  async getPosts(): Promise<Post[]> {
    return [
      {
        id: "1",
        title: "Vue 3 Tips",
        excerpt: "Best practices...",
        content: "Full content here",
        author: "Admin",
        publishedDate: new Date(),
        coverImage: "...",
      },
    ];
  }
}
