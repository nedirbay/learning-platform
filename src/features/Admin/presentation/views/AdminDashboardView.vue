<template>
    <div class="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
        <!-- Header -->
        <div class="bg-white dark:bg-slate-800 shadow-sm border-b border-gray-200 dark:border-slate-700">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <div class="flex items-center gap-4">
                        <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
                    </div>
                    <div class="flex items-center gap-4">
                        <button @click="refresh"
                            class="px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors flex items-center gap-2">
                            <svg class="w-5 h-5" :class="{ 'animate-spin': state.isLoading }" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            Täzele
                        </button>
                        <button @click="logout"
                            class="px-4 py-2 bg-red-600 dark:bg-red-500 text-white rounded-lg font-medium hover:bg-red-700 dark:hover:bg-red-600 transition-colors">
                            Çykmak
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <!-- Loading State -->
            <div v-if="state.isLoading && !state.stats" class="flex items-center justify-center py-20">
                <div class="text-center">
                    <div
                        class="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 dark:border-blue-400 mx-auto mb-4">
                    </div>
                    <p class="text-gray-600 dark:text-gray-400">Maglumatlar ýüklenýär...</p>
                </div>
            </div>

            <!-- Error State -->
            <div v-else-if="state.error"
                class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6 text-center">
                <p class="text-red-600 dark:text-red-400 font-medium">{{ state.error }}</p>
                <button @click="refresh"
                    class="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                    Täzeden synanyş
                </button>
            </div>

            <!-- Dashboard Content -->
            <div v-else-if="state.stats" class="space-y-8">
                <!-- Stats Cards -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <!-- Total Courses -->
                    <div
                        class="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                        <div class="flex items-center justify-between mb-4">
                            <div class="p-3 bg-white/20 rounded-xl backdrop-blur">
                                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                        </div>
                        <p class="text-white/80 text-sm font-medium mb-1">Jemi Kurslar</p>
                        <p class="text-4xl font-bold">{{ state.stats.totalCourses }}</p>
                        <p class="text-white/70 text-xs mt-2">{{ state.stats.activeCourses }} aktiv</p>
                    </div>

                    <!-- Total Students -->
                    <div
                        class="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                        <div class="flex items-center justify-between mb-4">
                            <div class="p-3 bg-white/20 rounded-xl backdrop-blur">
                                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                        </div>
                        <p class="text-white/80 text-sm font-medium mb-1">Jemi Okuwçylar</p>
                        <p class="text-4xl font-bold">{{ state.stats.totalStudents.toLocaleString() }}</p>
                        <p class="text-white/70 text-xs mt-2">Aktiv ulanyjylar</p>
                    </div>

                    <!-- Total Revenue -->
                    <div
                        class="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                        <div class="flex items-center justify-between mb-4">
                            <div class="p-3 bg-white/20 rounded-xl backdrop-blur">
                                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                        <p class="text-white/80 text-sm font-medium mb-1">Jemi Girdeji</p>
                        <p class="text-4xl font-bold">{{ state.stats.totalRevenue.toLocaleString() }} TMT</p>
                        <p class="text-white/70 text-xs mt-2">Bu ýylda</p>
                    </div>

                    <!-- Recent Enrollments Count -->
                    <div
                        class="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                        <div class="flex items-center justify-between mb-4">
                            <div class="p-3 bg-white/20 rounded-xl backdrop-blur">
                                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                        </div>
                        <p class="text-white/80 text-sm font-medium mb-1">Soňky Ýazylmalar</p>
                        <p class="text-4xl font-bold">{{ state.stats.recentEnrollments.length }}</p>
                        <p class="text-white/70 text-xs mt-2">Täze giriş</p>
                    </div>
                </div>

                <!-- Charts and Lists Row -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <!-- Revenue Chart -->
                    <div
                        class="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-slate-700">
                        <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                            <span class="text-2xl">📊</span>
                            Aýlyk Girdeji
                        </h2>
                        <div class="space-y-3">
                            <div v-for="data in state.stats.revenueData.slice(-6)" :key="data.month"
                                class="flex items-center gap-4">
                                <span class="text-sm font-medium text-gray-600 dark:text-gray-400 w-12">{{
                                    data.month }}</span>
                                <div class="flex-1 bg-gray-200 dark:bg-slate-700 rounded-full h-8 overflow-hidden">
                                    <div class="bg-gradient-to-r from-blue-500 to-purple-500 h-full flex items-center justify-end pr-3 text-white text-xs font-bold transition-all duration-500"
                                        :style="{ width: `${(data.revenue / 105000) * 100}%` }">
                                        {{ data.revenue.toLocaleString() }} TMT
                                    </div>
                                </div>
                                <span class="text-xs text-gray-500 dark:text-gray-400 w-16 text-right">{{
                                    data.enrollments }} okuwçy</span>
                            </div>
                        </div>
                    </div>

                    <!-- Popular Courses -->
                    <div
                        class="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-slate-700">
                        <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                            <span class="text-2xl">🔥</span>
                            Meşhur Kurslar
                        </h2>
                        <div class="space-y-4">
                            <div v-for="(course, index) in state.stats.popularCourses" :key="course.id"
                                class="flex items-center gap-4 p-4 bg-gray-50 dark:bg-slate-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors">
                                <div
                                    class="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
                                    {{ index + 1 }}
                                </div>
                                <div class="flex-1 min-w-0">
                                    <h3 class="font-semibold text-gray-900 dark:text-white text-sm truncate">{{
                                        course.title }}</h3>
                                    <div class="flex items-center gap-3 mt-1">
                                        <span class="text-xs text-gray-500 dark:text-gray-400">👥 {{
                                            course.enrollments }}</span>
                                        <span class="text-xs text-yellow-500">⭐ {{ course.rating }}</span>
                                        <span class="text-xs text-green-600 dark:text-green-400 font-medium">{{
                                            course.revenue.toLocaleString() }} TMT</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Recent Enrollments Table -->
                <div
                    class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-200 dark:border-slate-700 overflow-hidden">
                    <div class="p-6 border-b border-gray-200 dark:border-slate-700">
                        <h2 class="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                            <span class="text-2xl">📋</span>
                            Soňky Ýazylmalar
                        </h2>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full">
                            <thead class="bg-gray-50 dark:bg-slate-700/50">
                                <tr>
                                    <th
                                        class="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                                        Okuwçy</th>
                                    <th
                                        class="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                                        Kurs</th>
                                    <th
                                        class="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                                        Wagt</th>
                                    <th
                                        class="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                                        Mukdar</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200 dark:divide-slate-700">
                                <tr v-for="enrollment in state.stats.recentEnrollments" :key="enrollment.id"
                                    class="hover:bg-gray-50 dark:hover:bg-slate-700/30 transition-colors">
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="flex items-center gap-3">
                                            <div
                                                class="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                                                {{ enrollment.studentName.charAt(0) }}
                                            </div>
                                            <span class="font-medium text-gray-900 dark:text-white">{{
                                                enrollment.studentName }}</span>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">{{
                                        enrollment.courseName }}</td>
                                    <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{{
                                        formatDate(enrollment.enrolledAt) }}</td>
                                    <td class="px-6 py-4 text-sm font-semibold text-green-600 dark:text-green-400">{{
                                        enrollment.amount }} TMT</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useViewModel, useStateFlow } from '@/core/mvvm/useViewModel';
import { AdminDashboardViewModel } from '../viewmodel/AdminDashboardViewModel';
import { useRouter } from 'vue-router';

const vm = useViewModel(AdminDashboardViewModel);
const state = useStateFlow(vm.uiState);
const router = useRouter();

const refresh = async () => {
    await vm.refresh();
};

const logout = () => {
    localStorage.removeItem('user');
    router.push('/login');
};

const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 60) return `${diffMins} minut öň`;
    if (diffHours < 24) return `${diffHours} sagat öň`;
    if (diffDays < 7) return `${diffDays} gün öň`;

    return date.toLocaleDateString('tk-TM', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
};
</script>
