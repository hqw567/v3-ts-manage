<script setup lang="ts">
const props = defineProps<{
  title: string
}>()
</script>

<template>
  <div class="flex items-center">
    <i class="mr-2 block h-4 w-1 bg-primary-500"></i>
    <div class="text-sm font-bold text-slate-900">{{ props.title }}</div>
  </div>
</template>

<style lang="scss" scoped></style>
