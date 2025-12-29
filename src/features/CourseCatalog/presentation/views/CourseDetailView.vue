<template>
    <div class="min-h-screen bg-gray-50 pb-12">
        <!-- Header/Navigation Placeholder -->
        <div class="bg-white shadow-sm mb-8">
            <div class="container mx-auto px-4 h-16 flex items-center">
                <button @click="$router.back()"
                    class="text-gray-600 hover:text-blue-600 flex items-center gap-2 font-medium">
                    ← Yza
                </button>
            </div>
        </div>

        <div v-if="state.isLoading" class="container mx-auto px-4 text-center py-20">
            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p class="text-gray-500">Kurs maglumatlary ýüklenýär...</p>
        </div>

        <div v-else-if="state.error" class="container mx-auto px-4 text-center py-20">
            <div class="bg-red-50 text-red-600 p-4 rounded-lg inline-block">
                {{ state.error }}
            </div>
        </div>

        <div v-else-if="state.course" class="container mx-auto px-4">
            <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
                <!-- Course Header -->
                <div class="relative h-96">
                    <img :src="state.course.thumbnailUrl || 'https://via.placeholder.com/1200x400'"
                        class="w-full h-full object-cover">
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent flex items-end">
                        <div class="p-8 md:p-12 text-white max-w-4xl">
                            <span class="inline-block px-3 py-1 bg-blue-600 rounded-lg text-sm font-bold mb-4">{{
                                state.course.categories?.[0] || 'Kurs' }}</span>
                            <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ state.course.title }}</h1>
                            <p class="text-lg text-gray-200 mb-6">{{ state.course.description }}</p>

                            <div class="flex items-center gap-6 text-sm font-medium">
                                <div class="flex items-center gap-2">
                                    <img :src="`https://ui-avatars.com/api/?name=${state.course.instructor}`"
                                        class="w-8 h-8 rounded-full border border-white/50">
                                    <span>{{ state.course.instructor }}</span>
                                </div>
                                <div class="flex items-center gap-1 text-yellow-400">
                                    <span>⭐ {{ state.course.rating }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Course Content -->
                <div class="grid md:grid-cols-3 gap-12 p-8 md:p-12">
                    <div class="md:col-span-2 space-y-12">
                        <!-- About -->
                        <section>
                            <h2 class="text-2xl font-bold text-gray-900 mb-6">Kurs Barada</h2>
                            <div class="prose max-w-none text-gray-600">
                                <p class="mb-4">Bu kurs size {{ state.course.title }} boýunça giňişleýin bilim bermek
                                    üçin niýetlenendir.
                                    Kursyň dowamynda siz nazary we amaly bilimleri alarsyňyz.</p>

                                <h3 class="text-lg font-bold text-gray-900 mt-6 mb-3">Näme öwrenersiňiz?</h3>
                                <ul class="grid sm:grid-cols-2 gap-4">
                                    <li class="flex items-start gap-2">
                                        <span class="text-green-500 mt-1">✓</span>
                                        <span>Esasy düşünjeler we terminologiýa</span>
                                    </li>
                                    <li class="flex items-start gap-2">
                                        <span class="text-green-500 mt-1">✓</span>
                                        <span>Real durmuşdan mysallar</span>
                                    </li>
                                    <li class="flex items-start gap-2">
                                        <span class="text-green-500 mt-1">✓</span>
                                        <span>Amaly işler we taslamalar</span>
                                    </li>
                                    <li class="flex items-start gap-2">
                                        <span class="text-green-500 mt-1">✓</span>
                                        <span>Hünärmen derejesine çykmak</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <!-- Blog Section Mock -->
                        <section>
                            <h2 class="text-2xl font-bold text-gray-900 mb-6">Course Blog</h2>
                            <div class="bg-gray-50 rounded-xl p-6 border border-gray-100">
                                <h3 class="font-bold text-lg mb-2">Täze update geldi! v2.0</h3>
                                <p class="text-gray-600 text-sm mb-4">Kursyň mazmuny täzelendi, indi has köp amaly işler
                                    bar...</p>
                                <button class="text-blue-600 text-sm font-medium hover:underline">Doly oka</button>
                            </div>
                        </section>
                    </div>

                    <!-- Sidebar -->
                    <div class="relative">
                        <div class="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 md:sticky md:top-24">
                            <div class="mb-8">
                                <span class="text-gray-500 text-sm font-medium">Bahasy</span>
                                <div class="text-4xl font-bold text-gray-900 mt-1">{{ state.course.price }} TMT</div>
                            </div>

                            <div class="space-y-4 mb-8">
                                <button @click="startLearning"
                                    class="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-all transform hover:-translate-y-1">
                                    Öwrenmäge Başla
                                </button>
                                <button
                                    class="w-full py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-colors">
                                    Sebede Goş
                                </button>
                            </div>

                            <div class="space-y-4 pt-6 border-t border-gray-100">
                                <div class="flex items-center gap-3 text-sm text-gray-600">
                                    <span>🎥</span>
                                    <span>24 sagat wideo</span>
                                </div>
                                <div class="flex items-center gap-3 text-sm text-gray-600">
                                    <span>📁</span>
                                    <span>15 sany goşmaça faýl</span>
                                </div>
                                <div class="flex items-center gap-3 text-sm text-gray-600">
                                    <span>📱</span>
                                    <span>Mobil we kompýuter</span>
                                </div>
                                <div class="flex items-center gap-3 text-sm text-gray-600">
                                    <span>🏆</span>
                                    <span>Kurs tamamlananda sertifikat</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useViewModel, useStateFlow } from '@/core/mvvm/useViewModel';
import { CourseDetailViewModel } from '../viewmodel/CourseDetailViewModel';
import { useRoute, useRouter } from 'vue-router';
import { onMounted } from 'vue';

const vm = useViewModel(CourseDetailViewModel);
const state = useStateFlow(vm.uiState);
const route = useRoute();
const router = useRouter();

onMounted(() => {
    const courseId = route.params.courseId as string;
    if (courseId) {
        vm.loadCourse(courseId);
    }
});

const startLearning = () => {
    const isLoggedIn = !!localStorage.getItem('user');
    const courseId = state.value.course?.id;

    if (isLoggedIn) {
        router.push(`/learning/${courseId}`);
    } else {
        router.push(`/login?redirect=/learning/${courseId}`);
    }
}
</script>
