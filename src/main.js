import Vue from 'vue'
import VueMeta from 'vue-meta'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// import axios from 'axios'
// Vue.use(axios)
Vue.config.productionTip = false
Vue.use(VueMeta)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
