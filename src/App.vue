<template>
  <nav>
    <mall-nav-bar v-if="pageShow"></mall-nav-bar>
    <mall-footer class="footer" v-if="pageShow"></mall-footer>
  </nav>
  <router-view />
</template>

<script lang="ts" setup>
import { ref, onMounted, watchEffect, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
// 组件导入
import MallNavBar from './components/MallNavBar.vue';
import MallFooter from './components/MallFooter.vue';
// 路由信息
const router = useRouter() // 相当于$router 
const route = useRoute() // 相当于$route
// 定义变量
let pageShow = ref<boolean>(true)

// 方法

// vue自带事件
onMounted(() => {
  console.log();
})
// 监听当前路由的name变化
watch(
  () => router.currentRoute.value.name,
  () => {
    pageShow.value = route.meta.page as boolean
  }
)

</script>


<style lang="less">
body,
#app {
  padding: 0;
  margin: 0;
  background-color: #EEEEEE;
}

nav {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .footer {
    position: fixed;
    bottom: 0;
  }
}
</style>
