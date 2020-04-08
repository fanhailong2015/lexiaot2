<template>
    <div>
        <div class="music"></div>
        <transition name="bounce" mode="out-in">
            <router-view/>

        </transition>
    </div>
</template>

<script>
    export default {
        name: "Center"
    }
</script>

<style scoped>
    .music{
        width: 25px;
        height:25px;
        position: absolute;
        top:2vh;
        right: 5%;
        background: url("/static/music.png") no-repeat;
        background-size: 25px;
    }
</style>
