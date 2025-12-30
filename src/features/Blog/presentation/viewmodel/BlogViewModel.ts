import { injectable, inject } from "tsyringe";
import { type ViewModel } from "@/core/mvvm/useViewModel";
import { MutableStateFlow } from "@/core/flow";
import { GetPostsUseCase } from "../../domain/usecase/GetPostsUseCase";
import { GetPostDetailUseCase } from "../../domain/usecase/GetPostDetailUseCase";
import { type Post } from "../../domain/entity/Post";
import { type BlogComment } from "../../domain/entity/Comment";
import { GetCommentsUseCase } from "../../domain/usecase/GetCommentsUseCase";
import { AddCommentUseCase } from "../../domain/usecase/AddCommentUseCase";
import { RatePostUseCase } from "../../domain/usecase/RatePostUseCase";

export interface BlogState {
  isLoading: boolean;
  posts: Post[];
  selectedPost: Post | null;
  comments: BlogComment[];
  isSubmittingComment: boolean;
}

@injectable()
export class BlogViewModel implements ViewModel {
  uiState = new MutableStateFlow<BlogState>({
    isLoading: false,
    posts: [],
    selectedPost: null,
    comments: [],
    isSubmittingComment: false,
  });

  constructor(
      @inject(GetPostsUseCase) private getPostsUseCase: GetPostsUseCase,
      @inject(GetPostDetailUseCase) private getPostDetailUseCase: GetPostDetailUseCase,
      @inject(GetCommentsUseCase) private getCommentsUseCase: GetCommentsUseCase,
      @inject(AddCommentUseCase) private addCommentUseCase: AddCommentUseCase,
      @inject(RatePostUseCase) private ratePostUseCase: RatePostUseCase
  ) {}

  init() {
    this.loadPosts();
  }

  async loadPosts() {
    this.uiState.update({ isLoading: true });
    const posts = await this.getPostsUseCase.execute();
    this.uiState.update({ isLoading: false, posts });
  }

  async loadPostDetail(id: string) {
    this.uiState.update({ isLoading: true, selectedPost: null, comments: [] });
    const post = await this.getPostDetailUseCase.execute(id);
    this.uiState.update({ isLoading: false, selectedPost: post || null });
    
    if (post) {
      await this.loadComments(id);
    }
  }

  async loadComments(postId: string) {
      const comments = await this.getCommentsUseCase.execute(postId);
      this.uiState.update({ comments });
  }

  async addComment(postId: string, content: string, userName: string) {
      this.uiState.update({ isSubmittingComment: true });
      try {
          const newComment = await this.addCommentUseCase.execute(postId, content, userName);
          const currentComments = this.uiState.value.comments;
          this.uiState.update({ comments: [newComment, ...currentComments], isSubmittingComment: false });
      } catch (e) {
          console.error(e);
          this.uiState.update({ isSubmittingComment: false });
      }
  }

  async ratePost(postId: string, rating: number) {
      await this.ratePostUseCase.execute(postId, rating);
      // Refresh post detail to show new rating
      const post = await this.getPostDetailUseCase.execute(postId);
      if (post && this.uiState.value.selectedPost?.id === postId) {
          this.uiState.update({ selectedPost: post });
      }
  }
}
