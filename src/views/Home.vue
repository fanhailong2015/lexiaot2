<template>
    <div>
        <div class="video-box">
            <video class="video-box" src=""></video>
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
    .center-box{
        height: 45vh;
    }
    .logo-box{
        height:  20vh
    }
</style>
