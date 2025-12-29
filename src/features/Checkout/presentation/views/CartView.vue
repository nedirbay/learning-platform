<template>
    <div class="container mx-auto px-4 py-8">
        <h1 class="text-2xl font-bold mb-6">Sebet</h1>
        <div class="flex flex-col lg:flex-row gap-8">
            <div class="lg:w-2/3">
                <!-- Cart Items -->
                <div v-if="state.items.length === 0" class="bg-white rounded-lg shadow p-6 mb-4">
                    <p class="text-gray-500">Sebet boş</p>
                </div>
                <div v-else class="space-y-4">
                    <div v-for="item in state.items" :key="item.courseId"
                        class="bg-white rounded-lg shadow p-6 flex justify-between items-center">
                        <div>
                            <h3 class="font-bold">{{ item.title }}</h3>
                        </div>
                        <span class="font-bold">{{ item.price }} TMT</span>
                    </div>
                </div>
            </div>
            <div class="lg:w-1/3">
                <div class="bg-white rounded-lg shadow p-6">
                    <h3 class="text-lg font-bold mb-4">Jemi</h3>
                    <div class="flex justify-between mb-4">
                        <span>Jemi Töleg:</span>
                        <span class="font-bold text-xl">{{ state.total }} TMT</span>
                    </div>
                    <button @click="vm.checkout()" :disabled="state.items.length === 0"
                        class="w-full bg-green-600 text-white py-3 rounded font-bold disabled:opacity-50">Töleg
                        Etmek</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useViewModel, useStateFlow } from '@/core/mvvm/useViewModel';
import { CartViewModel } from '../viewmodel/CartViewModel';

const vm = useViewModel(CartViewModel);
const state = useStateFlow(vm.uiState);
</script>
