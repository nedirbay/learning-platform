<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-50 relative overflow-hidden">
        <!-- Background Decor -->
        <div class="absolute inset-0 z-0">
            <div class="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-200/30 rounded-full blur-[100px]"></div>
            <div class="absolute top-[40%] -right-[10%] w-[40%] h-[40%] bg-indigo-200/30 rounded-full blur-[100px]">
            </div>
        </div>

        <div class="relative z-10 w-full flex justify-center px-4">
            <router-view />
        </div>
    </div>
</template>
