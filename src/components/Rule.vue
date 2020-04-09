<template>
    <div>
        <div class="rule" @click="shows">
            <img src="/static/gz.png" width="70" alt="">
        </div>
        <div class="rule-alert" v-if="show">
            <div class="close" @click="shows"></div>
            <div>
                <h1>活动规则</h1>
                <div>活动时间：</div>
                <div>2020年4月10日至2020年4月15日</div>
                <div>参与方式：</div>
                <div>1.选择您喜欢的慈善联名T恤图案并点亮;</div>
                <div>2.邀请好友点亮更多，每个好友有一次点亮机会！直到图案全部点亮，合成T恤图案。</div>
                <div>3. 点击领取慈善联名T恤并获得随机码；</div>
                <div>4.自动跳转乐小T商城，按照商城内兑换流程免费领取。</div>
                <div>“当公益成为时尚，让你我为爱同行”</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Rule",
		data(){
            return {
                show: false,
			}
		},
		methods: {
            shows(){
                this.show = !this.show
			}
		}
    }
</script>

<style scoped>
    .rule{
        position: absolute;
        left: 0;
        top:18vh;
    }
    .rule-alert{
        position: absolute;
        left: 5%;
		z-index: 99999999999999999;
        top: 16%;
        background: rgba(255,255,255,0.8);
        width: 80%;
        padding: 10% 5%;
        box-shadow: 0 0 5px 1px rgba(0,0,0,0.2);
    }
    .rule-alert h1{
        text-align: center;
        font-size: 20px;
    }
    .rule-alert div{
        text-align: left;
        line-height: 30px;
    }
    .close{
        width: 25px;
        height: 25px;
        background: url("/static/delete2.png") no-repeat;
        background-size: 25px;
        position: absolute;
        right: 20px;
        top: 15px;
    }
</style>












