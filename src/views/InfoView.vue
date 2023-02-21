<!-- 我的 -->
<template>
  <div class="app">
    <div class="bar-box">
      <div v-for="item in 20" :key="item" class="rect"></div>
      <div class="bar" :style="{'width':width+'%'}"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

let width = ref('87')

</script>

<style lang="less" scoped>
  .bar-box{
    width: 100%;
    height: 30px;
    background-color: #000000;
    display: flex;
    justify-content: space-around;
    position: relative;
    animation: 2s ease-in-out 1s test;
    
  }
  .rect{
    width: 2%;
    height: 100%;
    background-color: gainsboro;
    z-index: 10;
  }
  .bar{
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(to right, red, blue);;
    height: 100%;
    opacity: 1;
    width: 63%;
  }
  @keyframes test{
    0%{
      width: 0%;
    }
    100%{
      width: 100%;
    }
  }
</style>