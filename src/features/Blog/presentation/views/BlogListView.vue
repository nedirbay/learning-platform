<template>
    <div class="container mx-auto px-4 py-8">
        <h1 class="text-3xl font-bold mb-8 text-center">Blog</h1>
        <div v-if="state.isLoading" class="text-center">Ýüklenýär...</div>
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="post in state.posts" :key="post.id" class="bg-white rounded-xl shadow-lg overflow-hidden">
                <div class="h-48 bg-gray-200"></div>
                <div class="p-6">
                    <span class="text-blue-600 text-sm font-semibold">Täzelikler</span>
                    <h3 class="text-xl font-bold mt-2 mb-3">{{ post.title }}</h3>
                    <p class="text-gray-600 text-sm">{{ post.excerpt }}</p>
                    <a href="#" class="inline-block mt-4 text-indigo-600 font-medium">Giňişleýin oka &rarr;</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useViewModel, useStateFlow } from '@/core/mvvm/useViewModel';
import { BlogViewModel } from '../viewmodel/BlogViewModel';

const vm = useViewModel(BlogViewModel);
const state = useStateFlow(vm.uiState);
</script>
