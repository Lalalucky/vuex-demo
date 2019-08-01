import Vue from 'vue'
import Router from 'vue-router'
import App from './App'

Vue.use(Router)

import Login from '@/views/Login/login.vue'

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path:'/',
            component:App,
            children:[
                {
                    path: '/',
                    name: 'Login',
                    component: Login,
                    redirect: '/login'
                },
                {
                    path: '/login',
                    name: 'Login',
                    component: Login,
                }
            ]
        }
        
    ]
})
