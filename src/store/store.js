import Vue from "vue";
import Vuex from "vuex";
import example from "./example.js"

Vue.use(Vuex);

const store = new Vuex.Store(example);

Vue.prototype.$store = store;
export default store
