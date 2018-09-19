import VueRouter from 'vue-router';
import Vue from 'vue';
import App from './App.vue';

import SearchRepository from './components/SearchRepository.vue';
import MyList from './components/MyList.vue';

const routes = [
  { path: '/search', component: SearchRepository },
  { path: '/my-list', component: MyList },
  { path: '**', redirect: '/search' },
];

const router = new VueRouter({ routes });

Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
