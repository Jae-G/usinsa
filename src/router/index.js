import Vue from 'vue'
import VueRouter from 'vue-router'

const MainPage = () => import('@/pages/MainPage.vue')
const Main = () => import('@/views/Main.vue')
const SignIn = () => import('@/views/sign/SignIn')
const SignUp = () => import('@/views/sign/SignUp')
const ProductDetail = () => import ('@/views/product/productDetail')


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: MainPage,
    children : [
      {
        path: '/',
        name: 'home',
        component: Main
      },
      {
        path: '/sign-in',
        name: 'signIn',
        component: SignIn
      },
      {
        path: '/sign-up',
        name: 'signUp',
        component: SignUp,
      },
      {
        path: '/product/:id',
        name: 'product',
        component : ProductDetail
      }
    ],
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
