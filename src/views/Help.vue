<template>
    <div>
        <div class="logo-box">
            <logo></logo>
        </div>
        <div class="yi">

        </div>
        <div class="jiu">
            <jiu alert="111"></jiu>
        </div>
        <div class="pl">
            <img style="margin-top: 3vh" src="/static/dl.png" width="30%" alt="">
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
        height: 15vh;
        margin-left: 10%;
    }
    .jiu{
        height: 46vh;
    }
    .pl{
        height:21vh;
        width: 80%;
        margin: 0 auto;
        text-align: center;

    }

</style>
