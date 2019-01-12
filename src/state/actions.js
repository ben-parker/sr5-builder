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
    let pointsUsed = 0;
    for (const attribute of Object.keys(state.character.attributes.core)) {
      pointsUsed += calcAttributePointsUsed(state.character, attribute);
    }
    
    const remainingPoints = state.buildInfo.attributePoints - pointsUsed;
    
    commit('commitAttributePointsRemaining', { remainingPoints });
  }
};

function calcAttributePointsUsed(characterState, attribute) {
  const attributeMin = characterState.metatype[attribute].min;
  let difference, currentValue;
  
  if (characterState.attributes.core[attribute].base) {
    currentValue = characterState.attributes.core[attribute].base;
  }
  else {
    currentValue = 0;
  }

  difference = parseInt(currentValue - attributeMin);

  if (difference < 0) {
    difference = 0;
  }
  
  return difference;
}

export default actions;
