<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
const locale = zhCn
</script>

<template>
  <ElConfigProvider :locale="locale">
    <ElScrollbar>
      <RouterView />
    </ElScrollbar>
  </ElConfigProvider>
</template>

<style scoped></style>
