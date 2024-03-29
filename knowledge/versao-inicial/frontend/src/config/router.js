import Vue from "vue";
import VueRouter from 'vue-router'

import Home from '@/components/home/Home'
import AdminPages from '@/components/admin/AdminPages'
import ArticlesByCategory from "@/components/article/ArticlesByCategory"
import ArticleById from '@/components/article/ArticleById'
import Auth from '@/components/auth/Auth'

import {userKey} from '@/global'

Vue.use(VueRouter)

const routes = [{
    name: 'home',
    path: '/',
    component: Home
},{
    name: 'adminPages',
    path: '/admin',
    component: AdminPages,
    meta:{requireAdmin: true }
},{
    name:'articlesByCategory',
    path: '/category/:id/articles',
    component: ArticlesByCategory
},{
    name:'articleById',
    path: '/article/:id',
    component: ArticleById
},{
    name: 'auth',
    path: '/auth',
    component: Auth
}
]
const router = new VueRouter({
    mode: 'history',
    routes: routes
})

router.beforeEach((to, from, next) =>{
    const json = localStorage.getItem(userKey)

    if(to.matched.some(record => record.meta.requireAdmin)){
        const user =JSON.parse(json)
        user && user.adm ? next() : next({path: '/'})
    }
    else{
        next()
    }
})

export default router