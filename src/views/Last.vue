<template>
    <div>
        <div class="logo-box">
            <logo></logo>
        </div>
        <div class="yi">
            <img src="/static/yi-1.png" height="100%" alt="">
            <div class="heart-2 choose"></div>
            <div class="heart-1"></div>
        </div>
        <div class="jiu">
            <jiu></jiu>
        </div>
        <div class="pl">
            <div><img src="/static/head-1.png" alt=""><span>123456789</span></div>
        </div>
    </div>
</template>

<script>
    import Logo from '@/components/Logo'
    import Jiu from '@/components/Jiu'

    export default {
        name: 'Home',
        data(){
            return {

            }
        },
        components: {
            Logo,Jiu
        },
        mounted(){

        },
        methods: {

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
        height: 18vh;
        margin-left: 10%;
    }
    .jiu{
         height: 46vh;
     }
    .heart-1{
        width: 27%;
        height: 100%;
        background: url("/static/yi-xin1.png") bottom no-repeat;
        background-size: 90%;
        float: right;
    }
    .heart-1.choose{
        background: url("/static/yi-xin11.png") bottom no-repeat;
        background-size: 90%;
    }
    .heart-2{
        width: 27%;
        height: 100%;
        background: url("/static/yi-xin2.png") bottom no-repeat;
        background-size: 90%;
        float: right;
    }
    .heart-2.choose{
        background: url("/static/yi-xin22.png") bottom no-repeat;
        background-size: 90%;
    }
    .pl{
        width: 80%;
       margin: 0 auto;
    }
    .pl>div{
        overflow: hidden;
        margin-top: 5px;
    }
    .pl>div img{
        width: 30px;
        height: 30px;
        float: left;
    }
    .pl>div span{
        float: left;
        line-height: 30px;
    }

</style>
