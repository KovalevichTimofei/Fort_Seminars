import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import store from './store';
import { CircleSpinner } from 'vue-spinners';
import VModal from 'vue-js-modal'

import VueMaterial from "vue-material";

/*import {
  MdDrawer,
  MdButton,
  MdContent,
  MdToolbar,
  MdIcon,
  MdApp,
  MdTable,
} from 'vue-material/dist/components';*/

Vue.config.productionTip = false;
Vue.component('CircleSpinner', CircleSpinner);
Vue.use(VModal);
Vue.use(VueRouter);

Vue.use(VueMaterial);

/*Vue.use(MdDrawer);
Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdIcon);
Vue.use(MdApp);
Vue.use(MdToolbar);
Vue.use(MdTable);*/

import ClientMain from "@/pages/ClientMain";

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: ClientMain },
  ]
});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
