import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Top from '../components/Top.vue'
import SignIn from '../slack_clone/SignIn.vue'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Top',
		component: Top
	},
	{
		path: '/sign-in',
		name: 'SignIn',
		component: SignIn
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
