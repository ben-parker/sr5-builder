import attributes from '../data/attributes.js'

const getters = {
  attributePointsRemaining (state, getters) {
    let pointsUsed = 0;
    for (const attribute of Object.keys(state.character.attributes.core)) {
      pointsUsed += calcAttributePointsUsed(state.character, attribute);
    }
    
    const remainingPoints = state.buildInfo.attributePoints - pointsUsed;
    return remainingPoints;
  },
  specialPointsRemaining (state, getters) {
    let pointsUsed = 0;
    for (const attribute of Object.keys(state.character.attributes.special)) {
      pointsUsed += calcSpecialPointsUsed(state.character, attribute);
    }
    
    const remainingPoints = 
      state.buildInfo.specialPoints - pointsUsed;
    
    return remainingPoints;
  },
  skillPointsRemaining (state, getters) {
    let pointsUsed = 0;
    for (const skill of Object.keys(state.character.skills)) {
      pointsUsed += skill
    }
    
    const remainingPoints = state.buildInfo.skillPoints - pointsUsed;
    return remainingPoints;
  },
  groupPointsRemaining (state, getters) {
    let pointsUsed = 0;
    for (const skill of Object.keys(state.character.skills)) {
      pointsUsed += skill
    }
    
    const remainingPoints = state.buildInfo.groupPoints - pointsUsed;
    return remainingPoints;
  },
  resourcesRemaining (state, getters) {
    let nuyenUsed = 0;
    for (const gear of Object.keys(state.character.gear)) {
      nuyenUsed += skill
    }
    
    const remainingPoints = state.buildInfo.resources - nuyenUsed;
    return remainingPoints.toLocaleString('en') + ' \xA5';
  },
  initiative (state, getters) {
    const reaction = state.character.attributes.core[attributes.REACTION].augmented;
    const intuition = state.character.attributes.core[attributes.INTUITION].augmented;
    return reaction + intuition; // + 1d6
  },
  astralInitiative (state, getters) {
    const intuition = state.character.attributes.core[attributes.INTUITION].augmented;
    return intuition * 2; // + 2d6
  },
  mentalLimit (state, getters) {
    const logic = state.character.attributes.core[attributes.LOGIC].augmented;
    const intuition = state.character.attributes.core[attributes.INTUITION].augmented;
    const willpower = state.character.attributes.core[attributes.WILLPOWER].augmented;
    
    const limit = ((logic * 2) + intuition + willpower) / 3;
    return Math.ceil(limit);
  },
  physicalLimit (state, getters) {
    const strength = state.character.attributes.core[attributes.STRENGTH].augmented;
    const body = state.character.attributes.core[attributes.BODY].augmented;
    const reaction = state.character.attributes.core[attributes.REACTION].augmented;
    
    const limit = ((strength * 2) + body + reaction) / 3;
    return Math.ceil(limit);
  },
  socialLimit (state, getters) {
    const charisma = state.character.attributes.core[attributes.LOGIC].augmented;
    const willpower = state.character.attributes.core[attributes.WILLPOWER].augmented;
    const essence = state.character.attributes.special[attributes.ESSENCE].augmented;
    
    const limit = ((charisma * 2) + willpower + essence) / 3;
    return Math.ceil(limit);
  },
  physicalConditionMonitor (state, getters) {
    const body = state.character.attributes.core[attributes.BODY].augmented;
    const boxes = (body / 2) + 8;
    return Math.ceil(boxes);
  },
  stunConditionMonitor (state, getters) {
    const willpower = state.character.attributes.core[attributes.WILLPOWER].augmented;
    const boxes = (willpower / 2) + 8;
    return Math.ceil(boxes);
  },
  overflowConditionMonitor (state, getters) {
    const body = state.character.attributes.core[attributes.BODY].augmented;
    return body;
  },
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

function calcSpecialPointsUsed(characterState, attribute) {
  if (attribute == attributes.ESSENCE) {
    return 0;
  }

  let attributeMin, difference, currentValue; 

  if (attribute == attributes.EDGE) {
    attributeMin = characterState.metatype[attribute].min;
  }
  else if (attribute == attributes.MAGIC) {
    attributeMin = 0;
  }
  else if (attribute == attributes.RESONANCE) {
    attributeMin = 0;
  }
  
  if (characterState.attributes.special[attribute].base) {
    currentValue = characterState.attributes.special[attribute].base;
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

export default getters;