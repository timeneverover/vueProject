// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App'
import store from './store'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import './css/index.css';
import TipBoxService from './publicService/TipBoxService.js'
import $ from './publicService/jquery.min.js'

require('es6-promise').polyfill();

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.config.productionTip = false
Vue.prototype.api = process.env.NODE_ENV === 'production' ? '' : '/api'
Vue.prototype.tips = TipBoxService


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
