<template>
    <div>
        <div class="video-box">
            <video  class="video-box-video" src="http://h5.lexiaole-cn.com/h5.mp4" poster="http://h5.lexiaole-cn.com/static/cover.jpg" playsinline  autoplay="autoplay" controls="controls" x5-video-player-type="h5"></video>
            <!--<div class="video-box-controls">-->
            <!--<div class="vcTop">-->
                <!--&lt;!&ndash; 播放按钮 &ndash;&gt;-->
                <!--<div :class="vcIsPlay ? 'play':'vcPlayBtn'" @click="videoPlay()"></div>-->
                <!--&lt;!&ndash; 播放时间 &ndash;&gt;-->
                <!--<div class="vcPlayTime">{{vcCurrentTime}}/{{vcTotalTime}}</div>-->
                <!--&lt;!&ndash; 全屏 &ndash;&gt;-->
                <!--<div class="vcFullBtn" @click="showFullScreen()"></div>-->
            <!--</div>-->
            <!--<div class="vcBottom">-->
                <!--&lt;!&ndash; 进度 &ndash;&gt;-->
                <!--<input type="range" @input="mySlidechange($event.target)" min="0" max="100" class="videoProgress" v-model="vcProgress" :style="{backgroundSize:+ vcProgress*100/100 +'% 100%'}"/>-->
            <!--</div>-->
            <!--&lt;!&ndash; 声音 &ndash;&gt;-->
            <!--<div :class="'vcVoice ' + (vcMuted ? 'no':'')" @click="onVoice()"></div>-->
        <!--</div>-->
        </div>
        <div class="center-box" @click="tochoose">
            <div class="heart"></div>
            <div></div>
        </div>
        <div class="logo-box">
            <logo></logo>
        </div>
    </div>
</template>

<script>
    import Logo from '@/components/Logo'
    export default {
        name: 'Home',
        data(){
            return {
                vcCurrentTime:'00:00',//当前进度
                vcTotalTime:'00:00',//总时长
                vcIsPlay:false,//video是否播放
                vcProgress:0,//video进度
                vcIsFull:false,//是否全屏
				vcMuted: false
            }
        },
        components: {
            Logo
        },
        mounted(){

        },
        methods: {
            showFullScreen(){
                // this.$refs.video.muted = !this.$refs.video.muted
                // this.$refs.video.webkitRequestFullScreen();
                if(this.$refs.video.requestFullScreen) {
                    this.$refs.video.requestFullScreen();
                } else if(this.$refs.video.mozRequestFullScreen) {
                    this.$refs.video.mozRequestFullScreen();
                } else if(this.$refs.video.webkitRequestFullScreen) {
                    this.$refs.video.webkitRequestFullScreen();
                }
            },
            onVoice(){
                this.$refs.video.muted = !this.$refs.video.muted
                this.vcMuted = this.$refs.video.muted;

            },
            mySlidechange(data) {
                this.$refs.video.currentTime=parseInt(data.value/100*111);
            },
            videoTimeUpdate(){
                var currTime =this.$refs.video.currentTime;
                var duration =this.$refs.video.duration;
                this.vcCurrentTime = this.getFormatVideoTime(currTime);
                var pre = currTime / duration;
                this.vcProgress = pre*100;
            },
            videoCanPlay(){
                var duration =this.$refs.video.duration;
                // console.log('ss',duration)
                this.vcTotalTime = this.getFormatVideoTime(duration);
            },
            //video play or stop
            videoPlay(){
                if(this.vcIsPlay){
                    this.$refs.video.pause();
                }else{
                    this.$refs.video.play();
                }
                this.vcIsPlay = !this.vcIsPlay;
            },

            //格式化时间
            getFormatVideoTime(time) {
                var time = time;
                var m = parseInt(time%3600/60),
                    s = parseInt(time%60);
                m = m < 10 ? "0"+m : m;
                s = s < 10 ? "0"+s : s;
                return m+":"+s;
            },
            tochoose(){
                this.$router.push('/center/choose');
			}
        }
    }
</script>
<style  scoped>
    .video-box{
        height: 33vh;
        background: #000;
    }
    .video-box-video{
        height: 33vh;
        width: 100%;
        object-fit:cover;
		display: block;
    }
    .video-box-controls{
        height: 6vh;
        background: #fff;
    }
    .center-box{
        position: relative;
        height: 57vh;
        background: url("/static/index-img.png") center center no-repeat;
        background-size: 95%;
    }
    .heart{
        width: 45%;
        height: 25vh;
        position: absolute;
        top: 3vh;
        left: 2%;
        background: url("/static/index-heart.png") center center no-repeat;
        background-size: 100% 100%;
        animation: doudong 1s;
        animation-iteration-count: 999999999;
    }
    .logo-box{
        height:  10vh
    }
    .vcPlayBtn,.vcPlayTime,.vcFullBtn,.vcBottom,.play,.vcVoice{ float: left;}
    .play{
        width: 10%;
        height: 5vh;
        background: url("/static/stop.png") center center no-repeat;
        background-size: auto 60%;
        margin-top: 0.4vh;
    }
    .videoProgress{
        margin-top:1.8vh;
    }
    .vcPlayBtn{
        width: 10%;
        height: 5vh;
        background: url("/static/play.png") center center no-repeat;
        background-size: auto 60%;
        margin-top: 0.4vh;
    }
    .vcPlayTime{
        width: 26%;
        line-height: 5vh;
        margin-top: 0.4vh;
    }
    .vcBottom{
        width: 39%;
        line-height: 5vh;
    }
    .vcFullBtn{
        float: right;
    }
    .vcFullBtn{
        width: 10%;
        height: 5vh;
        background: url("/static/full.png") center center no-repeat;
        background-size: auto 60%;
        margin-top: 0.4vh;
    }
    .vcVoice{
        width: 10%;
        height: 5vh;
        background: url("/static/voice.png") center center no-repeat;
        background-size:auto 60%;
        margin-top: 0.2vh;
    }

	.vcVoice.no{
		background-image: url("/static/voice2.png");
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
