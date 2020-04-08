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
            <jiu :choose="opend" :type="type"></jiu>
        </div>
        <div class="pl">
            <div><img src="/static/head-1.png" alt=""><span>123456789</span></div>
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
                opend:[],
                help:[],
                helpuser:[],
                type: 1,
                my: {},
                lightTips: 0,
                lightTipsText: ''
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
                _this.opend = res.data.data.opend
                _this.help = res.data.data.help
                _this.helpuser = res.data.data.helpuser
                _this.my = res.data.data.my

                if(res.data.data.opend.length >= 9){

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
                        title: '不想做一颗孤独的星星，所以我发出了爱的信号。', // 分享标题
                        desc: '您的好友'+ _this.my.nickname +'邀请您帮他点亮碎片，快来看看吧！', // 分享描述
                        link: 'http://h5.lexiaole-cn.com/index.html#/center/help/'+localStorage.getItem('openid'), // 分享链接
                        imgUrl: 'http://h5.lexiaole-cn.com/img/xl.png'
                    });
                })
            },
            hebing(){
                if(this.opend.length >= 9){
                    window.console.log('合成')
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
        margin-left: 10%;
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
    .heart-1.choose{
        background: url("/static/yi-xin11.png") bottom no-repeat;
        background-size: 90%;
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
    }
    .pl{
        width: 80%;
       margin: 0 auto;
    }
    .pl>div{
        overflow: hidden;
        margin-top: 5px;
    }
    .pl>div img{
        width: 30px;
        height: 30px;
        float: left;
    }
    .pl>div span{
        float: left;
        line-height: 30px;
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
</style>
