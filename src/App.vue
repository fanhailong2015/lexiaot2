<template>
  <div id="app">
    <transition name="bounce" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>

export default {
	name: 'App',
	data(){
	    return {

		};
	},
	created(){
	    //临时用
        // localStorage.setItem('openid','o4XrkvrPITTrsf3-jaBw9AlnQC-Q');

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
</style>
