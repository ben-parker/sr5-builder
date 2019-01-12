import attributes from './attributes.js';

const metatypes = Object.freeze({
  HUMAN: {
    name: 'Human',
    [attributes.STRENGTH]: { min: 1, max: 6 },
    [attributes.BODY]: { min: 1, max: 6 },
    [attributes.AGILITY]: { min: 1, max: 6 },
    [attributes.REACTION]: { min: 1, max: 6 },
    [attributes.CHARISMA]: { min: 1, max: 6 },
    [attributes.INTUITION]: { min: 1, max: 6 },
    [attributes.LOGIC]: { min: 1, max: 6 },
    [attributes.WILLPOWER]: { min: 1, max: 6 },
    [attributes.EDGE]: { min: 2, max: 7 },
    toString() { return 'HUMAN'; }
  },
  ELF: {
    name: 'Elf',
    [attributes.STRENGTH]: { min: 1, max: 6 },
    [attributes.BODY]: { min: 1, max: 6 },
    [attributes.AGILITY]: { min: 2, max: 7 },
    [attributes.REACTION]: { min: 1, max: 6 },
    [attributes.CHARISMA]: { min: 3, max: 8 },
    [attributes.INTUITION]: { min: 1, max: 6 },
    [attributes.LOGIC]: { min: 1, max: 6 },
    [attributes.WILLPOWER]: { min: 1, max: 6 },
    [attributes.EDGE]: { min: 1, max: 6 },
    toString() { return 'ELF'; }
  },
  DWARF: {
    name: 'Dwarf',
    [attributes.STRENGTH]: { min: 3, max: 8 },
    [attributes.BODY]: { min: 3, max: 8 },
    [attributes.AGILITY]: { min: 1, max: 6 },
    [attributes.REACTION]: { min: 1, max: 6 },
    [attributes.CHARISMA]: { min: 1, max: 6 },
    [attributes.INTUITION]: { min: 1, max: 6 },
    [attributes.LOGIC]: { min: 1, max: 6 },
    [attributes.WILLPOWER]: { min: 2, max: 7 },
    [attributes.EDGE]: { min: 1, max: 6 },
    toString() { return 'DWARF'; }
  },
  ORK: {
    name: 'Ork',
    [attributes.STRENGTH]: { min: 3, max: 8 },
    [attributes.BODY]: { min: 4, max: 9 },
    [attributes.AGILITY]: { min: 1, max: 6 },
    [attributes.REACTION]: { min: 1, max: 6 },
    [attributes.CHARISMA]: { min: 1, max: 5 },
    [attributes.INTUITION]: { min: 1, max: 6 },
    [attributes.LOGIC]: { min: 1, max: 5 },
    [attributes.WILLPOWER]: { min: 1, max: 6 },
    [attributes.EDGE]: { min: 1, max: 6 },
    toString() { return 'ORK'; }
  },
  TROLL: {
    name: 'Troll',
    [attributes.STRENGTH]: { min: 5, max: 10 },
    [attributes.BODY]: { min: 5, max: 10 },
    [attributes.AGILITY]: { min: 1, max: 5 },
    [attributes.REACTION]: { min: 1, max: 6 },
    [attributes.CHARISMA]: { min: 1, max: 4 },
    [attributes.INTUITION]: { min: 1, max: 5 },
    [attributes.LOGIC]: { min: 1, max: 5 },
    [attributes.WILLPOWER]: { min: 1, max: 6 },
    [attributes.EDGE]: { min: 1, max: 6 },
    toString() { return 'TROLL'; },
  }
  });

export default metatypes;
