<template>
  <div class='repositories' :class="viewType === 'tile' ? 'repository_tile' : ''">
    <div class="repository" v-for='item of getData' :key='item.id'>
      <span class="repository__stars">{{changeStarsNumber(item.stargazers_count)}}</span>
      <span class="repository__language">{{item.language}}</span>
      <div @click='toggleSavedData(item)' class='repository__checkbox'
          :class="isSavedRepository(item) ? 'checked' : ''">
        <button :class="viewType === 'tile' ? '' : 'hidden'">
          {{isSavedRepository(item) ? 'REMOVE FROM LIST' : 'ADD TO LIST'}}
        </button>
      </div>
      <div class="repository__text">
        <h3 class="repository__name">{{item.full_name}}</h3>
        <p class="repository__description">{{item.description}}</p>
        <div class="repository__topics">
          <span v-for='(topic, index) of item.topics' :key='index'>{{topic}}</span>
        </div>
      </div>
    </div>

    <div class="repositories-not-found" v-if='(hasRequestSent || isMyList)  && getData.length === 0'>
      <h1>{{isMyList ? 'NO REPOSITORIES ADDED' : 'NO RESULTS FOUND'}}</h1>
      <p>{{isMyList ? null : 'select other parameters and try again'}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RepositoryDisplay',
    props: [
      'data',
      'savedData',
      'hasRequestSent',
      'viewType',
      'isMyList',
    ],
    computed: {
      getData() {
        return this.isMyList ? this.savedData : this.data;
      }
    },
    methods: {
      changeStarsNumber(value) {
        const numberString = String(value);
        if (numberString.length > 3) {
          const numberArray = numberString.split('');
          numberArray.splice(numberArray.length - 3, 3);
          return `${numberArray.join('')}k`;
        }
        return String(value);
      },

      toggleSavedData(item) {
        this.$emit('data-toggled', item);
      },

      isSavedRepository(item) {
        const savedRepo = this.savedData;
        let index = -1;

        savedRepo.forEach((elem, i) => {
          if (elem.id === item.id) {
            index = i;
          }
        })

        return !(index === -1);
      }
        }
      }
</script>

<style scoped>
.repositories {
  display: flex;
  flex-wrap: wrap;
  font-family: 'Roboto', sans-serif;
}

.repositories.repository_tile {
  width: 90%;
  margin: 0 auto;
}

.repository {
  display: flex;
  flex: 0 0 100%;
  max-width: 100%;
  position: relative;
  border-top: 1px solid #E1E4E8;
  padding: 30px 120px 30px 0;
}

.repositories.repository_tile .repository {
  flex: 0 1 48%;
  max-width: 48%;
  margin-right: 4%;
  margin-bottom: 30px;
  padding: 85px 30px 30px;
  border: 1px solid #E0E0E0;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.25);
}

.repositories.repository_tile .repository__text {
  margin-left: 0;
}

.repositories.repository_tile .repository__language {
  top: 25px;
  left: 30px;
}

.repositories.repository_tile .repository__stars {
  top: 20px;
  right: 30px;
}

.repositories.repository_tile .repository__checkbox {
  position: absolute;
  top: calc(100% - 70px);
  left: 0;
  background-color: transparent;
  width: 100%;
  text-align: center;
  height: auto;
  border: none;
  outline: none;
  cursor: default;
}

.repositories.repository_tile .repository__topics {
  padding-bottom: 90px;
}

.repository__checkbox button {
  line-height: 36px;
  padding: 0 25px;
  border: none;
  background-color: #0366D6;
  font-size: 14px;
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.25);
}

.repository__checkbox button.hidden {
  display: none;
}

.repositories.repository_tile .repository:nth-child(2n) {
  margin-right: 0;
}

.repository__stars {
  position: absolute;
  top: 15px;
  right: 30px;
  padding-left: 33px;
  font-size: 18px;
  line-height: 30px;
  background: url(../assets/star.svg) no-repeat left top;
}

.repository__language {
  position: absolute;
  right: 30px;
  bottom: 15px;
  font-size: 14px;
  color: #999999;
}

.repository__checkbox {
  flex: 0 0 auto;
  box-sizing: content-box;
  position: relative;
  top: 3px;
  width: 10px;
  height: 10px;
  border: 4px solid #fff;
  outline: 1px solid #0366D6;
  background-color: #fff;
  cursor: pointer;
}

.repository__checkbox.checked {
  background-color: #0366D6;
}

.repositories.repository_tile .repository__checkbox.checked button {
  background-color: #EB5757;
}

.repository__text {
  flex: 0 0 100%;
  margin-left: 15px;
  max-width: 100%;
}

.repository__name {
  font-size: 22px;
  color: #0366D6;
  font-weight: bold;
  padding-bottom: 4px;
  word-wrap: break-word;
}

.repository__description {
  font-size: 14px;
  padding-bottom: 25px;
  word-wrap: break-word;
}

.repository__topics {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}

.repository__topics span {
  font-size: 12px;
  padding: 0 10px;
  margin-right: 10px;
  margin-bottom: 5px;
  line-height: 27px;
  border-radius: 13px;
  background-color: #F1F8FE;
}

.repositories-not-found {
  text-align: center;
  background: url(../assets/github-ic.svg) no-repeat center center;
  min-height: 200px;
  margin-bottom: 20px;
  width: 100%;
}

.repositories-not-found h1 {
  padding-top: 60px;
  color: #0366D6;
  font-size: 36px;
  line-height: 1.3;
  font-weight: bold;
}

.repositories-not-found p {
  font-size: 24px;
}
</style>