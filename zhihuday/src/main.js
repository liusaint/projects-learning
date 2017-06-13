import 'lib-flexible'
import FastClick from 'fastclick'
window.FastClick = FastClick
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
Vue.use(VueResource)
Vue.use(VueRouter)

import list from './view/list.vue'
import listDefault from './components/list-default.vue'
import Swiper from 'swiper'
window.Swiper = Swiper

import filters from './filters'
Object.keys(filters).forEach((k) => Vue.filter(k, filters[k]))

/* eslint-disable no-new */
let App = Vue.extend({})

var router = new VueRouter()

router.map({
  '/': {
    component: list,
    subRoutes: {
      '/': {
        component: listDefault
      }
    }
  }
})

router.start(App, '#app')
