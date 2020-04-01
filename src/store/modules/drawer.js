export default {
  state: {
    drawer: true
  },
  mutations: {
    SET_DRAWER(state, payload) {
      state.drawer = payload;
    },
    toggle(state) {
      state.drawer = !state.drawer;
    }
  },
  actions: {}
};
