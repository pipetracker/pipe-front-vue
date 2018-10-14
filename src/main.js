import Vue from 'vue'
import router from '@/router'
import store from '@/vuex'
import i18n from '@/i18n'

import '@/registerServiceWorker'

import pipetracker from '@/components/pipetracker'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(pipetracker)
}).$mount('#pipetracker')
