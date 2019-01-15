const priorities = Object.freeze({
  ATTRIBUTES: { name: 'Attributes', toString() { return 'ATTRIBUTES'; } },
  SKILLS: { name: 'Skills', toString() { return 'SKILLS'; } },
  SPECIAL: { name: 'Magic/Resonance', toString() { return 'SPECIAL'; } },
  METATYPE: { name: 'Metatype', toString() { return 'METATYPE'; } },
  RESOURCES: { name: 'Resources', toString() { return 'RESOURCES'; } },
});

export default priorities;
