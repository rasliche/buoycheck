import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.filter('percent', function (value) {
  return (value * 100).toFixed() + "%";
})

// Can use custom instances with const instance = axios.create()
// For different databases I guess?
axios.defaults.baseURL = 'https://buoycheck-5164b.firebaseio.com';
axios.defaults.headers.common['Authorization'] = "Made with <3 by ER";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
