const priorities = Object.freeze({
  STATS: { name: 'Attributes', toString() { return 'STATS'; } },
  SKILLS: { name: 'Skills', toString() { return 'SKILLS'; } },
  SPECIAL: { name: 'Special', toString() { return 'SPECIAL'; } },
  METATYPE: { name: 'Metatype', toString() { return 'METATYPE'; } },
  RESOURCES: { name: 'Resources', toString() { return 'RESOURCES'; } },
});

export default priorities;
