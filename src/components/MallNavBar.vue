<template>
    <div class="app">
        <div>
            <img :src="notifySrc" @click="goto(1)">
        </div>
        <div>mall商场</div>
        <div>
            <img :src="searchSrc" @click="goto(2)">
            <img :src="carSrc" @click="goto(3)">
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";
import { useRoute, useRouter } from "vue-router";
const router = useRouter()
const route = useRoute()
const ImageBaseUrl = ref<string>('https://www.macrozheng.com/app/images/mainpage/')

let notifySrc = ImageBaseUrl.value + ref<string>('u13.png').value
let searchSrc = ImageBaseUrl.value + ref<string>('u14.png').value
let carSrc = ImageBaseUrl.value + ref<string>('u15.png').value


// 通知/搜索/购物车跳转
const goto = (id: number): void =>{
    switch (id) {
        case 1:
            router.push('/about')
            break;
        case 2:
            router.push('/about')
            break;
        case 3:
            router.push('/about')
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
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        margin: 0 20px;
    }
}
</style>