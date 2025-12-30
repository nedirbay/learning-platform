import { injectable } from "tsyringe";
import type { BlogRepository } from "../../domain/repository/BlogRepository";
import { type Post } from "../../domain/entity/Post";
import { type BlogComment } from "../../domain/entity/Comment";

@injectable()
export class BlogRepositoryImpl implements BlogRepository {
  private posts: Post[] = [
    {
      id: "1",
      title: "Vue 3 Composition API Guide",
      excerpt: "Master the power of Composition API with this comprehensive guide.",
      content: `The Composition API is a set of APIs that allows us to author Vue components using imported functions instead of declaring options. It is an additive feature setup() is the entry point.
      
      Key benefits:
      - Better Logic Reuse
      - More Flexible Code Organization
      - Better Type Inference
      `,
      author: "Alex Doe",
      publishedDate: new Date("2024-01-15"),
      coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600",
      tags: ["Vue", "Frontend", "JavaScript"],
    },
    {
      id: "2",
      title: "Understanding TypeScript Generics",
      excerpt: "Deep dive into generics to write reusable and type-safe code.",
      content: "Generics provide a way to make components work with any data type and not restrict to one data type. This allows users to consume these components and use their own types.",
      author: "Sarah Smith",
      publishedDate: new Date("2024-01-20"),
      coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600",
      tags: ["TypeScript", "Coding"],
    },
    {
      id: "3",
      title: "Modern CSS Techniques",
      excerpt: "Explore the latest CSS features like Grid, Flexbox, and Subgrid.",
      content: "CSS has evolved significantly. Flexbox and Grid have revolutionized layout design. New features like Container Queries and :has() selector are opening new possibilities.",
      author: "John Brown",
      publishedDate: new Date("2024-02-01"),
      coverImage: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&q=80&w=600",
      tags: ["CSS", "Design"],
    },
     {
      id: "4",
      title: "State Management with Pinia",
      excerpt: "Why Pinia is the future of state management in Vue applications.",
      content: "Pinia is the intuitive, type-safe, and flexible Store for Vue. It gives you the power of Flux-like state management without the complexity.",
      author: "Emma Wilson",
      publishedDate: new Date("2024-02-10"),
      coverImage: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=600",
      tags: ["Vue", "Pinia", "State Management"],
    },
  ];

  async getPosts(): Promise<Post[]> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return this.posts;
  }

  async getPostById(id: string): Promise<Post | undefined> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return this.posts.find(post => post.id === id);
  }

  private comments: Record<string, BlogComment[]> = {
    "1": [
      {
        id: "c1",
        postId: "1",
        userName: "John Doe",
        content: "Great guide! Really helped me understand Composition API.",
        createdAt: new Date("2024-01-16"),
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d"
      },
      {
        id: "c2",
        postId: "1",
        userName: "Jane Smith",
        content: "Could you add more examples about reusability?",
        createdAt: new Date("2024-01-17"),
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d"
      }
    ]
  };

  async getComments(postId: string): Promise<BlogComment[]> {
     await new Promise(resolve => setTimeout(resolve, 300));
     return this.comments[postId] || [];
  }

  async addComment(postId: string, content: string, userName: string): Promise<BlogComment> {
    await new Promise(resolve => setTimeout(resolve, 300));
    const newComment: BlogComment = {
      id: Math.random().toString(36).substring(7),
      postId,
      userName,
      content,
      createdAt: new Date(),
      avatar: `https://i.pravatar.cc/150?u=${Math.random()}`
    };
    if (!this.comments[postId]) {
      this.comments[postId] = [];
    }
    this.comments[postId].unshift(newComment);
    return newComment;
  }

  async ratePost(postId: string, rating: number): Promise<void> {
     await new Promise(resolve => setTimeout(resolve, 300));
     const post = this.posts.find(p => p.id === postId);
     if (post) {
       // Simple mock logic for average rating update
       const currentCount = post.ratingCount || 10;
       const currentRating = post.rating || 4.5;
       const newCount = currentCount + 1;
       const newRating = ((currentRating * currentCount) + rating) / newCount;
       
       post.rating = parseFloat(newRating.toFixed(1));
       post.ratingCount = newCount;
     }
  }
}
