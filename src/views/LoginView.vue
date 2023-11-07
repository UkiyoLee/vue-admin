<template>
  <div class="login" :style="`background-image: url(${ Background })`">
    <el-form ref="loginForm" :model="loginForm">

    </el-form>
  </div>
</template>

<script setup lang="ts">
import Background from '@/assets/images/background.jpeg';
import { ref } from 'vue';

const loginForm = ref<{
  username: string;
  password: string;
  remember: boolean;
  code: string;
  UUId: number;
}>({
  username: 'admin',
  password: '123456',
  remember: false,
  code: '200',
  UUId: 0,
})
</script>

<style scoped lang="scss">

</style>