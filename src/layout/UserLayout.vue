<template>
    <div class="min-h-screen flex flex-col bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
        <header
            class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 dark:border-slate-800 transition-colors duration-300">
            <div class="container mx-auto px-4 h-16 flex items-center justify-between">
                <router-link to="/" class="flex items-center gap-2">
                    <span class="text-2xl">🎓</span>
                    <span class="font-bold text-xl text-gray-900 dark:text-white tracking-tight">Learning
                        Platform</span>
                </router-link>

                <nav class="hidden md:flex items-center gap-8">
                    <router-link to="/"
                        class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">Baş
                        Sahypa</router-link>
                    <router-link to="/courses"
                        class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">Kurslar</router-link>
                    <router-link to="/blog"
                        class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">Blog</router-link>
                    <a href="#"
                        class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">Biz
                        Barada</a>
                </nav>

                <div class="flex items-center gap-4">
                    <!-- Theme Toggle -->
                    <button @click="toggleTheme"
                        class="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-800 transition-colors">
                        <span v-if="isDark">🌞</span>
                        <span v-else>🌙</span>
                    </button>
                    <template v-if="currentUser">
                        <UserDropdown :user="currentUser" @logout="logout" />
                    </template>
                    <template v-else>
                        <router-link to="/login"
                            class="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-medium px-4 py-2 transition-colors">Girmek</router-link>
                        <router-link to="/login"
                            class="bg-blue-600 text-white px-5 py-2.5 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30 transform hover:-translate-y-0.5">Agza
                            bol</router-link>
                    </template>
                </div>
            </div>
        </header>

        <main class="flex-grow">
            <router-view />
        </main>

        <footer
            class="bg-gray-50 dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 pt-16 pb-8 mt-auto transition-colors duration-300">
            <div class="container mx-auto px-4">
                <div class="text-center text-gray-400 text-sm">
                    &copy; {{ new Date().getFullYear() }} Learning Platform. Ähli hukuklar goralan.
                </div>
            </div>
        </footer>
        <ChatWidget />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import UserDropdown from '@/components/UserDropdown.vue';
import ChatWidget from '@/components/ChatWidget.vue';

const currentUser = ref<any>(null);
const router = useRouter();
const isDark = ref(false);

const checkUser = () => {
    const userStr = localStorage.getItem('user');
    if (userStr) {
        currentUser.value = JSON.parse(userStr);
    } else {
        currentUser.value = null;
    }
}

const toggleTheme = () => {
    isDark.value = !isDark.value;
    if (isDark.value) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
};

onMounted(() => {
    checkUser();
    // Listen for storage events (logout in other tabs)
    window.addEventListener('storage', checkUser);

    // Check theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        isDark.value = true;
        document.documentElement.classList.add('dark');
    } else {
        isDark.value = false;
        document.documentElement.classList.remove('dark');
    }
});

const logout = () => {
    localStorage.removeItem('user');
    currentUser.value = null;
    router.push('/login');
};
</script>
