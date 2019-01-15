import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

import metatypes from './data/metatypes.js'
import attributes from './data/attributes.js'
import attributeState from './state/attributeState.js'
import actions from './state/actions.js'
import buildInfo from './state/buildInfo.js'
import getters from './state/getters.js'

Vue.use(Vuex);
Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    character: {
      metatype: metatypes.HUMAN,
      attributes: attributeState,
      skills: [],
      gear: [],
    },
    buildInfo: buildInfo,
  },
  mutations: {
    commitPriorities (state, payload) {
      state.buildInfo.priorities = payload;
    },
    commitAttribute (state, payload) {
      if (payload.attribute == attributes.EDGE) {
        state.character.attributes.special[payload.attribute].base = payload.value;
        state.character.attributes.special[payload.attribute].augmented = payload.augmented;
      }
      else {
        state.character.attributes.core[payload.attribute].base = payload.value;
        state.character.attributes.core[payload.attribute].augmented = payload.augmented;
      }
    },
    commitAttributePoints(state, payload) {
      state.buildInfo.attributePoints = payload;
    },
    commitSkillPoints(state, payload) {
      state.buildInfo.skillPoints = payload.skillPoints;
      state.buildInfo.groupPoints = payload.groupPoints;
    },
    commitResources(state, payload) {
      state.buildInfo.resources = payload;
    },
    commitMetatype(state, payload) {
      state.character.metatype = payload;
    },
    commitSpecialPoints(state, payload) {
      state.buildInfo.specialPoints = payload;
    },
  },
  actions: actions,
  getters: getters
});

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
