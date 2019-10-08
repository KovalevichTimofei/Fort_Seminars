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

import ClientMain from "@/components/ClientMain";

import SignIn from "@/components/SignIn";
import AdminMain from "@/components/AdminMain";
import SeminarsList from "@/components/SeminarsList";
import ListenersList from "@/components/ListenersList";

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/signup', component: ClientMain },
    { path: '/signin', component: SignIn },
    { path: '/admin', component: AdminMain,
      children: [
        {
          path: 'seminars',
          component: SeminarsList,
        },
        {
          path: 'listeners',
          component: ListenersList,
        }
      ]}
  ]
});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
