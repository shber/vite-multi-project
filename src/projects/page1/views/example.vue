<!--
 * @Author: Shber
 * @Date: 2024-01-19 14:59:48
 * @LastEditors: Shber
 * @LastEditTime: 2024-01-22 20:37:33
 * @Description: 
-->
<template>
  <HelloWorld/>
  <div id="img1">
    <el-image :src="IMG" alt="img" />
  </div>
  <el-button type="primary"><el-icon><i-ep-Search /></el-icon>按钮央视</el-button>
  1233
  {{testName}}
</template>
<script setup>
  import { ref } from 'vue'
  import HelloWorld from '@/components/HelloWorld.vue'
  import IMG from '@/assets/img/no-data.png'

  const testName = ref('案例1')
</script>

<style lang="scss" scoped>
#img1{background-color: #f60;}
</style>