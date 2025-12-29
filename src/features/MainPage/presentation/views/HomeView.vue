<template>
  <div
    class="min-h-screen bg-gray-50 dark:bg-slate-900 text-slate-800 dark:text-gray-200 font-sans flex flex-col transition-colors duration-300">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-indigo-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
      <!-- Decorational Background Elements -->
      <div class="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div class="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-blue-500 rounded-full blur-[120px]"></div>
        <div class="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-purple-500 rounded-full blur-[100px]"></div>
      </div>

      <div class="container mx-auto px-4 py-20 lg:py-32 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div class="text-center lg:text-left space-y-8 animate-fade-in-up">
          <div
            class="inline-block px-4 py-1.5 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-200 text-sm font-medium mb-2 backdrop-blur-sm">
            🚀 Geljek üçin bilim
          </div>
          <h1 class="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
            Bilim <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Gelejegiňizi</span>
            Gurýar
          </h1>
          <p class="text-lg sm:text-xl text-blue-100/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Müňlerçe onlaýn kurslar bilen bilim dünýäsine gadam basyň. Islendik ýerde, islendik wagt öwreniň we hünär
            derejäňizi ýokarlandyryň.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              class="px-8 py-4 bg-white text-indigo-900 font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:bg-blue-50 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2">
              <span>Kurslary Gör</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd" />
              </svg>
            </button>
            <button
              class="px-8 py-4 border border-white/20 bg-white/5 text-white font-semibold rounded-2xl hover:bg-white/10 transition-all backdrop-blur-md flex items-center justify-center">
              Giňişleýin
            </button>
          </div>
          <div class="pt-6 flex items-center justify-center lg:justify-start gap-4 text-sm text-blue-200/60">
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Sertifikat
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Ömürlik Elýeterlilik
            </div>
          </div>
        </div>

        <div class="relative lg:block">
          <div
            class="relative z-10 bg-white/10 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border border-white/10 transform rotate-2 hover:rotate-0 transition-all duration-500">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Students learning" class="rounded-xl shadow-lg w-full object-cover h-[400px]" />

            <!-- Floating Card 1 -->
            <div
              class="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 animate-bounce-slow">
              <div class="bg-green-100 p-3 rounded-full text-green-600">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <p class="text-xs text-gray-500">Kurs ýagdaýy</p>
                <p class="font-bold text-gray-800">Tamamlandy</p>
              </div>
            </div>

            <!-- Floating Card 2 -->
            <div
              class="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl flex flex-col items-center gap-2 animate-pulse-slow">
              <div class="bg-yellow-100 p-2 rounded-full text-yellow-600">
                <span class="text-xl font-bold">4.9</span>
              </div>
              <div class="flex text-yellow-400 text-xs">
                ★★★★★
              </div>
              <p class="text-xs text-gray-500 font-medium">Reýting</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <!-- Stats Section -->
    <HomeStats v-if="state.data" :stats="state.data.stats" />
    <div v-else class="py-10 text-center text-gray-400">Statistika ýüklenýär...</div>

    <!-- Categories Section -->
    <!-- Categories Section -->
    <HomeCategories v-if="state.data" :categories="state.data.categories" />

    <!-- Featured Courses -->
    <!-- Featured Courses -->
    <HomeFeaturedCourses v-if="state.data" :courses="state.data.featuredCourses" />

    <!-- Why Choose Us -->
    <section class="py-20 bg-indigo-900 text-white relative overflow-hidden">
      <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="grid md:grid-cols-2 gap-16 items-center">
          <div class="space-y-8">
            <h2 class="text-3xl md:text-5xl font-bold">Näme üçin bizi saýlamaly?</h2>
            <p class="text-indigo-200 text-lg">Biz diňe bir kurs däl, eýsem kariýeraňyzda üstünlik gazanmak üçin doly
              ekosistemany hödürleýäris.</p>

            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <div class="bg-blue-500/20 p-3 rounded-xl border border-blue-400/30">
                  <span class="text-2xl">🎓</span>
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-1">Sertifikatly Bilim</h3>
                  <p class="text-indigo-200 text-sm">Halkara derejesinde ykrar edilen sertifikatlar bilen bilimiňizi
                    subut ediň.</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="bg-purple-500/20 p-3 rounded-xl border border-purple-400/30">
                  <span class="text-2xl">🎥</span>
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-1">Ýokary Hilli Wideo Sapaklar</h3>
                  <p class="text-indigo-200 text-sm">HD formatda we düşnükli dilde taýýarlanan sapaklar.</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="bg-green-500/20 p-3 rounded-xl border border-green-400/30">
                  <span class="text-2xl">🤝</span>
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-1">Jemgyýetçilik Goldawy</h3>
                  <p class="text-indigo-200 text-sm">Beýleki talyplar we mugallymlar bilen pikir alyşmak mümkinçiligi.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="relative">
            <div class="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                class="rounded-2xl shadow-xl translate-y-8 w-full h-[250px] object-cover" />
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                class="rounded-2xl shadow-xl w-full h-[250px] object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-white dark:bg-slate-800 text-center transition-colors duration-300">
      <div class="container mx-auto px-4 max-w-4xl">
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">Öwrenmäge başlamaga taýýarmy?</h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 mb-10">Müňlerçe kanagatlanan talyplara goşulyň we öz
          geljegiňize maýa goýuň.
          Mugt hasap açmak üçin bary-ýogy 1 minut gerek.</p>
        <button
          class="px-10 py-4 bg-blue-600 text-white text-lg font-bold rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all transform hover:-translate-y-1">
          Mugt Başlaň
        </button>
        <p class="mt-4 text-sm text-gray-400">Kredit karta talap edilmeýär</p>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useViewModel, useStateFlow } from '@/core/mvvm/useViewModel';
import { HomeViewModel } from '../viewmodel/HomeViewModel';
import HomeStats from '../components/HomeStats.vue';
import HomeCategories from '../components/HomeCategories.vue';
import HomeFeaturedCourses from '../components/HomeFeaturedCourses.vue';

const currentUser = ref<any>(null);

const vm = useViewModel(HomeViewModel);
const state = useStateFlow(vm.uiState);

onMounted(() => {
  const userStr = localStorage.getItem('user');
  if (userStr) {
    currentUser.value = JSON.parse(userStr);
  }
  vm.init();
});
</script>

<style scoped>
.animate-pulse-slow {
  animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animate-bounce-slow {
  animation: bounce 3s infinite;
}

@keyframes pulse {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: .95;
    transform: scale(0.98);
  }
}

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
</style>