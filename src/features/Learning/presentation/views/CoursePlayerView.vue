<template>
    <div class="flex h-screen bg-gray-100">
        <!-- Sidebar -->
        <div class="w-80 bg-white border-r overflow-y-auto hidden md:block">
            <div class="p-4 border-b">
                <h2 class="font-bold">Kurs Mazmuny</h2>
            </div>
            <div v-if="state.isLoading" class="p-4">Ýüklenýär...</div>
            <ul v-else>
                <li v-for="(lesson, index) in state.lessons" :key="lesson.id" @click="vm.selectLesson(lesson)"
                    class="p-4 hover:bg-gray-50 cursor-pointer border-b flex items-start gap-3"
                    :class="{ 'bg-blue-50': state.currentLesson?.id === lesson.id }">
                    <span
                        class="text-xs bg-gray-200 text-gray-700 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">{{
                        index + 1 }}</span>
                    <span class="text-sm">{{ lesson.title }}</span>
                    <span v-if="lesson.isCompleted" class="float-right text-green-500">✓</span>
                </li>
            </ul>
        </div>

        <!-- Main Content -->
        <div class="flex-1 flex flex-col">
            <div class="bg-black aspect-video w-full flex items-center justify-center">
                <div v-if="!state.currentLesson" class="text-white">Sapak saýlaň</div>
                <div v-else class="text-white text-center">
                    <h3 class="text-xl">{{ state.currentLesson.title }}</h3>
                    <p>Video Player (Mock)</p>
                </div>
            </div>
            <div class="p-8" v-if="state.currentLesson">
                <h1 class="text-2xl font-bold mb-4">{{ state.currentLesson.title }}</h1>
                <p class="text-gray-700">{{ state.currentLesson.content }}</p>
            </div>
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
</script>
