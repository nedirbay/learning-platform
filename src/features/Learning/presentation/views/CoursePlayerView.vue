<template>
    <div class="flex h-screen bg-gray-100">
        <!-- Sidebar -->
        <div class="w-80 bg-white border-r overflow-y-auto hidden md:block">
            <div class="p-4 border-b">
                <h2 class="font-bold">Kurs Mazmuny</h2>
            </div>
            <ul>
                <li v-for="i in 10" :key="i" class="p-4 hover:bg-gray-50 cursor-pointer border-b">
                    <span class="text-sm">Sapak {{ i }}: Giriş</span>
                </li>
            </ul>
        </div>

        <!-- Main Content -->
        <div class="flex-1 flex flex-col">
            <div class="bg-black aspect-video w-full">
                <!-- Video Player Placeholder -->
                <div class="w-full h-full flex items-center justify-center text-white">
                    Video Player
                </div>
            </div>
            <div class="p-8">
                <h1 class="text-2xl font-bold mb-4">Sapak Ady</h1>
                <p class="text-gray-700">Sapak barada düşündiriş...</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// Implementation needed
</script>
