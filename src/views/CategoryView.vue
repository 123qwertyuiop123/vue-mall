<!-- 分类 -->
<template>
  <div class="app">
    <!-- 导航栏 -->
    <ul class="nav">
      <li v-for="(item, index) in navList" :key="index"
        :class="['nav-item', navIndex == index ? 'nav-item-activity' : '']" @click="navTapClick(item, index)">
        {{ item.name }}
      </li>
    </ul>
    <!-- 详情栏 -->
    <ul class="good">
      <li v-for="(item, index) in goodList" :key="index" class="good-item">
        <img :src="item.image" alt="">
        <div>{{ item.name }}</div>
      </li>
    </ul>
  </div>
</template>
  
<script lang="ts" setup>
import { nextTick, onMounted, reactive, ref } from "vue";
const ImageBaseUrl = ref<string>('https://www.macrozheng.com/app/images/mainpage/')
let navIndex = ref<number>(0)
let navList = reactive<Array<any>>([
  {
    name: "衣服",
    ref: ''
  },
  {
    name: "衣服",
    ref: ''
  },
  {
    name: "衣服",
    ref: ''
  },
  {
    name: "衣服",
    ref: ''
  },
  {
    name: "衣服",
    ref: ''
  },
  {
    name: "衣服",
    ref: ''
  }
])
let goodList = reactive<Array<any>>([
  {
    name: '裤子',
    image: ImageBaseUrl.value + 'p0.png'
  },
  {
    name: '裤子',
    image: ImageBaseUrl.value + 'p1.png'
  },
  {
    name: '裤子',
    image: ImageBaseUrl.value + 'p2.png'
  },
  {
    name: '裤子',
    image: ImageBaseUrl.value + 'p3.png'
  },
  {
    name: '裤子',
    image: ImageBaseUrl.value + 'p4.png'
  },
  {
    name: '裤子',
    image: ImageBaseUrl.value + 'p5.png'
  },
  {
    name: '裤子',
    image: ImageBaseUrl.value + 'p6.png'
  }
])

// ref 获取单个元素
let test = ref<any>(null)
// ref 获取多个元素
const scrollItem = ref<any>(new Map());
const navTapClick = (item: any, index: any): void => {
  navIndex.value = index
  // 请求数据 获取商品数据
  goodList = [
  {
    name: '衣服',
    image: ImageBaseUrl.value + 'p0.png'
  },
  {
    name: '衣服',
    image: ImageBaseUrl.value + 'p1.png'
  },
  {
    name: '衣服',
    image: ImageBaseUrl.value + 'p2.png'
  },
  {
    name: '衣服',
    image: ImageBaseUrl.value + 'p3.png'
  },
  {
    name: '衣服',
    image: ImageBaseUrl.value + 'p4.png'
  },
  {
    name: '衣服',
    image: ImageBaseUrl.value + 'p5.png'
  },
  {
    name: '衣服',
    image: ImageBaseUrl.value + 'p6.png'
  }
  ]
}
</script>
  
<style lang="less" scoped>
.app {
  width: 100%;
  height: 100%;
  display: flex;
}

ul {
  padding: 0;
  margin: 0;

  li {
    list-style: none;
  }
}

.nav{
  .nav-item {
  width: 100px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F2F2F2;
}

.nav-item-activity {
  background-color: #fff;
  color: green;
}
}
.good{
  display: flex;
  flex-wrap: wrap;
  .good-item{
    width: 125px;
    height: 100px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px;
  }
}
</style>