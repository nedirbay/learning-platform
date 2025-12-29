<template>
    <div class="container mx-auto px-4 py-8">
        <h1 class="text-2xl font-bold mb-6">Meniň Kurslarym</h1>
        <div class="grid grid-cols-1 gap-4">
            <!-- My Course Item -->
            <div v-if="state.isLoading" class="text-center">Ýüklenýär...</div>
            <div v-else-if="state.data" class="grid grid-cols-1 gap-4">
                <div v-if="state.data.enrolledCourses.length === 0" class="text-gray-500">Hazirche kursyňyz ýok.</div>
                <div v-for="course in state.data.enrolledCourses" :key="course.id"
                    class="bg-white p-4 rounded-lg shadow flex gap-4">
                    <div class="w-32 h-20 bg-gray-200 rounded overflow-hidden">
                        <!-- Placeholder or actual image -->
                    </div>
                    <div class="flex-1">
                        <h3 class="font-bold">{{ course.title }}</h3>
                        <div class="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                            <div class="bg-blue-600 h-2.5 rounded-full" style="width: 10%"></div>
                        </div>
                        <p class="text-sm text-gray-500 mt-1">10% tamamlandy</p>
                    </div>
                    <router-link :to="`/learning/${course.id}`"
                        class="px-4 py-2 bg-indigo-600 text-white rounded text-sm self-center">Dowam et</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useViewModel, useStateFlow } from '@/core/mvvm/useViewModel';
import { DashboardViewModel } from '../viewmodel/DashboardViewModel';

const vm = useViewModel(DashboardViewModel);
const state = useStateFlow(vm.uiState);
</script>
