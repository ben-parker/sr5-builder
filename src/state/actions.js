import attributes from '../data/attributes.js'

const actions = {
  updateAttribute ({commit, state}, payload) {
    let attributeValue = payload.value;
    let augmentedValue;

    const metatypeMin = state.character.metatype[payload.attribute].min;
    const metatypeMax = state.character.metatype[payload.attribute].max;

    if (attributeValue < metatypeMin) {
      attributeValue = metatypeMin;
    }
    else if (attributeValue > metatypeMax) {
      attributeValue = metatypeMax;
    }

    // recalculate augmented attribute value
    augmentedValue = attributeValue + 2;
    
    commit('commitAttribute', {
      attribute: payload.attribute,
      value: attributeValue,
      augmented: augmentedValue
    });

    // recalculate derived stats
    // recalculate dice pools
    // update build points
  },
  updatePriorities ({commit, state}, payload) {
    const newPriorities = payload;
    commit('commitPriorities', newPriorities);
  },
  updateMetatype ({commit, dispatch, state}, payload) {
    commit('commitMetatype', payload);

    for (const attribute of Object.keys(state.character.attributes.core)) {
      dispatch('updateAttribute', {
        attribute: attribute,
        value: state.character.attributes.core[attribute].base
      });
    }

    dispatch('updateAttribute', {
      attribute: attributes.EDGE,
      value: state.character.attributes.special[attributes.EDGE].base
    });
  }
};

export default actions;
