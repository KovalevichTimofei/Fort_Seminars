import Vue from 'vue';
import App from './App.vue';
import store from './store';
import { CircleSpinner } from 'vue-spinners';

Vue.config.productionTip = false;
Vue.component('CircleSpinner', CircleSpinner);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
