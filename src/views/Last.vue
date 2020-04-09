<template>
    <div class="bbbbb">
        <div class="last-box" ref="imageWrapper" v-if="oldshow">
			<div class="logo-000"></div>
            <div class="logo-box">
                <logo></logo>
            </div>
			<div class="logo-222">
				<img src="/static/last-font1.png" width="70%" alt="">
			</div>
			<div class="logo-333">
				<img src="/static/yi-1.png" height="100%" alt="">
			</div>
			<div class="logo-444"></div>
            <div class="last-footer">
                <div>
                    <div><img style="margin-right: 10px;width: 26px;" :src="my.headimgurl" alt=""><span style="position: relative; top: -7px;">您是第{{my.index?my.index:1}}位心动官</span></div>
                    <img src="/static/last-font2.png" width="100%" alt="">
                </div>
                <img src="/static/rwm.jpg" width="60" alt="">
            </div>
        </div>
        <div v-else class="showimage" style="text-align: center; position: relative;">
            <img class="real_pic" :src="dataURL" style="height: 100%;" />
        </div>
        <div class="footer">
            <div style="margin: 10px 0"> 长按保存证书 </div>
            <img src="/static/last-img.png"HEIGHT="60%" alt="">
        </div>
    </div>
</template>

<script>
    import Logo from '@/components/Logo'
    import html2canvas from 'html2canvas';
    import wxapi from '@/utils/wxapi.js';
    import Clipboard from 'clipboard';

    export default {
        name: 'Home',
        components: {
            Logo
        },
        data(){
            return {
                show: false,
                dataURL: '',
                oldshow: true,
                type: 1,
                code: '',
                hidden: true,
                my: {}
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
                _this.my = res.data.data.my
                _this.$nextTick(()=> {
                    setTimeout(()=>_this.toImage(),0);
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
                        imgUrl: 'http://h5.lexiaole-cn.com/static/cover.jpg'
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
	.bbbbb{
		height: 95vh;
		padding-top: 5vh;
	}
    .last-box{
        text-align: center;
        background-image: url('/static/last-back.jpg');
        background-repeat: no-repeat;
        background-size: 90% 100%;
        height:66vh;
		padding: 3vh 5vh;
        background-position: center;
    }
	.showimage{
		height:72vh;
	}
	.logo-000{
		height: 3vh;
	}
	.logo-box{
		height: 10vh;
	}
	.logo-222{
		height: 10vh;

	}
	.logo-333{
		height: 30vh;
	}
	.logo-444{
		height: 2vh;
	}
    .last-footer{
		height: 11vh;
		overflow: hidden;
		padding: 0 5%;
    }
    .last-footer>div{
        width: calc(100% - 70px);
        float: left;
		font-size: 12px;
		vertical-align: center;
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
