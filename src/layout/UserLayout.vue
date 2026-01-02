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
                    <router-link to="/about"
                        class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">Biz
                        Barada</router-link>
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
                        <div class="hidden md:flex items-center gap-4">
                            <router-link to="/login"
                                class="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-medium px-4 py-2 transition-colors">Girmek</router-link>
                            <router-link to="/login"
                                class="bg-blue-600 text-white px-5 py-2.5 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30 transform hover:-translate-y-0.5">Agza
                                bol</router-link>
                        </div>
                    </template>

                    <!-- Mobile Menu Button -->
                    <button @click="isMenuOpen = !isMenuOpen" class="md:hidden p-2 text-gray-600 dark:text-gray-300">
                        <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Mobile Menu -->
            <Transition enter-active-class="transition duration-200 ease-out"
                enter-from-class="transform -translate-y-2 opacity-0"
                enter-to-class="transform translate-y-0 opacity-100"
                leave-active-class="transition duration-150 ease-in"
                leave-from-class="transform translate-y-0 opacity-100"
                leave-to-class="transform -translate-y-2 opacity-0">
                <div v-if="isMenuOpen"
                    class="md:hidden bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800">
                    <div class="container mx-auto px-4 py-4 flex flex-col gap-4">
                        <router-link to="/" @click="isMenuOpen = false"
                            class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2">Baş
                            Sahypa</router-link>
                        <router-link to="/courses" @click="isMenuOpen = false"
                            class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2">Kurslar</router-link>
                        <router-link to="/blog" @click="isMenuOpen = false"
                            class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2">Blog</router-link>
                        <router-link to="/about" @click="isMenuOpen = false"
                            class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2">Biz
                            Barada</router-link>

                        <div v-if="!currentUser"
                            class="flex flex-col gap-3 mt-2 pt-4 border-t border-gray-100 dark:border-slate-800">
                            <router-link to="/login" @click="isMenuOpen = false"
                                class="text-center text-gray-900 dark:text-white font-medium py-2 border border-gray-200 dark:border-slate-700 rounded-xl">Girmek</router-link>
                            <router-link to="/login" @click="isMenuOpen = false"
                                class="text-center bg-blue-600 text-white py-2 rounded-xl font-bold shadow-lg shadow-blue-500/30">Agza
                                bol</router-link>
                        </div>
                    </div>
                </div>
            </Transition>
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
const isMenuOpen = ref(false);

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
