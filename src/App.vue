<script setup lang="ts">
import { onBeforeMount } from "vue";
import { RouterView } from "vue-router";

onBeforeMount(() => {
  if (!localStorage.getItem("user-locale")) {
    localStorage.setItem("user-locale", "tm");
  }
});
</script>

<template>
  <RouterView />
</template>
