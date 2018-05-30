import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Admin from './views/Admin.vue'
import Report from './views/Report.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'home',
        component: Home
    },{
        path: '/admin',
        name: 'admin',
        component: Admin
    },{
        path: '/report',
        name: 'report',
        component: Report
    }]
})
