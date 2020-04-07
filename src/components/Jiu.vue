<template>
    <div style="position: relative;">
        <div class="blockDiv">
            <div class="block">
                <img src="/static/active1/1.gif"/>
            </div>
            <div class="block hui">
                <img src="/static/active1/2.gif"/>
            </div>
            <div class="block hui">
                <img src="/static/active1/3.gif"/>
            </div>
            <div class="block hui">
                <img src="/static/active1/4.gif"/>
            </div>
            <div class="block hui">
                <img src="/static/active1/5.gif"/>
            </div>
            <div class="block hui">
                <img src="/static/active1/6.gif"/>
            </div>
            <div class="block hui">
                <img src="/static/active1/7.gif"/>
            </div>
            <div class="block hui">
                <img src="/static/active1/8.gif"/>
            </div>
            <div class="block hui">
                <img src="/static/active1/9.gif"/>
            </div>
        </div>
        <div class="alert_window" v-if="alert">

        </div>
    </div>

</template>

<script>
    export default {
        name: "Jiu",
        props: {
            type: {
                type: Number,
                required: false,
                default: 1
            },
            alert: {
                type: String,
                required: false,
                default: ''
            }
        },
    }
</script>

<style scoped>
    .alert_window{
        position: absolute;
        width: 84%;
        top: -1vh;
        bottom: -1vh;
        left: 8%;
        background: #000;
        z-index: 999;
        opacity: 0.4;
    }
    .blockDiv{
        width: 80%;
        display:flex;
        flex-wrap: wrap;
        margin: 2vh auto;
    }
    .block{
        width: calc(calc(100% / 3) - 2px);
        margin:1px;
        box-sizing: border-box;
    }
    .block:hover{

    }
    .block img{
        width: 100%;
        display: block;
    }
    .hui{
        filter: brightness(60%); /* W3C */
    }
</style>
