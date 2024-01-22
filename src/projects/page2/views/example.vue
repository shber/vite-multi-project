<!--
 * @Author: Shber
 * @Date: 2024-01-19 14:59:48
 * @LastEditors: Shber
 * @LastEditTime: 2024-01-22 20:39:40
 * @Description: 
-->
<template>
  <HelloWorld/>
  <div id="img2">
    212
    <!-- <img src="/src/assets/img/no-data.png" alt="img" > -->
  </div>
  <el-button type="primary"><el-icon><i-ep-ChatLineRound/></el-icon>{{testName}}</el-button>

</template>
<script setup>
  import { ref } from 'vue'
  import HelloWorld from '@/components/HelloWorld.vue'
  const testName = ref('案例2')
</script>

<style lang="scss" scoped>
#img2{background-color: #e00e00;}
</style>