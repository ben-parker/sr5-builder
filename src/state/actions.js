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

  }
};

export default actions;
