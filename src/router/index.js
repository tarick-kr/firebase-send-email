import Vue from 'vue'
import VueRouter from 'vue-router'
import FormOrder from '../views/FormOrder'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'form-order',
    component: FormOrder
  },
  {
    path: '/preview',
    name: 'preview',
    component: () => import(/* webpackChunkName: "preview" */ '../views/Preview.vue')
  },
  {
    path: '/order-send',
    name: 'order-send',
    component: () => import(/* webpackChunkName: "order-send" */ '../views/OrderSend.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
