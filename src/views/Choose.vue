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
                <div style="text-align: center;margin-bottom: 5px;font-size: 16px;"><span><b>请选择图案</b></span></div>
                <swiper :options="swiperOption">

                        <swiper-slide class="swiper-slide" v-for="(item,index) in carouselArr" :key="index">
                            <div style="width: 62%; margin: 0 auto;">
                                <img style="box-shadow:0px 0px 12px 5px rgba(0,0,0,0.2)" src="/static/choose-1.jpg" width="100%"/>
                                <div class="banner-font">
                                    <h3>《人物》</h3>
                                    <div><b>创作年份：2018年</b></div>
                                    <div><b>小宇  16岁  自闭症</b></div>
                                    <p>作品介绍：小宇的绘画风格色彩缤纷，图案不俗，几张色彩斑斓，若隐若现的神秘面孔，或许只是源于一根线条的恣意游走，在小宇的画笔下，却具有了诗意的灵魂。</p>
                                </div>
                            </div>
                        </swiper-slide>


                    <!-- 左右箭头 -->
                    <div class="sleft" slot="button-prev"></div>
                    <div class="sright" slot="button-next"></div>
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
        width:36%;
        height: 100%;
        padding: 0 2%;
        float: left;
    }
    .center-box-r{
        width:60%;
        padding-top: 38px;
        float: right;
        position: relative;
    }

    .sleft{
        width: 22px;
        height: 34px;
        position: absolute;
        left: 5px;
        top: 11%;
        background: url("/static/left.png") no-repeat;
        background-size:auto 100%;
        z-sindex: 999;
    }
    .sright{
        width: 22px;
        height: 34px;
        position: absolute;
        right: 5px;
        top: 11%;
        background: url("/static/right.png") no-repeat;
        background-size:auto 100%;
        z-index: 999;
    }
    .banner-font h3{
        text-align: center;
        margin: 12px 0 8px;
        font-size: 16px;
    }
    .banner-font div{
        font-size: 14px;
        text-align: center;
        color:#040000;
    }
    .banner-font p{
        font-size: 13px;
        color:#040000;
        margin-top: 5px;
    }




</style>
