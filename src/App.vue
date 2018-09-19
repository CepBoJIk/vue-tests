<template>
  <div id="app">
    <div class="wrapper">
      <div class="content">
        <header>
          <div class="logo">
            <img class='logo__img' src='./assets/logo.svg' alt='logo'/>
            <div class="logo__text">
              <h1>GitHub</h1>
              <p>search</p>
            </div>
          </div>
          <nav>
            <router-link to="/search">Search</router-link>
            <router-link to="/my-list">My List</router-link>
          </nav>
        </header>
        <div class="search">
          <router-view @data-upload='data = arguments[0]' @request-status-change='isRequestSent = arguments[0]'
              @view-changed='repositoryViewType = arguments[0]' @data-toggled='toggleSavedData'
              :repositoryViewType='repositoryViewType' :data='data' :savedData='savedData' :hasRequestSent='isRequestSent'
              :viewType='repositoryViewType'  >
          </router-view>
        </div>
      </div>

      <footer>
        <p>copyright @lodossteam  2018</p>
      </footer>
    </div>
  </div>
</template>

<script>
import SearchRepository from './components/SearchRepository.vue';
import MyList from './components/MyList.vue';

export default {
  name: 'app',
  components: {
    SearchRepository,
    MyList,
  },
  data() {
    return {
      data: [],
      isRequestSent: false,
      repositoryViewType: 'line',
      savedData: [],
    };
  },
  methods: {
    toggleSavedData(data) {
      let index = -1;

      this.savedData.forEach((item, i) => {
        if (item.id === data.id) index = i;
      });

      if (index === -1) {
        this.savedData.push(data);
      } else {
        const newData = this.savedData.filter(item => item.id !== data.id);
        this.savedData = newData;
      }
    },
  },
};
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700');

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  html,
  body {
    height: 100%;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  input, button, select {
    outline: none;
  }

  * {
    box-sizing: border-box;
  }

  #app {
    height: 100%;
  }

  .wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.content {
  flex: 1 0 auto;
}

.search {
  padding: 0 10%;
}

header {
  display: flex;
  align-items: center;
  background-color: #3C4146;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 1.2;
  padding: 0 30px;
}

.logo {
  display: flex;
  flex: 0 1 100%;
  align-items: center;
  padding: 6px 0;
}

.logo__img {
  width: 42px;
  margin-right: 10px;
}

.logo__text {
  display: inline-block;
  vertical-align: top;
}

.logo__text h1 {
  color: #fff;
  font-size: 24px;
}

.logo__text p {
  color: #B3BCC7;
  line-height: 0.8;
}

nav {
  flex: 0 0 auto;
}

nav a {
  font-size: 16px;
  color: #E0E0E0;
  text-decoration: none;
  margin-right: 20px;
}

nav a:last-child {
  margin-right: 0;
}

nav a:hover,
nav a.router-link-exact-active {
  color: #fff;
}

footer {
  background-color: #3C4146;
  text-align: center;
  color: #FFF;
}

footer p {
  line-height: 40px;
  flex: 0 0 auto;
  font-family: 'Roboto', sans-serif;
}
</style>
