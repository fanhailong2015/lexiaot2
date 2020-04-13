<template>
    <div style="position: relative;">
        <audio src="/choujiang.mp3" id="choujiang" :loop="true" hidden ref="choujiangc"></audio>
        <div :class="'blockDiv '+(hechengSign ? 'blockDiv2' : '')">
            <div :class="'block ' + (choose.indexOf(1)==-1?'hui ':'') + (light==1?'light':'')">
                <img :src="'/static/active'+type+'/1.jpg'"/>
            </div>
            <div :class="'block ' + (choose.indexOf(2)==-1?'hui ':'') + (light==2?'light':'')">
                <img :src="'/static/active'+type+'/2.jpg'"/>
            </div>
            <div :class="'block ' + (choose.indexOf(3)==-1?'hui ':'') + (light==3?'light':'')">
                <img :src="'/static/active'+type+'/3.jpg'"/>
            </div>
            <div :class="'block ' + (choose.indexOf(6)==-1?'hui ':'') + (light==6?'light':'')">
                <img :src="'/static/active'+type+'/4.jpg'"/>
            </div>
            <div :class="'block ' + (choose.indexOf(5)==-1?'hui ':'') + (light==5?'light':'')">
                <img :src="'/static/active'+type+'/5.jpg'"/>
            </div>
            <div :class="'block ' + (choose.indexOf(4)==-1?'hui ':'') + (light==4?'light':'')">
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
            <div class="delete" @click="tohiddenalert"></div>
            <div class="font-box">
                <div>
                    <!--<h1>邀请码</h1>
                    <h1>03939484</h1>-->
                    <h1>{{alert}}</h1>
                    <img src="/static/but-2.png" width="80%" alt="" @click="woyecanyu">
                </div>
            </div>
        </div>
        <div class="alert-box" v-if="alert_tips">{{alert_tips_text}}</div>
    </div>

</template>

<script>
    export default {
        name: "Jiu",
        data(){
            return {
                light: 0,
                jiange:500,
                alert: '',
                hechengSign: false,
                alert_tips: false,
                alert_tips_text: ''
            };
        },
        props: {
            type: {
                type: Number,
                required: false,
                default: 1
            },
            has: {
                type: Number,
                required: false,
                default: 0
            },
            choose: {
                type: Array,
                required: false,
                default: ()=>{
                    return [1]
                }
            },
			jiang: {
                type: Number,
                required: false,
                default: 0
			},
			hecheng:{
                type: Boolean,
                required: false,
                default: false
			}
        },
        mounted(){
            // this.jiang && this.choujiang(this.jiang);
        },
		watch:{
            jiang(val){
                val && this.choujiang(val);
			},
            hecheng(val){
                val && this.hechengdonghua(val);
			}
		},
        methods: {
            hechengdonghua(val){
				this.hechengSign = val
                this.alert_tips = true ;
                this.alert_tips_text = 'T恤合成中..';

				setTimeout(()=>{
				    this.$router.push('/center/last')
				},2500)
			},
            choujiang (index){
                var choujiang = document.getElementById("choujiang");
                // choujiang.play();

                let round = 0;
                let timer = setInterval(() => {
                    this.light ++
                    if(this.light> 9){
                        this.light = 1
                        round++;
                    }

                    if(round > 2 && this.light == index){
                        clearInterval(timer)

                        // 1 有了
                        if(this.has == 1){
                            this.alert = '感谢您的参与，好友已点亮该图案';
                        }

                        // 2 新的
                        if(this.has == 2){
                            this.alert = '您已经成功帮他点亮';
                        }

                        // 3 已经帮过
                        if(this.has == 3){
                            this.alert = '您已助力完成';
                        }
                        choujiang.pause();

                    }
                },200)
            },
            tohiddenalert(){
                this.alert = '';
            },
            woyecanyu(){
                this.$router.push('/')
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
        width: 70%;
        display:flex;
        flex-wrap: wrap;
        margin: 2vh auto;
    }
    .block{
        width: calc(calc(100% / 3) - 2px);
        margin:1px;
        box-sizing: border-box;
    }
    .blockDiv2 .block{
        width: calc(calc(100% / 3)) !important;
        margin:0px !important;
		animation: doudong 1s;
		animation-iteration-count: 2;
	}
    .block:hover{

    }
    .block img{
        width: 100%;
        display: block;
    }
    .hui{
        filter: brightness(40%); /* W3C */
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
	@keyframes doudong{
		0% {
			transform: scale(1);
			filter: brightness(100%);
		}
		50% {
			transform: scale(0.9);
			filter: brightness(300%);
		}
		100% {
			transform: scale(1);
			filter: brightness(100%);
		}
	}
    .alert-box{
        position: absolute;
        top:30%;
        left: 50%;
        margin-left: -100px;
        width:180px;
        padding:15px;
        text-align: center;
        background: rgba(0,0,0,0.5);
        color:#fff;
        z-index: 999999999999999;
    }
</style>
