<template>
    <div class="container mx-auto px-4 py-8">
        <h1 class="text-3xl font-bold mb-6">Kurslar Katalogy</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Course Cards will go here -->
            <div v-for="i in 6" :key="i" class="bg-white rounded-lg shadow-md p-4">
                <div class="h-40 bg-gray-200 rounded mb-4"></div>
                <h3 class="font-bold text-lg mb-2">Kursyň Ady {{ i }}</h3>
                <p class="text-gray-600 mb-4">Gysgaça düşündiriş...</p>
                <button class="w-full bg-blue-600 text-white py-2 rounded">Giňişleýin</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// Implementation needed
</script>
