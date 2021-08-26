import Vue from 'vue';
import Vuex from 'vuex';
import GameStore from './GameStore.js';

Vue.use(Vuex);

const store = new Vuex.Store(GameStore);

export default store;
