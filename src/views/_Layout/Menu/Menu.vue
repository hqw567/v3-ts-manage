<template>
  <el-menu router :default-active="defaultActive">
    <div class="logo">
      <img class="h-full" src="https://houzhiai.com/assets/img/logo-white.svg" alt="logo" />
    </div>
    <MenuItem :menus="menus" />
  </el-menu>
</template>

<script setup lang="ts">
import { baseRoutes, buildMenus } from '@/router/routes'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import MenuItem from './menu-item.vue'

const route = useRoute()
const defaultActive = ref(route.path.slice(1))
const menus = ref(buildMenus(baseRoutes))

watch(
  () => route.path,
  () => {
    defaultActive.value = route.path.slice(1)
  },
)
</script>

<style lang="scss" scoped>
.logo {
  height: var(--el-menu-item-height);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--el-menu-active-color);
  img {
    width: 124px;
    height: 34px;
    object-fit: cover;
  }
}
.el-menu {
  min-height: 100%;
  border-right: none;
}
</style>
