import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './config/rem'
import FastClick from 'fastclick'

Vue.config.productionTip = false

// FastClick相关配置
if ('addEventListener' in document){
    document.addEventListener('DOMContentLoaded',function () {
        FastClick.attach(document.body)
    },false)
}



new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
