<template>
    <div>
        <div :class="'music ' + (isrun ? 'isrun' : 'norun')" @click="yinyuekaiguan" v-if="showMusic"></div>

		<transition name="bounce" mode="out-in">
            <router-view/>

        </transition>
    </div>
</template>

<script>
    import wx from 'weixin-js-sdk'
    export default {
        name: "Center",
        data(){
            return {
                isrun: true,
                showMusic : true
            }
        },
		mounted(){
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
            hiddenMusic(){
                //最后一个页面不显示音乐图标
                this.showMusic = false;
            },
            yinyuekaiguan(){
                this.isrun = !this.isrun
                var audio = document.getElementById("musicMp3");
                var choujiang = document.getElementById("choujiang");
                if(this.isrun){
                    audio.play()
                }else {
                    audio.pause()
                    if(choujiang){
                        choujiang.pause();
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .music{
        width: 25px;
        height:25px;
        position: absolute;
        top:2vh;
        right: 5%;
        background: url("/static/music.png") no-repeat;
        background-size: 25px;
    }

    .music.norun{
        background-image: url("/static/music-stop.png");
    }
</style>
