<template>
  <el-container class="layout-container">
    <el-aside class="aside-menu" width="200px">
      <Menu />
    </el-aside>
    <el-container class="layout-main">
      <el-header>
        <Header></Header>
      </el-header>
      <el-main>
        <!-- <Tabs /> -->
        <div class="layout-content">
          <RouterView />
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { UserFilled } from '@element-plus/icons-vue'
import Header from './Header/index.vue'
import Menu from './Menu/Menu.vue'
import Tabs from './Tabs.vue'
</script>

<style lang="scss" scoped>
.layout-container {
  height: 100vh;
  .layout-main {
    height: calc(100% - 60px);
    .aside-menu {
      height: calc(100vh - 60px);
      overflow-y: auto;
      &::-webkit-scrollbar {
        display: none;
      }
    }

    .el-main {
      background-color: rgb(246, 246, 246);
      .layout-content {
        // height: calc(100% - 44.5px);
        height: 100%;
        overflow: auto;
      }
    }
  }
}
</style>
