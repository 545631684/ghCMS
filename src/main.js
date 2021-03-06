// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// highlight.js代码高亮指令
import Highlight from './assets/directive/highlight'
 
Vue.use(Highlight)
Vue.use(ElementUI)
Vue.config.productionTip = false

Vue.prototype.URLS = ''
// Vue.prototype.URLS = '/api'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
