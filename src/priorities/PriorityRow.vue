<template>
  <div class="priority-row" :id="rowId">
    <label class="priority-label" :for="selectId">{{ label }}</label>
    <select :id="selectId" class="priority-select" @change="handleChange">
      <option v-for="priority in priorities" :value="priority.toString()" :selected="priority == value">{{ priority.name }}</option>
    </select>
    <component :is="priorityDetail" :priorityRank="rowId[rowId.length - 1]" :priority="selectedPriority" />
  </div>
</template>

<script>
import priorities from '../data/priorities.js'
import AttributeDetails from './AttributeDetails.vue'
import SkillDetails from './SkillDetails.vue'
import ResourceDetails from './ResourceDetails.vue'
import MetatypeDetails from './MetatypeDetails.vue'
import SpecialDetails from './SpecialDetails.vue'

export default {
  name: 'PriorityRow',
  components: {
    AttributeDetails,
    SkillDetails,
    ResourceDetails,
    MetatypeDetails,
    SpecialDetails,
  },
  props: { 
    rowId: String,
    selectId: String,
    value: Object,
    label: String
  },
  data () {
    return {
      priorities: priorities,
      selectedPriority: this.value
    }
  },
  methods: {
    handleChange (event) {
      this.selectedPriority = priorities[event.target.value];
      this.$emit('change', { priorityRank: this.rowId[this.rowId.length - 1], priority: this.selectedPriority });
    }
  },
  computed: {
    // used to dynamically show the details of a priority selection
    priorityDetail () {
      let component;

      if (this.value == priorities.ATTRIBUTES) {
        component = 'AttributeDetails';
      }
      else if (this.value == priorities.SKILLS) {
        component = 'SkillDetails';
      }
      else if (this.value == priorities.METATYPE) {
        component = 'MetatypeDetails';
      }
      else if (this.value == priorities.RESOURCES) {
        component = 'ResourceDetails';
      }
      else if (this.value == priorities.SPECIAL) {
        component = 'SpecialDetails';
      }

      return component;
    }
  }
}
</script>

<style>
.priority-row {
  display: grid;
  grid-template-columns: min-content 1fr 1fr;
  grid-auto-flow: row;
  column-gap: 10px;
  font-size: 10pt;
  width: min-content;
  padding-top: 5px;
}

select.priority-select {
  width: 150px;
}
</style>
