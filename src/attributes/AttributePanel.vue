<template>
  <div class="attribute-grid">
    <label for="body">B</label>
    <input type="text" class="attribute-input" id="body" @blur="updatedAttribute($event)" :value="character.attributes[attributes.BODY].base">
    <div class="attribute-display">
      {{ character.attributes[attributes.BODY].base }}
      <span v-show="character.attributes[attributes.BODY].augmented != null">({{ character.attributes[attributes.BODY].augmented }})</span>
    </div>

    <label for="agility">A</label>
    <input type="text" class="attribute-input" id="agility" @blur="updatedAttribute($event)" :value="character.attributes[attributes.AGILITY].base">
    <div class="attribute-display">
      {{ character.attributes[attributes.AGILITY].base }} 
      <span v-show="character.attributes[attributes.AGILITY].augmented != null">({{ character.attributes[attributes.AGILITY].augmented }})</span></div>

    <label for="reaction">R</label>
    <input type="text" class="attribute-input" id="reaction" @blur="updatedAttribute($event)" :value="character.attributes[attributes.REACTION].base">
    <div class="attribute-display">
      {{ character.attributes[attributes.REACTION].base }}
      <span v-show="character.attributes[attributes.REACTION].augmented != null">({{ character.attributes[attributes.REACTION].augmented }})</span>
    </div>

    <label for="strength">S</label>
    <input type="text" class="attribute-input" id="strength" @blur="updatedAttribute($event)" :value="character.attributes[attributes.STRENGTH].base">
    <div class="attribute-display">
      {{ character.attributes[attributes.STRENGTH].base }}
      <span v-show="character.attributes[attributes.STRENGTH].augmented != null">({{ character.attributes[attributes.STRENGTH].augmented }})</span>
    </div>

    <label for="charisma">C</label>
    <input type="text" class="attribute-input" id="charisma" @blur="updatedAttribute($event)" :value="character.attributes[attributes.CHARISMA].base">
    <div class="attribute-display">
      {{ character.attributes[attributes.CHARISMA].base }}
      <span v-show="character.attributes[attributes.CHARISMA].augmented != null">({{ character.attributes[attributes.CHARISMA].augmented }})</span>
    </div>

    <label for="intuition">I</label>
    <input type="text" class="attribute-input" id="intuition" @blur="updatedAttribute($event)" :value="character.attributes[attributes.INTUITION].base">
    <div class="attribute-display">
      {{ character.attributes[attributes.INTUITION].base }}
      <span v-show="character.attributes[attributes.INTUITION].augmented != null">({{ character.attributes[attributes.INTUITION].augmented }})</span>
    </div>

    <label for="logic">L</label>
    <input type="text" class="attribute-input" id="logic" @blur="updatedAttribute($event)" :value="character.attributes[attributes.LOGIC].base">
    <div class="attribute-display">
      {{ character.attributes[attributes.LOGIC].base }}
      <span v-show="character.attributes[attributes.LOGIC].augmented != null">({{ character.attributes[attributes.LOGIC].augmented }})</span>
    </div>

    <label for="willpower">W</label>
    <input type="text" class="attribute-input" id="willpower" @blur="updatedAttribute($event)" :value="character.attributes[attributes.WILLPOWER].base">
    <div class="attribute-display">
      {{ character.attributes[attributes.WILLPOWER].base }}
      <span v-show="character.attributes[attributes.WILLPOWER].augmented != null">({{ character.attributes[attributes.WILLPOWER].augmented }})</span>
    </div>

    <label for="edge">Ed</label>
    <input type="text" class="attribute-input" id="edge" @blur="updatedAttribute($event)" :value="character.attributes[attributes.EDGE].base">
    <div class="attribute-display">
      {{ character.attributes[attributes.EDGE].base }}
      <span v-show="character.attributes[attributes.EDGE].augmented != null">({{ character.attributes[attributes.EDGE].augmented }})</span>
    </div>

    <label for="special">M/R</label>
    <input type="text" class="attribute-input" id="special" @blur="updatedAttribute($event)">
    <div class="attribute-display">
      {{ character.attributes[attributes.SPECIAL].base }} 
      <span v-show="character.attributes[attributes.SPECIAL].augmented != null">({{ character.attributes[attributes.SPECIAL].augmented }})</span>
    </div>
  </div>
</template>

<script>
import attributes from '../data/attributes.js'

export default {
  name: 'AttributePanel',
  data: function () {
    return {
      attributes: attributes,
    }
  },
  methods: {
    updatedAttribute (event) {
      let parsedValue = parseInt(event.target.value);
      
      if (isNaN(parsedValue)) {
        event.target.value = "";
      }
      else {
        this.$store.dispatch('updateAttribute', {
          attribute: event.target.id.toUpperCase(),
          value: parsedValue
        });
      }
    }
  },
  computed: {
    character () {
      return this.$store.state.character
    }
  }
}
</script>

<style>
.attribute-grid {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 5px;
  width: min-content;
  font-size: 10pt;
  border: 2px solid green;
}

input.attribute-input {
  width: 20px;
  text-align: center;
}

div.attribute-display{
  width: 35px;
}

label {
  width: 20px;
}
</style>
