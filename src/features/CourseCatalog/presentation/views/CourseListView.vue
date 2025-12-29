<template>
    <div class="container mx-auto px-4 py-8">
        <h1 class="text-3xl font-bold mb-6">Kurslar Katalogy</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Course Cards will go here -->
            <div v-if="state.isLoading" class="col-span-3 text-center py-8">Ýüklenýär...</div>
            <div v-else-if="state.error" class="col-span-3 text-center py-8 text-red-600">{{ state.error }}</div>
            <template v-else>
                <div v-for="course in state.courses" :key="course.id"
                    class="bg-white rounded-lg shadow-md p-4 flex flex-col">
                    <div class="h-40 bg-gray-200 rounded mb-4 overflow-hidden">
                        <img v-if="course.thumbnailUrl" :src="course.thumbnailUrl" class="w-full h-full object-cover" />
                    </div>
                    <h3 class="font-bold text-lg mb-2">{{ course.title }}</h3>
                    <p class="text-gray-600 mb-4 flex-grow">{{ course.description }}</p>
                    <div class="flex justify-between items-center mt-auto">
                        <span class="font-bold text-indigo-600">{{ course.price }} TMT</span>
                        <button @click="handleCourseClick(course.id)"
                            class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Giňişleýin</button>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useViewModel, useStateFlow } from '@/core/mvvm/useViewModel';
import { CourseListViewModel } from '../viewmodel/CourseListViewModel';

import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';

const vm = useViewModel(CourseListViewModel);
const state = useStateFlow(vm.uiState);
const router = useRouter();
const isLoggedIn = ref(false);

onMounted(() => {
    isLoggedIn.value = !!localStorage.getItem('user');
});

const handleCourseClick = (courseId: string) => {
    router.push(`/courses/${courseId}`);
};
</script>
