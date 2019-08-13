import Vue from 'vue'
import Router from 'vue-router'
import App from './App'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path:'/',
            component:App,
            children:[
                {
                    path: '',
                    component: () => import("@/views/Login/login"),
                    redirect: '/login'
                },
                {
                    path: '/login',
                    name: 'Login',
                    component: () => import("@/views/Login/login"),
                },
                {
                    path:'/msite',
                    name:'Msite',
                    component: () => import ( "@/views/msite/index"),
                    meta:{
                        needAuthor
                    }
                }
            ]
        }
        
    ]
})
