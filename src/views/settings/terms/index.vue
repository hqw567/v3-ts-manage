<script setup lang="ts">
import editTerms from '@/components/edit-terms/index.vue'

const title = '用户协议'
const data = {
  title: 'Hello',
  content: '哈哈哈',
}
</script>

<template>
  <editTerms :title="title" :data="data" />
</template>

<style lang="scss" scoped></style>
