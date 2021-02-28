import { createStore } from 'vuex'

export default createStore({
	// globalなstate
  state: {
		globalCount: 0
	},
	// stateへの書き込みはこのmutationsの中でのみ行う
  mutations: {
		globalIncrement(state) {
			state.globalCount ++
		}
  },
  actions: {
  },
  modules: {
  }
})
