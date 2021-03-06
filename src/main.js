import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'

Vue.use(VueResource)
Vue.use(VueRouter)

import ShotsList from './components/ShotsList.vue'
import Shot from './components/Shot.vue'
import ShotLoading from './components/ShotLoading.vue'

const routes = [
  {
    path: '/shots',
    name: 'ShotsList',
    component: ShotsList
  },{
    path: '/shotloading',
    name: 'ShotLoading',
    component: ShotLoading
  }, {
    path: '/shot/:shotId(\\d+)',
    name: 'Shot',
    component: Shot
  }, {
    path: '*',
    redirect: { 
      name: 'ShotsList' 
    }
  }
]

const router = new VueRouter({
  routes,
  // mode: 'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
