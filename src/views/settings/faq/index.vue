<script setup lang="ts">
import editTerms from '@/components/edit-terms/index.vue'

const title = '常见问题'
const data = {
  title: 'Hello',
  content: '哈哈哈',
}
</script>

<template>
  <editTerms :title="title" :data="data" />
</template>

<style lang="scss" scoped></style>
