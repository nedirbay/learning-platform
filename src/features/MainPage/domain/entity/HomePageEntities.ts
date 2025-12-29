export interface HomeStat {
  label: string;
  value: string;
}

export interface HomeCategory {
  name: string;
  icon: string;
  count: number;
}

export interface HomeFeaturedCourse {
  title: string;
  category: string;
  price: string;
  rating: number;
  image: string;
  instructor: string;
  instructorImage: string;
  role: string;
  lessons: number;
  duration: string;
}

export interface HomePageData {
    stats: HomeStat[];
    categories: HomeCategory[];
    featuredCourses: HomeFeaturedCourse[];
}
