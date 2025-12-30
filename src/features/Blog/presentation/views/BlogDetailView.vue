<template>
    <div class="min-h-screen bg-gray-50 dark:bg-gray-900 pb-12 transition-colors duration-300">
        <!-- Navbar placeholder if needed, usually in layout -->

        <div v-if="state.isLoading" class="flex justify-center items-center h-screen">
            <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600"></div>
        </div>

        <div v-else-if="state.selectedPost" class="w-full">
            <!-- Hero Section -->
            <div class="relative w-full h-[60vh] md:h-[70vh]">
                <img :src="state.selectedPost.coverImage" :alt="state.selectedPost.title"
                    class="w-full h-full object-cover" />
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                <div class="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-20">
                    <div class="max-w-7xl mx-auto">
                        <div class="flex flex-wrap gap-3 mb-6">
                            <span v-for="tag in state.selectedPost.tags" :key="tag"
                                class="px-4 py-1.5 text-sm font-bold bg-indigo-600/90 text-white rounded-full shadow-lg backdrop-blur-sm">
                                {{ tag }}
                            </span>
                        </div>
                        <h1
                            class="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-2xl">
                            {{ state.selectedPost.title }}
                        </h1>
                        <div
                            class="flex flex-col md:flex-row md:items-center text-gray-200 text-base md:text-lg space-y-4 md:space-y-0 md:space-x-8">
                            <div class="flex items-center">
                                <div
                                    class="h-12 w-12 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold mr-4 border-2 border-white/30 text-xl">
                                    {{ state.selectedPost.author.charAt(0) }}
                                </div>
                                <span class="font-medium text-white">{{ state.selectedPost.author }}</span>
                            </div>
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span>{{ formatDate(state.selectedPost.publishedDate) }}</span>
                            </div>
                            <!-- Rating Display -->
                            <div class="flex items-center text-yellow-400">
                                <span class="text-2xl font-bold mr-2 text-white">{{ state.selectedPost.rating || '0.0'
                                    }}</span>
                                <div class="flex">
                                    <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"
                                        :class="Math.round(state.selectedPost.rating || 0) >= i ? 'fill-current' : 'text-gray-500'"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                                <span class="ml-2 text-gray-300 text-sm">({{ state.selectedPost.ratingCount || 0 }}
                                    ses)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Main Content Container -->
            <div class="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-20">

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <!-- Article Content -->
                    <div class="lg:col-span-8">
                        <div class="prose prose-lg md:prose-xl dark:prose-invert max-w-none">
                            <div
                                class="whitespace-pre-line text-gray-800 dark:text-gray-200 leading-relaxed font-serif">
                                {{ state.selectedPost.content }}
                            </div>
                        </div>

                        <!-- Rating Action -->
                        <div
                            class="mt-16 p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                            <h3 class="text-2xl font-bold mb-4 text-center">Bu makalany bahalandyryň</h3>
                            <div class="flex justify-center space-x-2">
                                <button v-for="star in 5" :key="star" @click="rate(star)"
                                    class="focus:outline-none transition-transform hover:scale-125">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10"
                                        :class="(userRating || 0) >= star ? 'text-yellow-400 fill-current' : 'text-gray-300 hover:text-yellow-200'"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </button>
                            </div>
                            <p v-if="userHasRated" class="text-center text-green-600 mt-2 font-medium">Baha bereniňiz
                                üçin sagboluň!</p>
                        </div>

                        <!-- Comments Section -->
                        <div class="mt-16">
                            <h3 class="text-3xl font-bold mb-8 flex items-center">
                                Teswirler
                                <span
                                    class="ml-4 px-3 py-1 bg-gray-200 dark:bg-gray-700 text-base rounded-full text-indigo-600 dark:text-indigo-400">{{
                                    state.comments.length }}</span>
                            </h3>

                            <!-- Comment Form -->
                            <div
                                class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md mb-10 border border-gray-100 dark:border-gray-700">
                                <h4 class="text-lg font-semibold mb-4">Teswir ýaz</h4>
                                <div class="mb-4">
                                    <label
                                        class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Adyňyz</label>
                                    <input v-model="commentName" type="text"
                                        class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white transition-shadow"
                                        placeholder="Adyňyzy giriziň..." />
                                </div>
                                <div class="mb-4">
                                    <label
                                        class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Teswir</label>
                                    <textarea v-model="commentText" rows="4"
                                        class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white transition-shadow"
                                        placeholder="Pikirleriňizi paýlaşyň..."></textarea>
                                </div>
                                <button @click="submitComment"
                                    :disabled="state.isSubmittingComment || !commentText.trim() || !commentName.trim()"
                                    class="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center">
                                    <span v-if="state.isSubmittingComment"
                                        class="mr-2 animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                                    Teswir iber
                                </button>
                            </div>

                            <!-- Comments List -->
                            <div class="space-y-6">
                                <div v-for="comment in state.comments" :key="comment.id"
                                    class="flex space-x-4 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-50 dark:border-gray-700">
                                    <div class="flex-shrink-0">
                                        <img :src="comment.avatar || `https://ui-avatars.com/api/?name=${comment.userName}&background=random`"
                                            alt="" class="h-12 w-12 rounded-full object-cover shadow-sm">
                                    </div>
                                    <div class="flex-1">
                                        <div class="flex items-center justify-between mb-2">
                                            <h5 class="text-lg font-bold text-gray-900 dark:text-white">{{
                                                comment.userName }}</h5>
                                            <span class="text-sm text-gray-500">{{ formatDate(comment.createdAt)
                                                }}</span>
                                        </div>
                                        <p class="text-gray-600 dark:text-gray-300 leading-relaxed">{{ comment.content
                                            }}</p>
                                    </div>
                                </div>
                                <div v-if="state.comments.length === 0" class="text-center py-10 text-gray-500">
                                    Heniz hiç hili teswir ýok. Ilkinji bolup teswir ýazyň!
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Sidebar (Optional for related content, author bio, etc) -->
                    <div class="lg:col-span-4 space-y-8">
                        <!-- Author Card -->
                        <div
                            class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 sticky top-24">
                            <h3 class="text-xl font-bold mb-4 border-b pb-2 dark:border-gray-700">Awtor barada</h3>
                            <div class="flex items-center mb-4">
                                <div
                                    class="h-16 w-16 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-300 font-bold text-2xl mr-4">
                                    {{ state.selectedPost.author.charAt(0) }}
                                </div>
                                <div>
                                    <h4 class="text-lg font-bold">{{ state.selectedPost.author }}</h4>
                                    <p class="text-sm text-gray-500">Tech Writer & Developer</p>
                                </div>
                            </div>
                            <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                Tehnologiýa we programmirlemek barada peýdaly makalalary paýlaşýaryn. Täze zatlary
                                öwrenmegi we öwretmegi gowy görýärin.
                            </p>
                            <button
                                class="w-full py-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-semibold rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors">
                                Yzarla
                            </button>
                        </div>
                    </div>
                </div>

                <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <router-link :to="{ name: 'blog' }"
                        class="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-bold text-lg transition-colors group">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Yza dolan
                    </router-link>
                </div>
            </div>
        </div>

        <div v-else class="text-center py-20">
            <h2 class="text-2xl font-bold text-gray-700 dark:text-gray-200">Post tapylmady</h2>
            <router-link :to="{ name: 'blog' }" class="text-indigo-600 hover:underline mt-4 inline-block">Yza
                dolan</router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useViewModel, useStateFlow } from '@/core/mvvm/useViewModel';
import { BlogViewModel } from '../viewmodel/BlogViewModel';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const vm = useViewModel(BlogViewModel);
const state = useStateFlow(vm.uiState);
const route = useRoute();

const commentName = ref('');
const commentText = ref('');
const userRating = ref(0);
const userHasRated = ref(false);

onMounted(() => {
    const id = route.params.id as string;
    if (id) {
        vm.loadPostDetail(id);
    }
});

function formatDate (date: Date | string) {
    return new Date(date).toLocaleDateString('tk-TM', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function submitComment () {
    if (!commentText.value.trim() || !commentName.value.trim()) return;
    const id = route.params.id as string;
    if (id) {
        vm.addComment(id, commentText.value, commentName.value).then(() => {
            commentText.value = '';
            // commentName.value = ''; // Keep name for convenience
        });
    }
}

function rate (star: number) {
    if (userHasRated.value) return;
    userRating.value = star;
    userHasRated.value = true;
    const id = route.params.id as string;
    if (id) {
        vm.ratePost(id, star);
    }
}
</script>
