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
import listTheme from './components/list-theme.vue'
import author from './view/author.vue'
import detail from './view/detail.vue'

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
			},
			'/theme/:id': {
				name: 'theme',
				component: listTheme
			},
			'/author/:id': {
				name: 'author',
				component: author
			}
		}
	},
	'/detail/:id':{
		name:'detail',
		component:detail
	}
})

router.start(App, '#app')
