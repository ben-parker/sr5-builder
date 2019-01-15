import attributes from '../data/attributes.js'

const attributeState = {
  core: {
    [attributes.BODY]: {
      base: 1,
      augmented: 1
    },
    [attributes.AGILITY]: {
      base: 1,
      augmented: 1
    },
    [attributes.REACTION]: {
      base: 1,
      augmented: 1
    },
    [attributes.STRENGTH]: {
      base: 1,
      augmented: 1
    },
    [attributes.CHARISMA]: {
      base: 1,
      augmented: 1
    },
    [attributes.INTUITION]: {
      base: 1,
      augmented: 1
    },
    [attributes.LOGIC]: {
      base: 1,
      augmented: 1
    },
    [attributes.WILLPOWER]: {
      base: 1,
      augmented: 1
    }
  },
  special: {
    [attributes.EDGE]: {
      base: 2,
      augmented: 2
    },
    [attributes.MAGIC]: {
      base: 0,
      augmented: 0
    },
    [attributes.RESONANCE]: {
      base: 0,
      augmented: 0
    },
    [attributes.ESSENCE]: {
      base: 6,
      augmented: 6
    }
  }
};

export default attributeState;