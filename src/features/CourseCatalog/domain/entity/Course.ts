export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  price: number;
  rating: number;
  thumbnailUrl: string;
  categories: string[];
  duration?: string; // e.g., "5 hours", "3 weeks"
  enrolledStudents?: number;
  level?: 'Başlangyç' | 'Orta' | 'Ösen'; // Beginner, Intermediate, Advanced
  language?: string;
  lastUpdated?: string;
}
