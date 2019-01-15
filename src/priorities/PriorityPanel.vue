<template>
  <div class="priority-panel panel">
    <div class="panel-title">Priorities</div>
    <PriorityRow label="A" rowId="priority-a" selectId="select-a" :value="selectedPriorities[0]" @change="updatePriorities" />
    <PriorityRow label="B" rowId="priority-b" selectId="select-b" :value="selectedPriorities[1]" @change="updatePriorities" />
    <PriorityRow label="C" rowId="priority-c" selectId="select-c" :value="selectedPriorities[2]" @change="updatePriorities" />
    <PriorityRow label="D" rowId="priority-d" selectId="select-d" :value="selectedPriorities[3]" @change="updatePriorities" />
    <PriorityRow label="E" rowId="priority-e" selectId="select-e" :value="selectedPriorities[4]" @change="updatePriorities" />
    <div id="priority-details">
      Additional details about choices here (metatype attributes, special attribute details)
    </div>
  </div>
</template>

<script>
import PriorityRow from './PriorityRow.vue'
import priorities from '../data/priorities.js'

export default {
  name: 'PriorityPanel',
  components: { PriorityRow },
  computed: {
    selectedPriorities () {
      return this.$store.state.buildInfo.priorities;
    }
  },
  methods: {
    // Can only select one of each priority, and all must be selected.
    // When one is changed, swap the updated selection and what it's being changed to.
    updatePriorities (details) {
      // convert letter (a,b,c,d,e) to zero-based array index
      // lower-case a == code 97
      const changedIndex = details.priorityRank.charCodeAt(0) - 97;
      const newPriority = details.priority;
      const prevPriority = this.selectedPriorities[changedIndex];
      
      const newPriorities = this.selectedPriorities.map((cur, idx) => {      
        let returnPriority;

        if (idx !== changedIndex && cur == newPriority) {
          returnPriority = prevPriority;
        }
        else {
          returnPriority = cur;
        }

        return returnPriority;
      });
      
      newPriorities[changedIndex] = newPriority;      
      this.$store.dispatch('updatePriorities', newPriorities);
    }
  }
}
</script>

<style>
.priority-panel {
  width: min-content;
  grid-column: 2;
}
</style>
