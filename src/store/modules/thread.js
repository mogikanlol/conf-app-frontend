import threadApi from '@/api/threadApi'

const state = {
  evaThread: []
}

const getters = {
}

const actions = {
  getById ({ commit }, id) {
    threadApi.getById(id, thread => commit('setThread', thread));
  }
}

const mutations = {
  setThread (state, thread) {
    // TODO: Rename it
    state.evaThread = thread;
    console.log(thread);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}