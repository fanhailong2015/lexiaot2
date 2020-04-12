<template>
    <div>
		<rule></rule>
        <div class="logo-box">
            <logo></logo>
        </div>
        <div class="yi">

        </div>
        <div class="jiu">
            <jiu :jiang="jiang" :choose="opend" :has="has" :type="type"></jiu>
        </div>
        <div class="pl" @click="chooseone">
            <img style="margin-top: 3vh" :src="'/static/dl'+helped+'.png'" width="30%" alt="">
        </div>
    </div>
</template>

<script>
    import Logo from '@/components/Logo'
    import Rule from '@/components/Rule'
    import Jiu from '@/components/Jiu'
    import wxapi from '@/utils/wxapi.js';

    export default {
        name: 'Home',
        data(){
            return {
                has: 0,
                helped: "2",
                jiang:0,
                opend:[],
                type: 1,
                messagennn: '',
                hasnumbera: 0,
                my: {},
            }
        },
        components: {
            Logo,Jiu,Rule
        },
        mounted(){
            let _this = this
            axios.post('/user',{
                openid: this.$route.params.openid,
            }).then(function(res){
                _this.type = res.data.data.active*1
                _this.opend = res.data.data.opend
                _this.my = res.data.data.my;
                let link = location.href.replace(location.hash, '');
                axios.post('/generateWxConfig',{
                    link: link,
                }).then(function(res){
                    var dataList = res.data.data; //转译为Json字符串
                    wxapi.wxRegister(dataList,{
                        title: '您的好友'+ _this.my.nickname +'邀请您帮他点亮图案，快来看看吧！', // 分享描述
                        desc: '不想做一颗孤独的星星，所以我发出了爱的信号。', // 分享标题
                        link: 'http://h5.lexiaole-cn.com/index.html#/center/help/'+_this.$route.params.openid, // 分享链接
                        imgUrl: 'http://h5.lexiaole-cn.com/static/cover.jpg'
                    });
                })

                if(_this.$route.params.openid == localStorage.getItem('openid')){
                    if(res.data.data.opend.length >= 9){
                        _this.$router.push('/center/last');
                    }else{
                        _this.$router.push('/center/mine');
                    }
                }
            })

            this.checkhelp();
        },
        methods: {
            chooseone(){
                if(this.helped == '1'){
                    alert("您已助力完成");
                    return false;
                }
                let _this = this
                axios.post('/help/open',{
                    fromopenid: this.$route.params.openid,
                    selfopenid: localStorage.getItem('openid')
                }).then(function(res){
                    const result = res.data.data;
                    if(res.data.data.error){
                        alert(res.data.data.message);
                        return ;
                    }
                    _this.has = result.has;
                    _this.jiang = result.number;
                    _this.helped = "1";
                })
            },
            checkhelp(){
                var _this = this;
                axios.post('/helped',{
                    openid: localStorage.getItem('openid')
                }).then(function(res){
                    const result = res.data.data;
                    if(res.data.data.error){
                        alert(res.data.data.message);
                        return ;
                    }
                    if(res.data.data){
                        _this.helped = "1";
                    }

                })
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
        height: 15vh;
        margin-left: 10%;
    }
    .jiu{
        height: 46vh;
    }
    .pl{
        height:21vh;
        width: 80%;
        margin: 0 auto;
        text-align: center;
        animation: doudong 1s;
        animation-iteration-count: 999999999;
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
