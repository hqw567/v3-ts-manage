<script setup lang="ts">
import { UserFilled } from '@element-plus/icons-vue'
</script>

<template>
  <div>
    <el-dropdown>
      <div class="flex items-center justify-center space-x-2">
        <el-avatar :icon="UserFilled" />
        <span>admin</span>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item divided>退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<style lang="scss" scoped></style>
