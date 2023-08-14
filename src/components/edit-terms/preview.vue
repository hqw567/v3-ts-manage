<script setup lang="ts">
export interface IProps {
  data: { title: string; content: string }
}

defineProps<IProps>()
</script>

<template>
  <div class="mt-6 h-[600px] space-y-6 overflow-auto pl-4">
    <div class="flex items-center">
      <div class="text-2xl">{{ data.title }}</div>
    </div>
    <div class="">
      <div class="mt-4" v-html="data.content"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
