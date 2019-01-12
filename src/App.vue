<template>
  <div id="app">
    <div class="panel-title">Attributes</div>
    <AttributePanel />
  </div>
</template>

<script>
import AttributePanel from './attributes/AttributePanel.vue'

export default {
  name: 'app',
  components: {
    AttributePanel,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}

.panel-title {
  font-size: 16pt;
}
</style>
