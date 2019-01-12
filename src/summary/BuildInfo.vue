<template>
  <div id="build-info">
    Name: {{ character.name }}
    Attribute Points Remaining: {{ buildInfo.attributePointsRemaining }}
  </div>
</template>

<script>
export default {
  name: 'BuildInfo',
  computed: {
    buildInfo () {
      return this.$store.state.buildInfo
    },
    character () {
      return this.$store.state.character
    }
  }
}
</script>

<style>

</style>
