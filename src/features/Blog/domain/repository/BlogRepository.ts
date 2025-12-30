import { type Post } from "../entity/Post";
import { type BlogComment } from "../entity/Comment";

export interface BlogRepository {
  getPosts(): Promise<Post[]>;
  getPostById(id: string): Promise<Post | undefined>;
  getComments(postId: string): Promise<BlogComment[]>;
  addComment(postId: string, comment: string, userName: string): Promise<BlogComment>;
  ratePost(postId: string, rating: number): Promise<void>;
}
