<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="(stat, index) in stats" :key="index"
            class="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm flex items-center gap-4 transition-colors">
            <div class="p-3 rounded-xl bg-opacity-20" :class="stat.colorClass">
                <span class="text-2xl">{{ stat.icon }}</span>
            </div>
            <div>
                <h4 class="text-sm text-gray-500 dark:text-gray-400 font-medium">{{ stat.label }}</h4>
                <p class="text-2xl font-bold text-gray-900 dark:text-white">{{ stat.value }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const stats = [
    { label: 'Dowam edýän', value: '4', icon: '📚', colorClass: 'bg-blue-500 text-blue-600' },
    { label: 'Tamamlanan', value: '12', icon: '🎓', colorClass: 'bg-green-500 text-green-600' },
    { label: 'Sertifikatlar', value: '7', icon: '🏆', colorClass: 'bg-yellow-500 text-yellow-600' },
    { label: 'Umumy Baha', value: '450', icon: '💎', colorClass: 'bg-purple-500 text-purple-600' }
];
</script>
