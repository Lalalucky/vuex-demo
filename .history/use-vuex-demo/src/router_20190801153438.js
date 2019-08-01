import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Login from '@/views/Login/login.vue'

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name:'Login',
            component:Login,
            redirect:
        }
    ]
})
