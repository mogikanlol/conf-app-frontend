import Vue from "vue";
import Vuex from "vuex";

import board from './modules/board'
import thread from './modules/thread'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    board,
    thread
  }
});
