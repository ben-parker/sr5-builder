<template>
  <div>
    {{ priorityValues[priorities.SKILLS][priorityRank].skillPoints }} points /
    {{ priorityValues[priorities.SKILLS][priorityRank].groupPoints }} group points
  </div>
</template>

<script>
import priorityValues from '../data/priorityValues.js'
import priorities from '../data/priorities.js'

export default {
  name: 'SkillDetails',
  props: { priorityRank: String },
  data () {
    return {
      priorityValues,
      priorities
    }
  },
  created () {
    this.$store.commit('commitSkillPoints', {
      skillPoints: priorityValues[priorities.SKILLS][this.priorityRank].skillPoints,
      groupPoints: priorityValues[priorities.SKILLS][this.priorityRank].groupPoints
    });
  }
}

</script>

<style>
div {
  width: max-content;
}
</style>
