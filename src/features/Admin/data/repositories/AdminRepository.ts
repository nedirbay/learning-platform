import type { IAdminRepository } from '../../domain/repositories/IAdminRepository';
import type { DashboardStats, EnrollmentItem, PopularCourse, RevenueData } from '../../domain/models/DashboardStats';

export class AdminRepository implements IAdminRepository {
    async getDashboardStats(): Promise<DashboardStats> {
        // Mock data - bu ýerde API çagyryşy bolmaly
        await new Promise(resolve => setTimeout(resolve, 500));

        const recentEnrollments: EnrollmentItem[] = [
            {
                id: '1',
                studentName: 'Ahmet Gurbanov',
                courseName: 'Vue 3 Masterclass',
                enrolledAt: '2026-01-02T10:30:00',
                amount: 250
            },
            {
                id: '2',
                studentName: 'Merjen Atayeva',
                courseName: 'React ile Web Development',
                enrolledAt: '2026-01-02T09:15:00',
                amount: 320
            },
            {
                id: '3',
                studentName: 'Dovlet Myradov',
                courseName: 'TypeScript Essentials',
                enrolledAt: '2026-01-01T18:45:00',
                amount: 180
            },
            {
                id: '4',
                studentName: 'Guncha Annayeva',
                courseName: 'UI/UX Design Fundamentals',
                enrolledAt: '2026-01-01T14:20:00',
                amount: 200
            },
            {
                id: '5',
                studentName: 'Batyr Orazov',
                courseName: 'Node.js Backend Development',
                enrolledAt: '2026-01-01T11:10:00',
                amount: 300
            }
        ];

        const popularCourses: PopularCourse[] = [
            {
                id: '1',
                title: 'Vue 3 Masterclass',
                enrollments: 1250,
                rating: 4.8,
                revenue: 312500
            },
            {
                id: '2',
                title: 'React ile Web Development',
                enrollments: 980,
                rating: 4.7,
                revenue: 313600
            },
            {
                id: '3',
                title: 'TypeScript Essentials',
                enrollments: 850,
                rating: 4.6,
                revenue: 153000
            },
            {
                id: '4',
                title: 'UI/UX Design Fundamentals',
                enrollments: 720,
                rating: 4.9,
                revenue: 144000
            }
        ];

        const revenueData: RevenueData[] = [
            { month: 'Ýan', revenue: 45000, enrollments: 180 },
            { month: 'Few', revenue: 52000, enrollments: 210 },
            { month: 'Mar', revenue: 48000, enrollments: 195 },
            { month: 'Apr', revenue: 61000, enrollments: 245 },
            { month: 'Maý', revenue: 58000, enrollments: 230 },
            { month: 'Iýun', revenue: 72000, enrollments: 290 },
            { month: 'Iýul', revenue: 68000, enrollments: 275 },
            { month: 'Awg', revenue: 75000, enrollments: 300 },
            { month: 'Sen', revenue: 82000, enrollments: 330 },
            { month: 'Okt', revenue: 88000, enrollments: 355 },
            { month: 'Noý', revenue: 95000, enrollments: 380 },
            { month: 'Dek', revenue: 105000, enrollments: 420 }
        ];

        return {
            totalCourses: 156,
            totalStudents: 3450,
            totalRevenue: 849000,
            activeCourses: 142,
            recentEnrollments,
            popularCourses,
            revenueData
        };
    }
}
