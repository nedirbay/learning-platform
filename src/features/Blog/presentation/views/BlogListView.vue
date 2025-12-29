<template>
    <div class="container mx-auto px-4 py-8">
        <h1 class="text-3xl font-bold mb-8 text-center">Blog</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="i in 3" :key="i" class="bg-white rounded-xl shadow-lg overflow-hidden">
                <div class="h-48 bg-gray-200"></div>
                <div class="p-6">
                    <span class="text-blue-600 text-sm font-semibold">Täzelikler</span>
                    <h3 class="text-xl font-bold mt-2 mb-3">Blog Makala {{ i }}</h3>
                    <p class="text-gray-600 text-sm">Makala barada gysgaça maglumat...</p>
                    <a href="#" class="inline-block mt-4 text-indigo-600 font-medium">Giňişleýin oka &rarr;</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
// Implementation needed
</script>
