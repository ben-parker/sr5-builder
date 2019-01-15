<template>
  <div>
    {{ nuyen }} &yen;
  </div>
</template>

<script>
import priorityValues from '../data/priorityValues.js'
import priorities from '../data/priorities.js'

export default {
  name: 'ResourceDetails',
  props: { priorityRank: String },
  data () {
    return {
      priorityValues: priorityValues,
      priorities: priorities,
      nuyen: priorityValues[priorities.RESOURCES][this.priorityRank].toLocaleString('en')
    }
  },
  created () {
    this.$store.commit('commitResources', priorityValues[priorities.RESOURCES][this.priorityRank])
  }
}
</script>

<style>

</style>
