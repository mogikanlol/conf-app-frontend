import boardApi from '@/api/board'

const state = {
  boards: []
}

const getters = {
}

const actions = {
  getAll ({ commit }) {
    boardApi.getAll(boards => commit('setBoards', boards))
  }
}

const mutations = {
  setBoards (state, boards) {
    let result = {};
    boards.forEach( value => {
        result[value.genre] = result[value.genre] || [];
        result[value.genre].push(value);
      }
    );
    state.boards = result;
    console.log(result);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}