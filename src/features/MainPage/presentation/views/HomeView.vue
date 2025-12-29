<template>
  <div class="min-h-screen bg-gray-50 text-slate-800 font-sans flex flex-col">
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
    <section class="py-10 bg-white border-b border-gray-100 shadow-sm relative z-20 -mt-8 mx-4 lg:mx-20 rounded-2xl">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
        <div v-for="(stat, index) in stats" :key="index" class="text-center group cursor-default">
          <p
            class="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-indigo-600 mb-1 group-hover:scale-110 transition-transform duration-300">
            {{ stat.value }}</p>
          <p class="text-gray-500 text-sm font-medium uppercase tracking-wider">{{ stat.label }}</p>
        </div>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="py-24 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meşhur Kategoriýalar</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Gyzyklanýan ugurleriňizi saýlaň we täze başarnyklary öwrenip başlaň
          </p>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          <div v-for="category in categories" :key="category.name"
            class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-blue-200 transition-all duration-300 group cursor-pointer text-center">
            <div
              class="w-16 h-16 mx-auto bg-blue-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              {{ category.icon }}
            </div>
            <h3 class="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">{{
              category.name }}</h3>
            <p
              class="text-sm text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full inline-block group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors">
              {{ category.count }} Kurs</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Courses -->
    <section class="py-24 bg-white relative overflow-hidden">
      <!-- Decoration -->
      <div class="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-[80px]"></div>
      <div class="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/10 rounded-full blur-[100px]"></div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <span class="text-blue-600 font-bold tracking-wider text-sm uppercase mb-2 block">Öwrenip başlaň</span>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Iň Köp Satylan Kurslar</h2>
          </div>
          <button
            class="text-blue-600 font-semibold hover:text-blue-800 flex items-center gap-2 group transition-colors">
            Hemmesini gör
            <span class="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="course in courses" :key="course.title"
            class="bg-white border rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
            <div class="relative h-56 overflow-hidden">
              <img :src="course.image" :alt="course.title"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div
                class="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold shadow-sm uppercase tracking-wide text-blue-700">
                {{ course.category }}
              </div>
              <div
                class="absolute bottom-4 right-4 bg-gray-900/80 backdrop-blur text-white px-3 py-1 rounded-lg text-sm font-bold shadow-sm flex items-center gap-1">
                ⭐️ {{ course.rating }}
              </div>
            </div>

            <div class="p-6">
              <h3
                class="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-snug group-hover:text-blue-600 transition-colors cursor-pointer">
                {{ course.title }}
              </h3>

              <div class="flex items-center gap-3 mb-6">
                <img :src="course.instructorImage"
                  class="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover" />
                <div>
                  <p class="text-sm font-bold text-gray-800">{{ course.instructor }}</p>
                  <p class="text-xs text-gray-500">{{ course.role }}</p>
                </div>
              </div>

              <div class="flex items-center justify-between border-t border-gray-100 pt-5">
                <div class="flex flex-col">
                  <span class="text-xs text-gray-500 font-medium">Bahasy</span>
                  <span class="text-lg font-bold text-blue-600">{{ course.price }}</span>
                </div>
                <div class="flex items-center gap-4 text-gray-500 text-sm">
                  <div class="flex items-center gap-1"><svg class="w-4 h-4" fill="none" stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg> {{ course.duration }}</div>
                  <div class="flex items-center gap-1"><svg class="w-4 h-4" fill="none" stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10">
                      </path>
                    </svg> {{ course.lessons }} Sapak</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

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
    <section class="py-24 bg-white text-center">
      <div class="container mx-auto px-4 max-w-4xl">
        <h2 class="text-4xl font-bold text-gray-900 mb-6">Öwrenmäge başlamaga taýýarmy?</h2>
        <p class="text-xl text-gray-600 mb-10">Müňlerçe kanagatlanan talyplara goşulyň we öz geljegiňize maýa goýuň.
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

const currentUser = ref<any>(null);

onMounted(() => {
  const userStr = localStorage.getItem('user');
  if (userStr) {
    currentUser.value = JSON.parse(userStr);
  }
});

const stats = ref([
  { label: 'Aktiw Okuwçy', value: '15k+' },
  { label: 'Bilim Berijiler', value: '120+' },
  { label: 'Jemi Kurslar', value: '500+' },
  { label: 'Üstünlik', value: '98%' }
]);

const categories = ref([
  { name: 'Programirleme', icon: '💻', count: 120 },
  { name: 'Dizajn', icon: '🎨', count: 85 },
  { name: 'Biznes', icon: '💼', count: 64 },
  { name: 'Marketing', icon: '📢', count: 42 },
  { name: 'Fotografiýa', icon: '📷', count: 30 },
  { name: 'Şahsy Ösüş', icon: '🌱', count: 55 },
  { name: 'Diller', icon: '🗣️', count: 48 },
  { name: 'Saglyk', icon: '💪', count: 25 },
]);

const courses = ref([
  {
    title: 'Baştan Başlaýanlar Üçin Python',
    category: 'Programirleme',
    price: '200 TMT',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600&auto=format&fit=crop&q=80',
    instructor: 'Aman Amanow',
    instructorImage: 'https://randomuser.me/api/portraits/men/32.jpg',
    role: 'Senior Developer',
    lessons: 24,
    duration: '12 sagat'
  },
  {
    title: 'UI/UX Dizajn Esaslary we Figma',
    category: 'Dizajn',
    price: '250 TMT',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a5638d4b?w=600&auto=format&fit=crop&q=80',
    instructor: 'Jeren Meredowa',
    instructorImage: 'https://randomuser.me/api/portraits/women/44.jpg',
    role: 'Product Designer',
    lessons: 18,
    duration: '8 sagat'
  },
  {
    title: 'Sanly Marketing we SMM Strategiýasy',
    category: 'Marketing',
    price: '180 TMT',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=600&auto=format&fit=crop&q=80',
    instructor: 'Guwanç Saparow',
    instructorImage: 'https://randomuser.me/api/portraits/men/85.jpg',
    role: 'Marketing Expert',
    lessons: 32,
    duration: '16 sagat'
  }
]);
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