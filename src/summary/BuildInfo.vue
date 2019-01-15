<template>
  <div id="build-info">
    <table id="build-info-table">
      <tr>
        <td>Name</td>
        <td>{{ character.name }}</td>
      </tr>
      <tr>
        <th colspan="2" scope="colgroup">Build Resources</th>
      </tr>
      <tr>
        <td>Attributes</td>
        <td>{{ attributePointsRemaining }}</td>
      </tr>
      <tr>
        <td>Special Attributes</td>
        <td>{{ specialPointsRemaining }}</td>
      </tr>
      <tr>
        <td>Skills / Skill Groups</td>
        <td>{{ skillPointsRemaining }} / {{ groupPointsRemaining }}</td>
      </tr>
      <tr>
        <td>Resources</td>
        <td>{{ resourcesRemaining }}</td>
      </tr>
      <tr>
        <td>Karma</td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'BuildInfo',
  computed: {
    buildInfo () {
      return this.$store.state.buildInfo;
    },
    character () {
      return this.$store.state.character;
    },
    ...mapGetters([
      'attributePointsRemaining',
      'specialPointsRemaining',
      'skillPointsRemaining',
      'groupPointsRemaining',
      'resourcesRemaining'
    ])
  }
}
</script>

<style>
#build-info {
  background-color: lightgrey;
  grid-column: 1;
  grid-row: 1 / 3;
}

#build-info-table {
  border-spacing: 5px;
  font-size: 10pt;
}
</style>
