<template>
    <div
        class="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300">
        <!-- Hero Section -->
        <section class="relative py-20 overflow-hidden">
            <div
                class="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5">
            </div>
            <div class="container mx-auto px-4 relative z-10">
                <div class="max-w-4xl mx-auto text-center">
                    <div
                        class="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-bounce">
                        <span>✨</span>
                        <span>Bilim we Tehnologiýa</span>
                    </div>
                    <h1 class="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
                        Biziň Barada
                    </h1>
                    <p class="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                        Biz häzirki zaman bilim bermegiň öňdänidir. Geljekki nesilleri döretmek üçin
                        dünýä derejesindäki bilim we tehnologiýany birleşdirýäris.
                    </p>
                    <div class="flex flex-wrap justify-center gap-4">
                        <button
                            class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-2xl hover:shadow-blue-500/50 transition-all transform hover:-translate-y-1 hover:scale-105">
                            Başlamak
                        </button>
                        <button
                            class="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-gray-900 dark:text-white px-8 p-4 rounded-2xl font-bold border-2 border-gray-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all transform hover:-translate-y-1">
                            Habarlaşmak
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Statistics Section -->
        <section class="py-16">
            <div class="container mx-auto px-4">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    <div v-for="stat in state.statistics" :key="stat.id"
                        class="bg-white/60 dark:bg-slate-800/60 backdrop-blur-md p-8 rounded-3xl border border-gray-200 dark:border-slate-700 hover:shadow-2xl hover:shadow-blue-500/10 transition-all transform hover:-translate-y-2 group">
                        <div class="text-4xl mb-4 transform group-hover:scale-110 transition-transform">{{ stat.icon }}
                        </div>
                        <div
                            class="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                            {{ stat.value }}
                        </div>
                        <div class="text-sm text-gray-600 dark:text-gray-400 font-semibold">{{ stat.label }}</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Mission & Vision Section -->
        <section class="py-20">
            <div class="container mx-auto px-4">
                <div class="max-w-6xl mx-auto">
                    <div class="text-center mb-16">
                        <h2 class="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
                            Biziň Maksadymyz
                        </h2>
                        <p class="text-lg text-gray-600 dark:text-gray-300">
                            Bilimiň güýjüni ulanmak arkaly dünýäni üýtgetmek
                        </p>
                    </div>

                    <div class="grid md:grid-cols-2 gap-8">
                        <div
                            class="bg-gradient-to-br from-blue-500/10 to-blue-600/10 dark:from-blue-500/5 dark:to-blue-600/5 p-10 rounded-3xl border border-blue-200 dark:border-blue-900/50 hover:shadow-2xl transition-all transform hover:-translate-y-1">
                            <div class="text-5xl mb-6">🎯</div>
                            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Missiýamyz</h3>
                            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Her bir adamyň hilji bilim eýe bolmak hukugyndan göz öňünde tutup,
                                innowasion bilim çözgütlerini hödürleýäris. Biz okuwa we üstünlige
                                goldaw berýäris.
                            </p>
                        </div>

                        <div
                            class="bg-gradient-to-br from-purple-500/10 to-purple-600/10 dark:from-purple-500/5 dark:to-purple-600/5 p-10 rounded-3xl border border-purple-200 dark:border-purple-900/50 hover:shadow-2xl transition-all transform hover:-translate-y-1">
                            <div class="text-5xl mb-6">🚀</div>
                            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Wizionumyz</h3>
                            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Bilimiň geljegini döretmek we dünýädäki iň gowy online bilim platformasy
                                bolmak. Biz tehnologiýa we innowsiýa arkaly bilim düzümi döredýäris.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Values Section -->
        <section class="py-20 bg-white/50 dark:bg-slate-900/50">
            <div class="container mx-auto px-4">
                <div class="max-w-6xl mx-auto">
                    <div class="text-center mb-16">
                        <h2 class="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
                            Biziň Gymmatlyklarymyz
                        </h2>
                        <p class="text-lg text-gray-600 dark:text-gray-300">
                            Bizi aýratyn edýän prinsipleri
                        </p>
                    </div>

                    <div class="grid md:grid-cols-3 gap-8">
                        <div v-for="value in state.companyValues" :key="value.id"
                            class="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all transform hover:-translate-y-2 hover:shadow-2xl">
                            <div
                                class="text-5xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all">
                                {{ value.icon }}
                            </div>
                            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">{{ value.title }}</h3>
                            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">{{ value.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Team Section -->
        <section class="py-20">
            <div class="container mx-auto px-4">
                <div class="max-w-6xl mx-auto">
                    <div class="text-center mb-16">
                        <h2 class="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
                            Biziň Toparymyz
                        </h2>
                        <p class="text-lg text-gray-600 dark:text-gray-300">
                            Hünärmenler we ylham berýän adamlar
                        </p>
                    </div>

                    <div class="grid md:grid-cols-4 gap-8">
                        <div v-for="member in state.teamMembers" :key="member.id" class="group text-center">
                            <div class="relative mb-6">
                                <div
                                    class="w-40 h-40 mx-auto rounded-3xl bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 p-1 transform group-hover:scale-105 group-hover:rotate-3 transition-all">
                                    <div
                                        class="w-full h-full rounded-3xl bg-gray-100 dark:bg-slate-800 flex items-center justify-center text-6xl">
                                        {{ member.avatar }}
                                    </div>
                                </div>
                                <div
                                    class="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                                    {{ member.status }}
                                </div>
                            </div>
                            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-1">{{ member.name }}</h3>
                            <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">{{ member.role }}</p>
                            <div class="flex justify-center gap-2">
                                <button
                                    class="w-8 h-8 rounded-full bg-blue-100 dark:bg-slate-700 text-blue-600 dark:text-blue-400 hover:bg-blue-500 hover:text-white transition-all">
                                    <span class="text-sm">💼</span>
                                </button>
                                <button
                                    class="w-8 h-8 rounded-full bg-purple-100 dark:bg-slate-700 text-purple-600 dark:text-purple-400 hover:bg-purple-500 hover:text-white transition-all">
                                    <span class="text-sm">🐦</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="py-20 relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-10 dark:opacity-5"></div>
            <div class="container mx-auto px-4 relative z-10">
                <div
                    class="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-600 to-purple-600 p-12 rounded-3xl text-white">
                    <h2 class="text-4xl md:text-5xl font-black mb-6">
                        Bize Goşulyň
                    </h2>
                    <p class="text-xl mb-8 opacity-90">
                        Biziň platformamyzda müňlerçe okuwçy bilen bilim syýahatyna başlaň
                    </p>
                    <button
                        class="bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 hover:scale-105">
                        Mugt Hasaba Alyň
                    </button>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { useViewModel, useStateFlow } from '@/core/mvvm/useViewModel';
import { AboutViewModel } from '../viewmodel/AboutViewModel';

const vm = useViewModel(AboutViewModel);
const state = useStateFlow(vm.uiState);
</script>

<style scoped>
@keyframes bounce {

    0%,
    100% {
        transform: translateY(-5%);
        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }

    50% {
        transform: translateY(0);
        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
}

.animate-bounce {
    animation: bounce 1s infinite;
}
</style>
