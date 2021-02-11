import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import ChatPage from '../slack_clone/ChatPage.vue'

const routerHistory = createWebHistory()

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
