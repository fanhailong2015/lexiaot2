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
    // {
    //     path: '/welcome',
    //     name: 'Welcome',
    //     component: () => import('../views/Welcome/Welcome.vue'),
    //     redirect: '/welcome/first',
    //     children:[
    //         {
    //             path: 'first', name: 'First',
    //             component: () => import('../views/Welcome/First.vue')
    //         },
    //     ]
    // },

]

const router = new VueRouter({
    routes
})

export default router
