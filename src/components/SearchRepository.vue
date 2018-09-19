<template>
  <div>
    <Form @data-upload='$emit("data-upload", arguments[0])' @request-status-change='$emit("request-status-change", arguments[0])'/>
    <RepositoryView :repositoryViewType='repositoryViewType' @view-changed='$emit("view-changed", arguments[0])'/>
    <RepositoryDisplay :data='data' :savedData='savedData' :hasRequestSent='hasRequestSent' :viewType='viewType'
        @data-toggled='$emit("data-toggled", $event)' />
  </div>
</template>

<script>
import Form from './Form.vue';
import RepositoryView from './RepositoryView.vue';
import RepositoryDisplay from './RepositoryDisplay.vue';

export default {
  name: 'SearchRepository',
  props: [
    'repositoryViewType',
    'data',
    'savedData',
    'hasRequestSent',
    'viewType',
  ],
  components: {
    Form,
    RepositoryView,
    RepositoryDisplay,
  },
};
</script>

<style scoped>

</style>
