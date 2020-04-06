<template>
    <div>
        <div class="video-box">
            <video class="video-box-video" src="https://v-cdn.zjol.com.cn/276982.mp4" controls></video>
            <div class="video-box-controls"></div>
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
        components: {
            Logo
        },
        mounted(){

        },
        methods: {

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
