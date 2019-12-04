import Vue from 'vue';
import VueRouter from 'vue-router';
import { CircleSpinner } from 'vue-spinners';
import VModal from 'vue-js-modal';
import Vuex from 'vuex';
import vueEventCalendar from 'vue-event-calendar';

import store from './store';
import App from './App.vue';
import ClientMain from '@/pages/ClientMain';

import 'vue-event-calendar/dist/style.css';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuex);

Vue.use(vueEventCalendar, { locale: 'ru', color: '#cf5353' });
Vue.use(VModal);
Vue.component('CircleSpinner', CircleSpinner);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: ClientMain },
  ],
});

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
