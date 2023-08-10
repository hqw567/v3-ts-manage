<template>
  <div class="content" v-if="!isChildren">
    <el-icon>
      <component :is="data.meta.icon" />
    </el-icon>
    <span>{{ data.meta.name }}</span>
  </div>

  <div v-else class="content-sub">
    <i></i><span>{{ data.meta.name }}</span>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  data: any
  isChildren?: boolean
}

defineProps<IProps>()
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  align-items: center;
  width: 100%;
  padding-left: 20px;
  box-sizing: border-box;
  border-radius: 50px;
  line-height: 40px;
}
.content-sub {
  padding-left: 20px;
  display: flex;
  align-items: center;

  i {
    display: block;
    // background-color: var(--el-menu-active-color);
    border-radius: 9999px;
    width: 6px;
    height: 6px;
    margin-right: 7px;
    border: 1px solid var(--el-menu-text-color);
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
