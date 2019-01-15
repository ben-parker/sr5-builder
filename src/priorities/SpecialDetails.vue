<template>
  <select>
    <option v-for="choice in priorityValues[priorities.SPECIAL][priorityRank]">
      {{ choice.archetype.name }}
    </option>
  </select>
</template>

<script>
import priorityValues from '../data/priorityValues.js'
import priorities from '../data/priorities.js'

export default {
  name: 'SpecialDetails',
  props: { priorityRank: String },
  data () {
    return {
      priorityValues,
      priorities
    }
  }
}

</script>

<style>
div {
  width: max-content;
}
</style>
