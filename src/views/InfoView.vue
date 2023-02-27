<!-- 我的 -->
<template>
  <div class="app">
    <div class="top">
      <img :src="ImageBaseUrl + 'u208.png'" alt="">
      <div class="box">
        <div>{{ info.name }}</div>
        <div class="level">{{ info.level }}</div>
      </div>
      <img :src="ImageBaseUrl + 'u211.png'" alt="">
    </div>
    <div class="second">
      <div class="box" v-for="(item, index) in showList" :key="index">
        <div class="name">{{ item.name }}</div>
        <div class="score">{{ item.point }}</div>
      </div>
    </div>
    <div class="func">
      <div v-for="(item, index) in funcList" :key="index" class="item" @click="funcGoto(index)">
        <img :src="item.image" alt="">
        <div>{{ item.name }}</div>
      </div>
    </div>
    <div class="second">
      <div class="box" v-for="(item, index) in showList2" :key="index">
        <div v-if="!item.image" class="score2">{{ item.point }}</div>
        <img v-else :src="item.image" alt="">
        <div class="name">{{ item.name }}</div>
      </div>
    </div>
    <div class="nav">
      <div v-for="(item, index) in navList" :key="index" class="item" :class="[index == 3?'item-space':'']" @click="navGoto(index)">
        <div class="left">
          <img :src="item.icon" alt="">
          <div>{{ item.name }}</div>
        </div>
        <div class="right">
          <div>{{ item.subTitle }}</div>
          <img :src="ImageBaseUrl + 'u286.png'" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()
const ImageBaseUrl = ref<string>('https://www.macrozheng.com/app/images/mainpage/')
let info = reactive<any>({
  name: 'test',
  level: '黄金会员',
})
let showList = reactive<any>([
  {
    name: '积分',
    point: 100
  },
  {
    name: '优惠卷',
    point: 100
  },
  {
    name: '关注',
    point: 100
  }
])
let funcList = reactive<Array<any>>([
  {
    name: "我的订单",
    image: ImageBaseUrl.value + 'u227.png',
    route: ''
  },
  {
    name: "我的订单",
    image: ImageBaseUrl.value + 'u227.png',
    route: ''
  },
  {
    name: "我的订单",
    image: ImageBaseUrl.value + 'u252.png',
    route: ''
  },
  {
    name: "我的订单",
    image: ImageBaseUrl.value + 'u252.png',
    route: ''
  },
  {
    name: "我的订单",
    image: ImageBaseUrl.value + 'u256.png',
    route: ''
  }
])
let showList2 = reactive<any>([
  {
    name: '我的收藏',
    image: ImageBaseUrl.value + 'u262.png',
    route: ''
  },
  {
    name: '商品',
    point: 100,
    route: ''
  },
  {
    name: '专题',
    point: 100,
    route: ''
  },
  {
    name: '话题',
    point: 100,
    route: ''
  }
])
let navList = reactive<Array<any>>([
  {
    name: '我的足迹',
    icon: ImageBaseUrl.value + 'u293.png',
    subTitle: '10',
    route: ''
  },
  {
    name: '我的评价',
    icon: ImageBaseUrl.value + 'u293.png',
    subTitle: '10',
    route: ''
  },
  {
    name: '地址管理',
    icon: ImageBaseUrl.value + 'u298.png',
    subTitle: '',
    route: ''
  },
  {
    name: '我的会员',
    icon: ImageBaseUrl.value + 'u305.png',
    subTitle: '黄金会员',
    route: ''
  },
  {
    name: '服务中心',
    icon: ImageBaseUrl.value + 'u313.png',
    subTitle: '',
    route: ''
  },
  {
    name: '系统设置',
    icon: ImageBaseUrl.value + 'u318.png',
    subTitle: '',
    route: ''
  }
])

const funcGoto = (index: number): void => {
  router.push(funcList[index].route)
}
const navGoto = (index: number): void => {
  router.push(navList[index].route)
}

</script>

<style lang="less" scoped>
.app {}

.top {
  height: 150px;
  width: 100%;
  background-color: #3F4552;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .box {
    color: #fff;
    margin-left: -60px;

    .level {
      font-size: xx-small;
      padding: 5px;
      border: 1px solid #eee;
      border-radius: 5px;
      margin-top: 5px;
    }
  }

}

.second {
  height: 60px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .box {
    display: flex;
    flex-direction: column;
    align-items: center;

    .name {
      font-size: small;
    }

    .score {
      color: green;
    }

    .score2 {
      color: #666666;
    }
  }

}

.func {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  margin-top: 20px;
  border-bottom: 1px solid #eee;

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: x-small;
  }
}

.nav {
  width: 100%;
  margin-top: 20px;
  .item-space{
    margin-top: 20px;
  }
  .item {
    height: 50px;
    display: flex;
    align-items: center;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    justify-content: space-between;
    .left>img{
      width: 20px;
      margin-right: 15px;
    }
    .right>img{
      margin-left: 15px;
    }
    .left,.right{
      display: flex;
      align-items: center;
      margin: 0 20px;
    }
  }
}
</style>