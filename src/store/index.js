import dummy from './dummy.json'
import Vue from 'vue'
import Vuex from 'vuex'
import 'bootstrap'

Vue.use(Vuex)
const plugin = store => {
    store.subscribe( ( mutation, state ) => {
		// Save to local storage all the changes made in the cart state
        if (['SET_NEWS_LIST', 'ADD_NEWS', 'UPDATE_NEWS', 'REMOVE_NEWS'].includes(mutation.type) ) {
			try {
				localStorage.setItem( 'news-app', JSON.stringify( state.newsList ) )
			} catch(e) {
				console.log(e)
			}
		}
    });
}

export default new Vuex.Store({
	plugins: [plugin],
	state: {
		newsList: [],
		alert: null
	},

	mutations: {
		SET_NEWS_LIST: (state, payload) => {
			state.newsList = [...payload, ...state.newsList]
		},

		ADD_NEWS: (state, payload) => {
			state.newsList = [payload, ...state.newsList]
		},

		UPDATE_NEWS: (state, payload) => {
			const { index, news } = payload
			state.newsList[index] = news
		},

		REMOVE_NEWS: (state, payload) => {
			state.newsList.splice(payload, 1)
		},

		SET_ALERT: (state, payload) => {
			state.alert = payload
		}
	},

	actions: {
		loadNewsList: ({ commit }) => {
			try {
				let data = JSON.parse(localStorage.getItem( 'news-app' ))
				
				if (data) {
					commit('SET_NEWS_LIST', data)
				} else {
					const { news } = dummy
					commit('SET_NEWS_LIST', news)
				}
			} catch(e) {
				console.log(e)
			}
		},

		addNews: ({ commit }, payload) => {
			const news = { ...payload, date: new Date()}
			commit('ADD_NEWS', news)
			commit('SET_ALERT', {
				type: 'success',
				title: 'Success!',
				message: 'News successfully created.'
			})
		},

		updateNews: ({ commit }, payload) => {
			commit('UPDATE_NEWS', payload)
			commit('SET_ALERT', {
				type: 'success',
				title: 'Success!',
				message: 'News successfully updated.'
			})
		},

		removeNews: ({ commit }, payload) => {
			commit('REMOVE_NEWS', payload)
			commit('SET_ALERT', {
				type: 'success',
				title: 'Success!',
				message: 'News successfully removed.'
			})
		},

		closeAlert: ({ commit }) => {
			commit('SET_ALERT', null)
		}
	},

	getters: {
		getNews: state => index => state.newsList[index]
	}
})
 