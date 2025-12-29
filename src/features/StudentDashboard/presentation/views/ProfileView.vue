<template>
    <div class="min-h-screen bg-gray-50 dark:bg-slate-900 py-12 transition-colors">
        <div class="container mx-auto px-4 max-w-5xl">
            <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Profil Sazlamalary</h1>

            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <!-- Sidebar Links -->
                <aside class="space-y-2">
                    <button v-for="tab in tabs" :key="tab.id" @click="activeTab = tab.id"
                        class="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all text-left"
                        :class="activeTab === tab.id ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'text-gray-600 dark:text-gray-400 hover:bg-white dark:hover:bg-slate-800'">
                        <span class="text-lg">{{ tab.icon }}</span>
                        {{ tab.label }}
                    </button>
                </aside>

                <!-- Content Area -->
                <div
                    class="md:col-span-3 bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-700 p-8 transition-colors">
                    <!-- Profile Info Tab -->
                    <div v-if="activeTab === 'profile'" class="space-y-8 animate-fade-in-up">
                        <div class="flex items-center gap-6">
                            <div class="relative group">
                                <img src="https://randomuser.me/api/portraits/men/32.jpg"
                                    class="w-24 h-24 rounded-full object-cover border-4 border-gray-50 dark:border-slate-700 shadow-md" />
                                <button
                                    class="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z">
                                        </path>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                </button>
                            </div>
                            <div>
                                <h2 class="text-xl font-bold text-gray-900 dark:text-white">Aman Amanow</h2>
                                <p class="text-gray-500 dark:text-gray-400">Software Engineer</p>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="space-y-2">
                                <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Doly adyňyz</label>
                                <input type="text" value="Aman Amanow"
                                    class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-colors" />
                            </div>
                            <div class="space-y-2">
                                <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Email
                                    salgyňyz</label>
                                <input type="email" value="aman@example.com"
                                    class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-colors" />
                            </div>
                            <div class="space-y-2 md:col-span-2">
                                <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Biografiýa</label>
                                <textarea rows="4"
                                    class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-colors"
                                    placeholder="Özüňiz barada gysgaça..."></textarea>
                            </div>
                        </div>

                        <div class="flex justify-end">
                            <button
                                class="px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-500/20 transition-all transform hover:-translate-y-1">Ýatda
                                sakla</button>
                        </div>
                    </div>

                    <!-- Security Tab (Mock) -->
                    <div v-if="activeTab === 'security'" class="animate-fade-in-up">
                        <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-6">Howpsuzlyk Sazlamalary</h2>
                        <!-- ... Security fields ... -->
                        <p class="text-gray-500 dark:text-gray-400">Açar sözi çalşmak we 2FA sazlamalary bu ýerde bolar.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const activeTab = ref('profile');

const tabs = [
    { id: 'profile', label: 'Şahsy Maglumatlar', icon: '👤' },
    { id: 'security', label: 'Howpsuzlyk', icon: '🔒' },
    { id: 'notifications', label: 'Duýduryşlar', icon: '🔔' },
    { id: 'billing', label: 'Tölegler', icon: '💳' },
];
</script>
