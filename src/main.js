import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

import toast from '@/components/common/toast'

Vue.config.productionTip = false

//事件总线
Vue.prototype.$bus = new Vue()
Vue.use(toast)
Vue.use(VueLazyLoad)

FastClick.attach(document.body, {})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
