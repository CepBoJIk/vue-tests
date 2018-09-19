<template>
  <div class="my-list">
    <h1 class="my-list__header">My List</h1>
    <RepositoryDisplay :data='data' :savedData='savedData' :hasRequestSent='hasRequestSent' :viewType='viewType'
        @data-toggled='$emit("data-toggled", $event)' :isMyList='true' />
  </div>
</template>

<script>
import RepositoryDisplay from './RepositoryDisplay.vue';

export default {
  name: 'MyList',
  components: {
    RepositoryDisplay,
  },
  props: [
    'data',
    'savedData',
    'hasRequestSent',
    'viewType',
  ],
};
</script>

<style scoped>
.my-list {
  font-family: 'Roboto', sans-serif;
}

.my-list__header {
  font-size: 36px;
  padding: 35px 0 20px;
}
</style>
