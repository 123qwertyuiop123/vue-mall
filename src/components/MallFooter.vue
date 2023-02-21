<template>
    <div class="app">
        <div v-for="(item, index) in tabList" :key="index" @click="changTab(index)" class="item">
            <img :src="tabIndex == index ? item.imageSelect : item.image" alt="">
            <div>{{ item.name }}</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";


const router = useRouter()
const route = useRoute()
const ImageBaseUrl = ref<string>('https://www.macrozheng.com/app/images/mainpage/')
let tabIndex = ref<number>(0)
// 使用defineEmits注册一个自定义事件
interface tabObject {
    name: string,
    image: string,
    imageSelect: string,
    router: string
}
let tabList = reactive<Array<tabObject>>([
    {
        name: '首页',
        image: ImageBaseUrl.value + 'u35.png',
        imageSelect: ImageBaseUrl.value + 'u35_selected.png',
        router: '/'
    },
    {
        name: '分类',
        image: ImageBaseUrl.value + 'u31.png',
        imageSelect: ImageBaseUrl.value + 'u31_selected.png',
        router: '/categoy'
    },
    {
        name: '专题',
        image: ImageBaseUrl.value + 'u27.png',
        imageSelect: ImageBaseUrl.value + 'u27_selected.png',
        router: '/topics'
    },
    {
        name: '我的',
        image: ImageBaseUrl.value + 'u23.png',
        imageSelect: ImageBaseUrl.value + 'u23_selected.png',
        router: '/info'
    },
])
const changTab = (index: number): void => {
    tabIndex.value = index
    switch (index) {
        case 0:
            router.push(tabList[index].router)
            break;
        case 1:
            router.push(tabList[index].router)
            break;
        case 2:
            router.push(tabList[index].router)
            break;
        case 3:
            router.push(tabList[index].router)
            break;

        default:
            break;
    }
}

</script>

<style lang="less" scoped>
.app {
    width: 100%;
    height: 60px;
    background: #FBFBFB;
    border-top: 1px solid gray;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .img {
        width: 50px;
        height: 50px;
    }
}
</style>