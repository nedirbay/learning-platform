<template>
    <div class="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 transition-colors duration-300">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <h1
                    class="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mb-4 animate-fade-in-down">
                    Biziň Blogymyz
                </h1>
                <p class="text-lg text-gray-600 dark:text-gray-300 animate-fade-in-up">
                    Iň soňky täzelikler, gollanmalar we tehnologiýa barada makalalar.
                </p>
            </div>

            <div v-if="state.isLoading" class="flex justify-center items-center py-20">
                <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            </div>

            <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <article v-for="(post, index) in state.posts" :key="post.id"
                    class="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col h-full transform hover:-translate-y-1"
                    :style="{ animationDelay: `${index * 100}ms` }">
                    <div class="relative h-52 overflow-hidden">
                        <img :src="post.coverImage" :alt="post.title"
                            class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        </div>
                        <div class="absolute bottom-4 left-4 flex flex-wrap gap-2">
                            <span v-for="tag in post.tags" :key="tag"
                                class="px-3 py-1 text-xs font-semibold bg-indigo-600/90 text-white rounded-full backdrop-blur-sm shadow-sm">
                                {{ tag }}
                            </span>
                        </div>
                    </div>

                    <div class="p-6 flex-1 flex flex-col">
                        <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3 space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>{{ formatDate(post.publishedDate) }}</span>
                            <span class="mx-2">•</span>
                            <span>{{ post.author }}</span>
                        </div>

                        <h3
                            class="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                            {{ post.title }}
                        </h3>

                        <p class="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3 leading-relaxed flex-1">
                            {{ post.excerpt }}
                        </p>

                        <router-link :to="{ name: 'blog-detail', params: { id: post.id } }"
                            class="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-colors duration-300 shadow-md hover:shadow-lg">
                            Giňişleýin oka
                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </router-link>
                    </div>
                </article>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useViewModel, useStateFlow } from '@/core/mvvm/useViewModel';
import { BlogViewModel } from '../viewmodel/BlogViewModel';
import { onMounted } from 'vue';

const vm = useViewModel(BlogViewModel);
const state = useStateFlow(vm.uiState);

onMounted(() => {
    // If we were using kept-alive views we might check if data is loaded,
    // but here init() in ViewModel is likely sufficient or we can call explicitly.
    // vm.loadPosts(); // VM init calls this
});

function formatDate (date: Date | string) {
    return new Date(date).toLocaleDateString('tk-TM', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}
</script>
