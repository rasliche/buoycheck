import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.filter('percent', function (value) {
  return (value * 100).toFixed() + "%";
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
