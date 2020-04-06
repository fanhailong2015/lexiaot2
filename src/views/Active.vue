<template>
    <div class="blockDiv">
        <div class="block">
            <img src="/static/active1/img-1.png"/>
        </div>
        <div class="block">
            <img src="/static/active1/img-2.png"/>
        </div>
        <div class="block">
            <img src="/static/active1/img-3.png"/>
        </div>
        <div class="block">
            <img src="/static/active1/img-4.png"/>
        </div>
        <div class="block">
            <img src="/static/active1/img-5.png"/>
        </div>
        <div class="block">
            <img src="/static/active1/img-6.png"/>
        </div>
        <div class="block">
            <img src="/static/active1/img-7.png"/>
        </div>
        <div class="block">
            <img src="/static/active1/img-8.png"/>
        </div>
        <div class="block">
            <img src="/static/active1/img-9.png"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Active"
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
</style>
