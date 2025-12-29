<template>
    <div class="min-h-screen flex bg-gray-100">
        <!-- Admin Sidebar -->
        <aside class="w-64 bg-gray-900 text-white flex flex-col">
            <div class="p-6 text-xl font-bold border-b border-gray-800">
                Admin Panel
            </div>
            <nav class="flex-1 p-4 space-y-2">
                <a href="#" class="block px-4 py-2 rounded hover:bg-gray-800">Dashboard</a>
                <a href="#" class="block px-4 py-2 rounded hover:bg-gray-800">Users</a>
                <a href="#" class="block px-4 py-2 rounded hover:bg-gray-800">Courses</a>
                <a href="#" class="block px-4 py-2 rounded hover:bg-gray-800">Settings</a>
            </nav>
            <div class="p-4 border-t border-gray-800">
                <button @click="logout"
                    class="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                    <span>🚪</span> Çykmak
                </button>
            </div>
        </aside>

        <!-- Main Content -->
        <main class="flex-1 p-8 overflow-y-auto">
            <router-view />
        </main>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const logout = () => {
    localStorage.removeItem('user');
    router.push('/login');
};
</script>
