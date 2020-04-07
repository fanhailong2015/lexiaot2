<template>
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
            opend: {
                type: Array,
                required: false,
                default: []
            }
        },
    }
</script>

<style scoped>
    .blockDiv{
        width: 80%;
        display:flex;
        flex-wrap: wrap;
        margin: 0 auto;
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
