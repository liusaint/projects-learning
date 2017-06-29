import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import list from '../view/list.vue'
import listDefault from '@/components/list-default.vue'
import listTheme from '@/components/list-theme.vue'
import author from '@/components/author.vue'
import article from '../view/article.vue'


import ajax from '@/ajax.js'
window.ajax = ajax.ajax;

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			component: list,
			children: [{
					path: '/',
					name:'listDefault',
					component: listDefault
				},
				{
					path: '/theme/:id',
					component: listTheme
				},
				{
					path:'/author/:id',
					component:author
				}

			]
		}, 
		{
			path:'/article/:id',
			component:article
		}

	]
});

