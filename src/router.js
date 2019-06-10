import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/products',
      name: 'products',
      component: () => import(/* webpackChunkName: "about" */ './views/Products.vue')
    },
    {
      path: '/orders',
      name: 'orderss',
      component: () => import(/* webpackChunkName: "about" */ './views/Orders.vue')
    },
    {
      path: '/insights',
      name: 'insights',
      component: () => import(/* webpackChunkName: "about" */ './views/Insights.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import(/* webpackChunkName: "about" */ './views/Settings.vue')
    }
  ]
})
