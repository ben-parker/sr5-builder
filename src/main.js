import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

import metatypes from './data/metatypes.js'
import attributeState from './state/attributeState.js'
import actions from './state/actions.js'
import buildInfo from './state/buildInfo.js'

Vue.use(Vuex);
Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    character: {
      metatype: metatypes.HUMAN,
      attributes: attributeState
    },
    buildInfo: buildInfo,
  },
  mutations: {
    commitAttribute (state, payload) {
      state.character.attributes.core[payload.attribute].base = payload.value;
      state.character.attributes.core[payload.attribute].augmented = payload.augmented;
    },
    commitAttributePointsRemaining (state, payload) {
      state.buildInfo.attributePointsRemaining = payload.remainingPoints;
    }
  },
  actions: actions
});

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
