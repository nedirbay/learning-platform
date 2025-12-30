export interface Post {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    publishedDate: Date;
    coverImage: string;
    tags?: string[];
    rating?: number; // Average rating (0-5)
    ratingCount?: number;
    commentCount?: number;
}
