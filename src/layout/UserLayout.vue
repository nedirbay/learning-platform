<template>
    <div class="min-h-screen flex flex-col bg-gray-50">
        <header class="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
            <div class="container mx-auto px-4 h-16 flex items-center justify-between">
                <router-link to="/" class="flex items-center gap-2">
                    <span class="text-2xl">🎓</span>
                    <span class="font-bold text-xl text-gray-900 tracking-tight">Learning Platform</span>
                </router-link>

                <nav class="hidden md:flex items-center gap-8">
                    <router-link to="/" class="text-gray-600 hover:text-blue-600 font-medium transition-colors">Baş
                        Sahypa</router-link>
                    <router-link to="/courses"
                        class="text-gray-600 hover:text-blue-600 font-medium transition-colors">Kurslar</router-link>
                    <router-link to="/blog"
                        class="text-gray-600 hover:text-blue-600 font-medium transition-colors">Blog</router-link>
                    <a href="#" class="text-gray-600 hover:text-blue-600 font-medium transition-colors">Biz Barada</a>
                </nav>

                <div class="flex items-center gap-4">
                    <template v-if="currentUser">
                        <div class="relative group">
                            <button
                                class="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium focus:outline-none">
                                <img src="https://randomuser.me/api/portraits/men/32.jpg"
                                    class="w-8 h-8 rounded-full border border-gray-200" />
                                <span>{{ currentUser.name }}</span>
                                <span class="text-xs">▼</span>
                            </button>
                            <!-- Dropdown -->
                            <div
                                class="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-1 hidden group-hover:block animate-fade-in-up">
                                <router-link to="/dashboard"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Şahsy
                                    Otag</router-link>
                                <router-link to="/profile"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Profil</router-link>
                                <button @click="logout"
                                    class="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50">Ulgamdan
                                    Çyk</button>
                            </div>
                        </div>
                    </template>
                    <template v-else>
                        <router-link to="/login"
                            class="text-gray-900 hover:text-blue-600 font-medium px-4 py-2 transition-colors">Girmek</router-link>
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

        <footer class="bg-gray-50 border-t border-gray-200 pt-16 pb-8 mt-auto">
            <div class="container mx-auto px-4">
                <div class="text-center text-gray-400 text-sm">
                    &copy; {{ new Date().getFullYear() }} Learning Platform. Ähli hukuklar goralan.
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const currentUser = ref<any>(null);
const router = useRouter();

const checkUser = () => {
    const userStr = localStorage.getItem('user');
    if (userStr) {
        currentUser.value = JSON.parse(userStr);
    } else {
        currentUser.value = null;
    }
}

onMounted(() => {
    checkUser();
    // Listen for storage events (logout in other tabs)
    window.addEventListener('storage', checkUser);
});

const logout = () => {
    localStorage.removeItem('user');
    currentUser.value = null;
    router.push('/login');
};
</script>
