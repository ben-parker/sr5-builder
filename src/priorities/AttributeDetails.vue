<template>
  <div>
    {{ totalAttributePoints }} points
  </div>
</template>

<script>
import priorityValues from '../data/priorityValues.js'
import priorities from '../data/priorities.js'

export default {
  name: 'AttributeDetails',
  props: { priorityRank: String },
  computed: {
    totalAttributePoints () {
      return this.$store.state.buildInfo.attributePoints;
    }
  },
  created () {
    this.$store.commit('commitAttributePoints', priorityValues[priorities.ATTRIBUTES][this.priorityRank])
  }
}

</script>

<style>
div {
  width: max-content;
}
</style>
