<template>
    <div>
        <div class="video-box">
            <video ref="video" @canplay="videoCanPlay()" @timeupdate="videoTimeUpdate()" class="video-box-video" src="https://v-cdn.zjol.com.cn/276982.mp4" poster="/static/video-img.jpg" playsinline></video>
            <div class="video-box-controls">
                <div class="vcTop">
                    <!-- 播放按钮 -->
                    <div :class="vcIsPlay ? 'play':'vcPlayBtn'" @click="videoPlay()"></div>
                    <!-- 播放时间 -->
                    <div class="vcPlayTime">{{vcCurrentTime}}/{{vcTotalTime}}</div>
                    <!-- 全屏 -->
                    <div class="vcFullBtn" @click="showFullScreen()"></div>
                </div>
                <div class="vcBottom">
                    <!-- 进度 -->
                    <input type="range" @input="mySlidechange($event.target)" min="0" max="100" class="videoProgress" v-model="vcProgress" :style="{backgroundSize:+ vcProgress*100/100 +'% 100%'}"/>
                </div>
                <!-- 声音 -->
                <div class="vcVoice"></div>
            </div>
        </div>
        <div class="center-box">
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
            onPlayerPlay() {
                console.log('on player');
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
            }
        }
    }
</script>
<style  scoped>
    .video-box{
        height: 35vh;
        background: #000;
    }
    .video-box-video{
        height: 30vh;
        width: 100%;
    }
    .video-box-controls{
        height: 5vh;
        background: #fff;
    }
    .center-box{
        position: relative;
        height: 55vh;
        background: url("/static/index-img.png") center center no-repeat;
        background-size: 95% 100%;
    }
    .heart{
        width: 45%;
        height: 25vh;
        position: absolute;
        top: 3vh;
        left: 2%;
        background: url("/static/index-heart.png") center center no-repeat;
        background-size: 100% 100%
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
    }
    .videoProgress{
        margin-top:1vh;
    }
    .vcPlayBtn{
        width: 10%;
        height: 5vh;
        background: url("/static/play.png") center center no-repeat;
        background-size: auto 60%;
    }
    .vcPlayTime{
        width: 26%;
        line-height: 5vh;
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
    }
    .vcVoice{
        width: 10%;
        height: 5vh;
        background: url("/static/voice.png") center center no-repeat;
        background-size:auto 60%;
    }
</style>
