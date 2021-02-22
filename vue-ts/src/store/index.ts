import { createStore } from 'vuex'

export default createStore({
  state: {
		comment: '',
		count: 0
  },
  mutations: {
		addComment(state) {
			state.comment = "追加したよ"
		},
		removeComment(state) {
			state.comment = "削除したよ"
		},
		resetComment(state) {
			state.comment = ''
		},
		increment(state) {
			state.count += 1
		},
		decrement(state) {
			state.count -= 1
		}
  },
  actions: {
  },
  modules: {
  }
})
