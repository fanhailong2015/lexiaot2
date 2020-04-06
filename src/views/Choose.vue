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
                            <div style="width: 80%; margin: 0 auto;">
                                <img src="/static/video-img.jpg" width="100%"/>
                                <div class="banner-font">
                                    <h3>《人物》</h3>
                                    <div>创作年份：2018年</div>
                                    <div>小宇  16岁  自闭症</div>
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
        width:30%;
        height: 100%;
        padding: 0 5%;
        float: left;
    }
    .center-box-r{
        width:60%;
        float: right;
        position: relative;
    }

    .sleft{
        width: 22px;
        height: 34px;
        position: absolute;
        left: 0;
        top: 15%;
        background: url("/static/left.png") no-repeat;
        background-size:auto 100%;
        z-index: 999;
    }
    .sright{
        width: 22px;
        height: 34px;
        position: absolute;
        right: 0;
        top: 15%;
        background: url("/static/right.png") no-repeat;
        background-size:auto 100%;
        z-index: 999;
    }
    .banner-font h3{
        text-align: center;
    }
    .banner-font div{
        font-size: 14px;
        text-align: center;
        color:#040000;
    }
    .banner-font p{
        font-size: 16px;
        color:#040000;
    }




</style>
