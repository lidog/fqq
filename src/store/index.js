import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    sidebar: '',
    user: {},
    loading: {
      show: false,
      text: '加载中...'
    },
    prompt: {
    	show: false,
    	text: '',
    	btns: []
    }
  },
  mutations,
  actions
});

export default store