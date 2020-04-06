<template>
    <div>
        <div class="video-box">
            <video ref="video" @canplay="videoCanPlay()" @timeupdate="videoTimeUpdate()" class="video-box-video" src="https://v-cdn.zjol.com.cn/276982.mp4" poster="/static/logo.png" playsinline></video>
            <div class="video-box-controls">
                <div class="vcTop">
                    <!-- 播放按钮 -->
                    <div class="vcPlayBtn" @click="videoPlay()">{{vcIsPlay?'stop':'play'}}</div>
                    <!-- 播放时间 -->
                    <div class="vcPlayTime">{{vcCurrentTime}}/{{vcTotalTime}}</div>
                    <!-- 全屏 -->
                    <div class="vcFullBtn" @click="showFullScreen()">full</div>
                </div>
                <div class="vcBottom">
                    <!-- 进度 -->
                    <input type="range" @input="mySlidechange($event.target)" min="0" max="100" class="videoProgress" v-model="vcProgress" :style="{backgroundSize:+ vcProgress*100/100 +'% 100%'}"/>
                </div>
            </div>
        </div>
        <div class="center-box">
            <div></div>
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
        height: 45vh;
    }
    .logo-box{
        height:  20vh
    }
</style>
