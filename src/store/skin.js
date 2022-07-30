export default {
  namespaced: true,
  state: {
    color: localStorage.getItem("color"),
  },
  mutations: {
    skinPeelerBtn(state, color) {
      state.color = color
      localStorage.setItem("color", color)
    },
  },
  actions: {
    skinPeelerBtn({ commit }, color) {
      commit("skinPeelerBtn", color)
    },
  },
  modules: {},
}
