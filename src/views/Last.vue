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
				<img :src="'/static/yi-'+type+'.png'" height="100%" alt="">
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
            <img src="/static/last-img2.png" class="aadfdsfs" HEIGHT="60%" alt="" @click="showalert">
        </div>
		<div class="alert_window" v-if="alert">
			<div class="delete" @click="tohiddenalert"></div>
			<div class="font-box">
				<div>
					<h1>邀请码</h1>
					<h1 id="target">{{code ? code : '- -'}}</h1>
                   <img src="/static/but.png" width="60%" alt="" id="copyBtn" data-clipboard-action="copy" data-clipboard-target="#target">
				</div>
			</div>
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
                alert: false,
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
            this.$parent.hiddenMusic();//最后一个页面不显示音乐图标
            let _this = this
            axios.post('/user',{
                openid: localStorage.getItem('openid'),
            }).then(function(res){
                _this.type = res.data.data.active*1
                _this.opend = res.data.data.opend
                _this.code = res.data.data.coupon
                _this.my = res.data.data.my
                _this.$nextTick(()=> {
                    setTimeout(()=>_this.toImage(),1000);
                })

                _this.shares();
            })

            var clipboard = new Clipboard('#copyBtn');
            // var supp = Clipboard.isSupported();
            // //alert(supp);
            clipboard.on('success', function(e) {
                alert("复制成功，点击确定为您跳转至乐小T商城..",1500);
                e.clearSelection();
                window.location.href = 'https://shop46116484.m.youzan.com/v2/showcase/feature?alias=pTkR2UPrgA&sf=wx_menu';
            });
            clipboard.on('error', function(e) {
                // alert(e.text);alert(e.action);alert(e.trigger);
                // console.error('Action:', e.action);
                // console.error('Trigger:', e.trigger);
                window.location.href = 'https://shop46116484.m.youzan.com/v2/showcase/feature?alias=pTkR2UPrgA&sf=wx_menu';
            });
            //window.location.href = 'https://shop46116484.m.youzan.com/v2/showcase/feature?alias=pTkR2UPrgA&sf=wx_menu';
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
                        title: '您的好友点亮图案，快来看看吧！', // 分享描述
                        desc: '不想做一颗孤独的星星，所以我发出了爱的信号。', // 分享标题
                        link: 'http://h5.lexiaole-cn.com/index.html',
                        imgUrl: 'http://h5.lexiaole-cn.com/static/cover.jpg'
                    });
                })
            },
            aaaa(){
                this.show = !this.show
            },
            bbbb(){
                // var clipboard = new Clipboard('#copyBtn');
                // var supp = Clipboard.isSupported();
                // alert(supp);
                // clipboard.on('success', function(e) {
                //     alert("复制成功，点击确定为您跳转至乐小T商城..",1500);
                //     e.clearSelection();
                // });
                // clipboard.on('error', function(e) {
                //     alert(e.text);alert(e.action);alert(e.trigger);
                //     console.error('Action:', e.action);
                //     console.error('Trigger:', e.trigger);
                //
                // });
                //window.location.href = 'https://shop46116484.m.youzan.com/v2/showcase/feature?alias=pTkR2UPrgA&sf=wx_menu';
            },
            toImage() {
                html2canvas(this.$refs.imageWrapper,{
                    backgroundColor: null,
                    height:this.$refs.imageWrapper.offsetHeight,
                    useCORS: true,//允许加载跨域的图片
                    tainttest:true, //检测每张图片都已经加载完成
                }).then((canvas) => {
                    let dataURL = canvas.toDataURL("image/png");
                    this.dataURL = dataURL;
                    this.oldshow = false;
                });
            },
            tohiddenalert(){
                this.alert = false;
            },
            showalert(){
                this.alert = true;
            }
        }
    }
</script>
<style  scoped>
	.aadfdsfs{
		animation: doudong 1s;
		animation-iteration-count: 999999999;
	}
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

	.alert_window{
		position: absolute;
		width: 84%;
		left: 8%;
		height: 40vh;
		top: 30vh;
		background: rgba(0,0,0,0.6);
		z-index: 999;
	}
	.delete{
		position: absolute;
		top:23px;
		right:20px;
		background: url("/static/delete.png") center no-repeat;
		background-size: 30px;
		width: 30px;
		height:30px;
	}
	.font-box{
		height: 100%;
		display: flex;
		overflow: hidden;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
	.font-box h1{
		font-size: 20px;
		color:#fff;
		font-weight: normal;
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
