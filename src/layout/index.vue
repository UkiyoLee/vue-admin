<template>
  <div class="layout">
    {{ $t("layout") }}

    <div
      class="header"
    >
      <el-select
        v-model="language"
        @change="changeLanguage"
        :placeholder="vueI18n.t('select.language.placeholder')"
      >
        <el-option label="English" value="en" />
        <el-option label="简体中文" value="zh" />
      </el-select>
    </div>

    <div class="layout-content">
      <h3>{{ content }}</h3>
      <h4>{{ text }}</h4>
      <h4>{{ message }}</h4>
      <el-button @click="getMock">Click</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BaseResponse } from '@/models/global';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const content = ref('Layout Content');
const text = ref<string>('');
const message = ref<string>('');
const language = ref<string>('en');

const vueI18n = useI18n();

async function getMock() { 
  // 模拟异步请求
  return new Promise(resolve => {
    return setTimeout(() => {
      resolve({
        code: 0,
        data: {
          content: '请求成功'
        },
        message: 'Success'
      });
    }, 1000);
  }).then((resolve: BaseResponse<{ content: string }> | unknown) => {
    const { data = { content: '' } } = resolve as BaseResponse<{ content: string }>;
    text.value = data.content as string;
    message.value = (resolve as BaseResponse<{ content: string }>).message as string;
    console.log(resolve)
  });
}

function changeLanguage(value) {
  vueI18n.locale.value = value;
}
</script>

<style lang="scss" scoped>

</style>