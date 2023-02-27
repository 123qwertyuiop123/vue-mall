<template>
  <div class="app">
    <div class="title">
      <div>{{ title }}</div>
      <div v-if="more" class="more-box" @click="goToMore()">
        <div class="text">更多推荐</div>
        <img :src="ImageBaseUrl + 'u82.png'" alt="">
      </div>
    </div>
    <!-- item -->
    <div class="item-box" v-if="typeStr == 'brandMaking'">
      <div v-for="(item, index) in listData" :key="index" class="item">
        <div>{{ item.name }}</div>
        <div class="text">{{ item.price }}元起</div>
        <img :src="item.image" alt="">
        <div class="tips">上新</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

interface Props {
  title?: string,
  more: boolean,
  listData: Array<any>,
  typeStr:string
}
const props = withDefaults(defineProps<Props>(), {
  more: false
})
const router = useRouter()
let ImageBaseUrl = ref<string>('https://www.macrozheng.com/app/images/mainpage/')

// 更多跳转
const goToMore = (): void => {
  router.push('')
}
</script>

<style lang="less" scoped>
.app {
  margin-top: 15px;
  background-color: #fff;

}

.title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;

  .more-box {
    display: flex;
    align-items: center;

    img {
      margin-left: 5px;
    }
  }
}

.text {
  font-weight: 400;
  font-style: normal;
  font-size: 13px;
  color: #999999;
}

.item-box {
  display: flex;
  flex-wrap: wrap;
  padding: 0px 20px;
  justify-content: space-between;

  .item {
    padding-bottom: 10px;
    position: relative;
  }
  .tips{
    width: 46px;
    height: 31px;
    background: url('https://www.macrozheng.com/app/images/mainpage/u89.png');
    background-size: cover;
    position: absolute;
    top: 3px;
    right: 0px;
    color: #fff;
    text-align: center;
    line-height: 25px;
  }
}</style>