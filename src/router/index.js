import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
const News = () => import(/* webpackChunkName: "news" */ '../views/News.vue')
const NewsList = () => import(/* webpackChunkName: "news-list" */ '../views/NewsList.vue')
const NewsCreate = () => import(/* webpackChunkName: "news-create" */ '../views/NewsCreate.vue')
const NewsUpdate = () => import(/* webpackChunkName: "news-update" */ '../views/NewsUpdate.vue')
const NewsView = () => import(/* webpackChunkName: "news-view" */ '../views/NewsView.vue')
const PageNotFound = () => import(/* webpackChunkName: "page-not-found" */ '../views/PageNotFound.vue')

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/news',
		component: News,
		children: [
			{
				path: '',
				name: 'news-list',
				component: NewsList
			},

			{
				path: '/news/:id',
				name: 'news-view',
				component: NewsView

			},

			{
				path: '/news/create',
				name: 'news-create',
				component: NewsCreate
			},
			
			{
				path: '/news/update/:id',
				name: 'news-update',
				component: NewsUpdate
			}
		]
	},

	{
		path: '*',
		name: 'page-not-found',
		component: PageNotFound
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	scrollBehavior () {
		return { x: 0, y: 0 }
	},
	routes
})

export default router
