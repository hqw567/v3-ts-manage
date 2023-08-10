<template>
  <div class="tabs-container">
    <div class="tab-item" v-for="item in list" :key="item.path" @click="handleClick(item)">
      <span :class="['router-name', { active: active === item.path }]">{{ item.meta.name }}</span>
      <el-icon @click.stop="handleDelete(item)"><i-ep-close color="#999" /></el-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const active = ref(route.path)
const list = ref([])

onMounted(() => {
  if (!~list.value.findIndex((item) => item.path === route.path)) {
    list.value.push({ ...route })
  }
  active.value = route.path
})

watch(
  () => route.path,
  () => {
    if (!~list.value.findIndex((item) => item.path === route.path)) {
      list.value.push({ ...route })
    }
    active.value = route.path
  },
)

const handleClick = (item: any) => {
  router.push({ ...item })
}

const handleDelete = (item: any) => {
  if (list.value.length === 1) return false
  const index = list.value.findIndex((li) => li.path === item.path)
  if (~index) {
    if (item.path === active.value) {
      if (index < list.value.length - 1) {
        router.push({ ...(list.value[index + 1] || {}) })
      } else {
        router.push({ ...(list.value[index - 1] || {}) })
      }
    }
    list.value.splice(index, 1)
  }
}
</script>

<style lang="scss" scoped>
.tabs-container {
  display: flex;
  align-items: center;
  width: 100%;
  overflow-x: auto;
  padding-bottom: 20px;
  &::-webkit-scrollbar {
    display: none;
  }
  .tab-item {
    display: flex;
    align-items: center;
    background-color: white;
    padding: 4px 10px;
    margin-right: 6px;
    cursor: pointer;
    color: #999;
    .router-name {
      width: 5em;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 12px;
      &.active {
        color: black;
      }
    }
    .el-icon {
      margin-left: 2px;
      &:hover {
        background-color: #eee;
      }
    }
  }
}
</style>
