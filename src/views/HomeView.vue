<!-- 首页 -->
<template>
  <div class="home">
    <!-- 轮播 -->
    <el-carousel height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small justify-center" text="2xl">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <!-- 功能区 -->
    <div class="func-box">
      <div v-for="(item, index) in funcList" :key="index" class="item" @click="goto(index)">
        <img :src="item.image" alt="">
        {{ item.name }}
      </div>
    </div>
    <!-- 公告 -->
    <div class="notify-box">
      <img :src="notifySrc" alt="">
      <div class="notify" :title="notify">{{ notify }}</div>
      <el-button size="mini" class="btn" @click="notifyDetail">详情</el-button>
    </div>
    <!-- 商品 -->
    <HomeItem title="品牌制造商" :more="true" :list-data="brandMakingList" :type-str="'brandMaking'"></HomeItem>
  </div>
</template>

<script lang="ts" setup>

import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import HomeItem from "../components/HomeItem.vue"

const router = useRouter()
let ImageBaseUrl = ref<string>('https://www.macrozheng.com/app/images/mainpage/')
let notifySrc = ImageBaseUrl.value + ref<string>('u76.png').value
// 功能区列表
let funcList = reactive<Array<any>>([
  {
    name: '话题',
    image: ImageBaseUrl.value + 'u60.png',
    router: '/about'
  },
  {
    name: '优选',
    image: ImageBaseUrl.value + 'u65.png',
    router: '/about'
  },
  {
    name: '特惠',
    image: ImageBaseUrl.value + 'u69.png',
    router: '/about'
  },
  {
    name: '签到',
    image: ImageBaseUrl.value + 'u73.png',
    router: '/about'
  }
])

function goto(index: number): void {
  let link = funcList[index].router
  console.log(link);
  switch (index) {
    case 0:
      router.push(link)
      break;
    case 1:
      router.push(link)
      break;
    case 2:
      router.push(link)
      break;
    case 3:
      router.push(link)
      break;
    default:
      break;
  }
}
// 公告
let notify = ref('自营家电清洗服务上线')
function notifyDetail():void{
  router.push('')
}

// 商品
// 品牌制造商
let brandMakingList = reactive<Array<any>>([
  {
    name:'WMF制造商',
    image:ImageBaseUrl.value+'u87.png',
    price:10,
    route:''
  },
  {
    name:'WMF制造商',
    image:ImageBaseUrl.value+'u87.png',
    price:100,
    route:''
  },
  {
    name:'WMF制造商',
    image:ImageBaseUrl.value+'u87.png',
    price:9,
    route:''
  },
  {
    name:'WMF制造商',
    image:ImageBaseUrl.value+'u87.png',
    price:9.9,
    route:''
  }
])
// 秒杀
let spikeList = reactive<Array<any>>([

])
// 新鲜好物
let freshGoodiesList = reactive<Array<any>>([

])
// 人气推荐
let popularRecomList = reactive<Array<any>>([

])
// 专题精选
let featuredTopicsList = reactive<Array<any>>([

])
// 猜你喜欢
let guessLikeList = reactive<Array<any>>([

])
</script>

<style lang="less" scoped>
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.func-box {
  width: 90%;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  .item {
    display: flex;
    flex-direction: column;
  }
}

.notify-box {
  width: 100%;
  height: 40px;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  img {
    margin-left: 20px;
  }

  .notify{
    width: 240px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .btn {
    margin-right: 20px;
  }
}
</style>
