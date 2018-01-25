import Vue from 'vue'
import VueRouter from 'vue-router'

// import Hello from '@/components/Hello'
import Login from '../components/Login'
import Chat from '../components/Chat'
import SignUp from '../components/SignUp'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    }
  ]
})