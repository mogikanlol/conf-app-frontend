import boardApi from '@/api/boardApi'

const state = {
  boards: []
}

const getters = {
}

const actions = {
  getAll ({ commit }) {
    boardApi.getAll(boards => commit('setBoards', boards));
  },

  getById ({ commit }, id) {
    boardApi.getById(id, board => commit('setBoard', board));
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
  },

  setBoard (state, board) {
    // TODO: Rename it
    state.animeBoard = board;
    console.log(board);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}