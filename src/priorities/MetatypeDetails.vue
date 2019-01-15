<template>
  <select @change="metatypeUpdated">
    <option v-for="choice in priorityValues[priorities.METATYPE][priorityRank]" :value="choice.metatype">
      {{ choice.metatype.name }} ({{ choice.special }})
    </option>
  </select>
</template>

<script>
import priorityValues from '../data/priorityValues.js'
import priorities from '../data/priorities.js'

export default {
  name: 'MetatypeDetails',
  props: { priorityRank: String, priority: Object },
  data () {
    return {
      priorityValues: priorityValues,
      priorities: priorities,
      metatypeSelection: null
    }
  },
  computed: {
    selectedMetatype () {
      return priorityValues[priorities.METATYPE][this.priorityRank]
        .find(i => i.metatype == this.metatypeSelection)
        .metatype;
    },
    specialPoints () {
      return priorityValues[priorities.METATYPE][this.priorityRank]
        .find(i => i.metatype == this.selectedMetatype)
        .special;
    }
  },
  methods: {
    metatypeUpdated (event) {
      this.metatypeSelection = event.target.value;
      this.$store.dispatch('updateMetatype', this.selectedMetatype);
      this.$store.commit('commitSpecialPoints', this.specialPoints);
    }
  },
  created () {
    this.metatypeSelection = priorityValues[priorities.METATYPE][this.priorityRank][0].metatype;
    this.$store.commit('commitMetatype', this.selectedMetatype);
    this.$store.commit('commitSpecialPoints', this.specialPoints);
  }
}

</script>

<style>
select {
  width: 150px;
}
</style>
