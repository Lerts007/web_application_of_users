import { createStore } from "vuex";
import Axios from "axios";

export default createStore({
  state: {
    users: [],
    activUser: null,
  },
  getters: {
    getUser(state) {
      return state.users;
    },
    getActivUser(state) {
      return state.activUser;
    },
  },
  mutations: {
    setUsers(state, arr) {
      state.users = arr;
      console.log(state.users);
    },
    setActivUser(state, user) {
      state.activUser = user;
    },
    addLocalStorage(users) {
      localStorage.setItem("users", JSON.stringify(users));
    },
  },
  actions: {
    async getUsers(context) {
      Axios.get("https://reqres.in/api/users?page=1")
        .then((response) => {
          context.commit("setUsers", response.data.data);
          context.commit("addLocalStorage", response.data.data);
          console.log("я тут");
        })
        .catch((error) => console.log("error", error));
    },
    async deletUser(context, user) {
      let index = context.state.users.findIndex((el) => el === user);
      context.state.users.splice(index, 1);
      context.state.activUser = null;
      console.log("я в удалении");
      console.log(context.state.users);
      context.commit("addLocalStorage", context.state.users);
    },
  },
});
