import axios from "axios";
import { createStore } from "vuex";
export default createStore({
  state: {
    page: 1,
    lists: [],
    list_two: [],
    list_three: [],
  },
  getters: {
    lists: (state) => state.lists,
    list_two: (state) => state.list_two,
    list_three: (state) => state.list_three,
  },
  actions: {
    async getList({ commit }, page) {
      try {
        const response = await axios.get(
          `https://reqres.in/api/users?page=${page}`
        );
        commit("getList", response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getListTwo({ commit }) {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?results=20"
        );
        commit("getListTwo", response.data.results);
      } catch (error) {
        console.error(error);
      }
    },
    async getListThree({ commit, state }) {
      try {
        const response = await axios.get(
          `https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${state.page}`
        );
        commit("getListThree", response.data.items);
      } catch (error) {
        console.error(error);
      }
    },
  },
  mutations: {
    getList(state, payload) {
      state.lists = payload;
    },
    getListTwo(state, payload) {
      state.list_two = payload;
    },
    getListThree(state, payload) {
      if (payload.length) {
        state.list_three.push(...payload);
        state.page++;
      } else {
        // Empty List Handler
      }
    },
  },
});
