<template>
  <form class='searchForm' @submit.prevent='submitForm'>
    <Select :data='repositoriesTypes' :stateKey='"repositoryType"' v-on:change-state-value='changeFormStateValue'/>
    <Select :data='languageTypes' :stateKey='"repositoryLanguage"' v-on:change-state-value='changeFormStateValue'/>
    <div class="searchFrom__keywords">
      <label>
        <span :class='formSubmitted && !validateForm() ? "invalid": ""'>Type here for search</span>
        <input type="text" v-model="formProperties.keywords" />
      </label>
    </div>
    <button type="submit">search</button>
  </form>
</template>

<script>
import Select from './Select.vue';
import RestDataSource from '../rest.datasource';

export default {
  name: 'Form',
  components: { Select },
  data() {
    return {
      repositoriesTypes: ['Repositories'],
      languageTypes: ['javascript', 'css', 'html', 'php', 'ruby', 'c++', 'python', 'c#', 'java', 'go', 'haskel'],
      formProperties: {
        repositoryLanguage: '',
        repositoryType: '',
        keywords: '',
      },
      formSubmitted: false,
      datasource: new RestDataSource(),
    };
  },
  methods: {
    changeFormStateValue(value, property) {
      this.formProperties[property] = value;
    },
    validateForm() {
      const properties = Object.keys(this.formProperties);
      let validated = true;
      properties.forEach((key) => {
        const value = this.formProperties[key].trim();
        if (!value.length) validated = false;
      });

      return validated;
    },
    submitForm() {
      this.formSubmitted = true;

      if (!this.validateForm()) return false;

      this.sendRequest();

      this.formSubmitted = false;
      this.formProperties.keywords = '';
    },
    sendRequest() {
      this.$emit('request-status-change', false);
      const url = this.datasource.generateUrl(
        this.formProperties.repositoryType,
        this.formProperties.repositoryLanguage,
        this.formProperties.keywords,
      );

      this.datasource.getData(url).then(
        (response) => {
          this.$emit('data-upload', response.data.items);
          this.$emit('request-status-change', true);
        },
        (reject) => {
          console.log(reject);
        },
      );
    },
  },
};
</script>

<style scoped>
  @media screen and (max-width: 680px) {
    .searchForm {
      flex-direction: column;
    }

    .searchFrom__keywords {
      flex: 0 0 100%;
      width: 100%;
      padding-bottom: 20px;
    }
  }

  .searchForm {
    display: flex;
    align-items: center;
    padding: 25px 0;
  }

  .searchFrom__keywords {
    position: relative;
    flex: 1 1 auto;
    margin-right: 25px;
  }

  .searchFrom__keywords input {
    border: none;
    width: 100%;
    border-bottom: 2px solid #0366D6;
    padding: 6px 15px 6px 0;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
  }

  .searchFrom__keywords span {
    position: absolute;
    top: -12px;
    left: 0;
    color: #0366D6;
    font-size: 12px;
    font-family: 'Roboto', sans-serif;
  }

  .searchFrom__keywords span.invalid {
    color: red;
  }

  .searchFrom__keywords span.invalid + input {
    border-color: red;
  }

  .searchForm button[type='submit'] {
    border: none;
    line-height: 36px;
    padding: 0 36px;
    color: #fff;
    background-color: #0366D6;
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.25);
  }
</style>
