import Vue from 'vue'
import VueRouter from 'vue-router'

const MainPage = () => import('@/pages/MainPage.vue')
const AuthPage = () => import('@/pages/AuthPage.vue')
const ProductPage = () => import('@/pages/ProductPage.vue')
const OrderPage = () => import('@/pages/OrderPage.vue')
const SignIn = () => import('@/views/sign/SignIn')
const SignUp = () => import('@/views/sign/SignUp')
const ProductDetail = () => import ('@/views/product/productDetail')
const OrderDetail = () => import ('@/views/order/orderDetail')



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: MainPage,
  },
  {
    path: '/auth/',
    component : AuthPage,
    children : [
      {
        path: 'sign-in',
        component : SignIn
      },
      {
        path: 'sign-up',
        component : SignUp
      }
    ]
  },
  {
    path: '/product/',
    component : ProductPage,
    children : [
      {
        path: '/product/:id',
        component : ProductDetail
      }
    ]
  },
  {
    path: '/order/',
    component : OrderPage,
    children : [
      {
        path: '/order/:id',
        component : OrderDetail
      }
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
