import Vue from 'vue'
import Router from 'vue-router'
import Land from '@/components/land'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Land',
      component: Land
    }
  ]
})
