import Vue from 'vue';
import VueRouter from 'vue-router';
import { CircleSpinner } from 'vue-spinners';
import VModal from 'vue-js-modal';
import vueEventCalendar from 'vue-event-calendar';
import { Icon } from 'leaflet';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';
import Vuelidate from 'vuelidate';

import store from './store';
import App from './App.vue';
import ClientMain from '@/pages/ClientMain';

import 'vue-event-calendar/dist/style.css';
import 'leaflet/dist/leaflet.css';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(vueEventCalendar, { locale: 'ru', color: '#cf5353' });
Vue.use(VModal);
Vue.use(Vuelidate);

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

/* eslint-disable no-underscore-dangle */
delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});
