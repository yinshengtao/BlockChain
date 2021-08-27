import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login')
  },
  {
    path: '/sideBar',
    name: 'SideBar',
    component: () => import('../views/layout/index.vue'),
    children: [
      { path: '/accept', name: 'Accept', component: () => import('../views/accept/index.vue') },
      { path: '/day', name: 'Day', component: () => import('../views/day/index.vue') },
      { path: '/difference', name: 'Difference', component: () => import('../views/difference/index.vue') },
      { path: '/statistics', name: 'Statistics', component: () => import('../views/statistics/index.vue') },
      {
        path: '/user',
        name: 'User',
        redirect: '/userInfo',
        component: () => import('../views/user/index.vue'),
        children: [
          { path: '/userInfo', name: 'UserInfo', component: () => import('../views/user/userInfo.vue') },
          { path: '/logs', name: 'Logs', component: () => import('../views/user/logs.vue') }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
