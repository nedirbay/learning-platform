<template>
    <section class="py-24 bg-white dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">
        <!-- Decoration -->
        <div class="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-[80px]"></div>
        <div class="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/10 rounded-full blur-[100px]"></div>

        <div class="container mx-auto px-4 relative z-10">
            <div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                <div>
                    <span
                        class="text-blue-600 dark:text-blue-400 font-bold tracking-wider text-sm uppercase mb-2 block">Öwrenip
                        başlaň</span>
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Iň Köp Satylan Kurslar</h2>
                </div>
                <button
                    class="text-blue-600 font-semibold hover:text-blue-800 flex items-center gap-2 group transition-colors">
                    Hemmesini gör
                    <span class="group-hover:translate-x-1 transition-transform">→</span>
                </button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="course in courses" :key="course.title"
                    class="bg-white dark:bg-slate-800 border dark:border-slate-700 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                    <div class="relative h-56 overflow-hidden">
                        <img :src="course.image" :alt="course.title"
                            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div
                            class="absolute top-4 left-4 bg-white/95 dark:bg-slate-800/95 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold shadow-sm uppercase tracking-wide text-blue-700 dark:text-blue-400">
                            {{ course.category }}
                        </div>
                        <div
                            class="absolute bottom-4 right-4 bg-gray-900/80 backdrop-blur text-white px-3 py-1 rounded-lg text-sm font-bold shadow-sm flex items-center gap-1">
                            ⭐️ {{ course.rating }}
                        </div>
                    </div>

                    <div class="p-6">
                        <h3
                            class="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors cursor-pointer">
                            {{ course.title }}
                        </h3>

                        <div class="flex items-center gap-3 mb-6">
                            <img :src="course.instructorImage"
                                class="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover" />
                            <div>
                                <p class="text-sm font-bold text-gray-800 dark:text-gray-200">{{ course.instructor }}
                                </p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">{{ course.role }}</p>
                            </div>
                        </div>

                        <div
                            class="flex items-center justify-between border-t border-gray-100 dark:border-slate-700 pt-5">
                            <div class="flex flex-col">
                                <span class="text-xs text-gray-500 dark:text-gray-400 font-medium">Bahasy</span>
                                <span class="text-lg font-bold text-blue-600 dark:text-blue-400">{{ course.price
                                }}</span>
                            </div>
                            <div class="flex items-center gap-4 text-gray-500 dark:text-gray-400 text-sm">
                                <div class="flex items-center gap-1"><svg class="w-4 h-4" fill="none"
                                        stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg> {{ course.duration }}</div>
                                <div class="flex items-center gap-1"><svg class="w-4 h-4" fill="none"
                                        stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10">
                                        </path>
                                    </svg> {{ course.lessons }} Sapak</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { type HomeFeaturedCourse } from '../../domain/entity/HomePageEntities';

defineProps<{
    courses: HomeFeaturedCourse[]
}>();
</script>
