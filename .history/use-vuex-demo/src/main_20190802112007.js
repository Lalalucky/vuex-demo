import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import './registerServiceWorker'
import './config/rem'
import FastClick from 'fastclick'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

import '@/assets/globel.less'

Vue.config.productionTip = false

// FastClick相关配置
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () {
        FastClick.attach(document.body)
    }, false)
}

router.beforeEach((to,from,next)=>{
    const type = to.meta.needAuthor;
    const hasLogin = localStorage.getItem("hasLogin");
    if(hasLogin ==='1'){
        next()
    }else{
        next({path:'/login'})
        Vue.prototype.$message.warning(',请登录后操作！')
    }
})

// mint-ui相关
Vue.use(Mint)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
