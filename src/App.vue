<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="app">
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.app {
  .switch {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .view {
    margin-top: 20px;
  }

  @media (max-width: 352px) {
    .switch {
      min-height: 96px;
      flex-direction: column;
      display: flex;
    }
  }
}
</style>
