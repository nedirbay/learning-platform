<template>
    <div class="min-h-screen bg-gray-50 dark:bg-slate-900 py-12 transition-colors">
        <div class="container mx-auto px-4">
            <!-- Welcome Section -->
            <div class="mb-10">
                <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Hoş geldiňiz, {{ user?.name || 'Aman'
                    }}! 👋</h1>
                <p class="text-gray-600 dark:text-gray-400">Şu gün öwrenmäge dowam edeliň. Siziň ösüşiňiz örän gowy!</p>
            </div>

            <!-- Stats -->
            <div class="mb-12">
                <DashboardStats />
            </div>

            <!-- Current Courses -->
            <div class="mb-12">
                <div class="flex items-center justify-between mb-6">
                    <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Dowam edýän kurslarym</h2>
                    <router-link to="/courses"
                        class="text-blue-600 dark:text-blue-400 font-medium hover:underline">Ählisini gör</router-link>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    <CourseProgressCard v-for="course in activeCourses" :key="course.id" :course="course" />
                    <!-- Add New Course Card -->
                    <router-link to="/courses"
                        class="bg-gray-100 dark:bg-slate-800 border-2 border-dashed border-gray-300 dark:border-slate-600 rounded-2xl flex flex-col items-center justify-center p-6 text-center hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-500 dark:hover:text-blue-400 transition-all group h-full min-h-[300px]">
                        <div
                            class="w-16 h-16 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                            <svg class="w-8 h-8 text-gray-400 dark:text-gray-500 group-hover:text-blue-500 transition-colors"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                            </svg>
                        </div>
                        <h3 class="font-bold text-gray-700 dark:text-gray-300">Täze kurs goş</h3>
                    </router-link>
                </div>
            </div>

            <!-- Recommended (Optional) -->
            <div>
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Siziň üçin maslahatlar</h2>
                <!-- Reuse Course Cards or similar here -->
                <p class="text-gray-500 dark:text-gray-400">Ýakynda...</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import DashboardStats from '../components/DashboardStats.vue';
import CourseProgressCard from '../components/CourseProgressCard.vue';

const user = ref<any>(null);

const activeCourses = ref([
    {
        id: '1',
        title: 'Baştan Başlaýanlar Üçin Python',
        thumbnail: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600&auto=format&fit=crop&q=80',
        progress: 35,
        totalLessons: 24,
        completedLessons: 8,
        category: 'Programirleme'
    },
    {
        id: '2',
        title: 'UI/UX Dizajn Esaslary',
        thumbnail: 'https://images.unsplash.com/photo-1586717791821-3f44a5638d4b?w=600&auto=format&fit=crop&q=80',
        progress: 72,
        totalLessons: 18,
        completedLessons: 13,
        category: 'Dizajn'
    }
]);

onMounted(() => {
    const userStr = localStorage.getItem('user');
    if (userStr) {
        user.value = JSON.parse(userStr);
    }
});
</script>
