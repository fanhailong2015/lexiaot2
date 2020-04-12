<template>
  <div id="app">
    <audio class="music" src="/yinyue.mp3" id="musicMp3" :controls="true" :autoplay="true" :loop="true" hidden ref="au"></audio>
    <transition name="bounce" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
    import wx from 'weixin-js-sdk'
export default {
	name: 'App',
	data(){
	    return {

		};
	},
	created(){
	    //临时用
        // localStorage.setItem('openid','o4XrkvrPITTrsf3-jaBw9AlnQC-Q');
        // localStorage.setItem('openid','o4XrkvhkZPkkbELVwzYtWjt7s1BY');

        let open = localStorage.getItem('openid');
        if(!open){
            let code = this.getUrlKey('code');
            if(!code){
                let url = window.location.href;
                localStorage.setItem('redirect_uri',url);
                window.location.href= "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx0db2c71c55a0abcc&response_type=code&scope=snsapi_userinfo&state=STATE&redirect_uri="+encodeURI(url)+"#wechat_redirect"
            }else{
                //请求openid
                axios.post('/getWeixinUser',{
                    code: code
                }).then(function(res){
                    res = res.data;

                    let uri = localStorage.getItem('redirect_uri');
                    localStorage.setItem('redirect_uri','');
                    window.location.href=uri;

                    localStorage.setItem('openid',res.data.openid);
                })
            }
        }

	},
    mounted(){
        let link = location.href.replace(location.hash, '');
        axios.post('/generateWxConfig',{
            link: link,
        }).then(function(res){
            var dataList = res.data.data; //转译为Json字符串
            var data = dataList;
            wx.config({
                debug: false, // 开启调试模式
                appId: data.appId, // 必填，公众号的唯一标识
                timestamp: data.timestamp, // 必填，生成签名的时间戳
                nonceStr: data.nonceStr, // 必填，生成签名的随机串
                signature: data.signature, // 必填，签名，见附录1
                jsApiList: [
                    'checkJsApi',
                    'updateTimelineShareData',
                    'updateAppMessageShareData',
                    'onMenuShareQQ',
                    'onMenuShareWeibo'
                ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            });
            wx.ready(function(){
                console.log("home wx.ready");
                var audio = document.getElementById("musicMp3");
                console.log(audio);
                audio.play()
            });
        })
    },
	methods: {
        getUrlKey: function(name){
            return decodeURIComponent((new RegExp('[?|&]'+name+'='+'([^&;]+?)(&|#|;|$)').exec(window.location.href)||[,""])[1].replace(/\+/g,'%20'))||null;
        },
	}

}
</script>

<style>
  body,#app{
    padding: 0;
    margin: 0;
    height: 100vh;
    overflow: hidden;
  }
  #app{
    background: url("/static/back.jpg");
    background-size: 100% 100%;
  }

  .bounce-enter-active,.bounce-leave-active {
	  transition: opacity .1s;
  }

  .bounce-enter, .bounce-leave-to {
	  opacity: 0;
  }
</style>
