<template>
    <div class="flex flex-col md:flex-row h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <!-- Main Content (Video & Details) - Order 1 on Mobile, Order 2 on Desktop -->
        <div class="flex-1 flex flex-col order-1 md:order-2 overflow-y-auto md:overflow-hidden">
            <!-- Video Player Section -->
            <div
                class="bg-black aspect-video w-full flex-shrink-0 flex items-center justify-center relative group shadow-lg">
                <div v-if="!state.currentLesson"
                    class="text-white font-medium flex flex-col items-center animate-pulse">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mb-2 opacity-50" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Sapak saýlaň
                </div>
                <div v-else
                    class="text-white text-center w-full h-full flex flex-col items-center justify-center bg-gray-900">
                    <!-- Placeholder for Real Video Player -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mb-4 text-indigo-500" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 class="text-xl font-semibold mb-2">{{ state.currentLesson.title }}</h3>
                    <p class="text-xs text-gray-400 uppercase tracking-widest">Video Player (Mock)</p>
                </div>
            </div>

            <!-- Lesson Details -->
            <div class="p-6 md:p-8 flex-1 overflow-y-auto bg-white dark:bg-gray-800 border-b md:border-b-0">
                <div v-if="state.currentLesson" class="max-w-3xl mx-auto">
                    <div class="flex items-center justify-between mb-4">
                        <h1 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{{
                            state.currentLesson.title }}</h1>
                        <button class="text-indigo-600 hover:text-indigo-700 font-medium text-sm md:hidden"
                            @click="scrollToLessons">
                            Sapaklar ↓
                        </button>
                    </div>
                    <div class="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 leading-relaxed">
                        {{ state.currentLesson.content }}
                    </div>
                </div>
                <div v-else class="flex flex-col items-center justify-center h-full text-gray-500">
                    <p class="text-lg">Kursa başlamak üçin sapak saýlaň.</p>
                </div>
            </div>
        </div>

        <!-- Sidebar (Lesson List) - Order 2 on Mobile, Order 1 on Desktop -->
        <div id="lessons-sidebar"
            class="w-full md:w-96 bg-white dark:bg-gray-850 border-t md:border-t-0 md:border-l border-gray-200 dark:border-gray-700 overflow-y-auto order-2 md:order-2 flex flex-col h-[40vh] md:h-full z-10 shadow-xl md:shadow-none">
            <div
                class="p-5 border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 sticky top-0 z-10 backdrop-blur-md bg-opacity-90">
                <h2 class="font-bold text-lg text-gray-800 dark:text-white flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-indigo-600" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                    </svg>
                    Kurs Mazmuny
                </h2>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">{{ state.lessons.length }} sapak • {{
                    Math.round(state.lessons.filter(l => l.isCompleted).length / state.lessons.length * 100) || 0}}%
                    tamamlandy</p>
            </div>

            <div v-if="state.isLoading" class="p-8 flex justify-center">
                <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
            </div>

            <ul v-else class="flex-1 divide-y divide-gray-100 dark:divide-gray-700">
                <li v-for="(lesson, index) in state.lessons" :key="lesson.id" @click="vm.selectLesson(lesson)"
                    class="p-4 hover:bg-indigo-50 dark:hover:bg-gray-700 cursor-pointer transition-colors duration-200 flex items-start gap-3 group"
                    :class="{ 'bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-l-indigo-600': state.currentLesson?.id === lesson.id, 'border-l-4 border-l-transparent': state.currentLesson?.id !== lesson.id }">

                    <div class="relative flex-shrink-0">
                        <span
                            class="text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mt-0.5 transition-colors"
                            :class="state.currentLesson?.id === lesson.id ? 'bg-indigo-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 group-hover:bg-indigo-200'">
                            {{ index + 1 }}
                        </span>
                    </div>

                    <div class="flex-1 min-w-0">
                        <span
                            class="text-sm font-medium text-gray-800 dark:text-gray-200 block truncate group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors">
                            {{ lesson.title }}
                        </span>
                        <div class="flex items-center mt-1 space-x-2">
                            <span class="text-xs text-gray-400">10:05</span>
                            <span v-if="lesson.isCompleted"
                                class="text-xs font-semibold text-green-600 bg-green-100 dark:bg-green-900/30 px-1.5 py-0.5 rounded ml-auto">Tamamlandy</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useViewModel, useStateFlow } from '@/core/mvvm/useViewModel';
import { CoursePlayerViewModel } from '../viewmodel/CoursePlayerViewModel';
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';

const vm = useViewModel(CoursePlayerViewModel);
const state = useStateFlow(vm.uiState);
const route = useRoute();

onMounted(() => {
    const courseId = route.params.courseId as string;
    if (courseId) {
        vm.loadLessons(courseId);
    }
});

function scrollToLessons () {
    const el = document.getElementById('lessons-sidebar');
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
}
</script>
