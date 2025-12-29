import { type Post } from "../entity/Post";

export interface BlogRepository {
  getPosts(): Promise<Post[]>;
}
