<template>
    <div style="position: relative;">
        <div class="blockDiv">
            <div :class="'block ' + (choose.indexOf(1)==-1?'hui ':'') + (light==1?'light':'')">
                <img :src="'/static/active'+type+'/1.jpg'"/>
            </div>
            <div :class="'block ' + (choose.indexOf(2)==-1?'hui ':'') + (light==2?'light':'')">
                <img :src="'/static/active'+type+'/2.jpg'"/>
            </div>
            <div :class="'block ' + (choose.indexOf(3)==-1?'hui ':'') + (light==3?'light':'')">
                <img :src="'/static/active'+type+'/3.jpg'"/>
            </div>
            <div :class="'block ' + (choose.indexOf(4)==-1?'hui ':'') + (light==6?'light':'')">
                <img :src="'/static/active'+type+'/4.jpg'"/>
            </div>
            <div :class="'block ' + (choose.indexOf(5)==-1?'hui ':'') + (light==5?'light':'')">
                <img :src="'/static/active'+type+'/5.jpg'"/>
            </div>
            <div :class="'block ' + (choose.indexOf(6)==-1?'hui ':'') + (light==4?'light':'')">
                <img :src="'/static/active'+type+'/6.jpg'"/>
            </div>
            <div :class="'block ' + (choose.indexOf(7)==-1?'hui ':'') + (light==7?'light':'')">
                <img :src="'/static/active'+type+'/7.jpg'"/>
            </div>
            <div :class="'block ' + (choose.indexOf(8)==-1?'hui ':'') + (light==8?'light':'')">
                <img :src="'/static/active'+type+'/8.jpg'"/>
            </div>
            <div :class="'block ' + (choose.indexOf(9)==-1?'hui ':'') + (light==9?'light':'')">
                <img :src="'/static/active'+type+'/9.jpg'"/>
            </div>
        </div>
        <div class="alert_window" v-if="alert">
            <div class="delete"></div>
            <div class="font-box">
                <div>
                    <!--<h1>邀请码</h1>
                    <h1>03939484</h1>-->
                    <h1>您已经成功帮他点亮</h1>
                    <img src="/static/but-2.png" width="80%" alt="">
                </div>
            </div>
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
                default: ()=>{
                    return [1]
                }
            },
            alert: {
                type: String,
                required: false,
                default: ''
            },
			jiang: {
                type: Number,
                required: false,
                default: 0
			}
        },
        mounted(){
            // this.jiang && this.choujiang(this.jiang);
        },
		watch:{
            jiang(val){
                val && this.choujiang(val);
			}
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

                    if(round > 2 && this.light == index){
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
        top: -2vh;
        bottom: -2vh;
        left: 8%;
        background: rgba(0,0,0,0.6);
        z-index: 999;
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

    .delete{
        position: absolute;
        top:23px;
        right:20px;
        background: url("/static/delete.png") center no-repeat;
        background-size: 30px;
        width: 30px;
        height:30px;
    }
    .font-box{
        height: 100%;
        display: flex;
        overflow: hidden;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .font-box h1{
        font-size: 26px;
        color:#fff;
        font-weight: normal;
    }
</style>
