// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
//
Vue.prototype.$http = axios
// // Vue.config.productionTip = false
//
// axios.defaults.baseURL = 'http://127.0.0.1:8082'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
