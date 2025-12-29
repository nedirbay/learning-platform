<template>
    <section
        class="py-10 bg-white dark:bg-slate-800 border-b border-gray-100 dark:border-slate-700 shadow-sm relative z-20 -mt-8 mx-4 lg:mx-20 rounded-2xl transition-colors duration-300">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100 dark:divide-gray-700">
            <div v-for="(stat, index) in stats" :key="index" class="text-center group cursor-default">
                <p
                    class="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-indigo-600 mb-1 group-hover:scale-110 transition-transform duration-300">
                    {{ stat.value }}
                </p>
                <p class="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wider">{{ stat.label
                }}</p>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { type HomeStat } from '../../domain/entity/HomePageEntities';

defineProps<{
    stats: HomeStat[]
}>();
</script>
