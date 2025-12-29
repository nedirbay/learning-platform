<template>
    <div
        class="bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm p-4 hover:shadow-md transition-all group flex flex-col h-full">
        <!-- Image -->
        <div class="relative h-40 rounded-xl overflow-hidden mb-4">
            <img :src="course.thumbnail"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
            <div
                class="absolute top-2 right-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-2 py-1 rounded-lg text-xs font-bold shadow-sm">
                {{ course.category }}
            </div>
        </div>

        <div class="flex-1 flex flex-col">
            <h3 class="font-bold text-lg text-gray-900 dark:text-white mb-2 line-clamp-2">{{ course.title }}</h3>

            <div class="mt-auto pt-4">
                <div class="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                    <span>{{ course.progress }}% Tamamlandy</span>
                    <span>{{ course.completedLessons }}/{{ course.totalLessons }} Sapak</span>
                </div>
                <!-- Progress Bar -->
                <div class="w-full bg-gray-100 dark:bg-slate-700 rounded-full h-2 mb-4 overflow-hidden">
                    <div class="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                        :style="{ width: `${course.progress}%` }"></div>
                </div>

                <button
                    class="w-full py-2.5 bg-blue-50 hover:bg-blue-100 dark:bg-slate-700 dark:hover:bg-slate-600 text-blue-600 dark:text-blue-400 font-bold rounded-xl transition-colors text-sm">
                    Dowam et
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    course: {
        id: string;
        title: string;
        thumbnail: string;
        progress: number;
        totalLessons: number;
        completedLessons: number;
        category: string;
    }
}>();
</script>
