<template>
    <swiper :options="swiperOption">
        <swiper-slide class="swiper-slide" v-for="(item,index) in carouselArr" :key="index">
            <img src="/static/logo.png"/>
        </swiper-slide>
        <!-- 左右箭头 -->
        <div class="sleft" slot="button-prev">1111</div>
        <div class="sright" slot="button-next">22222</div>
    </swiper>
</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'

    export default {
        name: "Choose",
        components: {
            Swiper,
            SwiperSlide
        },
        data() {
            return {
                carouselArr: [1,2,3,4,5,6],
                swiperOption:{
                    //设置点击箭头
                    navigation: {
                        nextEl: '.sleft',
                        prevEl: '.sright'
                    },
                    //自动轮播
                    autoplay: false,
                    //开启循环模式
                    loop: true
                }
            };
        },
        computed: {

        },
        mounted() {

        }
    }
</script>

<style scoped>
    .sleft:focus{
        outline: none;
    }
    .sright:focus{
        outline: none;
    }
</style>
