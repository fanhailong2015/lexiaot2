<template>
    <swiper :options="swiperOption">
        <swiper-slide class="swiper-slide" v-for="(item,index) in carouselArr" :key="index">
            <img src="/static/logo.png"/>
        </swiper-slide>
        <!-- 左右箭头 -->
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
</template>

<script>
    import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
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
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                    //自动轮播
                    autoplay: {
                        delay: 2000,
                        //当用户滑动图片后继续自动轮播
                        disableOnInteraction: false,
                    },
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

</style>
