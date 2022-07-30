import Vue from "vue";
import Vuex from "vuex";
import todoList from "./todosList";
import skinPeeler from "./skinPeeler";

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
