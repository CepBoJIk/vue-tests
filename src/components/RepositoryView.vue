<template>
  <div class="viewFilter">
    <button @click='changeView("tile")' class='viewFilter__tile'
          :class="repositoryViewType === 'tile' ? 'active' : ''">
      <svg  width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0H14V14H0V0Z" fill="#E0E0E0"/>
        <path d="M18 0H32V14H18V0Z" fill="#E0E0E0"/>
        <path d="M0 17H14V31H0V17Z" fill="#E0E0E0"/>
        <path d="M18 17H32V31H18V17Z" fill="#E0E0E0"/>
      </svg>
    </button>
    <button @click='changeView("line")' class='viewFilter__line'
          :class="repositoryViewType === 'line' ? 'active' : ''">
      <svg width="33" height="29" viewBox="0 0 33 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line y1="2" x2="33" y2="2" stroke="#E0E0E0" stroke-width="4"/>
        <line y1="15" x2="33" y2="15" stroke="#E0E0E0" stroke-width="4"/>
        <line y1="27" x2="33" y2="27" stroke="#E0E0E0" stroke-width="4"/>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: 'RepositoryView',
  props: [
    'repositoryViewType',
  ],
  methods: {
    changeView(view) {
      this.$emit('view-changed', view);
    },
  },
};
</script>

<style scoped>
.viewFilter {
  display: flex;
  justify-content: flex-end;
  padding-bottom: 30px;
}

.viewFilter__tile,
.viewFilter__line {
  border: none;
  padding: 0;
  margin: 0;
  background-color: transparent;
  cursor: pointer;
}

.viewFilter__tile {
  margin-right: 10px;
}

.viewFilter button.active path {
  fill: #3C4146;
}

.viewFilter button.active line {
  stroke: #3C4146;
}
</style>
