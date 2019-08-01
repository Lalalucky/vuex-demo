import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Login from '@/views'

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '',
            redirect: '/login',
            component:Login
        }
    ]
})
