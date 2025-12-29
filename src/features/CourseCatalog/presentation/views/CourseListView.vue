<template>
    <div class="min-h-screen bg-gray-50 dark:bg-slate-900 py-12 transition-colors duration-300">
        <div class="container mx-auto px-4">
            <!-- Page Header -->
            <div class="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
                <div>
                    <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Ähli Kurslar</h1>
                    <p class="text-gray-600 dark:text-gray-400">Öz geljegiňize maýa goýuň we täze hünärleri öwreniň</p>
                </div>

                <!-- Search Bar -->
                <div class="relative w-full md:w-96">
                    <input v-model="searchQuery" type="text" placeholder="Kurs gözle..."
                        class="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 transition-all shadow-sm outline-none" />
                    <svg class="w-5 h-5 text-gray-400 dark:text-gray-500 absolute left-4 top-1/2 -translate-y-1/2"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
            </div>

            <div class="flex flex-col lg:flex-row gap-8">
                <!-- Sidebar Filters -->
                <aside class="w-full lg:w-72 flex-shrink-0 space-y-8">
                    <!-- Categories Filter -->
                    <div
                        class="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 transition-colors duration-300">
                        <h3 class="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <span class="text-blue-500">📁</span> Kategoriýalar
                        </h3>
                        <div class="space-y-3">
                            <label v-for="category in availableCategories" :key="category"
                                class="flex items-center gap-3 cursor-pointer group">
                                <input type="checkbox" :value="category" v-model="selectedCategories"
                                    class="w-5 h-5 rounded border-gray-300 dark:border-slate-600 text-blue-600 focus:ring-blue-500 dark:bg-slate-700 transition-all" />
                                <span
                                    class="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{{
                                    category }}</span>
                            </label>
                        </div>
                    </div>

                    <!-- Price Filter -->
                    <div
                        class="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 transition-colors duration-300">
                        <h3 class="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <span class="text-green-500">💰</span> Bahasy
                        </h3>
                        <div class="space-y-3">
                            <label class="flex items-center gap-3 cursor-pointer group">
                                <input type="radio" value="all" v-model="priceFilter"
                                    class="w-5 h-5 text-blue-600 border-gray-300 dark:border-slate-600 dark:bg-slate-700 focus:ring-blue-500" />
                                <span
                                    class="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">Ählisi</span>
                            </label>
                            <label class="flex items-center gap-3 cursor-pointer group">
                                <input type="radio" value="free" v-model="priceFilter"
                                    class="w-5 h-5 text-blue-600 border-gray-300 dark:border-slate-600 dark:bg-slate-700 focus:ring-blue-500" />
                                <span
                                    class="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">Mugt</span>
                            </label>
                            <label class="flex items-center gap-3 cursor-pointer group">
                                <input type="radio" value="paid" v-model="priceFilter"
                                    class="w-5 h-5 text-blue-600 border-gray-300 dark:border-slate-600 dark:bg-slate-700 focus:ring-blue-500" />
                                <span
                                    class="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">Tölegli</span>
                            </label>
                        </div>
                    </div>

                    <!-- Rating Filter -->
                    <div
                        class="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 transition-colors duration-300">
                        <h3 class="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <span class="text-yellow-500">⭐</span> Reýting
                        </h3>
                        <div class="space-y-3">
                            <label v-for="rating in [4.5, 4.0, 3.5]" :key="rating"
                                class="flex items-center gap-3 cursor-pointer group">
                                <input type="checkbox" :value="rating" v-model="selectedRatings"
                                    class="w-5 h-5 text-blue-600 border-gray-300 dark:border-slate-600 dark:bg-slate-700 focus:ring-blue-500" />
                                <div class="flex items-center text-yellow-400 text-sm">
                                    <span
                                        class="text-gray-700 dark:text-gray-300 mr-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">{{
                                        rating }}+</span>
                                    <svg v-for="i in 5" :key="i" class="w-4 h-4"
                                        :class="i <= rating ? 'fill-current' : 'text-gray-300 dark:text-slate-600'"
                                        viewBox="0 0 20 20">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                            </label>
                        </div>
                    </div>

                </aside>

                <!-- Course List -->
                <div class="flex-1">
                    <!-- Loading State -->
                    <div v-if="state.isLoading"
                        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
                        <div v-for="i in 6" :key="i" class="bg-gray-200 dark:bg-slate-700 h-80 rounded-2xl"></div>
                    </div>

                    <!-- Error State -->
                    <div v-else-if="state.error"
                        class="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-8 rounded-2xl text-center">
                        <p>{{ state.error }}</p>
                        <button @click="vm.init()"
                            class="mt-4 text-red-700 dark:text-red-300 underline hover:no-underline">Täzeden
                            synanyş</button>
                    </div>

                    <!-- Empty State -->
                    <div v-else-if="filteredCourses.length === 0" class="text-center py-20">
                        <div class="text-6xl mb-4">🔍</div>
                        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Netije tapylmady</h3>
                        <p class="text-gray-500 dark:text-gray-400">Gözleg kriteriýalaryňyzy üýtgedip görüň</p>
                    </div>

                    <!-- Courses Grid -->
                    <div v-else class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        <div v-for="course in filteredCourses" :key="course.id"
                            class="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700 group flex flex-col">
                            <!-- Image -->
                            <div class="relative h-48 overflow-hidden">
                                <img :src="course.thumbnailUrl || 'https://via.placeholder.com/400x300'"
                                    :alt="course.title"
                                    class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div class="absolute top-3 left-3 flex gap-2">
                                    <span v-for="cat in course.categories.slice(0, 1)" :key="cat"
                                        class="bg-white/90 dark:bg-slate-800/90 backdrop-blur text-blue-700 dark:text-blue-400 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                                        {{ cat }}
                                    </span>
                                </div>
                            </div>

                            <!-- Content -->
                            <div class="p-5 flex flex-col flex-1">
                                <div
                                    class="flex items-center justify-between mb-3 text-sm text-gray-500 dark:text-gray-400">
                                    <span class="flex items-center gap-1">
                                        <svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253">
                                            </path>
                                        </svg>
                                        24 Sapak
                                    </span>
                                    <span class="flex items-center gap-1 text-yellow-500 font-bold">
                                        {{ course.rating }} <span
                                            class="text-gray-400 dark:text-gray-600 text-xs font-normal">/ 5</span>
                                    </span>
                                </div>

                                <h3
                                    class="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {{ course.title }}
                                </h3>

                                <p class="text-gray-500 dark:text-gray-400 text-sm line-clamp-2 mb-4">{{
                                    course.description }}</p>

                                <div
                                    class="mt-auto flex items-center justify-between pt-4 border-t border-gray-100 dark:border-slate-700">
                                    <div class="flex flex-col">
                                        <span class="text-xs text-gray-400 dark:text-gray-500">Bahasy</span>
                                        <span class="text-lg font-bold text-blue-600 dark:text-blue-400">{{ course.price
                                            === 0 ? 'Mugt' : `${course.price} TMT` }}</span>
                                    </div>
                                    <button @click="handleCourseClick(course.id)"
                                        class="px-5 py-2.5 bg-gray-50 dark:bg-slate-700 text-gray-700 dark:text-gray-200 font-bold rounded-xl hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white overflow-hidden transition-all text-sm">
                                        Giňişleýin
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useViewModel, useStateFlow } from '@/core/mvvm/useViewModel';
import { CourseListViewModel } from '../viewmodel/CourseListViewModel';
import { useRouter } from 'vue-router';
import { computed, ref } from 'vue';

const vm = useViewModel(CourseListViewModel);
const state = useStateFlow(vm.uiState);
const router = useRouter();

// Filters State
const searchQuery = ref('');
const selectedCategories = ref<string[]>([]);
const priceFilter = ref('all'); // all, free, paid
const selectedRatings = ref<number[]>([]);

// Computed Data
const availableCategories = ['Programirleme', 'Dizajn', 'Marketing', 'Biznes', 'Diller', 'Saglyk'];

const filteredCourses = computed(() => {
    return state.value.courses.filter(course => {
        // Search Filter
        const matchesSearch = course.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
            course.description.toLowerCase().includes(searchQuery.value.toLowerCase());

        // Category Filter
        const matchesCategory = selectedCategories.value.length === 0 ||
            course.categories.some(cat => selectedCategories.value.includes(cat));

        // Price Filter
        const matchesPrice = priceFilter.value === 'all' ||
            (priceFilter.value === 'free' && course.price === 0) ||
            (priceFilter.value === 'paid' && course.price > 0);

        // Rating Filter
        const matchesRating = selectedRatings.value.length === 0 ||
            selectedRatings.value.some(r => course.rating >= r);

        return matchesSearch && matchesCategory && matchesPrice && matchesRating;
    });
});

const handleCourseClick = (courseId: string) => {
    router.push(`/courses/${courseId}`);
};
</script>
