<template>
    <div style="position: relative;">
        <div class="blockDiv">
            <div :class="'block ' + (choose.indexOf(1)==-1?'hui ':'') + (light==1?'light':'')">
                <img src="/static/active1/1.gif"/>
            </div>
            <div :class="'block ' + (choose.indexOf(2)==-1?'hui ':'') + (light==2?'light':'')">
                <img src="/static/active1/2.gif"/>
            </div>
            <div :class="'block ' + (choose.indexOf(3)==-1?'hui ':'') + (light==3?'light':'')">
                <img src="/static/active1/3.gif"/>
            </div>
            <div :class="'block ' + (choose.indexOf(4)==-1?'hui ':'') + (light==6?'light':'')">
                <img src="/static/active1/4.gif"/>
            </div>
            <div :class="'block ' + (choose.indexOf(5)==-1?'hui ':'') + (light==5?'light':'')">
                <img src="/static/active1/5.gif"/>
            </div>
            <div :class="'block ' + (choose.indexOf(6)==-1?'hui ':'') + (light==4?'light':'')">
                <img src="/static/active1/6.gif"/>
            </div>
            <div :class="'block ' + (choose.indexOf(7)==-1?'hui ':'') + (light==7?'light':'')">
                <img src="/static/active1/7.gif"/>
            </div>
            <div :class="'block ' + (choose.indexOf(8)==-1?'hui ':'') + (light==8?'light':'')">
                <img src="/static/active1/8.gif"/>
            </div>
            <div :class="'block ' + (choose.indexOf(9)==-1?'hui ':'') + (light==9?'light':'')">
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
        data(){
            return {
                light: 0,
                jiange:500
            };
        },
        props: {
            type: {
                type: Number,
                required: false,
                default: 1
            },
            choose: {
                type: Array,
                required: false,
                default: [1,5,9]
            },
            alert: {
                type: String,
                required: false,
                default: ''
            }
        },
        mounted(){
            this.choujiang(8);
        },
        methods: {
            choujiang (index){
                let round = 0;
                let timer = setInterval(() => {
                    this.light ++
                    if(this.light> 9){
                        this.light = 1
                        round++;
                    }

                    if(round > 3 && this.light == index){
                        clearInterval(timer)
                    }
                },200)
            }
        }
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
    .light{
        filter: brightness(120%); /* W3C */
    }
</style>
