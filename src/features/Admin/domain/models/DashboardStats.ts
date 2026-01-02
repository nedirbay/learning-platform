export interface DashboardStats {
    totalCourses: number;
    totalStudents: number;
    totalRevenue: number;
    activeCourses: number;
    recentEnrollments: EnrollmentItem[];
    popularCourses: PopularCourse[];
    revenueData: RevenueData[];
}

export interface EnrollmentItem {
    id: string;
    studentName: string;
    courseName: string;
    enrolledAt: string;
    amount: number;
}

export interface PopularCourse {
    id: string;
    title: string;
    enrollments: number;
    rating: number;
    revenue: number;
}

export interface RevenueData {
    month: string;
    revenue: number;
    enrollments: number;
}
