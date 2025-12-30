export interface BlogComment {
    id: string;
    postId: string;
    userName: string;
    content: string;
    createdAt: Date;
    avatar?: string;
}
