<template>
    <div class="box">
		<rule></rule>
        <div class="logo-box">
            <logo></logo>
        </div>
        <div class="center-box">
            <div class="center-box-l">
                <img :src="'/static/people'+index+'.png'" width="100%" alt="">
            </div>
            <div class="center-box-r">
                <div style="text-align: center;margin-bottom: 5px;font-size: 16px;"><span><b>请选择图案</b></span></div>
                <swiper ref="mySwiper" :options="swiperOption">

                    <swiper-slide class="swiper-slide" v-for="(item,index) in lists" :key="index">
                        <div style="width: 62%; margin: 0 auto;">
                            <img style="box-shadow:0px 0px 12px 5px rgba(0,0,0,0.2)" :src="item.img" width="100%"/>
                            <div class="banner-font">
                                <h3>《{{item.title}}》</h3>
                                <div><b>创作年份：{{item.tips1}}年</b></div>
                                <div><b>{{item.tips2}}</b></div>
                                <p>作品介绍：{{item.des}}</p>
                            </div>
                        </div>
                    </swiper-slide>

                    <div class="sleft" slot="button-prev"></div>
                    <div class="sright" slot="button-next"></div>
                </swiper>
            </div>

        </div>
        <div @click="dianliang" class="footer-box"></div>
    </div>

</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    import Logo from '@/components/Logo'
    import Rule from '@/components/Rule'
    import wx from 'weixin-js-sdk'

    export default {
        name: "Choose",
        components: {
            Swiper,
            SwiperSlide,
            Logo,Rule
        },
        data() {
            const _this = this;
            return {
                index:1,
                swiperOption:{
                    //设置点击箭头
                    navigation: {
                        nextEl: '.sright',
                        prevEl: '.sleft'
                    },
                    //自动轮播
                    autoplay: false,
                    //开启循环模式
                    loop: true,
                    on: {
                        slideChangeTransitionEnd: function () {
                            _this.index = this.realIndex+1;
                        }
                    }
                },
                lists: [
                    {
                        title: '人物',
                        tips1: '2018',
                        tips2: '小宇 16岁 自闭症',
                        img: '/static/choose-1.jpg',
                        des: '小宇的绘画风格色彩缤纷，图案不俗，几张色彩斑斓，若隐若现的神秘面孔，或许只是源于一根线条的恣意游走，在小宇的画笔下，却具有了诗意的灵魂。',
                    },
                    {
                        title: '星空朋友',
                        tips1: '2018',
                        tips2: '刘一 20岁 自闭症',
                        img: '/static/choose-2.jpg',
                        des: '刘一善于将多种形体、色块巧妙组合，构成叠压交错的有趣画面。同时他还是一位善于捕捉人物生活细节和神态的漫画大师。这幅油画描绘了两位在星空下畅想的小伙伴，给人充满童趣和纯真的观感。',
                    },
                    {
                        title: '地球2647年1月',
                        tips1: '2017',
                        tips2: '捷麟 26岁 自闭症',
                        img: '/static/choose-3.jpg',
                        des: '捷麟是一位有着一定学者症候群特征的自闭症青年，除了绘画，他还有着某种对于时空的想象性记忆。喜欢运算日历并用图像记录下一些时空碎片，仿佛来自岁月深处的回声。2647年1月的地球会是什么样子？发生了些什么？捷麟以他独特的画面给我们带来无限丰富的想象空间。',
                    },
                ]
            };
        },
        computed: {

        },
        mounted() {
            let link = location.href.replace(location.hash, '');
            axios.post('/generateWxConfig',{
                link: link,
            }).then(function(res){
                var dataList = res.data.data; //转译为Json字符串
                var data = dataList;
                wx.config({
                    debug: false, // 开启调试模式
                    appId: data.appId, // 必填，公众号的唯一标识
                    timestamp: data.timestamp, // 必填，生成签名的时间戳
                    nonceStr: data.nonceStr, // 必填，生成签名的随机串
                    signature: data.signature, // 必填，签名，见附录1
                    jsApiList: [
                        'checkJsApi',
                        'updateTimelineShareData',
                        'updateAppMessageShareData',
                        'onMenuShareQQ',
                        'onMenuShareWeibo'
                    ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                });
                wx.ready(function(){
                    var audio = document.getElementById("musicMp3");
                    audio.play()
                });
            })
        },
		methods: {
            dianliang(){
                let _this = this
                axios.post('/light',{
                    openid: localStorage.getItem('openid'),
                    type: this.index
                }).then(function(res){
                    localStorage.setItem('lightTips',1);
                    _this.$router.push('/center/mine')
                })
            }
		}
    }
</script>

<style scoped>
    .banner-font{
        height: 45vh;
        overflow-y: scroll;
    }
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
        animation: doudong 1s;
        animation-iteration-count: 999999999;
		position: relative;
		z-index: 99999;
        background-position: bottom;
        margin-top: 3vh;
    }

    .center-box-l{
        width:36%;
        height: 100%;
        padding: 0 2%;
        float: left;
    }
    .center-box-r{
        width:60%;
        padding-top: 2vh;
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
        z-index: 9999;
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

    @keyframes doudong{
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(0.9);
        }
        100% {
            transform: scale(1);
        }
    }
</style>
