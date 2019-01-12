import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

import metatypes from './data/metatypes.js'
import attributeState from './state/attributeState.js'
import actions from './state/actions.js'

Vue.use(Vuex);
Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    character: {
      metatype: metatypes.ORK,
      attributes: attributeState
    }
  },
  mutations: {
    commitAttribute (state, payload) {
      state.character.attributes[payload.attribute].base = payload.value;
      state.character.attributes[payload.attribute].augmented = payload.augmented;
    }
  },
  actions: actions
});

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
