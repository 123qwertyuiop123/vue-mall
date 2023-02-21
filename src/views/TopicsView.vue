<!-- 专题 -->
<template>
    <div class="app">
        <!-- 顶部 -->
        <div class="top-box">
            <div v-for="(item, index) in topicsTitltList" :key="index" class="item" @click="goto(index)">
                <img :src="item.image" alt="">
                <div :class="['name', index == tabIndex ? 'name-activity' : '']">{{ item.name }}</div>
            </div>
        </div>
        <!-- 专题组件 -->
        <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
            <li v-for="(item,index) in topicsList" :key="index" class="infinite-list-item"><TopicsItem :item="item"></TopicsItem></li>
        </ul>
        
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import TopicsItem from "../components/TopicsItem.vue";

const ImageBaseUrl = ref<string>('https://www.macrozheng.com/app/images/mainpage/')
let tabIndex = ref<number>(0)
let topicsTitltList = reactive<Array<any>>([
    {
        name: '全部专题',
        image: ImageBaseUrl.value + 'u178.png'
    },
    {
        name: '全部专题',
        image: ImageBaseUrl.value + 'u178.png'
    },
    {
        name: '全部专题',
        image: ImageBaseUrl.value + 'u178.png'
    },
    {
        name: '全部专题',
        image: ImageBaseUrl.value + 'u178.png'
    },
    {
        name: '全部专题',
        image: ImageBaseUrl.value + 'u178.png'
    },
    {
        name: '全部专题',
        image: ImageBaseUrl.value + 'u178.png'
    }
])
const goto = (index: number): void => {
    tabIndex.value = index
}
let topicsList = reactive<Array<any>>(
    [
    {
            name: '餐厨专题',
            title: '五个春天的生活新提案',
            desc: '餐厨起居好物',
            price: 99,
            like: 12,
            watch: 23,
            comments: 2333,
            icon: ImageBaseUrl.value + 'u184.png',
            image: ImageBaseUrl.value + 'u188.png',
        }
    ]
)
const load = () => {
    topicsList.push({
            name: '餐厨专题',
            title: '五个春天的生活新提案',
            desc: '餐厨起居好物',
            price: 99,
            like: 12,
            watch: 23,
            comments: 2333,
            icon: ImageBaseUrl.value + 'u184.png',
            image: ImageBaseUrl.value + 'u188.png',
        })
}
</script>

<style lang="less" scoped>
.app {
    height: 100%;
    
}
::-webkit-scrollbar{
    display: none;
}
.top-box {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    overflow: auto;
    background-color: #fff;
    .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 20px;

        .name {
            white-space: nowrap;
        }

        .name-activity {
            color: green;
        }
    }
}

.infinite-list {
  height: 700px;
  padding: 0;
  margin: 0;
  list-style: none;
}

</style>