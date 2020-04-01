import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'all'
    },
    {
      path: '/active',
      name: 'active'
    },
    {
      path: '/done',
      name: 'done'
    },
    {
      path: '*',
      redirect: '/'
    },
  ]
})