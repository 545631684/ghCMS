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
    },
    {
      path: '/backstage/gh/:type/:uid',
      name: 'gh',
      component: backstage
    },
    {
      path: '/backstage/yh/:type/:uid',
      name: 'yh',
      component: backstage
    },
    {
      path: '/backstage/xm/:type/:uid',
      name: 'xm',
      component: backstage
    },
    {
      path: '/backstage/dm/:type/:uid',
      name: 'dm',
      component: backstage
    }
  ]
})
