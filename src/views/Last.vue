<template>
    <div>

    <div class="last-box">
        <div class="logo-box">
            <logo></logo>
        </div>
        <img src="/static/last-font1.png" width="70%" alt="">
        <img style="margin-top: 5px" src="/static/yi-1.png" width="60%" alt="">
        <div class="last-footer">
            <div>
                <div><img style="margin-right: 10px;width: 26px" src="/static/head-1.png" alt=""><span>您是第098位心动官</span></div>
                <img src="/static/last-font2.png" width="100%" alt="">
            </div>
            <img src="/static/rwm.jpg" width="80" alt="">
        </div>
    </div>
        <div class="footer">
            <div style="margin: 10px 0"> 长按保存证书 </div>
            <img src="/static/last-img.png"HEIGHT="60%" alt="">
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
        padding-top: 7vh;
        padding-bottom: 4vh;
    }
    .last-box{
        text-align: center;
        background-image: url('/static/last-back.png');
        background-repeat: no-repeat;
        background-size: 100%;
        height:80vh;
        background-position: top 5vh ;
    }
    .last-footer{ margin: 0 10%}
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
