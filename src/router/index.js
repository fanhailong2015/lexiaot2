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
        redirect: '/index/choose',
        children: [
            {
                path: 'choose',
                name: 'Choose',
                component: () => import('../views/Choose.vue'),
            },
        ]
    },

]

const router = new VueRouter({
    routes
})

export default router
