import { injectable, inject } from "tsyringe";
import { type ViewModel } from "@/core/mvvm/useViewModel";
import { MutableStateFlow } from "@/core/flow";
import { GetPostsUseCase } from "../../domain/usecase/GetPostsUseCase";
import { type Post } from "../../domain/entity/Post";

export interface BlogState {
  isLoading: boolean;
  posts: Post[];
}

@injectable()
export class BlogViewModel implements ViewModel {
  uiState = new MutableStateFlow<BlogState>({
    isLoading: false,
    posts: [],
  });

  constructor(@inject(GetPostsUseCase) private getPostsUseCase: GetPostsUseCase) {}

  init() {
    this.loadPosts();
  }

  async loadPosts() {
    this.uiState.update({ isLoading: true });
    const posts = await this.getPostsUseCase.execute();
    this.uiState.update({ isLoading: false, posts });
  }
}
