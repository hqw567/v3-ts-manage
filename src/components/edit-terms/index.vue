<script setup lang="ts">
import sectionTitle from '@/components/common/section-title.vue'
import edit from './edit.vue'
import baseHeader from './base-header.vue'
import preview from './preview.vue'
import type { HeaderButtonType } from './base-header.vue'

interface IProps {
  title: string
  data: { title: string; content: string }
}

const isEdit = ref(false)

const props = defineProps<IProps>()

const editRef = ref<InstanceType<typeof edit>>()
const previewData = ref<{ title: string; content: string }>({
  title: shallowRef(props.data.title).value,
  content: shallowRef(props.data.content).value,
})

const handleHeaderClick = (type: HeaderButtonType) => {
  if (type === 'edit') {
    isEdit.value = true
  } else if (type === 'cancel') {
    isEdit.value = false
  } else if (type === 'save') {
    isEdit.value = false
    // 处理保存事件
    if (editRef.value?.editData) {
      previewData.value = editRef.value?.editData
    }
  }
}
</script>

<template>
  <div class="space-y-5">
    <baseHeader :is-edit="isEdit" @onHeaderClick="handleHeaderClick" />
    <div class="container-padding h-full w-full bg-white">
      <sectionTitle :title="title"></sectionTitle>
      <edit v-if="isEdit" :data="previewData" ref="editRef" />
      <preview v-else :data="previewData" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
