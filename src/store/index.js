import Vue from 'vue';
import Vuex from 'vuex';

import homepageStore from '../views/HomePage/viewStore'
import loginPageStore from '../views/LoginPage/viewStore'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    homepageStore,
    loginPageStore
  },
  strict: debug,
});
