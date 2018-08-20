import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import ChangeSkin from '@/pages/changeSkin'
import Time from '@/components/time'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/home',
    component: Home,
    // children: [{
    //   path: '/pop',
    //   component: resolve => require(['./components/pop.vue'], resolve),
    // }]
  }, {
    path: '/time',
    component: Time,
  }, {
    path: '/changeSkin',
    component: ChangeSkin,
  }]
})
