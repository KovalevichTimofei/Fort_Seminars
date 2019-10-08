import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import store from './store';
import { CircleSpinner } from 'vue-spinners';
import VModal from 'vue-js-modal'

Vue.config.productionTip = false;
Vue.component('CircleSpinner', CircleSpinner);
Vue.use(VModal);
Vue.use(VueRouter);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
