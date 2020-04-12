import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './utils/axios'

Vue.config.productionTip = false

var _hmt = _hmt || [];
window._hmt = _hmt; // 必须把_hmt挂载到window下，否则找不到（很多网友说需要添加我没加也成功了）
(function () {
    var hm = document.createElement("script")
    hm.src = "https://hm.baidu.com/hm.js?66d1d50c210a9392bb9dc0ee01f3af5f"
    var s = document.getElementsByTagName("script")[0]
    s.parentNode.insertBefore(hm, s)
})();

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
