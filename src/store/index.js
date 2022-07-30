import Vue from "vue";
import Vuex from "vuex";
import todoList from "./todoList";
import skinPeeler from "./skin";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {
    add() {
      console.log('===========');
    },
  },
  modules: {
    todoList,
    skinPeeler,
  },
});
