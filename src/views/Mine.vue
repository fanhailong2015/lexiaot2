<template>
    <div>
		<div class="black" v-if="!hidden" @click="shows" >
			<img src="/static/back-tou.png" width="70%" alt="">
		</div>
        <div class="logo-box">
            <logo></logo>
        </div>
        <div class="yi">
            <img :src="'/static/yi-'+type+'.png'" height="100%" alt="">
            <div :class="'heart-2 '+ (opend.length>=9?'choose':'')" @click="hebing"></div>
            <div :class="'heart-1 '+ (opend.length<9?'choose':'')" @click="shows"></div>
        </div>
        <div class="jiu">
            <jiu :choose="opend" :type="type" :hecheng="hecheng" :jiang="jiang"></jiu>
        </div>
        <div class="pl">
            <template v-for="item in helpuser" v-if="item!=null">
                <div v-if="item!=null"><img :src="item.headimgurl" alt=""><span>{{item.nickname}}为您点亮一块图片</span></div>
            </template>
        </div>
    </div>
</template>

<script>
    import Logo from '@/components/Logo'
    import Jiu from '@/components/Jiu'
    import wxapi from '@/utils/wxapi.js';

    export default {
        name: 'Home',
        data(){
            return {
                hidden: true,
                jiang: 0,
                opend:[],
                help:[],
                helpuser:[],
                type: 0,
                my: {},
                lightTips: 0,
                lightTipsText: '',
                hecheng: false
            }
        },
        components: {
            Logo,Jiu
        },
        mounted(){
            let _this = this
            axios.post('/user',{
                openid: localStorage.getItem('openid'),
            }).then(function(res){
                _this.type = res.data.data.active*1
                _this.help = res.data.data.help
                _this.helpuser = res.data.data.helpuser
                _this.my = res.data.data.my
                if(!localStorage.getItem('openone')){
                    _this.jiang = 1;
                    setTimeout(function () {
                        _this.opend = res.data.data.opend
                        localStorage.setItem('openone',1);
                    },5600);
                }else{
                    _this.opend = res.data.data.opend
                }
                _this.shares();

            })
        },
        methods: {
            shows(){
                this.hidden = !this.hidden
            },
            shares(){
                let link = location.href.replace(location.hash, '');
                let _this = this;
                axios.post('/generateWxConfig',{
                    link: link,
                }).then(function(res){
                    var dataList = res.data.data; //转译为Json字符串
                    wxapi.wxRegister(dataList,{
                        title: '您的好友'+ _this.my.nickname +'邀请您帮他点亮图案，快来看看吧！', // 分享描述
                        desc: '不想做一颗孤独的星星，所以我发出了爱的信号。', // 分享标题
                        link: 'http://h5.lexiaole-cn.com/index.html#/center/help/'+localStorage.getItem('openid'), // 分享链接
                        imgUrl: 'http://h5.lexiaole-cn.com/static/cover.jpg'
                    });
                })
            },
            hebing(){
                if(this.opend.length >= 9){
                    this.hecheng = true;
				}else{
                    alert("您还未集齐9块图片哦");
                }
			}
        }
    }
</script>
<style  scoped>
    .logo-box{
        height: 8vh;
        padding-top: 4vh;
        padding-bottom: 4vh;
    }
    .yi{
        height: 18vh;
        margin-left: 8%;
        margin-right: 8%;
    }
    .jiu{
         height: 46vh;
     }
    .heart-1{
        width: 27%;
        height: 100%;
        background: url("/static/yi-xin1.png") bottom no-repeat;
        background-size: 90%;
        float: right;
    }
    @keyframes doudong{
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }
    .heart-1.choose{
        background: url("/static/yi-xin11.png") bottom no-repeat;
        background-size: 90%;
        animation: doudong 1s;
        animation-iteration-count: 999999999;
    }
    .heart-2{
        width: 27%;
        height: 100%;
        background: url("/static/yi-xin2.png") bottom no-repeat;
        background-size: 90%;
        float: right;
    }
    .heart-2.choose{
        background: url("/static/yi-xin22.png") bottom no-repeat;
        background-size: 90%;
        animation: doudong 1s;
        animation-iteration-count: 999999999;
    }
    .pl{
        width: 80%;
        height: 15vh;
       margin: 0 auto;
		overflow: hidden;
    }
    .pl>div{
        overflow: hidden;
        margin-top: 5px;
		animation: 10s rowup linear infinite normal;
	}
    .pl>div img{
        width: 20px;
        height: 20px;
        float: left;
    }
    .pl>div span{
        float: left;
        line-height: 20px;
        width: calc(100% - 22px);
        font-size: 14px;
        margin-left: 2px;
    }
	.black{
		width: 100%;
		height: 100vh;
		background: rgba(0,0,0,0.5);
		position: absolute;
		top:0;
		left:0;
		z-index: 999999;
	}
	.black img{
		position: absolute;
		right:0%;
		top:0px;
	}
	@keyframes rowup {
		0% {
			-webkit-transform: translate3d(0, 0, 0);
			transform: translate3d(0, 90px, 0);
		}
		100% {
			-webkit-transform: translate3d(0, -307px, 0);
			transform: translate3d(0, -150px, 0);
		}
	}
</style>
