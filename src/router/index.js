import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/center',
        name: 'Center',
        component: () => import('../views/Center.vue'),
        redirect: '/center/choose',
        children: [
            {
                path: 'choose',
                name: 'Choose',
                component: () => import('../views/Choose.vue'),
            },
            {
                path: 'active',
                name: 'Active',
                component: () => import('../views/Active.vue'),
            },
            {
                path: 'mine',
                name: 'Mine',
                component: () => import('../views/Mine.vue'),
            },
            {
                path: 'help/:openid',
                name: 'Help',
                component: () => import('../views/Help.vue'),
            },
            {
                path: 'last',
                name: 'Last',
                component: () => import('../views/Last.vue'),
            },
        ]
    },

]

const router = new VueRouter({
    routes
})

export default router
