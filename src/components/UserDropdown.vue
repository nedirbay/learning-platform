<template>
    <div class="relative" ref="dropdownRef">
        <button @click="isOpen = !isOpen"
            class="flex items-center gap-3 pl-2 pr-4 py-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-all border border-transparent hover:border-gray-200 dark:hover:border-slate-700">
            <div class="relative">
                <img :src="user?.avatar || 'https://randomuser.me/api/portraits/men/32.jpg'"
                    class="w-9 h-9 rounded-full border-2 border-white dark:border-slate-700 shadow-sm object-cover" />
                <span
                    class="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full"></span>
            </div>

            <div class="hidden md:flex flex-col items-start">
                <span class="text-sm font-bold text-gray-700 dark:text-gray-200 leading-none">{{ user?.name || 'Ulanyjy'
                    }}</span>
                <span class="text-xs text-gray-500 dark:text-gray-400">Taly</span>
            </div>

            <svg class="w-4 h-4 text-gray-400 transition-transform duration-200" :class="{ 'rotate-180': isOpen }"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
        </button>

        <!-- Dropdown Menu -->
        <Transition enter-active-class="transition duration-200 ease-out"
            enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0">
            <div v-if="isOpen"
                class="absolute right-0 mt-2 w-64 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700 py-2 z-50 overflow-hidden">
                <!-- User Header in Dropdown -->
                <div
                    class="px-5 py-4 border-b border-gray-100 dark:border-slate-700 bg-gray-50/50 dark:bg-slate-800/50">
                    <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Giriş edildi</p>
                    <p class="text-base font-bold text-gray-900 dark:text-white truncate">{{ user?.email ||
                        'user@example.com' }}</p>
                </div>

                <div class="py-2">
                    <router-link to="/dashboard"
                        class="flex items-center gap-3 px-5 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        @click="isOpen = false">
                        <span class="text-lg">📊</span>
                        Şahsy Otag
                    </router-link>

                    <router-link to="/profile"
                        class="flex items-center gap-3 px-5 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        @click="isOpen = false">
                        <span class="text-lg">⚙️</span>
                        Profil Sazlamalary
                    </router-link>

                    <router-link to="/courses"
                        class="flex items-center gap-3 px-5 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        @click="isOpen = false">
                        <span class="text-lg">📚</span>
                        Kurslarym
                    </router-link>
                </div>

                <div class="border-t border-gray-100 dark:border-slate-700 py-2">
                    <button @click="handleLogout"
                        class="w-full flex items-center gap-3 px-5 py-2.5 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors text-left">
                        <span class="text-lg">🚪</span>
                        Ulgamdan Çyk
                    </button>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps<{
    user: any;
}>();

const emit = defineEmits(['logout']);

const isOpen = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);
const router = useRouter();

const handleLogout = () => {
    isOpen.value = false;
    emit('logout');
};

// Close dropdown when clicking outside
const closeOnClickOutside = (e: MouseEvent) => {
    if (dropdownRef.value && !dropdownRef.value.contains(e.target as Node)) {
        isOpen.value = false;
    }
};

onMounted(() => {
    document.addEventListener('click', closeOnClickOutside);
});

onUnmounted(() => {
    document.removeEventListener('click', closeOnClickOutside);
});
</script>
