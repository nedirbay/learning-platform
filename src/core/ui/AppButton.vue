<template>
  <el-button :type="type" :loading="loading" @click="$emit('click')">
    <slot />
  </el-button>
</template>

<script setup lang="ts">
defineProps<{
  type?: 'primary' | 'success' | 'danger';
  loading?: boolean;
}>();
</script>