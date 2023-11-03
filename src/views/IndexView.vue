<template>
  <div class="index">
    <h2>{{ title }}</h2>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const title = ref<string>('Vue 3')
</script>