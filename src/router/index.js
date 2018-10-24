import Vue from 'vue'
import Router from 'vue-router'
import lend from '@/components/lend'
import backstageGH from '@/components/backstageGH'
import backstageYH from '@/components/backstageYH'
import backstageXM from '@/components/backstageXM'
import backstageDM from '@/components/backstageDM'

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
      component: backstageGH
    },
    {
      path: '/backstage/gh',
      name: 'gh',
      component: backstageGH
    },
    {
      path: '/backstage/yh',
      name: 'yh',
      component: backstageYH
    },
    {
      path: '/backstage/xm',
      name: 'xm',
      component: backstageXM
    },
    {
      path: '/backstage/dm',
      name: 'dm',
      component: backstageDM
    }
  ]
})
