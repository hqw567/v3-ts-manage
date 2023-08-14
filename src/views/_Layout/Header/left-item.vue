<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
console.log('router :>> ', router)
</script>

<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">基本设置</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">默认引导</a></el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<style lang="scss" scoped></style>
