<template>
  <template v-for="item in menus" :key="item.id">
    <template v-if="item.children && item.children.length">
      <el-sub-menu :index="item.id">
        <template #title>
          <MenuContent :data="item" />
        </template>
        <el-menu-item v-for="child in item.children" :index="child.path" :key="child.id">
          <MenuContent :data="child" isChildren />
        </el-menu-item>
      </el-sub-menu>
    </template>
    <template v-else>
      <el-menu-item :index="item.path">
        <MenuContent :data="item" />
      </el-menu-item>
    </template>
  </template>
</template>

<script setup lang="ts">
import MenuContent from './menu-content.vue'

interface IProps {
  menus: any[]
}

defineProps<IProps>()
</script>

<style lang="scss" scoped>
.el-menu-item {
  &:hover {
    background-color: transparent;
  }
}

.is-active {
  :deep(.el-sub-menu__title) {
    color: white;
    padding-right: 10px;
  }
  .content {
    color: white;
    background-color: var(--el-menu-active-color);
  }
}
.el-menu-item {
  &.is-active {
    color: var(--el-menu-active-color);
    .content-sub i {
      background-color: var(--el-menu-active-color);
      border-color: transparent;
    }
  }
}
</style>
