import priorities from './priorities.js'
import archetypes from './archetypes.js'
import metatypes from './metatypes.js'

const priorityValues = Object.freeze({
    [priorities.ATTRIBUTES]: { name: 'Attributes', a: 24, b: 20, c: 16, d: 14, e: 12 },
    [priorities.SKILLS]: {
      name: 'Skills',
      a: { skillPoints: 46, groupPoints: 10 },
      b: { skillPoints: 36, groupPoints: 8 },
      c: { skillPoints: 28, groupPoints: 6 },
      d: { skillPoints: 22, groupPoints: 2 },
      e: { skillPoints: 18, groupPoints: 0 },
    },
    [priorities.SPECIAL]: {
      name: 'Special',
      a: [{ archetype: archetypes.MAGE, specialAttributeVal: 6, skills: 2, skillsRating: 5, skillType: 'Magical', spells: 10 },
              { archetype: archetypes.SHAMAN, specialAttributeVal: 6, skills: 2, skillsRating: 5, skillType: 'Magical', spells: 10 },
              { archetype: archetypes.MYSTIC_ADEPT, specialAttributeVal: 6, skills: 2, skillsRating: 5, skillType: 'Magical', spells: 10 },
              { archetype: archetypes.TECHNOMANCER, specialAttributeVal: 6, skills: 2, skillsRating: 5, skillType: 'Resonance', spells: 5 }],
      b: [{ archetype: archetypes.MAGE, specialAttributeVal: 4, skills: 2, skillsRating: 4, skillType: 'Magical', spells: 7 },
              { archetype: archetypes.SHAMAN, specialAttributeVal: 4, skills: 2, skillsRating: 4, skillType: 'Magical', spells: 7 },
              { archetype: archetypes.MYSTIC_ADEPT, specialAttributeVal: 4, skills: 2, skillsRating: 4, skillType: 'Magical', spells: 7 },
              { archetype: archetypes.ASPECTED_MAGE, specialAttributeVal: 5, skills: 1, skillsRating: 4, skillType: 'Magical' },
              { archetype: archetypes.TECHNOMANCER, specialAttributeVal: 4, skills: 2, skillsRating: 4, skillType: 'Resonance', spells: 2 },
              { archetype: archetypes.ADEPT, specialAttributeVal: 6, skills: 1, skillsRating: 4, skillType: 'Active' }],
      c: [{ archetype: archetypes.MAGE, specialAttributeVal: 3, spells: 5 },
              { archetype: archetypes.SHAMAN, specialAttributeVal: 3, spells: 5 },
              { archetype: archetypes.MYSTIC_ADEPT, specialAttributeVal: 3, spells: 5 },
              { archetype: archetypes.ASPECTED_MAGE, specialAttributeVal: 3, skills: 1, skillsRating: 2, skillType: 'Magical' },
              { archetype: archetypes.TECHNOMANCER, specialAttributeVal: 3, spells: 1 },
              { archetype: archetypes.ADEPT, specialAttributeVal: 4, skills: 1, skillsRating: 2, skillType: 'Active' }],
      d: [{ archetype: archetypes.ADEPT, specialAttributeVal: 2 },
              { archetype: archetypes.ASPECTED_MAGE, specialAttributeVal: 2 }],
      e: [{ archetype: archetypes.MUNDANE }],
    },
    [priorities.METATYPE]: {
      name: 'Metatype',
      a: [{ metatype: metatypes.HUMAN, special: 9 }, { metatype: metatypes.ELF, special: 8 }, { metatype: metatypes.DWARF, special: 7 }, { metatype: metatypes.ORK, special: 7 }, { metatype: metatypes.TROLL, special: 5 }],
      b: [{ metatype: metatypes.HUMAN, special: 7 }, { metatype: metatypes.ELF, special: 6 }, { metatype: metatypes.DWARF, special: 4 }, { metatype: metatypes.ORK, special: 4 }, { metatype: metatypes.TROLL, special: 0 }],
      c: [{ metatype: metatypes.HUMAN, special: 5 }, { metatype: metatypes.ELF, special: 3 }, { metatype: metatypes.DWARF, special: 1 }, { metatype: metatypes.ORK, special: 0 }],
      d: [{ metatype: metatypes.HUMAN, special: 3 }, { metatype: metatypes.ELF, special: 0 }],
      e: [{ metatype: metatypes.HUMAN, special: 1 }],
    },
    [priorities.RESOURCES]: { name: 'Resources', a: 450000, b: 275000, c: 140000, d: 50000, e: 6000 },
});

export default priorityValues;
