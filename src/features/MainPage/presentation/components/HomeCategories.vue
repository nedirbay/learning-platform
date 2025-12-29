<template>
    <section class="py-24 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Meşhur Kategoriýalar</h2>
                <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Gyzyklanýan ugurleriňizi saýlaň we täze
                    başarnyklary öwrenip başlaň</p>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                <div v-for="category in categories" :key="category.name"
                    class="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 dark:border-slate-700 hover:border-blue-200 transition-all duration-300 group cursor-pointer text-center">
                    <div
                        class="w-16 h-16 mx-auto bg-blue-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        {{ category.icon }}
                    </div>
                    <h3
                        class="text-lg font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {{
                            category.name }}</h3>
                    <p
                        class="text-sm text-gray-500 dark:text-gray-400 font-medium bg-gray-100 dark:bg-slate-700 px-3 py-1 rounded-full inline-block group-hover:bg-blue-50 dark:group-hover:bg-slate-600 group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors">
                        {{ category.count }} Kurs</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { type HomeCategory } from '../../domain/entity/HomePageEntities';

defineProps<{
    categories: HomeCategory[]
}>();
</script>
