import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior(to, from, savedPosition) {
        // savedPosition 会在你使用浏览器前进或后退按钮时候生效
        // 这个跟你使用 router.go() 或 router.back() 效果一致
        if (savedPosition) {
            return savedPosition
        } else {
            // 如果不是通过上述行为切换组件，就会让页面回到顶部
            if (from.meta.keepAlive) {
                from.meta.savedPosition = document.body.scrollTop;
            }
            return { x: 0, y: to.meta.savedPosition || 0 }
        }
    },
    routes: [
       
    ]
})
