import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import list from '../view/list.vue'
import listDefault from '@/components/list-default.vue'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			component: list,
			children: [{
					path: '/',
					component: listDefault
				}

			]
		}, 
	]
});

