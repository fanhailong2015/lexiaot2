<template>
    <div>

        <div class="last-box" ref="imageWrapper" v-if="oldshow">
            <div class="logo-box">
                <logo></logo>
            </div>
            <rule></rule>
            <img style="margin-top: 5vh" src="/static/last-font1.png" width="70%" alt="">
            <img style="margin-top: 3vh" src="/static/yi-1.png" width="45%" alt="">
            <div class="last-footer">
                <div>
                    <div><img style="margin-right: 10px;width: 26px;" src="/static/head-1.png" alt=""><span>您是第098位心动官</span></div>
                    <img src="/static/last-font2.png" width="100%" alt="">
                </div>
                <img src="/static/rwm.jpg" width="60" alt="">
            </div>
        </div>
        <div style="text-align: center; position: relative;">
            <img class="real_pic" :src="dataURL"/>
        </div>
        <div class="footer">
            <div style="margin: 10px 0"> 长按保存证书 </div>
            <img src="/static/last-img.png"HEIGHT="60%" alt="">
        </div>
    </div>
</template>

<script>
    import Logo from '@/components/Logo'
    import Rule from '@/components/Rule'
    import html2canvas from 'html2canvas';
    import wxapi from '@/utils/wxapi.js';
    import Clipboard from 'clipboard';

    export default {
        name: 'Home',
        components: {
            Logo,Rule
        },
        data(){
            return {
                show: false,
                dataURL: '',
                oldshow: true,
                type: 1,
                code: '',
                hidden: true
            }
        },
        mounted(){
            let _this = this
            axios.post('/user',{
                openid: localStorage.getItem('openid'),
            }).then(function(res){
                _this.type = res.data.data.active*1
                _this.opend = res.data.data.opend
                _this.code = res.data.data.coupon
                _this.$nextTick(()=> {
                    // setTimeout(()=>_this.toImage(),0);
                })

                _this.shares();
            })
        },
        methods:{
            shows(){
                this.hidden = !this.hidden
            },
            shares(){
                let link = window.location.href;

                axios.post('/generateWxConfig',{
                    link: link,
                }).then(function(res){
                    var dataList = res.data.data; //转译为Json字符串
                    wxapi.wxRegister(dataList,{
                        title: '不想做一颗孤独的星星，所以我发出了爱的信号。', // 分享标题
                        desc: '您的好友点亮碎片，快来看看吧！', // 分享描述
                        link: 'http://h5.lexiaole-cn.com/index.html',
                        imgUrl: 'http://h5.lexiaole-cn.com/img/xl.png'
                    });
                })
            },
            aaaa(){
                this.show = !this.show
            },
            bbbb(){
                var clipboard = new Clipboard('#copyBtn');
                clipboard.on('success', function(e) {
                    alert("复制成功",1500);
                    e.clearSelection();
                });
                window.location.href = 'https://shop46116484.m.youzan.com/v2/showcase/feature?alias=pTkR2UPrgA&sf=wx_menu';
            },
            toImage() {
                html2canvas(this.$refs.imageWrapper,{
                    backgroundColor: null,
                    y:107,
                    height:this.$refs.imageWrapper.offsetHeight,
                }).then((canvas) => {
                    let dataURL = canvas.toDataURL("image/png");
                    this.dataURL = dataURL;
                    this.oldshow = false;
                });
            }
        }
    }
</script>
<style  scoped>
    .logo-box{
        height: 8vh;
        padding-top: 7vh;
        padding-bottom: 4vh;
    }
    .last-box{
        text-align: center;
        background-image: url('/static/last-back.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        height:73vh;
        margin-top: 3vh;
        background-position: top 5vh ;
    }
    .last-footer{
        margin: 1vh 10% 0;
        overflow: hidden;
    }
    .last-footer>div{
        width: calc(100% - 90px);
        float: left;
    }
    .last-footer>img{
        float: right;
    }
    .footer{
        width: 100%;
        text-align: center;
        height: 20vh;
    }

</style>
