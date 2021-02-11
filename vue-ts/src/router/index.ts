import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Top from '../components/Top.vue'
import SignIn from '../slack_clone/SignIn.vue'
import ChatPage from '../slack_clone/ChatPage.vue'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'ChatPage',
		component: ChatPage
	},
	{
		path: '/sign-in',
		name: 'SignIn',
		// component: SignIn
		component: () => 
			import (/* webpackChunkName: "about" */ '../slack_clone/SignIn.vue')
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

// const router = createRouter({
// 	history: createWebHistory(),
// 	routes: [
// 		{
// 			path: '/sign-in',
// 			name: 'SignIn',
// 			component: SignIn
// 		}
// 	]
// })

// app.use(router)
