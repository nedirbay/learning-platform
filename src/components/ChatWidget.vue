<template>
    <div class="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        <!-- Chat Window -->
        <Transition enter-active-class="transition ease-out duration-300"
            enter-from-class="transform opacity-0 translate-y-10 scale-95"
            enter-to-class="transform opacity-100 translate-y-0 scale-100"
            leave-active-class="transition ease-in duration-200"
            leave-from-class="transform opacity-100 translate-y-0 scale-100"
            leave-to-class="transform opacity-0 translate-y-10 scale-95">
            <div v-if="isOpen"
                class="mb-4 w-[350px] sm:w-[380px] bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-slate-700 overflow-hidden flex flex-col max-h-[500px]">
                <!-- Header -->
                <div class="p-4 bg-blue-600 text-white flex justify-between items-center">
                    <div class="flex items-center gap-3">
                        <div class="relative">
                            <span
                                class="text-2xl h-10 w-10 bg-white/20 rounded-full flex items-center justify-center">🤖</span>
                            <span
                                class="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-blue-600 rounded-full"></span>
                        </div>
                        <div>
                            <h3 class="font-bold">Kömekçi Bot</h3>
                            <p class="text-xs text-blue-100">Online</p>
                        </div>
                    </div>
                    <button @click="isOpen = false" class="text-white/80 hover:text-white transition-colors">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>

                <!-- Messages -->
                <div class="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px] bg-gray-50 dark:bg-slate-900"
                    ref="messagesContainer">
                    <div v-for="msg in messages" :key="msg.id" class="flex"
                        :class="msg.sender === 'user' ? 'justify-end' : 'justify-start'">
                        <div class="max-w-[80%] px-4 py-2 rounded-2xl text-sm leading-relaxed"
                            :class="msg.sender === 'user'
                                ? 'bg-blue-600 text-white rounded-tr-none'
                                : 'bg-white dark:bg-slate-700 text-gray-800 dark:text-gray-200 shadow-sm rounded-tl-none border border-gray-100 dark:border-slate-600'">
                            {{ msg.text }}
                            <p class="text-[10px] opacity-70 mt-1 text-right"
                                :class="msg.sender === 'user' ? 'text-blue-100' : 'text-gray-400'">{{ msg.time }}</p>
                        </div>
                    </div>

                    <div v-if="isTyping" class="flex justify-start animate-fade-in-up">
                        <div
                            class="bg-white dark:bg-slate-700 p-3 rounded-2xl rounded-tl-none border border-gray-100 dark:border-slate-600 flex gap-1">
                            <span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                            <span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                            <span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></span>
                        </div>
                    </div>
                </div>

                <!-- Input -->
                <div class="p-3 bg-white dark:bg-slate-800 border-t border-gray-100 dark:border-slate-700">
                    <form @submit.prevent="sendMessage" class="flex gap-2">
                        <input v-model="newMessage" type="text" placeholder="Soragyňyzy ýazyň..."
                            class="flex-1 px-4 py-2 rounded-full bg-gray-100 dark:bg-slate-900 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500 transition-all border border-transparent focus:bg-white dark:focus:bg-slate-900" />
                        <button type="submit" :disabled="!newMessage.trim()"
                            class="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-blue-500/30 flex items-center justify-center w-10 h-10">
                            <svg class="w-5 h-5 translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </Transition>

        <!-- Toggle Button -->
        <button @click="isOpen = !isOpen"
            class="group relative w-14 h-14 bg-blue-600 text-white rounded-full shadow-xl hover:bg-blue-700 transition-all transform hover:scale-110 flex items-center justify-center"
            :class="{ 'rotate-90': isOpen }">
            <!-- Ping animation for attention -->
            <span v-if="!isOpen" class="absolute inset-0 rounded-full bg-blue-600 animate-ping opacity-20"></span>

            <svg v-if="!isOpen" class="w-7 h-7 transition-transform group-hover:rotate-12" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z">
                </path>
            </svg>

            <svg v-else class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </button>
    </div>
</template>

<script setup lang="ts">
import { ref, nextTick, watch } from 'vue';

const isOpen = ref(false);
const isTyping = ref(false);
const newMessage = ref('');
const messagesContainer = ref<HTMLElement | null>(null);

const messages = ref([
    { id: 1, text: 'Salam! Men öwreniş platformasynyň kömekçisi. Size nähili kömek edip bilerin? 👋', sender: 'bot', time: 'Indi' }
]);

const scrollToBottom = async () => {
    await nextTick();
    if (messagesContainer.value) {
        messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
    }
};

watch(isOpen, (val) => {
    if (val) scrollToBottom();
});

const getBotResponse = (text: string) => {
    const lowerText = text.toLowerCase();

    if (lowerText.includes('salam') || lowerText.includes('hi')) {
        return 'Salam! Size näme barada maglumat gerek?';
    }
    if (lowerText.includes('kurs') || lowerText.includes('sapak')) {
        return 'Bizde Programirleme, Dizajn, Marketing we başga-da köp ugurlar boýunça kurslar bar. "Kurslar" sahypasyndan ählisini görüp bilersiňiz.';
    }
    if (lowerText.includes('bahasy') || lowerText.includes('töleg')) {
        return 'Kurslaryň bahalary 100 TMT-den başlaýar. Käbir başlangyç kurslarymyz mugt!';
    }
    if (lowerText.includes('sertifikat') || lowerText.includes('diplom')) {
        return 'Hawa, kursy üstünlikli tamamlanymyzdan soň size resmi sertifikat berilýär 🎓';
    }
    if (lowerText.includes('mugallym') || lowerText.includes('kim')) {
        return 'Biziň mugallymlarymyz öz ugurlary boýunça tejribeli hünärmenlerdir.';
    }
    if (lowerText.includes('sag bol') || lowerText.includes('sagbol')) {
        return 'Sizede sag boluň! Üstünlik arzuw edýärin! 🚀';
    }

    return 'Gynansakda men bu soraga doly düşünmedim. Ýöne siz "goldaw" ýazyp operator bilen baglanyşyp bilersiňiz.';
};

const sendMessage = () => {
    if (!newMessage.value.trim()) return;

    // Add user message
    messages.value.push({
        id: Date.now(),
        text: newMessage.value,
        sender: 'user',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });

    const userText = newMessage.value;
    newMessage.value = '';
    scrollToBottom();

    // Simulate thinking delay
    isTyping.value = true;
    setTimeout(() => {
        const responseText = getBotResponse(userText);
        messages.value.push({
            id: Date.now() + 1,
            text: responseText,
            sender: 'bot',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        });
        isTyping.value = false;
        scrollToBottom();
    }, 1500);
};
</script>
