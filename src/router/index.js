import Vue from 'vue'
import Router from 'vue-router'
import about from '@/pages/about/homepage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: homepage
    }
  ]
})
