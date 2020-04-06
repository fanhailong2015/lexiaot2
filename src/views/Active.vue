<template>
    <ul id="box">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
    </ul>
</template>

<script>
    export default {
        name: "Active"
    }
</script>

<style scoped>
    #box{
        list-style: none;
        overflow:hidden;
    }
    #box li{
        width:25%;
        height:20vh;
        margin:1px;
        background:pink;
        float:left;
        font-size:50px;
        color:#fff;
        text-align:center;
        line-height:200px;
        transition:all 1s;/*全部1s内变化*/
    }
    #box li:hover {
        transform:scale(1.2);/*比例变大2倍*/
    }
</style>
