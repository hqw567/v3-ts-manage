<script setup lang="ts">
defineProps<{
  title?: string
  isEdit: boolean
}>()

const emit = defineEmits(['onHeaderClick'])

export type HeaderButtonType = 'edit' | 'save' | 'cancel'

const handleBtnClick = (type: HeaderButtonType) => {
  emit('onHeaderClick', type)
}
</script>

<template>
  <div class="container-padding flex h-14 w-full items-center justify-between bg-white">
    <div class="font-bold">
      {{ title ? title : isEdit ? '编辑内容' : '预览内容' }}
    </div>
    <div v-if="isEdit">
      <el-button @click="handleBtnClick('cancel')">取消</el-button>
      <el-button type="danger" @click="handleBtnClick('save')">保存修改</el-button>
    </div>
    <div v-else>
      <el-button type="primary" @click="handleBtnClick('edit')">编辑</el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
