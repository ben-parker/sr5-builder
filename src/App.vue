<template>
  <div id="app">
    <BuildInfo />
    <PriorityPanel />
    <AttributePanel />
  </div>
</template>

<script>
import AttributePanel from './attributes/AttributePanel.vue'
import BuildInfo from './summary/BuildInfo.vue'
import PriorityPanel from './priorities/PriorityPanel.vue'

export default {
  name: 'app',
  components: {
    AttributePanel,
    BuildInfo,
    PriorityPanel,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
  display: grid;
  gap: 20px 10px;
}

.panel-title {
  font-size: 16pt;
}
</style>
