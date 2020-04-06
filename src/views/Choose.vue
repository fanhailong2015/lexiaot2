<template>
    <div class="box">
        <div class="logo-box">
            <logo></logo>
        </div>
        <div class="center-box">
            <div class="center-box-l">
                <img src="/static/people1.png" width="100%" alt="">
            </div>
            <div class="center-box-r">
                <swiper :options="swiperOption">
                    <swiper-slide class="swiper-slide" v-for="(item,index) in carouselArr" :key="index">
                        <img src="/static/video-img.jpg" width="100%"/>
                    </swiper-slide>
                    <!-- 左右箭头 -->
                    <div class="sleft" slot="button-prev">1111</div>
                    <div class="sright" slot="button-next">22222</div>
                </swiper>
            </div>

        </div>
        <div class="footer-box"></div>
    </div>

</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    import Logo from '@/components/Logo'

    export default {
        name: "Choose",
        components: {
            Swiper,
            SwiperSlide,
            Logo
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
    .box{
        height: 100vh;
    }
    .sleft:focus{
        outline: none;
    }
    .sright:focus{
        outline: none;
    }
    .logo-box{
        height: 8vh;
        padding-top: 4vh;
        padding-bottom: 4vh;
    }
    .center-box{
        height: 60vh;
    }
    .footer-box{
        height: 20vh;
        background: url("/static/dl.png") center center no-repeat;
        background-size: auto 80%;
    }
    .center-box-l{
        width:30%;
        height: 100%;
        padding: 0 5%;
        float: left;
    }
    .center-box-r{
        width:60%;
        float: right;
    }
    .sleft{
        width: 20%;
        position: absolute;
        left: 0;
        right: 30px;
        background: url("/static/left.png");
    }
</style>
