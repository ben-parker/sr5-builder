<template>
  <div class="priority-panel panel" id="attribute-panel">
    <div class="panel-title">Attributes</div>
    <div class="attribute-grid">
      <label for="body">B</label>
      <input type="text" class="attribute-input" id="body" @blur="updatedAttribute($event)" :value="character.attributes.core[attributes.BODY].base">
      <div class="attribute-display">
        {{ character.attributes.core[attributes.BODY].base }}
        <span v-show="character.attributes.core[attributes.BODY].augmented != null">({{ character.attributes.core[attributes.BODY].augmented }})</span>
      </div>

      <label for="agility">A</label>
      <input type="text" class="attribute-input" id="agility" @blur="updatedAttribute($event)" :value="character.attributes.core[attributes.AGILITY].base">
      <div class="attribute-display">
        {{ character.attributes.core[attributes.AGILITY].base }} 
        <span v-show="character.attributes.core[attributes.AGILITY].augmented != null">({{ character.attributes.core[attributes.AGILITY].augmented }})</span></div>

      <label for="reaction">R</label>
      <input type="text" class="attribute-input" id="reaction" @blur="updatedAttribute($event)" :value="character.attributes.core[attributes.REACTION].base">
      <div class="attribute-display">
        {{ character.attributes.core[attributes.REACTION].base }}
        <span v-show="character.attributes.core[attributes.REACTION].augmented != null">({{ character.attributes.core[attributes.REACTION].augmented }})</span>
      </div>

      <label for="strength">S</label>
      <input type="text" class="attribute-input" id="strength" @blur="updatedAttribute($event)" :value="character.attributes.core[attributes.STRENGTH].base">
      <div class="attribute-display">
        {{ character.attributes.core[attributes.STRENGTH].base }}
        <span v-show="character.attributes.core[attributes.STRENGTH].augmented != null">({{ character.attributes.core[attributes.STRENGTH].augmented }})</span>
      </div>

      <label for="charisma">C</label>
      <input type="text" class="attribute-input" id="charisma" @blur="updatedAttribute($event)" :value="character.attributes.core[attributes.CHARISMA].base">
      <div class="attribute-display">
        {{ character.attributes.core[attributes.CHARISMA].base }}
        <span v-show="character.attributes.core[attributes.CHARISMA].augmented != null">({{ character.attributes.core[attributes.CHARISMA].augmented }})</span>
      </div>

      <label for="intuition">I</label>
      <input type="text" class="attribute-input" id="intuition" @blur="updatedAttribute($event)" :value="character.attributes.core[attributes.INTUITION].base">
      <div class="attribute-display">
        {{ character.attributes.core[attributes.INTUITION].base }}
        <span v-show="character.attributes.core[attributes.INTUITION].augmented != null">({{ character.attributes.core[attributes.INTUITION].augmented }})</span>
      </div>

      <label for="logic">L</label>
      <input type="text" class="attribute-input" id="logic" @blur="updatedAttribute($event)" :value="character.attributes.core[attributes.LOGIC].base">
      <div class="attribute-display">
        {{ character.attributes.core[attributes.LOGIC].base }}
        <span v-show="character.attributes.core[attributes.LOGIC].augmented != null">({{ character.attributes.core[attributes.LOGIC].augmented }})</span>
      </div>

      <label for="willpower">W</label>
      <input type="text" class="attribute-input" id="willpower" @blur="updatedAttribute($event)" :value="character.attributes.core[attributes.WILLPOWER].base">
      <div class="attribute-display">
        {{ character.attributes.core[attributes.WILLPOWER].base }}
        <span v-show="character.attributes.core[attributes.WILLPOWER].augmented != null">({{ character.attributes.core[attributes.WILLPOWER].augmented }})</span>
      </div>

      <label for="edge">Ed</label>
      <input type="text" class="edge-input" id="edge" @blur="updatedAttribute($event)" :value="character.attributes.special[attributes.EDGE].base">
      <div></div>

      <label for="special">M/R</label>
      <input type="text" class="special-input" id="special" @blur="updatedSpecial($event)">
      <div></div>
    </div>
  </div>
</template>

<script>
import attributes from '../data/attributes.js'

export default {
  name: 'AttributePanel',
  data () {
    return {
      attributes,
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
    },
    updatedSpecial(event) {
      let parsedValue = parseInt(event.target.value);
      
      if (isNaN(parsedValue)) {
        event.target.value = "";
      }
      else {
        this.$store.dispatch('updateSpecialAttribute', {
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

#attribute-panel: {
  grid-column: 2;
}

input.attribute-input, input.special-input, input.edge-input {
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
