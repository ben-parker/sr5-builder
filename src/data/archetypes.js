import attributes from './attributes.js'
import spellTypes from './spellTypes.js'

const archetypes = Object.freeze({
    ADEPT: { name: 'Adept', stat: attributes.MAGIC, spells: spellTypes.POWERS, toString() { return 'ADEPT'; } },
    ASPECTED_MAGE: { name: 'Aspected Magician', stat: attributes.MAGIC, spells: spellTypes.SPELLS, toString() { return 'ASPECTED_MAGE'; } },
    MAGE: { name: 'Mage', stat: attributes.MAGIC, spells: spellTypes.SPELLS, toString() { return 'MAGE'; } },
    MYSTIC_ADEPT: { name: 'Mystic Adept', stat: attributes.MAGIC, spells: spellTypes.SPELLS, toString() { return 'MYSTIC_ADEPT'; } },
    SHAMAN: { name: 'Shaman', stat: attributes.MAGIC, spells: spellTypes.SPELLS, toString() { return 'SHAMAN'; } },
    TECHNOMANCER: { name: 'Technomancer', stat: attributes.RESONANCE, spells: spellTypes.COMPLEX, toString() { return 'TECHNOMANCER'; } },
    MUNDANE: { name: 'Mundane', toString() { return 'MUNDANE'; } },
});

export default archetypes;
