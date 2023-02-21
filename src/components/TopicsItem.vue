<template>
    <div class="app">
        <div class="top">
            <img :src="item.icon" alt="">
            <div>{{ item.name }}</div>
        </div>
        <div class="img">
            <img :src="item.image" alt="">
            <div class="hot">热门</div>
        </div>
        <div class="title">
            <div class="title-item">{{ item.title }}</div>
            <div class="price">￥{{ item.price }}元起</div>
        </div>
        <div class="desc">{{ item.desc }}</div>
        <div class="action">
            <div class="item">
                <div class="like item">
                    <img :src="like" alt="">
                    {{ item.like }}
                </div>
                <div class="watch item">
                    <img :src="watch" alt="">
                    {{ item.watch }}
                </div>
            </div>
            <div class="item">
                <div class="comments item">
                    <img :src="comments" alt="">
                    {{ item.comments }}
                </div>
                <img :src="back" alt="">
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue"

const ImageBaseUrl = ref<string>('https://www.macrozheng.com/app/images/mainpage/')
const like = ImageBaseUrl.value + ref<string>('u193.png').value
const watch = ImageBaseUrl.value + ref<string>('u194.png').value
const comments = ImageBaseUrl.value + ref<string>('u195.png').value
const back = ImageBaseUrl.value + ref<string>('u196.png').value
type Props = {
    item?: any
}
let props = defineProps<Props>()
onMounted(() => {
    console.log(props.item);
})
</script>

<style lang="less" scoped>
.app {
    margin-top: 15px;
    background-color: #fff;
}

.top {
    display: flex;
    align-items: center;

    img {
        padding: 10px 10px 10px 20px;
    }
}

.img {
    width: 100%;
    position: relative;

    img {
        width: 100%;
    }

    .hot {
        width: 60px;
        height: 26px;
        text-align: center;
        position: absolute;
        top: 10px;
        right: 30px;
        background: url('https://www.macrozheng.com/app/images/mainpage/u200.png');
        background-repeat: no-repeat;
        background-size: cover;
        color: #fff;
    }
}

.title {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;

    .title-item {
        margin-left: 20px;
    }

    .price {
        margin-right: 20px;
        color: red;
    }
}

.desc {
    padding-left: 20px;
    font-size: small;
    color: gainsboro;
    padding-bottom: 10px;
    border-bottom: 1px solid gainsboro;
}

.action {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .item {
        display: flex;
        align-items: center;
    }

    img {
        margin-right: 5px;
    }

    .like .watch{
        margin-left: 20px;
    }
    .comments{
        margin-right: 20px;
    }
}
</style>