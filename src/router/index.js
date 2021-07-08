import Vue from 'vue'
import VueRouter from 'vue-router'

const MainPage = () => import('@/pages/MainPage.vue')
const Main = () => import('@/views/Main.vue')
const SignIn = () => import('@/views/sign/SignIn')
const SignUp = () => import('@/views/sign/SignUp')


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: MainPage,
    children : [
      {
        path: '/',
        component: Main
      },
      {
        path: '/sign-in',
        component: SignIn
      },
      {
        path: '/sign-up',
        component: SignUp,
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
