import Vue from 'vue'
import Router from 'vue-router'
import lend from '@/components/lend'
import backstage from '@/components/backstage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'lend',
      component: lend
    },
    {
      path: '/backstage',
      name: 'backstage',
      component: backstage
    }
  ]
})
